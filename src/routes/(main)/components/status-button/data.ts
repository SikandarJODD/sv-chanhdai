import IndexTsRaw from "$lib/components/chan/status-button/index.ts?raw";
import SpinnerSvelteRaw from "$lib/components/chan/status-button/spinner.svelte?raw";
import StatusButtonSvelteRaw from "$lib/components/chan/status-button/status-button.svelte?raw";

import type {
	ComponentDoc,
	ComponentMeta,
	InstallComponentDocs
} from "$lib/types/structure";
import type { CodeBlock } from "$lib/types/code";
import type { Example } from "$lib/types/example";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";
import BasicAsyncExample from "./examples/basic-async.svelte";
import BasicAsyncExampleCode from "./examples/basic-async.svelte?raw";
import ControlledStatusExample from "./examples/controlled-status.svelte";
import ControlledStatusExampleCode from "./examples/controlled-status.svelte?raw";
import CustomLabelsExample from "./examples/custom-labels.svelte";
import CustomLabelsExampleCode from "./examples/custom-labels.svelte?raw";
import FailedRetryExample from "./examples/failed-retry.svelte";
import FailedRetryExampleCode from "./examples/failed-retry.svelte?raw";
import StatusStylingExample from "./examples/status-styling.svelte";
import StatusStylingExampleCode from "./examples/status-styling.svelte?raw";
import UploadProgressExample from "./examples/upload-progress.svelte";
import UploadProgressExampleCode from "./examples/upload-progress.svelte?raw";

export const meta: ComponentMeta = {
	id: "status-button",
	title: "Status Button",
	description:
		"A button that transitions through idle, loading, success, and failure states with optional controlled behavior.",
	category: "chan"
};

const seo: SEO = {
	title: "Status Button",
	description:
		"Add async loading, success, and failure states to a button in Svelte with Status Button.",
	keywords: ["Svelte", "Status Button", "Component", "Async Button"]
};

const usage: CodeBlock[] = [
	{
		name: "usage.svelte",
		code: `<script lang="ts">
	import { StatusButton } from "$chan/status-button";

	async function saveChanges() {
		await new Promise((resolve) => setTimeout(resolve, 1000));
	}
</script>

<StatusButton onclick={saveChanges}>Save changes</StatusButton>`,
		lang: "svelte",
		isExpand: false
	}
];

const examples: Example[] = [
	{
		name: "Basic async",
		preview: BasicAsyncExample,
		code: {
			name: "basic-async.svelte",
			code: BasicAsyncExampleCode,
			lang: "svelte"
		}
	},
	{
		name: "Controlled status",
		preview: ControlledStatusExample,
		code: {
			name: "controlled-status.svelte",
			code: ControlledStatusExampleCode,
			lang: "svelte"
		}
	},
	{
		name: "Custom labels",
		preview: CustomLabelsExample,
		code: {
			name: "custom-labels.svelte",
			code: CustomLabelsExampleCode,
			lang: "svelte"
		}
	},
	{
		name: "Failed retry",
		preview: FailedRetryExample,
		code: {
			name: "failed-retry.svelte",
			code: FailedRetryExampleCode,
			lang: "svelte"
		}
	},
	{
		name: "Status styling",
		preview: StatusStylingExample,
		code: {
			name: "status-styling.svelte",
			code: StatusStylingExampleCode,
			lang: "svelte"
		}
	},
	{
		name: "Upload progress",
		preview: UploadProgressExample,
		code: {
			name: "upload-progress.svelte",
			code: UploadProgressExampleCode,
			lang: "svelte"
		}
	}
];

const install_block: InstallComponentDocs = {
	packages: ["@lucide/svelte", "motion-sv", "runed"],
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
	props: [
		{
			name: "StatusButton",
			desc: "Async button with loading, success, and failure transitions.",
			props: [
				{
					name: "children",
					type: "Snippet",
					default: "''",
					description:
						"The default label content shown while the button is idle."
				},
				{
					name: "onclick",
					type: "(event: MouseEvent) => void | Promise<void>",
					default: "undefined",
					description:
						"Async action that runs on click and automatically flips the button into the loading state."
				},
				{
					name: "status",
					type: "ButtonStatus",
					default: "undefined",
					description:
						"Controlled state override for external status management."
				},
				{
					name: "onStatusChange",
					type: "(status: ButtonStatus) => void",
					default: "undefined",
					description:
						"Called whenever the button changes between idle, loading, success, and failed states."
				},
				{
					name: "onError",
					type: "(error: unknown) => void",
					default: "undefined",
					description:
						"Called when the action rejects during an async click."
				},
				{
					name: "loadingLabel",
					type: "Snippet",
					default: "undefined",
					description:
						"Custom content shown while the button is in the loading state."
				},
				{
					name: "successLabel",
					type: "Snippet",
					default: "undefined",
					description:
						"Custom content shown while the button is in the success state."
				},
				{
					name: "successDuration",
					type: "number",
					default: "1500",
					description:
						"How long the success state remains visible before returning to idle."
				},
				{
					name: "failedLabel",
					type: "Snippet",
					default: "undefined",
					description:
						"Custom content shown while the button is in the failed state."
				},
				{
					name: "failedDuration",
					type: "number",
					default: "2500",
					description:
						"How long the failed state remains visible before returning to idle."
				},
				{
					name: "class",
					type: "string",
					default: "''",
					description:
						"Additional classes applied to the underlying button."
				},
				{
					name: "variant",
					type: "ButtonVariant",
					default: "undefined",
					description:
						"Style variant passed through to the underlying button."
				}
			]
		}
	]
};
