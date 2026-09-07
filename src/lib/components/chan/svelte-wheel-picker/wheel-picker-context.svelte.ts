import { createContext } from "svelte";

export class WheelPickerGroupState {
	activeIndex = $state(-1);

	#nextIndex = 0;
	#pickerRefs = new Map<number, HTMLDivElement>();

	register(ref: HTMLDivElement): number {
		const index = this.#nextIndex++;
		this.#pickerRefs.set(index, ref);

		if (this.activeIndex === -1) {
			this.activeIndex = index;
		}

		return index;
	}

	unregister(index: number, ref: HTMLDivElement): void {
		if (this.#pickerRefs.get(index) !== ref) return;

		this.#pickerRefs.delete(index);

		if (this.activeIndex === index) {
			this.activeIndex = this.getPickerIndices()[0] ?? -1;
		}
	}

	setActiveIndex(index: number): void {
		if (this.#pickerRefs.has(index)) {
			this.activeIndex = index;
		}
	}

	getPickerRef(index: number): HTMLDivElement | null {
		return this.#pickerRefs.get(index) ?? null;
	}

	getPickerIndices(): number[] {
		return [...this.#pickerRefs.keys()].sort((a, b) => a - b);
	}
}

const [getWheelPickerGroupContext, setWheelPickerGroupContext] =
	createContext<WheelPickerGroupState>();

export function provideWheelPickerGroup(): WheelPickerGroupState {
	const group = new WheelPickerGroupState();
	setWheelPickerGroupContext(group);
	return group;
}

export function useWheelPickerGroup(): WheelPickerGroupState | null {
	try {
		return getWheelPickerGroupContext();
	} catch {
		return null;
	}
}
