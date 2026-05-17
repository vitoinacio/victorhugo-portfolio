"use client";

import { useCopilotViewModel } from "@/viewmodels/useCopilotViewModel";
import { ChatMessageItem } from "./ChatMessageItem";

export function AICopilot() {
  const {
    messages,
    input,
    isLoading,
    error,
    messagesEndRef,
    quickActions,
    handleInputChange,
    handleSubmit,
    handleQuickAction,
  } = useCopilotViewModel();

  return (
    <div className="flex flex-col flex-1 min-h-0 bg-vscode-sidebar">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm text-vscode-text custom-scrollbar">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-vscode-text/50">
            <svg
              className="w-12 h-12 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <p className="text-center px-4">
              Explore as pastas do meu projeto à esquerda ou peça para eu resumir minhas habilidades aqui!
            </p>
            <div className="mt-8 flex flex-col gap-2 w-full max-w-xs">
              {quickActions.map((action, i) => (
                <button
                  key={i}
                  onClick={() => handleQuickAction(action)}
                  disabled={isLoading}
                  className="px-3 py-2 text-xs bg-vscode-activity hover:bg-vscode-highlight rounded text-left transition-colors disabled:opacity-50"
                >
                  &quot;{action}&quot;
                </button>
              ))}
            </div>
          </div>
        ) : (
          messages.map((m) => <ChatMessageItem key={m.id} message={m} />)
        )}

        {isLoading && (
          <div className="flex flex-col items-start">
            <div className="text-xs text-vscode-text/50 mb-1">Copilot</div>
            <div className="p-3 rounded-lg bg-vscode-activity flex space-x-1">
              <div className="w-2 h-2 bg-vscode-text/50 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-vscode-text/50 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
              <div className="w-2 h-2 bg-vscode-text/50 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
            </div>
          </div>
        )}

        {error && (
          <div className="p-3 rounded-lg bg-red-900/30 border border-red-500 text-red-200">
            {error.message || "Ocorreu um erro ao conectar."}
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 bg-vscode-sidebar border-t border-vscode-border flex-shrink-0">
        <form onSubmit={handleSubmit} className="flex relative">
          <input
            className="w-full bg-vscode-activity text-vscode-text rounded border border-vscode-border px-3 py-2 text-sm focus:outline-none focus:border-vscode-accent placeholder-vscode-text/30"
            value={input}
            placeholder="Faça uma pergunta..."
            onChange={handleInputChange}
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="absolute right-2 top-2 text-vscode-text/50 hover:text-vscode-accent disabled:opacity-50"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </form>
        <div className="text-center text-[10px] text-vscode-text/30 mt-2">
          Powered by Gemini 2.5 Flash
        </div>
      </div>
    </div>
  );
}
