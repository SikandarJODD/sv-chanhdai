import adapter from "@sveltejs/adapter-vercel";
import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes("node_modules")
						? undefined
						: true
			},
			// vitePlugin: {
			// 	inspector: { toggleKeyCombo: "meta-shift", holdMode: true }
			// },
			alias: {
				$markdown: "src/lib/components/docs/markdown",
				$chan: "src/lib/components/chan",
				$ui: "src/lib/components/ui",
				$icons: "src/lib/components/icons"
			},

			// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
			// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
			// See https://svelte.dev/docs/kit/adapters for more information about adapters.
			adapter: adapter()
		})
	]
});
