export const CLONE_COUNT = 4;
export const SETTLE_DELAY = 150;
export const SCROLL_BASE_DURATION = 0.5;
export const SCROLL_EXTRA_CARD_DURATION = 0.1;
export const SCROLL_MAX_DURATION = 0.9;

export function getSlides(viewport: HTMLElement): HTMLElement[] {
	return Array.from(
		viewport.firstElementChild?.children ?? []
	) as HTMLElement[];
}

export function getSnapLeft(viewport: HTMLElement, slide: HTMLElement): number {
	if (getComputedStyle(slide).scrollSnapAlign.startsWith("start")) {
		const padding = Number.parseFloat(
			getComputedStyle(viewport).scrollPaddingInlineStart
		);
		return slide.offsetLeft - (padding || 0);
	}

	return slide.offsetLeft - (viewport.clientWidth - slide.offsetWidth) / 2;
}

export function getNearestSlide(
	viewport: HTMLElement
): HTMLElement | undefined {
	let nearest: HTMLElement | undefined;
	let minDistance = Number.POSITIVE_INFINITY;

	for (const slide of getSlides(viewport)) {
		const distance = Math.abs(
			getSnapLeft(viewport, slide) - viewport.scrollLeft
		);
		if (distance < minDistance) {
			minDistance = distance;
			nearest = slide;
		}
	}

	return nearest;
}

export function getRealSlide(
	viewport: HTMLElement,
	index: number
): HTMLElement | undefined {
	return getSlides(viewport).find(
		(slide) =>
			!slide.hasAttribute("data-clone") &&
			slide.dataset.index === String(index)
	);
}
