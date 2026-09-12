import GlowCardGridSvelteRaw from "$lib/components/chan/glow-card-grid/glow-card-grid.svelte?raw";
import GlowCardSvelteRaw from "$lib/components/chan/glow-card-grid/glow-card.svelte?raw";
import IndexTsRaw from "$lib/components/chan/glow-card-grid/index.ts?raw";

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
	id: "glow-card-grid",
	title: "Glow Card Grid",
	description: "Display cards with glowing border and background effects.",
	category: "chan"
};

const seo: SEO = {
	title: "Glow Card Grid",
	description: "Display cards with glowing border and background effects.",
	keywords: ["Svelte", "Glow Card Grid", "Component"]
};

const usage: CodeBlock[] = [
	{
		name: "usage.svelte",
		code: `<script lang="ts">
	import { GlowCard, GlowCardGrid } from "$chan/glow-card-grid";
</script>

<GlowCardGrid>
	<GlowCard
		name="Chánh Đại"
		handle="@iamncdai"
		avatar="https://unavatar.io/x/iamncdai"
	/>
</GlowCardGrid>`,
		lang: "svelte",
		isExpand: false
	}
];

const install_block: InstallComponentDocs = {
	packages: [],
	install_code: [
		{
			name: "glow-card-grid.svelte",
			code: GlowCardGridSvelteRaw,
			lang: "svelte",
			isExpand: true
		},
		{ name: "glow-card.svelte", code: GlowCardSvelteRaw, lang: "svelte" },
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
			name: "GlowCardGrid",
			desc: "Grid provider that controls the shared pointer glow styles.",
			props: [
				{
					name: "children",
					type: "Snippet",
					required: true,
					description: "Glow cards rendered inside the grid."
				},
				{
					name: "cardRadius",
					type: "number",
					default: "16",
					description: "Card corner radius in pixels."
				},
				{
					name: "iconBlur",
					type: "number",
					default: "25",
					description: "Blur radius applied to the moving background image."
				},
				{
					name: "iconSaturate",
					type: "number",
					default: "5",
					description: "Saturation multiplier for the background image."
				},
				{
					name: "iconBrightness",
					type: "number",
					default: "1.3",
					description: "Brightness multiplier for the background image."
				},
				{
					name: "iconScale",
					type: "number",
					default: "4",
					description: "Scale applied to the moving background image."
				},
				{
					name: "iconOpacity",
					type: "number",
					default: "0.3",
					description: "Opacity of the moving background image."
				},
				{
					name: "borderWidth",
					type: "number",
					default: "3",
					description: "Width of the glowing border in pixels."
				},
				{
					name: "borderBlur",
					type: "number",
					default: "10",
					description: "Backdrop blur applied to the glowing border."
				},
				{
					name: "borderSaturate",
					type: "number",
					default: "4.2",
					description: "Backdrop saturation multiplier for the border."
				},
				{
					name: "borderBrightness",
					type: "number",
					default: "2.5",
					description: "Backdrop brightness multiplier for the border."
				},
				{
					name: "borderContrast",
					type: "number",
					default: "2.5",
					description: "Backdrop contrast multiplier for the border."
				},
				{
					name: "ref",
					type: "HTMLDivElement | null",
					default: "null",
					description: "Bindable reference to the grid element."
				},
				{
					name: "class",
					type: "string",
					default: "undefined",
					description: "Additional classes applied to the grid."
				}
			]
		},
		{
			name: "GlowCard",
			desc: "Profile card rendered within a GlowCardGrid.",
			props: [
				{
					name: "name",
					type: "string",
					required: true,
					description: "Display name shown on the card."
				},
				{
					name: "handle",
					type: "string",
					required: true,
					description: "Secondary handle shown below the name."
				},
				{
					name: "avatar",
					type: "string",
					required: true,
					description: "Avatar image URL used by the card and glow effect."
				},
				{
					name: "class",
					type: "string",
					default: "undefined",
					description: "Additional classes applied to the card."
				}
			]
		}
	]
};
