"use client";

import { useEffect, useState } from "react";

interface TypewriterEffectProps {
  code: string;
  onComplete: () => void;
  speed?: number;
  hideCursor?: boolean;
}

export function TypewriterEffect({
  code,
  onComplete,
  speed = 20,
  hideCursor = false,
}: TypewriterEffectProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setDisplayedText("");
    setCurrentIndex(0);
  }, [code]);

  useEffect(() => {
    if (currentIndex < code.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + code[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        onComplete();
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, code, onComplete, speed]);

  return (
    <div className="font-mono text-sm sm:text-base text-vscode-text p-4 whitespace-pre-wrap">
      {displayedText}
      {!hideCursor && (
        <span className="inline-block w-2 h-4 ml-1 bg-vscode-text animate-pulse" />
      )}
    </div>
  );
}
