import IndexTsRaw from "$lib/components/chan/toc-minimap/index.ts?raw";
import ReactCodeMdRaw from "$lib/components/chan/toc-minimap/react-code.md?raw";
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

export const meta: ComponentMeta = {
	id: "toc-minimap",
	title: "Toc Minimap",
	description: "TODO: Add a concise description for Toc Minimap.",
	category: "chan"
};

const seo: SEO = {
	title: "Toc Minimap",
	description: "TODO: Add an SEO description for Toc Minimap.",
	keywords: ["Svelte", "Toc Minimap", "Component"]
};

const usage: CodeBlock[] = [
	{
		name: "usage.svelte",
		code: `<script lang="ts">
	import type { TOCItemType } from "$chan/toc-minimap";
	import { TOCMinimap } from "$chan/toc-minimap";

	const items: TOCItemType[] = [
		{ title: "Installation", url: "#installation", depth: 2 },
		{ title: "Usage", url: "#usage", depth: 2 },
		{ title: "API reference", url: "#api-reference", depth: 2 },
		{ title: "TOCMinimap", url: "#tocminimap", depth: 3 },
		{ title: "TOCItemType", url: "#tocitemtype", depth: 3 },
		{ title: "References", url: "#references", depth: 2 }
	];
</script>

<TOCMinimap {items} />`,
		lang: "svelte",
		isExpand: false
	}
];

const examples: Example[] = [
	{
		name: "Article outline",
		description: "Use the minimap beside a short article or project brief.",
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
		{ name: "react-code.md", code: ReactCodeMdRaw, lang: "markdown" },
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
