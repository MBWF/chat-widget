# Guia de Publicação no NPM

Este guia te ajudará a publicar o pacote `eloquent-chat-widget` no NPM.

## 📋 Pré-requisitos

1. **Conta no NPM**: Crie uma conta em [npmjs.com](https://www.npmjs.com/)
2. **NPM CLI**: Certifique-se de ter o npm instalado
3. **Autenticação**: Faça login no NPM via CLI

## 🚀 Passos para Publicação

### 1. Fazer Login no NPM

```bash
npm login
```

Insira suas credenciais do NPM quando solicitado.

### 2. Verificar se o Nome está Disponível

```bash
npm view eloquent-chat-widget
```

Se retornar erro 404, o nome está disponível!

### 3. Fazer o Build Final

```bash
npm run build
```

### 4. Verificar o Conteúdo do Pacote

```bash
npm pack --dry-run
```

Isso mostrará quais arquivos serão incluídos no pacote.

### 5. Publicar o Pacote

```bash
npm publish
```

## 📦 Estrutura do Pacote Publicado

Após a publicação, o pacote incluirá:

```
eloquent-chat-widget/
├── dist/
│   ├── index.js                    # ES Module
│   ├── index.umd.cjs              # UMD Module
│   ├── index.d.ts                 # TypeScript definitions
│   └── eloquent-chat-widget.css   # Estilos CSS
├── package.json
├── README.md
└── LICENSE
```

## 🔄 Atualizações Futuras

### Versionamento Semântico

- **Patch** (1.0.1): Correções de bugs
  ```bash
  npm version patch
  npm publish
  ```

- **Minor** (1.1.0): Novas funcionalidades
  ```bash
  npm version minor
  npm publish
  ```

- **Major** (2.0.0): Breaking changes
  ```bash
  npm version major
  npm publish
  ```

## 🛠️ Comandos Úteis

### Verificar Status do Pacote
```bash
npm view eloquent-chat-widget
```

### Verificar Versões Publicadas
```bash
npm view eloquent-chat-widget versions --json
```

### Despublicar (apenas primeiras 24h)
```bash
npm unpublish eloquent-chat-widget@1.0.0
```

## 📝 Checklist Antes da Publicação

- [ ] ✅ Build executado com sucesso
- [ ] ✅ README.md atualizado
- [ ] ✅ Versão correta no package.json
- [ ] ✅ LICENSE incluído
- [ ] ✅ .npmignore configurado
- [ ] ✅ Exports corretos no package.json
- [ ] ✅ TypeScript definitions geradas
- [ ] ✅ Testado localmente

## 🎯 Após a Publicação

1. **Verificar no NPM**: Acesse https://www.npmjs.com/package/eloquent-chat-widget
2. **Testar Instalação**: 
   ```bash
   npm install eloquent-chat-widget
   ```
3. **Documentar**: Atualize documentação se necessário
4. **Compartilhar**: Anuncie nas redes sociais/comunidades

## 🔧 Personalização Antes da Publicação

### Atualizar Informações Pessoais

No `package.json`, atualize:

```json
{
  "author": {
    "name": "Seu Nome",
    "email": "seu.email@exemplo.com"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/seuusuario/eloquent-chat-widget.git"
  },
  "homepage": "https://github.com/seuusuario/eloquent-chat-widget#readme",
  "bugs": {
    "url": "https://github.com/seuusuario/eloquent-chat-widget/issues"
  }
}
```

### Atualizar README.md

Substitua os placeholders:
- `[Your Name]` → Seu nome
- `your.email@example.com` → Seu email
- `yourusername` → Seu usuário do GitHub

## 🚨 Importante

- **Nome único**: Certifique-se de que o nome do pacote é único no NPM
- **Versão semântica**: Siga o padrão semver (major.minor.patch)
- **Licença**: Mantenha a licença MIT ou escolha outra apropriada
- **Documentação**: README claro e completo é essencial

## 🎉 Sucesso!

Após seguir estes passos, seu pacote estará disponível para instalação via:

```bash
npm install eloquent-chat-widget
```

E poderá ser usado em qualquer projeto React! 🚀
