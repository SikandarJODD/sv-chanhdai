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
	title="Documentation"
	description="Learn how to install and use Svelte Chanhdai: free, reusable Svelte 5 UI components and animated blocks built with SvelteKit, Tailwind CSS, and shadcn-svelte."
	keywords={[
		"svelte components",
		"Svelte component documentation",
		"Svelte UI documentation",
		"Svelte 5 components",
		"SvelteKit UI",
		"reusable Svelte components",
		"Svelte animations",
		"shadcn-svelte",
		"Tailwind CSS",
		"component examples",
		"Chanhdai components",
		"Chánh Đại"
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
			Inspired by
			<FaviconLink
				href="https://chanhdai.com"
				target="_blank"
				rel="noreferrer"
				class="-ml-px rounded-sm bg-amber-50 px-1 text-amber-500 dark:bg-amber-700/20"
				faviconSrc={faviconUrl}
			>
				Chánh Đại's
			</FaviconLink>
			portfolio. Ported to Svelte by
			<FaviconLink
				href="https://bhide.dev"
				target="_blank"
				rel="noreferrer"
				class="-ml-px rounded-sm bg-emerald-50 px-1 text-emerald-500 dark:bg-emerald-700/20"
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
