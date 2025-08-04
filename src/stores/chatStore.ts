import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Message } from "@/types";

interface ChatState {
  // Chat state
  isOpen: boolean;
  isOnline: boolean;
  isMaintenanceMode: boolean;
  messages: Message[];
  isLoading: boolean;
  currentInput: string;
}

interface ChatActions {
  toggleWidget: () => void;
  setOnlineStatus: (isOnline: boolean) => void;
  setMaintenanceMode: (isMaintenanceMode: boolean) => void;
  addMessage: (message: Message) => void;
  clearMessages: () => void;
  setCurrentInput: (input: string) => void;
  setLoading: (isLoading: boolean) => void;
  sendMessage: (content: string) => Promise<void>;
}

type ChatStore = ChatState & ChatActions;

const initialState: ChatState = {
  isOpen: false,
  isOnline: true,
  isMaintenanceMode: false,
  messages: [],
  isLoading: false,
  currentInput: "",
};

const customStorage = {
  getItem: (name: string) => {
    try {
      const item = localStorage.getItem(name);
      if (!item) return null;

      const parsed = JSON.parse(item);
      // Handle the persisted state structure and restore Date objects
      if (parsed.state && parsed.state.messages) {
        parsed.state.messages = parsed.state.messages.map((msg: Message) => ({
          ...msg,
          timestamp: new Date(msg.timestamp),
        }));
      }
      return parsed;
    } catch (error) {
      console.warn("Failed to get item from localStorage:", error);
      return null;
    }
  },
  setItem: (name: string, value: unknown): void => {
    try {
      // Handle the persisted state structure and serialize Date objects
      const toStore = JSON.parse(JSON.stringify(value));
      if (toStore.state && toStore.state.messages) {
        toStore.state.messages = toStore.state.messages.map((msg: Message) => ({
          ...msg,
          timestamp:
            msg.timestamp instanceof Date
              ? msg.timestamp.toISOString()
              : msg.timestamp,
        }));
      }
      localStorage.setItem(name, JSON.stringify(toStore));
    } catch (error) {
      console.warn("Failed to set item in localStorage:", error);
    }
  },
  removeItem: (name: string): void => {
    try {
      localStorage.removeItem(name);
    } catch (error) {
      console.warn("Failed to remove item from localStorage:", error);
    }
  },
};

export const useChatStore = create<ChatStore>()(
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
      storage: customStorage,
      partialize: (state) => ({
        ...initialState,
        messages: state.messages,
      }),
      onRehydrateStorage: () => (state) => {
        if (state?.messages) {
          console.log(
            "Chat messages rehydrated:",
            state.messages.length,
            "messages"
          );
        }
      },
    }
  )
);
