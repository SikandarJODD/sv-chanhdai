<script lang="ts">
	import { onMount } from "svelte";
	import { GithubStars } from "$chan/github-stars";

	type GitHubRepository = {
		stargazers_count: number;
	};

	const repo = "SikandarJODD/sv-table";
	let stargazersCount = $state<number | null>(null);
	let error = $state<string | null>(null);

	onMount(() => {
		const controller = new AbortController();

		void fetch(`https://api.github.com/repos/${repo}`, {
			signal: controller.signal
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error("Could not load GitHub stars.");
				}

				return response.json() as Promise<GitHubRepository>;
			})
			.then((repository) => {
				stargazersCount = repository.stargazers_count;
			})
			.catch((caughtError: unknown) => {
				if (
					caughtError instanceof DOMException &&
					caughtError.name === "AbortError"
				) {
					return;
				}

				error =
					caughtError instanceof Error
						? caughtError.message
						: "Could not load GitHub stars.";
			});

		return () => controller.abort();
	});
</script>

{#if stargazersCount !== null}
	<GithubStars {repo} {stargazersCount} />
{:else if error}
	<p class="text-sm text-muted-foreground">{error}</p>
{:else}
	<p class="text-sm text-muted-foreground">Loading stars...</p>
{/if}
