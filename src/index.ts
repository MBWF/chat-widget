export { ChatProvider } from "./context/ChatContext";

// Type exports
export type {
  ChatWidgetProps,
  Message,
  ChatState,
  ChatContextType,
  ChatAction,
} from "./types";

// Utility exports (for advanced customization)
export {
  getStatusColor,
  getStatusText,
  handleColor,
} from "./components/chatWidget/utils";

// UI Components (for external use)
export {
  Button,
  Input,
  Textarea,
  StatusBadge,
  buttonVariants,
} from "./components/ui";

// CSS import for styling
import "./index.css";
