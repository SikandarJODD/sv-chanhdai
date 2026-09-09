import ElasticSliderStateSvelteTsRaw from "$lib/components/chan/elastic-slider/elastic-slider-state.svelte.ts?raw";
import ElasticSliderSvelteRaw from "$lib/components/chan/elastic-slider/elastic-slider.svelte?raw";
import ElasticSliderUtilsTsRaw from "$lib/components/chan/elastic-slider/elastic-slider.utils.ts?raw";
import IndexTsRaw from "$lib/components/chan/elastic-slider/index.ts?raw";

import type {
	ComponentDoc,
	ComponentMeta,
	InstallComponentDocs
} from "$lib/types/structure";
import type { CodeBlock } from "$lib/types/code";
import type { Example } from "$lib/types/example";
import type { SEO } from "$lib/types/seo";
import ControlledValueExample from "./examples/controlled-value.svelte";
import ControlledValueExampleCode from "./examples/controlled-value.svelte?raw";
import CurrencyFormattingExample from "./examples/currency-formatting.svelte";
import CurrencyFormattingExampleCode from "./examples/currency-formatting.svelte?raw";
import DefaultValueExample from "./examples/default-value.svelte";
import DefaultValueExampleCode from "./examples/default-value.svelte?raw";
import DiscreteStepsExample from "./examples/discrete-steps.svelte";
import DiscreteStepsExampleCode from "./examples/discrete-steps.svelte?raw";
import LiveUiControlExample from "./examples/live-ui-control.svelte";
import LiveUiControlExampleCode from "./examples/live-ui-control.svelte?raw";
import NegativeRangeExample from "./examples/negative-range.svelte";
import NegativeRangeExampleCode from "./examples/negative-range.svelte?raw";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";
import UnitsAndPrecisionExample from "./examples/units-and-precision.svelte";
import UnitsAndPrecisionExampleCode from "./examples/units-and-precision.svelte?raw";

export const meta: ComponentMeta = {
	id: "elastic-slider",
	title: "Elastic Slider",
	description:
		"Slider with elastic rubber-band drag and magnetic snap feedback.",
	category: "chan"
};

const seo: SEO = {
	title: "Elastic Slider",
	description:
		"Slider with elastic rubber-band drag and magnetic snap feedback.",
	keywords: ["Svelte", "Elastic Slider", "Component"]
};

const usage: CodeBlock[] = [
	{
		name: "usage.svelte",
		code: `<script lang="ts">
	import { ElasticSlider } from "$chan/elastic-slider";
</script>

<ElasticSlider
	label="Volume"
	min={0}
	max={100}
	step={1}
	defaultValue={50}
/>`,
		lang: "svelte",
		isExpand: false
	}
];

const examples: Example[] = [
	{
		name: "Default value",
		description:
			"Set the initial value while letting the slider manage its own state.",
		preview: DefaultValueExample,
		code: {
			name: "default-value.svelte",
			code: DefaultValueExampleCode,
			lang: "svelte"
		}
	},
	{
		name: "Controlled value",
		description:
			"Keep the value in parent state with value and onValueChange.",
		preview: ControlledValueExample,
		code: {
			name: "controlled-value.svelte",
			code: ControlledValueExampleCode,
			lang: "svelte"
		}
	},
	{
		name: "Currency formatting",
		description: "Format the displayed value with Intl.NumberFormat.",
		preview: CurrencyFormattingExample,
		code: {
			name: "currency-formatting.svelte",
			code: CurrencyFormattingExampleCode,
			lang: "svelte"
		}
	},
	{
		name: "Units and precision",
		description:
			"Combine a fractional step with a custom unit and fixed precision.",
		preview: UnitsAndPrecisionExample,
		code: {
			name: "units-and-precision.svelte",
			code: UnitsAndPrecisionExampleCode,
			lang: "svelte"
		}
	},
	{
		name: "Discrete steps",
		description: "Use a short integer range for exact, visible stops.",
		preview: DiscreteStepsExample,
		code: {
			name: "discrete-steps.svelte",
			code: DiscreteStepsExampleCode,
			lang: "svelte"
		}
	},
	{
		name: "Negative range",
		description:
			"Configure a range that spans values below and above zero.",
		preview: NegativeRangeExample,
		code: {
			name: "negative-range.svelte",
			code: NegativeRangeExampleCode,
			lang: "svelte"
		}
	},
	{
		name: "Live UI control",
		description: "Connect multiple controlled sliders to a visual preview.",
		preview: LiveUiControlExample,
		previewClass: "p-6 sm:p-10",
		code: {
			name: "live-ui-control.svelte",
			code: LiveUiControlExampleCode,
			lang: "svelte"
		}
	}
];

const install_block: InstallComponentDocs = {
	packages: ["motion-sv", "runed"],
	install_code: [
		{
			name: "elastic-slider-state.svelte.ts",
			code: ElasticSliderStateSvelteTsRaw,
			lang: "typescript",
			isExpand: true
		},
		{
			name: "elastic-slider.svelte",
			code: ElasticSliderSvelteRaw,
			lang: "svelte"
		},
		{
			name: "elastic-slider.utils.ts",
			code: ElasticSliderUtilsTsRaw,
			lang: "typescript"
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
	examples,
	seo,
	props: [
		{
			name: "ElasticSlider",
			desc: "Controlled or uncontrolled elastic value slider.",
			props: [
				{
					name: "label",
					type: "string",
					required: true,
					description: "Label displayed inside the slider track."
				},
				{
					name: "value",
					type: "number",
					default: "undefined",
					description: "Controlled slider value."
				},
				{
					name: "defaultValue",
					type: "number",
					default: "min",
					description:
						"Initial value when the slider is uncontrolled."
				},
				{
					name: "onValueChange",
					type: "(value: number) => void",
					default: "undefined",
					description:
						"Called after drag, click, or keyboard interaction changes the value."
				},
				{
					name: "min",
					type: "number",
					default: "0",
					description: "Minimum allowed value."
				},
				{
					name: "max",
					type: "number",
					default: "1",
					description: "Maximum allowed value."
				},
				{
					name: "step",
					type: "number",
					default: "0.01",
					description: "Increment used when snapping values."
				},
				{
					name: "formatValue",
					type: "(value: number) => string",
					default: "undefined",
					description: "Formats the value displayed in the track."
				},
				{
					name: "ref",
					type: "HTMLDivElement | null",
					default: "null",
					description:
						"Bindable reference to the outer slider element."
				},
				{
					name: "class",
					type: "string",
					default: "undefined",
					description: "Additional classes applied to the slider."
				}
			]
		}
	]
};
