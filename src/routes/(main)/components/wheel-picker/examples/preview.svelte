<script lang="ts">
	import {
		WheelPicker,
		WheelPickerWrapper,
		type WheelPickerOption
	} from "$chan/wheel-picker";

	const options: WheelPickerOption[] = [
		{
			label: "React",
			value: "react"
		},
		{
			label: "Vue",
			value: "vue"
		},
		{
			label: "Angular",
			value: "angular",
			disabled: true
		},
		{
			label: "Svelte",
			value: "svelte"
		}
	];

	let value = $state("react");
</script>

<div class="w-64">
	<WheelPickerWrapper>
		<WheelPicker {options} bind:value aria-label="Framework" />
	</WheelPickerWrapper>
</div>
