<script lang="ts">
	import { changelog } from "$lib/changelog/changelog";
	import Seo from "$lib/components/docs/base/main/seo.svelte";
</script>

<Seo
	title="Changelog"
	description="Follow new components, improvements, fixes, and releases across the Svelte Chanhdai open-source UI component and animation collection."
	keywords={[
		"Svelte Chanhdai changelog",
		"Svelte component updates",
		"Svelte UI releases",
		"Svelte 5 components",
		"SvelteKit components",
		"Svelte animations",
		"open source changelog",
		"Chanhdai components",
		"component releases",
		"UI library updates"
	]}
	schemaType="CollectionPage"
/>

<section class="font-figtree min-h-[calc(100vh-4rem)] px-4 py-12 sm:py-16">
	<div class="mx-auto w-full max-w-2xl">
		<header class="mb-10">
			<p
				class="mb-2 text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase"
			>
				Updates
			</p>
			<h1 class="text-2xl font-semibold tracking-normal sm:text-3xl">
				Changelog
			</h1>
		</header>

		<div class="space-y-12">
			{#each changelog as entry}
				{@const Entry = entry.component}
				<Entry />
			{/each}
		</div>
	</div>
</section>
