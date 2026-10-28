# Swipe Actions

Swipe a row in a list to reveal actions on the left or right.

Packages: @lucide/svelte, motion-sv, runed

## Installation

### npm

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/swipe-actions.json
```

### pnpm

```bash
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/swipe-actions.json
```

### yarn

```bash
yarn dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/swipe-actions.json
```

### bun

```bash
bunx shadcn-svelte@latest add https://sv-animations.vercel.app/r/swipe-actions.json
```

## Usage

```svelte
<script lang="ts">
	import {
		SwipeAction,
		SwipeActions,
		SwipeContent,
		SwipeItem,
		SwipeRoot
	} from "#lib/components/chan/swipe-actions/index.js";
</script>

<SwipeRoot>
	<SwipeItem>
		<SwipeActions side="right">
			<SwipeAction onclick={() => console.log("Delete")}>Delete</SwipeAction>
		</SwipeActions>

		<SwipeContent>
			<div class="p-4">Swipe me to the left</div>
		</SwipeContent>
	</SwipeItem>
</SwipeRoot>
```

## Props

### SwipeRoot

Coordinates a group so only one swipe item remains open.

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `children` | `Snippet` | — | Yes | Swipe items rendered inside the root. |
| `ref` | `HTMLDivElement \| null` | `null` | No | Bindable reference to the root element. |
| `class` | `ClassValue` | `undefined` | No | Additional classes applied to the root element. |

### SwipeItem

A swipeable row that owns gesture state and snap behavior.

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `children` | `Snippet` | — | Yes | Action strips and foreground content rendered inside the item. |
| `threshold` | `number` | `0.5` | No | Fraction of an action strip the drag must pass to snap open. |
| `velocityFactor` | `number` | `0.2` | No | Seconds of pointer velocity projected onto the release position. |
| `fullSwipeThreshold` | `number` | `0.5` | No | Fraction of the row width required to arm a full-swipe action. |
| `disabled` | `boolean` | `false` | No | Disables pointer and keyboard swiping. |
| `closeOnScroll` | `boolean` | `false` | No | Closes an open item when the page scrolls. |
| `onOpenChange` | `(state: SwipeState) => void` | `undefined` | No | Called when the item settles closed, left, or right. |
| `ref` | `HTMLDivElement \| null` | `null` | No | Bindable reference to the item element. |
| `class` | `ClassValue` | `undefined` | No | Additional classes applied to the item. |

### SwipeActions

Action strip revealed on one side of a swipe item.

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `children` | `Snippet` | — | Yes | Actions rendered in DOM order inside the strip. |
| `side` | `"left" \| "right"` | — | Yes | Side of the row from which actions are revealed. |
| `fullSwipe` | `boolean` | `false` | No | Lets a drag across the row invoke the outermost action. |
| `ref` | `HTMLDivElement \| null` | `null` | No | Bindable reference to the action strip. |
| `class` | `ClassValue` | `undefined` | No | Additional classes applied to the action strip. |

### SwipeAction

Styled action button displayed inside an action strip.

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `children` | `Snippet` | — | Yes | Icon and label rendered inside the action. |
| `closeOnClick` | `boolean` | `true` | No | Closes the item after the click handler runs without being prevented. |
| `onclick` | `(event: MouseEvent) => void` | `undefined` | No | Runs when the action is clicked or invoked by a full swipe. |
| `ref` | `HTMLButtonElement \| null` | `null` | No | Bindable reference to the action button. |
| `class` | `ClassValue` | `undefined` | No | Additional classes applied to the action button. |

### SwipeContent

Draggable foreground content that reveals the action strips.

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `children` | `Snippet` | — | Yes | Visible row content moved by the swipe gesture. |
| `style` | `MotionStyleProps` | `undefined` | No | Additional Motion styles merged with the horizontal motion value. |
| `ref` | `HTMLDivElement \| null` | `null` | No | Bindable reference to the draggable content. |
| `class` | `ClassValue` | `undefined` | No | Additional classes applied to the content. |

## Features

- Reveals independent action strips on the left or right side of a row
- Supports velocity-aware snapping and configurable full-swipe actions
- Keeps only one row open and closes on outside press, Escape, or optional scrolling
- Includes keyboard controls and respects reduced-motion preferences

## Examples

### Minimal

Reveal a destructive action by swiping a list row to the left.

```svelte
<script lang="ts">
	import Trash2Icon from "@lucide/svelte/icons/trash-2";
	import {
		SwipeAction,
		SwipeActions,
		SwipeContent,
		SwipeItem,
		SwipeRoot
	} from "#lib/components/chan/swipe-actions/index.js";

	const INITIAL_ITEMS = [
		{ id: "1", label: "components.json" },
		{ id: "2", label: "registry.json" },
		{ id: "3", label: "tailwind.config.ts" }
	];

	let items = $state(INITIAL_ITEMS);

	function remove(id: string) {
		items = items.filter((item) => item.id !== id);
	}
</script>

<div class="w-full overflow-clip rounded-xl border">
	<SwipeRoot>
		<ul role="list" class="divide-y">
			{#each items as item (item.id)}
				<li>
					<SwipeItem>
						<SwipeActions side="right" fullSwipe>
							<SwipeAction
								class="rounded-xl bg-red-600 text-white"
								onclick={() => remove(item.id)}
							>
								<Trash2Icon class="size-4" />
								<span class="sr-only">Delete</span>
							</SwipeAction>
						</SwipeActions>

						<SwipeContent>
							<div class="p-4 text-sm text-foreground">
								{item.label}
							</div>
						</SwipeContent>
					</SwipeItem>
				</li>
			{/each}
		</ul>
	</SwipeRoot>

	{#if items.length === 0}
		<p class="px-4 py-8 text-center text-sm text-muted-foreground">
			Nothing left.
		</p>
	{/if}
</div>
```
