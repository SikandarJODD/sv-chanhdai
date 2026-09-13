# Testimonial 2

Display a testimonial quote with author attribution and source link.

Packages: None

## Installation

### npm

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/testimonial-2.json
```

### pnpm

```bash
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/testimonial-2.json
```

### yarn

```bash
yarn dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/testimonial-2.json
```

### bun

```bash
bunx shadcn-svelte@latest add https://sv-animations.vercel.app/r/testimonial-2.json
```

## Usage

```svelte
<script lang="ts">
  import { Testimonial2 } from "$chan/testimonial-2";
</script>

<Testimonial2
  authorName="Jane Doe"
  authorTagline="Product Designer"
  url="https://example.com"
  quote="This component library is a joy to use."
/>
```

## Props

### Testimonial2

Quote and author attribution with an external profile link.

| Prop            | Type     | Default     | Required | Description                                            |
| --------------- | -------- | ----------- | -------- | ------------------------------------------------------ |
| `authorName`    | `string` | —           | Yes      | Full display name of the testimonial author.           |
| `authorTagline` | `string` | —           | Yes      | Short title or description shown beside the author.    |
| `url`           | `string` | —           | Yes      | Link to the author's profile, website, or social page. |
| `quote`         | `string` | —           | Yes      | Testimonial quote content.                             |
| `class`         | `string` | `undefined` | No       | Additional classes applied to the figure.              |

## Features

- Displays a testimonial quote with author name and tagline
- Links out to the original source (e.g., a tweet) through its URL prop
