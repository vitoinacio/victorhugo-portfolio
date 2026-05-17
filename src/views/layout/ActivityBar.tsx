"use client";

interface ActivityBarProps {
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
}

export function ActivityBar({ onToggleSidebar, isSidebarOpen }: ActivityBarProps) {
  return (
    <div className="w-12 h-full bg-vscode-activity flex flex-col items-center py-4 border-r border-vscode-border flex-shrink-0">
      {/* Explorer / Toggle Sidebar */}
      <button
        onClick={onToggleSidebar}
        aria-label="Toggle file explorer"
        className={`w-9 h-9 mb-4 flex items-center justify-center cursor-pointer rounded transition-colors ${
          isSidebarOpen
            ? "text-white border-l-2 border-white bg-vscode-highlight/30"
            : "text-vscode-text/50 hover:text-white"
        }`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
          />
        </svg>
      </button>
    </div>
  );
}
