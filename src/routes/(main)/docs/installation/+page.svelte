<script lang="ts">
	import { page } from "$app/state";
	import CopyPageDropdown from "$lib/components/docs/base/main/copy-page-dropdown.svelte";
	import Seo from "$lib/components/docs/base/main/seo.svelte";
	import { H1, H2, Paragraph, Steps, Step, Divider, Link } from "$markdown";
	import { PMCommand } from "$lib/components/ui/pm-command";
	import FrameSingle from "$lib/components/ui/code/frame-single.svelte";

	let getURLPath = (url: string) => {
		return url.split("?")[0].split("#")[0];
	};

	let llmsTxtUrl = $derived(`${getURLPath(page.url.href)}/llms.txt`);

	const aliasConfig = {
		name: "vite.config.ts / svelte.config.js",
		lang: "typescript" as const,
		code: `alias: {
  $chan: "src/lib/components/chan",
  $ui: "src/lib/components/ui",
},`
	};
</script>

<Seo
	title="Installation Guide"
	description="Install Svelte Chanhdai components in a SvelteKit project using shadcn-svelte, Tailwind CSS, and the component registry with step-by-step commands."
	keywords={[
		"install Svelte components",
		"SvelteKit installation",
		"Svelte 5 setup",
		"shadcn-svelte",
		"shadcn-svelte installation",
		"Tailwind CSS",
		"Svelte component registry",
		"Svelte CLI",
		"pnpm",
		"Svelte UI library",
		"Chanhdai components"
	]}
/>

<div class="space-y-8">
	<section class="space-y-3">
		<div
			class="flex flex-col justify-between gap-3 md:flex-row md:items-center md:gap-4"
		>
			<H1 id="installation">Installation</H1>
			<CopyPageDropdown componentName="Installation" {llmsTxtUrl} />
		</div>
		<div class="mt-3 max-w-2xl">
			<Paragraph
				>Create a SvelteKit app, then set up shadcn-svelte.</Paragraph
			>
		</div>
	</section>

	<section>
		<Steps>
			<Step title="Install SvelteKit">
				<p class="mb-4">Create a new SvelteKit app.</p>
				<PMCommand
					command="execute"
					args={["sv", "create", "my-app"]}
				/>
			</Step>

			<Step title="Initialize shadcn-svelte">
				<p class="mb-4">Set up shadcn-svelte in your project.</p>
				<PMCommand
					command="execute"
					args={["shadcn-svelte@latest", "init"]}
				/>
				<p class="mt-3 text-sm">
					For more information, visit
					<Link
						href="https://www.shadcn-svelte.com/"
						target="_blank"
						rel="noreferrer"
					>
						shadcn-svelte
					</Link>.
				</p>
			</Step>

			<Step title="Add component aliases">
				<p class="mb-4">
					Add these aliases to your Vite or Svelte config.
				</p>
				<FrameSingle code={aliasConfig} />
			</Step>
		</Steps>
	</section>

	<section class="space-y-4">
		<Divider />
		<H2 id="how-to-use-it">How to use it</H2>
		<PMCommand
			command="execute"
			args={[
				"shadcn-svelte@latest",
				"add",
				"https://sv-animations.vercel.app/r/status-button.json"
			]}
		/>
	</section>
</div>
