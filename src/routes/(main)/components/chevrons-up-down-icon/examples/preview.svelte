<script lang="ts">
	import {
		ChevronsUpDownIcon,
		type ChevronsUpDownIconHandle
	} from "$chan/chevrons-up-down-icon";
	import { Button } from "$ui/button";
	import { watch } from "runed";

	let open = $state(false);
	let chevronsUpDownIconRef = $state<ChevronsUpDownIconHandle | undefined>();

	watch(
		() => open,
		(isOpen) => {
			if (isOpen) {
				chevronsUpDownIconRef?.startAnimation();
			} else {
				chevronsUpDownIconRef?.stopAnimation();
			}
		}
	);
</script>

<Button
	data-open={open}
	variant="outline"
	size="icon"
	aria-label={open ? "Collapse" : "Expand"}
	aria-expanded={open}
	onclick={() => (open = !open)}
>
	<ChevronsUpDownIcon
		bind:this={chevronsUpDownIconRef}
		duration={0.2}
		class="size-5"
	/>
</Button>
