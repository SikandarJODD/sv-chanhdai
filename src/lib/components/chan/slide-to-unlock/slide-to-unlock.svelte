<script lang="ts" module>
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	export type SlideToUnlockProps = Omit<
		HTMLAttributes<HTMLDivElement>,
		"children"
	> & {
		children: Snippet;
		/**
		 * Width of the drag handle in pixels.
		 * @default 56
		 */
		handleWidth?: number;
		/** Called when the handle is dragged fully to the end. */
		onUnlock?: () => void;
		ref?: HTMLDivElement | null;
	};
</script>

<script lang="ts">
	import { cn } from "$lib/utils";
	import {
		animate,
		reactiveInputRange,
		useMotionValue,
		useTransform
	} from "motion-sv";
	import { setSlideToUnlockContext } from "./slide-to-unlock-context";

	let {
		ref = $bindable(null),
		children,
		class: className,
		handleWidth = 56,
		onUnlock,
		...restProps
	}: SlideToUnlockProps = $props();

	let trackRef = $state<HTMLDivElement | null>(null);
	let isDragging = $state(false);
	const x = useMotionValue(0);
	const textOpacity = useTransform(
		x,
		reactiveInputRange(() => [0, handleWidth]),
		[1, 0]
	);

	export function reset() {
		isDragging = false;
		animate(x, 0, { type: "spring", bounce: 0, duration: 0.25 });
	}

	function handleDragStart() {
		isDragging = true;
	}

	function handleDragEnd() {
		isDragging = false;

		const trackWidth = trackRef?.offsetWidth ?? 0;
		const maxX = trackWidth - handleWidth;

		if (x.get() >= maxX) {
			onUnlock?.();
		} else {
			animate(x, 0, { type: "spring", bounce: 0, duration: 0.25 });
		}
	}

	function attachRef(element: HTMLDivElement) {
		ref = element;

		return () => {
			if (ref === element) ref = null;
		};
	}

	setSlideToUnlockContext({
		x,
		get trackRef() {
			return trackRef;
		},
		set trackRef(value) {
			trackRef = value;
		},
		get isDragging() {
			return isDragging;
		},
		get handleWidth() {
			return handleWidth;
		},
		textOpacity,
		onDragStart: handleDragStart,
		onDragEnd: handleDragEnd
	});
</script>

<div
	{@attach attachRef}
	data-slot="slide-to-unlock"
	class={cn(
		"bg-muted inset-ring-foreground/10 w-54 rounded-xl p-1 shadow-inner inset-ring-1",
		className
	)}
	{...restProps}
>
	{@render children()}
</div>
