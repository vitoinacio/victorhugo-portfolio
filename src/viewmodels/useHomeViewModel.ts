import { useState } from "react";
import { FileNode } from "@/models/PortfolioModel";

export function useHomeViewModel() {
  const [activeFile, setActiveFile] = useState<FileNode | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCopilotOpen, setIsCopilotOpen] = useState(false);

  const handleFileSelect = (file: FileNode) => {
    setActiveFile(file);
    // Auto-close sidebar on mobile after selection
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
    if (isCopilotOpen && window.innerWidth < 768) {
      setIsCopilotOpen(false); // Close copilot if opening sidebar on mobile
    }
  };

  const toggleCopilot = () => {
    setIsCopilotOpen(prev => !prev);
    if (isSidebarOpen && window.innerWidth < 768) {
      setIsSidebarOpen(false); // Close sidebar if opening copilot on mobile
    }
  };

  return {
    activeFile,
    isSidebarOpen,
    isCopilotOpen,
    handleFileSelect,
    toggleSidebar,
    toggleCopilot,
    setIsSidebarOpen,
    setIsCopilotOpen
  };
}
