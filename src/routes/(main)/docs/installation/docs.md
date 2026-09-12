# Installation

Create a SvelteKit app, then set up shadcn-svelte.

## 1. Install SvelteKit

Create a new SvelteKit app.

```bash
npx sv create my-app
```

## 2. Initialize shadcn-svelte

Set up shadcn-svelte in your project.

```bash
npx shadcn-svelte@latest init
```

For more information, visit [shadcn-svelte](https://www.shadcn-svelte.com/).

## 3. Add component aliases

Add these aliases to your Vite or Svelte config.

```ts
alias: {
  $chan: "src/lib/components/chan",
  $ui: "src/lib/components/ui",
},
```

## How to use it

Add a component with the shadcn-svelte CLI. For example, install Status Button:

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/status-button.json
```
