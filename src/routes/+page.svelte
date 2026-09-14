<script lang="ts">
	import Seo from "$lib/components/docs/base/main/seo.svelte";
	import { Footer, Hero, Sponsors } from "$lib/components/landing";
	import MasonryGrid from "$lib/components/ui/masonry-grid/masonry-grid.svelte";
</script>

<Seo
	title="Svelte Chanhdai Components & Blocks"
	titleTemplate="%s"
	description="Explore free, open-source Svelte 5 components ported from Chánh Đại, with live previews, examples, and installation guides."
	keywords={[
		"Svelte components",
		"Svelte UI components",
		"Svelte 5 components",
		"SvelteKit components",
		"Svelte animations",
		"Svelte component library",
		"shadcn-svelte",
		"Tailwind CSS components",
		"open source Svelte UI",
		"Chanhdai components",
		"Chánh Đại",
		"Svelte UI blocks"
	]}
	schemaType="CollectionPage"
/>

<main>
	<Hero />
	<MasonryGrid />
	<Sponsors />
	<Footer />
</main>
