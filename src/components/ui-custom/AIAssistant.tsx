
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./Card";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

interface AIAssistantProps {
  className?: string;
}

export const AIAssistant: React.FC<AIAssistantProps> = ({ className }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<{ role: "user" | "ai"; content: string }[]>([
    { role: "ai", content: "Hello! I'm your AI fitness assistant. How can I help with your fitness or nutrition goals today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    const userMessage = { role: "user" as const, content: message };
    setMessages([...messages, userMessage]);
    setMessage("");
    setIsLoading(true);
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = { 
        role: "ai" as const, 
        content: getAIResponse(message) 
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };
  
  const getAIResponse = (message: string): string => {
    // This is a simulated AI response. In a real app, this would call an AI API.
    const responses = [
      "I recommend focusing on protein intake to support your muscle recovery.",
      "For weight loss, a caloric deficit of 500 calories per day is generally effective and sustainable.",
      "Try adding more compound exercises like squats and deadlifts to your routine for maximum efficiency.",
      "Proper hydration is essential - aim for at least 2-3 liters of water daily.",
      "Make sure to get 7-9 hours of sleep for optimal recovery and hormonal balance.",
      "I've adjusted your meal plan to include more fiber-rich foods to help with satiety.",
      "Your workout plan has been updated with progressive overload in mind.",
      "Don't forget to include rest days in your routine for proper recovery."
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };
  
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };
  
  return (
    <Card className={cn("flex flex-col h-full", className)}>
      <CardHeader>
        <CardTitle>AI Assistant</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto mb-4 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={cn(
                "max-w-[80%] rounded-2xl p-3 text-sm",
                msg.role === "user"
                  ? "bg-primary text-primary-foreground ml-auto"
                  : "bg-secondary text-secondary-foreground"
              )}
            >
              {msg.content}
            </div>
          ))}
          {isLoading && (
            <div className="bg-secondary text-secondary-foreground max-w-[80%] rounded-2xl p-3">
              <div className="flex space-x-2">
                <div className="h-2 w-2 rounded-full bg-foreground/30 animate-pulse"></div>
                <div className="h-2 w-2 rounded-full bg-foreground/30 animate-pulse delay-150"></div>
                <div className="h-2 w-2 rounded-full bg-foreground/30 animate-pulse delay-300"></div>
              </div>
            </div>
          )}
        </div>
        
        <div className="flex space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask something about fitness or nutrition..."
            className="flex-1 rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={isLoading}
          />
          <Button onClick={handleSendMessage} disabled={isLoading || !message.trim()}>
            Send
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
