<script lang="ts" generics="T extends WheelPickerValue">
	import { cn } from "$lib/utils";
	import {
		WheelPicker as WheelPickerPrimitive,
		type WheelPickerProps,
		type WheelPickerValue
	} from "../svelte-wheel-picker/index.js";

	let {
		ref = $bindable(null),
		value = $bindable(),
		classes,
		...restProps
	}: WheelPickerProps<T> = $props();
</script>

<WheelPickerPrimitive
	bind:ref
	bind:value
	{...restProps}
	classes={{
		optionItem: cn(
			"text-zinc-400 data-disabled:opacity-40 dark:text-zinc-500",
			classes?.optionItem
		),
		highlightWrapper: cn(
			"bg-zinc-100 text-zinc-950 dark:bg-zinc-800 dark:text-zinc-50",
			// "data-wheel-picker-focused:inset-ring-2 data-wheel-picker-focused:inset-ring-zinc-300 dark:data-wheel-picker-focused:inset-ring-zinc-600",
			classes?.highlightWrapper
		),
		highlightItem: cn("data-disabled:opacity-40", classes?.highlightItem)
	}}
/>
