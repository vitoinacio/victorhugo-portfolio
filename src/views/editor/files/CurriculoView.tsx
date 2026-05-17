"use client";

const skills = [
  "React", "Next.js", "TypeScript", "TailwindCSS", "Node.js",
  "Angular", "Vite", "PostgreSQL", "Git", "REST APIs"
];

export function CurriculoView() {
  return (
    <div className="min-h-full bg-vscode-bg text-vscode-text animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Hero Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0d1117] via-[#1a2332] to-[#0d1117] border-b border-vscode-border px-8 py-12">
        {/* Background grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(0,122,204,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,122,204,0.3) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Glow blob */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-vscode-accent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-vscode-accent shadow-lg shadow-vscode-accent/20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/perfil.jpg" alt="Victor Hugo" className="w-full h-full object-cover" />
            </div>
            {/* Online dot */}
            <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-[#0d1117] rounded-full" />
          </div>

          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vscode-accent/10 border border-vscode-accent/30 text-vscode-accent text-xs font-mono mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Open to work
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-1">Victor Hugo Inacio</h1>
            <p className="text-vscode-accent font-medium mb-3 text-lg">Desenvolvedor Front-end Júnior</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs text-vscode-text/60">
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Rio de Janeiro, RJ
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                victor.hugo.ina10@gmail.com
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                (21) 97922-5977
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-8 py-10 space-y-10">

        {/* Quick Links */}
        <div className="flex flex-wrap gap-3">
          {[
            { label: "GitHub", url: "https://github.com/vitoinacio", icon: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" },
            { label: "LinkedIn", url: "https://www.linkedin.com/in/victorhugoinacio/", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
            { label: "WhatsApp", url: "https://wa.me/5521979225977", icon: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-vscode-activity/60 hover:bg-vscode-highlight border border-vscode-border rounded-lg text-sm text-white transition-all duration-200 hover:border-vscode-accent hover:scale-105"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d={link.icon} />
              </svg>
              {link.label}
            </a>
          ))}
        </div>

        {/* Summary */}
        <section>
          <h2 className="flex items-center gap-2 text-xs font-semibold text-vscode-accent uppercase tracking-widest mb-4">
            <span className="w-4 h-px bg-vscode-accent" />
            Resumo
            <span className="flex-1 h-px bg-vscode-border" />
          </h2>
          <p className="text-vscode-text/85 leading-relaxed">
            Desenvolvedor Front-end Júnior com experiência prática em React, TypeScript, Next.js, TailwindCSS e integração com APIs REST.
            Atuo como estagiário na <span className="text-vscode-accent font-medium">Petronect</span>, empresa que presta serviços digitais para a Petrobras,
            onde participei da refatoração e modernização de portais corporativos e do desenvolvimento de uma nova plataforma de compras eletrônicas do zero ao go-live.
          </p>
        </section>

        {/* Experience */}
        <section>
          <h2 className="flex items-center gap-2 text-xs font-semibold text-vscode-accent uppercase tracking-widest mb-6">
            <span className="w-4 h-px bg-vscode-accent" />
            Experiência
            <span className="flex-1 h-px bg-vscode-border" />
          </h2>
          <div className="relative pl-6 border-l border-vscode-border space-y-8">
            <div>
              <div className="absolute w-3 h-3 bg-vscode-accent rounded-full -left-[7px] top-1 shadow-lg shadow-vscode-accent/40" />
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-white font-semibold text-base">Estagiário de Desenvolvimento Front-end</h3>
                  <a href="https://www.petronect.com.br" target="_blank" rel="noreferrer" className="text-vscode-accent text-sm hover:underline">Petronect (Serviços Petrobras)</a>
                </div>
                <span className="text-xs text-vscode-text/50 bg-vscode-activity px-2 py-1 rounded font-mono">2024 — Atual</span>
              </div>
              <ul className="space-y-1.5 text-sm text-vscode-text/80">
                <li className="flex gap-2"><span className="text-vscode-accent mt-0.5">▸</span>Participação do portal <strong className="text-white">Compras-e</strong>: desde reuniões com stakeholders até o go-live</li>
                <li className="flex gap-2"><span className="text-vscode-accent mt-0.5">▸</span>Refatoração e modernização do portal <strong className="text-white">Minha Petronect</strong></li>
                <li className="flex gap-2"><span className="text-vscode-accent mt-0.5">▸</span>Criação de telas, integrações de API e documentação técnica</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="flex items-center gap-2 text-xs font-semibold text-vscode-accent uppercase tracking-widest mb-4">
            <span className="w-4 h-px bg-vscode-accent" />
            Tecnologias
            <span className="flex-1 h-px bg-vscode-border" />
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 bg-vscode-activity border border-vscode-border rounded-lg text-sm text-vscode-text hover:border-vscode-accent hover:text-white transition-colors cursor-default font-mono"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="flex items-center gap-2 text-xs font-semibold text-vscode-accent uppercase tracking-widest mb-4">
            <span className="w-4 h-px bg-vscode-accent" />
            Formação
            <span className="flex-1 h-px bg-vscode-border" />
          </h2>
          <div className="bg-vscode-activity/30 border border-vscode-border rounded-xl p-5">
            <h3 className="text-white font-semibold">Análise e Desenvolvimento de Sistemas</h3>
            <p className="text-vscode-accent text-sm mb-1">Centro Universitário Augusto Motta — UNISUAM</p>
            <p className="text-vscode-text/50 text-xs font-mono">Conclusão: 06/2026</p>
          </div>
        </section>

        {/* CTA Download */}
        <div className="flex flex-col sm:flex-row items-center gap-4 p-6 bg-gradient-to-r from-vscode-accent/10 to-transparent border border-vscode-accent/30 rounded-2xl">
          <div className="flex-1">
            <p className="text-white font-semibold mb-1">Pronto para o próximo passo?</p>
            <p className="text-vscode-text/60 text-sm">Baixe o currículo completo em PDF ou entre em contato diretamente.</p>
          </div>
          <a
            href="/curriculo.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 bg-vscode-accent hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-vscode-accent/30 whitespace-nowrap flex-shrink-0"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download PDF
          </a>
        </div>

      </div>
    </div>
  );
}
