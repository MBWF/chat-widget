import { Button } from "@/components/ui";
import { useChat } from "@/hooks/useChat";
import { mergeStyles } from "@/lib/utils";
import { handleColor } from "@/utils/handle-styling";
import { MessageCircleMore, XIcon } from "lucide-react";
import type { CustomStyles } from "@/types";

type FloattingButtonProps = {
  customStyles?: CustomStyles;
};

export function FloattingButton({ customStyles }: FloattingButtonProps) {
  const { isOnline, isMaintenanceMode, toggleWidget, isOpen } = useChat();

  const handleChangeColor = handleColor({ isOnline, isMaintenanceMode });

  const defaultButtonClasses = `w-14 h-14 rounded-full shadow-lg transition-all duration-200 hover:scale-105 ${handleChangeColor}`;

  return (
    <div className="relative">
      <Button
        aria-label={isOpen ? "Close chat" : "Open chat"}
        onClick={toggleWidget}
        className={mergeStyles(
          defaultButtonClasses,
          customStyles,
          "floatingButton"
        )}
      >
        {isOpen ? (
          <XIcon
            className={mergeStyles(
              "w-6 h-6",
              customStyles,
              "floatingButtonIcon"
            )}
          />
        ) : (
          <MessageCircleMore
            className={mergeStyles(
              "w-6 h-6",
              customStyles,
              "floatingButtonIcon"
            )}
          />
        )}
      </Button>
    </div>
  );
}
