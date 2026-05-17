"use client";

interface ExperienceProject {
  name: string;
  description: string;
}

interface ExperienceViewProps {
  data: {
    company: string;
    role: string;
    period: string;
    url: string;
    description: string;
    projects: ExperienceProject[];
  };
}

export function ExperienceView({ data }: ExperienceViewProps) {
  return (
    <div className="flex flex-col max-w-3xl mx-auto py-12 px-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">{data.company}</h1>
        <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
          <span className="text-vscode-accent font-medium px-3 py-1 bg-vscode-accent/10 rounded-full">
            {data.role}
          </span>
          <span className="text-vscode-text/60">{data.period}</span>
          <a
            href={data.url}
            target="_blank"
            rel="noreferrer"
            className="text-vscode-text/60 hover:text-white underline"
          >
            Website
          </a>
        </div>
        <p className="text-vscode-text/90 leading-relaxed text-lg">{data.description}</p>
      </div>

      <h3 className="text-xl font-semibold text-white mb-6 border-b border-vscode-border pb-2">
        Projetos em Destaque
      </h3>
      <div className="space-y-6">
        {data.projects.map((proj) => (
          <div
            key={proj.name}
            className="relative pl-6 border-l-2 border-vscode-accent/30 hover:border-vscode-accent transition-colors"
          >
            <div className="absolute w-3 h-3 bg-vscode-accent rounded-full -left-[7px] top-1.5" />
            <h4 className="text-lg font-semibold text-white mb-2">{proj.name}</h4>
            <p className="text-vscode-text/80 leading-relaxed">{proj.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
