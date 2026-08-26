<script lang="ts" module>
	import type { Snippet } from "svelte";
	import type { ClassValue, HTMLAttributes } from "svelte/elements";

	export type SpinningCircularTextProps = Omit<
		HTMLAttributes<HTMLDivElement>,
		"children" | "class"
	> & {
		text: string;
		/** Controls the distance between characters. @default 1 */
		charSpacing?: number;
		/** Controls the size of each character. @default "1rem" */
		fontSize?: string;
		/** Classes applied to the spinning ring. */
		spinClass?: ClassValue;
		/** Custom content rendered inside each positioned character wrapper. */
		renderChar?: Snippet<[{ char: string; index: number }]>;
		class?: ClassValue;
		ref?: HTMLDivElement | null;
	};
</script>

<script lang="ts">
	import { cn } from "$lib/utils";

	let {
		ref = $bindable(null),
		text,
		charSpacing = 1,
		fontSize = "1rem",
		spinClass,
		renderChar,
		class: className,
		style,
		...restProps
	}: SpinningCircularTextProps = $props();

	const characters = $derived(text.split(""));
</script>

<div
	bind:this={ref}
	class={cn(
		"grid size-(--sc-container-size) place-items-center font-mono font-medium uppercase select-none",
		className
	)}
	{style}
	style:--sc-size={fontSize}
	style:--sc-char-count={characters.length}
	style:--sc-char-spacing={charSpacing}
	style:--sc-inner-angle="calc((360 / var(--sc-char-count)) * 1deg)"
	style:--sc-radius-factor="calc(var(--sc-char-spacing)/sin(var(--sc-inner-angle)))"
	style:--sc-radius="calc(var(--sc-radius-factor) * -1ch)"
	style:--sc-container-size="calc(var(--sc-radius-factor) * var(--sc-size) *2)"
	{...restProps}
>
	<div
		class={cn(
			"relative animate-spin-ccw text-(size:--sc-size) leading-none",
			"*:absolute *:top-1/2 *:left-1/2 *:inline-block",
			"*:[--sc-char-rotate:calc(var(--sc-inner-angle)*var(--sc-char-index))]",
			"*:transform-[translate(-50%,-50%)_rotate(var(--sc-char-rotate))_translateY(var(--sc-radius))]",
			spinClass
		)}
		aria-hidden="true"
	>
		{#each characters as char, index (index)}
			<span style:--sc-char-index={index}>
				{#if renderChar}
					{@render renderChar({ char, index })}
				{:else}
					{char}
				{/if}
			</span>
		{/each}
	</div>
	<span class="sr-only">{text}</span>
</div>
