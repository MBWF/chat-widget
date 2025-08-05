import { mergeStyles } from "@/lib/utils";
import type { CustomStyles } from "@/types";

type EmptyStateProps = {
  customStyles?: CustomStyles;
};

export function EmptyState({ customStyles }: EmptyStateProps) {
  return (
    <div
      className={mergeStyles(
        "flex items-center justify-center text-gray-500",
        customStyles,
        "emptyState"
      )}
    >
      <div className="text-center">
        <p className="text-lg font-medium mb-2">👋 Welcome!</p>
        <p className="text-sm">
          Start a conversation by typing a message below.
        </p>
      </div>
    </div>
  );
}
