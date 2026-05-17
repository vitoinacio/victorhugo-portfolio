# Arquitetura: ide-portfolio-mvp

## Principais Arquivos a Modificar/Criar
- [NEW] `src/app/layout.tsx` (Layout 3 colunas e fontes)
- [NEW] `src/app/page.tsx` (Container central, layout principal)
- [NEW] `src/components/Sidebar.tsx` (File Explorer)
- [NEW] `src/components/Editor.tsx` (Renderizador de conteúdo central e abas)
- [NEW] `src/components/AICopilot.tsx` (Chat drawer/sidebar com IA)
- [NEW] `src/app/api/chat/route.ts` (Endpoint Next.js para IA com proteção de chave/rate limit)
- [NEW] `src/components/PdfExportButton.tsx` (Ação para baixar curriculo.pdf)
- [NEW] `tailwind.config.ts` (Configuração do tema Dark e cores)
- [NEW] `src/data/projects.ts` (Conteúdo estático: Petronect, Neurali, etc.)

## Verificação de Consistência
- Core Web Vitals excelentes.
- Acessibilidade básica, tipografia legível (JetBrains Mono).
- Chat com fallback estático em caso de falha da API Gemini.
- Responsividade adaptativa: colunas laterais viram menus colapsáveis em mobile.

## ADRs Aplicadas
- Next.js App Router escolhido devido à facilidade com API Routes para ocultar a chave de API da IA.
- Vercel AI SDK adotado para facilitar fluxos de streaming de chat.
- TailwindCSS para estilização modular de tema de IDE.

## Trade-offs e Alternativas
- Uso de componentes React simples para simular syntax highlighting ao invés de usar bibliotecas pesadas de highlight como Prism/Highlight.js de início, caso necessário pode ser evoluído.
- O rate limiting será simplificado (por IP em memória local / edge middleware) para não depender de banco de dados externo complexo nesta fase do MVP.
