import adapter from "@sveltejs/adapter-vercel";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  compilerOptions: {
    // Force runes mode for the project, except for libraries. Can be removed in svelte 6.
    runes: ({ filename }) =>
      filename.split(/[/\\]/).includes("node_modules") ? undefined : true,
  },
  kit: {
    alias: {
      $markdown: "src/lib/components/docs/markdown",
      $chan: "src/lib/components/chan",
      $ui: "src/lib/components/ui",
      $icons: "src/lib/components/icons",
    },
    // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://svelte.dev/docs/kit/adapters for more information about adapters.
    adapter: adapter(),
  },
  vitePlugin: {
    inspector: {
      toggleKeyCombo: "meta-shift",
      holdMode: true,
    }
  }
};

export default config;