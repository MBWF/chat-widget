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
  buttonPosition = "bottom-right",
  logo,
  llmConfig,
}: ChatWidgetProps) {
  const {
    isOpen,
    setOnlineStatus,
    setMaintenanceMode,
    setLLMConfig,
    setAgentName,
  } = useChat();

  useEffect(() => {
    if (agentName) {
      setAgentName(agentName);
    }
  }, [agentName, setAgentName]);

  useEffect(() => {
    setOnlineStatus(isOnline);
  }, [isOnline, setOnlineStatus]);

  useEffect(() => {
    setMaintenanceMode(isMaintenanceMode);
  }, [isMaintenanceMode, setMaintenanceMode]);

  useEffect(() => {
    if (llmConfig) {
      setLLMConfig(llmConfig);
    }
  }, [llmConfig, setLLMConfig]);

  return (
    <div
      className={mergeStyles(getLayoutClasses(), customStyles, "widgetWrapper")}
    >
      {isOpen && (
        <ChatOpen
          introductionWrapper={introductionWrapper}
          customStyles={customStyles}
          buttonPosition={buttonPosition}
          logo={logo}
        />
      )}
      <FloattingButton
        customStyles={customStyles}
        buttonPosition={buttonPosition}
      />
    </div>
  );
}

export { ChatWidget };
