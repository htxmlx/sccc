import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Google Generative AI with the API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

// Define models with fallback options
const MODELS = {
    PRIMARY: "gemini-1.5-flash",
    FALLBACK: "gemini-pro", // Fallback to a more stable model
};

// Retry configuration
const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 1000; // Start with 1 second delay

// Helper function to wait
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Function to generate content with retries and fallback
async function generateWithRetry(
    chat: any,
    message: string,
    retryCount = 0,
    useFallbackModel = false
) {
    try {
        const result = await chat.sendMessage(message);
        return result.response.text();
    } catch (error: any) {
        console.error(
            `Attempt ${retryCount + 1} failed:`,
            error.message || error
        );

        // Check if it's an overload error
        const isOverloaded =
            error.message?.includes("overloaded") ||
            error.message?.includes("503") ||
            error.status === 503;

        // If we haven't reached max retries, try again with exponential backoff
        if (retryCount < MAX_RETRIES) {
            const delay = RETRY_DELAY_MS * Math.pow(2, retryCount);
            console.log(`Retrying in ${delay}ms...`);
            await wait(delay);
            return generateWithRetry(
                chat,
                message,
                retryCount + 1,
                useFallbackModel
            );
        }
        // If we've exhausted retries but haven't tried fallback model yet
        else if (!useFallbackModel) {
            console.log("Switching to fallback model...");
            // Create a new chat with the fallback model
            const fallbackModel = genAI.getGenerativeModel({
                model: MODELS.FALLBACK,
            });
            const fallbackChat = fallbackModel.startChat({
                generationConfig: {
                    temperature: 0.7,
                    topP: 0.9,
                    topK: 40,
                },
            });

            // Try with the fallback model
            return generateWithRetry(fallbackChat, message, 0, true);
        }

        // If all else fails, throw the error
        throw error;
    }
}

export async function POST(req: Request) {
    try {
        const { messages, language } = await req.json();

        // System prompt based on language with markdown formatting instruction
        const systemPrompt =
            language === "hiligaynon"
                ? "Ikaw isa ka manugtudlo sang Bibliya kag manugbulig sa paghimo sang sermon. Sabta ang mga pamangkot sa Hiligaynon. Maghatag sang Biblical nga mga reference kag practical nga mga application. Gamiton mo ang markdown formatting para sa imo mga sabat, pareho sang # para sa headings, * para sa emphasis, kag > para sa quotes."
                : "You are a Bible teacher and sermon helper. Provide Biblical references and practical applications in your responses. Use proper markdown formatting for your responses, such as # for headings, * for emphasis, and > for quotes.";

        // Select the model based on current state
        const modelName = MODELS.PRIMARY;
        console.log(`Using model: ${modelName}`);
        const model = genAI.getGenerativeModel({ model: modelName });

        // Convert messages to Gemini's chat format, but don't include the system prompt
        // in the history - we'll prepend it to the first user message instead
        const chatHistory = messages.map((m: any) => ({
            role: m.role === "user" ? "user" : "model",
            parts: [{ text: m.content }],
        }));

        // Start a chat session without any initial history
        const chat = model.startChat({
            generationConfig: {
                temperature: 0.7,
                topP: 0.9,
                topK: 40,
            },
        });

        // Process the chat history sequentially to maintain the conversation
        let response = "";

        // If there are previous messages, replay the conversation
        if (chatHistory.length > 1) {
            // Send all messages except the last one to build up the conversation
            for (let i = 0; i < chatHistory.length - 1; i++) {
                const msg = chatHistory[i];
                if (msg.role === "user") {
                    // For the first user message, prepend the system prompt
                    const messageText =
                        i === 0
                            ? `${systemPrompt}\n\nUser query: ${msg.parts[0].text}`
                            : msg.parts[0].text;

                    await chat.sendMessage(messageText);
                }
                // We don't need to send model messages as they're responses
            }
        }

        // Get the last message (the new user message)
        const lastMessage = chatHistory[chatHistory.length - 1];

        // If this is the first message in the conversation, prepend the system prompt
        let userMessage = lastMessage.parts[0].text;
        if (chatHistory.length === 1) {
            userMessage = `${systemPrompt}\n\nUser query: ${userMessage}`;
        }

        // If language is Hiligaynon and the message is in English, translate the request
        if (language === "hiligaynon" && !userMessage.includes("Hiligaynon:")) {
            userMessage = `Please respond in Hiligaynon to this request: ${userMessage}`;
        }

        // Generate content with retry logic for the final user message
        response = await generateWithRetry(chat, userMessage);

        // Return the response
        return Response.json({
            role: "assistant",
            content: response,
            model: modelName,
        });
    } catch (error: any) {
        console.error("Error generating response:", error);

        // Provide a more helpful error message
        let errorMessage = "Failed to generate response";
        let errorDetails = String(error);

        if (error.message?.includes("overloaded")) {
            errorMessage =
                "The AI service is currently experiencing high demand";
            errorDetails = "Please try again in a few moments";
        }

        return Response.json(
            {
                error: errorMessage,
                details: errorDetails,
                suggestion:
                    "You can try again with a simpler question or try later when the service is less busy.",
            },
            { status: 500 }
        );
    }
}
