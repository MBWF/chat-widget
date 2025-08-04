import { useChat } from "@/hooks/useChat";
import { mergeStyles } from "@/lib/utils";
import type { CustomStyles } from "@/types";
import { useEffect, useRef } from "react";
import { LoadingIndicator, MessageBubble } from "./components";

type MessagesProps = {
  customStyles?: CustomStyles;
  introductionWrapper?: React.ReactNode;
};

export function Messages({ customStyles, introductionWrapper }: MessagesProps) {
  const { messages, isLoading, isMaintenanceMode } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  return (
    <div
      className={mergeStyles(
        "flex-1 overflow-y-auto bg-white p-4 space-y-2",
        customStyles,
        "messageList"
      )}
    >
      {introductionWrapper}
      {messages.length !== 0 &&
        !isMaintenanceMode &&
        messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
            customStyles={customStyles}
          />
        ))}
      {isLoading && <LoadingIndicator customStyles={customStyles} />}
      <div ref={messagesEndRef} />
    </div>
  );
}
