"use client";

import { ChatMessage } from "@/viewmodels/useCopilotViewModel";

interface ChatMessageItemProps {
  message: ChatMessage;
}

export function ChatMessageItem({ message }: ChatMessageItemProps) {
  const isUser = message.role === "user";

  return (
    <div className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}>
      <div className="text-xs text-vscode-text/50 mb-1">{isUser ? "Você" : "Copilot"}</div>
      <div
        className={`p-3 rounded-lg max-w-[90%] ${
          isUser ? "bg-vscode-highlight text-white" : "bg-vscode-activity"
        }`}
      >
        {message.content || <span className="opacity-50 italic">digitando...</span>}
      </div>
    </div>
  );
}
