import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";

export type WheelPickerValue = string | number;

export type WheelPickerLabel = string | number | Snippet;

export type WheelPickerOption<T extends WheelPickerValue = string> = {
	/** Value returned when this option is selected. */
	value: T;
	/** Text or a Svelte snippet rendered for this option. */
	label: WheelPickerLabel;
	/** Text used by typeahead search. Falls back to a text label or the value. */
	textValue?: string;
	/** Prevents the option from being selected. */
	disabled?: boolean;
};

export type WheelPickerClasses = {
	optionItem?: string;
	highlightWrapper?: string;
	highlightItem?: string;
};

export type WheelPickerProps<T extends WheelPickerValue = string> = Omit<
	HTMLAttributes<HTMLDivElement>,
	"children" | "onblur" | "onfocus" | "onkeydown" | "onwheel"
> & {
	/** Bindable selected value. */
	value?: T;
	/** Initial value used when `value` is undefined. */
	defaultValue?: T;
	/** Called whenever interaction selects a different value. */
	onValueChange?: (value: T) => void;
	options: WheelPickerOption<T>[];
	/** @default false */
	infinite?: boolean;
	/** Number of positions around the wheel. Must be a positive multiple of four. @default 20 */
	visibleCount?: number;
	/** @default 3 */
	dragSensitivity?: number;
	/** @default 5 */
	scrollSensitivity?: number;
	/** @default 30 */
	optionItemHeight?: number;
	classes?: WheelPickerClasses;
	/** Bindable reference to the picker element. */
	ref?: HTMLDivElement | null;
};

export type WheelPickerWrapperProps = Omit<
	HTMLAttributes<HTMLDivElement>,
	"children"
> & {
	children: Snippet;
	/** Bindable reference to the wrapper element. */
	ref?: HTMLDivElement | null;
};
