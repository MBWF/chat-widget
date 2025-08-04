import { useChat } from "@/hooks/useChat";
import { useEffect } from "react";
import { ChatOpen } from "./chat-open";
import { FloattingButton } from "./floatting-button";

type ChatWidgetProps = {
  isOnline?: boolean;
  isMaintenanceMode?: boolean;
};

export function ChatWidget({
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
    <div>
      {isOpen && <ChatOpen />}
      <FloattingButton />
    </div>
  );
}
