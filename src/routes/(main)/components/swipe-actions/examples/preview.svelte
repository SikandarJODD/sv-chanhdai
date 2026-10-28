<script lang="ts">
	import ArchiveIcon from "@lucide/svelte/icons/archive";
	import FlagIcon from "@lucide/svelte/icons/flag";
	import Trash2Icon from "@lucide/svelte/icons/trash-2";
	import {
		SwipeAction,
		SwipeActions,
		SwipeContent,
		SwipeItem,
		SwipeRoot
	} from "#lib/components/chan/swipe-actions/index.js";
	import { AnimatePresence, motion, useReducedMotion } from "motion-sv";

	type Mail = {
		id: string;
		sender: string;
		subject: string;
		preview: string;
		flagged: boolean;
	};

	const INITIAL_MAILS: Mail[] = [
		{
			id: "1",
			sender: "shadcn",
			subject: "Namespaced registries",
			preview:
				"components.json can point at any registry URL now, take a look.",
			flagged: false
		},
		{
			id: "2",
			sender: "Evil Rabbit",
			subject: "Spacing scale review",
			preview:
				"Dropped the 6px step so every surface lands on the 4px grid.",
			flagged: false
		},
		{
			id: "3",
			sender: "Shu",
			subject: "SWR cache inspector",
			preview:
				"Devtools panel is in, the mutation timeline still needs work.",
			flagged: true
		}
	];

	let mails = $state(INITIAL_MAILS);
	const shouldReduceMotion = useReducedMotion();

	function removeMail(id: string) {
		mails = mails.filter((mail) => mail.id !== id);
	}

	function toggleFlag(id: string) {
		mails = mails.map((mail) =>
			mail.id === id ? { ...mail, flagged: !mail.flagged } : mail
		);
	}
</script>

<div class="w-full overflow-clip rounded-xl border">
	<SwipeRoot>
		<ul role="list" class="divide-y">
			<AnimatePresence initial={false}>
				{#each mails as mail (mail.id)}
					<motion.li
						layout={!shouldReduceMotion.current}
						exit={shouldReduceMotion.current
							? { opacity: 0 }
							: { height: 0, opacity: 0 }}
						transition={shouldReduceMotion.current
							? { duration: 0.1 }
							: {
									duration: 0.22,
									ease: [0.32, 0.72, 0, 1]
								}}
					>
						<SwipeItem>
							<SwipeActions side="left" fullSwipe>
								<SwipeAction
									class="rounded-xl bg-sky-500 text-white"
									onclick={() => removeMail(mail.id)}
								>
									<ArchiveIcon />
									Archive
								</SwipeAction>
							</SwipeActions>

							<SwipeActions side="right" fullSwipe>
								<SwipeAction
									class="rounded-xl bg-amber-500 text-white"
									onclick={() => toggleFlag(mail.id)}
								>
									<FlagIcon />
									{mail.flagged ? "Unflag" : "Flag"}
								</SwipeAction>

								<SwipeAction
									class="rounded-xl bg-red-600 text-white"
									onclick={() => removeMail(mail.id)}
								>
									<Trash2Icon />
									Delete
								</SwipeAction>
							</SwipeActions>

							<SwipeContent>
								<button
									type="button"
									class="flex w-full flex-col items-start gap-1 rounded-xl p-4 pt-3 text-left focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-foreground"
								>
									<span
										class="flex items-center gap-1.5 font-semibold"
									>
										{mail.sender}
										{#if mail.flagged}
											<FlagIcon
												class="size-3.5 text-amber-500"
											/>
										{/if}
									</span>
									<span class="text-sm">{mail.subject}</span>
									<span
										class="w-full truncate text-xs text-muted-foreground"
									>
										{mail.preview}
									</span>
								</button>
							</SwipeContent>
						</SwipeItem>
					</motion.li>
				{/each}
			</AnimatePresence>
		</ul>
	</SwipeRoot>

	{#if mails.length === 0}
		<p class="px-4 py-8 text-center text-sm text-muted-foreground">
			No messages left.
		</p>
	{/if}
</div>
