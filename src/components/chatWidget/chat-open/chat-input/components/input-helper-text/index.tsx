import { mergeStyles } from "@/lib/utils";
import type { CustomStyles } from "@/types";

export interface InputHelperTextProps {
  isLoading: boolean;
  currentInputLength: number;
  maxLength: number;
  customStyles?: CustomStyles;
}

export function InputHelperText({
  isLoading,
  currentInputLength,
  maxLength,
  customStyles,
}: InputHelperTextProps) {
  const warningThreshold = Math.floor(maxLength * 0.9); // 90% of max length

  return (
    <div
      className={mergeStyles(
        "flex justify-between items-center mt-2 text-xs text-gray-500",
        customStyles,
        "inputHelperText"
      )}
    >
      <span>
        {isLoading
          ? "Sending..."
          : "Press Enter to send, Shift+Enter for new line"}
      </span>
      <span
        className={
          currentInputLength > warningThreshold ? "text-orange-500" : ""
        }
      >
        {currentInputLength}/{maxLength}
      </span>
    </div>
  );
}
