"use client";

interface MobileFABProps {
  onClick: () => void;
  isOpen: boolean;
}

export function MobileFAB({ onClick, isOpen }: MobileFABProps) {
  return (
    <button
      onClick={onClick}
      aria-label={isOpen ? "Fechar AI Copilot" : "Abrir AI Copilot"}
      className={`
        lg:hidden fixed bottom-6 right-6 z-50
        w-14 h-14 rounded-full shadow-2xl
        flex items-center justify-center
        transition-all duration-300 ease-in-out
        ${isOpen
          ? "bg-vscode-highlight rotate-45 scale-110"
          : "bg-vscode-accent hover:bg-blue-600 hover:scale-110"
        }
      `}
    >
      {isOpen ? (
        /* X icon when open */
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      ) : (
        /* AI Copilot icon (lightning) when closed */
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )}
    </button>
  );
}
