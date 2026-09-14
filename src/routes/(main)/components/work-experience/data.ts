import ExperienceItemSvelteRaw from "$lib/components/chan/work-experience/experience-item.svelte?raw";
import ExperiencePositionItemSvelteRaw from "$lib/components/chan/work-experience/experience-position-item.svelte?raw";
import IndexTsRaw from "$lib/components/chan/work-experience/index.ts?raw";
import ProseSvelteRaw from "$lib/components/chan/work-experience/prose.svelte?raw";
import ReactCodeMdRaw from "$lib/components/chan/work-experience/react-code.md?raw";
import SkillSvelteRaw from "$lib/components/chan/work-experience/skill.svelte?raw";
import WorkExperienceTypesTsRaw from "$lib/components/chan/work-experience/work-experience-types.ts?raw";
import WorkExperienceUtilsTsRaw from "$lib/components/chan/work-experience/work-experience-utils.ts?raw";
import WorkExperienceSvelteRaw from "$lib/components/chan/work-experience/work-experience.svelte?raw";

import type {
	ComponentDoc,
	ComponentMeta,
	InstallComponentDocs,
} from "$lib/types/structure";
import type { Example } from "$lib/types/example";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";
import DemoExample from "./examples/demo-example.svelte";
import DemoExampleRaw from "./examples/demo-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "work-experience",
	title: "Work Experience",
	description: "TODO: Add a concise description for Work Experience.",
	category: "chan",
};

const seo: SEO = {
	title: "Work Experience",
	description: "TODO: Add an SEO description for Work Experience.",
	keywords: ["Svelte", "Work Experience", "Component"],
};

const examples: Example[] = [
	{
		name: "Demo",
		preview: DemoExample,
		code: {
			name: "demo-example.svelte",
			code: DemoExampleRaw,
			lang: "svelte",
		},
	},
];

const install_block: InstallComponentDocs = {
	packages: [],
	install_code: [
		{ name: "experience-item.svelte", code: ExperienceItemSvelteRaw, lang: "svelte", isExpand: true, },
		{ name: "experience-position-item.svelte", code: ExperiencePositionItemSvelteRaw, lang: "svelte", },
		{ name: "index.ts", code: IndexTsRaw, lang: "typescript", },
		{ name: "prose.svelte", code: ProseSvelteRaw, lang: "svelte", },
		{ name: "react-code.md", code: ReactCodeMdRaw, lang: "markdown", },
		{ name: "skill.svelte", code: SkillSvelteRaw, lang: "svelte", },
		{ name: "work-experience-types.ts", code: WorkExperienceTypesTsRaw, lang: "typescript", },
		{ name: "work-experience-utils.ts", code: WorkExperienceUtilsTsRaw, lang: "typescript", },
		{ name: "work-experience.svelte", code: WorkExperienceSvelteRaw, lang: "svelte", }
	],
	folder_structure: "src/\n`-- lib/\n    `-- components/\n        `-- chan/\n            `-- work-experience/\n                |-- experience-item.svelte\n                |-- experience-position-item.svelte\n                |-- index.ts\n                |-- prose.svelte\n                |-- react-code.md\n                |-- skill.svelte\n                |-- work-experience-types.ts\n                |-- work-experience-utils.ts\n                `-- work-experience.svelte",
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	preview_code: {
		name: "preview.svelte",
		code: PreviewCode,
		lang: "svelte",
		hideLines: true,
	},
	install_block,
	examples,
	seo,
	props: [],
};
