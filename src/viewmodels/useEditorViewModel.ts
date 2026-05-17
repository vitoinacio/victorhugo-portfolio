import { useState, useEffect, useRef } from "react";
import { FileNode } from "@/models/PortfolioModel";

export type Phase = "typing" | "compiling" | "view";

export function useEditorViewModel(activeFile: FileNode | null) {
  const [phase, setPhase] = useState<Phase>("view");
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [terminalLogs]);

  useEffect(() => {
    if (activeFile?.codeSnippet) {
      setPhase("typing");
      setTerminalLogs([]);
    } else {
      setPhase("view");
    }
  }, [activeFile]);

  useEffect(() => {
    if (phase === "compiling") {
      const logs = [
        "> next build",
        "Compiling...",
        "✓ Compiled successfully",
        "Running type checks...",
        "✓ Type check passed",
        "Bundling assets...",
        "✓ Build ready in 1.2s",
        "Launching preview..."
      ];
      
      let currentLog = 0;
      setTerminalLogs([logs[0]]);
      
      const interval = setInterval(() => {
        currentLog++;
        if (currentLog < logs.length) {
          setTerminalLogs(prev => [...prev, logs[currentLog]]);
        } else {
          clearInterval(interval);
          setTimeout(() => setPhase("view"), 600);
        }
      }, 300); // speed of terminal logs

      return () => clearInterval(interval);
    }
  }, [phase]);

  const onTypingComplete = () => setPhase("compiling");

  return {
    phase,
    terminalLogs,
    terminalEndRef,
    onTypingComplete
  };
}
