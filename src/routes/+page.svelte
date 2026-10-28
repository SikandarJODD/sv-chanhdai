<script lang="ts">
	import Seo from "#lib/components/docs/base/main/seo.svelte";
	import { Footer, Hero, Sponsors } from "#lib/components/landing/index.js";
	import MasonryGrid from "#lib/components/ui/masonry-grid/masonry-grid.svelte";
</script>

<Seo
	title="Svelte Chanhdai Components & Blocks"
	titleTemplate="%s"
	description="Open-source Svelte 5 components with live demos, source code, examples, and copy-paste installation guides."
	keywords={[
		"Svelte components",
		"Svelte 5 components",
		"SvelteKit components",
		"Svelte UI library",
		"animated Svelte components",
		"Tailwind CSS components",
		"shadcn-svelte components",
		"open source UI components",
		"copy paste Svelte components",
		"Chanhdai components",
		"Chánh Đại components"
	]}
	schemaType="WebSite"
/>

<main>
	<Hero />
	<MasonryGrid />
	<Sponsors />
	<Footer />
</main>
