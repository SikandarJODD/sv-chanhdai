# Brand Assets Menu

Context menu for copying brand SVGs and opening asset links.

Packages: @lucide/svelte, svelte-sonner

## Installation

### npm

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/brand-assets-menu.json
```

### pnpm

```bash
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/brand-assets-menu.json
```

### yarn

```bash
yarn dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/brand-assets-menu.json
```

### bun

```bash
bunx shadcn-svelte@latest add https://sv-animations.vercel.app/r/brand-assets-menu.json
```

## Usage

```svelte
<script lang="ts">
  import { BrandAssetsMenu } from "$chan/brand-assets-menu";

  const LOGOMARK_SVG =
    '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>';
  const LOGOTYPE_SVG =
    '<svg viewBox="0 0 120 24"><text x="0" y="18">Acme</text></svg>';
</script>

{#snippet logomark()}
  <span class="size-4 rounded-full bg-current"></span>
{/snippet}

<BrandAssetsMenu
  {logomark}
  logomarkSVG={LOGOMARK_SVG}
  logotypeSVG={LOGOTYPE_SVG}
  brandGuidelinesURL="/brand-guidelines"
  brandAssetsURL="/brand-assets.zip"
>
  {#snippet children({ props })}
    <button type="button" {...props}>Brand assets</button>
  {/snippet}
</BrandAssetsMenu>
```

## Props

### BrandAssetsMenu

Context menu for copying brand SVGs and opening asset links.

| Prop                 | Type                                          | Default     | Required | Description                                                                                  |
| -------------------- | --------------------------------------------- | ----------- | -------- | -------------------------------------------------------------------------------------------- |
| `logomark`           | `Snippet`                                     | `undefined` | No       | Custom logomark content displayed within the copy menu item.                                 |
| `logomarkSVG`        | `string`                                      | `undefined` | No       | SVG markup used when the user copies the logomark to the clipboard.                          |
| `logotypeSVG`        | `string`                                      | `undefined` | No       | SVG markup used when the user copies the logotype to the clipboard.                          |
| `brandGuidelinesURL` | `string`                                      | `undefined` | No       | URL for the brand guidelines page opened in a new tab.                                       |
| `brandAssetsURL`     | `string`                                      | `undefined` | No       | URL used for the brand assets download link.                                                 |
| `children`           | `Snippet<{ props: Record<string, unknown> }>` | `undefined` | No       | Render prop used to attach the trigger element and menu props to the custom trigger content. |

## Features

- Copy mark and logotype SVGs to the clipboard with toast feedback
- Link out to brand guidelines and asset downloads from one menu
- Wrap any element to use it as a right-click or press-and-hold trigger
