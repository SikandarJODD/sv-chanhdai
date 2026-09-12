# Shimmering Text

Animated text with a configurable character-by-character shimmer effect.

Packages: motion-sv

## Installation

### npm

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/shimmering-text.json
```

### pnpm

```bash
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/shimmering-text.json
```

### yarn

```bash
yarn dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/shimmering-text.json
```

### bun

```bash
bunx shadcn-svelte@latest add https://sv-animations.vercel.app/r/shimmering-text.json
```

## Usage

No usage example is available.

## Props

### ShimmeringText

Animated text with a staggered shimmer across its characters.

| Prop        | Type      | Default     | Required | Description                                                       |
| ----------- | --------- | ----------- | -------- | ----------------------------------------------------------------- |
| `text`      | `string`  | —           | Yes      | Text rendered with the shimmering effect.                         |
| `duration`  | `number`  | `1`         | No       | Duration of one shimmer cycle in seconds.                         |
| `isStopped` | `boolean` | `false`     | No       | Pauses the shimmer and returns characters to their resting color. |
| `class`     | `string`  | `undefined` | No       | Additional classes applied to the outer span.                     |

## Features

- Smooth, light-sweeping shimmer animation for text
- Customizable animation duration and a stop control via isStopped
- Customizable base and peak highlight colors via CSS variables
