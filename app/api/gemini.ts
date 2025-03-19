import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Google Generative AI with the API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

// Get the model
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        // Convert messages to Gemini's chat format
        const chatHistory = messages.map((m: any) => ({
            role: m.role === "user" ? "user" : "model",
            parts: [{ text: m.content }],
        }));

        // Start a chat session
        const chat = model.startChat({
            history: chatHistory.slice(0, -1), // All messages except the last one
            generationConfig: {
                temperature: 0.7,
                topP: 0.8,
                topK: 40,
            },
        });

        // Get the last message (the new user message)
        const lastMessage = chatHistory[chatHistory.length - 1];

        // Generate a response to the last message
        const result = await chat.sendMessage(lastMessage.parts[0].text);
        const text = result.response.text();

        // Return the response
        return Response.json({ role: "assistant", content: text });
    } catch (error) {
        console.error("Error generating response:", error);
        return Response.json(
            { error: "Failed to generate response", details: String(error) },
            { status: 500 }
        );
    }
}
