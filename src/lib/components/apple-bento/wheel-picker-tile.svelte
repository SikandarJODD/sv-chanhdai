<script lang="ts">
	import {
		WheelPicker,
		WheelPickerWrapper,
		type WheelPickerOption
	} from "$chan/wheel-picker";
	import BentoTile from "./bento-tile.svelte";

	let { class: className }: { class?: string } = $props();

	const createOptions = (
		length: number,
		add = 0
	): WheelPickerOption<number>[] =>
		Array.from({ length }, (_, index) => {
			const value = index + add;

			return {
				label: value.toString().padStart(2, "0"),
				value
			};
		});

	const hourOptions = createOptions(12, 1);
	const minuteOptions = createOptions(60);
	const meridiemOptions: WheelPickerOption[] = [
		{ label: "AM", value: "AM" },
		{ label: "PM", value: "PM" }
	];
</script>

<BentoTile class={className}>
	<WheelPickerWrapper
		class="w-full max-w-56 rounded-xl shadow-none [corner-shape:superellipse(1)]"
	>
		<WheelPicker
			options={hourOptions}
			defaultValue={9}
			infinite
			aria-label="Hour"
		/>
		<WheelPicker
			options={minuteOptions}
			defaultValue={41}
			infinite
			aria-label="Minute"
		/>
		<WheelPicker
			options={meridiemOptions}
			defaultValue="AM"
			aria-label="AM or PM"
		/>
	</WheelPickerWrapper>
</BentoTile>
