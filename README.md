# Eloquent Chat Widget

A modern, embeddable chat widget built with React, TypeScript, and Zustand for seamless customer support integration.

[![npm version](https://badge.fury.io/js/eloquent-chat-widget.svg)](https://badge.fury.io/js/eloquent-chat-widget)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- 🚀 **Modern Stack**: Built with React 18+, TypeScript, and Zustand
- 💾 **Persistent Storage**: Automatic message history with localStorage
- 🎨 **Customizable**: Easy theming and styling options
- 📱 **Responsive**: Works perfectly on desktop and mobile
- 🔧 **Easy Integration**: Drop-in component with minimal setup
- 🎯 **TypeScript**: Full type safety and IntelliSense support
- ⚡ **Lightweight**: Optimized bundle size with tree-shaking
- 🔄 **State Management**: Powered by Zustand for optimal performance

## 📦 Installation

```bash
npm install eloquent-chat-widget
```

```bash
yarn add eloquent-chat-widget
```

```bash
pnpm add eloquent-chat-widget
```

## 🚀 Quick Start

### Basic Usage

```tsx
import { ChatWidget } from 'eloquent-chat-widget';
import 'eloquent-chat-widget/styles';

function App() {
  return (
    <div>
      <h1>My Website</h1>
      <ChatWidget 
        agentName="Support Agent"
        isOnline={true}
        isMaintenanceMode={false}
      />
    </div>
  );
}
```

### Advanced Usage with Custom Logo, Position and Introduction

```tsx
import { ChatWidget } from 'eloquent-chat-widget';
import 'eloquent-chat-widget/styles';

function App() {
  return (
    <ChatWidget
      agentName="Eloquent AI"
      logo="/my-custom-logo.png"
      position="top"
      isOnline={true}
      isMaintenanceMode={false}
      introductionWrapper={
        <div className="text-center p-4">
          <h3 className="font-bold">Welcome to Support!</h3>
          <p className="text-sm text-gray-600">
            How can we help you today?
          </p>
        </div>
      }
    />
  );
}
```

### Custom Logo Options

The `logo` prop allows you to customize the header logo:

```tsx
// Use default logo (no logo prop needed)
<ChatWidget agentName="Support" />

// Use custom local image
<ChatWidget
  agentName="Support"
  logo="/assets/my-logo.png"
/>

// Use external URL
<ChatWidget
  agentName="Support"
  logo="https://example.com/logo.png"
/>

// Combine with custom styles for logo sizing
<ChatWidget
  agentName="Support"
  logo="/my-logo.svg"
  customStyles={{
    headerLogo: "w-8 h-8 rounded-full"
  }}
/>
```

### Position Options

The `position` prop controls where the chat window appears relative to the floating button:

```tsx
// Chat opens below the button (default)
<ChatWidget agentName="Support" position="bottom" />

// Chat opens above the button
<ChatWidget agentName="Support" position="top" />

// Chat opens to the left of the button
<ChatWidget agentName="Support" position="left" />

// Chat opens to the right of the button
<ChatWidget agentName="Support" position="right" />
```

## 📖 API Reference

### ChatWidget Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `agentName` | `string` | **Required** | Name displayed in the chat header |
| `isOnline` | `boolean` | `true` | Online/offline status indicator |
| `isMaintenanceMode` | `boolean` | `false` | Enables maintenance mode banner |
| `introductionWrapper` | `ReactNode` | `undefined` | Custom welcome message component |
| `customStyles` | `CustomStyles` | `undefined` | Custom CSS classes for widget components |
| `position` | `ChatPosition` | `"bottom"` | Position of chat window relative to floating button |
| `logo` | `string` | `"/vite.svg"` | URL or path to custom logo image for the header |
| `llmConfig` | `LLMConfig` | `undefined` | LLM configuration for AI-powered responses |

### Advanced Usage with Store

```tsx
import { useChatStore } from 'eloquent-chat-widget';

function CustomChatComponent() {
  const { messages, sendMessage, clearMessages } = useChatStore();
  
  return (
    <div>
      <button onClick={() => clearMessages()}>
        Clear Chat History
      </button>
      <p>Total messages: {messages.length}</p>
    </div>
  );
}
```

## 🎨 Styling & Customization

The widget comes with built-in Tailwind CSS styles and supports extensive customization through the `customStyles` prop.

```tsx
import 'eloquent-chat-widget/styles';
```

### Custom Styles (Recommended)

Use the `customStyles` prop to customize the widget appearance:

```tsx
import { ChatWidget, CustomStyles } from 'eloquent-chat-widget';

const customStyles: CustomStyles = {
  container: "bg-blue-50 border-2 border-blue-200",
  header: "bg-blue-600 text-white",
  userMessageBubble: "bg-blue-600 text-white",
  assistantMessageBubble: "bg-white border border-gray-200",
  inputField: "border-2 border-blue-300 focus:border-blue-500",
  sendButton: "bg-blue-600 hover:bg-blue-700",
  floatingButton: "bg-blue-600 hover:bg-blue-700 shadow-lg"
};

function App() {
  return (
    <ChatWidget
      agentName="Custom AI"
      customStyles={customStyles}
    />
  );
}
```

### Available Customization Options

The `CustomStyles` interface provides customization for:

- **Container**: `container` - Main widget container
- **Header**: `header`, `headerTitle`, `headerLogo`, `statusBadge`
- **Messages**: `messageContainer`, `messageList`, `messageBubble`, `userMessageBubble`, `assistantMessageBubble`
- **Input**: `inputContainer`, `inputField`, `sendButton`, `inputHelperText`
- **Floating Button**: `floatingButton`, `floatingButtonIcon`
- **Layout**: `widgetWrapper` - Widget wrapper container for positioning
- **Other**: `maintenanceBanner`, `emptyState`, `loadingIndicator`

For detailed customization examples and best practices, see the [Customization Guide](CUSTOMIZATION_GUIDE.md).

## 🤖 OpenAI Integration

The ChatWidget now supports real AI-powered conversations through OpenAI's GPT models, providing intelligent responses with streaming support.

### Basic OpenAI Configuration

```tsx
import { ChatWidget, LLMConfig } from 'eloquent-chat-widget';

const llmConfig: LLMConfig = {
  apiKey: "sk-your-openai-api-key-here",
  model: "gpt-3.5-turbo",
  temperature: 0.7,
  maxTokens: 1000,
  systemPrompt: "You are a helpful customer support assistant.",
  streaming: true
};

function App() {
  return (
    <ChatWidget
      agentName="AI Support"
      llmConfig={llmConfig}
    />
  );
}
```

### Configuration Examples

#### Basic Configuration
```tsx
const basicConfig: LLMConfig = {
  apiKey: "sk-your-openai-api-key-here",
  model: "gpt-3.5-turbo",
  temperature: 0.7,
  maxTokens: 1000,
  systemPrompt: "You are a helpful assistant.",
  streaming: true,
  timeout: 30000
};
```

#### Advanced Configuration
```tsx
const advancedConfig: LLMConfig = {
  apiKey: "sk-your-openai-api-key-here",
  model: "gpt-4-turbo", // Use GPT-4 for better responses
  temperature: 0.3, // Lower temperature for more focused responses
  maxTokens: 2000, // Longer responses
  systemPrompt: `You are a professional customer support assistant for our company.
    Always be helpful, polite, and provide accurate information.
    If you don't know something, admit it and offer to help find the answer.`,
  streaming: true,
  timeout: 45000 // Longer timeout for GPT-4
};
```

#### Customer Support Configuration
```tsx
const supportConfig: LLMConfig = {
  apiKey: "sk-your-openai-api-key-here",
  model: "gpt-3.5-turbo",
  temperature: 0.5,
  maxTokens: 800,
  systemPrompt: `You are a customer support agent. Be concise, helpful, and professional.
    Focus on solving the customer's problem quickly and efficiently.`,
  streaming: true,
  timeout: 30000
};
```

### Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `apiKey` | `string` | **Required** | Your OpenAI API key |
| `model` | `string` | `"gpt-3.5-turbo"` | OpenAI model to use (gpt-3.5-turbo, gpt-4, gpt-4-turbo) |
| `temperature` | `number` | `0.7` | Response creativity (0.0 to 1.0) |
| `maxTokens` | `number` | `1000` | Maximum response length |
| `systemPrompt` | `string` | Default prompt | System prompt to guide AI behavior |
| `streaming` | `boolean` | `true` | Enable real-time streaming responses |
| `timeout` | `number` | `30000` | Request timeout in milliseconds |

### Features

- **🔄 Real-time Streaming**: See AI responses as they're generated
- **🛡️ Error Handling**: Comprehensive error handling with user-friendly messages
- **💾 Conversation Memory**: AI remembers the conversation context
- **🤖 OpenAI Integration**: Powered by GPT-3.5, GPT-4, and other OpenAI models
- **🎛️ Customizable**: Fine-tune AI behavior with system prompts and parameters
- **🔒 Secure**: API keys are handled securely on the client side

### Error Handling

The widget automatically handles various error scenarios:

- **Authentication errors**: Invalid API keys
- **Rate limiting**: Too many requests
- **Network errors**: Connection issues
- **Timeouts**: Slow responses
- **API errors**: Service unavailable

Users see friendly error messages and can retry failed requests.

### Legacy CSS Override (Not Recommended)

You can still override styles with CSS, but the `customStyles` prop is preferred:

```css
/* Custom chat widget styles */
.chat-widget-container {
  /* Your custom styles */
}
```

## 🔧 Configuration

### Environment Setup

The widget automatically handles:
- Message persistence in localStorage
- Date serialization/deserialization
- Error recovery for corrupted data
- Responsive design adaptation

### TypeScript Support

Full TypeScript support is included with proper type definitions:

```tsx
import type { Message, ChatWidgetProps, CustomStyles, ChatPosition } from 'eloquent-chat-widget';

const customMessage: Message = {
  id: 'custom-1',
  content: 'Hello!',
  sender: 'user',
  timestamp: new Date(),
};

const customStyles: CustomStyles = {
  container: "bg-gradient-to-br from-blue-50 to-indigo-100",
  header: "bg-blue-600 text-white"
};

const position: ChatPosition = "top";
```

## 🌟 Examples

### Integration with Next.js

```tsx
// pages/_app.tsx or app/layout.tsx
import 'eloquent-chat-widget/styles';

// components/ChatSupport.tsx
import dynamic from 'next/dynamic';

const ChatWidget = dynamic(
  () => import('eloquent-chat-widget').then(mod => ({ default: mod.ChatWidget })),
  { ssr: false }
);

export default function ChatSupport() {
  return (
    <ChatWidget 
      agentName="Support Team"
      isOnline={true}
    />
  );
}
```

### Integration with Vite/React

```tsx
// main.tsx
import 'eloquent-chat-widget/styles';

// App.tsx
import { ChatWidget } from 'eloquent-chat-widget';

function App() {
  return (
    <>
      {/* Your app content */}
      <ChatWidget agentName="AI Assistant" />
    </>
  );
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Issues

If you find a bug or have a feature request, please open an issue on [GitHub](https://github.com/yourusername/eloquent-chat-widget/issues).

## 📞 Support

For support, email your.email@example.com or join our community discussions.

---

Made with ❤️ by [Your Name](https://github.com/yourusername)
