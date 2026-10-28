import type { SwipeSide, SwipeState } from "./swipe-actions-types";

export const SNAP_SPRING = {
	type: "spring",
	stiffness: 500,
	damping: 45,
	mass: 0.8
} as const;

export const GESTURE_SPRING = { ...SNAP_SPRING, damping: 36 } as const;
export const TAKEOVER_TWEEN = {
	duration: 0.18,
	ease: [0.32, 0.72, 0, 1]
} as const;
export const DRAG_SLOP = 4;

export function getSnapTarget(
	state: SwipeState,
	widths: Record<SwipeSide, number>
): number {
	if (state === "left") return widths.left;
	if (state === "right") return -widths.right;
	return 0;
}

export function getReleaseState({
	position,
	velocity,
	velocityFactor,
	threshold,
	widths
}: {
	position: number;
	velocity: number;
	velocityFactor: number;
	threshold: number;
	widths: Record<SwipeSide, number>;
}): SwipeState {
	const projected = position + velocity * velocityFactor;

	if (widths.right > 0 && projected <= -widths.right * threshold) {
		return "right";
	}
	if (widths.left > 0 && projected >= widths.left * threshold) {
		return "left";
	}
	return "closed";
}

export function sideTravel(side: SwipeSide, position: number): number {
	return Math.max(0, side === "left" ? position : -position);
}
