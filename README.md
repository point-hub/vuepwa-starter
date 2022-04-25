# Vue PWA Starter Template

This starter template built for pointhub project to create frontend apps more easily, along with some good practices that I have learned. It's strongly opinionated, but feel free to tweak it to your needs.

## Features

### Dev tools
- [Vite](https://vitejs.dev/) Next Generation Frontend Tooling
- [TypeScript](https://www.typescriptlang.org/) is a strongly typed programming language that builds on JavaScript
- [pnpm](https://pnpm.io/) creates a non-flat node_modules by default, so code has no access to arbitrary packages
- [Cypress](https://cypress.io/) E2E Testing
- [VS Code](https://code.visualstudio.com/) Recommended IDE
- [VS Code Extensions](./.vscode/extensions.json)
  - [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) - Vue 3 IDE support

### Plugins

- [Vue Router](https://github.com/vuejs/vue-router) The official router for Vue.js.

### UI Frameworks

- [Tailwind CSS v3](https://tailwindcss.com/) - Rapidly build modern websites without ever leaving your HTML

## Prerequisites

1. [Node.js](https://nodejs.org/) v16.x or higher
2. [pnpm](https://pnpm.io/)
```bash
npm install -g pnpm
```

## Usage

### Clone the repo

```bash
git clone git@github.com:point-hub/vuepwa-starter.git
cd vuepwa-starter
pnpm i
```

### Development

Using environment file `.env` or `.env.local` if you want to change environment variables locally, `.env.local` ignored by git.

```bash
pnpm dev
```

### Build Staging

Using environment file `.env.staging` 

```bash
pnpm build:staging
```

### Build Production

Using environment file `.env.production`

```bash
pnpm build
```

And you will see the generated file in `dist` that ready to be served.

### Separation of Concerns

- Create separate folder for each module and place them under `/src/modules/` folder
- The following modules files & folders
    - `assets/`
    - `components/`
    - `layouts/`
    - `pages/`
    - `routes.ts`

### Deploy on Netlify

Go to [Netlify](https://app.netlify.com/start) and select your clone, `OK` along the way, and your App will be live in a minute.
