# Apple Carousel

Infinite autoplay carousel with progress dots, inspired by Apple’s website.

Packages: motion-sv, runed

## Installation

### npm

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/apple-carousel.json
```

### pnpm

```bash
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/apple-carousel.json
```

### yarn

```bash
yarn dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/apple-carousel.json
```

### bun

```bash
bunx shadcn-svelte@latest add https://sv-animations.vercel.app/r/apple-carousel.json
```

## Usage

No usage example is available.

## Props

### AppleCarouselRoot

Root provider that owns selection, playback, and carousel timing.

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `children` | `Snippet` | — | Yes | Carousel content and controls. |
| `duration` | `number` | `5000` | No | Time each item remains active during autoplay, in milliseconds. |
| `class` | `string` | `undefined` | No | Additional classes applied to the root element. |
| `ref` | `HTMLDivElement \| null` | `null` | No | Bindable reference to the root element. |

### AppleCarouselContent

Scrollable viewport that renders real items and seamless loop clones.

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `items` | `readonly T[]` | — | Yes | Ordered data rendered as carousel items. |
| `children` | `Snippet<[item: T]>` | — | Yes | Render snippet that returns one AppleCarouselItem for each item. |
| `class` | `string` | `undefined` | No | Additional classes applied to the scroll viewport. |
| `ref` | `HTMLDivElement \| null` | `null` | No | Bindable reference to the scroll viewport. |

### AppleCarouselItem

Accessible carousel panel with clone and current-item state.

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `children` | `Snippet` | — | Yes | Content rendered inside the carousel panel. |
| `class` | `string` | `undefined` | No | Additional classes applied to the panel. |
| `ref` | `HTMLLIElement \| null` | `null` | No | Bindable reference to the panel element. |

### AppleCarouselControls

Layout wrapper for the tab list and playback control.

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `children` | `Snippet` | — | Yes | Tab list and play button. |
| `size` | `'default' \| 'sm'` | `'default'` | No | Size of the tab list and play button. |
| `class` | `string` | `undefined` | No | Additional classes applied to the controls wrapper. |
| `ref` | `HTMLDivElement \| null` | `null` | No | Bindable reference to the controls wrapper. |

### AppleCarouselTabList

Accessible tab list linked to the carousel items.

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `items` | `readonly T[]` | — | Yes | Ordered data rendered as carousel tabs. |
| `children` | `Snippet<[item: T]>` | — | Yes | Render snippet that returns one AppleCarouselTab for each item. |
| `class` | `string` | `undefined` | No | Additional classes applied to the tab list. |
| `ref` | `HTMLDivElement \| null` | `null` | No | Bindable reference to the tab list. |

### AppleCarouselTab

Progress dot and keyboard-accessible item selector.

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `children` | `Snippet` | — | Yes | Accessible label announced for the tab. |
| `onclick` | `(event: MouseEvent) => void` | `undefined` | No | Called before the tab selects its item. |
| `class` | `string` | `undefined` | No | Additional classes applied to the tab. |
| `ref` | `HTMLButtonElement \| null` | `null` | No | Bindable reference to the tab button. |

### AppleCarouselPlayButton

Play/pause control with a reduced-motion-aware morphing icon.

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `onclick` | `(event: MouseEvent) => void` | `undefined` | No | Called before the carousel toggles playback. |
| `class` | `string` | `undefined` | No | Additional classes applied to the play button. |
| `ref` | `HTMLButtonElement \| null` | `null` | No | Bindable reference to the play button. |

## Features

- Loops endlessly, with neighboring cards peeking in.
- Autoplays with a progress dot, and pauses on interaction or when off screen.
- Swipe, scroll, click a dot, or use arrow keys, even mid-slide.
- Respects reduced motion: no autoplay until Play is pressed, and cards jump instead of sliding.

## Examples

### Captions

Overlay responsive captions and actions on each carousel image.

```svelte
<script lang="ts">
	import { Button } from "#lib/components/ui/button/index.js";
	import {
		AppleCarouselContent,
		AppleCarouselControls,
		AppleCarouselItem,
		AppleCarouselPlayButton,
		AppleCarouselRoot,
		AppleCarouselTab,
		AppleCarouselTabList
	} from "#lib/components/chan/apple-carousel/index.js";
	import { cn } from "#lib/utils.js";

	const ITEMS = [
		{
			title: "Quang Ninh",
			description: "Limestone islands rise from emerald water.",
			image: "https://assets.chanhdai.com/registry/images/components/apple-carousel/1.webp",
			href: "https://en.wikipedia.org/wiki/Quảng_Ninh_province"
		},
		{
			title: "An Giang",
			description: "Cajuput trees arch over a quiet green waterway.",
			image: "https://assets.chanhdai.com/registry/images/components/apple-carousel/2.webp?v=2",
			href: "https://en.wikipedia.org/wiki/An_Giang_province"
		},
		{
			title: "Ninh Binh",
			description:
				"A pavilion rests on still water beneath karst cliffs.",
			image: "https://assets.chanhdai.com/registry/images/components/apple-carousel/3.webp",
			href: "https://en.wikipedia.org/wiki/Ninh_Bình_province"
		},
		{
			title: "Hue",
			description: "Tiered palace roofs against a pale sky.",
			image: "https://assets.chanhdai.com/registry/images/components/apple-carousel/4.webp",
			href: "https://en.wikipedia.org/wiki/Huế"
		},
		{
			title: "Ninh Binh",
			description:
				"Temple corridors wind toward a lake among the mountains.",
			image: "https://assets.chanhdai.com/registry/images/components/apple-carousel/5.webp",
			href: "https://en.wikipedia.org/wiki/Ninh_Bình_province"
		},
		{
			title: "Ho Chi Minh City",
			description: "The skyline glows over the river at dusk.",
			image: "https://assets.chanhdai.com/registry/images/components/apple-carousel/6.webp",
			href: "https://en.wikipedia.org/wiki/Ho_Chi_Minh_City"
		},
		{
			title: "Da Nang",
			description: "A dragon-shaped bridge lights up the evening river.",
			image: "https://assets.chanhdai.com/registry/images/components/apple-carousel/7.webp",
			href: "https://en.wikipedia.org/wiki/Da_Nang"
		}
	] as const;
</script>

<AppleCarouselRoot duration={3600}>
	<AppleCarouselContent items={ITEMS}>
		{#snippet children(item)}
			<AppleCarouselItem class="dark @max-3xl:h-96">
				<img
					src={item.image}
					alt={item.title}
					class="absolute inset-0 size-full object-cover select-none"
				/>
				<div
					aria-hidden="true"
					class="pointer-events-none absolute inset-0 bg-linear-to-t from-background/70 via-background/30 to-transparent"
				></div>
				<div
					class={cn(
						"absolute inset-x-0 bottom-0 flex items-center gap-4 px-12 pb-10 text-xl/6 text-foreground",
						"opacity-36 transition-opacity duration-150 ease-out in-data-current:opacity-100 in-data-current:duration-400",
						"@max-5xl:gap-3 @max-5xl:px-6 @max-5xl:pb-6 @max-5xl:text-base/5",
						"@max-3xl:flex-col @max-3xl:px-6 @max-3xl:text-center"
					)}
				>
					<Button
						href={item.href}
						target="_blank"
						rel="noopener noreferrer"
						class="rounded-full"
					>
						Learn more
					</Button>
					<p class="text-pretty text-shadow-sm">
						<span
							class="font-semibold after:px-2 after:opacity-50 after:content-['•'/''] @max-3xl:block @max-3xl:after:hidden"
						>
							{item.title}
						</span>
						{item.description}
					</p>
				</div>
			</AppleCarouselItem>
		{/snippet}
	</AppleCarouselContent>

	<AppleCarouselControls>
		<AppleCarouselTabList items={ITEMS} aria-label="Places in Viet Nam">
			{#snippet children(item)}
				<AppleCarouselTab>{item.title}</AppleCarouselTab>
			{/snippet}
		</AppleCarouselTabList>
		<AppleCarouselPlayButton />
	</AppleCarouselControls>
</AppleCarouselRoot>
```
