<script lang="ts">
	import { cn } from "#lib/utils.js";
	import { onDestroy, untrack } from "svelte";
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
	type ContentMeasurement = {
		id: SwipeId;
		element: HTMLSpanElement;
		width: number;
	};

	let contents = $state.raw<ContentMeasurement[]>([]);
	let measuredSide: SwipeActionsProps["side"] | undefined;
	let resizeObserver: ResizeObserver | undefined;
	const total = $derived(
		contents.reduce((sum, content) => sum + content.width, 0)
	);

	function updateMeasurements(entries: ResizeObserverEntry[]) {
		let changed = false;
		const next = contents.map((content) => {
			const entry = entries.find(
				(entry) => entry.target === content.element
			);
			if (!entry) return content;

			const width =
				entry.borderBoxSize[0]?.inlineSize ?? entry.contentRect.width;
			if (width === content.width) return content;
			changed = true;
			return { ...content, width };
		});

		if (changed) contents = next;
	}

	function registerContent(id: SwipeId, element: HTMLSpanElement) {
		contents = [...contents, { id, element, width: 0 }];
		resizeObserver ??= new ResizeObserver(updateMeasurements);
		resizeObserver.observe(element, { box: "border-box" });

		return () => {
			resizeObserver?.unobserve(element);
			contents = contents.filter((content) => content.id !== id);
			if (contents.length === 0) {
				resizeObserver?.disconnect();
				resizeObserver = undefined;
			}
		};
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
		registerContent,
		offsetOf,
		isOutermost
	});

	watch([() => side, () => total], ([currentSide, currentTotal]) => {
		if (measuredSide && measuredSide !== currentSide) {
			item.setStripWidth(measuredSide, 0);
		}
		measuredSide = currentSide;
		item.setStripWidth(currentSide, currentTotal);
	});
	onDestroy(() => {
		resizeObserver?.disconnect();
		if (measuredSide) item.setStripWidth(measuredSide, 0);
	});

	useMotionValueEvent(item.x, "change", (value) => {
		if (ref) {
			ref.style.transform = `translate3d(${Math.round(value)}px, 0, 0)`;
		}
	});

	function attachActions(element: HTMLDivElement) {
		untrack(() => {
			ref = element;
			element.style.transform = `translate3d(${Math.round(item.x.get())}px, 0, 0)`;
		});
		return () => {
			untrack(() => {
				if (ref === element) ref = null;
			});
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
