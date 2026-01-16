# 🚀 Deployment Guide - GitHub Pages

Este guia explica como configurar o deploy automático do Flare Tracker no GitHub Pages.

## 📋 Pré-requisitos

- Repositório no GitHub
- Permissões para configurar GitHub Actions e Pages no repositório

## ⚙️ Configuração do GitHub Pages

### 1. Habilitar GitHub Pages

1. Acesse o repositório no GitHub
2. Vá em **Settings** > **Pages**
3. Em **Source**, selecione:
   - Source: **GitHub Actions**

### 2. Configurar Permissões do Workflow

As permissões já estão configuradas no workflow `.github/workflows/deploy.yml`:

```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

Não é necessária configuração adicional.

## 🔄 Deploy Automático

O deploy acontece automaticamente quando você faz push para os branches `main` ou `master`:

```bash
git push origin main
```

Você também pode disparar o deploy manualmente:

1. Acesse **Actions** no GitHub
2. Selecione o workflow "Deploy to GitHub Pages"
3. Clique em **Run workflow**

## 🌐 URL da Aplicação

Após o primeiro deploy bem-sucedido, a aplicação estará disponível em:

```
https://Ivo-S-Silva.github.io/IllTrack/
```

## 📱 Instalação como PWA

### No Android (Chrome/Edge)

1. Acesse a URL no navegador
2. Toque no menu (três pontos)
3. Selecione "Adicionar à tela inicial" ou "Instalar aplicativo"
4. Confirme a instalação

### No iOS (Safari)

1. Acesse a URL no Safari
2. Toque no botão de compartilhar (quadrado com seta)
3. Role e selecione "Adicionar à Tela de Início"
4. Toque em "Adicionar"

### No Desktop (Chrome/Edge)

1. Acesse a URL no navegador
2. Clique no ícone de instalação (+) na barra de endereços
3. Ou vá em Menu > "Instalar Flare Tracker"
4. Confirme a instalação

## 🔍 Verificar Status do Deploy

1. Acesse a aba **Actions** no GitHub
2. Verifique o status do workflow mais recente
3. Se houver erros, clique no workflow para ver os logs

## 🛠️ Build Local para Testes

Para testar o build de produção localmente:

```bash
# Gerar ícones e fazer build
npm run build

# Servir o build localmente
npm run preview
```

A aplicação estará disponível em `http://localhost:4173`

**Nota**: O preview local não usará o base path `/IllTrack/`, então alguns links podem não funcionar exatamente como no GitHub Pages. Para testar com o base path correto, você pode servir a pasta `dist` com um servidor HTTP simples:

```bash
npx serve dist -s
```

## 📝 Estrutura de Arquivos de Deploy

- `.github/workflows/deploy.yml` - Workflow do GitHub Actions
- `vite.config.ts` - Configuração do Vite com base path
- `public/.nojekyll` - Desabilita processamento Jekyll
- `public/404.html` - Redirecionamento para SPAs
- `generate-icons.js` - Script de geração de ícones PWA

## 🔄 Workflow de Deploy

O workflow executa as seguintes etapas:

1. **Checkout** - Faz checkout do código
2. **Setup Node** - Configura Node.js 20
3. **Install** - Instala dependências com `npm ci`
4. **Generate Icons** - Gera ícones PWA
5. **Build** - Compila TypeScript e faz build com Vite
6. **Upload** - Faz upload dos arquivos para GitHub Pages
7. **Deploy** - Publica a aplicação

## 🐛 Troubleshooting

### Deploy Falhou

- Verifique os logs na aba Actions
- Certifique-se de que GitHub Pages está habilitado
- Verifique se as permissões do workflow estão corretas

### PWA Não Instala

- Verifique se os ícones foram gerados corretamente
- Certifique-se de estar acessando via HTTPS
- Limpe o cache do navegador

### Rotas Não Funcionam

- Verifique se o arquivo `404.html` está na pasta `dist`
- Certifique-se de que o script de redirecionamento está no `index.html`

### Ícones Não Aparecem

- Execute `npm run generate-icons` localmente
- Verifique se os ícones estão na pasta `public/icons`
- Faça commit e push dos ícones gerados

## 📊 Monitoramento

Após o deploy, você pode monitorar:

- **Build time**: Tempo de build na aba Actions
- **Bundle size**: Tamanho dos arquivos no log de build
- **PWA score**: Use o Lighthouse do Chrome DevTools

## 🔐 Segurança

- Todos os dados são armazenados localmente no navegador (IndexedDB)
- Não há comunicação com servidores externos
- PIN é hasheado com bcrypt antes de ser armazenado
- Aplicação funciona 100% offline após primeira visita

## 🆕 Atualizações

Quando você fizer alterações no código:

1. Commit as mudanças
2. Push para o branch main
3. GitHub Actions fará o deploy automaticamente
4. Usuários que já instalaram o PWA receberão a atualização automaticamente

## 💡 Dicas

- Sempre teste localmente com `npm run build` antes de fazer push
- Use `npm run preview` para verificar o build de produção
- Monitore o tamanho do bundle para manter performance
- Teste a instalação do PWA em diferentes dispositivos

---

**Última atualização**: Janeiro 2026
