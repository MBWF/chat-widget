import type { ChatContextType, ChatState, LLMConfig, Message } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import OpenAI from "openai";

const initialState: ChatState = {
  agentName: "AI Assistant",
  isOpen: true,
  isOnline: true,
  isLoading: false,
  isMaintenanceMode: false,
  currentInput: "",
  messages: [],
  llmConfig: {
    apiKey: "",
    model: "",
  },
};

export const useChatStore = create<ChatContextType>()(
  persist(
    (set, get) => ({
      ...initialState,
      toggleWidget: () => set((state) => ({ isOpen: !state.isOpen })),
      setAgentName: (agentName: string) => set({ agentName }),
      clearMessages: () => set({ messages: [] }),
      setOnlineStatus: (isOnline: boolean) => set({ isOnline }),
      setCurrentInput: (currentInput: string) => set({ currentInput }),
      setLoading: (isLoading: boolean) => set({ isLoading }),
      setMaintenanceMode: (isMaintenanceMode: boolean) =>
        set({ isMaintenanceMode }),
      setLLMConfig: (llmConfig: LLMConfig) => set({ llmConfig }),
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

        const client = new OpenAI({
          apiKey: state.llmConfig.apiKey,
          dangerouslyAllowBrowser: true,
        });

        try {
          const response = await client.chat.completions.create({
            model: state.llmConfig.model,
            messages: [
              ...state.messages.map((m) => ({
                role: m.sender as "user" | "assistant",
                content: m.content,
              })),
              { role: "user", content: content.trim() },
            ],
          });

          const assistantContent = response.choices[0]?.message?.content || "";

          const assistantMessage: Message = {
            id: `assistant-${Date.now()}`,
            content: assistantContent,
            sender: "assistant",
            timestamp: new Date(),
          };

          set((state) => ({
            messages: [...state.messages, assistantMessage],
            isLoading: false,
          }));
        } catch (error) {
          console.error("Erro na API OpenAI:", error);
          const errorMessage: Message = {
            id: `error-${Date.now()}`,
            content: "Erro de conexão com a OpenAI. Tente novamente.",
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
