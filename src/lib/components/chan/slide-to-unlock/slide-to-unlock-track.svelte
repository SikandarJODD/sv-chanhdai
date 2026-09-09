<script lang="ts" module>
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	export type SlideToUnlockTrackProps = Omit<
		HTMLAttributes<HTMLDivElement>,
		"children"
	> & {
		children: Snippet;
		ref?: HTMLDivElement | null;
	};
</script>

<script lang="ts">
	import { cn } from "$lib/utils";
	import { useSlideToUnlock } from "./slide-to-unlock-context";

	let {
		ref = $bindable(null),
		children,
		class: className,
		...restProps
	}: SlideToUnlockTrackProps = $props();

	const context = useSlideToUnlock();

	function attachTrack(element: HTMLDivElement) {
		ref = element;
		context.trackRef = element;

		return () => {
			if (ref === element) ref = null;
			if (context.trackRef === element) context.trackRef = null;
		};
	}
</script>

<div
	{@attach attachTrack}
	data-slot="track"
	class={cn("relative flex h-10 items-center justify-center", className)}
	{...restProps}
>
	{@render children()}
</div>
