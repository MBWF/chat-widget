import { useChat } from "@/hooks/useChat";
import { XIcon } from "lucide-react";
import React from "react";
import { Button, StatusBadge } from "@/components/ui";
import { ChatInput } from "../chat-input";
import { Messages } from "../messages";

type ChatOpenProps = {
  introductionWrapper?: React.ReactNode;
};

export const ChatOpen = React.memo<ChatOpenProps>(({ introductionWrapper }) => {
  const { isMaintenanceMode, toggleWidget } = useChat();

  return (
    <div className="bg-white mb-4 w-80 h-96 rounded-lg shadow-2xl flex flex-col overflow-hidden sm:w-[450px] sm:h-[620px]">
      <div className="border-b border-slate-300 p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <StatusBadge />
          <span className="text-black font-bold">Eloquent AI</span>
        </div>
        <Button
          size="icon"
          variant="ghost"
          onClick={toggleWidget}
          aria-label="Close chat"
        >
          <XIcon className="w-5 h-5" />
        </Button>
      </div>

      {isMaintenanceMode && (
        <div className="bg-yellow-100 border-b border-yellow-200 p-3">
          <p className="text-yellow-800 text-sm text-center">
            🔧 We're currently under maintenance. Chat is temporarily
            unavailable.
          </p>
        </div>
      )}

      <div className="flex-1 flex flex-col bg-gray-50 overflow-hidden">
        {introductionWrapper ? (
          <div className="p-4">{introductionWrapper}</div>
        ) : (
          <Messages />
        )}
      </div>

      <ChatInput />
    </div>
  );
});
