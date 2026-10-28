<script lang="ts">
	import { cn } from "#lib/utils.js";
	import { onDestroy } from "svelte";
	import { useReducedMotion } from "motion-sv";
	import { watch } from "runed";
	import {
		setSwipeItemContext,
		useSwipeRoot
	} from "./swipe-actions-context.svelte";
	import { SwipeItemState } from "./swipe-actions-state.svelte";
	import type { SwipeItemProps } from "./swipe-actions-types";

	let {
		ref = $bindable(null),
		children,
		class: className,
		threshold = 0.5,
		velocityFactor = 0.2,
		fullSwipeThreshold = 0.5,
		disabled = false,
		closeOnScroll = false,
		onOpenChange,
		onkeydown,
		...restProps
	}: SwipeItemProps = $props();

	const id = Symbol("swipe-item");
	const group = useSwipeRoot();
	const shouldReduceMotion = useReducedMotion();
	const item = new SwipeItemState({
		id,
		group,
		threshold: () => threshold,
		velocityFactor: () => velocityFactor,
		fullSwipeThreshold: () => fullSwipeThreshold,
		disabled: () => disabled,
		shouldReduceMotion: () => shouldReduceMotion.current,
		onOpenChange: () => onOpenChange
	});

	setSwipeItemContext(item);
	const unregister = group?.register(id, item.close);
	onDestroy(() => unregister?.());

	watch(
		[() => item.state, () => closeOnScroll],
		([state, shouldCloseOnScroll]) => {
			if (state === "closed") return;

			const handlePointerDown = (event: PointerEvent) => {
				if (!ref?.contains(event.target as Node)) item.close();
			};
			const handleEscape = (event: KeyboardEvent) => {
				if (event.key === "Escape") item.close();
			};
			const handleScroll = () => item.close();

			document.addEventListener("pointerdown", handlePointerDown, true);
			document.addEventListener("keydown", handleEscape);
			if (shouldCloseOnScroll) {
				window.addEventListener("scroll", handleScroll, true);
			}

			return () => {
				document.removeEventListener(
					"pointerdown",
					handlePointerDown,
					true
				);
				document.removeEventListener("keydown", handleEscape);
				if (shouldCloseOnScroll) {
					window.removeEventListener("scroll", handleScroll, true);
				}
			};
		}
	);

	function attachItem(element: HTMLDivElement) {
		ref = element;
		const observer = new ResizeObserver(() => {
			item.setItemWidth(element.offsetWidth);
		});
		observer.observe(element);

		return () => {
			observer.disconnect();
			if (ref === element) ref = null;
		};
	}

	function handleKeyDown(event: KeyboardEvent) {
		onkeydown?.(event as KeyboardEvent & { currentTarget: HTMLDivElement });
		if (!event.defaultPrevented) item.onKeyDown(event);
	}
</script>

<div
	{@attach attachItem}
	data-slot="swipe-item"
	data-state={item.state}
	data-disabled={disabled || undefined}
	data-dragging={item.dragging || undefined}
	class={cn("relative isolate overflow-clip", className)}
	onkeydown={handleKeyDown}
	{...restProps}
>
	{@render children()}
</div>
