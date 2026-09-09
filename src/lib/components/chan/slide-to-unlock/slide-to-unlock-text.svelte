<script lang="ts" module>
	import type { Snippet } from "svelte";
	import type { ClassValue } from "svelte/elements";
	import type {
		MotionHTMLAttributes,
		MotionProps,
		MotionStyleProps
	} from "motion-sv";

	type MotionDivProps = MotionProps<"div"> & MotionHTMLAttributes<"div">;

	export type SlideToUnlockTextProps = Omit<
		MotionDivProps,
		"children" | "class" | "style" | "ref"
	> & {
		/** Receives the current dragging state. */
		children: Snippet<[{ isDragging: boolean }]>;
		class?: ClassValue;
		style?: MotionStyleProps;
		ref?: HTMLDivElement | null;
	};
</script>

<script lang="ts">
	import { cn } from "$lib/utils";
	import { motion } from "motion-sv";
	import { useSlideToUnlock } from "./slide-to-unlock-context";

	let {
		ref = $bindable(null),
		children,
		class: className,
		style,
		...restProps
	}: SlideToUnlockTextProps = $props();

	const context = useSlideToUnlock();
</script>

<!-- This isn't working in motion-sv for now: <motion.div {...restProps}> -->
<motion.div
	bind:ref
	data-slot="text"
	data-dragging={context.isDragging}
	class={cn("pl-1 text-lg font-medium", className)}
	style={{
		marginLeft: context.handleWidth,
		opacity: context.textOpacity,
		...style
	}}
>
	{@render children({ isDragging: context.isDragging })}
</motion.div>
