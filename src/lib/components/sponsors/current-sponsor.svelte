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

<article class="min-w-0 p-2">
	<div
		class="relative aspect-square w-full p-1.5 after:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:border after:border-dashed after:border-ink/40 after:content-['']"
	>
		<img
			src={avatar}
			alt={name}
			class="size-full rounded-lg border-2 border-foreground/25 object-cover"
		/>
	</div>

	<div class="mt-3 min-w-0 pl-1">
		<h3 class="truncate text-sm font-semibold text-foreground">{name}</h3>
		{#if role}
			<p class="mt-0.5 truncate text-xs text-muted-foreground">{role}</p>
		{/if}

		<div class="mt-2 flex items-center gap-1">
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

			<Button
				href={github}
				target="_blank"
				rel="noreferrer"
				variant="ghost"
				size="icon-xs"
				aria-label={`${name} on GitHub`}
			>
				<Github class="size-3.5" />
			</Button>
		</div>
	</div>
</article>
