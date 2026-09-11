<script lang="ts">
	import Github from "$lib/svg/github.svelte";
	import X from "$lib/svg/x.svelte";
	import { Button } from "$lib/components/ui/button";

	type CurrentSponsorProps = {
		name: string;
		avatar: string;
		github: string;
		role?: string;
		x?: string;
	};

	let { name, avatar, github, role, x }: CurrentSponsorProps = $props();
</script>

<article class="flex items-center gap-3 rounded-xl border border-border p-2">
	<img
		src={avatar}
		alt=""
		class="size-18 shrink-0 rounded-lg object-cover"
		width="72"
		height="72"
	/>

	<div class="min-w-0 flex-1">
		<h3 class="truncate font-semibold text-foreground">{name}</h3>
		{#if role}
			<p class="mt-1 font-mono text-xs text-muted-foreground">{role}</p>
		{/if}

		<div class="mt-1 flex items-center gap-1">
			<Button
				href={github}
				target="_blank"
				rel="noreferrer"
				variant="ghost"
				size="icon-xs"
				aria-label={`${name} on GitHub`}
			>
				<Github class="size-4" />
			</Button>

			{#if x}
				<Button
					href={x}
					target="_blank"
					rel="noreferrer"
					variant="ghost"
					size="icon-xs"
					aria-label={`${name} on X`}
				>
					<X class="size-3.5" />
				</Button>
			{/if}
		</div>
	</div>
</article>
