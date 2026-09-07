import type { WheelPickerOption, WheelPickerValue } from "./wheel-picker-types";

export const RESISTANCE = 0.3;
export const MAX_VELOCITY = 30;

export function easeOutCubic(progress: number): number {
	return Math.pow(progress - 1, 3) + 1;
}

export function clamp(value: number, min: number, max: number): number {
	return Math.max(min, Math.min(value, max));
}

export function getOptionTextValue<T extends WheelPickerValue>(
	option: WheelPickerOption<T>
): string {
	return (
		option.textValue ??
		(typeof option.label === "string"
			? option.label
			: typeof option.label === "number"
				? String(option.label)
				: String(option.value))
	);
}

export function findNearestEnabledIndex<T extends WheelPickerValue>(
	startIndex: number,
	direction: 1 | -1,
	options: WheelPickerOption<T>[],
	infinite: boolean
): number {
	if (options.length === 0 || !options.some((option) => !option.disabled)) {
		return startIndex;
	}

	const search = (nextDirection: 1 | -1): number => {
		let currentIndex = startIndex;

		for (let attempts = 0; attempts < options.length; attempts += 1) {
			currentIndex += nextDirection;

			if (infinite) {
				currentIndex = normalizeIndex(currentIndex, options.length);
			} else if (currentIndex < 0 || currentIndex >= options.length) {
				return -1;
			}

			if (!options[currentIndex]?.disabled) return currentIndex;
		}

		return -1;
	};

	const inDirection = search(direction);
	if (inDirection !== -1) return inDirection;

	const inOppositeDirection = search(direction === 1 ? -1 : 1);
	return inOppositeDirection === -1 ? startIndex : inOppositeDirection;
}

export function normalizeIndex(value: number, length: number): number {
	if (length === 0) return 0;
	return ((value % length) + length) % length;
}

export function validateVisibleCount(value: number): number {
	if (value > 0 && value % 4 === 0) return value;

	if (import.meta.env.DEV) {
		console.warn(
			`WheelPicker: visibleCount must be a positive multiple of 4. Received ${value}; using 20 instead.`
		);
	}

	return 20;
}
