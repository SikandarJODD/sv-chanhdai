<script lang="ts">
	import { MetaTags } from "svelte-meta-tags";
	import { Footer, Hero, Sponsors } from "$lib/components/landing";
	import MasonryGrid from "$lib/components/ui/masonry-grid/masonry-grid.svelte";
</script>

<MetaTags
	title="Svelte Chanhdai Components & Blocks"
	description="Free, open-source Svelte 5 and SvelteKit UI components with polished animations, live previews, examples, and copy-paste installation guides."
	canonical="https://sv-chan.vercel.app/"
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
	robots="index,follow"
	openGraph={{
		type: "website",
		url: "https://sv-chan.vercel.app/",
		title: "Svelte Chanhdai Components & Blocks",
		description:
			"Free, open-source Svelte 5 and SvelteKit UI components with polished animations, live previews, examples, and copy-paste installation guides.",
		images: [
			{
				url: "https://sv-chan.vercel.app/og.png",
				width: 1728,
				height: 910,
				alt: "Svelte Chanhdai component library preview"
			}
		],
		locale: "en_US",
		siteName: "Svelte Chanhdai Components & Blocks"
	}}
	twitter={{
		cardType: "summary_large_image",
		creator: "@Sikandar_Bhide",
		site: "@Sikandar_Bhide",
		title: "Svelte Chanhdai Components & Blocks",
		description:
			"Free, open-source Svelte 5 and SvelteKit UI components with polished animations, live previews, examples, and copy-paste installation guides.",
		image: "https://sv-chan.vercel.app/og.png",
		imageAlt: "Svelte Chanhdai component library preview"
	}}
	additionalMetaTags={[
		{ name: "author", content: "Sikandar Bhide" },
		{
			name: "application-name",
			content: "Svelte Chanhdai Components & Blocks"
		}
	]}
/>

<main>
	<Hero />
	<MasonryGrid />
	<Sponsors />
	<Footer />
</main>
