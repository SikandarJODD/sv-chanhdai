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
		id: "apple-carousel",
		name: "Apple Carousel",
		href: "/components/apple-carousel",
		badge: "New",
		desc: "An infinite Svelte carousel with autoplay, progress dots, captions, and tab controls."
	},
	{
		id: "apple-hello-effect",
		name: "Apple Hello Effect",
		href: "/components/apple-hello-effect",
		desc: "A multilingual hello animation for Svelte with configurable text, colors, timing, and motion."
	},
	{
		id: "brand-assets-menu",
		name: "Brand Assets Menu",
		href: "/components/brand-assets-menu",
		desc: "A context menu for copying brand SVGs or opening their asset links."
	},
	{
		id: "chevrons-up-down-icon",
		name: "Chevrons Up Down Icon",
		href: "/components/chevrons-up-down-icon",
		desc: "An animated Svelte icon that morphs between up and down chevrons."
	},
	{
		id: "copy-button",
		name: "Copy Button",
		href: "/components/copy-button",
		desc: "A Svelte copy button with animated success and error feedback."
	},
	{
		id: "dot-grid-spotlight",
		name: "Dot Grid Spotlight",
		href: "/components/dot-grid-spotlight",
		desc: "A dot-grid background with a spotlight that follows the pointer."
	},
	{
		id: "elastic-slider",
		name: "Elastic Slider",
		href: "/components/elastic-slider",
		badge: "New",
		desc: "A slider with rubber-band dragging, step support, value formatting, and keyboard controls."
	},
	{
		id: "github-contributions",
		name: "GitHub Contributions",
		href: "/components/github-contributions",
		desc: "A year-long GitHub contribution calendar with daily counts, tooltips, themes, and profile links."
	},
	{
		id: "github-stars",
		name: "GitHub Stars",
		href: "/components/github-stars",
		desc: "A GitHub repository star count with compact formatting and a tooltip for the exact total."
	},
	{
		id: "glow-card-grid",
		name: "Glow Card Grid",
		href: "/components/glow-card-grid",
		desc: "A responsive card grid with pointer-driven glow effects on card borders and backgrounds."
	},
	{
		id: "icon-swap",
		name: "Icon Swap",
		href: "/components/icon-swap",
		desc: "Animate icon changes with scale, blur, and opacity transitions."
	},
	{
		id: "line-nav",
		name: "Line Nav",
		href: "/components/line-nav",
		badge: "New",
		desc: "Vertical navigation with an animated line marker for hover and active states."
	},
	{
		id: "middle-truncation",
		name: "Middle Truncation",
		href: "/components/middle-truncation",
		desc: "Truncate text in the middle while preserving its beginning and ending."
	},
	// {
	// 	id: "scroll-fade-effect",
	// 	name: "Scroll Fade Effect",
	// 	href: "/components/scroll-fade-effect",
	// 	desc: "TODO: Add a concise description for Scroll Fade Effect."
	// },
	{
		id: "share-menu",
		name: "Share Menu",
		href: "/components/share-menu",
		desc: "A share menu for copying links or posting through X, LinkedIn, and the native share sheet."
	},
	// {
	// 	id: "shimmering-text",
	// 	name: "Shimmering Text",
	// 	href: "/components/shimmering-text",
	// 	desc: "TODO: Add a concise description for Shimmering Text."
	// },
	{
		id: "slide-to-unlock",
		name: "Slide to Unlock",
		href: "/components/slide-to-unlock",
		badge: "New",
		desc: "A drag-to-confirm control inspired by the original iPhone slide-to-unlock gesture."
	},
	{
		id: "spinning-circular-text",
		name: "Spinning Circular Text",
		href: "/components/spinning-circular-text",
		desc: "Text arranged in a circle with a continuous rotation animation."
	},
	{
		id: "status-button",
		name: "Status Button",
		href: "/components/status-button",
		desc: "An async Svelte button with idle, loading, success, failure, and controlled states."
	},
	{
		id: "swipe-actions",
		name: "Swipe Actions",
		href: "/components/swipe-actions",
		badge: "New",
		desc: "Swipe a list row left or right to reveal configurable actions."
	},
	{
		id: "testimonial",
		name: "Testimonial",
		href: "/components/testimonial",
		desc: "Composable testimonial primitives for quotes, author details, avatars, and verified badges."
	},
	{
		id: "testimonial-2",
		name: "Testimonial Quote",
		href: "/components/testimonial-2",
		desc: "A compact testimonial quote with the author's name, tagline, and original source link."
	},
	{
		id: "testimonial-spotlight",
		name: "Testimonial Spotlight",
		href: "/components/testimonial-spotlight",
		desc: "A composable testimonial container with a pointer-following radial spotlight."
	},
	{
		id: "timescale",
		name: "Timescale",
		href: "/components/timescale",
		desc: "A ruler-style timeline for plotting milestones along a horizontal or vertical axis."
	},
	{
		id: "toc-minimap",
		name: "TOC Minimap",
		href: "/components/toc-minimap",
		badge: "New",
		desc: "A compact table-of-contents minimap that links to headings and expands on hover."
	},
	{
		id: "wheel-picker",
		name: "Wheel Picker",
		href: "/components/wheel-picker",
		badge: "New",
		desc: "An iOS-style Svelte wheel picker with inertial scrolling, keyboard controls, and optional infinite looping."
	},
	{
		id: "work-experience",
		name: "Work Experience",
		href: "/components/work-experience",
		desc: "A work-history timeline for roles, companies, dates, descriptions, and related links."
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
