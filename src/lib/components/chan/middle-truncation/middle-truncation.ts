let cachedContext: CanvasRenderingContext2D | null = null;

/** Returns a shared canvas context for text measurement. */
function getCanvasContext(): CanvasRenderingContext2D {
	if (!cachedContext) {
		const canvas = document.createElement("canvas");
		const context = canvas.getContext("2d");

		if (!context) {
			throw new Error("Failed to get 2d context from canvas");
		}

		cachedContext = context;
	}

	return cachedContext;
}

function measureText(text: string, font: string): number {
	const context = getCanvasContext();
	context.font = font;
	return context.measureText(text).width;
}

export function getComputedFont(element: HTMLElement): string {
	const styles = window.getComputedStyle(element);
	return `${styles.fontStyle} ${styles.fontWeight} ${styles.fontSize} ${styles.fontFamily}`;
}

/** Debounces a function and runs it during the next animation frame. */
export function debounceWithRAF<Args extends unknown[], Return = void>(
	fn: (...args: Args) => Return,
	delay: number
): (...args: Args) => void {
	let timeoutId: ReturnType<typeof setTimeout> | undefined;
	let animationFrameId: number | undefined;

	return (...args: Args): void => {
		if (timeoutId !== undefined) clearTimeout(timeoutId);
		if (animationFrameId !== undefined) {
			cancelAnimationFrame(animationFrameId);
		}

		timeoutId = setTimeout(() => {
			animationFrameId = requestAnimationFrame(() => fn(...args));
		}, delay);
	};
}

/**
 * Truncates text in the middle, preserving the start and end portions.
 * Uses binary search to find the longest result that fits the available width.
 */
export function computeTruncated(
	text: string,
	end: number | undefined,
	minEnd: number | undefined,
	containerWidth: number,
	font: string,
	ellipsis: string
): string {
	const fullWidth = measureText(text, font);
	if (fullWidth <= containerWidth) return text;

	// Preserve exactly `end` characters at the end.
	if (end !== undefined) {
		const endText = text.slice(-end);
		const endWidth = measureText(ellipsis + endText, font);
		const availableWidth = containerWidth - endWidth;

		let low = 0;
		let high = text.length - end;

		while (low < high) {
			const middle = Math.ceil((low + high) / 2);

			if (measureText(text.slice(0, middle), font) <= availableWidth) {
				low = middle;
			} else {
				high = middle - 1;
			}
		}

		return text.slice(0, low) + ellipsis + endText;
	}

	// Split evenly, optionally preserving at least `minEnd` characters at the end.
	const ellipsisWidth = measureText(ellipsis, font);
	const availableTextWidth = containerWidth - ellipsisWidth;

	let low = 0;
	let high = text.length;

	while (low < high) {
		const middle = Math.ceil((low + high) / 2);
		const endLength =
			minEnd === undefined
				? Math.ceil(middle / 2)
				: Math.max(Math.ceil(middle / 2), minEnd);
		const startLength =
			minEnd === undefined
				? Math.floor(middle / 2)
				: Math.max(0, middle - endLength);
		const startText = text.slice(0, startLength);
		const endText = text.slice(-endLength);

		if (measureText(startText + endText, font) <= availableTextWidth) {
			low = middle;
		} else {
			high = middle - 1;
		}
	}

	const endLength =
		minEnd === undefined
			? Math.ceil(low / 2)
			: Math.max(Math.ceil(low / 2), minEnd);
	const startLength =
		minEnd === undefined
			? Math.floor(low / 2)
			: Math.max(0, low - endLength);

	return text.slice(0, startLength) + ellipsis + text.slice(-endLength);
}
