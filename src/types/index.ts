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
  llmConfig: LLMConfig;
}

export interface ChatActions {
  toggleWidget: () => void;
  clearMessages: () => void;
  setLoading: (isLoading: boolean) => void;
  setCurrentInput: (input: string) => void;
  setOnlineStatus: (isOnline: boolean) => void;
  sendMessage: (content: string) => Promise<void>;
  setMaintenanceMode: (isMaintenanceMode: boolean) => void;
  setLLMConfig: (llmConfig: LLMConfig) => void;
}

export type ChatContextType = ChatState & ChatActions;

export type ChatPosition = "bottom" | "top" | "left" | "right";

export interface CustomStyles {
  container?: string;
  header?: string;
  headerLogo?: string;
  headerTitle?: string;
  statusBadge?: string;
  maintenanceBanner?: string;
  maintenanceBannerText?: string;
  messageContainer?: string;
  messageList?: string;
  messageBubble?: string;
  userMessageBubble?: string;
  assistantMessageBubble?: string;
  loadingIndicator?: string;
  emptyState?: string;
  inputContainer?: string;
  inputField?: string;
  sendButton?: string;
  inputHelperText?: string;
  floatingButton?: string;
  floatingButtonIcon?: string;
  widgetWrapper?: string;
}

export interface LLMConfig {
  apiKey: string;
  model: string;
}

export interface ChatWidgetProps {
  agentName: string;
  isOnline?: boolean;
  isMaintenanceMode?: boolean;
  introductionWrapper?: React.ReactNode;
  customStyles?: CustomStyles;
  position?: ChatPosition;
  logo?: string;
  llmConfig?: LLMConfig;
}
