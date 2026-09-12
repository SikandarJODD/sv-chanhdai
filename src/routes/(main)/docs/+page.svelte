<script lang="ts">
	import { page } from "$app/state";
	import CopyPageDropdown from "$lib/components/docs/base/main/copy-page-dropdown.svelte";
	import FaviconLink from "$lib/components/docs/base/main/favicon-link.svelte";
	import Seo from "$lib/components/docs/base/main/seo.svelte";
	import { H1, H2, Paragraph } from "$markdown";
	import { mode } from "mode-watcher";

	let getURLPath = (url: string) => {
		return url.split("?")[0].split("#")[0];
	};

	let llmsTxtUrl = $derived(`${getURLPath(page.url.href)}/llms.txt`);
	let faviconUrl = $derived.by(() => {
		if (mode.current === "dark") {
			return "https://assets.chanhdai.com/images/favicon-dark.svg";
		} else {
			return "https://assets.chanhdai.com/images/favicon.ico";
		}
	});
</script>

<Seo
	title="Introduction"
	description="Explore reusable Svelte components ported from Chánh Đại's original work."
	keywords={[
		"svelte components",
		"sveltekit",
		"Chánh Đại",
		"docs",
		"introduction"
	]}
/>

<div class="space-y-8">
	<section>
		<div
			class="flex flex-col justify-between gap-3 md:flex-row md:items-center md:gap-4"
		>
			<H1 id="introduction">Introduction</H1>
			<CopyPageDropdown componentName="Introduction" {llmsTxtUrl} />
		</div>
		<div class="mt-3 max-w-2xl">
			<Paragraph>
				A collection of reusable Svelte components ported from Chánh
				Đại's original work.
			</Paragraph>
		</div>
	</section>

	<section class="max-w-2xl">
		<H2 id="inspiration" class="mt-0">Inspiration</H2>
		<Paragraph>
			Inspired by the
			<FaviconLink
				href="https://chanhdai.com"
				target="_blank"
				rel="noreferrer"
				class="text-amber-500 bg-amber-50 px-1 rounded-sm dark:bg-amber-700/20 -ml-px"
				faviconSrc={faviconUrl}
			>
				Chánh Đại
			</FaviconLink>Portfolio. Ported to Svelte by
			<FaviconLink
				href="https://bhide.dev"
				target="_blank"
				rel="noreferrer"
				class="text-emerald-500 px-1 bg-emerald-50 dark:bg-emerald-700/20 rounded-sm -ml-px"
			>
				Bhide Svelte
			</FaviconLink>
		</Paragraph>
	</section>

	<!-- <section class="max-w-2xl">
		<H2 id="roadmap" class="mt-0">Roadmap</H2>
		<Paragraph>
			The collection currently includes {components.length} components. More
			components are coming soon.
		</Paragraph>
	</section> -->

	<section class="max-w-2xl">
		<H2 id="sponsor" class="mt-0">Sponsor</H2>
		<Paragraph>
			These components were originally created by
			<FaviconLink
				href="https://github.com/sponsors/ncdai"
				faviconSrc="https://github.com/favicon.ico"
				target="_blank"
				rel="noreferrer"
			>
				Chánh Đại
			</FaviconLink>
			. You can sponsor him to support his work.
			<br />
			They were ported to Svelte by
			<FaviconLink
				href="https://github.com/sponsors/SikandarJODD"
				faviconSrc="https://github.com/favicon.ico"
				target="_blank"
				rel="noreferrer"
			>
				Bhide Svelte
			</FaviconLink>
			. You can sponsor me to support the Svelte port.
		</Paragraph>
	</section>
</div>
