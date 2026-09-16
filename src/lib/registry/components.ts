export type BadgeType = "New" | "Updated" | "Beta";

export interface Component {
	id: string;
	name: string;
	href: string;
	badge?: BadgeType;
	desc?: string;
}

export interface DocPage {
	id: string;
	name: string;
	href: string;
	desc?: string;
}

let components: Component[] = [
	{
		id: "apple-hello-effect",
		name: "Apple Hello Effect",
		href: "/components/apple-hello-effect",
		desc: "Animated handwritten 'hello' text in multiple languages with a polished Apple-inspired motion effect."
	},
	{
		id: "brand-assets-menu",
		name: "Brand Assets Menu",
		href: "/components/brand-assets-menu",
		desc: "Context menu for copying brand SVGs and opening asset links."
	},
	{
		id: "chevrons-up-down-icon",
		name: "Chevrons Up Down Icon",
		href: "/components/chevrons-up-down-icon",
		desc: "Animated chevrons icon that morphs between up and down directions."
	},
	{
		id: "dot-grid-spotlight",
		name: "Dot Grid Spotlight",
		href: "/components/dot-grid-spotlight",
		desc: "Interactive dot grid with a cursor-tracking spotlight effect."
	},
	{
		id: "elastic-slider",
		name: "Elastic Slider",
		href: "/components/elastic-slider",
		desc: "Slider with elastic rubber-band drag and magnetic snap feedback."
	},
	{
		id: "github-contributions",
		name: "GitHub Contributions",
		href: "/components/github-contributions",
		desc: "Visualize year-long GitHub contribution activity with daily counts, tooltips, and a profile link."
	},
	{
		id: "github-stars",
		name: "GitHub Stars",
		href: "/components/github-stars",
		desc: "Display GitHub repo star count with formatted numbers and full-count tooltip."
	},
	{
		id: "glow-card-grid",
		name: "Glow Card Grid",
		href: "/components/glow-card-grid",
		desc: "Display cards with glowing border and background effects."
	},
	{
		id: "icon-swap",
		name: "Icon Swap",
		href: "/components/icon-swap",
		desc: "Animate icon swaps with scale, blur, and fade transitions."
	},
	{
		id: "middle-truncation",
		name: "Middle Truncation",
		href: "/components/middle-truncation",
		desc: "Truncate text in the middle while preserving start and end."
	},
	{
		id: "scroll-fade-effect",
		name: "Scroll Fade Effect",
		href: "/components/scroll-fade-effect",
		desc: "TODO: Add a concise description for Scroll Fade Effect."
	},
	{
		id: "share-menu",
		name: "Share Menu",
		href: "/components/share-menu",
		desc: "Share menu to copy a link or post to X, LinkedIn, and the native share sheet."
	},
	{
		id: "shimmering-text",
		name: "Shimmering Text",
		href: "/components/shimmering-text",
		desc: "TODO: Add a concise description for Shimmering Text."
	},
	{
		id: "slide-to-unlock",
		name: "Slide to Unlock",
		href: "/components/slide-to-unlock",
		desc: "Interactive slider inspired by the classic iPhone “slide to unlock” gesture."
	},
	{
		id: "spinning-circular-text",
		name: "Spinning Circular Text",
		href: "/components/spinning-circular-text",
		desc: "Text arranged in a circle with a continuous spinning animation."
	},
	{
		id: "status-button",
		name: "Status Button",
		href: "/components/status-button",
		desc: "A button that transitions through idle, loading, success, and failure states."
	},
	{
		id: "testimonial",
		name: "Testimonial",
		href: "/components/testimonial",
		desc: "Display user feedback with author info, avatar, and verified badge."
	},
	{
		id: "testimonial-2",
		name: "Testimonial 2",
		href: "/components/testimonial-2",
		desc: "Display a testimonial quote with author attribution and source link."
	},
	{
		id: "testimonial-spotlight",
		name: "Testimonial Spotlight",
		href: "/components/testimonial-spotlight",
		desc: "Testimonial card with spotlight effect on hover."
	},
	{
		id: "timescale",
		name: "Timescale",
		href: "/components/timescale",
		desc: "Ruler-style timeline for plotting milestones along a horizontal or vertical axis."
	},
	{
		id: "wheel-picker",
		name: "Wheel Picker",
		href: "/components/wheel-picker",
		desc: "iOS-like wheel picker for Svelte with smooth inertia scrolling and infinite loop support."
	},
	{
		id: "work-experience",
		name: "Work Experience",
		href: "/components/work-experience",
		desc: "Display work experiences with role details, company logos, and durations."
	},
	{
		id: "toc-minimap",
		name: "Toc Minimap",
		href: "/components/toc-minimap",
		desc: "Navigate page sections with a compact, hoverable TOC minimap."
	},
	{
		id: "line-nav",
		name: "Line Nav",
		href: "/components/line-nav",
		desc: "Vertical navigation with a line marker that expands on hover and active state."
	}
];

export { components };

let docsPages: DocPage[] = [
	{
		id: "docs",
		name: "Introduction",
		href: "/docs",
		desc: "Getting started with the setup."
	},
	{
		id: "installation",
		name: "Installation",
		href: "/docs/installation",
		desc: "Create the app and initialize shadcn-svelte."
	}
];

export { docsPages };

type NavigationItem = DocPage | Component;

function getNavigationItems(): NavigationItem[] {
	return [...docsPages, ...components];
}

export function getPrevNext(id: string): {
	prev: NavigationItem | null;
	next: NavigationItem | null;
} {
	let items = getNavigationItems();
	let index = items.findIndex((item) => item.id === id);
	if (index === -1) return { prev: null, next: null };
	return {
		prev: index > 0 ? items[index - 1] : null,
		next: index < items.length - 1 ? items[index + 1] : null
	};
}
