<script lang="ts" module>
	import type { HTMLAttributes } from "svelte/elements";

	export type ElasticSliderProps = Omit<
		HTMLAttributes<HTMLDivElement>,
		"children"
	> & {
		/** Label shown inside the track. */
		label: string;
		/** Controlled value. Use together with `onValueChange`. */
		value?: number;
		/** Initial value for uncontrolled mode. Falls back to `min`. */
		defaultValue?: number;
		/** Called with the new value on drag, click, or key press. */
		onValueChange?: (value: number) => void;
		/** @default 0 */
		min?: number;
		/** @default 1 */
		max?: number;
		/** @default 0.01 */
		step?: number;
		/** Formats the displayed value. */
		formatValue?: (value: number) => string;
		/** Bindable reference to the outer wrapper. */
		ref?: HTMLDivElement | null;
	};
</script>

<script lang="ts">
	import { cn } from "$lib/utils";
	import { untrack } from "svelte";
	import {
		animate,
		motion,
		useMotionValue,
		useReducedMotion,
		useTransform
	} from "motion-sv";
	import type { AnimationPlaybackControls, Transition } from "motion-sv";
	import { watch } from "runed";
	import { createControllableState } from "./elastic-slider-state.svelte";
	import {
		CLICK_THRESHOLD,
		HANDLE_BUFFER,
		LABEL_OFFSET,
		VALUE_OFFSET,
		clamp,
		decimalsForStep,
		getRubberStretch,
		percentFromValue,
		roundValue,
		snapToDecile
	} from "./elastic-slider.utils";

	let {
		ref = $bindable(null),
		label,
		value: valueProp,
		defaultValue,
		onValueChange,
		min = 0,
		max = 1,
		step = 0.01,
		formatValue,
		class: className,
		"aria-label": ariaLabel,
		...restProps
	}: ElasticSliderProps = $props();

	const valueState = createControllableState({
		value: () => valueProp,
		defaultValue: () => defaultValue ?? min,
		onChange: () => onValueChange,
		caller: "ElasticSlider"
	});

	const shouldReduceMotion = useReducedMotion();

	let trackRef = $state<HTMLDivElement | null>(null);
	let labelRef = $state<HTMLSpanElement | null>(null);
	let valueRef = $state<HTMLSpanElement | null>(null);

	let isInteracting = $state(false);
	let isDragging = $state(false);
	let isHovered = $state(false);
	let keyboardFocusRing = $state(false);
	let dodge = $state({ left: 38, right: 72 });

	let pointerDownPosition: { x: number; y: number } | null = null;
	let pendingPointerFocus = false;
	let isClick = true;
	let wrapperRect: DOMRect | null = null;
	let wrapperScale = 1;
	let fillAnimation: AnimationPlaybackControls | null = null;

	const value = $derived(valueState.get());
	const percentage = $derived(percentFromValue(value, min, max));
	const isActive = $derived(isInteracting || isHovered);
	const displayValue = $derived(
		formatValue ? formatValue(value) : value.toFixed(decimalsForStep(step))
	);
	const valueDodgesText = $derived(
		percentage < dodge.left || percentage > dodge.right
	);
	const handleOpacity = $derived(
		!isActive ? 0 : valueDodgesText ? 0.1 : isDragging ? 0.8 : 0.5
	);
	const discreteSteps = $derived((max - min) / step);
	const hashMarkCount = $derived(discreteSteps <= 10 ? discreteSteps - 1 : 9);

	const fillPercent = useMotionValue(untrack(() => percentage));
	const fillWidth = useTransform(fillPercent, (percent) => `${percent}%`);
	const handleLeft = useTransform(
		fillPercent,
		(percent) => `max(4px, calc(${percent}% - 8px))`
	);
	const rubberStretch = useMotionValue(0);
	const rubberWidth = useTransform(
		rubberStretch,
		(stretch) => `calc(100% + ${Math.abs(stretch)}px)`
	);
	const rubberX = useTransform(rubberStretch, (stretch) =>
		stretch < 0 ? stretch : 0
	);

	const handleTransition = $derived<Transition>(
		shouldReduceMotion.current
			? { duration: 0 }
			: {
					scaleX: {
						type: "spring",
						visualDuration: 0.25,
						bounce: 0.15
					},
					scaleY: {
						type: "spring",
						visualDuration: 0.2,
						bounce: 0.1
					},
					opacity: { duration: 0.15 }
				}
	);

	watch(
		[() => percentage, () => isInteracting],
		([nextPercentage, interacting]) => {
			if (!interacting && !fillAnimation) {
				fillPercent.jump(nextPercentage);
			}
		}
	);

	function positionToValue(clientX: number): number {
		if (!wrapperRect) return min;

		const sceneX = (clientX - wrapperRect.left) / wrapperScale;
		const nativeWidth = ref?.offsetWidth ?? wrapperRect.width;
		const percent = clamp(sceneX / nativeWidth, 0, 1);

		return clamp(min + percent * (max - min), min, max);
	}

	function animateFillTo(targetPercentage: number): void {
		fillAnimation?.stop();

		if (shouldReduceMotion.current) {
			fillPercent.jump(targetPercentage);
			fillAnimation = null;
			return;
		}

		fillAnimation = animate(fillPercent, targetPercentage, {
			type: "spring",
			stiffness: 300,
			damping: 25,
			mass: 0.8,
			onComplete: () => {
				fillAnimation = null;
			}
		});
	}

	function releaseRubberBand(): void {
		if (shouldReduceMotion.current || rubberStretch.get() === 0) return;

		animate(rubberStretch, 0, {
			type: "spring",
			visualDuration: 0.35,
			bounce: 0.15
		});
	}

	function resetPointerSession(): void {
		isInteracting = false;
		isDragging = false;
		pointerDownPosition = null;
	}

	function handlePointerDown(event: PointerEvent): void {
		event.preventDefault();
		(event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);

		pointerDownPosition = { x: event.clientX, y: event.clientY };
		isClick = true;
		isInteracting = true;
		pendingPointerFocus = true;
		keyboardFocusRing = false;

		trackRef?.focus({ preventScroll: true });
		requestAnimationFrame(() => {
			pendingPointerFocus = false;
		});

		if (ref) {
			wrapperRect = ref.getBoundingClientRect();
			wrapperScale = wrapperRect.width / ref.offsetWidth;
		}
	}

	function handlePointerMove(event: PointerEvent): void {
		if (!isInteracting || !pointerDownPosition) return;

		const deltaX = event.clientX - pointerDownPosition.x;
		const deltaY = event.clientY - pointerDownPosition.y;

		if (isClick && Math.hypot(deltaX, deltaY) > CLICK_THRESHOLD) {
			isClick = false;
			isDragging = true;
		}

		if (isClick) return;

		if (wrapperRect && !shouldReduceMotion.current) {
			if (event.clientX < wrapperRect.left) {
				rubberStretch.jump(
					getRubberStretch(event.clientX, wrapperRect, -1)
				);
			} else if (event.clientX > wrapperRect.right) {
				rubberStretch.jump(
					getRubberStretch(event.clientX, wrapperRect, 1)
				);
			} else {
				rubberStretch.jump(0);
			}
		}

		const nextValue = positionToValue(event.clientX);

		fillAnimation?.stop();
		fillAnimation = null;
		fillPercent.jump(percentFromValue(nextValue, min, max));
		valueState.set(roundValue(nextValue, step));
	}

	function handlePointerUp(event: PointerEvent): void {
		if (!isInteracting) return;

		if (isClick) {
			const rawValue = positionToValue(event.clientX);
			const snapped =
				discreteSteps <= 10
					? clamp(
							min + Math.round((rawValue - min) / step) * step,
							min,
							max
						)
					: snapToDecile(rawValue, min, max);

			animateFillTo(percentFromValue(snapped, min, max));
			valueState.set(roundValue(snapped, step));
		}

		releaseRubberBand();
		resetPointerSession();
	}

	function handlePointerCancel(): void {
		if (!isInteracting) return;

		releaseRubberBand();
		animateFillTo(percentage);
		resetPointerSession();
	}

	function handleKeyDown(event: KeyboardEvent): void {
		const arrowStep = event.shiftKey ? step * 10 : step;
		let nextValue: number | null = null;

		switch (event.key) {
			case "ArrowRight":
			case "ArrowUp":
				nextValue = value + arrowStep;
				break;
			case "ArrowLeft":
			case "ArrowDown":
				nextValue = value - arrowStep;
				break;
			case "Home":
				nextValue = min;
				break;
			case "End":
				nextValue = max;
				break;
			default:
				return;
		}

		event.preventDefault();
		keyboardFocusRing = true;

		const snapped = roundValue(clamp(nextValue, min, max), step);
		animateFillTo(percentFromValue(snapped, min, max));
		valueState.set(snapped);
	}

	function handleTrackFocus(): void {
		if (!pendingPointerFocus) keyboardFocusRing = true;
	}

	function hashMarkPercentage(index: number): number {
		return discreteSteps <= 10
			? (((index + 1) * step) / (max - min)) * 100
			: (index + 1) * 10;
	}

	function attachRoot(node: HTMLDivElement) {
		ref = node;

		return () => {
			if (ref === node) ref = null;
		};
	}

	function attachLabel(node: HTMLSpanElement) {
		labelRef = node;

		return () => {
			if (labelRef === node) labelRef = null;
		};
	}

	function attachValue(node: HTMLSpanElement) {
		valueRef = node;

		return () => {
			if (valueRef === node) valueRef = null;
		};
	}

	function observeDodge(node: HTMLDivElement) {
		let observer: ResizeObserver | undefined;

		function measure(): void {
			const trackWidth = node.offsetWidth;
			if (trackWidth <= 0) return;

			const left = labelRef
				? ((LABEL_OFFSET + labelRef.offsetWidth + HANDLE_BUFFER) /
						trackWidth) *
					100
				: 38;
			const right = valueRef
				? ((trackWidth -
						VALUE_OFFSET -
						valueRef.offsetWidth -
						HANDLE_BUFFER) /
						trackWidth) *
					100
				: 72;

			if (dodge.left !== left || dodge.right !== right) {
				dodge = { left, right };
			}
		}

		const frame = requestAnimationFrame(() => {
			measure();
			observer = new ResizeObserver(measure);
			observer.observe(node);
			if (labelRef) observer.observe(labelRef);
			if (valueRef) observer.observe(valueRef);
		});

		return () => {
			cancelAnimationFrame(frame);
			observer?.disconnect();
		};
	}
</script>

<div
	{@attach attachRoot}
	{@attach observeDodge}
	{...restProps}
	data-slot="elastic-slider"
	class={cn(
		"[--elastic-slider-height:--spacing(9)] [--elastic-slider-radius:var(--radius-lg)]",
		"[--elastic-slider-bg:var(--muted)]",
		"[--elastic-slider-fill:var(--muted-foreground)]/10",
		"[--elastic-slider-fill-active:var(--muted-foreground)]/20",
		"[--elastic-slider-hash:var(--muted-foreground)]/30",
		"[--elastic-slider-handle:var(--foreground)]",
		"[--elastic-slider-label:var(--muted-foreground)]",
		"[--elastic-slider-focus:var(--foreground)]",
		"relative h-(--elastic-slider-height)",
		className
	)}
>
	<motion.div
		bind:ref={trackRef}
		role="slider"
		tabindex={0}
		data-slot="elastic-slider-track"
		data-active={isActive}
		data-focus-visible={keyboardFocusRing}
		aria-label={ariaLabel ?? label}
		aria-orientation="horizontal"
		aria-valuemin={min}
		aria-valuemax={max}
		aria-valuenow={value}
		aria-valuetext={displayValue}
		class={cn(
			"group/elastic-slider absolute inset-0 cursor-pointer touch-none overflow-hidden rounded-(--elastic-slider-radius) bg-(--elastic-slider-bg) outline-none select-none",
			"data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-ring/50 data-[focus-visible=true]:ring-offset-1 data-[focus-visible=true]:ring-offset-background"
		)}
		style={{ width: rubberWidth, x: rubberX }}
		onpointerdown={handlePointerDown}
		onpointermove={handlePointerMove}
		onpointerup={handlePointerUp}
		onpointercancel={handlePointerCancel}
		onfocus={handleTrackFocus}
		onblur={() => (keyboardFocusRing = false)}
		onkeydown={handleKeyDown}
		onmouseenter={() => (isHovered = true)}
		onmouseleave={() => (isHovered = false)}
	>
		<div
			data-slot="elastic-slider-hash-marks"
			aria-hidden="true"
			class="pointer-events-none absolute inset-0"
		>
			{#each Array.from({ length: hashMarkCount }) as _, index (index)}
				<div
					class={cn(
						"absolute top-1/2 h-2 w-px -translate-x-1/2 -translate-y-1/2 rounded-full transition-colors duration-200",
						"bg-transparent group-data-[active=true]/elastic-slider:bg-(--elastic-slider-hash)"
					)}
					style:left={`${hashMarkPercentage(index)}%`}
				></div>
			{/each}
		</div>

		<motion.div
			data-slot="elastic-slider-fill"
			aria-hidden="true"
			class={cn(
				"pointer-events-none absolute inset-y-0 left-0 transition-colors",
				"bg-(--elastic-slider-fill) group-data-[active=true]/elastic-slider:bg-(--elastic-slider-fill-active)"
			)}
			style={{ width: fillWidth }}
		></motion.div>

		<motion.div
			data-slot="elastic-slider-handle"
			aria-hidden="true"
			class="pointer-events-none absolute top-1/2 h-5 w-1 rounded-full bg-(--elastic-slider-handle)"
			style={{ left: handleLeft, y: "-50%" }}
			animate={{
				opacity: handleOpacity,
				scaleX: isActive ? 1 : 0.25,
				scaleY: isActive && valueDodgesText ? 0.75 : 1
			}}
			transition={handleTransition}
		></motion.div>

		<span
			{@attach attachLabel}
			data-slot="elastic-slider-label"
			aria-hidden="true"
			class="pointer-events-none absolute top-1/2 left-3 inline-flex -translate-y-1/2 items-center text-sm/none font-medium text-(--elastic-slider-label) transition-colors"
		>
			{label}
		</span>

		<span
			{@attach attachValue}
			data-slot="elastic-slider-value"
			aria-hidden="true"
			class={cn(
				"pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 font-mono text-sm/none font-medium transition-colors",
				"text-(--elastic-slider-label) group-data-[active=true]/elastic-slider:text-(--elastic-slider-focus)"
			)}
		>
			{displayValue}
		</span>
	</motion.div>
</div>
