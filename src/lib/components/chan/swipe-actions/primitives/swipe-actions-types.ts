import type { Snippet } from "svelte";
import type {
	ClassValue,
	HTMLAttributes,
	HTMLButtonAttributes
} from "svelte/elements";
import type {
	MotionHTMLAttributes,
	MotionProps,
	MotionStyleProps,
	MotionValue,
	PanInfo
} from "motion-sv";

export type SwipeSide = "left" | "right";
export type SwipeState = "closed" | SwipeSide;

export type SwipeItemState = {
	state: SwipeState;
	disabled: boolean;
	dragging: boolean;
};

type DivProps = Omit<HTMLAttributes<HTMLDivElement>, "children">;
type ButtonProps = Omit<HTMLButtonAttributes, "children">;
type SpanProps = Omit<HTMLAttributes<HTMLSpanElement>, "children">;
type MotionDivProps = MotionProps<"div"> & MotionHTMLAttributes<"div">;

export type SwipeRootProps = DivProps & {
	children: Snippet;
	ref?: HTMLDivElement | null;
};

export type SwipeItemProps = Omit<DivProps, "onkeydown"> & {
	children: Snippet;
	/** Fraction of the action-strip width the drag must pass to open. @default 0.5 */
	threshold?: number;
	/** Seconds of velocity projected onto the release position. @default 0.2 */
	velocityFactor?: number;
	/** Fraction of the item width the drag must pass to arm a full swipe. @default 0.5 */
	fullSwipeThreshold?: number;
	/** Prevents pointer and keyboard swiping. @default false */
	disabled?: boolean;
	/** Close the item when any page scroll occurs. @default false */
	closeOnScroll?: boolean;
	onOpenChange?: (state: SwipeState) => void;
	onkeydown?: (
		event: KeyboardEvent & { currentTarget: HTMLDivElement }
	) => void;
	ref?: HTMLDivElement | null;
};

export type SwipeActionsProps = DivProps & {
	children: Snippet;
	side: SwipeSide;
	/** Run the outermost action when the drag passes the full-swipe threshold. */
	fullSwipe?: boolean;
	ref?: HTMLDivElement | null;
};

export type SwipeActionProps = Omit<ButtonProps, "onclick" | "type"> & {
	children: Snippet;
	/** Close the item after an unprevented click. @default true */
	closeOnClick?: boolean;
	onclick?: (
		event: MouseEvent & { currentTarget: HTMLButtonElement }
	) => void;
	ref?: HTMLButtonElement | null;
};

export type SwipeActionContentProps = SpanProps & {
	children: Snippet;
	ref?: HTMLSpanElement | null;
};

export type SwipeContentProps = Omit<
	MotionDivProps,
	| "children"
	| "class"
	| "style"
	| "ref"
	| "drag"
	| "dragConstraints"
	| "dragElastic"
	| "dragMomentum"
	| "onDragStart"
	| "onDrag"
	| "onDragEnd"
> & {
	children: Snippet;
	class?: ClassValue;
	style?: MotionStyleProps;
	ref?: HTMLDivElement | null;
};

export type DragHandler = (event: PointerEvent, info: PanInfo) => void;
export type SwipeId = symbol;

export type SwipeRootContextValue = {
	register: (id: SwipeId, close: () => void) => VoidFunction;
	notifyOpen: (id: SwipeId) => void;
};

export type SwipeItemContextValue = {
	readonly state: SwipeState;
	readonly disabled: boolean;
	readonly dragging: boolean;
	readonly x: MotionValue<number>;
	readonly collapse: MotionValue<number>;
	readonly leftWidth: number;
	readonly rightWidth: number;
	readonly itemWidth: number;
	readonly armed: SwipeSide | null;
	readonly fullSwipeSides: Record<SwipeSide, boolean>;
	setItemWidth: (width: number) => void;
	setStripWidth: (side: SwipeSide, width: number) => void;
	registerFullSwipe: (
		side: SwipeSide,
		id: SwipeId,
		run: () => void
	) => VoidFunction;
	close: () => void;
	onDragStart: DragHandler;
	onDrag: DragHandler;
	onDragEnd: DragHandler;
	onClickCapture: (event: MouseEvent) => void;
	onKeyDown: (event: KeyboardEvent) => void;
};

export type SwipeActionsContextValue = {
	readonly side: SwipeSide;
	readonly fullSwipe: boolean;
	measure: (id: SwipeId, width: number) => void;
	forget: (id: SwipeId) => void;
	offsetOf: (id: SwipeId) => number;
	isOutermost: (id: SwipeId) => boolean;
};
