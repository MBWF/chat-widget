import { useChat } from "@/hooks/useChat";
import { getStatusColor } from "@/utils/handle-styling";

export function StatusBadge() {
  const { isOnline, isMaintenanceMode } = useChat();

  return (
    <div
      className={`w-4 h-4 rounded-full border-2 border-white ${getStatusColor({
        isMaintenanceMode,
        isOnline,
      })}`}
    />
  );
}
