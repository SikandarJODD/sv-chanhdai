import type { Snippet } from "svelte";
import type {
	HTMLAttributes,
	HTMLButtonAttributes,
	HTMLLiAttributes
} from "svelte/elements";

export type AppleCarouselPlayback = "auto" | "playing" | "paused";

export type AppleCarouselItemState = {
	/** Position of the item in the items passed to AppleCarouselContent. */
	index: number;
	/** Whether this item is currently selected. */
	isCurrent: boolean;
	/** Whether this copy exists only to make looping seamless. */
	isClone: boolean;
};

export type AppleCarouselRootProps = Omit<
	HTMLAttributes<HTMLDivElement>,
	"children"
> & {
	children: Snippet;
	/** Time each item remains active during autoplay, in milliseconds. @default 5000 */
	duration?: number;
	/** Bindable reference to the root element. */
	ref?: HTMLDivElement | null;
};

export type AppleCarouselContentProps<T = unknown> = Omit<
	HTMLAttributes<HTMLDivElement>,
	"children"
> & {
	/** Ordered data rendered as carousel items. */
	items: readonly T[];
	/** Renders one AppleCarouselItem for each item. */
	children: Snippet<[item: T]>;
	/** Bindable reference to the scroll viewport. */
	ref?: HTMLDivElement | null;
};

export type AppleCarouselItemProps = Omit<HTMLLiAttributes, "children"> & {
	children: Snippet;
	/** Bindable reference to the item element. */
	ref?: HTMLLIElement | null;
};

export type AppleCarouselControlsProps = Omit<
	HTMLAttributes<HTMLDivElement>,
	"children"
> & {
	children: Snippet;
	/** Size of the tab list and play button. @default "default" */
	size?: "default" | "sm";
	ref?: HTMLDivElement | null;
};

export type AppleCarouselTabListProps<T = unknown> = Omit<
	HTMLAttributes<HTMLDivElement>,
	"children"
> & {
	/** Ordered data rendered as tabs. */
	items: readonly T[];
	/** Renders one AppleCarouselTab for each item. */
	children: Snippet<[item: T]>;
	ref?: HTMLDivElement | null;
};

export type AppleCarouselTabProps = Omit<
	HTMLButtonAttributes,
	"children" | "onclick" | "onfocus" | "onkeydown"
> & {
	children: Snippet;
	onclick?: (
		event: MouseEvent & { currentTarget: HTMLButtonElement }
	) => void;
	onfocus?: (
		event: FocusEvent & { currentTarget: HTMLButtonElement }
	) => void;
	onkeydown?: (
		event: KeyboardEvent & { currentTarget: HTMLButtonElement }
	) => void;
	ref?: HTMLButtonElement | null;
};

export type AppleCarouselPlayButtonProps = Omit<
	HTMLButtonAttributes,
	"children" | "onclick"
> & {
	onclick?: (
		event: MouseEvent & { currentTarget: HTMLButtonElement }
	) => void;
	ref?: HTMLButtonElement | null;
};

export type AppleCarouselItemContextValue = Pick<
	AppleCarouselItemState,
	"index" | "isClone"
>;

export type AppleCarouselTabContextValue = {
	index: number;
	count: number;
};

export type AppleCarouselContextValue = {
	readonly id: string;
	readonly index: number;
	readonly isPlaying: boolean;
	readonly prefersReducedMotion: boolean;
	readonly viewportRef: HTMLDivElement | null;
	attachViewport: (node: HTMLDivElement) => VoidFunction;
	registerProgressFill: (
		index: number,
		node: HTMLSpanElement
	) => VoidFunction;
	alignToCurrent: () => void;
	goTo: (index: number) => void;
	play: () => void;
	pause: () => void;
};
