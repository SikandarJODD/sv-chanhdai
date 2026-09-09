<script lang="ts">
	import { GlowCard, GlowCardGrid } from "$chan/glow-card-grid";

	const CARDS = [
		{
			name: "shadcn",
			handle: "@shadcn",
			avatar: "https://unavatar.io/x/shadcn"
		},
		{
			name: "OrcDev",
			handle: "@orcdev",
			avatar: "https://unavatar.io/x/orcdev"
		},
		{
			name: "David Haz",
			handle: "@davidhdev",
			avatar: "https://unavatar.io/x/davidhdev"
		},
		{
			name: "Shu",
			handle: "@shuding",
			avatar: "https://unavatar.io/x/shuding"
		},
		{
			name: "Emil Kowalski",
			handle: "@emilkowalski",
			avatar: "https://unavatar.io/x/emilkowalski"
		},
		{
			name: "Chánh Đại",
			handle: "@iamncdai",
			avatar: "https://unavatar.io/x/iamncdai"
		}
	];
</script>

<div class="w-full p-4">
	<GlowCardGrid>
		{#each CARDS as card (card.name)}
			<GlowCard
				name={card.name}
				handle={card.handle}
				avatar={card.avatar}
			/>
		{/each}
	</GlowCardGrid>
</div>
