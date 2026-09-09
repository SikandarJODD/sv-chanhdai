import BrandAssetsMenuSvelteRaw from "$lib/components/chan/brand-assets-menu/brand-assets-menu.svelte?raw";
import IndexTsRaw from "$lib/components/chan/brand-assets-menu/index.ts?raw";

import type {
	ComponentDoc,
	ComponentMeta,
	InstallComponentDocs
} from "$lib/types/structure";
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
