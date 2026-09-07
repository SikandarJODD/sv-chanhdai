<script lang="ts">
	import { cn } from "$lib/utils";
	import {
		WheelPickerWrapper as WheelPickerWrapperPrimitive,
		type WheelPickerWrapperProps
	} from "$chan/svelte-wheel-picker";

	let {
		ref = $bindable(null),
		children,
		class: className,
		...restProps
	}: WheelPickerWrapperProps = $props();
</script>

<WheelPickerWrapperPrimitive
	bind:ref
	{...restProps}
	class={cn(
		"w-56 rounded-lg border border-zinc-200 bg-white px-1 shadow-xs dark:border-zinc-700/80 dark:bg-zinc-900",
		"*:data-wheel-picker:first:*:data-wheel-picker-highlight-wrapper:rounded-s-md",
		"*:data-wheel-picker:last:*:data-wheel-picker-highlight-wrapper:rounded-e-md",
		className
	)}
>
	{@render children()}
</WheelPickerWrapperPrimitive>
