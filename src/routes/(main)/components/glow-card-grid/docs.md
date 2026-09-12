# Glow Card Grid

Display cards with glowing border and background effects.

Packages: None

## Installation

### npm

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/glow-card-grid.json
```

### pnpm

```bash
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/glow-card-grid.json
```

### yarn

```bash
yarn dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/glow-card-grid.json
```

### bun

```bash
bunx shadcn-svelte@latest add https://sv-animations.vercel.app/r/glow-card-grid.json
```

## Usage

```svelte
<script lang="ts">
  import { GlowCard, GlowCardGrid } from "$chan/glow-card-grid";
</script>

<GlowCardGrid>
  <GlowCard
    name="Chánh Đại"
    handle="@iamncdai"
    avatar="https://unavatar.io/x/iamncdai"
  />
</GlowCardGrid>
```

## Props

### GlowCardGrid

Grid provider that controls the shared pointer glow styles.

| Prop               | Type                     | Default     | Required | Description                                         |
| ------------------ | ------------------------ | ----------- | -------- | --------------------------------------------------- |
| `children`         | `Snippet`                | —           | Yes      | Glow cards rendered inside the grid.                |
| `cardRadius`       | `number`                 | `16`        | No       | Card corner radius in pixels.                       |
| `iconBlur`         | `number`                 | `25`        | No       | Blur radius applied to the moving background image. |
| `iconSaturate`     | `number`                 | `5`         | No       | Saturation multiplier for the background image.     |
| `iconBrightness`   | `number`                 | `1.3`       | No       | Brightness multiplier for the background image.     |
| `iconScale`        | `number`                 | `4`         | No       | Scale applied to the moving background image.       |
| `iconOpacity`      | `number`                 | `0.3`       | No       | Opacity of the moving background image.             |
| `borderWidth`      | `number`                 | `3`         | No       | Width of the glowing border in pixels.              |
| `borderBlur`       | `number`                 | `10`        | No       | Backdrop blur applied to the glowing border.        |
| `borderSaturate`   | `number`                 | `4.2`       | No       | Backdrop saturation multiplier for the border.      |
| `borderBrightness` | `number`                 | `2.5`       | No       | Backdrop brightness multiplier for the border.      |
| `borderContrast`   | `number`                 | `2.5`       | No       | Backdrop contrast multiplier for the border.        |
| `ref`              | `HTMLDivElement \| null` | `null`      | No       | Bindable reference to the grid element.             |
| `class`            | `string`                 | `undefined` | No       | Additional classes applied to the grid.             |

### GlowCard

Profile card rendered within a GlowCardGrid.

| Prop     | Type     | Default     | Required | Description                                        |
| -------- | -------- | ----------- | -------- | -------------------------------------------------- |
| `name`   | `string` | —           | Yes      | Display name shown on the card.                    |
| `handle` | `string` | —           | Yes      | Secondary handle shown below the name.             |
| `avatar` | `string` | —           | Yes      | Avatar image URL used by the card and glow effect. |
| `class`  | `string` | `undefined` | No       | Additional classes applied to the card.            |

## Features

- Displays cards with glowing border and background effects
- Fine-tunable icon and border blur, saturation, brightness, and contrast parameters
- Composable GlowCard and GlowCardGrid components

## Examples

### Subtle glow

```svelte
<script lang="ts">
  import { GlowCard, GlowCardGrid } from "$chan/glow-card-grid";

  const PROFILES = [
    {
      name: "Chánh Đại",
      handle: "@iamncdai",
      avatar: "https://unavatar.io/x/iamncdai"
    },
    {
      name: "Emil Kowalski",
      handle: "@emilkowalski",
      avatar: "https://unavatar.io/x/emilkowalski"
    }
  ];
</script>

<div class="w-full p-4">
  <GlowCardGrid
    iconBlur={32}
    iconSaturate={2}
    iconOpacity={0.15}
    borderWidth={1}
    borderBlur={14}
    borderSaturate={2}
    borderBrightness={1.5}
    borderContrast={1.5}
    class="md:grid-cols-2"
  >
    {#each PROFILES as profile (profile.name)}
      <GlowCard {...profile} />
    {/each}
  </GlowCardGrid>
</div>
```

### Vibrant glow

```svelte
<script lang="ts">
  import { GlowCard, GlowCardGrid } from "$chan/glow-card-grid";

  const PROFILES = [
    {
      name: "Chánh Đại",
      handle: "@iamncdai",
      avatar: "https://unavatar.io/x/iamncdai"
    },
    {
      name: "Emil Kowalski",
      handle: "@emilkowalski",
      avatar: "https://unavatar.io/x/emilkowalski"
    }
  ];
</script>

<div class="w-full p-4">
  <GlowCardGrid
    iconBlur={18}
    iconSaturate={7}
    iconBrightness={1.6}
    iconScale={5}
    iconOpacity={0.5}
    borderWidth={4}
    borderBlur={8}
    borderSaturate={6}
    borderBrightness={3}
    borderContrast={3}
    class="md:grid-cols-2"
  >
    {#each PROFILES as profile (profile.name)}
      <GlowCard {...profile} />
    {/each}
  </GlowCardGrid>
</div>
```

### Shape and layout

```svelte
<script lang="ts">
  import { GlowCard, GlowCardGrid } from "$chan/glow-card-grid";

  const PROFILES = [
    {
      name: "Chánh Đại",
      handle: "@iamncdai",
      avatar: "https://unavatar.io/x/iamncdai"
    },
    {
      name: "Emil Kowalski",
      handle: "@emilkowalski",
      avatar: "https://unavatar.io/x/emilkowalski"
    }
  ];
</script>

<div class="w-full p-4">
  <GlowCardGrid cardRadius={28} class="mx-auto max-w-2xl md:grid-cols-2">
    {#each PROFILES as profile (profile.name)}
      <GlowCard {...profile} class="h-64" />
    {/each}
  </GlowCardGrid>
</div>
```
