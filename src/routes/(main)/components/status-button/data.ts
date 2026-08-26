import IndexTsRaw from "$lib/components/chan/status-button/index.ts?raw";
import SpinnerSvelteRaw from "$lib/components/chan/status-button/spinner.svelte?raw";
import StatusButtonSvelteRaw from "$lib/components/chan/status-button/status-button.svelte?raw";

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
	id: "status-button",
	title: "Status Button",
	description:
		"A button that shows loading and success feedback for async actions.",
	category: "chan"
};

const seo: SEO = {
	title: "Status Button",
	description:
		"Button that shows loading and success feedback for async actions.",
	keywords: ["Svelte", "Status Button", "Component"]
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
		{ name: "spinner.svelte", code: SpinnerSvelteRaw, lang: "svelte" },
		{
			name: "status-button.svelte",
			code: StatusButtonSvelteRaw,
			lang: "svelte"
		}
	],
	folder_structure:
		"src/\n`-- lib/\n    `-- components/\n        `-- chan/\n            `-- status-button/\n                |-- index.ts\n                |-- spinner.svelte\n                `-- status-button.svelte"
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
