"use client";

import { useState } from "react";
import { FileNode } from "@/models/PortfolioModel";
import { FileIcon } from "./FileIcon";

interface FileTreeItemProps {
  node: FileNode;
  onFileSelect: (file: FileNode) => void;
  activeFileId: string | null;
  depth: number;
}

export function FileTreeItem({ node, onFileSelect, activeFileId, depth }: FileTreeItemProps) {
  const [isOpen, setIsOpen] = useState(true);
  const isFile = node.type === "file";
  const isActive = activeFileId === node.id;

  const handleClick = () => {
    if (isFile) {
      onFileSelect(node);
    } else {
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <div>
      <div
        className={`flex items-center py-1.5 px-4 cursor-pointer hover:bg-vscode-activity transition-colors ${
          isActive ? "bg-vscode-highlight text-white" : "text-vscode-text"
        }`}
        style={{ paddingLeft: `${16 + depth * 12}px` }}
        onClick={handleClick}
      >
        <div className="w-4 flex justify-center mr-1">
          {!isFile && (
            <svg
              className={`w-3.5 h-3.5 text-vscode-text/50 transition-transform ${isOpen ? "rotate-90" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          )}
        </div>
        <FileIcon name={node.name} isFile={isFile} isOpen={isOpen} />
        <span className="truncate">{node.name}</span>
      </div>

      {!isFile && isOpen && node.children && (
        <div className="flex flex-col">
          {node.children.map((child) => (
            <FileTreeItem
              key={child.id}
              node={child}
              onFileSelect={onFileSelect}
              activeFileId={activeFileId}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}
