import CopyButtonSvelteRaw from "$lib/components/chan/copy-button/copy-button.svelte?raw";
import CopyStateIconSvelteRaw from "$lib/components/chan/copy-button/copy-state-icon.svelte?raw";
import IndexTsRaw from "$lib/components/chan/copy-button/index.ts?raw";

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
	id: "copy-button",
	title: "Copy Button",
	description: "Copy text to the clipboard with animated status feedback.",
	category: "chan"
};

const seo: SEO = {
	title: "Copy Button",
	description: "A Svelte copy button with animated success and error states.",
	keywords: ["Svelte", "Copy Button", "Component"]
};

const usage: CodeBlock[] = [
	{
		name: "usage.svelte",
		code: `<script lang="ts">
	import { CopyButton } from "$chan/copy-button";
</script>

<CopyButton text="Hello, world!">Copy</CopyButton>`,
		lang: "svelte",
		isExpand: false
	}
];

const install_block: InstallComponentDocs = {
	packages: [],
	install_code: [
		{
			name: "copy-button.svelte",
			code: CopyButtonSvelteRaw,
			lang: "svelte",
			isExpand: true
		},
		{
			name: "copy-state-icon.svelte",
			code: CopyStateIconSvelteRaw,
			lang: "svelte"
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
			name: "CopyButton",
			desc: "Button that copies text and displays animated status feedback.",
			props: [
				{
					name: "text",
					type: "string | (() => string)",
					required: true,
					description: "Text to copy, or a function that returns it."
				},
				{
					name: "children",
					type: "Snippet",
					default: "undefined",
					description:
						"Optional label rendered beside the status icon."
				},
				{
					name: "idleIcon",
					type: "Snippet",
					default: "undefined",
					description:
						"Custom icon shown before the copy action. Defaults to CopyIcon."
				},
				{
					name: "doneIcon",
					type: "Snippet",
					default: "undefined",
					description:
						"Custom icon shown after a successful copy. Defaults to CheckIcon."
				},
				{
					name: "errorIcon",
					type: "Snippet",
					default: "undefined",
					description:
						"Custom icon shown when copying fails. Defaults to CircleXIcon."
				},
				{
					name: "onCopySuccess",
					type: "(text: string) => void",
					default: "undefined",
					description:
						"Called with the copied text after a successful copy."
				},
				{
					name: "onCopyError",
					type: "(error: Error) => void",
					default: "undefined",
					description: "Called when the copy operation fails."
				},
				{
					name: "onclick",
					type: "(event: MouseEvent) => void",
					default: "undefined",
					description: "Called after the copy action starts."
				},
				{
					name: "variant",
					type: "ButtonVariant",
					default: "'default'",
					description:
						"Visual style inherited from the Button component."
				},
				{
					name: "size",
					type: "ButtonSize",
					default: "'icon'",
					description: "Button size."
				},
				{
					name: "class",
					type: "string",
					default: "undefined",
					description: "Additional classes applied to the button."
				},
				{
					name: "aria-label",
					type: "string",
					default: "'Copy'",
					description: "Accessible label for the button."
				}
			]
		}
	]
};
