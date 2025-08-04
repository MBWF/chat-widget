import { ChatWidget } from "./components/chatWidget";
import type { CustomStyles } from "./types";

function App() {
  const customStyles: CustomStyles = {
    container:
      "bg-gradient-to-br from-blue-50 to-indigo-100 border-2 border-blue-200",

    header: "bg-blue-600 text-white border-b-2 border-blue-700",
    headerTitle: "text-white font-extrabold text-lg",
    headerLogo: "w-8 h-8 rounded-full border-2 border-white",
    statusBadge: "w-5 h-5 border-3 border-blue-600",

    maintenanceBanner: "bg-orange-100 border-orange-300 border-2",
    maintenanceBannerText: "text-orange-900 font-semibold",

    messageContainer: "bg-gradient-to-b from-blue-25 to-white",
    messageList: "p-6 space-y-4",
    userMessageBubble: "bg-blue-600 text-white shadow-lg",
    assistantMessageBubble: "bg-white border-2 border-blue-200 shadow-md",

    inputContainer: "bg-blue-50 border-t-2 border-blue-200 p-6",
    inputField: "border-2 border-blue-300 focus:border-blue-500 bg-white",
    sendButton: "bg-blue-600 hover:bg-blue-700 shadow-lg",
    inputHelperText: "text-blue-600 font-medium",

    floatingButton: "shadow-2xl border-4 border-white hover:scale-110",
    floatingButtonIcon: "w-7 h-7",

    emptyState: "text-blue-600",
    loadingIndicator: "opacity-75",
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Chat Widget Customization Demo
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">
              Default Styling
            </h2>
            <ChatWidget
              agentName="Default AI"
              isOnline={true}
              isMaintenanceMode={false}
              introductionWrapper={
                <div className="flex flex-col bg-white gap-2 w-full justify-center items-center mt-4">
                  <img
                    src="/eloquent-ai-logo.jpg"
                    alt="Eloquent AI Logo"
                    className="w-12 h-12"
                  />
                  <p className="text-lg font-medium">👋 Welcome!</p>
                  <p className="text-sm">This is the default styling.</p>
                </div>
              }
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">
              Custom Styling
            </h2>
            <ChatWidget
              agentName="Custom AI"
              isOnline={true}
              isMaintenanceMode={false}
              customStyles={customStyles}
              introductionWrapper={
                <div className="flex flex-col gap-2 w-full justify-center items-center mt-4">
                  <img
                    src="/eloquent-ai-logo.jpg"
                    alt="Eloquent AI Logo"
                    className="w-12 h-12"
                  />
                  <p className="text-lg font-medium">🎨 Custom Styled!</p>
                  <p className="text-sm">This widget uses custom styles.</p>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
