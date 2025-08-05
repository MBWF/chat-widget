import { mergeStyles } from "@/lib/utils";
import type { CustomStyles, Message } from "@/types";
import { handleMessageStyle } from "@/utils/handle-styling";

export interface MessageBubbleProps {
  message: Message;
  customStyles?: CustomStyles;
}

export function MessageBubble({ message, customStyles }: MessageBubbleProps) {
  const isUser = message.sender === "user";

  const bubbleStyleKey = isUser
    ? "userMessageBubble"
    : "assistantMessageBubble";
  const defaultBubbleClasses = `max-w-[80%] px-4 py-2 rounded-lg ${handleMessageStyle(
    isUser
  )}`;
  const defaultContainerClasses = `flex mb-4 ${
    isUser ? "justify-end" : "justify-start"
  }`;
  const defaultTimestampClasses = `text-xs mt-1 ${
    isUser ? "text-blue-100" : "text-gray-500"
  }`;

  return (
    <div
      className={mergeStyles(
        defaultContainerClasses,
        customStyles,
        "messageBubble"
      )}
    >
      <div
        className={mergeStyles(
          defaultBubbleClasses,
          customStyles,
          bubbleStyleKey
        )}
      >
        <span className="text-xs font-bold capitalize">{message.sender}</span>
        <p className="text-sm whitespace-pre-wrap break-words">
          {message.content}
        </p>
        <p className={defaultTimestampClasses}>
          {new Date(message.timestamp).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
    </div>
  );
}
