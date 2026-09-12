<script lang="ts">
	import { Button, type ButtonSize } from "$lib/components/ui/button";
	import { Check, Copy } from "@lucide/svelte";
	import { toast } from "svelte-sonner";

	type Props = {
		llmsTxtUrl: string;
		size?: ButtonSize;
	};

	let { llmsTxtUrl, size = "sm" }: Props = $props();

	let copied = $state(false);

	async function copyMarkdown() {
		try {
			const response = await fetch(llmsTxtUrl);
			if (!response.ok)
				throw new Error("Failed to fetch markdown content");

			const markdown = await response.text();
			await navigator.clipboard.writeText(markdown);

			copied = true;
			toast.success("Copied to clipboard!");

			setTimeout(() => {
				copied = false;
			}, 2000);
		} catch (error) {
			console.error("Failed to copy markdown:", error);
			toast.error("Failed to copy markdown");
		}
	}
</script>

<Button
	variant="secondary"
	onclick={copyMarkdown}
	class="gap-1.5 [&_svg:not([class*='size-'])]:size-3 lg:[&_svg:not([class*='size-'])]:size-3.5"
	aria-label="Copy as Markdown"
	{size}
>
	{#if copied}
		<Check />
	{:else}
		<Copy />
	{/if}
	<span class="text-xs!">Copy Page</span>
</Button>
