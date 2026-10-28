<script lang="ts">
	import { cn } from "#lib/utils.js";
	import { motion } from "motion-sv";
	import { useSwipeItem } from "./swipe-actions-context.svelte";
	import type { SwipeContentProps } from "./swipe-actions-types";

	let {
		ref = $bindable(null),
		children,
		class: className,
		style,
		...restProps
	}: SwipeContentProps = $props();

	const item = useSwipeItem();
	const dragConstraints = $derived({
		left: -(item.fullSwipeSides.right ? item.itemWidth : item.rightWidth),
		right: item.fullSwipeSides.left ? item.itemWidth : item.leftWidth
	});
</script>

<motion.div
	bind:ref
	{...restProps}
	data-slot="swipe-content"
	data-dragging={item.dragging || undefined}
	class={cn("relative z-1", className)}
	style={{ ...style, x: item.x }}
	drag={item.disabled ? false : "x"}
	{dragConstraints}
	dragElastic={0.2}
	dragMomentum={false}
	onDragStart={item.onDragStart}
	onDrag={item.onDrag}
	onDragEnd={item.onDragEnd}
	onclickcapture={item.onClickCapture}
>
	{@render children()}
</motion.div>
