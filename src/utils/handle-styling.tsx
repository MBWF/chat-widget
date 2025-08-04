export const getStatusColor = ({
  isOnline = true,
  isMaintenanceMode = false,
}) => {
  if (isMaintenanceMode) return "bg-yellow-500";
  return isOnline ? "bg-green-500" : "bg-gray-400";
};

export const getStatusText = ({
  isOnline = true,
  isMaintenanceMode = false,
}) => {
  if (isMaintenanceMode) return "Under Maintenance";
  return isOnline ? "Online" : "Offline";
};

export const handleColor = ({ isOnline = true, isMaintenanceMode = false }) => {
  if (isMaintenanceMode) return "bg-yellow-500";
  return isOnline ? "bg-blue-600" : "bg-gray-500";
};

export const handleMessageStyle = (isUser: boolean) => {
  if (isUser) {
    return "bg-primary text-white rounded-br-sm";
  }
  return "bg-gray-200 text-gray-800 rounded-bl-sm";
};
