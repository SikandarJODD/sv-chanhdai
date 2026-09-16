<script lang="ts">
	import type { SVGAttributes } from "svelte/elements";

	let { ...props }: SVGAttributes<SVGSVGElement> = $props();
</script>

<svg viewBox="0 0 256 222" preserveAspectRatio="xMidYMid" {...props}>
	<path d="m128 0 128 221.705H0z" />
</svg>
