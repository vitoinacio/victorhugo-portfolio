"use client";

import { FileNode } from "@/models/PortfolioModel";
import { useEditorViewModel } from "@/viewmodels/useEditorViewModel";
import { TypewriterEffect } from "./TypewriterEffect";
import { AboutView } from "./files/AboutView";
import { SkillsView } from "./files/SkillsView";
import { ExperienceView } from "./files/ExperienceView";
import { ProjectView } from "./files/ProjectView";
import { CurriculoView } from "./files/CurriculoView";

interface EditorProps {
  activeFile: FileNode | null;
}

function renderView(activeFile: FileNode) {
  switch (activeFile.viewType) {
    case "about":
      return <AboutView data={activeFile.data} />;
    case "skills":
      return <SkillsView data={activeFile.data} />;
    case "experience":
      return <ExperienceView data={activeFile.data} />;
    case "project":
      return <ProjectView data={activeFile.data} />;
    case "pdf":
      return <CurriculoView />;
    default:
      return (
        <pre className="text-vscode-text text-sm font-mono whitespace-pre-wrap leading-relaxed p-6 animate-in fade-in duration-500">
          {activeFile.content || "Sem conteúdo."}
        </pre>
      );
  }
}

export function Editor({ activeFile }: EditorProps) {
  const { phase, terminalLogs, terminalEndRef, onTypingComplete } =
    useEditorViewModel(activeFile);

  if (!activeFile) {
    return (
      <div className="p-8 flex-1 flex flex-col items-center justify-center text-vscode-text/50">
        <div className="text-6xl mb-4 font-thin">VS Code</div>
        <p className="text-sm">Selecione um arquivo para visualizar</p>
      </div>
    );
  }


  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-vscode-bg relative min-h-0">
      {/* Content Area */}
      <div className="flex-1 overflow-auto custom-scrollbar relative">
        {phase === "typing" || phase === "compiling" ? (
          <TypewriterEffect
            code={activeFile.codeSnippet!}
            onComplete={onTypingComplete}
            speed={15}
            hideCursor={phase === "compiling"}
          />
        ) : (
          renderView(activeFile)
        )}
      </div>

      {/* Terminal Panel */}
      {phase === "compiling" && (
        <div className="h-48 bg-[#1e1e1e] border-t border-vscode-border flex flex-col animate-in slide-in-from-bottom-10 duration-300">
          <div className="flex items-center px-4 py-2 border-b border-vscode-border flex-shrink-0">
            <div className="flex gap-4 text-xs">
              <span className="text-vscode-text/50 uppercase tracking-wider">Problems</span>
              <span className="text-vscode-text/50 uppercase tracking-wider">Output</span>
              <span className="text-vscode-text uppercase tracking-wider border-b border-vscode-accent pb-1 -mb-[9px]">
                Terminal
              </span>
            </div>
          </div>
          <div className="p-4 overflow-y-auto custom-scrollbar font-mono text-sm flex-1">
            {terminalLogs.map((log, i) => (
              <div
                key={i}
                className={`mb-1 ${log.includes("✓") ? "text-green-400" : "text-vscode-text"}`}
              >
                {log}
              </div>
            ))}
            <span className="animate-pulse text-vscode-text">_</span>
            <div ref={terminalEndRef} />
          </div>
        </div>
      )}
    </div>
  );
}
