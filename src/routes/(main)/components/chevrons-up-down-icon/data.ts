import ChevronsUpDownIconSvelteRaw from "$lib/components/chan/chevrons-up-down-icon/chevrons-up-down-icon.svelte?raw";
import IndexTsRaw from "$lib/components/chan/chevrons-up-down-icon/index.ts?raw";

import type {
	ComponentDoc,
	ComponentMeta,
	InstallComponentDocs
} from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

export const meta: ComponentMeta = {
	id: "chevrons-up-down-icon",
	title: "Chevrons Up Down Icon",
	description:
		"Animated chevrons icon that morphs between up and down directions.",
	category: "chan"
};

const seo: SEO = {
	title: "Chevrons Up Down Icon",
	description:
		"Animated chevrons icon that morphs between up and down directions.",
	keywords: ["Svelte", "Chevrons Up Down Icon", "Component"]
};

const install_block: InstallComponentDocs = {
	packages: ["motion-sv"],
	install_code: [
		{
			name: "chevrons-up-down-icon.svelte",
			code: ChevronsUpDownIconSvelteRaw,
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
			name: "ChevronsUpDownIcon",
			desc: "Animated SVG chevrons controlled through the component handle.",
			props: [
				{
					name: "duration",
					type: "number",
					default: "0.3",
					description: "Duration of the path morph animation in seconds."
				},
				{
					name: "ref",
					type: "SVGSVGElement | null",
					default: "null",
					description: "Bindable reference to the SVG element."
				},
				{
					name: "class",
					type: "string",
					default: "undefined",
					description: "Additional classes applied to the SVG element."
				}
			]
		}
	]
};
