<script lang="ts">
	import { page } from "$app/state";
	import { seo_config } from "#lib/config/seo.js";
	import { JsonLd, MetaTags } from "svelte-meta-tags";

	type Props = {
		title: string;
		description: string;
		keywords?: string[];
		titleTemplate?: string;
		schemaType?:
			| "WebPage"
			| "CollectionPage"
			| "TechArticle"
			| "AboutPage"
			| "WebSite";
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
				width: 1728,
				height: 910,
				alt: `${seo_config.site_name} preview`
			}
		]
	}: Props = $props();

	let canonical = $derived(
		new URL(page.url.pathname, `${seo_config.url}/`).href
	);
	let primaryImage = $derived(images[0]);
	let websiteId = `${seo_config.url}/#website`;
	let breadcrumbs = $derived.by(() => {
		if (page.url.pathname === "/") return [];

		let items = [{ name: "Home", item: `${seo_config.url}/` }];

		if (page.url.pathname.startsWith("/docs/")) {
			items.push({ name: "Documentation", item: `${seo_config.url}/docs` });
		}

		items.push({ name: title, item: canonical });
		return items;
	});
	let schema = $derived.by(() => {
		let website = {
			"@type": "WebSite",
			"@id": websiteId,
			url: `${seo_config.url}/`,
			name: seo_config.site_name,
			description: seo_config.description,
			inLanguage: "en"
		};

		if (schemaType === "WebSite") {
			return { "@context": "https://schema.org", "@graph": [website] };
		}

		let webpage = {
			"@type": schemaType,
			"@id": `${canonical}#webpage`,
			url: canonical,
			name: title,
			description,
			inLanguage: "en",
			isPartOf: { "@id": websiteId },
			image: primaryImage
				? {
						"@type": "ImageObject",
						url: primaryImage.url,
						width: primaryImage.width,
						height: primaryImage.height
					}
				: undefined,
			author: {
				"@type": "Person",
				name: "Sikandar Bhide",
				url: "https://bhide.dev"
			},
			...(schemaType === "TechArticle" ? { headline: title } : {})
		};

		let breadcrumb = {
			"@type": "BreadcrumbList",
			"@id": `${canonical}#breadcrumb`,
			itemListElement: breadcrumbs.map((item, index) => ({
				"@type": "ListItem",
				position: index + 1,
				name: item.name,
				item: item.item
			}))
		};

		return {
			"@context": "https://schema.org",
			"@graph": [website, webpage, breadcrumb]
		};
	});
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

<JsonLd {schema} />
