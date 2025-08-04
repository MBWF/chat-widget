import { useChat } from "@/hooks/useChat";
import { cn } from "@/lib/utils";
import { getStatusColor } from "@/utils/handle-styling";

export function StatusBadge() {
  const { isOnline, isMaintenanceMode } = useChat();

  const statusColor = getStatusColor({ isOnline, isMaintenanceMode });

  return (
    <div
      className={cn("w-4 h-4 rounded-full border-2 border-white", statusColor)}
    />
  );
}
