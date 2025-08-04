import { Button } from "@/components/ui";
import { useChat } from "@/hooks/useChat";
import { cn } from "@/lib/utils";
import { handleColor } from "@/utils/handle-styling";
import { MessageCircleMore, XIcon } from "lucide-react";

export function FloattingButton() {
  const { isOnline, isMaintenanceMode, toggleWidget, isOpen } = useChat();

  const handleChangeColor = () => {
    return handleColor({ isOnline, isMaintenanceMode });
  };

  return (
    <div className="relative">
      <Button
        aria-label={isOpen ? "Close chat" : "Open chat"}
        onClick={toggleWidget}
        className={cn(
          "w-14 h-14 rounded-full shadow-lg transition-all duration-200 hover:scale-105",
          handleChangeColor
        )}
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
