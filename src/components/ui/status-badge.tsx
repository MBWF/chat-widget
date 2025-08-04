import { useChat } from "@/hooks/useChat";
import { mergeStyles } from "@/lib/utils";
import { getStatusColor } from "@/utils/handle-styling";
import type { CustomStyles } from "@/types";

type StatusBadgeProps = {
  customStyles?: CustomStyles;
};

export function StatusBadge({ customStyles }: StatusBadgeProps) {
  const { isOnline, isMaintenanceMode } = useChat();

  const statusColor = getStatusColor({ isOnline, isMaintenanceMode });

  return (
    <div
      className={mergeStyles(
        `w-4 h-4 rounded-full border-2 border-white ${statusColor}`,
        customStyles,
        "statusBadge"
      )}
    />
  );
}
