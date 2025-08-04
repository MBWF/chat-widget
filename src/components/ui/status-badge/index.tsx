import React from "react";
import { getStatusColor } from "../../../utils/handle-styling";
import { useChat } from "@/hooks/useChat";

export const StatusBadge = React.memo(() => {
  const { isOnline, isMaintenanceMode } = useChat();

  return (
    <div
      className={`w-4 h-4 rounded-full border-2 border-white ${getStatusColor({
        isMaintenanceMode,
        isOnline,
      })}`}
    />
  );
});

StatusBadge.displayName = "StatusBadge";
