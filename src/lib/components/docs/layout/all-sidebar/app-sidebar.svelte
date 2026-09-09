<script lang="ts" module>
	import { components, type BadgeType } from "$lib/registry/components";

	type NavItem = {
		title: string;
		url: string;
		badge?: BadgeType;
	};

	// Build navigation from registry
	const data = {
		navMain: [
			{
				title: "Getting Started",
				url: "#",
				items: [
					{
						title: "Introduction",
						url: "/docs"
					},
					{
						title: "Installation",
						url: "/docs/installation"
					}
				] as NavItem[]
			},
			{
				title: "Components",
				url: "#",
				items: components.map((c) => ({
					title: c.name,
					url: c.href,
					badge: c.badge
				})) as NavItem[]
			}
		]
	};
</script>

<script lang="ts">
	import BhideSvelteCard from "$lib/components/docs/base/main/bhide-svelte-card.svelte";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import { Button } from "$lib/components/ui/button";
	import {
		ScrollArea,
		ScrollFadeEffect
	} from "$lib/components/ui/scroll-area/index.js";
	import Badge from "$lib/components/ui/spell/badge/badge.svelte";
	import { page } from "$app/state";
	import type { ComponentProps } from "svelte";
	import { watch } from "runed";

	let {
		ref = $bindable(null),
		...restProps
	}: ComponentProps<typeof Sidebar.Root> = $props();
	let contentRef = $state<HTMLElement | null>(null);
	let pathname = $derived(page.url.pathname);

	watch(
		() => pathname,
		() => {
			let activeItem = contentRef?.querySelector<HTMLElement>(
				'[data-sidebar="menu-button"][data-active="true"]'
			);

			activeItem?.scrollIntoView({
				block: "nearest",
				inline: "nearest",
				behavior: "smooth"
			});
		}
	);
</script>

<Sidebar.Root class="bg-background pt-14" {...restProps} bind:ref>
	<Sidebar.Content bind:ref={contentRef}>
		<ScrollFadeEffect class="max-h-[calc(100vh-6rem)] py-4 pr-1">
			<!-- We create a Sidebar.Group for each parent. -->
			{#each data.navMain as group}
				<Sidebar.Group>
					<div class="flex justify-between items-center">
						<Sidebar.GroupLabel>{group.title}</Sidebar.GroupLabel>
						{#if group.title === "Components"}
							<span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="14"
									height="14"
									viewBox="0 0 24 24"
									class="text-muted-foreground"
									fill="none"
									><circle
										cx="18"
										cy="8"
										r="4.3333"
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
									></circle><rect
										x="6.3333"
										y="14.3333"
										width="7.3333"
										height="7.3333"
										rx="1.3333"
										ry="1.3333"
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
									></rect><path
										d="M 5.0907 2.6533 L 1.5853 8.664 c -0.2587 0.444 0.0613 1.0027 0.576 1.0027 H 9.172 c 0.5147 0 0.8347 -0.5587 0.576 -1.0027 L 6.2427 2.6533 c -0.2573 -0.4413 -0.8947 -0.4413 -1.152 0 Z"
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
									></path></svg
								>
							</span>
						{:else if group.title === "Getting Started"}
							<span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="14"
									height="14"
									viewBox="0 0 24 24"
									class="text-muted-foreground"
									fill="none"
									><path
										d="M8 15.25C7.58579 15.25 7.25 15.5858 7.25 16C7.25 16.4142 7.58579 16.75 8 16.75H16C16.4142 16.75 16.75 16.4142 16.75 16C16.75 15.5858 16.4142 15.25 16 15.25H8Z"
										fill="currentColor"
									></path>
									<path
										d="M7.25 12C7.25 11.5858 7.58579 11.25 8 11.25H16C16.4142 11.25 16.75 11.5858 16.75 12C16.75 12.4142 16.4142 12.75 16 12.75H8C7.58579 12.75 7.25 12.4142 7.25 12Z"
										fill="currentColor"
									></path>
									<path
										d="M8 7.25C7.58579 7.25 7.25 7.58579 7.25 8C7.25 8.41421 7.58579 8.75 8 8.75H12C12.4142 8.75 12.75 8.41421 12.75 8C12.75 7.58579 12.4142 7.25 12 7.25H8Z"
										fill="currentColor"
									></path>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M14.9326 1.25H9.06739C8.11495 1.24999 7.35439 1.24999 6.74013 1.30018C6.11012 1.35165 5.56824 1.45963 5.07054 1.71322C4.27085 2.12068 3.62068 2.77085 3.21322 3.57054C2.95963 4.06824 2.85165 4.61012 2.80018 5.24013C2.74999 5.85439 2.74999 6.61494 2.75 7.56738V16.4326C2.74999 17.3851 2.74999 18.1456 2.80018 18.7599C2.85165 19.3899 2.95963 19.9318 3.21322 20.4295C3.62068 21.2291 4.27085 21.8793 5.07054 22.2868C5.56824 22.5404 6.11012 22.6483 6.74013 22.6998C7.3544 22.75 8.11495 22.75 9.06741 22.75H14.9325C15.885 22.75 16.6456 22.75 17.2599 22.6998C17.8899 22.6483 18.4318 22.5404 18.9295 22.2868C19.7292 21.8793 20.3793 21.2291 20.7868 20.4295C21.0404 19.9318 21.1483 19.3899 21.1998 18.7599C21.25 18.1456 21.25 17.3851 21.25 16.4327V7.56737C21.25 6.61496 21.25 5.85438 21.1998 5.24013C21.1483 4.61012 21.0404 4.06824 20.7868 3.57054C20.3793 2.77085 19.7292 2.12068 18.9295 1.71322C18.4318 1.45963 17.8899 1.35165 17.2599 1.30018C16.6456 1.24999 15.8851 1.24999 14.9326 1.25ZM5.75153 3.04973C6.00252 2.92184 6.32503 2.83909 6.86228 2.79519C7.40829 2.75058 8.10753 2.75 9.1 2.75H14.9C15.8925 2.75 16.5917 2.75058 17.1377 2.79519C17.675 2.83909 17.9975 2.92184 18.2485 3.04973C18.7659 3.31338 19.1866 3.73408 19.4503 4.25153C19.5782 4.50252 19.6609 4.82503 19.7048 5.36228C19.7494 5.90829 19.75 6.60753 19.75 7.6V16.4C19.75 17.3925 19.7494 18.0917 19.7048 18.6377C19.6609 19.175 19.5782 19.4975 19.4503 19.7485C19.1866 20.2659 18.7659 20.6866 18.2485 20.9503C17.9975 21.0782 17.675 21.1609 17.1377 21.2048C16.5917 21.2494 15.8925 21.25 14.9 21.25H9.1C8.10753 21.25 7.40829 21.2494 6.86228 21.2048C6.32503 21.1609 6.00252 21.0782 5.75153 20.9503C5.23408 20.6866 4.81338 20.2659 4.54973 19.7485C4.42184 19.4975 4.33909 19.175 4.29519 18.6377C4.25058 18.0917 4.25 17.3925 4.25 16.4V7.6C4.25 6.60753 4.25058 5.90829 4.29519 5.36228C4.33909 4.82503 4.42184 4.50252 4.54973 4.25153C4.81338 3.73408 5.23408 3.31338 5.75153 3.04973Z"
										fill="currentColor"
									></path></svg
								>
							</span>
						{/if}
					</div>
					<Sidebar.GroupContent>
						<Sidebar.Menu>
							{#each group.items as item}
								<Sidebar.MenuItem>
									<Sidebar.MenuButton
										isActive={page.url.pathname ===
											item.url}
										class="scroll-mt-10 scroll-mb-40 flex justify-between items-center"
									>
										{#snippet child({ props })}
											<a href={item.url} {...props}>
												{item.title}
												{#if item.badge}
													<Badge
														variant={item.badge ===
														"New"
															? "emerald"
															: item.badge ===
																  "Updated"
																? "cyan"
																: "yellow"}
														size="sm"
													>
														{item.badge}
													</Badge>
												{/if}
												{#if item.title === "Status Button"}
													<svg
														xmlns="http://www.w3.org/2000/svg"
														class="size-4.5!"
														viewBox="0 0 24 24"
														fill="none"
														><path
															d="M20.96 17.84L19.33 18.39C18.88 18.54 18.52 18.89 18.37 19.35L17.82 20.98C17.35 22.39 15.37 22.36 14.93 20.95L13.08 15C12.72 13.82 13.8101 12.72 14.9801 13.09L20.94 14.94C22.34 15.38 22.36 17.37 20.96 17.84Z"
															class="stroke-indigo-500 fill-indigo-100 dark:fill-orange-500/30 dark:stroke-orange-500"
															stroke-width="1.5"
															stroke-linecap="round"
															stroke-linejoin="round"
														></path><path
															d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22"
															class="stroke-indigo-800 dark:stroke-orange-500/80"
															stroke-width="1.5"
															stroke-linecap="round"
															stroke-linejoin="round"
														></path></svg
													>
												{:else if item.title === "Timescale"}
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="16"
														height="16"
														viewBox="0 0 24 24"
														fill="none"
													>
														<path
															fill-rule="evenodd"
															clip-rule="evenodd"
															d="M6.11603 4.33293C5.40767 5.38611 4.89405 6.82121 4.89405 8.31567C4.89405 8.72988 4.55826 9.06567 4.14405 9.06567C3.72984 9.06567 3.39405 8.72988 3.39405 8.31567C3.39405 6.49434 4.0133 4.77154 4.87137 3.49578C5.30122 2.85669 5.80475 2.30916 6.34523 1.91465C6.87914 1.52494 7.49848 1.24988 8.14405 1.24988C9.70921 1.24988 10.894 2.36252 11.6493 4.14102C12.4046 5.91978 12.8223 8.53568 12.8223 12C12.8223 15.3778 13.2343 17.7619 13.8758 19.2727C14.5174 20.7837 15.2967 21.25 16.0002 21.25C16.2218 21.25 16.536 21.1501 16.9147 20.8737C17.2868 20.6021 17.6749 20.1924 18.0283 19.667C18.7366 18.6138 19.2502 17.1787 19.2502 15.6843C19.2502 15.27 19.586 14.9343 20.0002 14.9343C20.4145 14.9343 20.7502 15.27 20.7502 15.6843C20.7502 17.5056 20.131 19.2284 19.2729 20.5041C18.8431 21.1432 18.3395 21.6908 17.7991 22.0853C17.2651 22.475 16.6458 22.75 16.0002 22.75C14.4351 22.75 13.2503 21.6374 12.4951 19.859C11.7398 18.0803 11.3223 15.4644 11.3223 12C11.3223 8.6223 10.9102 6.23812 10.2686 4.72732C9.62691 3.21626 8.84761 2.74988 8.14405 2.74988C7.92249 2.74988 7.60826 2.84982 7.22959 3.12622C6.85749 3.39783 6.46941 3.80754 6.11603 4.33293ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H9.5C9.91421 11.25 10.25 11.5858 10.25 12C10.25 12.4143 9.91421 12.75 9.5 12.75H2C1.58579 12.75 1.25 12.4143 1.25 12ZM13.75 12C13.75 11.5858 14.0858 11.25 14.5 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4143 22.4142 12.75 22 12.75H14.5C14.0858 12.75 13.75 12.4143 13.75 12Z"
															class="fill-indigo-500 dark:fill-sky-400"
														></path></svg
													>
												{:else if item.title === "Elastic Slider"}
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="16"
														height="16"
														viewBox="0 0 24 24"
														fill="none"
														><path
															d="M22 6.5H16"
															class="stroke-indigo-500 dark:stroke-orange-700/70"
															stroke-width="1.5"
															stroke-miterlimit="10"
															stroke-linecap="round"
															stroke-linejoin="round"
														></path><path
															d="M6 6.5H2"
															class="stroke-indigo-500 dark:stroke-orange-500"
															stroke-width="1.5"
															stroke-miterlimit="10"
															stroke-linecap="round"
															stroke-linejoin="round"
														></path><path
															d="M10 10C11.933 10 13.5 8.433 13.5 6.5C13.5 4.567 11.933 3 10 3C8.067 3 6.5 4.567 6.5 6.5C6.5 8.433 8.067 10 10 10Z"
															class="stroke-indigo-500 dark:stroke-orange-500 dark:fill-orange-500/30"
															stroke-width="1.5"
															stroke-miterlimit="10"
															stroke-linecap="round"
															stroke-linejoin="round"
														></path><path
															d="M22 17.5H18"
															class="stroke-indigo-500 dark:stroke-emerald-700"
															stroke-width="1.5"
															stroke-miterlimit="10"
															stroke-linecap="round"
															stroke-linejoin="round"
														></path><path
															d="M8 17.5H2"
															class="stroke-indigo-500 dark:stroke-emerald-500"
															stroke-width="1.5"
															stroke-miterlimit="10"
															stroke-linecap="round"
															stroke-linejoin="round"
														></path><path
															d="M14 21C15.933 21 17.5 19.433 17.5 17.5C17.5 15.567 15.933 14 14 14C12.067 14 10.5 15.567 10.5 17.5C10.5 19.433 12.067 21 14 21Z"
															class="stroke-indigo-500 dark:stroke-emerald-500 dark:fill-emerald-500/30"
															stroke-width="1.5"
															stroke-miterlimit="10"
															stroke-linecap="round"
															stroke-linejoin="round"
														></path></svg
													>
												{:else if item.title === "Wheel Picker"}
													<svg
														xmlns="http://www.w3.org/2000/svg"
														class="size-4.5!"
														viewBox="0 0 24 24"
														fill="none"
														><path
															d="M8.68006 12.72H10.4201V16.77C10.4201 17.37 11.1601 17.65 11.5601 17.2L15.8201 12.36C16.1901 11.94 15.8901 11.28 15.3301 11.28H13.5901V7.22995C13.5901 6.62995 12.8501 6.34995 12.4501 6.79995L8.19006 11.64C7.82006 12.06 8.12006 12.72 8.68006 12.72Z"
															class="stroke-indigo-500 dark:stroke-lime-500"
															stroke-width="1.5"
															stroke-miterlimit="10"
															stroke-linecap="round"
															stroke-linejoin="round"
														></path><path
															d="M11.97 22C17.4928 22 21.97 17.5228 21.97 12C21.97 6.47715 17.4928 2 11.97 2C6.44712 2 1.96997 6.47715 1.96997 12C1.96997 17.5228 6.44712 22 11.97 22Z"
															class="stroke-indigo-500 dark:stroke-lime-500"
															stroke-width="1.5"
															stroke-miterlimit="10"
															stroke-linecap="round"
															stroke-linejoin="round"
														></path></svg
													>
												{/if}
											</a>
										{/snippet}
									</Sidebar.MenuButton>
								</Sidebar.MenuItem>
							{/each}
						</Sidebar.Menu>
					</Sidebar.GroupContent>
				</Sidebar.Group>
			{/each}
		</ScrollFadeEffect>
	</Sidebar.Content>
	<Sidebar.Footer>
		<BhideSvelteCard />
	</Sidebar.Footer>
</Sidebar.Root>
