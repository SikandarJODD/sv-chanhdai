import IndexTsRaw from "$lib/components/chan/toc-minimap/index.ts?raw";
import TocMinimapSvelteRaw from "$lib/components/chan/toc-minimap/toc-minimap.svelte?raw";

import type {
	ComponentDoc,
	ComponentMeta,
	InstallComponentDocs
} from "$lib/types/structure";
import type { CodeBlock } from "$lib/types/code";
import type { Example } from "$lib/types/example";
import type { SEO } from "$lib/types/seo";
import ArticleOutline from "./examples/article-outline.svelte";
import ArticleOutlineCode from "./examples/article-outline.svelte?raw";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";
import StaticOutline from "./examples/static-outline.svelte";
import StaticOutlineCode from "./examples/static-outline.svelte?raw";

export const meta: ComponentMeta = {
	id: "toc-minimap",
	title: "Toc Minimap",
	description: "Navigate page headings with a compact, hoverable minimap.",
	category: "chan"
};

const seo: SEO = {
	title: "Toc Minimap",
	description:
		"Display a minimap of the table of contents for easy navigation.",
	keywords: ["Svelte", "Toc Minimap", "Component"]
};

const usage: CodeBlock[] = [
	{
		name: "usage.svelte",
		code: `<script lang="ts">
	import type { TOCItemType } from "$chan/toc-minimap";
	import { TOCMinimap } from "$chan/toc-minimap";

	const items: TOCItemType[] = [
		{ title: "Overview", url: "#overview", depth: 2 },
		{ title: "API reference", url: "#api-reference", depth: 2 }
	];
</script>

<TOCMinimap {items} />`,
		lang: "svelte",
		isExpand: false
	}
];

const examples: Example[] = [
	{
		name: "Static items",
		description: "Provide the minimap items directly for known headings.",
		preview: StaticOutline,
		code: {
			name: "static-outline.svelte",
			code: StaticOutlineCode,
			lang: "svelte"
		}
	},
	{
		name: "Generated from headings",
		description:
			"Generate minimap items from the headings rendered inside an article.",
		preview: ArticleOutline,
		code: {
			name: "article-outline.svelte",
			code: ArticleOutlineCode,
			lang: "svelte"
		}
	}
];

const install_block: InstallComponentDocs = {
	packages: [],
	install_code: [
		{
			name: "index.ts",
			code: IndexTsRaw,
			lang: "typescript",
			isExpand: true
		},
		{
			name: "toc-minimap.svelte",
			code: TocMinimapSvelteRaw,
			lang: "svelte"
		}
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
	examples,
	seo,
	props: []
};
