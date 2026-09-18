<script lang="ts">
	import { github_repo } from "$lib/config/repo";
	import { X } from "$lib/svg";
	import BugIcon from "@lucide/svelte/icons/bug";
	import LightbulbIcon from "@lucide/svelte/icons/lightbulb";
	let { class: className = "" }: { class?: string } = $props();
</script>

<div class={`mt-6 pt-6 ${className}`}>
	<h2 class="text-sm font-medium">Contribute</h2>

	<nav class="mt-3">
		<ul class="space-y-1.5">
			<li>
				<a
					class="inline-flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
					href={`${github_repo.url}/issues/new?template=bug_report.md`}
					target="_blank"
					rel="noreferrer"
				>
					<BugIcon class="size-4 shrink-0" strokeWidth="1.5" />
					<span>Report an issue</span>
				</a>
			</li>
			<li>
				<a
					class="inline-flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
					href={`${github_repo.url}/issues/new?template=feature_request.md`}
					target="_blank"
					rel="noreferrer"
				>
					<LightbulbIcon class="size-4 shrink-0" strokeWidth="1.5" />
					<span>Request a feature</span>
				</a>
			</li>
			<li>
				<a
					class="inline-flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
					href="https://x.com/Sikandar_Bhide"
					target="_blank"
					rel="noreferrer"
				>
					<X class="ml-0.5 size-3 shrink-0" />
					<span>DM me on X</span>
				</a>
			</li>
		</ul>
	</nav>
</div>
