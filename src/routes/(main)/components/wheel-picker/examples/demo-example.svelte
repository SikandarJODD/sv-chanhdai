<script lang="ts">
	import {
		WheelPicker,
		WheelPickerWrapper,
		type WheelPickerOption
	} from "$chan/wheel-picker";

	const createArray = (
		length: number,
		add = 0
	): WheelPickerOption<number>[] =>
		Array.from({ length }, (_, i) => {
			const value = i + add;

			return {
				label: value.toString().padStart(2, "0"),
				value
			};
		});

	const hourOptions = createArray(12, 1);
	const minuteOptions = createArray(60);
	const meridiemOptions: WheelPickerOption[] = [
		{ label: "AM", value: "AM" },
		{ label: "PM", value: "PM" }
	];
</script>

<div class="w-56">
	<WheelPickerWrapper>
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
</div>
