<script lang="ts">
	import { page } from "$app/state";
	import { seo_config } from "$lib/config/seo";
	import { JsonLd, MetaTags } from "svelte-meta-tags";

	type Props = {
		title: string;
		description: string;
		keywords?: string[];
		titleTemplate?: string;
		schemaType?: "WebPage" | "CollectionPage";
		images?: {
			url: string;
			secureUrl?: string;
			type?: string;
			width?: number;
			height?: number;
			alt?: string;
		}[];
	};
	let {
		title,
		description,
		keywords,
		titleTemplate = seo_config.title_template,
		schemaType = "WebPage",
		images = [
			{
				url: seo_config.url + "/og.png",
				secureUrl: seo_config.url + "/og.png",
				type: "image/png",
				width: 1730,
				height: 909,
				alt: `${seo_config.site_name} preview`
			}
		]
	}: Props = $props();

	let canonical = $derived(
		new URL(page.url.pathname, `${seo_config.url}/`).href
	);
	let primaryImage = $derived(images[0]);
</script>

<MetaTags
	{title}
	{titleTemplate}
	{keywords}
	{description}
	{canonical}
	robots="index,follow"
	additionalRobotsProps={{
		maxSnippet: -1,
		maxImagePreview: "large",
		maxVideoPreview: -1
	}}
	openGraph={{
		type: "website",
		url: canonical,
		title,
		description,
		images,
		locale: "en_US",
		siteName: seo_config.site_name
	}}
	twitter={{
		creator: "@Sikandar_Bhide",
		site: "@Sikandar_Bhide",
		cardType: "summary_large_image",
		title,
		description,
		image: primaryImage?.url,
		imageAlt: primaryImage?.alt ?? seo_config.site_name
	}}
	additionalMetaTags={[
		{ name: "author", content: "Sikandar Bhide" },
		{ name: "application-name", content: seo_config.site_name }
	]}
/>

<JsonLd
	schema={{
		"@context": "https://schema.org",
		"@type": schemaType,
		name: title,
		description,
		url: canonical,
		inLanguage: "en",
		image: primaryImage?.url,
		isPartOf: {
			"@type": "WebSite",
			name: seo_config.site_name,
			url: seo_config.url
		},
		author: {
			"@type": "Person",
			name: "Sikandar Bhide",
			url: "https://bhide.dev"
		}
	}}
/>
