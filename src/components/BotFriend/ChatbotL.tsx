import React, { useState } from "react";
import Groq from "groq-sdk";
import { useUser } from "@/lib/hooks/useUser";

// Initialize Groq with API Key
const groq = new Groq({
    apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY,
    dangerouslyAllowBrowser: true,
});

interface Message {
    role: "user" | "bot";
    content: string;
}

const ChatBot: React.FC = () => {
    const [userMessage, setUserMessage] = useState<string>(""); // For user's input
    const [messages, setMessages] = useState<Message[]>([]); // Store chat messages
    const [isLoading, setIsLoading] = useState<boolean>(false); // Loading state
    const { data } = useUser(); // Fetch current user data

    // Function to generate a system prompt with user's goals
    const generateSystemPrompt = () => {
        if (!data?.payload?.goals) {
            return "You are chatting with a friendly assistant to help with your goals.";
        }

        const userGoals = data.payload.goals.map((goal: any) => goal.goalName);
        return `You are a friendly assistant for the user's health and wellness journey. The user is working on the following goals: ${userGoals.join(
            ", "
        )}. Please provide supportive, helpful, and motivational advice. Keep your answers conscise and not superfluous, act as if you are texting with a friend`;
    };

    // Function to send a message using Groq SDK
    const sendMessage = async () => {
        if (!userMessage.trim()) return; // Prevent sending empty messages

        setIsLoading(true); // Start loading
        setMessages((prev) => [
            ...prev,
            { role: "user", content: userMessage },
        ]); // Add user message

        try {
            const chatCompletion = await groq.chat.completions.create({
                messages: [
                    {
                        role: "system",
                        content: generateSystemPrompt(), // Start the chat with system prompt
                    },
                    {
                        role: "user",
                        content: userMessage, // Send user's message
                    },
                ],
                model: "llama3-70b-8192", // Specify the model
            });

            const botResponse =
                chatCompletion.choices[0]?.message?.content ||
                "No response from the bot.";
            setMessages((prev) => [
                ...prev,
                { role: "bot", content: botResponse },
            ]); // Add bot response
        } catch (error) {
            console.error("Error fetching data from Groq:", error);
            setMessages((prev) => [
                ...prev,
                { role: "bot", content: "Error: Could not fetch the data." },
            ]); // Error handling
        } finally {
            setUserMessage(""); // Clear input field
            setIsLoading(false); // End loading state
        }
    };

    // Function to handle Enter key press
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && !isLoading) {
            sendMessage(); // Trigger message submission when Enter is pressed
        }
    };

    return (
        <div style={styles.chatContainer}>
            <h2 style={styles.header}>BotFriend Chat</h2>

            <div style={styles.chatBox}>
                {/* Display all messages in chat bubbles */}
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        style={
                            msg.role === "user"
                                ? styles.userMessage
                                : styles.botMessage
                        }
                    >
                        <strong>{msg.role === "user" ? "You" : "Bot"}:</strong>{" "}
                        {msg.content}
                    </div>
                ))}
                {/* Loader for bot thinking */}
                {isLoading && (
                    <div style={styles.botMessage}>
                        <strong>Bot:</strong> Bot is thinking...
                    </div>
                )}
            </div>

            {/* Input field and send button */}
            <div style={styles.inputArea}>
                <input
                    style={styles.input}
                    type="text"
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    onKeyDown={handleKeyPress} // Add keydown listener for "Enter" key
                    placeholder="Ask the bot something..."
                />
                <button
                    style={
                        isLoading
                            ? { ...styles.button, ...styles.disabledButton }
                            : styles.button
                    }
                    onClick={sendMessage}
                    disabled={isLoading}
                >
                    {isLoading ? "Sending..." : "Send"}
                </button>
            </div>
        </div>
    );
};

// Inline styles object
const styles = {
    chatContainer: {
        width: "100%",
        maxWidth: "600px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        backgroundColor: "#ffffff",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    },
    header: {
        fontSize: "24px",
        marginBottom: "20px",
        textAlign: "center" as const,
    },
    chatBox: {
        maxHeight: "400px",
        overflowY: "auto" as const,
        marginBottom: "20px",
        padding: "10px",
        backgroundColor: "#f4f6f8",
        borderRadius: "10px",
    },
    userMessage: {
        backgroundColor: "#e1f5fe",
        padding: "10px",
        borderRadius: "10px",
        margin: "10px 0",
        textAlign: "right" as const,
        maxWidth: "80%",
        marginLeft: "auto" as const,
    },
    botMessage: {
        backgroundColor: "#e8f5e9",
        padding: "10px",
        borderRadius: "10px",
        margin: "10px 0",
        textAlign: "left" as const,
        maxWidth: "80%",
    },
    inputArea: {
        display: "flex",
        justifyContent: "center" as const,
        alignItems: "center" as const,
        gap: "10px",
    },
    input: {
        flex: 1,
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        width: "70%",
        fontSize: "16px",
    },
    button: {
        padding: "10px 20px",
        backgroundColor: "#007BFF",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
    },
    disabledButton: {
        backgroundColor: "#ccc",
        cursor: "not-allowed",
    },
};

export default ChatBot;
