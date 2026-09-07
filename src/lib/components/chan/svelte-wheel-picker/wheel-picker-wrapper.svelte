<script lang="ts">
	import type { WheelPickerWrapperProps } from "./wheel-picker-types";
	import { provideWheelPickerGroup } from "./wheel-picker-context.svelte";

	let {
		ref = $bindable(null),
		children,
		class: className,
		...restProps
	}: WheelPickerWrapperProps = $props();

	provideWheelPickerGroup();
</script>

<div
	bind:this={ref}
	{...restProps}
	class={className}
	data-rwp-wrapper
	data-slot="wheel-picker-wrapper"
>
	{@render children()}
</div>
