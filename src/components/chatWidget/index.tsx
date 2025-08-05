import { useChat } from "@/hooks/useChat";
import { useEffect } from "react";
import { ChatOpen } from "./chat-open";
import { FloattingButton } from "./floatting-button";
import { mergeStyles } from "@/lib/utils";
import type { ChatWidgetProps } from "@/types";
import { getLayoutClasses } from "@/utils/layout-positions";

function ChatWidget({
  agentName,
  isOnline = true,
  isMaintenanceMode = false,
  introductionWrapper,
  customStyles,
  position = "bottom",
  logo,
}: ChatWidgetProps) {
  const { isOpen, setOnlineStatus, setMaintenanceMode } = useChat();

  useEffect(() => {
    setOnlineStatus(isOnline);
  }, [isOnline, setOnlineStatus]);

  useEffect(() => {
    setMaintenanceMode(isMaintenanceMode);
  }, [isMaintenanceMode, setMaintenanceMode]);

  return (
    <div
      className={mergeStyles(
        getLayoutClasses(position),
        customStyles,
        "widgetWrapper"
      )}
    >
      {isOpen && (
        <ChatOpen
          introductionWrapper={introductionWrapper}
          agentName={agentName}
          customStyles={customStyles}
          position={position}
          logo={logo}
        />
      )}
      <FloattingButton customStyles={customStyles} />
    </div>
  );
}

export { ChatWidget };
