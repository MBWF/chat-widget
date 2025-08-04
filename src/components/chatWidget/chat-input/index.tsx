import React, { useCallback, useRef } from "react";
import { Textarea } from "@/components/ui";
import { useChat } from "@/hooks/useChat";
import { SendButton } from "./send-button";
import { InputHelperText } from "./input-helper-text";

export const ChatInput = React.memo(() => {
  const {
    currentInput,
    setCurrentInput,
    sendMessage,
    isMaintenanceMode,
    isLoading,
  } = useChat();

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCurrentInput(e.target.value);
    },
    [setCurrentInput]
  );

  const handleSubmit = useCallback(async () => {
    if (!currentInput.trim() || isMaintenanceMode || isLoading) return;

    await sendMessage(currentInput);

    setTimeout(() => {
      textareaRef.current?.focus();
    }, 100);
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
  const maxLength = 500;

  return (
    <div className="p-4 border-t border-gray-200">
      <div className="relative">
        <Textarea
          ref={textareaRef}
          value={currentInput}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          disabled={isDisabled}
          className="rounded-2xl resize-none px-4 pr-12 min-h-[44px] max-h-32"
          maxLength={maxLength}
          rows={1}
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
});
