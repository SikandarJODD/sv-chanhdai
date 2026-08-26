<script lang="ts" module>
	import type { Snippet } from "svelte";
	import type { ClassValue } from "svelte/elements";
	import type {
		MotionHTMLAttributes,
		MotionProps,
		MotionStyleProps
	} from "motion-sv";

	type MotionDivProps = MotionProps<"div"> & MotionHTMLAttributes<"div">;

	export type SlideToUnlockHandleProps = Omit<
		MotionDivProps,
		| "children"
		| "class"
		| "style"
		| "ref"
		| "drag"
		| "dragConstraints"
		| "dragElastic"
		| "dragMomentum"
		| "onDragStart"
		| "onDragEnd"
	> & {
		children?: Snippet;
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
	}: SlideToUnlockHandleProps = $props();

	const context = useSlideToUnlock();
</script>

<!-- This isn't working in motion-sv for now: <motion.div {...restProps}> -->
<motion.div
	bind:ref
	data-slot="handle"
	class={cn(
		"absolute top-0 left-0 flex h-10 cursor-grab items-center justify-center rounded-lg bg-white text-zinc-400 shadow-sm active:cursor-grabbing",
		"[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-6",
		className
	)}
	style={{ width: context.handleWidth, x: context.x, ...style }}
	drag="x"
	dragConstraints={context.trackRef ?? false}
	dragElastic={0}
	dragMomentum={false}
	onDragStart={context.onDragStart}
	onDragEnd={context.onDragEnd}
>
	{#if children}
		{@render children()}
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			aria-hidden="true"
		>
			<path
				d="M24 12 12.75 3v4.696H0v8.608h12.75V21z"
				fill="currentColor"
			/>
		</svg>
	{/if}
</motion.div>
