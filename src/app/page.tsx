"use client";

import { portfolioData } from "@/models/PortfolioModel";
import { useHomeViewModel } from "@/viewmodels/useHomeViewModel";
import { ActivityBar } from "@/views/layout/ActivityBar";
import { MobileFAB } from "@/views/layout/MobileFAB";
import { Sidebar } from "@/views/sidebar/Sidebar";
import { Editor } from "@/views/editor/Editor";
import { AICopilot } from "@/views/copilot/AICopilot";

export default function Home() {
  const {
    activeFile,
    isSidebarOpen,
    isCopilotOpen,
    handleFileSelect,
    toggleSidebar,
    toggleCopilot,
    setIsSidebarOpen,
    setIsCopilotOpen,
  } = useHomeViewModel();

  return (
    <div className="flex h-screen w-full overflow-hidden bg-vscode-bg text-vscode-text text-sm">

      {/* Activity Bar */}
      <ActivityBar onToggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

      {/* Mobile Backdrop for Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/60 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Primary Sidebar (Explorer) */}
      {/* Desktop: participates in flex flow */}
      <div className="hidden md:flex w-64 h-full bg-vscode-sidebar border-r border-vscode-border flex-shrink-0 flex-col">
        <Sidebar
          data={portfolioData}
          onFileSelect={handleFileSelect}
          activeFileId={activeFile?.id || null}
        />
      </div>

      {/* Mobile: fixed overlay that slides in from left */}
      <div
        className={`
          fixed top-0 left-0 z-30 h-full w-64 bg-vscode-sidebar border-r border-vscode-border
          transition-transform duration-300 ease-in-out
          md:hidden
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <Sidebar
          data={portfolioData}
          onFileSelect={handleFileSelect}
          activeFileId={activeFile?.id || null}
        />
      </div>

      {/* Editor Area (Center) */}
      <div className="flex-1 h-full bg-vscode-bg flex flex-col min-w-0 min-h-0">
        {/* Tab Bar */}
        <div className="h-9 bg-vscode-bg border-b border-vscode-border flex items-center overflow-x-auto flex-shrink-0">
          {activeFile ? (
            <div className="px-4 py-1.5 min-w-min bg-vscode-bg border-t border-vscode-accent text-vscode-accent text-xs whitespace-nowrap flex items-center">
              {activeFile.name}
            </div>
          ) : (
            <div className="px-4 py-1.5 min-w-min bg-vscode-bg text-vscode-text/50 text-xs whitespace-nowrap italic">
              Nenhum arquivo selecionado
            </div>
          )}
        </div>
        <Editor activeFile={activeFile} />
      </div>

      {/* AI Copilot (Right) */}
      {/* Desktop: participates in flex flow */}
      <div className="hidden lg:flex w-80 h-full bg-vscode-sidebar border-l border-vscode-border flex-shrink-0 flex-col min-h-0">
        <div className="px-4 py-2 text-xs font-semibold tracking-wider text-vscode-text/70 uppercase border-b border-vscode-border flex-shrink-0">
          AI Copilot
        </div>
        <AICopilot />
      </div>

      {/* Mobile: fixed overlay that slides in from right */}
      {/* Mobile Backdrop for Copilot */}
      {isCopilotOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/60 lg:hidden"
          onClick={() => setIsCopilotOpen(false)}
          aria-hidden="true"
        />
      )}
      <div
        className={`
          fixed top-0 right-0 z-30 h-full w-80 bg-vscode-sidebar border-l border-vscode-border flex flex-col min-h-0
          transition-transform duration-300 ease-in-out
          lg:hidden
          ${isCopilotOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="px-4 py-2 text-xs font-semibold tracking-wider text-vscode-text/70 uppercase border-b border-vscode-border flex-shrink-0 flex items-center justify-between">
          <span>AI Copilot</span>
          <button
            className="text-vscode-text/50 hover:text-white"
            onClick={() => setIsCopilotOpen(false)}
            aria-label="Fechar Copilot"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <AICopilot />
      </div>

      {/* Mobile FAB to toggle Copilot */}
      <MobileFAB onClick={toggleCopilot} isOpen={isCopilotOpen} />
    </div>
  );
}
