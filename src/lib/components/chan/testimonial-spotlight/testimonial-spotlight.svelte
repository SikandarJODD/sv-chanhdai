<script lang="ts" module>
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";
	import type { WithElementRef } from "$lib/utils";

	export type TestimonialSpotlightProps = Omit<
		WithElementRef<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
		"children" | "class" | "onmousemove"
	> & {
		children: Snippet;
		class?: string;
	};
</script>

<script lang="ts">
	import { cn } from "$lib/utils";

	const spotlightBackground =
		"radial-gradient(circle at var(--spotlight-x) var(--spotlight-y), var(--spotlight-color, rgba(255, 255, 255, 0.2)), transparent var(--spotlight-size, 60%))";

	let {
		ref = $bindable(null),
		children,
		class: className,
		...restProps
	}: TestimonialSpotlightProps = $props();

	function handleMouseMove(
		event: MouseEvent & { currentTarget: HTMLDivElement }
	) {
		const rect = event.currentTarget.getBoundingClientRect();

		event.currentTarget.style.setProperty(
			"--spotlight-x",
			`${event.clientX - rect.left}px`
		);
		event.currentTarget.style.setProperty(
			"--spotlight-y",
			`${event.clientY - rect.top}px`
		);
	}
</script>

<div
	bind:this={ref}
	data-slot="testimonial-spotlight"
	class={cn(
		"group/testimonial-spotlight relative overflow-hidden rounded-xl bg-card/50 inset-ring-1 inset-ring-foreground/10",
		className
	)}
	onmousemove={handleMouseMove}
	{...restProps}
>
	<div
		class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover/testimonial-spotlight:opacity-(--spotlight-opacity,0.5)"
		style:background={spotlightBackground}
	></div>

	{@render children()}
</div>
