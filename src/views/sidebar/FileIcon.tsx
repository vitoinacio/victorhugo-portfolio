"use client";

import { ReactElement } from "react";

const FILE_EXTENSION_ICON_MAP: Record<string, ReactElement> = {
  ".tsx": (
    <svg className="w-4 h-4 mr-1.5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 22.65l-9.5-5.5v-11l9.5-5.5 9.5 5.5v11l-9.5 5.5zm-8.35-6.16l8.35 4.84 8.35-4.84v-9.68l-8.35-4.84-8.35 4.84v9.68z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  ),
  ".jsx": (
    <svg className="w-4 h-4 mr-1.5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 22.65l-9.5-5.5v-11l9.5-5.5 9.5 5.5v11l-9.5 5.5zm-8.35-6.16l8.35 4.84 8.35-4.84v-9.68l-8.35-4.84-8.35 4.84v9.68z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  ),
  ".ts": (
    <svg className="w-4 h-4 mr-1.5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 22.65l-9.5-5.5v-11l9.5-5.5 9.5 5.5v11l-9.5 5.5zm-8.35-6.16l8.35 4.84 8.35-4.84v-9.68l-8.35-4.84-8.35 4.84v9.68z" />
      <text x="8" y="15" fill="currentColor" fontSize="8" fontWeight="bold">TS</text>
    </svg>
  ),
  ".js": (
    <svg className="w-4 h-4 mr-1.5 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 22.65l-9.5-5.5v-11l9.5-5.5 9.5 5.5v11l-9.5 5.5zm-8.35-6.16l8.35 4.84 8.35-4.84v-9.68l-8.35-4.84-8.35 4.84v9.68z" />
      <text x="8.5" y="15" fill="currentColor" fontSize="7" fontWeight="bold">JS</text>
    </svg>
  ),
  ".md": (
    <svg className="w-4 h-4 mr-1.5 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.5 4h-17C2.12 4 1 5.12 1 6.5v11C1 18.88 2.12 20 3.5 20h17c1.38 0 2.5-1.12 2.5-2.5v-11C23 5.12 21.88 4 20.5 4zm-14.5 13H4v-7.5l2 2 2-2V17h2V7.5L7 10 4 7.5V17zm8 0h-2V7h2v6l2-2 2 2-4 4z" />
    </svg>
  ),
  ".css": (
    <svg className="w-4 h-4 mr-1.5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
      <path d="M5 3l.65 3.34h15.22L19.4 21l-7.4 2.05L4.6 21l-.42-2.12h3.25l.18.91 4.39 1.2 4.39-1.2.78-8.7H6.77L6.44 11h10.63l.23-2.67H6.1l-.33-1.67h13.62L20.25 3H5z" />
    </svg>
  ),
  ".pdf": (
    <svg className="w-4 h-4 mr-1.5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM15 10h-1v-1.5h1V10z" />
      <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z" />
    </svg>
  ),
};

interface FileIconProps {
  name: string;
  isFile: boolean;
  isOpen: boolean;
}

export function FileIcon({ name, isFile, isOpen }: FileIconProps) {
  if (!isFile) {
    return isOpen ? (
      <svg className="w-4 h-4 mr-1.5 text-vscode-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
      </svg>
    ) : (
      <svg className="w-4 h-4 mr-1.5 text-vscode-text/70" fill="currentColor" viewBox="0 0 24 24">
        <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" />
      </svg>
    );
  }

  const ext = Object.keys(FILE_EXTENSION_ICON_MAP).find((e) => name.endsWith(e));
  if (ext) return FILE_EXTENSION_ICON_MAP[ext];

  return (
    <svg className="w-4 h-4 mr-1.5 text-vscode-text/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  );
}
