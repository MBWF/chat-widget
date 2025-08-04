import { useChat } from "@/hooks/useChat";
import { Messages } from "../messages";
import { ChatInput } from "./chat-input";
import { StatusBadge } from "@/components/ui";
import { mergeStyles } from "@/lib/utils";
import type { CustomStyles } from "@/types";
import { MaintenanceBanner } from "./maintenance-banner";

type ChatOpenProps = {
  introductionWrapper?: React.ReactNode;
  agentName: string;
  customStyles?: CustomStyles;
};

export function ChatOpen({
  introductionWrapper,
  agentName,
  customStyles,
}: ChatOpenProps) {
  const { isMaintenanceMode } = useChat();

  return (
    <div
      className={mergeStyles(
        "bg-white mb-4 w-80 h-96 rounded-lg shadow-2xl flex flex-col overflow-hidden sm:w-[450px] sm:h-[620px]",
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
          src="/vite.svg"
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
