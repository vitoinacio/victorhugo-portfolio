export type ViewType = 'about' | 'skills' | 'experience' | 'project' | 'pdf' | 'markdown';

export interface FileNode {
  id: string;
  name: string;
  type: "file" | "folder";
  content?: string;
  viewType?: ViewType;
  codeSnippet?: string;
  data?: any;
  children?: FileNode[];
}

export const portfolioData: FileNode[] = [
  {
    id: "perfil",
    name: "Perfil",
    type: "folder",
    children: [
      {
        id: "sobre_mim",
        name: "sobre_mim.tsx",
        type: "file",
        viewType: "about",
        codeSnippet: `import { Developer } from "@/types";

const victor: Developer = {
  name: "Victor Hugo Inacio de Oliveira",
  age: 23,
  role: "Desenvolvedor Front-end Júnior",
  education: "Análise e Desenvolvimento de Sistemas (UNISUAM) - Conclusão 06/2026",
  focus: ["React", "TypeScript", "Node.js", "SQL"],
  contact: {
    github: "github.com/vitoinacio",
    linkedin: "linkedin.com/in/victorhugoinacio/",
    email: "victor.hugo.ina10@gmail.com",
    phone: "(21) 97922-5977"
  }
};

export default victor;`,
        data: {
          name: "Victor Hugo Inacio de Oliveira",
          role: "Desenvolvedor Front-end Júnior",
          description: "Sou Desenvolvedor Front-end Júnior, com experiência prática em desenvolvimento de aplicações web utilizando React, TypeScript, TailwindCSS, Next.js, Vite, Axios e integração com APIs REST. Busco oportunidades onde eu possa continuar evoluindo tecnicamente, contribuir com produtos reais e crescer junto com o time.",
          education: "Formado em Análise e Desenvolvimento de Sistemas pelo Centro Universitário Augusto Motta (UNISUAM), com conclusão em 06/2026.",
          links: [
            { label: "GitHub", url: "https://github.com/vitoinacio", icon: "github" },
            { label: "LinkedIn", url: "https://www.linkedin.com/in/victorhugoinacio/", icon: "linkedin" },
            { label: "Email", url: "mailto:victor.hugo.ina10@gmail.com", icon: "mail" },
            { label: "WhatsApp", url: "https://wa.me/5521979225977", icon: "phone" }
          ]
        }
      },
      {
        id: "skills",
        name: "stacks.ts",
        type: "file",
        viewType: "skills",
        codeSnippet: `const skills = [
  { name: "React.js", years: 2 },
  { name: "Next.js", years: 2 },
  { name: "TypeScript", years: 3 },
  { name: "Node.js", years: 3 },
  { name: "TailwindCSS", years: 2 }
  // ... carregando mais 13 stacks
];`,
        data: [
          { category: "Front-end", items: [
            { name: "React.js", time: "2 anos" },
            { name: "Next.js", time: "2 anos" },
            { name: "Angular", time: "1 ano" },
            { name: "TailwindCSS", time: "2 anos" },
            { name: "Vite", time: "2 anos" },
            { name: "Ionic", time: "< 1 ano" }
          ]},
          { category: "Linguagens", items: [
            { name: "TypeScript", time: "3 anos" },
            { name: "JavaScript", time: "4 anos" }
          ]},
          { category: "Back-end & Dados", items: [
            { name: "Node.js", time: "3 anos" },
            { name: "API REST", time: "4 anos" },
            { name: "SQL", time: "2 anos" },
            { name: "PostgreSQL", time: "2 anos" },
            { name: "MySQL", time: "2 anos" },
            { name: "SQLite", time: "2 anos" }
          ]},
          { category: "Ferramentas", items: [
            { name: "Git", time: "4 anos" },
            { name: "NPM", time: "3 anos" },
            { name: "Yarn", time: "2 anos" },
            { name: "Postman", time: "1 ano" }
          ]}
        ]
      }
    ]
  },
  {
    id: "exp",
    name: "Experiência",
    type: "folder",
    children: [
      {
        id: "petronect",
        name: "petronect.md",
        type: "file",
        viewType: "experience",
        codeSnippet: `interface Experience {
  company: "Petronect";
  role: "Estagiário de Desenvolvimento";
  description: "Evolução de produtos corporativos, melhoria de tecnologia e UX.";
}

const portalComprasE = buildPlatform({
  type: "compras_eletronicas",
  features: ["requisições", "negociações", "análise técnica"]
});`,
        data: {
          company: "Petronect",
          role: "Estagiário de Desenvolvimento (Front-end Jr)",
          period: "Atual",
          url: "https://www.petronect.com.br",
          description: "A Petronect presta serviços para a Petrobras, cuidando do portal de compras e licitações. Participo da evolução de produtos digitais corporativos, com foco em melhoria de tecnologia, experiência do usuário, componentização, refatoração de interfaces e construção de soluções mais modernas e escaláveis.",
          projects: [
            {
              name: "Compras-e",
              description: "Plataforma de compras eletrônicas para centralizar requisições, propostas, negociações, mensagens, anexos e análise técnica. Atuei desde o MVP e reuniões com stakeholders até o Go-Live, contribuindo com criação de telas, refatoração, integrações de API e documentação técnica."
            },
            {
              name: "Minha Petronect",
              description: "Refatoração e modernização tecnológica de um produto legado. Mudamos a stack para tecnologia recente e modernizamos o layout, melhorando a UX e evoluindo a base técnica."
            }
          ]
        }
      }
    ]
  },
  {
    id: "projetos",
    name: "Projetos_Autorais",
    type: "folder",
    children: [
      {
        id: "havenly",
        name: "havenly.tsx",
        type: "file",
        viewType: "project",
        codeSnippet: `// Iniciando Havenly App
import { Platform } from "havenly/core";

const havenly = new Platform({
  mission: "Simplificar a vida de proprietários e inquilinos",
  status: "Inovador e Intuitivo",
  repo: "github.com/vitoinacio/Havenly"
});`,
        data: {
          name: "Havenly",
          repo: "vitoinacio/Havenly",
          url: "https://github.com/vitoinacio/Havenly",
          description: "Plataforma inovadora e intuitiva para o gerenciamento de aluguéis, desenvolvida para simplificar a vida de proprietários e inquilinos. A missão é transform o processo de locação, tornando-o mais eficiente, transparente e sem estresse."
        }
      },
      {
        id: "neurali",
        name: "neurali.ts",
        type: "file",
        viewType: "project",
        codeSnippet: `import { AgentWorkflow } from "neurali/engine";

const copilot = new AgentWorkflow({
  type: "approval-first",
  target: "IDE Copilots",
  flow: "Chat-guided engineering"
});`,
        data: {
          name: "Neurali",
          repo: "vitoinacio/Neurali",
          url: "https://github.com/vitoinacio/Neurali",
          description: "Neurali é um workflow de agentes approval-first voltado para copilotos de IDE e fluxos de engenharia guiados por chat."
        }
      },
      {
        id: "qrcode",
        name: "gerador_qrcode.js",
        type: "file",
        viewType: "project",
        codeSnippet: `import { QRCodeGenerator } from "./utils";

const myQR = QRCodeGenerator.create({
  content: "https://github.com/vitoinacio"
});`,
        data: {
          name: "Gerador de QR Code",
          repo: "vitoinacio/GeradorQRCode",
          url: "https://github.com/vitoinacio/GeradorQRCode",
          description: "Aplicativo simples e direto para geração dinâmica de QR Codes a partir de links ou textos."
        }
      }
    ]
  },
  {
    id: "curriculo.pdf",
    name: "curriculo.pdf",
    type: "file",
    viewType: "pdf",
    content: "PDF_VIEWER"
  }
];
