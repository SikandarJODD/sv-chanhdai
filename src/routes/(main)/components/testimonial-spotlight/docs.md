# Testimonial Spotlight

Testimonial card with spotlight effect on hover.

Packages: None

## Installation

### npm

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/testimonial-spotlight.json
```

### pnpm

```bash
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/testimonial-spotlight.json
```

### yarn

```bash
yarn dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/testimonial-spotlight.json
```

### bun

```bash
bunx shadcn-svelte@latest add https://sv-animations.vercel.app/r/testimonial-spotlight.json
```

## Usage

```svelte
<script lang="ts">
  import { TestimonialSpotlight } from "$chan/testimonial-spotlight";
</script>

<TestimonialSpotlight class="max-w-sm p-6">
  <blockquote class="text-lg font-medium">
    “This component library is a joy to use.”
  </blockquote>
  <p class="mt-4 text-sm text-muted-foreground">Jane Doe</p>
</TestimonialSpotlight>
```

## Props

### TestimonialSpotlight

Content container with a pointer-following radial spotlight.

| Prop       | Type                     | Default     | Required | Description                                            |
| ---------- | ------------------------ | ----------- | -------- | ------------------------------------------------------ |
| `children` | `Snippet`                | —           | Yes      | Content rendered inside the spotlight container.       |
| `class`    | `string`                 | `undefined` | No       | Additional classes applied to the spotlight container. |
| `ref`      | `HTMLDivElement \| null` | `null`      | No       | Bindable reference to the spotlight container.         |

## Features

- Wraps testimonial cards with a cursor-hover spotlight effect
- Customizable spotlight color, size, and opacity via CSS variables
- Composable with the base Testimonial component
