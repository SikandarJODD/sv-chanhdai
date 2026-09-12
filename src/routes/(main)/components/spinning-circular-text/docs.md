# Spinning Circular Text

Text arranged in a circle with a continuous spinning animation.

Packages: None

## Installation

### npm

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/spinning-circular-text.json
```

### pnpm

```bash
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/spinning-circular-text.json
```

### yarn

```bash
yarn dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/spinning-circular-text.json
```

### bun

```bash
bunx shadcn-svelte@latest add https://sv-animations.vercel.app/r/spinning-circular-text.json
```

## Usage

```svelte
<script lang="ts">
  import { SpinningCircularText } from "$chan/spinning-circular-text";
</script>

<SpinningCircularText text="Port By Bhide Svelte • " />
```

## Props

### SpinningCircularText

Circular character layout with a continuously spinning ring.

| Prop          | Type                                         | Default     | Required | Description                                        |
| ------------- | -------------------------------------------- | ----------- | -------- | -------------------------------------------------- |
| `text`        | `string`                                     | —           | Yes      | Text arranged around the circle.                   |
| `charSpacing` | `number`                                     | `1`         | No       | Spacing multiplier between characters.             |
| `fontSize`    | `string`                                     | `'1rem'`    | No       | CSS font size used for each character.             |
| `spinClass`   | `ClassValue`                                 | `undefined` | No       | Classes applied to the spinning character ring.    |
| `renderChar`  | `Snippet<[{ char: string; index: number }]>` | `undefined` | No       | Custom renderer for each positioned character.     |
| `class`       | `ClassValue`                                 | `undefined` | No       | Additional classes applied to the outer container. |
| `ref`         | `HTMLDivElement \| null`                     | `null`      | No       | Bindable reference to the outer container.         |

## Features

- Adjustable character spacing and font size
- Container size scales automatically to fit the text ring
- Announces the full text to screen readers via hidden content
