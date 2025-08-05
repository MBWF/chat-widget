import { ChatWidget } from "./components/chatWidget";

function App() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <ChatWidget
        agentName="AI Assistant"
        logo="/eloquent-ai-logo.jpg"
        buttonPosition="bottom-right"
        isOnline={true}
        isMaintenanceMode={false}
        llmConfig={{
          apiKey: import.meta.env.VITE_OPENAI_API_KEY || "",
          model: "gpt-4o-mini",
        }}
        customStyles={{
          container: "border-2 border-blue-200 shadow-lg",
          header: "bg-gradient-to-r from-blue-600 to-purple-600 text-white",
          userMessageBubble: "bg-blue-600 text-white",
          assistantMessageBubble: "bg-gray-100 border border-gray-200",
          floatingButton:
            "bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg hover:scale-105",
        }}
        introductionWrapper={
          <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg mb-4">
            <div className="text-2xl mb-2">🤖</div>
            <h3 className="font-bold text-gray-800 mb-2">AI-Powered Support</h3>

            <p className="text-xs text-gray-500 mt-2">
              Try different positions using the controls above!
            </p>
          </div>
        }
      />
    </div>
  );
}

export default App;
