// Main exports for the NPM package
export { default as ChatWidget } from "./components/chatWidget";
export { useChatStore } from "./stores/chatStore";

// Type exports
export type { ChatWidgetProps, Message, ChatActions } from "./types";

// Utility exports (for advanced customization)
export {
  getStatusColor,
  getStatusText,
  handleColor,
} from "./utils/handle-styling";

// UI Components (for external use)
export { Button, Textarea, StatusBadge } from "./components/ui";

// CSS import for styling
import "./index.css";
