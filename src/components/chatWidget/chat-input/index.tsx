import { Textarea } from "@/components/ui";
import { useChat } from "@/hooks/useChat";
import { memo, useCallback } from "react";
import { InputHelperText } from "./input-helper-text";
import { SendButton } from "./send-button";

function ChatInput() {
  const {
    currentInput,
    setCurrentInput,
    sendMessage,
    isMaintenanceMode,
    isLoading,
  } = useChat();

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCurrentInput(e.target.value);
    },
    [setCurrentInput]
  );

  const handleSubmit = useCallback(async () => {
    if (!currentInput.trim() || isMaintenanceMode || isLoading) return;

    await sendMessage(currentInput);
  }, [currentInput, sendMessage, isMaintenanceMode, isLoading]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSubmit();
      }
    },
    [handleSubmit]
  );

  const isDisabled = isMaintenanceMode || isLoading;
  const canSend = currentInput.trim().length > 0 && !isDisabled;
  const maxLength = 200;

  return (
    <div className="p-4 border-t border-gray-200">
      <div className="relative">
        <Textarea
          value={currentInput}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          disabled={isDisabled}
          className="rounded-2xl resize-none px-4 pr-12"
          maxLength={maxLength}
          placeholder={
            isMaintenanceMode
              ? "Chat unavailable during maintenance"
              : isLoading
              ? "Sending..."
              : "Type your message... (Press Enter to send)"
          }
        />
        <SendButton onSend={handleSubmit} canSend={canSend} />
      </div>

      <InputHelperText
        isLoading={isLoading}
        currentInputLength={currentInput.length}
        maxLength={maxLength}
      />
    </div>
  );
}

export default memo(ChatInput);
