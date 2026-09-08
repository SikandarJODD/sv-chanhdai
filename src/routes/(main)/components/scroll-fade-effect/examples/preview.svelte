<script lang="ts">
	import { ScrollFadeEffect } from "$chan/scroll-fade-effect";
	import { Separator } from "$ui/separator";

	const tags = Array.from({ length: 50 }).map(
		(_, i, a) => `v1.2.0-beta.${a.length - i}`
	);
</script>

<div data-slot="scroll-fade-effect-demo" class="rounded-lg border">
	<ScrollFadeEffect class="h-72 w-48">
		<div class="p-4">
			<h4 class="mb-4 text-sm leading-none font-medium">Tags</h4>
			{#each tags as item}
				<div class="text-sm">{item}</div>
				<Separator class="my-2" />
			{/each}
		</div>
	</ScrollFadeEffect>
</div>
