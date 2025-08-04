import ChatWidget from "./components/chatWidget";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <ChatWidget
        agentName="Eloquent AI"
        isOnline={true}
        isMaintenanceMode={false}
        introductionWrapper={
          <div className="flex flex-col gap-2 w-full justify-center items-center mt-4">
            <img
              src="/eloquent-ai-logo.jpg"
              alt="Eloquent AI Logo"
              className="w-12 h-12"
            />
            <p className="text-lg font-medium">👋 Welcome!</p>
            <p className="text-sm">
              Start a conversation by typing a message below.
            </p>
          </div>
        }
      />
    </div>
  );
}

export default App;
