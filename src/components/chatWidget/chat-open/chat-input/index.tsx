import { Textarea } from "@/components/ui";
import { useChat } from "@/hooks/useChat";
import { InputHelperText, SendButton } from "./components";
import { mergeStyles } from "@/lib/utils";
import type { CustomStyles } from "@/types";

type ChatInputProps = {
  customStyles?: CustomStyles;
};

export function ChatInput({ customStyles }: ChatInputProps) {
  const {
    currentInput,
    setCurrentInput,
    sendMessage,
    isMaintenanceMode,
    isLoading,
  } = useChat();

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentInput(e.target.value);
  };

  const handleSubmit = async () => {
    if (!currentInput.trim() || isMaintenanceMode || isLoading) return;

    await sendMessage(currentInput);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const isDisabled = isMaintenanceMode || isLoading;
  const canSend = currentInput.trim().length > 0 && !isDisabled;
  const maxLength = 250;

  return (
    <div
      className={mergeStyles(
        "p-4 border-t border-gray-200",
        customStyles,
        "inputContainer"
      )}
    >
      <div className="relative">
        <Textarea
          value={currentInput}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          disabled={isDisabled}
          className={mergeStyles(
            "rounded-2xl resize-none px-4 pr-12 max-h-24",
            customStyles,
            "inputField"
          )}
          maxLength={maxLength}
          placeholder={
            isMaintenanceMode
              ? "Chat unavailable during maintenance"
              : isLoading
              ? "Sending..."
              : "Type your message... (Press Enter to send)"
          }
        />
        <SendButton
          onSend={handleSubmit}
          canSend={canSend}
          customStyles={customStyles}
        />
      </div>

      <InputHelperText
        isLoading={isLoading}
        currentInputLength={currentInput.length}
        maxLength={maxLength}
        customStyles={customStyles}
      />
    </div>
  );
}
