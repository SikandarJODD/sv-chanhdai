import { createContext } from "svelte";
import type { MotionValue } from "motion-sv";

export type SlideToUnlockContextValue = {
	readonly x: MotionValue<number>;
	trackRef: HTMLDivElement | null;
	readonly isDragging: boolean;
	readonly handleWidth: number;
	readonly textOpacity: MotionValue<number>;
	onDragStart: () => void;
	onDragEnd: () => void;
};

const [getSlideToUnlockContext, setSlideToUnlockContext] =
	createContext<SlideToUnlockContextValue>();

export function useSlideToUnlock() {
	try {
		return getSlideToUnlockContext();
	} catch {
		throw new Error(
			"SlideToUnlock components must be used within SlideToUnlock"
		);
	}
}

export { setSlideToUnlockContext };
