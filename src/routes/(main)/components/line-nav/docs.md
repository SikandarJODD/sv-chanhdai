# Line Nav

Vertical navigation with a line marker that expands on hover and active state.

Packages: motion-sv

## Installation

### npm

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/line-nav.json
```

### pnpm

```bash
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/line-nav.json
```

### yarn

```bash
yarn dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/line-nav.json
```

### bun

```bash
bunx shadcn-svelte@latest add https://sv-animations.vercel.app/r/line-nav.json
```

## Usage

```svelte
<script lang="ts">
	import { LineNav } from "#lib/components/chan/line-nav/index.js";

	const items = [
		{ title: "Introduction", href: "#introduction" },
		{ title: "Installation", href: "#installation" },
		{ title: "Usage", href: "#usage" }
	];

	let activeHref = $state("#introduction");
</script>

<LineNav
	{items}
	{activeHref}
	onItemClick={(item) => (activeHref = item.href)}
/>
```

## Props

### LineNav

Animated navigation list for links to page sections.

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `items` | `LineNavItem[]` | — | Yes | Navigation items containing a title and href. |
| `activeHref` | `string` | `undefined` | No | Href of the currently active item. |
| `scrollActiveIntoView` | `boolean` | `true` | No | Scrolls the active item into view when the component mounts. |
| `onItemClick` | `(item: LineNavItem, event: MouseEvent) => void` | `undefined` | No | Called when a navigation item is clicked. |
| `class` | `string` | `undefined` | No | Additional classes applied to the navigation element. |

## Features

- Controlled active state through activeHref and onItemClick
- Optional automatic scrolling to the active item on mount
