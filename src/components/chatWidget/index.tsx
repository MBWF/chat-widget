import { useChat } from "@/hooks/useChat";
import React from "react";
import { ChatProvider } from "../../context/ChatContext";
import type { ChatWidgetProps } from "../../types";
import { ChatOpen } from "./chat-open";
import { FloattingButton } from "./floatting-button";

const ChatWidgetContent = React.memo(() => {
  const { isOpen } = useChat();

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && <ChatOpen />}
      <FloattingButton />
    </div>
  );
});

const ChatWidget: React.FC<ChatWidgetProps> = (props) => {
  return (
    <ChatProvider {...props}>
      <ChatWidgetContent />
    </ChatProvider>
  );
};

export default ChatWidget;
