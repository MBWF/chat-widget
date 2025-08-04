import { useCallback, useRef } from "react";
import type { Message } from "@/types";

const STORAGE_KEY = "chat-widget-messages";

export function useChatMessages() {
  const isInitializedRef = useRef(false);

  const loadMessages = useCallback((): Message[] => {
    if (isInitializedRef.current) return [];

    try {
      const savedMessages = localStorage.getItem(STORAGE_KEY);
      if (savedMessages) {
        const messages: Message[] = JSON.parse(savedMessages).map(
          (msg: Message) => ({
            ...msg,
            timestamp: new Date(msg.timestamp),
          })
        );
        isInitializedRef.current = true;
        return messages;
      }
    } catch (error) {
      console.warn("Failed to load saved messages:", error);
      // Clear corrupted data
      localStorage.removeItem(STORAGE_KEY);
    }

    isInitializedRef.current = true;
    return [];
  }, []);

  const saveMessages = useCallback((messages: Message[]) => {
    if (!isInitializedRef.current) return; // Don't save during initialization

    try {
      if (messages.length > 0) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch (error) {
      console.warn("Failed to save messages:", error);
    }
  }, []);

  const clearMessages = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.warn("Failed to clear messages:", error);
    }
  }, []);

  return {
    loadMessages,
    saveMessages,
    clearMessages,
  };
}
