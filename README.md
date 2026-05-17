# 💻 IDE Portfolio — Victor Hugo Inacio

> Um portfólio interativo que simula uma IDE (Integrated Development Environment) completa, construído com Next.js 16, TailwindCSS v4 e IA generativa integrada.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://vercel.com)

---

## 🎯 Sobre o Projeto

Este portfólio foi projetado para simular a experiência de um ambiente de desenvolvimento real, como o VS Code. Recrutadores e desenvolvedores podem navegar pelo meu histórico profissional, projetos e habilidades da mesma forma que explorariam um repositório de código.

**Diferenciais:**
- 🖥️ Interface fiel ao VS Code com Activity Bar, Sidebar Explorer e Editor central
- ✍️ Efeito de digitação (*typewriter*) ao abrir cada seção, seguido de uma compilação simulada
- 🤖 **AI Copilot** integrado via **Gemini 2.5 Flash** para responder perguntas sobre o meu perfil em tempo real (streaming)
- 📱 Totalmente responsivo — Sidebar retrátil e FAB de chat no mobile
- 🏗️ Arquitetura **MVVM** com separação total entre lógica e UI (um componente por arquivo)

---

## 🚀 Tech Stack

| Camada | Tecnologias |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **Linguagem** | TypeScript 5 |
| **Estilização** | TailwindCSS v4 + JetBrains Mono |
| **IA** | Vercel AI SDK + Google Gemini 2.5 Flash |
| **Arquitetura** | MVVM (Models / ViewModels / Views) |
| **Deploy** | Vercel |

---

## 🗂️ Estrutura do Projeto

```
src/
 ├── app/                      # Next.js App Router
 │   ├── api/chat/route.ts     # API Route para o AI Copilot (streaming)
 │   ├── layout.tsx
 │   └── page.tsx              # Entry point — amarra ViewModels e Views
 ├── models/
 │   └── PortfolioModel.ts     # Dados e interfaces (fonte da verdade)
 ├── viewmodels/               # Hooks de lógica de negócio (sem JSX)
 │   ├── useCopilotViewModel.ts
 │   ├── useEditorViewModel.ts
 │   └── useHomeViewModel.ts
 └── views/                    # Componentes React puramente visuais
     ├── layout/               # ActivityBar, MobileFAB
     ├── sidebar/              # Sidebar, FileTreeItem, FileIcon
     ├── editor/               # Editor, TypewriterEffect
     │   └── files/            # AboutView, SkillsView, ExperienceView,
     │                         # ProjectView, CurriculoView
     └── copilot/              # AICopilot, ChatMessageItem
```

---

## ⚙️ Rodando Localmente

### Pré-requisitos

- Node.js 18+
- Yarn (recomendado) ou npm

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/vitoinacio/portfolio-ide.git
cd portfolio-ide

# 2. Instale as dependências
yarn install

# 3. Configure as variáveis de ambiente
cp .env.example .env
# Edite o .env e adicione sua GEMINI_API_KEY
```

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
# Obtenha sua chave gratuita em: https://aistudio.google.com/app/apikey
GEMINI_API_KEY=sua_chave_aqui
```

### Iniciando o servidor

```bash
yarn dev
```

Acesse [http://localhost:3000](http://localhost:3000).

> **Atenção:** Reinicie o servidor após alterar o `.env` para que as variáveis sejam carregadas corretamente.

---

## 🤖 AI Copilot

O chat de IA na coluna direita (ou via botão FAB no mobile) usa o modelo **Gemini 2.5 Flash** da Google via API Route do Next.js, com suporte a **streaming** de respostas em tempo real.

O modelo é instruído via *system prompt* com todo o contexto profissional do Victor (experiência, projetos, stacks), respondendo perguntas como:
- *"Quais as stacks do Victor?"*
- *"Me fale sobre o projeto Compras-e"*
- *"Ele tem experiência com back-end?"*

---

## 📱 Responsividade

| Breakpoint | Comportamento |
|---|---|
| **Mobile (<768px)** | Sidebar como drawer retrátil (Activity Bar) + FAB de chat |
| **Tablet (768px+)** | Sidebar fixa + Editor central |
| **Desktop (1024px+)** | Layout completo de 3 colunas (Sidebar + Editor + Copilot) |

---

## 📦 Deploy (Vercel)

1. Importe o repositório na [Vercel](https://vercel.com)
2. Configure a variável de ambiente `GEMINI_API_KEY` no painel **Settings → Environment Variables**
3. O deploy é automático a cada `push` na branch `main`

---

## 👨‍💻 Autor

**Victor Hugo Inacio de Oliveira**
Desenvolvedor Front-end Júnior | Estagiário @ Petronect

[![LinkedIn](https://img.shields.io/badge/LinkedIn-victorhugoinacio-0A66C2?logo=linkedin)](https://www.linkedin.com/in/victorhugoinacio/)
[![GitHub](https://img.shields.io/badge/GitHub-vitoinacio-181717?logo=github)](https://github.com/vitoinacio)
[![Email](https://img.shields.io/badge/Email-victor.hugo.ina10%40gmail.com-EA4335?logo=gmail)](mailto:victor.hugo.ina10@gmail.com)

---

*Construído com muito café e ☕ — fique à vontade para explorar o código!*
