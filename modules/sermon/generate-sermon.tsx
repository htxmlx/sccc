"use client";

import type React from "react";

import { useState, useCallback, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import {
    Trash2,
    BookOpen,
    Languages,
    Lightbulb,
    AlertTriangle,
    RefreshCw,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import ReactMarkdown from "react-markdown";

type Message = {
    role: "user" | "assistant";
    content: string;
    id: string;
    model?: string;
};

type ErrorState = {
    message: string;
    details?: string;
    suggestion?: string;
};

type SuggestionCategory = {
    name: string;
    suggestions: string[];
};

export default function GenerateSermonsSection() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<ErrorState | null>(null);
    const [language, setLanguage] = useState<"english" | "hiligaynon">(
        "english"
    );
    const [retryMessage, setRetryMessage] = useState<Message | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [showAllSuggestions, setShowAllSuggestions] = useState(false);

    // Sermon prompt suggestions
    const suggestionCategories: SuggestionCategory[] = [
        {
            name: "Themes",
            suggestions: [
                "Create a sermon outline on God's love and grace",
                "Help me write a sermon about forgiveness",
                "Sermon ideas about faith during difficult times",
                "Biblical passages about community and fellowship",
                "Sermon on the importance of prayer",
            ],
        },
        {
            name: "Occasions",
            suggestions: [
                "Easter Sunday sermon ideas",
                "Christmas message about the birth of Christ",
                "Wedding sermon about Christian marriage",
                "Funeral sermon of comfort and hope",
                "Youth Sunday sermon for teenagers",
            ],
        },
        {
            name: "Bible Studies",
            suggestions: [
                "Explain the Beatitudes in Matthew 5",
                "Sermon points from the Parable of the Prodigal Son",
                "Key lessons from the Book of Psalms",
                "Sermon based on Romans 8:28",
                "Explain 1 Corinthians 13 for a sermon on love",
            ],
        },
    ];

    // Auto-scroll to bottom when messages change
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    const handleSubmit = async (
        e: React.FormEvent,
        retryingMessage?: Message
    ) => {
        e.preventDefault();

        // Clear any previous errors
        setError(null);

        // If we're retrying a message, use that content, otherwise use the input
        const messageContent = retryingMessage
            ? retryingMessage.content
            : input;

        if (!messageContent.trim()) return;

        // If not retrying, add the user message to the chat
        if (!retryingMessage) {
            const userMessage: Message = {
                role: "user",
                content: messageContent,
                id: Date.now().toString(),
            };

            setMessages((prev) => [...prev, userMessage]);
            setInput("");
        }

        setIsLoading(true);
        setRetryMessage(null);

        try {
            // Send the messages to the API
            const response = await fetch("/api/sermon", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    messages: retryingMessage
                        ? messages // If retrying, use existing messages
                        : [
                              ...messages,
                              { role: "user", content: messageContent },
                          ], // Otherwise add new message
                    language,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to get response");
            }

            // Add assistant message to the chat
            const assistantMessage: Message = {
                role: "assistant",
                content: data.content,
                id: (Date.now() + 1).toString(),
                model: data.model,
            };

            setMessages((prev) => [...prev, assistantMessage]);
        } catch (error: any) {
            console.error("Error:", error);

            // Set the error state with detailed information
            setError({
                message: error.message || "An error occurred",
                details: error.details,
                suggestion: error.suggestion || "Please try again later",
            });

            // Store the failed message for retry
            if (!retryingMessage) {
                setRetryMessage({
                    role: "user",
                    content: messageContent,
                    id: Date.now().toString(),
                });
            } else {
                setRetryMessage(retryingMessage);
            }
        } finally {
            setIsLoading(false);
        }
    };

    const clearChat = () => {
        setMessages([]);
        setError(null);
        setRetryMessage(null);
    };

    const usePromptSuggestion = useCallback((suggestion: string) => {
        setInput(suggestion);
    }, []);

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "english" ? "hiligaynon" : "english"));
    };

    const handleRetry = (e: React.FormEvent) => {
        if (retryMessage) {
            handleSubmit(e, retryMessage);
        }
    };

    const handleSuggestionClick = (suggestion: string) => {
        setInput(suggestion);
    };

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <div className="flex flex-1 container mx-auto p-4 pt-8">
                {/* Main Chat Area */}
                <div className="w-full max-w-3xl mx-auto">
                    <Card className="h-[80vh] flex flex-col">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div className="flex items-center gap-2">
                                <BookOpen className="h-5 w-5" />
                                <div>
                                    <CardTitle>Sermon Assistant</CardTitle>
                                    <CardDescription>
                                        {language === "english"
                                            ? "Ask for help with sermon preparation, Bible study, or theological questions"
                                            : "Pangayo sang bulig sa paghanda sang sermon, pagtuon sang Bibliya, ukon theological nga mga pamangkot"}
                                    </CardDescription>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Badge
                                    variant="outline"
                                    className={
                                        language === "english"
                                            ? "bg-blue-100"
                                            : "bg-green-100"
                                    }
                                >
                                    {language === "english"
                                        ? "English"
                                        : "Hiligaynon"}
                                </Badge>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                onClick={toggleLanguage}
                                                title="Toggle language"
                                            >
                                                <Languages className="h-4 w-4" />
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Toggle response language</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={clearChat}
                                    disabled={
                                        messages.length === 0 || isLoading
                                    }
                                    title="Clear chat"
                                >
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-1 overflow-y-auto space-y-4 h-0">
                            {messages.length === 0 && !error && (
                                <div className="text-center text-muted-foreground my-8 flex flex-col items-center gap-2">
                                    <BookOpen className="h-12 w-12 text-primary/30" />
                                    <p className="text-lg font-medium">
                                        Welcome to Sermon Helper
                                    </p>
                                    <p className="max-w-md">
                                        {language === "english"
                                            ? "Ask for help with sermon preparation, Bible study, or theological questions. You can also use the suggestion buttons below."
                                            : "Pangayo sang bulig sa paghanda sang sermon, pagtuon sang Bibliya, ukon theological nga mga pamangkot. Pwede ka man maggamit sang mga suggestion buttons sa idalom."}
                                    </p>
                                </div>
                            )}

                            {messages.map((m) => (
                                <div
                                    key={m.id}
                                    className={`flex ${
                                        m.role === "user"
                                            ? "justify-end"
                                            : "justify-start"
                                    }`}
                                >
                                    <div
                                        className={`max-w-[80%] rounded-lg p-3 ${
                                            m.role === "user"
                                                ? "bg-primary text-primary-foreground"
                                                : "bg-card border border-border shadow-sm"
                                        }`}
                                    >
                                        {m.role === "user" ? (
                                            <div>{m.content}</div>
                                        ) : (
                                            <div className="prose prose-sm dark:prose-invert max-w-none">
                                                <ReactMarkdown>
                                                    {m.content}
                                                </ReactMarkdown>
                                                {m.model && (
                                                    <div className="mt-2 text-xs text-muted-foreground">
                                                        Generated with {m.model}
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}

                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="max-w-[80%] rounded-lg p-3 bg-card border border-border shadow-sm">
                                        <div className="flex space-x-2">
                                            <div
                                                className="w-2 h-2 rounded-full bg-primary/40 animate-bounce"
                                                style={{
                                                    animationDelay: "0ms",
                                                }}
                                            ></div>
                                            <div
                                                className="w-2 h-2 rounded-full bg-primary/40 animate-bounce"
                                                style={{
                                                    animationDelay: "150ms",
                                                }}
                                            ></div>
                                            <div
                                                className="w-2 h-2 rounded-full bg-primary/40 animate-bounce"
                                                style={{
                                                    animationDelay: "300ms",
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {error && (
                                <Alert variant="destructive" className="mb-4">
                                    <AlertTriangle className="h-4 w-4" />
                                    <AlertTitle>
                                        Error: {error.message}
                                    </AlertTitle>
                                    <AlertDescription>
                                        <p>{error.details}</p>
                                        {error.suggestion && (
                                            <p className="mt-2">
                                                {error.suggestion}
                                            </p>
                                        )}
                                        {retryMessage && (
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="mt-2"
                                                onClick={handleRetry}
                                                disabled={isLoading}
                                            >
                                                <RefreshCw className="h-4 w-4 mr-2" />
                                                Retry
                                            </Button>
                                        )}
                                    </AlertDescription>
                                </Alert>
                            )}

                            {/* Invisible element for auto-scrolling */}
                            <div ref={messagesEndRef} />
                        </CardContent>
                        <CardFooter className="flex flex-col space-y-4">
                            {/* Sermon Ideas Section */}
                            <div className="w-full">
                                <h3 className="font-medium mb-2 flex items-center gap-2 text-sm">
                                    <Lightbulb className="h-4 w-4" />
                                    Sermon Ideas
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {suggestionCategories.flatMap((category) =>
                                        category.suggestions
                                            .slice(0, 2)
                                            .map((suggestion, index) => (
                                                <Button
                                                    key={`${category.name}-${index}`}
                                                    variant="outline"
                                                    className="text-xs"
                                                    size="sm"
                                                    onClick={() =>
                                                        handleSuggestionClick(
                                                            suggestion
                                                        )
                                                    }
                                                >
                                                    {suggestion.length > 30
                                                        ? suggestion.substring(
                                                              0,
                                                              27
                                                          ) + "..."
                                                        : suggestion}
                                                </Button>
                                            ))
                                    )}
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="text-xs"
                                        onClick={() =>
                                            setShowAllSuggestions(
                                                !showAllSuggestions
                                            )
                                        }
                                    >
                                        {showAllSuggestions
                                            ? "Show Less"
                                            : "More Ideas..."}
                                    </Button>
                                </div>

                                {/* Expanded Suggestions */}
                                {showAllSuggestions && (
                                    <div className="mt-3 border-t pt-3">
                                        <Tabs
                                            defaultValue={suggestionCategories[0].name.toLowerCase()}
                                        >
                                            <TabsList className="w-full">
                                                {suggestionCategories.map(
                                                    (category) => (
                                                        <TabsTrigger
                                                            key={category.name}
                                                            value={category.name.toLowerCase()}
                                                            className="flex-1 text-xs"
                                                        >
                                                            {category.name}
                                                        </TabsTrigger>
                                                    )
                                                )}
                                            </TabsList>
                                            {suggestionCategories.map(
                                                (category) => (
                                                    <TabsContent
                                                        key={category.name}
                                                        value={category.name.toLowerCase()}
                                                        className="mt-2"
                                                    >
                                                        <div className="grid grid-cols-2 gap-2">
                                                            {category.suggestions.map(
                                                                (
                                                                    suggestion,
                                                                    index
                                                                ) => (
                                                                    <Button
                                                                        key={
                                                                            index
                                                                        }
                                                                        variant="outline"
                                                                        className="justify-start h-auto py-2 px-3 text-left text-xs"
                                                                        onClick={() =>
                                                                            handleSuggestionClick(
                                                                                suggestion
                                                                            )
                                                                        }
                                                                    >
                                                                        {
                                                                            suggestion
                                                                        }
                                                                    </Button>
                                                                )
                                                            )}
                                                        </div>
                                                    </TabsContent>
                                                )
                                            )}
                                        </Tabs>
                                    </div>
                                )}
                            </div>

                            {/* Input Form */}
                            <form
                                onSubmit={(e) => handleSubmit(e)}
                                className="flex w-full space-x-2"
                            >
                                <Input
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder={
                                        language === "english"
                                            ? "Type your sermon question..."
                                            : "I-type ang imo pamangkot..."
                                    }
                                    className="flex-grow"
                                    disabled={isLoading}
                                />
                                <Button type="submit" disabled={isLoading}>
                                    {isLoading ? "Sending..." : "Send"}
                                </Button>
                            </form>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
}
