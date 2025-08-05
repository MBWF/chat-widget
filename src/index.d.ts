import { ReactNode } from "react";

export type ButtonPosition =
  | "bottom-right"
  | "bottom-center"
  | "bottom-left"
  | "top-right"
  | "top-center"
  | "top-left";

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
  introductionWrapper?: ReactNode;
  customStyles?: CustomStyles;
  buttonPosition?: ButtonPosition;
  logo?: string;
  llmConfig?: LLMConfig;
}

declare const ChatWidget: React.ComponentType<ChatWidgetProps>;
export { ChatWidget };
export default ChatWidget;

export declare function initChatWidget(config: ChatWidgetProps): void;
