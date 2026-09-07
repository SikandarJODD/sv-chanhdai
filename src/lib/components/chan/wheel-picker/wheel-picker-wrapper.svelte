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
		"*:data-rwp:first:*:data-rwp-highlight-wrapper:rounded-s-md",
		"*:data-rwp:last:*:data-rwp-highlight-wrapper:rounded-e-md",
		className
	)}
>
	{@render children()}
</WheelPickerWrapperPrimitive>
