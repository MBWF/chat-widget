import type { ChatAction, ChatState } from "@/types";
import { useReducer } from "react";

const initialState: ChatState = {
  isOpen: false,
  isOnline: true,
  isMaintenanceMode: false,
  messages: [],
  isLoading: false,
  currentInput: "",
};

function chatReducer(state: ChatState, action: ChatAction): ChatState {
  switch (action.type) {
    case "TOGGLE_WIDGET":
      return {
        ...state,
        isOpen: !state.isOpen,
      };

    case "SET_ONLINE_STATUS":
      return {
        ...state,
        isOnline: action.payload,
      };

    case "SET_MAINTENANCE_MODE":
      return {
        ...state,
        isMaintenanceMode: action.payload,
      };

    case "ADD_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };

    case "SET_MESSAGES":
      return {
        ...state,
        messages: action.payload,
      };

    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };

    case "SET_CURRENT_INPUT":
      return {
        ...state,
        currentInput: action.payload,
      };

    case "CLEAR_MESSAGES":
      return {
        ...state,
        messages: [],
      };

    default:
      return state;
  }
}

export function useChatReducer(initialOverrides?: Partial<ChatState>) {
  const mergedInitialState = { ...initialState, ...initialOverrides };
  return useReducer(chatReducer, mergedInitialState);
}
