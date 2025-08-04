import { useChat } from "@/hooks/useChat";
import { Messages } from "../messages";
import { ChatInput } from "./chat-input";
import { StatusBadge } from "@/components/ui";

type ChatOpenProps = {
  introductionWrapper?: React.ReactNode;
  agentName: string;
};

export function ChatOpen({ introductionWrapper, agentName }: ChatOpenProps) {
  const { isMaintenanceMode } = useChat();

  return (
    <div className="bg-white mb-4 w-80 h-96 rounded-lg shadow-2xl flex flex-col overflow-hidden sm:w-[450px] sm:h-[620px]">
      <header className="border-b border-slate-300 p-2 flex items-center gap-2 h-14">
        <img src="/vite.svg" alt="Eloquent AI Logo" className="w-7 h-7" />
        <span className="text-black font-bold">{agentName}</span>
        <StatusBadge />
      </header>

      {isMaintenanceMode && (
        <div className="bg-yellow-100 border-b border-yellow-200 p-3">
          <p className="text-yellow-800 text-sm text-center">
            🔧 We're currently under maintenance. Chat is temporarily
            unavailable.
          </p>
        </div>
      )}

      <section className="flex-1 flex flex-col gap-4 bg-gray-50 overflow-hidden">
        {introductionWrapper}
        <Messages />
      </section>

      <ChatInput />
    </div>
  );
}
