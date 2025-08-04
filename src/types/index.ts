export interface Message {
  id: string;
  content: string;
  sender: "user" | "assistant";
  timestamp: Date;
}

export interface ChatState {
  isOpen: boolean;
  isOnline: boolean;
  isMaintenanceMode: boolean;
  messages: Message[];
  isLoading: boolean;
  currentInput: string;
}

export interface ChatContextType extends ChatState {
  toggleWidget: () => void;
  clearMessages: () => void;
  sendMessage: (content: string) => Promise<void>;
  setCurrentInput: (input: string) => void;
  setOnlineStatus: (isOnline: boolean) => void;
  setMaintenanceMode: (isMaintenanceMode: boolean) => void;
}
