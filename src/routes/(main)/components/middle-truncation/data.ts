import IndexTsRaw from "$lib/components/chan/middle-truncation/index.ts?raw";
import MiddleTruncationSvelteRaw from "$lib/components/chan/middle-truncation/middle-truncation.svelte?raw";
import MiddleTruncationTsRaw from "$lib/components/chan/middle-truncation/middle-truncation.ts?raw";

import type {
	ComponentDoc,
	ComponentMeta,
	InstallComponentDocs
} from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

export const meta: ComponentMeta = {
	id: "middle-truncation",
	title: "Middle Truncation",
	description: "Truncate text in the middle while preserving start and end.",
	category: "chan"
};

const seo: SEO = {
	title: "Middle Truncation",
	description: "Truncate text in the middle while preserving start and end.",
	keywords: ["Svelte", "Middle Truncation", "Component"]
};

const install_block: InstallComponentDocs = {
	packages: ["runed"],
	install_code: [
		{
			name: "index.ts",
			code: IndexTsRaw,
			lang: "typescript",
			isExpand: true
		},
		{
			name: "middle-truncation.svelte",
			code: MiddleTruncationSvelteRaw,
			lang: "svelte"
		},
		{
			name: "middle-truncation.ts",
			code: MiddleTruncationTsRaw,
			lang: "typescript"
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
	seo,
	props: [
		{
			name: "MiddleTruncation",
			desc: "Responsive middle truncation for a single line of text.",
			props: [
				{
					name: "text",
					type: "string",
					required: true,
					description: "Text content to truncate."
				},
				{
					name: "ellipsis",
					type: "string",
					default: "'...'",
					description: "Custom separator shown between the preserved text segments."
				},
				{
					name: "end",
					type: "number",
					default: "undefined",
					description: "Fixed number of characters preserved at the end; cannot be combined with minEnd."
				},
				{
					name: "minEnd",
					type: "number",
					default: "undefined",
					description: "Minimum trailing characters preserved during an even split; cannot be combined with end."
				},
				{
					name: "class",
					type: "string",
					default: "undefined",
					description: "Additional classes applied to the wrapper span."
				}
			]
		}
	]
};
