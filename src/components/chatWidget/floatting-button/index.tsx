import { Button } from "@/components/ui";
import { useChat } from "@/hooks/useChat";
import { cn } from "@/lib/utils";
import { handleColor } from "@/utils/handle-styling";
import { MessageCircleMore, XIcon } from "lucide-react";

import { memo } from "react";

function FloattingButton() {
  const { isOnline, isMaintenanceMode, toggleWidget, isOpen } = useChat();

  return (
    <div className="relative">
      <Button
        onClick={toggleWidget}
        className={cn(
          `w-14 h-14 rounded-full shadow-lg transition-all duration-200 hover:scale-105`,
          handleColor({
            isOnline,
            isMaintenanceMode,
          })
        )}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <XIcon className="w-6 h-6" />
        ) : (
          <MessageCircleMore className="w-6 h-6" />
        )}
      </Button>
    </div>
  );
}

export default memo(FloattingButton);
