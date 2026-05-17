"use client";

import { FileNode } from "@/models/PortfolioModel";
import { FileTreeItem } from "./FileTreeItem";

interface SidebarProps {
  data: FileNode[];
  onFileSelect: (file: FileNode) => void;
  activeFileId: string | null;
}

export function Sidebar({ data, onFileSelect, activeFileId }: SidebarProps) {
  return (
    <div className="flex flex-col h-full overflow-y-auto custom-scrollbar">
      <div className="px-4 py-2 text-xs font-semibold tracking-wider text-vscode-text/70 uppercase">
        Explorer
      </div>
      <div className="flex flex-col py-2">
        {data.map((node) => (
          <FileTreeItem
            key={node.id}
            node={node}
            onFileSelect={onFileSelect}
            activeFileId={activeFileId}
            depth={0}
          />
        ))}
      </div>
    </div>
  );
}
