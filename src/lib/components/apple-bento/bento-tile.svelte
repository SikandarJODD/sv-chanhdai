<script lang="ts" module>
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	export type BentoTileProps = Omit<HTMLAttributes<HTMLElement>, "children"> & {
		children: Snippet;
	};
</script>

<script lang="ts">
	import { cn } from "$lib/utils";

	let { children, class: className, ...restProps }: BentoTileProps = $props();
</script>

<article
	{...restProps}
	class={cn(
		"relative flex min-h-56 items-center justify-center overflow-hidden rounded-2xl border bg-background p-5 transition-colors hover:border-ink/80 focus-within:border-ink/80 lg:min-h-0",
		className
	)}
>
	{@render children()}
</article>
