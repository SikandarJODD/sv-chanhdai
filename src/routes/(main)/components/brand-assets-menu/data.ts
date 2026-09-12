import BrandAssetsMenuSvelteRaw from "$lib/components/chan/brand-assets-menu/brand-assets-menu.svelte?raw";
import IndexTsRaw from "$lib/components/chan/brand-assets-menu/index.ts?raw";

import type {
	ComponentDoc,
	ComponentMeta,
	InstallComponentDocs
} from "$lib/types/structure";
import type { CodeBlock } from "$lib/types/code";
import type { Example } from "$lib/types/example";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

export const meta: ComponentMeta = {
	id: "brand-assets-menu",
	title: "Brand Assets Menu",
	description: "Context menu for copying brand SVGs and opening asset links.",
	category: "chan"
};

const seo: SEO = {
	title: "Brand Assets Menu",
	description: "Context menu for copying brand SVGs and opening asset links.",
	keywords: ["Svelte", "Brand Assets Menu", "Component"]
};

const usage: CodeBlock[] = [
	{
		name: "usage.svelte",
		code: `<script lang="ts">
	import { BrandAssetsMenu } from "$chan/brand-assets-menu";

	const LOGOMARK_SVG = '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>';
	const LOGOTYPE_SVG = '<svg viewBox="0 0 120 24"><text x="0" y="18">Acme</text></svg>';
</script>

{#snippet logomark()}
	<span class="size-4 rounded-full bg-current"></span>
{/snippet}

<BrandAssetsMenu
	{logomark}
	logomarkSVG={LOGOMARK_SVG}
	logotypeSVG={LOGOTYPE_SVG}
	brandGuidelinesURL="/brand-guidelines"
	brandAssetsURL="/brand-assets.zip"
>
	{#snippet children({ props })}
		<button type="button" {...props}>Brand assets</button>
	{/snippet}
</BrandAssetsMenu>`,
		lang: "svelte",
		isExpand: false
	}
];

const install_block: InstallComponentDocs = {
	packages: ["@lucide/svelte", "svelte-sonner"],
	install_code: [
		{
			name: "brand-assets-menu.svelte",
			code: BrandAssetsMenuSvelteRaw,
			lang: "svelte",
			isExpand: true
		},
		{ name: "index.ts", code: IndexTsRaw, lang: "typescript" }
	],
	folder_structure: ""
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	preview_code: {
		name: "preview.svelte",
		code: PreviewCode,
		lang: "svelte",
		hideLines: true
	},
	install_block,
	usage,
	seo,
	props: [
		{
			name: "BrandAssetsMenu",
			desc: "Context menu for copying brand SVGs and opening asset links.",
			props: [
				{
					name: "logomark",
					type: "Snippet",
					default: "undefined",
					description:
						"Custom logomark content displayed within the copy menu item."
				},
				{
					name: "logomarkSVG",
					type: "string",
					default: "undefined",
					description:
						"SVG markup used when the user copies the logomark to the clipboard."
				},
				{
					name: "logotypeSVG",
					type: "string",
					default: "undefined",
					description:
						"SVG markup used when the user copies the logotype to the clipboard."
				},
				{
					name: "brandGuidelinesURL",
					type: "string",
					default: "undefined",
					description:
						"URL for the brand guidelines page opened in a new tab."
				},
				{
					name: "brandAssetsURL",
					type: "string",
					default: "undefined",
					description: "URL used for the brand assets download link."
				},
				{
					name: "children",
					type: "Snippet<{ props: Record<string, unknown> }>",
					default: "undefined",
					description:
						"Render prop used to attach the trigger element and menu props to the custom trigger content."
				}
			]
		}
	]
};
