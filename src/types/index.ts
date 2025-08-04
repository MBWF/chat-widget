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
  sendMessage: (content: string) => Promise<void>;
  setCurrentInput: (input: string) => void;
  clearMessages: () => void;
}

export interface ChatWidgetProps {
  isOnline?: boolean;
  isMaintenanceMode?: boolean;
  apiKey?: string;
  customStyles?: {
    primaryColor?: string;
    fontFamily?: string;
  };
}

export type ChatAction =
  | { type: "TOGGLE_WIDGET" }
  | { type: "SET_ONLINE_STATUS"; payload: boolean }
  | { type: "SET_MAINTENANCE_MODE"; payload: boolean }
  | { type: "ADD_MESSAGE"; payload: Message }
  | { type: "SET_MESSAGES"; payload: Message[] }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_CURRENT_INPUT"; payload: string }
  | { type: "CLEAR_MESSAGES" };
