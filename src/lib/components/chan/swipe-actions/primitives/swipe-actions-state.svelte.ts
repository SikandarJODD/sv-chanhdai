import { animate, useMotionValue } from "motion-sv";
import { SvelteMap } from "svelte/reactivity";
import type {
	DragHandler,
	SwipeId,
	SwipeItemContextValue,
	SwipeRootContextValue,
	SwipeSide,
	SwipeState
} from "./swipe-actions-types";
import {
	DRAG_SLOP,
	GESTURE_SPRING,
	getReleaseState,
	getSnapTarget,
	SNAP_SPRING,
	TAKEOVER_TWEEN
} from "./swipe-actions-utils";

export class SwipeRootState implements SwipeRootContextValue {
	#registry = new SvelteMap<SwipeId, () => void>();

	register = (id: SwipeId, close: () => void): VoidFunction => {
		this.#registry.set(id, close);
		return () => this.#registry.delete(id);
	};

	notifyOpen = (id: SwipeId) => {
		for (const [key, close] of this.#registry) {
			if (key !== id) close();
		}
	};
}

type SwipeItemOptions = {
	id: SwipeId;
	group: SwipeRootContextValue | null;
	threshold: () => number;
	velocityFactor: () => number;
	fullSwipeThreshold: () => number;
	disabled: () => boolean;
	shouldReduceMotion: () => boolean;
	onOpenChange: () => ((state: SwipeState) => void) | undefined;
};

export class SwipeItemState implements SwipeItemContextValue {
	state = $state<SwipeState>("closed");
	dragging = $state(false);
	armed = $state<SwipeSide | null>(null);
	leftWidth = $state(0);
	rightWidth = $state(0);
	itemWidth = $state(0);
	fullSwipeSides = $state<Record<SwipeSide, boolean>>({
		left: false,
		right: false
	});

	readonly x = useMotionValue(0);
	readonly collapse = useMotionValue(1);

	#dragged = false;
	#fullSwipeActions: Record<SwipeSide, SvelteMap<SwipeId, () => void>> = {
		left: new SvelteMap(),
		right: new SvelteMap()
	};
	#options: SwipeItemOptions;

	constructor(options: SwipeItemOptions) {
		this.#options = options;
	}

	get disabled() {
		return this.#options.disabled();
	}

	setItemWidth = (width: number) => {
		if (this.itemWidth === width) return;
		this.itemWidth = width;
	};

	setStripWidth = (side: SwipeSide, width: number) => {
		const current = side === "left" ? this.leftWidth : this.rightWidth;
		if (current === width) return;

		if (side === "left") this.leftWidth = width;
		else this.rightWidth = width;

		if (this.state === side) {
			this.x.set(side === "left" ? width : -width);
		}
	};

	registerFullSwipe = (
		side: SwipeSide,
		id: SwipeId,
		run: () => void
	): VoidFunction => {
		const actions = this.#fullSwipeActions[side];
		actions.set(id, run);
		if (!this.fullSwipeSides[side]) this.fullSwipeSides[side] = true;

		return () => {
			actions.delete(id);
			if (actions.size === 0) this.fullSwipeSides[side] = false;
		};
	};

	#getFullSwipeAction(side: SwipeSide) {
		const actions = this.#fullSwipeActions[side];
		return Array.from(actions.values()).at(-1);
	}

	#setArmed(side: SwipeSide | null) {
		if (this.armed === side) return;
		this.armed = side;
		animate(
			this.collapse,
			side ? 0 : 1,
			this.#options.shouldReduceMotion()
				? { duration: 0 }
				: TAKEOVER_TWEEN
		);
	}

	settle = (next: SwipeState, releaseVelocity?: number) => {
		const widths = { left: this.leftWidth, right: this.rightWidth };
		const target = getSnapTarget(next, widths);
		const transition = this.#options.shouldReduceMotion()
			? { duration: 0 }
			: releaseVelocity === undefined
				? SNAP_SPRING
				: { ...GESTURE_SPRING, velocity: releaseVelocity };

		const isSettled =
			this.state === next && Math.abs(this.x.get() - target) < 0.5;
		if (isSettled) return;

		animate(this.x, target, transition);
		if (next !== "closed")
			this.#options.group?.notifyOpen(this.#options.id);
		if (this.state === next) return;

		this.state = next;
		this.#options.onOpenChange()?.(next);
	};

	close = () => this.settle("closed");

	onDragStart: DragHandler = () => {
		this.#dragged = false;
		this.dragging = true;
		this.#options.group?.notifyOpen(this.#options.id);
	};

	onDrag: DragHandler = (_, info) => {
		if (Math.abs(info.offset.x) > DRAG_SLOP) this.#dragged = true;

		const reach = this.#options.fullSwipeThreshold() * this.itemWidth;
		const travel = this.x.get();
		if (reach <= 0) {
			this.#setArmed(null);
			return;
		}

		if (travel <= -reach && this.fullSwipeSides.right) {
			this.#setArmed("right");
		} else if (travel >= reach && this.fullSwipeSides.left) {
			this.#setArmed("left");
		} else {
			this.#setArmed(null);
		}
	};

	onDragEnd: DragHandler = (_, info) => {
		this.dragging = false;

		if (this.armed) {
			const side = this.armed;
			this.#setArmed(null);
			this.#dragged = false;
			this.#getFullSwipeAction(side)?.();
			this.settle("closed", info.velocity.x);
			return;
		}

		this.settle(
			getReleaseState({
				position: this.x.get(),
				velocity: info.velocity.x,
				velocityFactor: this.#options.velocityFactor(),
				threshold: this.#options.threshold(),
				widths: { left: this.leftWidth, right: this.rightWidth }
			}),
			info.velocity.x
		);
	};

	onClickCapture = (event: MouseEvent) => {
		if (!this.#dragged && this.state === "closed") return;

		event.preventDefault();
		event.stopPropagation();
		if (this.#dragged) {
			this.#dragged = false;
			return;
		}
		this.close();
	};

	onKeyDown = (event: KeyboardEvent) => {
		if (this.disabled) return;
		if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;

		const [closes, opens] =
			event.key === "ArrowLeft"
				? (["left", "right"] as const)
				: (["right", "left"] as const);

		if (this.state === closes) this.settle("closed");
		else if ((opens === "left" ? this.leftWidth : this.rightWidth) > 0) {
			this.settle(opens);
		} else return;

		event.preventDefault();
	};
}
