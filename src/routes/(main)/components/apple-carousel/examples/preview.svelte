<script lang="ts">
	import {
		AppleCarouselContent,
		AppleCarouselControls,
		AppleCarouselItem,
		AppleCarouselPlayButton,
		AppleCarouselRoot,
		AppleCarouselTab,
		AppleCarouselTabList
	} from "#lib/components/chan/apple-carousel/index.js";

	const ITEMS = [
		{
			title: "Quang Ninh",
			image: "https://assets.chanhdai.com/registry/images/components/apple-carousel/1.webp",
			href: "https://en.wikipedia.org/wiki/Quảng_Ninh_province"
		},
		{
			title: "An Giang",
			image: "https://assets.chanhdai.com/registry/images/components/apple-carousel/2.webp?v=2",
			href: "https://en.wikipedia.org/wiki/An_Giang_province"
		},
		{
			title: "Ninh Binh",
			image: "https://assets.chanhdai.com/registry/images/components/apple-carousel/3.webp",
			href: "https://en.wikipedia.org/wiki/Ninh_Bình_province"
		},
		{
			title: "Hue",
			image: "https://assets.chanhdai.com/registry/images/components/apple-carousel/4.webp",
			href: "https://en.wikipedia.org/wiki/Huế"
		},
		{
			title: "Ninh Binh",
			image: "https://assets.chanhdai.com/registry/images/components/apple-carousel/5.webp",
			href: "https://en.wikipedia.org/wiki/Ninh_Bình_province"
		},
		{
			title: "Ho Chi Minh City",
			image: "https://assets.chanhdai.com/registry/images/components/apple-carousel/6.webp",
			href: "https://en.wikipedia.org/wiki/Ho_Chi_Minh_City"
		},
		{
			title: "Da Nang",
			image: "https://assets.chanhdai.com/registry/images/components/apple-carousel/7.webp",
			href: "https://en.wikipedia.org/wiki/Da_Nang"
		}
	] as const;
</script>

<AppleCarouselRoot duration={3600}>
	<AppleCarouselContent items={ITEMS}>
		{#snippet children(item)}
			<AppleCarouselItem tabindex={-1} class="@max-3xl:h-96">
				<a
					href={item.href}
					target="_blank"
					rel="noopener noreferrer"
					class="block size-full rounded-[inherit] select-none focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring"
				>
					<img
						src={item.image}
						alt={item.title}
						class="size-full object-cover"
					/>
				</a>
			</AppleCarouselItem>
		{/snippet}
	</AppleCarouselContent>

	<AppleCarouselControls>
		<AppleCarouselTabList items={ITEMS} aria-label="Places in Viet Nam">
			{#snippet children(item)}
				<AppleCarouselTab>{item.title}</AppleCarouselTab>
			{/snippet}
		</AppleCarouselTabList>
		<AppleCarouselPlayButton />
	</AppleCarouselControls>
</AppleCarouselRoot>
