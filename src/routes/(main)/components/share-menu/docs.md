# Share Menu

Share menu to copy a link or post to X, LinkedIn, and the native share sheet.

Packages: @lucide/svelte, svelte-sonner

## Installation

### npm

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/share-menu.json
```

### pnpm

```bash
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/share-menu.json
```

### yarn

```bash
yarn dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/share-menu.json
```

### bun

```bash
bunx shadcn-svelte@latest add https://sv-animations.vercel.app/r/share-menu.json
```

## Usage

```svelte
<script>
  import { ShareMenu } from "$chan/share-menu";
</script>

<ShareMenu title="Share Menu" url="/components/share-menu" />
```

## Props

### ShareMenu

Menu for copying or sharing a URL through supported services.

| Prop    | Type     | Default | Required | Description                                                            |
| ------- | -------- | ------- | -------- | ---------------------------------------------------------------------- |
| `title` | `string` | —       | Yes      | Title passed to the native share sheet.                                |
| `url`   | `string` | —       | Yes      | URL to share; relative values are resolved against the current origin. |

## Features

- Copy the link to the clipboard with toast feedback
- Share directly to X and LinkedIn in a new tab
- Resolves relative URLs against the current origin
- Shows the native share option only when the Web Share API is available
