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

export interface ChatActions {
  toggleWidget: () => void;
  clearMessages: () => void;
  addMessage: (message: Message) => void;
  setLoading: (isLoading: boolean) => void;
  setCurrentInput: (input: string) => void;
  setOnlineStatus: (isOnline: boolean) => void;
  sendMessage: (content: string) => Promise<void>;
  setMaintenanceMode: (isMaintenanceMode: boolean) => void;
}

export type ChatContextType = ChatState & ChatActions;

export interface CustomStyles {
  // Main widget container styles
  container?: string;

  // Header section styles
  header?: string;
  headerLogo?: string;
  headerTitle?: string;
  statusBadge?: string;

  // Maintenance banner styles
  maintenanceBanner?: string;
  maintenanceBannerText?: string;

  // Messages section styles
  messageContainer?: string;
  messageList?: string;
  messageBubble?: string;
  userMessageBubble?: string;
  assistantMessageBubble?: string;
  loadingIndicator?: string;
  emptyState?: string;

  // Input section styles
  inputContainer?: string;
  inputField?: string;
  sendButton?: string;
  inputHelperText?: string;

  // Floating button styles
  floatingButton?: string;
  floatingButtonIcon?: string;
}

export interface ChatWidgetProps {
  agentName: string;
  isOnline?: boolean;
  isMaintenanceMode?: boolean;
  introductionWrapper?: React.ReactNode;
  customStyles?: CustomStyles;
}
