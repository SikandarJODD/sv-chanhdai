import { animate, useMotionValue } from "motion-sv";
import { watch } from "runed";
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
	#registry = new Map<SwipeId, () => void>();

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
	#fullSwipeActions: Partial<Record<SwipeSide, () => void>> = {};
	#options: SwipeItemOptions;

	constructor(options: SwipeItemOptions) {
		this.#options = options;

		watch(
			() => this.armed,
			(armed) => {
				animate(
					this.collapse,
					armed ? 0 : 1,
					options.shouldReduceMotion()
						? { duration: 0 }
						: TAKEOVER_TWEEN
				);
			}
		);
	}

	get disabled() {
		return this.#options.disabled();
	}

	setItemWidth = (width: number) => {
		this.itemWidth = width;
	};

	setStripWidth = (side: SwipeSide, width: number) => {
		if (side === "left") this.leftWidth = width;
		else this.rightWidth = width;

		if (this.state === side) {
			this.x.set(side === "left" ? width : -width);
		}
	};

	registerFullSwipe = (side: SwipeSide, run: () => void): VoidFunction => {
		this.#fullSwipeActions[side] = run;
		this.fullSwipeSides[side] = true;

		return () => {
			delete this.#fullSwipeActions[side];
			this.fullSwipeSides[side] = false;
		};
	};

	settle = (next: SwipeState, releaseVelocity?: number) => {
		const widths = { left: this.leftWidth, right: this.rightWidth };
		const target = getSnapTarget(next, widths);
		const transition = this.#options.shouldReduceMotion()
			? { duration: 0 }
			: releaseVelocity === undefined
				? SNAP_SPRING
				: { ...GESTURE_SPRING, velocity: releaseVelocity };

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
		if (reach <= 0) return;

		if (travel <= -reach && this.#fullSwipeActions.right) {
			this.armed = "right";
		} else if (travel >= reach && this.#fullSwipeActions.left) {
			this.armed = "left";
		} else {
			this.armed = null;
		}
	};

	onDragEnd: DragHandler = (_, info) => {
		this.dragging = false;

		if (this.armed) {
			const side = this.armed;
			this.armed = null;
			this.#dragged = false;
			this.#fullSwipeActions[side]?.();
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
