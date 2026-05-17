# Contexto: ide-portfolio-mvp

## O que é
IDE Portfolio é um portfólio web interativo de alta conversão projetado para simular o ambiente de uma IDE de desenvolvimento real (como VS Code). Focado em atrair e reter a atenção de tech recruiters e tech leads.

## Motivação
Maximizar conversão em propostas de emprego, demonstrar habilidades reais de engenharia e destacar cases corporativos (Petronect) e autorais (Neurali, Havenly).

## Meta
- Tempo médio de permanência > 2 minutos.
- Acesso rápido à documentação de projetos.
- Exportação de CV funcional.

## Decisões tomadas
- Stack principal: Next.js (App Router), React, TailwindCSS, TypeScript.
- Layout: 3 colunas (File Explorer, Editor de Código, AI Copilot Chat).
- IA: Vercel AI SDK / API Route conectada ao Gemini Flash.
- Tema: Dark Mode inspirado em VS Code Dark Modern.
- Tipografia: JetBrains Mono.

## O que não fazer
- Expor chaves de API no client-side.
- Portfólios genéricos ou currículos PDF difíceis de escanear.
- Complexidade excessiva sem onboarding flutuante no chat.
