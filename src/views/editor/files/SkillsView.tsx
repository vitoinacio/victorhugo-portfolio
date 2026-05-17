"use client";

interface SkillGroup {
  category: string;
  items: { name: string; time: string }[];
}

interface SkillsViewProps {
  data: SkillGroup[];
}

export function SkillsView({ data }: SkillsViewProps) {
  return (
    <div className="flex flex-col max-w-4xl mx-auto py-12 px-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h1 className="text-3xl font-bold text-white mb-8 border-b border-vscode-border pb-4">
        Habilidades &amp; Stacks
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.map((group) => (
          <div key={group.category} className="bg-vscode-activity/30 border border-vscode-border rounded-xl p-6">
            <h2 className="text-lg font-semibold text-vscode-accent mb-4">{group.category}</h2>
            <div className="flex flex-wrap gap-3">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col bg-vscode-bg border border-vscode-border rounded-lg px-4 py-3 min-w-[120px]"
                >
                  <span className="text-white font-medium">{item.name}</span>
                  <span className="text-xs text-vscode-text/60 mt-1">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
