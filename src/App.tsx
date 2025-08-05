import { ChatWidget } from "./components/chatWidget";

function App() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Chat Widget Logo Demo
        </h1>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Demonstração da funcionalidade de logo personalizado no ChatWidget.
          Você pode fornecer uma URL de imagem personalizada ou usar a imagem
          padrão.
        </p>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-700 text-center">
            Logo Externo
          </h2>
          <p className="text-sm text-gray-500 text-center">Com URL externa</p>
          <div className="flex justify-center">
            <ChatWidget
              agentName="External Logo"
              position="bottom"
              isOnline={true}
              customStyles={{
                container: "border-2 border-green-200",
                header: "bg-green-600 text-white",
              }}
              introductionWrapper={
                <div className="text-center p-4">
                  <p className="text-sm">🌐 Logo de URL externa</p>
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
