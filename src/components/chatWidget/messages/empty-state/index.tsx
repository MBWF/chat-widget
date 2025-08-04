import React from "react";

export const EmptyState = React.memo(() => (
  <div className="flex items-center justify-center h-full text-gray-500">
    <div className="text-center">
      <p className="text-lg font-medium mb-2">👋 Welcome!</p>
      <p className="text-sm">Start a conversation by typing a message below.</p>
    </div>
  </div>
));
