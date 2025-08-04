import { ReactNode } from "react";

export interface ChatWidgetProps {
  agentName: string;
  isOnline?: boolean;
  isMaintenanceMode?: boolean;
  introductionWrapper?: ReactNode;
}

declare const ChatWidget: React.ComponentType<ChatWidgetProps>;
export { ChatWidget };
export default ChatWidget;

export declare function initChatWidget(config: ChatWidgetProps): void;
