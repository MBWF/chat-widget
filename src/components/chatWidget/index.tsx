import { useChat } from "@/hooks/useChat";
import { useEffect } from "react";
import { ChatOpen } from "./chat-open";
import { FloattingButton } from "./floatting-button";

type ChatWidgetProps = {
  agentName: string;
  isOnline?: boolean;
  isMaintenanceMode?: boolean;
  introductionWrapper?: React.ReactNode;
};

function ChatWidget({
  agentName,
  isOnline = true,
  isMaintenanceMode = false,
  introductionWrapper,
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
        />
      )}
      <FloattingButton />
    </>
  );
}

export default ChatWidget;
