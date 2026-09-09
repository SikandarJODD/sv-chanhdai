import IndexTsRaw from "$lib/components/chan/middle-truncation/index.ts?raw";
import MiddleTruncationSvelteRaw from "$lib/components/chan/middle-truncation/middle-truncation.svelte?raw";
import MiddleTruncationTsRaw from "$lib/components/chan/middle-truncation/middle-truncation.ts?raw";

import type {
	ComponentDoc,
	ComponentMeta,
	InstallComponentDocs
} from "$lib/types/structure";
import type { Example } from "$lib/types/example";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";
import DemoExample from "./examples/demo-example.svelte";
import DemoExampleRaw from "./examples/demo-example.svelte?raw";

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

const examples: Example[] = [
	{
		name: "Demo",
		preview: DemoExample,
		code: {
			name: "demo-example.svelte",
			code: DemoExampleRaw,
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
	folder_structure:
		"src/\n`-- lib/\n    `-- components/\n        `-- chan/\n            `-- middle-truncation/\n                |-- index.ts\n                |-- middle-truncation.svelte\n                `-- middle-truncation.ts"
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
	examples,
	seo,
	props: []
};
