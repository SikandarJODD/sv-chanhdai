<script lang="ts">
	import { cn } from "#lib/utils.js";
	import { useMotionValueEvent } from "motion-sv";
	import { watch } from "runed";
	import {
		setSwipeActionsContext,
		useSwipeItem
	} from "./swipe-actions-context.svelte";
	import type { SwipeActionsProps, SwipeId } from "./swipe-actions-types";

	let {
		ref = $bindable(null),
		children,
		side,
		fullSwipe = false,
		class: className,
		...restProps
	}: SwipeActionsProps = $props();

	const item = useSwipeItem();
	let contents = $state<{ id: SwipeId; width: number }[]>([]);
	const total = $derived(
		contents.reduce((sum, content) => sum + content.width, 0)
	);

	function measure(id: SwipeId, width: number) {
		const index = contents.findIndex((content) => content.id === id);
		if (index === -1) contents.push({ id, width });
		else if (contents[index].width !== width) contents[index].width = width;
	}

	function forget(id: SwipeId) {
		contents = contents.filter((content) => content.id !== id);
	}

	function offsetOf(id: SwipeId) {
		let offset = 0;
		for (const content of contents) {
			if (content.id === id) break;
			offset += content.width;
		}
		return offset;
	}

	function isOutermost(id: SwipeId) {
		return contents.length > 0 && contents.at(-1)?.id === id;
	}

	setSwipeActionsContext({
		get side() {
			return side;
		},
		get fullSwipe() {
			return fullSwipe;
		},
		measure,
		forget,
		offsetOf,
		isOutermost
	});

	watch([() => side, () => total], ([currentSide, currentTotal]) => {
		item.setStripWidth(currentSide, currentTotal);
		return () => item.setStripWidth(currentSide, 0);
	});

	useMotionValueEvent(item.x, "change", (value) => {
		if (ref) {
			ref.style.transform = `translate3d(${Math.round(value)}px, 0, 0)`;
		}
	});

	function attachActions(element: HTMLDivElement) {
		ref = element;
		element.style.transform = `translate3d(${Math.round(item.x.get())}px, 0, 0)`;
		return () => {
			if (ref === element) ref = null;
		};
	}
</script>

<div
	{@attach attachActions}
	data-slot="swipe-actions"
	data-side={side}
	data-armed={item.armed === side ? "" : undefined}
	inert={item.state !== side}
	class={cn(
		"absolute top-0 bottom-0 z-0 w-full",
		side === "left" ? "right-full" : "left-full",
		className
	)}
	{...restProps}
>
	{@render children()}
</div>
