# Middle Truncation

Truncate text in the middle while preserving start and end.

Packages: runed

## Installation

### npm

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/middle-truncation.json
```

### pnpm

```bash
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/middle-truncation.json
```

### yarn

```bash
yarn dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/middle-truncation.json
```

### bun

```bash
bunx shadcn-svelte@latest add https://sv-animations.vercel.app/r/middle-truncation.json
```

## Usage

```svelte
<script lang="ts">
  import { MiddleTruncation } from "$chan/middle-truncation";
</script>

<div class="w-64">
  <MiddleTruncation text="responsive-component-preview.svelte" end={7} />
</div>
```

## Props

### MiddleTruncation

Responsive middle truncation for a single line of text.

| Prop       | Type     | Default     | Required | Description                                                                              |
| ---------- | -------- | ----------- | -------- | ---------------------------------------------------------------------------------------- |
| `text`     | `string` | —           | Yes      | Text content to truncate.                                                                |
| `ellipsis` | `string` | `'...'`     | No       | Custom separator shown between the preserved text segments.                              |
| `end`      | `number` | `undefined` | No       | Fixed number of characters preserved at the end; cannot be combined with minEnd.         |
| `minEnd`   | `number` | `undefined` | No       | Minimum trailing characters preserved during an even split; cannot be combined with end. |
| `class`    | `string` | `undefined` | No       | Additional classes applied to the wrapper span.                                          |

## Features

- Three truncation strategies: fixed end, flexible with minimum, or even split
- Pixel-accurate measurement based on actual rendered text width
- Automatically recalculates when container resizes

## Examples

### File names

Preserve file extensions while truncating names inside a resizable container.

```svelte
<script lang="ts">
  import { MiddleTruncation } from "$chan/middle-truncation";
  import {
    ResizableHandle,
    ResizablePane,
    ResizablePaneGroup
  } from "$ui/resizable";

  const files = [
    {
      name: "building-accessible-command-menus-in-svelte.md",
      className: "text-foreground/70"
    },
    {
      name: "responsive-component-preview.svelte",
      className: "text-orange-500"
    },
    { name: "masonry-grid-layout.ts", className: "text-info" }
  ];
</script>

<ResizablePaneGroup direction="horizontal" class="w-full max-w-md">
  <ResizablePane
    minSize={35}
    defaultSize={100}
    class="flex items-center pr-0.5"
  >
    <div
      class="relative flex w-full min-w-0 flex-col gap-3 rounded-xl border bg-card p-5 after:pointer-events-none after:absolute after:inset-1 after:rounded-lg after:border after:border-border/50"
    >
      {#each files as file (file.name)}
        <MiddleTruncation
          text={file.name}
          end={file.name.endsWith(".svelte") ? 7 : 3}
          class={`relative z-10 font-mono text-sm ${file.className}`}
        />
      {/each}
    </div>
  </ResizablePane>

  <ResizableHandle
    class="relative w-2 bg-transparent p-0 after:absolute after:top-1/2 after:right-0 after:left-0.5 after:h-12 after:w-1.5 after:translate-x-0 after:-translate-y-1/2 after:rounded-full after:bg-foreground/10 after:transition-all hover:after:bg-foreground/20 focus-visible:ring-0 focus-visible:ring-offset-0 data-active:after:scale-y-125 data-active:after:bg-foreground/30"
  />

  <ResizablePane minSize={0} defaultSize={0} />
</ResizablePaneGroup>
```
