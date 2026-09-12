# Timescale

Ruler-style timeline for plotting milestones along a horizontal or vertical axis.

Packages: None

## Installation

### npm

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/timescale.json
```

### pnpm

```bash
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/timescale.json
```

### yarn

```bash
yarn dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/timescale.json
```

### bun

```bash
bunx shadcn-svelte@latest add https://sv-animations.vercel.app/r/timescale.json
```

## Usage

```svelte
<script lang="ts">
  import {
    Timescale,
    TimescaleContent,
    TimescaleItem,
    TimescaleRail,
    TimescaleTick,
    TimescaleTrack,
    TimescaleYear
  } from "$chan/timescale";
</script>

<Timescale orientation="vertical">
  <TimescaleTrack>
    <TimescaleRail />

    <TimescaleItem>
      <TimescaleTick />
      <TimescaleYear>2024</TimescaleYear>
      <TimescaleContent>Started the project.</TimescaleContent>
    </TimescaleItem>

    <TimescaleItem>
      <TimescaleTick />
      <TimescaleYear>2025</TimescaleYear>
      <TimescaleContent>Released version 1.0.</TimescaleContent>
    </TimescaleItem>
  </TimescaleTrack>
</Timescale>
```

## Props

### Timescale

Root layout that sets the timeline orientation for its primitives.

| Prop          | Type                         | Default        | Required | Description                                     |
| ------------- | ---------------------------- | -------------- | -------- | ----------------------------------------------- |
| `children`    | `Snippet`                    | —              | Yes      | Timescale primitives rendered inside the root.  |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | No       | Direction used to lay out the timeline.         |
| `class`       | `string`                     | `undefined`    | No       | Additional classes applied to the root element. |
| `ref`         | `HTMLDivElement \| null`     | `null`         | No       | Bindable reference to the root element.         |

### TimescaleIntroScroll

Wrapper that performs the initial horizontal scroll animation.

| Prop       | Type      | Default | Required | Description                              |
| ---------- | --------- | ------- | -------- | ---------------------------------------- |
| `children` | `Snippet` | —       | Yes      | Timescale content containing a viewport. |

### Timescale layout primitives

Shared API for Age, Content, Header, Item, Rail, Tick, Track, Viewport, and Year.

| Prop       | Type                  | Default     | Required | Description                                               |
| ---------- | --------------------- | ----------- | -------- | --------------------------------------------------------- |
| `children` | `Snippet`             | `undefined` | No       | Content rendered inside the selected timescale primitive. |
| `class`    | `string`              | `undefined` | No       | Additional classes applied to the primitive element.      |
| `ref`      | `HTMLElement \| null` | `null`      | No       | Bindable reference to the primitive's underlying element. |

## Features

- Ruler-style timeline for plotting milestones along a horizontal or vertical axis
- Composable subcomponents for header, track, ticks, and content
- TimescaleIntroScroll auto-scrolls a horizontal timeline to its latest item on mount, respecting prefers-reduced-motion
