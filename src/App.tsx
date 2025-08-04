import ChatWidget from "./components/chatWidget";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <ChatWidget isOnline={true} isMaintenanceMode={false} />
    </div>
  );
}

export default App;
