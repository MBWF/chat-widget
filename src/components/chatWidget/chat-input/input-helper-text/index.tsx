import React from "react";

interface InputHelperTextProps {
  isLoading: boolean;
  currentInputLength: number;
  maxLength: number;
}

export const InputHelperText = React.memo<InputHelperTextProps>(
  ({ isLoading, currentInputLength, maxLength }) => {
    const warningThreshold = Math.floor(maxLength * 0.9); // 90% of max length

    return (
      <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
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
);
