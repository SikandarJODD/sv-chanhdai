<script lang="ts" module>
	import type { HTMLAttributes } from "svelte/elements";

	type BaseProps = Omit<HTMLAttributes<HTMLSpanElement>, "children"> & {
		/** The text content to truncate. */
		text: string;
		/** Custom ellipsis string to show in the middle. @default "..." */
		ellipsis?: string;
	};

	export type MiddleTruncationProps = BaseProps &
		(
			| {
					/** Fixed number of characters to always preserve at the end. Cannot be used with minEnd. */
					end: number;
					minEnd?: never;
			  }
			| {
					/** When splitting evenly, ensure at least this many characters at the end. Cannot be used with end. */
					minEnd: number;
					end?: never;
			  }
			| {
					/** When neither end nor minEnd is provided, splits text evenly in the middle. */
					end?: never;
					minEnd?: never;
			  }
		);
</script>

<script lang="ts">
	import { cn } from "$lib/utils.js";
	import { onMount } from "svelte";
	import { watch } from "runed";
	import {
		computeTruncated,
		debounceWithRAF,
		getComputedFont
	} from "./middle-truncation.js";

	let {
		class: className,
		text,
		end,
		minEnd,
		ellipsis = "...",
		...restProps
	}: MiddleTruncationProps = $props();

	let containerRef: HTMLSpanElement;
	let displayed = $derived(text);

	function recalculate(width: number) {
		const font = getComputedFont(containerRef);
		displayed = computeTruncated(
			text,
			end,
			minEnd,
			width,
			font,
			ellipsis
		);
	}

	watch(
		[() => text, () => end, () => minEnd, () => ellipsis],
		() => {
			if (containerRef) recalculate(containerRef.offsetWidth);
		},
		{ lazy: true }
	);

	onMount(() => {
		const debouncedRecalculate = debounceWithRAF(recalculate, 150);
		const resizeObserver = new ResizeObserver(([entry]) => {
			if (entry) debouncedRecalculate(entry.contentRect.width);
		});

		recalculate(containerRef.offsetWidth);
		resizeObserver.observe(containerRef);

		return () => resizeObserver.disconnect();
	});
</script>

<span
	bind:this={containerRef}
	class={cn(
		"block overflow-hidden text-ellipsis whitespace-nowrap",
		className
	)}
	title={text}
	{...restProps}>{displayed}</span
>
