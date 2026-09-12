# Scroll Fade Effect

Fade content edges as you scroll, for both vertical and horizontal layouts.

Packages: None

## Installation

### npm

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/scroll-fade-effect.json
```

### pnpm

```bash
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/scroll-fade-effect.json
```

### yarn

```bash
yarn dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/scroll-fade-effect.json
```

### bun

```bash
bunx shadcn-svelte@latest add https://sv-animations.vercel.app/r/scroll-fade-effect.json
```

## Usage

```svelte
<script lang="ts">
  import { ScrollFadeEffect } from "$chan/scroll-fade-effect";
  import { Separator } from "$ui/separator";

  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  );
</script>

<div data-slot="scroll-fade-effect-demo" class="rounded-lg border">
  <ScrollFadeEffect class="h-72 w-48">
    <div class="p-4">
      <h4 class="mb-4 text-sm leading-none font-medium">Tags</h4>
      {#each tags as item}
        <div class="text-sm">{item}</div>
        <Separator class="my-2" />
      {/each}
    </div>
  </ScrollFadeEffect>
</div>
```

## Props

### ScrollFadeEffect

Scrollable container with directional edge fades.

| Prop          | Type                                   | Default      | Required | Description                                              |
| ------------- | -------------------------------------- | ------------ | -------- | -------------------------------------------------------- |
| `children`    | `Snippet`                              | —            | Yes      | Content rendered inside the scrollable container.        |
| `orientation` | `'vertical' \| 'horizontal' \| 'both'` | `'vertical'` | No       | Direction in which scrolling and edge fades are enabled. |
| `ref`         | `HTMLDivElement \| null`               | `null`       | No       | Bindable reference to the scroll container.              |
| `class`       | `string`                               | `undefined`  | No       | Additional classes applied to the scroll container.      |

## Features

- Content fades in and out smoothly as you scroll
- Supports both vertical and horizontal scrolling
- Deprecated in favor of the shadcn/ui scroll-fade utility
