import { useChat } from "@/hooks/useChat";
import { useEffect, useRef } from "react";
import { EmptyState, LoadingIndicator, MessageBubble } from "./components";

export function Messages() {
  const { messages, isLoading, isMaintenanceMode } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-2">
      {messages.length === 0 && !isMaintenanceMode ? (
        <EmptyState />
      ) : (
        messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))
      )}
      {isLoading && <LoadingIndicator />}
      <div ref={messagesEndRef} />
    </div>
  );
}
