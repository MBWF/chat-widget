import { useChat } from "@/hooks/useChat";
import { useEffect } from "react";
import { ChatOpen } from "./chat-open";
import { FloattingButton } from "./floatting-button";
import type { ChatWidgetProps } from "@/types";

function ChatWidget({
  agentName,
  isOnline = true,
  isMaintenanceMode = false,
  introductionWrapper,
  customStyles,
}: ChatWidgetProps) {
  const { isOpen, setOnlineStatus, setMaintenanceMode } = useChat();

  useEffect(() => {
    setOnlineStatus(isOnline);
  }, [isOnline, setOnlineStatus]);

  useEffect(() => {
    setMaintenanceMode(isMaintenanceMode);
  }, [isMaintenanceMode, setMaintenanceMode]);

  return (
    <>
      {isOpen && (
        <ChatOpen
          introductionWrapper={introductionWrapper}
          agentName={agentName}
          customStyles={customStyles}
        />
      )}
      <FloattingButton customStyles={customStyles} />
    </>
  );
}

export { ChatWidget };
