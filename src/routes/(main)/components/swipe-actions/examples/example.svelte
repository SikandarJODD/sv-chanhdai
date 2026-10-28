<script lang="ts">
	import Trash2Icon from "@lucide/svelte/icons/trash-2";
	import {
		SwipeAction,
		SwipeActions,
		SwipeContent,
		SwipeItem,
		SwipeRoot
	} from "#lib/components/chan/swipe-actions/index.js";

	const INITIAL_ITEMS = [
		{ id: "1", label: "components.json" },
		{ id: "2", label: "registry.json" },
		{ id: "3", label: "tailwind.config.ts" }
	];

	let items = $state(INITIAL_ITEMS);

	function remove(id: string) {
		items = items.filter((item) => item.id !== id);
	}
</script>

<div class="w-full overflow-clip rounded-xl border">
	<SwipeRoot>
		<ul role="list" class="divide-y">
			{#each items as item (item.id)}
				<li>
					<SwipeItem>
						<SwipeActions side="right" fullSwipe>
							<SwipeAction
								class="rounded-xl bg-red-600 text-white"
								onclick={() => remove(item.id)}
							>
								<Trash2Icon class="size-4" />
								<span class="sr-only">Delete</span>
							</SwipeAction>
						</SwipeActions>

						<SwipeContent>
							<div class="p-4 text-sm text-foreground">
								{item.label}
							</div>
						</SwipeContent>
					</SwipeItem>
				</li>
			{/each}
		</ul>
	</SwipeRoot>

	{#if items.length === 0}
		<p class="px-4 py-8 text-center text-sm text-muted-foreground">
			Nothing left.
		</p>
	{/if}
</div>
