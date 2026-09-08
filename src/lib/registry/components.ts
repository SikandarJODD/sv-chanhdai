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
		id: "status-button",
		name: "Status Button",
		href: "/components/status-button",
		desc: "TODO: Add a concise description for Status Button."
	},
	// {
	//   id: "scroll-fade-effect",
	//   name: "Scroll Fade Effect",
	//   href: "/components/scroll-fade-effect",
	//   desc: "TODO: Add a concise description for Scroll Fade Effect.",
	// },
	{
		id: "apple-hello-effect",
		name: "Apple Hello Effect",
		href: "/components/apple-hello-effect",
		desc: "TODO: Add a concise description for Apple Hello Effect."
	},
	{
		id: "brand-assets-menu",
		name: "Brand Assets Menu",
		href: "/components/brand-assets-menu",
		desc: "TODO: Add a concise description for Brand Assets Menu."
	},
	{
		id: "chevrons-up-down-icon",
		name: "Chevrons Up Down Icon",
		href: "/components/chevrons-up-down-icon",
		desc: "TODO: Add a concise description for Chevrons Up Down Icon."
	},
	{
		id: "dot-grid-spotlight",
		name: "Dot Grid Spotlight",
		href: "/components/dot-grid-spotlight",
		desc: "TODO: Add a concise description for Dot Grid Spotlight."
	},
	{
		id: "elastic-slider",
		name: "Elastic Slider",
		href: "/components/elastic-slider",
		desc: "TODO: Add a concise description for Elastic Slider."
	},
	{
		id: "github-stars",
		name: "Github Stars",
		href: "/components/github-stars",
		desc: "TODO: Add a concise description for Github Stars."
	},
	{
		id: "glow-card-grid",
		name: "Glow Card Grid",
		href: "/components/glow-card-grid",
		desc: "TODO: Add a concise description for Glow Card Grid."
	},
	{
		id: "icon-swap",
		name: "Icon Swap",
		href: "/components/icon-swap",
		desc: "TODO: Add a concise description for Icon Swap."
	},
	{
		id: "middle-truncation",
		name: "Middle Truncation",
		href: "/components/middle-truncation",
		desc: "TODO: Add a concise description for Middle Truncation."
	},
	{
		id: "share-menu",
		name: "Share Menu",
		href: "/components/share-menu",
		desc: "TODO: Add a concise description for Share Menu."
	},
	{
		id: "shimmering-text",
		name: "Shimmering Text",
		href: "/components/shimmering-text",
		desc: "TODO: Add a concise description for Shimmering Text."
	},
	{
		id: "slide-to-unlock",
		name: "Slide To Unlock",
		href: "/components/slide-to-unlock",
		desc: "TODO: Add a concise description for Slide To Unlock."
	},
	{
		id: "spinning-circular-text",
		name: "Spinning Circular Text",
		href: "/components/spinning-circular-text",
		desc: "TODO: Add a concise description for Spinning Circular Text."
	},
	{
		id: "testimonial",
		name: "Testimonial",
		href: "/components/testimonial",
		desc: "TODO: Add a concise description for Testimonial."
	},
	{
		id: "testimonial-2",
		name: "Testimonial 2",
		href: "/components/testimonial-2",
		desc: "TODO: Add a concise description for Testimonial 2."
	},
	{
		id: "testimonial-spotlight",
		name: "Testimonial Spotlight",
		href: "/components/testimonial-spotlight",
		desc: "TODO: Add a concise description for Testimonial Spotlight."
	},
	{
		id: "timescale",
		name: "Timescale",
		href: "/components/timescale",
		desc: "TODO: Add a concise description for Timescale."
	},
	{
		id: "wheel-picker",
		name: "Wheel Picker",
		href: "/components/wheel-picker",
		desc: "TODO: Add a concise description for Wheel Picker."
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
