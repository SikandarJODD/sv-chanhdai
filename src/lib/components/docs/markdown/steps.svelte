<script lang="ts">
	import { cn } from "#lib/utils.js";
	import type { Snippet } from "svelte";

	interface Props {
		class?: string;
		children?: Snippet;
	}

	let { class: className, children }: Props = $props();
</script>

<div
	class={cn(
		"relative mb-12 ml-4 border-l border-border [counter-reset:step]",
		className
	)}
>
	{@render children?.()}
</div>
