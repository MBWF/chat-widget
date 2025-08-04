import { useChat } from "@/hooks/useChat";
import { memo, useEffect } from "react";
import ChatOpen from "./chat-open";
import FloattingButton from "./floatting-button";

type ChatWidgetProps = {
  isOnline?: boolean;
  isMaintenanceMode?: boolean;
};

function ChatWidget({
  isOnline = true,
  isMaintenanceMode = false,
}: ChatWidgetProps) {
  const { isOpen, setOnlineStatus, setMaintenanceMode } = useChat();

  useEffect(() => {
    setOnlineStatus(isOnline);
  }, [isOnline, setOnlineStatus]);

  useEffect(() => {
    setMaintenanceMode(isMaintenanceMode);
  }, [isMaintenanceMode, setMaintenanceMode]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && <ChatOpen />}
      <FloattingButton />
    </div>
  );
}

export default memo(ChatWidget);
