import { ChatWidget } from "./components/chatWidget";

function App() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <ChatWidget
        agentName="Eloquent Ai"
        logo="/eloquent-ai-logo.jpg"
        buttonPosition="bottom-right"
        isOnline={true}
        isMaintenanceMode={false}
        llmConfig={{
          apiKey: import.meta.env.VITE_OPENAI_API_KEY || "",
          model: "gpt-4o-mini",
        }}
        introductionWrapper={
          <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg mb-4">
            <div className="text-2xl mb-2">🤖</div>
            <h3 className="font-bold text-gray-800 mb-2">AI-Powered Support</h3>
          </div>
        }
      />
    </div>
  );
}

export default App;
