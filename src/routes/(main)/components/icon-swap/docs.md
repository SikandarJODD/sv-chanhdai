# Icon Swap

Animate icon swaps with scale, blur, and fade transitions.

Packages: motion-sv

## Installation

### npm

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/icon-swap.json
```

### pnpm

```bash
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/icon-swap.json
```

### yarn

```bash
yarn dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/icon-swap.json
```

### bun

```bash
bunx shadcn-svelte@latest add https://sv-animations.vercel.app/r/icon-swap.json
```

## Usage

```svelte
<script lang="ts">
  import { MonitorIcon, MoonIcon, SunIcon } from "@lucide/svelte";
  import { IconSwap, IconSwapItem } from "$chan/icon-swap";
  import { Button } from "$ui/button";
  const ICONS = {
    sun: SunIcon,
    moon: MoonIcon,
    monitor: MonitorIcon
  } as const;
  type IconKey = keyof typeof ICONS;
  let icon = $state<IconKey>("sun");
  const Icon = $derived(ICONS[icon]);

  const iconKeys = Object.keys(ICONS) as IconKey[];
</script>

<div class="flex flex-col items-center gap-4">
  <Button
    class="relative will-change-transform"
    variant="outline"
    size="icon-sm"
    aria-label={icon}
  >
    <IconSwap>
      {#key icon}
        <IconSwapItem>
          <Icon />
        </IconSwapItem>
      {/key}
    </IconSwap>
  </Button>

  <div class="flex gap-0.5 rounded-lg p-0.5">
    {#each iconKeys as key (key)}
      <Button
        class="rounded-md border-none capitalize"
        size="sm"
        variant={icon === key ? "secondary" : "ghost"}
        onclick={() => (icon = key)}
      >
        {key}
      </Button>
    {/each}
  </div>
</div>
```

## Props

### IconSwap

AnimatePresence wrapper for swapping icon content.

| Prop       | Type                           | Default       | Required | Description                                            |
| ---------- | ------------------------------ | ------------- | -------- | ------------------------------------------------------ |
| `children` | `Snippet`                      | —             | Yes      | Keyed IconSwapItem content to animate between.         |
| `mode`     | `AnimatePresenceProps['mode']` | `'popLayout'` | No       | Controls how entering and exiting items are sequenced. |
| `initial`  | `boolean`                      | `false`       | No       | Whether content should animate on its initial render.  |

### IconSwapItem

Motion element that defines the icon enter and exit transition.

| Prop       | Type                                      | Default      | Required | Description                                      |
| ---------- | ----------------------------------------- | ------------ | -------- | ------------------------------------------------ |
| `children` | `Snippet`                                 | —            | Yes      | Icon content rendered inside the motion element. |
| `as`       | `typeof motion.div \| typeof motion.span` | `motion.div` | No       | Motion element used as the item wrapper.         |

## Features

- Animate icon swaps with scale, blur, and fade transitions
- Compound component structure with IconSwap and IconSwapItem
- Swap triggers automatically when the item's key changes
