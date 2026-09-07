<script lang="ts" generics="T extends WheelPickerValue">
	import "./wheel-picker.css";

	import { onDestroy } from "svelte";
	import { watch } from "runed";
	import { createTypeaheadSearch } from "./wheel-picker-typeahead";
	import { useWheelPickerGroup } from "./wheel-picker-context.svelte";
	import type {
		WheelPickerOption,
		WheelPickerProps,
		WheelPickerValue
	} from "./wheel-picker-types";
	import {
		MAX_VELOCITY,
		RESISTANCE,
		clamp,
		easeOutCubic,
		findNearestEnabledIndex,
		getOptionTextValue,
		normalizeIndex,
		validateVisibleCount
	} from "./wheel-picker-utils";

	type WheelItem = {
		option: WheelPickerOption<T>;
		index: number;
		angle: number;
	};

	type HighlightItem = {
		option: WheelPickerOption<T>;
		key: string | number;
	};

	type DragData = {
		startY: number;
		yList: [number, number][];
		touchScroll: number;
		isClick: boolean;
	};

	let {
		ref = $bindable(null),
		value = $bindable(),
		defaultValue,
		onValueChange,
		options: optionsProp,
		infinite: infiniteProp = false,
		visibleCount: visibleCountProp = 20,
		dragSensitivity: dragSensitivityProp = 3,
		scrollSensitivity: scrollSensitivityProp = 5,
		optionItemHeight: optionItemHeightProp = 30,
		classes,
		class: className,
		"aria-label": ariaLabel,
		...restProps
	}: WheelPickerProps<T> = $props();

	const group = useWheelPickerGroup();

	let pickerIndex = $state(-1);
	let isFocused = $state(false);
	let wheelItemsRef: HTMLUListElement | null = null;
	let highlightListRef: HTMLUListElement | null = null;

	let scroll = 0;
	let animationFrame: number | null = null;
	let isDragging = false;
	let lastWheelTime = 0;
	let scrollDirection: 1 | -1 = 1;
	let dragController: AbortController | null = null;
	let dragData: DragData = {
		startY: 0,
		yList: [],
		touchScroll: 0,
		isClick: true
	};

	const visibleCount = $derived(validateVisibleCount(visibleCountProp));
	const infinite = $derived(infiniteProp);
	const itemHeight = $derived(
		optionItemHeightProp > 0 ? optionItemHeightProp : 30
	);
	const halfItemHeight = $derived(itemHeight * 0.5);
	const itemAngle = $derived(360 / visibleCount);
	const radius = $derived(itemHeight / Math.tan((itemAngle * Math.PI) / 180));
	const containerHeight = $derived(
		Math.round(radius * 2 + itemHeight * 0.25)
	);
	const quarterCount = $derived(visibleCount >> 2);
	const baseDeceleration = $derived(Math.max(dragSensitivityProp, 0.01) * 10);
	const scrollSensitivity = $derived(Math.max(scrollSensitivityProp, 0.01));

	const firstEnabledValue = $derived(
		optionsProp.find((option) => !option.disabled)?.value ??
			optionsProp[0]?.value
	);

	const options: WheelPickerOption<T>[] = $derived.by(() => {
		if (!infinite || optionsProp.length === 0) return optionsProp;

		const repeatedOptions: WheelPickerOption<T>[] = [];
		const halfCount = Math.ceil(visibleCount / 2);

		while (repeatedOptions.length < halfCount) {
			repeatedOptions.push(...optionsProp);
		}

		return repeatedOptions;
	});

	const wheelItems: WheelItem[] = $derived.by(() => {
		const items = options.map((option, index) => ({
			option,
			index,
			angle: -itemAngle * index
		}));

		if (!infinite || options.length === 0) return items;

		for (let index = 0; index < quarterCount; index += 1) {
			const prependIndex = -index - 1;
			const appendIndex = index + options.length;

			items.unshift({
				option: options[options.length - index - 1],
				index: prependIndex,
				angle: itemAngle * (index + 1)
			});
			items.push({
				option: options[index],
				index: appendIndex,
				angle: -itemAngle * appendIndex
			});
		}

		return items;
	});

	const highlightItems: HighlightItem[] = $derived.by(() => {
		const items: HighlightItem[] = options.map((option, index) => ({
			option,
			key: index
		}));

		if (!infinite || options.length === 0) return items;

		items.unshift({ option: options[options.length - 1], key: "start" });
		items.push({ option: options[0], key: "end" });
		return items;
	});

	const wheelSegmentPositions: [number, number][] = $derived.by(() => {
		let positionAlongWheel = 0;
		const segmentRanges: [number, number][] = [];

		for (
			let index = quarterCount - 1;
			index >= -quarterCount + 1;
			index -= 1
		) {
			const angle = index * itemAngle;
			const segmentLength =
				itemHeight * Math.cos(angle * (Math.PI / 180));
			const start = positionAlongWheel;
			positionAlongWheel += segmentLength;
			segmentRanges.push([start, positionAlongWheel]);
		}

		return segmentRanges;
	});

	const enabledOptionsMap = $derived.by(() => {
		const enabled: WheelPickerOption<T>[] = [];
		const enabledToOriginal = new Map<number, number>();
		const originalToEnabled = new Map<number, number>();

		options.forEach((option, index) => {
			if (option.disabled) return;

			const enabledIndex = enabled.length;
			enabled.push(option);
			enabledToOriginal.set(enabledIndex, index);
			originalToEnabled.set(index, enabledIndex);
		});

		return { enabled, enabledToOriginal, originalToEnabled };
	});

	const tabIndex = $derived(
		group && pickerIndex !== -1
			? group.activeIndex === pickerIndex
				? 0
				: -1
			: 0
	);

	let needsInitialValue = value === undefined;

	function setSelectedValue(nextValue: T): void {
		if (value === nextValue) return;

		value = nextValue;
		onValueChange?.(nextValue);
	}

	function normalizeScroll(nextScroll: number): number {
		return normalizeIndex(nextScroll, options.length);
	}

	function scrollTo(nextScroll: number): number {
		if (options.length === 0) return 0;

		const normalizedScroll = infinite
			? normalizeScroll(nextScroll)
			: nextScroll;

		if (wheelItemsRef) {
			wheelItemsRef.style.transform = `translateZ(${-radius}px) rotateX(${itemAngle * normalizedScroll}deg)`;

			for (const element of wheelItemsRef.querySelectorAll<HTMLElement>(
				":scope > [data-rwp-option]"
			)) {
				const index = Number(element.dataset.index);
				const distance = Math.abs(index - normalizedScroll);
				element.style.visibility =
					distance > quarterCount ? "hidden" : "visible";
			}
		}

		if (highlightListRef) {
			highlightListRef.style.transform = `translateY(${-normalizedScroll * itemHeight}px)`;
		}

		return normalizedScroll;
	}

	function cancelAnimation(): void {
		if (animationFrame === null) return;

		cancelAnimationFrame(animationFrame);
		animationFrame = null;
	}

	function animateScroll(
		startScroll: number,
		endScroll: number,
		duration: number,
		onComplete?: () => void
	): void {
		cancelAnimation();

		if (startScroll === endScroll || duration <= 0) {
			scroll = scrollTo(endScroll);
			onComplete?.();
			return;
		}

		const startTime = performance.now();
		const totalDistance = endScroll - startScroll;

		function tick(currentTime: number): void {
			const elapsed = (currentTime - startTime) / 1000;

			if (elapsed < duration) {
				const progress = easeOutCubic(elapsed / duration);
				scroll = scrollTo(startScroll + progress * totalDistance);
				animationFrame = requestAnimationFrame(tick);
				return;
			}

			animationFrame = null;
			scroll = scrollTo(endScroll);
			onComplete?.();
		}

		animationFrame = requestAnimationFrame(tick);
	}

	function selectByScroll(
		nextScroll: number,
		direction: 1 | -1 = scrollDirection
	): void {
		if (options.length === 0) return;

		const normalized = Math.round(normalizeScroll(nextScroll));
		const boundedScroll = infinite
			? normalizeIndex(normalized, options.length)
			: clamp(normalized, 0, options.length - 1);

		if (!infinite && boundedScroll !== Math.round(nextScroll)) return;

		if (options[boundedScroll]?.disabled) {
			const nearestEnabled = findNearestEnabledIndex(
				boundedScroll,
				direction,
				options,
				infinite
			);
			const step = nearestEnabled - scroll;

			if (step !== 0) {
				scrollByStep(step);
				return;
			}
		}

		scroll = scrollTo(boundedScroll);
		const selectedOption = options[scroll];

		if (selectedOption && !selectedOption.disabled) {
			setSelectedValue(selectedOption.value);
		}
	}

	function selectByValue(nextValue: T): void {
		if (options.length === 0) return;

		let index = options.findIndex((option) => option.value === nextValue);

		if (index === -1) {
			if (import.meta.env.DEV) {
				console.warn(
					"WheelPicker: value is not present in options",
					nextValue
				);
			}
			return;
		}

		if (options[index]?.disabled) {
			index = findNearestEnabledIndex(index, 1, options, infinite);
		}

		cancelAnimation();
		selectByScroll(index);
	}

	function scrollByStep(step: number): void {
		if (options.length === 0) return;

		const startScroll = scroll;
		const endScroll = infinite
			? Math.round(startScroll + step)
			: clamp(Math.round(startScroll + step), 0, options.length - 1);
		const distance = Math.abs(endScroll - startScroll);

		if (distance === 0) return;

		const direction: 1 | -1 = step > 0 ? 1 : -1;
		scrollDirection = direction;

		animateScroll(
			startScroll,
			endScroll,
			Math.sqrt(distance / scrollSensitivity),
			() => selectByScroll(scroll, direction)
		);
	}

	function handleWheelItemClick(clientY: number): void {
		if (!ref) return;

		const clickOffsetY = clientY - ref.getBoundingClientRect().top;
		const clickedSegmentIndex = wheelSegmentPositions.findIndex(
			([start, end]) => clickOffsetY >= start && clickOffsetY <= end
		);

		if (clickedSegmentIndex === -1) return;

		const stepsToScroll = (quarterCount - clickedSegmentIndex - 1) * -1;
		const targetIndex = scroll + stepsToScroll;
		const normalizedIndex = infinite
			? normalizeScroll(targetIndex)
			: clamp(targetIndex, 0, options.length - 1);

		if (options[Math.round(normalizedIndex)]?.disabled) return;
		scrollByStep(stepsToScroll);
	}

	function getEventY(event: MouseEvent | TouchEvent): number {
		return event instanceof MouseEvent
			? event.clientY
			: (event.touches[0]?.clientY ??
					event.changedTouches[0]?.clientY ??
					0);
	}

	function updateScrollDuringDrag(event: MouseEvent | TouchEvent): void {
		const currentY = getEventY(event);

		if (dragData.isClick && Math.abs(currentY - dragData.startY) > 5) {
			dragData.isClick = false;
		}

		dragData.yList.push([currentY, Date.now()]);
		if (dragData.yList.length > 5) dragData.yList.shift();

		const dragDelta = (dragData.startY - currentY) / itemHeight;
		let nextScroll = scroll + dragDelta;

		if (infinite) {
			nextScroll = normalizeScroll(nextScroll);
		} else {
			const maxIndex = Math.max(options.length - 1, 0);

			if (nextScroll < 0) {
				nextScroll *= RESISTANCE;
			} else if (nextScroll > maxIndex) {
				nextScroll = maxIndex + (nextScroll - maxIndex) * RESISTANCE;
			}
		}

		dragData.touchScroll = scrollTo(nextScroll);
	}

	function handleDragMoveEvent(event: MouseEvent | TouchEvent): void {
		if (!isDragging) return;

		if (event.cancelable) event.preventDefault();
		if (options.length > 0) updateScrollDuringDrag(event);
	}

	function initiateDragGesture(event: MouseEvent | TouchEvent): void {
		if (!ref || options.length === 0) return;

		isDragging = true;
		ref.focus({ preventScroll: true });

		dragController?.abort();
		dragController = new AbortController();
		const listenerOptions = {
			signal: dragController.signal,
			passive: false
		};

		ref.addEventListener("touchmove", handleTouchMove, listenerOptions);
		document.addEventListener(
			"mousemove",
			handleMouseMove,
			listenerOptions
		);

		const startY = getEventY(event);
		dragData = {
			startY,
			yList: [[startY, Date.now()]],
			touchScroll: scroll,
			isClick: true
		};

		cancelAnimation();
	}

	function handleDragStartEvent(event: MouseEvent | TouchEvent): void {
		if (isDragging || !ref?.contains(event.target as Node)) return;

		if (event.cancelable) event.preventDefault();
		initiateDragGesture(event);
	}

	function decelerateAndAnimateScroll(initialVelocity: number): void {
		const currentScroll = scroll;
		let targetScroll = currentScroll;
		let deceleration =
			initialVelocity > 0 ? -baseDeceleration : baseDeceleration;
		let duration = 0;
		const direction: 1 | -1 = initialVelocity > 0 ? 1 : -1;
		scrollDirection = direction;

		if (infinite) {
			duration = Math.abs(initialVelocity / deceleration);
			const scrollDistance =
				initialVelocity * duration +
				0.5 * deceleration * duration * duration;
			targetScroll = Math.round(currentScroll + scrollDistance);
		} else if (currentScroll < 0 || currentScroll > options.length - 1) {
			const target = clamp(currentScroll, 0, options.length - 1);
			const scrollDistance = currentScroll - target;
			deceleration = 10;
			duration = Math.sqrt(Math.abs(scrollDistance / deceleration));
			initialVelocity = deceleration * duration;
			initialVelocity =
				currentScroll > 0 ? -initialVelocity : initialVelocity;
			targetScroll = target;
		} else {
			duration = Math.abs(initialVelocity / deceleration);
			const scrollDistance =
				initialVelocity * duration +
				0.5 * deceleration * duration * duration;
			targetScroll = clamp(
				Math.round(currentScroll + scrollDistance),
				0,
				options.length - 1
			);

			const adjustedDistance = targetScroll - currentScroll;
			duration = Math.sqrt(Math.abs(adjustedDistance / deceleration));
		}

		animateScroll(currentScroll, targetScroll, duration, () => {
			selectByScroll(scroll, direction);
		});
	}

	function finalizeDragAndStartInertiaScroll(): void {
		if (!isDragging) return;

		dragController?.abort();
		dragController = null;

		try {
			if (dragData.isClick) {
				handleWheelItemClick(dragData.startY);
				return;
			}

			let velocity = 0;
			const points = dragData.yList;

			if (points.length > 1) {
				const [startY, startTime] = points[points.length - 2];
				const [endY, endTime] = points[points.length - 1];
				const timeDifference = endTime - startTime;

				if (timeDifference > 0) {
					const velocityPerSecond =
						(((startY - endY) / itemHeight) * 1000) /
						timeDifference;
					const direction = velocityPerSecond > 0 ? 1 : -1;
					velocity =
						Math.min(Math.abs(velocityPerSecond), MAX_VELOCITY) *
						direction;
				}
			}

			scroll = dragData.touchScroll;
			decelerateAndAnimateScroll(velocity);
		} finally {
			isDragging = false;
		}
	}

	function handleDragEndEvent(event: MouseEvent | TouchEvent): void {
		if (!isDragging) return;

		if (event.cancelable) event.preventDefault();
		finalizeDragAndStartInertiaScroll();
	}

	function scrollByWheel(event: WheelEvent): void {
		event.preventDefault();

		const now = Date.now();
		if (now - lastWheelTime < 100) return;

		const direction = Math.sign(event.deltaY) as 1 | -1;
		if (!direction) return;

		lastWheelTime = now;
		scrollDirection = direction;
		scrollByStep(direction);
	}

	function handleWheelEvent(event: WheelEvent): void {
		if (options.length === 0 || !ref?.contains(event.target as Node)) {
			return;
		}

		if (event.cancelable) scrollByWheel(event);
	}

	function navigateToPicker(direction: "prev" | "next"): void {
		if (!group || pickerIndex === -1) return;

		const indices = group.getPickerIndices();
		const currentPosition = indices.indexOf(pickerIndex);
		if (currentPosition === -1 || indices.length < 2) return;

		const offset = direction === "prev" ? -1 : 1;
		const targetPosition = normalizeIndex(
			currentPosition + offset,
			indices.length
		);
		const targetIndex = indices[targetPosition];
		const targetRef = group.getPickerRef(targetIndex);

		if (!targetRef) return;

		if (ref) ref.tabIndex = -1;
		targetRef.tabIndex = 0;
		group.setActiveIndex(targetIndex);
		targetRef.focus();
	}

	function getNavigationStep(direction: 1 | -1): number {
		const currentIndex = Math.round(scroll);

		for (let distance = 1; distance <= options.length; distance += 1) {
			const candidate = currentIndex + direction * distance;

			if (!infinite && (candidate < 0 || candidate >= options.length)) {
				return 0;
			}

			const normalizedCandidate = infinite
				? normalizeIndex(candidate, options.length)
				: candidate;

			if (!options[normalizedCandidate]?.disabled) {
				return direction * distance;
			}
		}

		return 0;
	}

	function handleKeyDown(event: KeyboardEvent): void {
		if (options.length === 0) return;

		if (event.key === "ArrowUp" || event.key === "ArrowDown") {
			event.preventDefault();
			const direction: 1 | -1 = event.key === "ArrowDown" ? 1 : -1;
			const step = getNavigationStep(direction);
			if (step !== 0) scrollByStep(step);
			return;
		}

		if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
			event.preventDefault();
			navigateToPicker(event.key === "ArrowLeft" ? "prev" : "next");
			return;
		}

		if (!infinite && (event.key === "Home" || event.key === "End")) {
			event.preventDefault();

			const targetIndex =
				event.key === "Home"
					? options.findIndex((option) => !option.disabled)
					: options.findLastIndex((option) => !option.disabled);

			if (targetIndex !== -1) {
				scrollByStep(targetIndex - Math.round(scroll));
			}
			return;
		}

		if (
			event.key.length === 1 &&
			!event.ctrlKey &&
			!event.metaKey &&
			!event.altKey
		) {
			event.preventDefault();
			typeahead.search(event.key);
		}
	}

	function handleFocus(): void {
		isFocused = true;
		if (group && pickerIndex !== -1) group.setActiveIndex(pickerIndex);
	}

	function handleBlur(): void {
		isFocused = false;
		typeahead.reset();
	}

	function handleTouchMove(event: TouchEvent): void {
		handleDragMoveEvent(event);
	}

	function handleMouseMove(event: MouseEvent): void {
		handleDragMoveEvent(event);
	}

	function handleTouchStart(event: TouchEvent): void {
		handleDragStartEvent(event);
	}

	function handleMouseDown(event: MouseEvent): void {
		handleDragStartEvent(event);
	}

	function handleTouchEnd(event: TouchEvent): void {
		handleDragEndEvent(event);
	}

	function handleMouseUp(event: MouseEvent): void {
		handleDragEndEvent(event);
	}

	const typeahead = createTypeaheadSearch({
		getOptions: () => enabledOptionsMap.enabled,
		getTextValue: getOptionTextValue,
		getCurrentIndex: () => {
			const currentIndex = Math.round(scroll);
			return enabledOptionsMap.originalToEnabled.get(currentIndex) ?? 0;
		},
		onMatch: (enabledIndex) => {
			const originalIndex =
				enabledOptionsMap.enabledToOriginal.get(enabledIndex);

			if (originalIndex !== undefined) {
				scrollByStep(originalIndex - Math.round(scroll));
			}
		}
	});

	watch(
		[() => defaultValue, () => firstEnabledValue, () => value],
		([nextDefaultValue, nextFirstEnabledValue, selectedValue]) => {
			const fallbackValue = nextDefaultValue ?? nextFirstEnabledValue;

			if (
				needsInitialValue &&
				selectedValue === undefined &&
				fallbackValue !== undefined
			) {
				value = fallbackValue;
				needsInitialValue = false;
			}
		}
	);

	watch(
		() => ref,
		(node) => {
			if (!node || !group) return;

			const index = group.register(node);
			pickerIndex = index;

			return () => {
				group.unregister(index, node);
				if (pickerIndex === index) pickerIndex = -1;
			};
		}
	);

	watch(
		[
			() => ref,
			() => value,
			() => options.map((option) => [option.value, option.disabled]),
			() => itemAngle,
			() => radius,
			() => itemHeight,
			() => quarterCount
		],
		([node, selectedValue]) => {
			if (!node || selectedValue === undefined || options.length === 0) {
				return;
			}

			selectByValue(selectedValue);
		}
	);

	watch(
		() => ref,
		(node) => {
			if (!node) return;

			const listenerOptions = { passive: false };
			node.addEventListener(
				"touchstart",
				handleTouchStart,
				listenerOptions
			);
			node.addEventListener("touchend", handleTouchEnd, listenerOptions);
			node.addEventListener(
				"touchcancel",
				handleTouchEnd,
				listenerOptions
			);
			node.addEventListener(
				"mousedown",
				handleMouseDown,
				listenerOptions
			);
			node.addEventListener("wheel", handleWheelEvent, listenerOptions);
			document.addEventListener(
				"mouseup",
				handleMouseUp,
				listenerOptions
			);

			return () => {
				node.removeEventListener("touchstart", handleTouchStart);
				node.removeEventListener("touchend", handleTouchEnd);
				node.removeEventListener("touchcancel", handleTouchEnd);
				node.removeEventListener("mousedown", handleMouseDown);
				node.removeEventListener("wheel", handleWheelEvent);
				document.removeEventListener("mouseup", handleMouseUp);
			};
		}
	);

	onDestroy(() => {
		cancelAnimation();
		dragController?.abort();
		typeahead.reset();
	});
</script>

{#snippet renderLabel(option: WheelPickerOption<T>)}
	{#if typeof option.label === "function"}
		{@render option.label()}
	{:else}
		{option.label}
	{/if}
{/snippet}

<div
	bind:this={ref}
	{...restProps}
	class={className}
	data-rwp
	data-slot="wheel-picker"
	role="listbox"
	aria-label={ariaLabel ?? "Wheel picker"}
	aria-orientation="vertical"
	tabindex={tabIndex}
	onkeydown={handleKeyDown}
	onfocus={handleFocus}
	onblur={handleBlur}
	style:height={`${containerHeight}px`}
>
	<ul bind:this={wheelItemsRef} data-rwp-options>
		{#each wheelItems as item (item.index)}
			<li
				class={classes?.optionItem}
				data-slot="option-item"
				data-rwp-option
				data-index={item.index}
				data-disabled={item.option.disabled || undefined}
				role="option"
				aria-disabled={item.option.disabled || undefined}
				aria-selected={item.option.value === value}
				style:top={`${-halfItemHeight}px`}
				style:height={`${itemHeight}px`}
				style:line-height={`${itemHeight}px`}
				style:transform={`rotateX(${item.angle}deg) translateZ(${radius}px)`}
				style:visibility="hidden"
			>
				{@render renderLabel(item.option)}
			</li>
		{/each}
	</ul>

	<div
		class={classes?.highlightWrapper}
		data-rwp-highlight-wrapper
		data-rwp-focused={isFocused || undefined}
		data-slot="highlight-wrapper"
		aria-hidden="true"
		style:height={`${itemHeight}px`}
		style:line-height={`${itemHeight}px`}
	>
		<ul
			bind:this={highlightListRef}
			data-rwp-highlight-list
			style:top={infinite ? `${-itemHeight}px` : undefined}
		>
			{#each highlightItems as item (item.key)}
				<li
					class={classes?.highlightItem}
					data-slot="highlight-item"
					data-rwp-highlight-item
					data-disabled={item.option.disabled || undefined}
					style:height={`${itemHeight}px`}
				>
					{@render renderLabel(item.option)}
				</li>
			{/each}
		</ul>
	</div>
</div>
