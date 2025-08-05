import { StatusBadge } from "@/components/ui";
import { useChat } from "@/hooks/useChat";
import { mergeStyles } from "@/lib/utils";
import type { ChatPosition, CustomStyles } from "@/types";
import { getPositionClasses } from "@/utils/layout-positions";
import { Messages } from "../messages";
import { ChatInput } from "./chat-input";
import { MaintenanceBanner } from "./maintenance-banner";

type ChatOpenProps = {
  introductionWrapper?: React.ReactNode;
  agentName: string;
  customStyles?: CustomStyles;
  position?: ChatPosition;
  logo?: string;
};

export function ChatOpen({
  introductionWrapper,
  agentName,
  customStyles,
  position = "bottom",
  logo,
}: ChatOpenProps) {
  const { isMaintenanceMode } = useChat();

  return (
    <div
      className={mergeStyles(
        getPositionClasses(position),
        customStyles,
        "container"
      )}
    >
      <header
        className={mergeStyles(
          "border-b p-2 flex items-center gap-2 h-14",
          customStyles,
          "header"
        )}
      >
        <img
          src={logo || "/eloquent-ai-logo.jpg"}
          alt="Eloquent AI Logo"
          className={mergeStyles("w-7 h-7", customStyles, "headerLogo")}
        />
        <span
          className={mergeStyles(
            "text-black font-bold",
            customStyles,
            "headerTitle"
          )}
        >
          {agentName}
        </span>
        <StatusBadge customStyles={customStyles} />
      </header>

      {isMaintenanceMode && <MaintenanceBanner customStyles={customStyles} />}

      <section
        className={mergeStyles(
          "flex-1 flex flex-col gap-4 bg-gray-50 overflow-hidden",
          customStyles,
          "messageContainer"
        )}
      >
        <Messages
          customStyles={customStyles}
          introductionWrapper={introductionWrapper}
        />
      </section>

      <ChatInput customStyles={customStyles} />
    </div>
  );
}
