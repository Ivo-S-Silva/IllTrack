# 🔥 Flare Tracker

Uma Progressive Web App (PWA) offline-first para rastreamento de crises/flares de doenças, sintomas, medicações e contaminações por glúten.

## 📋 Sobre o Projeto

O Flare Tracker é uma aplicação web moderna construída com React, TypeScript e Vite, projetada para ajudar pessoas com doenças crônicas a rastrear e gerenciar suas crises de saúde. A aplicação funciona completamente offline, armazenando todos os dados localmente no navegador usando IndexedDB.

### 🎯 Características Principais

- **Offline-First**: Funciona sem internet, todos os dados são armazenados localmente
- **Autenticação Segura**: Sistema de PIN com hash bcrypt e recuperação por pergunta de segurança
- **Dark Mode**: Interface minimalista inspirada no Todoist com tema escuro
- **PWA**: Instalável como aplicativo nativo em dispositivos móveis e desktop
- **TypeScript**: Código totalmente tipado para maior segurança e produtividade
- **Responsivo**: Interface adaptável para todos os tamanhos de tela

## 🚀 Status do Desenvolvimento

### ✅ Fase 1: Foundation (COMPLETA)

- [x] Configuração do projeto (Vite + React + TypeScript)
- [x] Sistema de autenticação com PIN
- [x] Estrutura de banco de dados (Dexie/IndexedDB)
- [x] Layouts e navegação (React Router)
- [x] Componentes UI básicos (shadcn/ui)
- [x] Configuração PWA
- [x] Dark mode por padrão

### 📅 Próximas Fases

- **Fase 2**: Core Features - Flares (CRUD de crises, sintomas, medicações)
- **Fase 3**: Contaminations & Views (Contaminações, calendário, timeline)
- **Fase 4**: Export & Polish (Exportação PDF, otimizações)
- **Fase 5**: Cloud Sync (Sincronização com Supabase)

## 🛠️ Tecnologias Utilizadas

### Core
- **React 18** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **React Router v6** - Roteamento

### UI & Styling
- **Tailwind CSS** - Utility-first CSS
- **shadcn/ui** - Componentes UI baseados em Radix UI
- **Lucide React** - Ícones
- **class-variance-authority** - Variantes de componentes

### State & Data
- **Zustand** - Gerenciamento de estado
- **Dexie** - Wrapper para IndexedDB
- **React Query** - Cache e sincronização de dados
- **React Hook Form** - Formulários
- **Zod** - Validação de schemas

### Outros
- **bcryptjs** - Hash de senha/PIN
- **date-fns** - Manipulação de datas
- **nanoid** - Geração de IDs únicos
- **vite-plugin-pwa** - Funcionalidades PWA

## 📦 Instalação e Execução

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Passos

1. **Clone o repositório**
   ```bash
   git clone <repository-url>
   cd flare-tracker
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse a aplicação**
   Abra http://localhost:5173 no navegador

### Outros comandos

```bash
# Build para produção
npm run build

# Preview do build de produção
npm run preview

# Lint do código
npm run lint

# Verificação de tipos TypeScript
npx tsc --noEmit
```

## 🏗️ Estrutura do Projeto

```
flare-tracker/
├── public/
│   ├── icons/          # Ícones PWA (a serem adicionados)
│   ├── manifest.json   # Manifest PWA
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── layouts/    # AuthLayout, MainLayout
│   │   ├── App.tsx     # Componente principal
│   │   └── router.tsx  # Configuração de rotas
│   ├── features/
│   │   ├── auth/       # Autenticação (PIN)
│   │   ├── flares/     # Crises (em desenvolvimento)
│   │   ├── contaminations/  # Contaminações (em desenvolvimento)
│   │   ├── calendar/   # Calendário (em desenvolvimento)
│   │   └── export/     # Exportação (em desenvolvimento)
│   ├── lib/
│   │   ├── db/         # Dexie database
│   │   ├── hooks/      # Hooks customizados
│   │   ├── utils/      # Funções utilitárias
│   │   └── supabase/   # Preparado para sync futuro
│   ├── components/
│   │   ├── ui/         # Componentes shadcn/ui
│   │   └── common/     # Componentes reutilizáveis
│   ├── types/          # TypeScript types
│   └── styles/         # CSS global
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## 🔒 Segurança

- **PIN com bcrypt**: O PIN é armazenado usando hash bcrypt (10 rounds)
- **Pergunta de segurança**: Resposta também hasheada para recuperação
- **Dados locais**: Todos os dados ficam no navegador do usuário (IndexedDB)
- **Sem tracking**: Aplicação não envia dados para servidores externos

## 🎨 Design System

### Cores

O Flare Tracker usa um design system minimalista com dark mode:

- **Background**: `#1f1f1f` (primary), `#2a2a2a` (secondary)
- **Text**: `#ffffff` (primary), `#b8b8b8` (secondary)
- **Accent**: `#DC2626` (vermelho Todoist-like)
- **Severity Scale**: Verde (#10B981) → Vermelho (#EF4444)

### Tipografia

- **Font Family**: Inter (sans-serif)
- **Font Sizes**: 12px a 24px com line-height otimizado

## 📱 PWA Setup

### Ícones

Os ícones PWA precisam ser adicionados em `public/icons/`. Veja `public/icons/README.md` para instruções de como gerá-los.

### Manifest

O manifest já está configurado em `public/manifest.json` com:
- Nome da aplicação
- Cores de tema
- Orientação preferida (portrait)
- Display mode (standalone)

## 🧪 Testing

> Testes serão implementados nas próximas fases

## 🤝 Contribuindo

Este projeto está em desenvolvimento ativo. As próximas features serão implementadas conforme o plano de fases.

## 📝 Notas de Desenvolvimento

### Fase 1 - Conclusões

✅ **Implementado:**
- Estrutura completa do projeto
- Sistema de autenticação com PIN funcional
- Navegação e layouts responsivos
- Database IndexedDB configurada
- PWA básica (sem ícones)
- Componentes UI base

⚠️ **Pendente para próximas fases:**
- CRUD de Flares completo
- Sistema de sintomas e medicações
- Visualização em calendário/timeline
- Exportação para PDF
- Sincronização com cloud (Supabase)

### Problemas Conhecidos

1. **Ícones PWA**: Precisam ser gerados (ver `public/icons/README.md`)
2. **Bcrypt no browser**: Warning sobre módulo crypto sendo externalizado (normal)

## 📄 Licença

Este projeto é privado e de uso pessoal.

## 👤 Autor

Desenvolvido por Ivo Silva com assistência do Claude Code

---

**Versão**: 1.0.0
**Última atualização**: Janeiro 2026
