import { useChat } from "@/hooks/useChat";
import React from "react";
import { LoadingIndicator } from "./loading-indicator";
import { MessageBubble } from "./message-bubble";

export const Messages = React.memo(() => {
  const { messages, isLoading } = useChat();
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-2">
      {messages.map((message) => (
        <MessageBubble key={message.id} message={message} />
      ))}
      {isLoading && <LoadingIndicator />}
      <div ref={messagesEndRef} />
    </div>
  );
});
