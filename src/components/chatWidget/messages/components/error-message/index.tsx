import { mergeStyles } from "@/lib/utils";
import type { CustomStyles } from "@/types";
import { AlertCircle, RefreshCw } from "lucide-react";

export interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
  customStyles?: CustomStyles;
}

export function ErrorMessage({
  message,
  onRetry,
  customStyles,
}: ErrorMessageProps) {
  return (
    <div
      className={mergeStyles(
        "flex justify-start mb-4",
        customStyles,
        "messageBubble"
      )}
    >
      <div className="max-w-[80%] px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-red-800">
        <div className="flex items-start gap-2">
          <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <span className="text-xs font-bold">Error</span>
            <p className="text-sm mt-1">{message}</p>
            {onRetry && (
              <button
                onClick={onRetry}
                className="flex items-center gap-1 mt-2 text-xs text-red-600 hover:text-red-800 transition-colors"
              >
                <RefreshCw className="w-3 h-3" />
                Try Again
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
