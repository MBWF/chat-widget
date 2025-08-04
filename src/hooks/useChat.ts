import { ChatContext } from "@/context/ChatContext";
import type { ChatContextType } from "@/types";
import { useContext } from "react";

export const useChat = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};
