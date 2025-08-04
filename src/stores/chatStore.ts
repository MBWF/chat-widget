import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Message, ChatContextType, ChatState } from "@/types";

const initialState: ChatState = {
  isOpen: true,
  isOnline: true,
  isLoading: false,
  isMaintenanceMode: false,
  currentInput: "",
  messages: [],
};

export const useChatStore = create<ChatContextType>()(
  persist(
    (set, get) => ({
      ...initialState,
      toggleWidget: () => set((state) => ({ isOpen: !state.isOpen })),
      setOnlineStatus: (isOnline: boolean) => set({ isOnline }),
      setMaintenanceMode: (isMaintenanceMode: boolean) =>
        set({ isMaintenanceMode }),
      addMessage: (message: Message) =>
        set((state) => ({
          messages: [...state.messages, message],
        })),
      clearMessages: () => set({ messages: [] }),
      setCurrentInput: (currentInput: string) => set({ currentInput }),
      setLoading: (isLoading: boolean) => set({ isLoading }),
      sendMessage: async (content: string) => {
        const state = get();
        if (!content.trim() || state.isMaintenanceMode) return;

        const userMessage: Message = {
          id: `user-${Date.now()}`,
          content: content.trim(),
          sender: "user",
          timestamp: new Date(),
        };

        set((state) => ({
          messages: [...state.messages, userMessage],
          currentInput: "",
          isLoading: true,
        }));

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

          set((state) => ({
            messages: [...state.messages, assistantMessage],
            isLoading: false,
          }));
        } catch (error) {
          console.error("Failed to send message:", error);
          const errorMessage: Message = {
            id: `error-${Date.now()}`,
            content: "Sorry, I encountered an error. Please try again.",
            sender: "assistant",
            timestamp: new Date(),
          };

          set((state) => ({
            messages: [...state.messages, errorMessage],
            isLoading: false,
          }));
        }
      },
    }),
    {
      name: "chat-widget-messages",
      partialize: (state) => ({
        ...initialState,
        messages: state.messages,
      }),
    }
  )
);
