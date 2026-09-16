import IndexTsRaw from "$lib/components/chan/line-nav/index.ts?raw";
import LineNavItemSvelteRaw from "$lib/components/chan/line-nav/line-nav-item.svelte?raw";
import LineNavSvelteRaw from "$lib/components/chan/line-nav/line-nav.svelte?raw";

import type {
	ComponentDoc,
	ComponentMeta,
	InstallComponentDocs
} from "$lib/types/structure";
import type { CodeBlock } from "$lib/types/code";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

export const meta: ComponentMeta = {
	id: "line-nav",
	title: "Line Nav",
	description: "Animated line navigation with active and hover states.",
	category: "chan"
};

const seo: SEO = {
	title: "Line Nav",
	description:
		"Animated line navigation for highlighting and linking to page sections in Svelte.",
	keywords: ["Svelte", "Line Nav", "Navigation", "Component"]
};

const usage: CodeBlock[] = [
	{
		name: "usage.svelte",
		code: `<script lang="ts">
	import { LineNav } from "$chan/line-nav";

	const items = [
		{ title: "Introduction", href: "#introduction" },
		{ title: "Installation", href: "#installation" },
		{ title: "Usage", href: "#usage" }
	];

	let activeHref = $state("#introduction");
</script>

<LineNav
	{items}
	{activeHref}
	onItemClick={(item) => (activeHref = item.href)}
/>`,
		lang: "svelte",
		isExpand: false
	}
];

const install_block: InstallComponentDocs = {
	packages: ["motion-sv"],
	install_code: [
		{
			name: "line-nav.svelte",
			code: LineNavSvelteRaw,
			lang: "svelte",
			isExpand: true
		},
		{
			name: "line-nav-item.svelte",
			code: LineNavItemSvelteRaw,
			lang: "svelte"
		},
		{ name: "index.ts", code: IndexTsRaw, lang: "typescript" }
	],
	folder_structure: ""
};

export const data: ComponentDoc = {
	...meta,
	features: [
		"Animated line length for active and hovered navigation items",
		"Controlled active state through activeHref and onItemClick",
		"Optional automatic scrolling to the active item on mount"
	],
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
			name: "LineNav",
			desc: "Animated navigation list for links to page sections.",
			props: [
				{
					name: "items",
					type: "LineNavItem[]",
					required: true,
					description: "Navigation items containing a title and href."
				},
				{
					name: "activeHref",
					type: "string",
					default: "undefined",
					description: "Href of the currently active item."
				},
				{
					name: "scrollActiveIntoView",
					type: "boolean",
					default: "true",
					description:
						"Scrolls the active item into view when the component mounts."
				},
				{
					name: "onItemClick",
					type: "(item: LineNavItem, event: MouseEvent) => void",
					default: "undefined",
					description: "Called when a navigation item is clicked."
				},
				{
					name: "class",
					type: "string",
					default: "undefined",
					description:
						"Additional classes applied to the navigation element."
				}
			]
		}
	]
};
