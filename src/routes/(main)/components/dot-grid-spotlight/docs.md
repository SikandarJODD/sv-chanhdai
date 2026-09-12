# Dot Grid Spotlight

Interactive dot grid with a cursor-tracking spotlight effect.

Packages: runed

## Installation

### npm

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/dot-grid-spotlight.json
```

### pnpm

```bash
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/dot-grid-spotlight.json
```

### yarn

```bash
yarn dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/dot-grid-spotlight.json
```

### bun

```bash
bunx shadcn-svelte@latest add https://sv-animations.vercel.app/r/dot-grid-spotlight.json
```

## Usage

```svelte
<script lang="ts">
  import { DotGridSpotlight } from "$chan/dot-grid-spotlight";
</script>

<div class="relative h-80 w-full overflow-hidden">
  <DotGridSpotlight />
</div>
```

## Props

### DotGridSpotlight

Canvas dot grid with a pointer-driven spotlight.

| Prop                | Type                        | Default                       | Required | Description                                     |
| ------------------- | --------------------------- | ----------------------------- | -------- | ----------------------------------------------- |
| `dotColor`          | `string`                    | `'rgba(255, 255, 255, 0.05)'` | No       | Color used for inactive dots.                   |
| `activeDotColor`    | `string`                    | `'rgba(255, 255, 255, 0.1)'`  | No       | Color used for dots illuminated by the pointer. |
| `spacing`           | `number`                    | `10`                          | No       | Distance between dots in pixels.                |
| `baseRadius`        | `number`                    | `1`                           | No       | Radius of inactive dots in pixels.              |
| `activeRadius`      | `number`                    | `2`                           | No       | Radius of a dot at the center of the spotlight. |
| `interactionRadius` | `number`                    | `128`                         | No       | Radius of the pointer spotlight in pixels.      |
| `activeMaxAlpha`    | `number`                    | `1`                           | No       | Opacity applied at the center of the spotlight. |
| `activeMinAlpha`    | `number`                    | `0.5`                         | No       | Opacity applied at the edge of the spotlight.   |
| `ref`               | `HTMLCanvasElement \| null` | `null`                        | No       | Bindable reference to the canvas element.       |
| `class`             | `string`                    | `undefined`                   | No       | Additional classes applied to the canvas.       |

## Features

- Interactive dot grid with a cursor-tracking spotlight effect
- Customizable dot color, active color, spacing, and radius via props
- Adjustable interaction radius and alpha range for the spotlight glow

## Examples

### Custom colors

```svelte
<script lang="ts">
  import { DotGridSpotlight } from "$chan/dot-grid-spotlight";
  import { mode } from "mode-watcher";

  const DOT_COLORS = {
    light: {
      default: "lab(36 55.64 -107.68 / 0.14)",
      active: "lab(36 55.64 -107.68)"
    },
    dark: {
      default: "rgb(52 211 153 / 0.2)",
      active: "rgb(52 211 153)"
    }
  } as const;

  const theme = $derived(mode.current === "dark" ? "dark" : "light");
</script>

<div
  class="relative aspect-square w-xs max-w-full overflow-hidden rounded-xl border bg-ink/5 dark:bg-emerald-400/10"
>
  <DotGridSpotlight
    dotColor={DOT_COLORS[theme].default}
    activeDotColor={DOT_COLORS[theme].active}
  />
</div>
```
