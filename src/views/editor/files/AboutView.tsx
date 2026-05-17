"use client";

import Image from "next/image";

interface AboutViewProps {
  data: {
    name: string;
    role: string;
    description: string;
    education: string;
    links: { label: string; url: string; icon: string }[];
  };
}

export function AboutView({ data }: AboutViewProps) {
  return (
    <div className="flex flex-col max-w-3xl mx-auto py-12 px-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-32 h-32 rounded-full flex-shrink-0 overflow-hidden shadow-lg relative border-2 border-vscode-accent">
          <Image src="/perfil.jpg" alt="Foto de Perfil" fill className="object-cover" sizes="128px" />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">{data.name}</h1>
          <h2 className="text-xl text-vscode-accent font-medium mb-6">{data.role}</h2>
          <p className="text-vscode-text/90 leading-relaxed mb-6 text-lg">{data.description}</p>

          <div className="bg-vscode-activity/50 border border-vscode-border rounded-lg p-5 mb-8">
            <h3 className="text-sm uppercase tracking-wider text-vscode-text/50 font-semibold mb-3">Educação</h3>
            <p className="text-vscode-text/90">{data.education}</p>
          </div>

          <div className="flex flex-wrap gap-4">
            {data.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-vscode-activity hover:bg-vscode-highlight border border-vscode-border rounded-md text-white transition-all hover:scale-105"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
