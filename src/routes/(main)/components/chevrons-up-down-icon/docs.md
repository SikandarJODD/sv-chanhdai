# Chevrons Up Down Icon

Animated chevrons icon that morphs between up and down directions.

Packages: motion-sv

## Installation

### npm

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/chevrons-up-down-icon.json
```

### pnpm

```bash
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/chevrons-up-down-icon.json
```

### yarn

```bash
yarn dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/chevrons-up-down-icon.json
```

### bun

```bash
bunx shadcn-svelte@latest add https://sv-animations.vercel.app/r/chevrons-up-down-icon.json
```

## Usage

```svelte
<script lang="ts">
  import {
    ChevronsUpDownIcon,
    type ChevronsUpDownIconHandle
  } from "$chan/chevrons-up-down-icon";
  import { Button } from "$ui/button";
  import { watch } from "runed";

  let open = $state(false);
  let chevronsUpDownIconRef = $state<ChevronsUpDownIconHandle | undefined>();

  watch(
    () => open,
    (isOpen) => {
      if (isOpen) {
        chevronsUpDownIconRef?.startAnimation();
      } else {
        chevronsUpDownIconRef?.stopAnimation();
      }
    }
  );
</script>

<Button
  data-open={open}
  variant="outline"
  size="icon"
  aria-label={open ? "Collapse" : "Expand"}
  aria-expanded={open}
  onclick={() => (open = !open)}
>
  <ChevronsUpDownIcon
    bind:this={chevronsUpDownIconRef}
    duration={0.2}
    class="size-5"
  />
</Button>
```

## Props

### ChevronsUpDownIcon

Animated SVG chevrons controlled through the component handle.

| Prop       | Type                    | Default     | Required | Description                                      |
| ---------- | ----------------------- | ----------- | -------- | ------------------------------------------------ |
| `duration` | `number`                | `0.3`       | No       | Duration of the path morph animation in seconds. |
| `ref`      | `SVGSVGElement \| null` | `null`      | No       | Bindable reference to the SVG element.           |
| `class`    | `string`                | `undefined` | No       | Additional classes applied to the SVG element.   |

## Features

- Animated chevrons icon that morphs between up and down directions
- Imperative ref control via startAnimation and stopAnimation methods
- Based on the Lucide chevrons-up-down icon
