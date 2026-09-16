<script lang="ts" module>
	import type { LineNavItem } from "./line-nav.svelte";

	export type LineNavItemProps = LineNavItem & {
		active?: boolean;
		isLast?: boolean;
		onclick?: (event: MouseEvent) => void;
		ref?: HTMLAnchorElement | null;
	};
</script>

<script lang="ts">
	import { motion } from "motion-sv";
	import type { Variants } from "motion-sv";

	let {
		ref = $bindable(null),
		title,
		href,
		active = false,
		isLast = false,
		onclick
	}: LineNavItemProps = $props();

	const lineVariants: Variants = {
		normal: { width: 24 },
		active: { width: 40 },
		hover: { width: 40 }
	};
</script>

<motion.a
	bind:ref
	aria-current={active ? "page" : undefined}
	class="group relative flex h-px items-center gap-3 after:absolute after:top-1/2 after:left-0 after:size-full after:-translate-y-1/2 after:p-3.5"
	{href}
	initial={false}
	animate={active ? "active" : "normal"}
	whileHover="hover"
	{onclick}
>
	<motion.span
		class="block h-px shrink-0 bg-foreground/20 transition-[background-color] ease-out group-hover:bg-foreground group-aria-[current=page]:bg-foreground"
		variants={lineVariants}
		transition={{ type: "spring", stiffness: 200, damping: 20 }}
	/>
	<span
		class="text-sm whitespace-nowrap text-muted-foreground transition-[color] ease-out group-hover:text-foreground group-aria-[current=page]:text-foreground"
	>
		{title}
	</span>
</motion.a>

{#if !isLast}
	<span class="block h-px w-(--line-nav-width) bg-foreground/20"></span>
	<span class="block h-px w-(--line-nav-width) bg-foreground/20"></span>
{/if}
