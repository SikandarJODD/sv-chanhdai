export const CLICK_THRESHOLD = 3;
export const DEAD_ZONE = 32;
export const MAX_CURSOR_RANGE = 200;
export const MAX_STRETCH = 8;

export const HANDLE_BUFFER = 8;
export const LABEL_OFFSET = 16;
export const VALUE_OFFSET = 4;

export function clamp(value: number, min: number, max: number): number {
	return Math.max(min, Math.min(max, value));
}

export function decimalsForStep(step: number): number {
	const value = step.toString();
	const decimalIndex = value.indexOf(".");

	return decimalIndex === -1 ? 0 : value.length - decimalIndex - 1;
}

export function roundValue(value: number, step: number): number {
	const rounded = Math.round(value / step) * step;

	return Number.parseFloat(rounded.toFixed(decimalsForStep(step)));
}

/** Magnetically snaps to a decile when the value is within 3.125% of it. */
export function snapToDecile(value: number, min: number, max: number): number {
	const normalized = (value - min) / (max - min);
	const nearest = Math.round(normalized * 10) / 10;

	if (Math.abs(normalized - nearest) <= 0.03125) {
		return min + nearest * (max - min);
	}

	return value;
}

export function percentFromValue(
	value: number,
	min: number,
	max: number
): number {
	return ((value - min) / (max - min)) * 100;
}

export function getRubberStretch(
	clientX: number,
	rect: DOMRect,
	sign: -1 | 1
): number {
	const distancePast = sign < 0 ? rect.left - clientX : clientX - rect.right;
	const overflow = Math.max(0, distancePast - DEAD_ZONE);

	return (
		sign * MAX_STRETCH * Math.sqrt(Math.min(overflow / MAX_CURSOR_RANGE, 1))
	);
}
