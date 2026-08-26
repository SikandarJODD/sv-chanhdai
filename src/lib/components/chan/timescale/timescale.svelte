<script lang="ts" module>
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";
	import type { WithElementRef } from "$lib/utils";

	export type TimescaleRootProps = Omit<
		WithElementRef<HTMLAttributes<HTMLDivElement>>,
		"children"
	> & {
		children: Snippet;
		orientation?: "horizontal" | "vertical";
	};
</script>

<script lang="ts">
	import { cn } from "$lib/utils";

	let {
		ref = $bindable(null),
		children,
		class: className,
		orientation = "horizontal",
		...restProps
	}: TimescaleRootProps = $props();
</script>

<div
	bind:this={ref}
	data-slot="timescale-root"
	data-orientation={orientation}
	class={cn(
		"group/timescale relative flex w-full [--timescale-rail:--spacing(14)]",
		"data-[orientation=vertical]:flex-col",
		className
	)}
	{...restProps}
>
	{@render children()}
</div>
