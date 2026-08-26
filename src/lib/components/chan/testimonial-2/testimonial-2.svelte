<script lang="ts">
	import { cn } from "$lib/utils";

	type Testimonial2Props = {
		/** Full display name of the person giving the testimonial. */
		authorName: string;
		/** Short tagline, title, or description of the person. */
		authorTagline: string;
		/** Link to the person's profile, website, or social media page. */
		url: string;
		/** The testimonial text content or recommendation message. */
		quote: string;
		/** Additional CSS classes to apply to the testimonial container. */
		class?: string;
	};

	let {
		authorName,
		authorTagline,
		url,
		quote,
		class: className
	}: Testimonial2Props = $props();
</script>

<figure class={cn("relative flex flex-col gap-6 pl-3", className)}>
	<blockquote
		class="relative block w-full font-serif text-xl text-foreground md:w-lg md:text-2xl"
	>
		<span
			class="absolute -left-3 text-muted-foreground select-none"
			aria-hidden="true"
		>
			“
		</span>
		<p class="inline text-pretty">{quote}</p>
		<span
			class="absolute translate-x-0.5 text-muted-foreground select-none"
			aria-hidden="true"
		>
			”
		</span>
	</blockquote>

	<figcaption class="ml-auto flex w-full items-center gap-2 md:w-1/2">
		<div class="hidden h-px grow translate-y-px bg-border md:block"></div>

		<div class="flex flex-col md:ml-auto md:text-right">
			<span class="text-sm leading-none font-medium">
				<a href={url} target="_blank" rel="noopener">
					<span class="absolute inset-0" aria-hidden="true"></span>
					{authorName}
				</a>
				<span
					class="mt-1 block text-muted-foreground md:mt-0 md:inline"
				>
					<span class="hidden text-foreground md:inline">, </span>
					{authorTagline}
				</span>
			</span>
		</div>
	</figcaption>
</figure>
