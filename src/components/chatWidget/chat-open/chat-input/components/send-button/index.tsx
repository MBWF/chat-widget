import { Button } from "@/components/ui";
import { ArrowUp } from "lucide-react";
import { mergeStyles } from "@/lib/utils";
import type { CustomStyles } from "@/types";

export interface SendButtonProps {
  onSend: () => void;
  canSend: boolean;
  customStyles?: CustomStyles;
}

export function SendButton({ onSend, canSend, customStyles }: SendButtonProps) {
  const defaultClasses = `absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full transition-all ${
    canSend
      ? "bg-blue-600 hover:bg-blue-700 text-white"
      : "bg-gray-300 text-gray-500 cursor-not-allowed"
  }`;

  return (
    <Button
      onClick={onSend}
      disabled={!canSend}
      size="icon"
      className={mergeStyles(defaultClasses, customStyles, "sendButton")}
      aria-label="Send message"
    >
      <ArrowUp className="w-4 h-4" />
    </Button>
  );
}
