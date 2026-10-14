<script lang="ts" generics="T">
	import type { Snippet } from "svelte";
	import {
		setAppleCarouselItemContext,
		setAppleCarouselTabContext
	} from "./apple-carousel-context.svelte";
	import type {
		AppleCarouselItemContextValue,
		AppleCarouselTabContextValue
	} from "./apple-carousel-types";

	type Props =
		| {
				children: Snippet<[value: T]>;
				value: T;
				item: AppleCarouselItemContextValue;
				tab?: never;
		  }
		| {
				children: Snippet<[value: T]>;
				value: T;
				tab: AppleCarouselTabContextValue;
				item?: never;
		  };

	let { children, value, item, tab }: Props = $props();

	setAppleCarouselItemContext({
		get index() {
			if (!item) throw new Error("Missing AppleCarousel item context");
			return item.index;
		},
		get isClone() {
			if (!item) throw new Error("Missing AppleCarousel item context");
			return item.isClone;
		}
	});
	setAppleCarouselTabContext({
		get index() {
			if (!tab) throw new Error("Missing AppleCarousel tab context");
			return tab.index;
		},
		get count() {
			if (!tab) throw new Error("Missing AppleCarousel tab context");
			return tab.count;
		}
	});
</script>

{@render children(value)}
