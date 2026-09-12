<script lang="ts">
	import { GlowCard, GlowCardGrid } from "$chan/glow-card-grid";

	const PROFILES = [
		{
			name: "Chánh Đại",
			handle: "@iamncdai",
			avatar: "https://unavatar.io/x/iamncdai"
		},
		{
			name: "Emil Kowalski",
			handle: "@emilkowalski",
			avatar: "https://unavatar.io/x/emilkowalski"
		}
	];
</script>

<div class="w-full p-4">
	<GlowCardGrid cardRadius={28} class="mx-auto max-w-2xl md:grid-cols-2">
		{#each PROFILES as profile (profile.name)}
			<GlowCard {...profile} class="h-64" />
		{/each}
	</GlowCardGrid>
</div>
