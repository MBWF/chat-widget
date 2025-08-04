import { useChatStore } from "@/stores/chatStore";
import type { ChatContextType } from "@/types";

export const useChat = (): ChatContextType => {
  const store = useChatStore();

  return {
    isOpen: store.isOpen,
    isOnline: store.isOnline,
    isMaintenanceMode: store.isMaintenanceMode,
    messages: store.messages,
    isLoading: store.isLoading,
    currentInput: store.currentInput,
    toggleWidget: store.toggleWidget,
    sendMessage: store.sendMessage,
    setCurrentInput: store.setCurrentInput,
    clearMessages: store.clearMessages,
    setOnlineStatus: store.setOnlineStatus,
    setMaintenanceMode: store.setMaintenanceMode,
  };
};
