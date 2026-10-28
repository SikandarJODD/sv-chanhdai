<script lang="ts">
	import { cn } from "#lib/utils.js";
	import { useMotionValueEvent } from "motion-sv";
	import { watch } from "runed";
	import {
		setSwipeActionIdContext,
		useSwipeActions,
		useSwipeItem
	} from "./swipe-actions-context.svelte";
	import type { SwipeActionProps } from "./swipe-actions-types";
	import { sideTravel } from "./swipe-actions-utils";

	let {
		ref = $bindable(null),
		children,
		closeOnClick = true,
		class: className,
		onclick,
		...restProps
	}: SwipeActionProps = $props();

	const id = Symbol("swipe-action");
	const item = useSwipeItem();
	const actions = useSwipeActions();
	const primary = $derived(actions.fullSwipe && actions.isOutermost(id));
	const before = $derived(actions.offsetOf(id));

	setSwipeActionIdContext(id);

	function place() {
		if (!ref) return;

		const total =
			actions.side === "left" ? item.leftWidth : item.rightWidth;
		const travel = sideTravel(actions.side, item.x.get());
		const progress = total > 0 ? Math.min(1, travel / total) : 0;
		const direction = actions.side === "left" ? -1 : 1;
		const offset = before * progress * item.collapse.get() * direction;
		ref.style.transform = `translate3d(${offset.toFixed(2)}px, 0, 0)`;
	}

	watch([() => primary, () => actions.side], ([isPrimary, currentSide]) => {
		if (!isPrimary) return;
		return item.registerFullSwipe(currentSide, () => {
			ref?.dispatchEvent(
				new MouseEvent("click", { bubbles: true, cancelable: true })
			);
		});
	});

	watch(
		[
			() => before,
			() => actions.side,
			() => item.leftWidth,
			() => item.rightWidth
		],
		place
	);
	useMotionValueEvent(item.x, "change", place);
	useMotionValueEvent(item.collapse, "change", place);

	function handleClick(event: MouseEvent) {
		onclick?.(event as MouseEvent & { currentTarget: HTMLButtonElement });
		if (!event.defaultPrevented && closeOnClick) item.close();
	}

	function attachAction(element: HTMLButtonElement) {
		ref = element;
		place();
		return () => {
			if (ref === element) ref = null;
		};
	}
</script>

<button
	{@attach attachAction}
	type="button"
	data-slot="swipe-action"
	data-armed={item.armed === actions.side && primary ? "" : undefined}
	class={cn(
		"pointer-events-none absolute inset-0 flex",
		actions.side === "left" ? "justify-end" : "justify-start",
		className
	)}
	onclick={handleClick}
	{...restProps}
>
	{@render children()}
</button>
