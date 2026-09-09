import type { Component } from "svelte";
import type { Example } from "./example";
import type { SEO } from "./seo";
import type { CodeBlock } from "./code";

export type ComponentBadge = "new" | "beta" | "updated" | "deprecated";

export type ComponentMeta = {
	id: string;
	title: string;
	description: string;
	category?: string;
	badge?: ComponentBadge;
};

export type PropDef = {
	name: string;
	type: string;
	default?: string;
	required?: boolean;
	description?: string;
};

export type PropsTable = {
	name?: string;
	desc?: string;
	props: PropDef[];
};

export type InstallComponentDocs = {
	install_code?: CodeBlock | CodeBlock[];
	tailwind?: CodeBlock;
	folder_structure?: string;
	packages?: string[];
};

export type ComponentPreview = {
	class?: string;
	show_retry?: boolean;
	component?: Component;
	code?: CodeBlock | CodeBlock[];
};

export type ComponentDoc = ComponentMeta & {
	/** @deprecated Use `preview_config.preview_component` instead. */
	preview?: Component;
	preview_config?: ComponentPreview;
	/** @deprecated Use `preview_config.code` instead. */
	preview_code?: CodeBlock | CodeBlock[];
	/** @deprecated Use `preview_config.class` instead. */
	preview_class?: string;
	features?: string[];
	usage?: CodeBlock[];
	install_block?: InstallComponentDocs;
	examples?: Example[];
	seo: SEO;
	props?: PropsTable[];
	folder_structure?: string;
};
