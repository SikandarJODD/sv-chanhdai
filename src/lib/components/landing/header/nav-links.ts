import { resolve } from "$app/paths";
import type { NavType } from "./types";

let navs: NavType[] = [
	{
		name: "Home",
		href: "/"
	},
	{
		name: "Components",
		href: resolve("/(main)/components/apple-hello-effect")
	},
	{
		name: "Docs",
		href: "/docs"
	},
	{
		name: "Changelog",
		href: "/changelog"
	}
];
export { navs };
