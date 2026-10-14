import {
	animate,
	useInView,
	useMotionValue,
	useMotionValueEvent,
	useReducedMotion
} from "motion-sv";
import type { AnimationPlaybackControls, UseInViewOptions } from "motion-sv";
import { watch } from "runed";
import { SvelteMap } from "svelte/reactivity";
import type {
	AppleCarouselContextValue,
	AppleCarouselPlayback
} from "./apple-carousel-types";
import {
	SCROLL_BASE_DURATION,
	SCROLL_EXTRA_CARD_DURATION,
	SCROLL_MAX_DURATION,
	SETTLE_DELAY,
	getNearestSlide,
	getRealSlide,
	getSnapLeft
} from "./apple-carousel-utils";

type AppleCarouselStateOptions = {
	id: string;
	duration: () => number;
};

export function createAppleCarouselState(
	options: AppleCarouselStateOptions
): AppleCarouselContextValue {
	let index = $state(0);
	let playback = $state<AppleCarouselPlayback>("auto");
	let viewportRef = $state<HTMLDivElement | null>(null);
	let progressFillRef = $state<HTMLSpanElement | null>(null);
	let progressAnimation = $state.raw<Animation | null>(null);

	let ignoreScrollUntil = 0;
	let scrollAnimation: AnimationPlaybackControls | null = null;
	const progressFills = new SvelteMap<number, HTMLSpanElement>();
	const scrollLeft = useMotionValue(0);
	const reducedMotion = useReducedMotion();
	const inView = useInView(
		() => viewportRef as HTMLDivElement,
		() => ({ amount: 0.25 }) as UseInViewOptions
	);

	const prefersReducedMotion = $derived(reducedMotion.current);
	const isPlaying = $derived(
		inView.current &&
			(playback === "playing" ||
				(playback === "auto" && !prefersReducedMotion))
	);

	function play(): void {
		playback = "playing";
	}

	function pause(): void {
		playback = "paused";
	}

	function isOwnScroll(): boolean {
		return (
			scrollAnimation !== null || performance.now() < ignoreScrollUntil
		);
	}

	function writeScrollLeft(value: number): void {
		if (!viewportRef) return;
		ignoreScrollUntil = performance.now() + SETTLE_DELAY;
		viewportRef.scrollLeft = value;
	}

	useMotionValueEvent(scrollLeft, "change", writeScrollLeft);

	function setScrollAnimation(
		controls: AnimationPlaybackControls | null
	): void {
		scrollAnimation = controls;
		viewportRef?.toggleAttribute("data-animating", controls !== null);
	}

	function stopScrollAnimation(): void {
		scrollAnimation?.stop();
		setScrollAnimation(null);
	}

	function syncFromScroll(): void {
		if (scrollAnimation || !viewportRef) return;
		const slide = getNearestSlide(viewportRef);
		if (slide) index = Number(slide.dataset.index);
	}

	function wrapFromClone(): void {
		if (!viewportRef) return;
		const slide = getNearestSlide(viewportRef);
		if (!slide?.hasAttribute("data-clone")) return;

		const realSlide = getRealSlide(
			viewportRef,
			Number(slide.dataset.index)
		);
		if (realSlide) writeScrollLeft(getSnapLeft(viewportRef, realSlide));
	}

	function scrollToSlide(slide: HTMLElement): void {
		if (!viewportRef) return;

		index = Number(slide.dataset.index);
		const to = getSnapLeft(viewportRef, slide);
		const distance = Math.abs(to - viewportRef.scrollLeft);

		if (prefersReducedMotion || distance < 1) {
			stopScrollAnimation();
			writeScrollLeft(to);
			wrapFromClone();
			return;
		}

		if (!scrollAnimation) scrollLeft.jump(viewportRef.scrollLeft);

		const cardsToTravel = Math.max(distance / slide.offsetWidth, 1);
		const controls = animate(scrollLeft, to, {
			type: "spring",
			bounce: 0,
			visualDuration: Math.min(
				SCROLL_BASE_DURATION +
					(cardsToTravel - 1) * SCROLL_EXTRA_CARD_DURATION,
				SCROLL_MAX_DURATION
			),
			onComplete: () => {
				if (scrollAnimation !== controls) return;
				setScrollAnimation(null);
				wrapFromClone();
			}
		});
		setScrollAnimation(controls);
	}

	function goTo(next: number): void {
		if (!viewportRef) return;
		const slide = getRealSlide(viewportRef, next);
		if (slide) scrollToSlide(slide);
	}

	function goNext(): void {
		if (!viewportRef) return;
		const next = getNearestSlide(viewportRef)?.nextElementSibling;
		if (next instanceof HTMLElement) scrollToSlide(next);
	}

	function alignToCurrent(): void {
		if (!viewportRef) return;
		const slide = getRealSlide(viewportRef, index);
		if (slide) viewportRef.scrollLeft = getSnapLeft(viewportRef, slide);
	}

	function attachViewport(node: HTMLDivElement): VoidFunction {
		viewportRef = node;
		let frame: number | null = null;
		let settleTimer: ReturnType<typeof setTimeout> | undefined;

		const handleScroll = () => {
			if (frame === null) {
				frame = requestAnimationFrame(() => {
					frame = null;
					if (isPlaying && !isOwnScroll()) pause();
					syncFromScroll();
				});
			}

			clearTimeout(settleTimer);
			settleTimer = setTimeout(() => {
				if (!isOwnScroll()) wrapFromClone();
			}, SETTLE_DELAY);
		};

		const handleSettled = () => {
			if (!isOwnScroll()) wrapFromClone();
		};
		const handlePointerDown = () => {
			stopScrollAnimation();
			pause();
		};
		const handleWheel = (event: WheelEvent) => {
			if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
				handlePointerDown();
			}
		};

		node.addEventListener("scroll", handleScroll, { passive: true });
		node.addEventListener("scrollend", handleSettled);
		node.addEventListener("pointerdown", handlePointerDown);
		node.addEventListener("wheel", handleWheel, { passive: true });

		return () => {
			node.removeEventListener("scroll", handleScroll);
			node.removeEventListener("scrollend", handleSettled);
			node.removeEventListener("pointerdown", handlePointerDown);
			node.removeEventListener("wheel", handleWheel);
			if (frame !== null) cancelAnimationFrame(frame);
			clearTimeout(settleTimer);
			stopScrollAnimation();
			if (viewportRef === node) viewportRef = null;
		};
	}

	function registerProgressFill(
		itemIndex: number,
		node: HTMLSpanElement
	): VoidFunction {
		progressFills.set(itemIndex, node);
		if (itemIndex === index) progressFillRef = node;

		return () => {
			if (progressFills.get(itemIndex) === node) {
				progressFills.delete(itemIndex);
			}
			if (progressFillRef === node) progressFillRef = null;
		};
	}

	watch(
		() => index,
		(currentIndex) => {
			progressFillRef = progressFills.get(currentIndex) ?? null;
		}
	);

	watch(
		[() => index, options.duration, () => progressFillRef],
		([, duration, fill]) => {
			if (!fill) return;

			const animation = new Animation(
				new KeyframeEffect(fill, [{ scale: "0 1" }, { scale: "1 1" }], {
					duration,
					fill: "forwards"
				})
			);
			animation.onfinish = goNext;
			progressAnimation = animation;
			if (isPlaying) animation.play();

			return () => {
				animation.cancel();
				if (progressAnimation === animation) progressAnimation = null;
			};
		}
	);

	watch(
		() => isPlaying,
		(playing) => {
			if (playing) progressAnimation?.play();
			else progressAnimation?.pause();
		}
	);

	return {
		id: options.id,
		get index() {
			return index;
		},
		get isPlaying() {
			return isPlaying;
		},
		get prefersReducedMotion() {
			return prefersReducedMotion;
		},
		get viewportRef() {
			return viewportRef;
		},
		attachViewport,
		registerProgressFill,
		alignToCurrent,
		goTo,
		play,
		pause
	};
}
