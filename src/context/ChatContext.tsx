/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useCallback, useMemo, useEffect, useRef } from "react";
import { useChatReducer } from "../hooks/useChatReducer";
import type { ChatContextType, ChatWidgetProps, Message } from "@/types";

export const ChatContext = createContext<ChatContextType | undefined>(
  undefined
);

interface ChatProviderProps extends ChatWidgetProps {
  children: React.ReactNode;
}

export const ChatProvider: React.FC<ChatProviderProps> = ({
  children,
  isOnline = true,
  isMaintenanceMode = false,
}) => {
  const [state, dispatch] = useChatReducer({
    isOnline,
    isMaintenanceMode,
  });

  // Flag to track if messages have been loaded from localStorage
  const messagesLoadedRef = useRef(false);

  // Update state when props change
  useEffect(() => {
    dispatch({ type: "SET_ONLINE_STATUS", payload: isOnline });
  }, [isOnline, dispatch]);

  useEffect(() => {
    dispatch({ type: "SET_MAINTENANCE_MODE", payload: isMaintenanceMode });
  }, [isMaintenanceMode, dispatch]);

  // Load messages from localStorage on mount (only once)
  useEffect(() => {
    if (messagesLoadedRef.current) return; // Prevent duplicate loading

    const savedMessages = localStorage.getItem("chat-widget-messages");
    if (savedMessages) {
      try {
        const messages: Message[] = JSON.parse(savedMessages).map(
          (msg: Message) => ({
            ...msg,
            timestamp: new Date(msg.timestamp),
          })
        );
        // Use SET_MESSAGES to replace all messages at once, avoiding duplication
        dispatch({ type: "SET_MESSAGES", payload: messages });
        messagesLoadedRef.current = true;
      } catch (error) {
        console.warn("Failed to load saved messages:", error);
        // Clear corrupted data
        localStorage.removeItem("chat-widget-messages");
      }
    } else {
      messagesLoadedRef.current = true;
    }
  }, []); // Empty dependency array ensures this runs only once

  // Save messages to localStorage whenever messages change
  // Only save after initial load is complete to prevent duplication
  useEffect(() => {
    if (!messagesLoadedRef.current) return; // Don't save until initial load is complete

    if (state.messages.length > 0) {
      localStorage.setItem(
        "chat-widget-messages",
        JSON.stringify(state.messages)
      );
    } else {
      // Clear localStorage when messages are explicitly cleared
      localStorage.removeItem("chat-widget-messages");
    }
  }, [state.messages]);

  const toggleWidget = useCallback(() => {
    dispatch({ type: "TOGGLE_WIDGET" });
  }, []);

  const setCurrentInput = useCallback((input: string) => {
    dispatch({ type: "SET_CURRENT_INPUT", payload: input });
  }, []);

  const clearMessages = useCallback(() => {
    dispatch({ type: "CLEAR_MESSAGES" });
    localStorage.removeItem("chat-widget-messages");
  }, []);

  // Mock LLM API call - replace with actual implementation
  const sendMessage = useCallback(
    async (content: string) => {
      if (!content.trim() || state.isMaintenanceMode) return;

      const userMessage: Message = {
        id: `user-${Date.now()}`,
        content: content.trim(),
        sender: "user",
        timestamp: new Date(),
      };

      dispatch({ type: "ADD_MESSAGE", payload: userMessage });
      dispatch({ type: "SET_CURRENT_INPUT", payload: "" });
      dispatch({ type: "SET_LOADING", payload: true });

      try {
        // Simulate API delay
        await new Promise((resolve) =>
          setTimeout(resolve, 1000 + Math.random() * 2000)
        );

        // Mock response - replace with actual LLM API call
        const assistantMessage: Message = {
          id: `assistant-${Date.now()}`,
          content: `Thank you for your message: "${content}". This is a mock response. Please integrate with your preferred LLM API.`,
          sender: "assistant",
          timestamp: new Date(),
        };

        dispatch({ type: "ADD_MESSAGE", payload: assistantMessage });
      } catch (error) {
        console.error("Failed to send message:", error);
        const errorMessage: Message = {
          id: `error-${Date.now()}`,
          content: "Sorry, I encountered an error. Please try again.",
          sender: "assistant",
          timestamp: new Date(),
        };
        dispatch({ type: "ADD_MESSAGE", payload: errorMessage });
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    },
    [state.isMaintenanceMode]
  );

  const contextValue = useMemo<ChatContextType>(
    () => ({
      ...state,
      toggleWidget,
      sendMessage,
      setCurrentInput,
      clearMessages,
    }),
    [state, toggleWidget, sendMessage, setCurrentInput, clearMessages]
  );

  return (
    <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>
  );
};
