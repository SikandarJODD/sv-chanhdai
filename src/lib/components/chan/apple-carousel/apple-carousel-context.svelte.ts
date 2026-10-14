import { createContext } from "svelte";
import type {
	AppleCarouselContextValue,
	AppleCarouselItemContextValue,
	AppleCarouselItemState,
	AppleCarouselTabContextValue
} from "./apple-carousel-types";

const [getAppleCarouselContext, setAppleCarouselContext] =
	createContext<AppleCarouselContextValue>();
const [getAppleCarouselItemContext, setAppleCarouselItemContext] =
	createContext<AppleCarouselItemContextValue>();
const [getAppleCarouselTabContext, setAppleCarouselTabContext] =
	createContext<AppleCarouselTabContextValue>();

export function useAppleCarousel(): AppleCarouselContextValue {
	try {
		return getAppleCarouselContext();
	} catch {
		throw new Error(
			"AppleCarousel parts must be used within AppleCarouselRoot"
		);
	}
}

export function useAppleCarouselItem(): AppleCarouselItemState {
	const carousel = useAppleCarousel();
	let item: AppleCarouselItemContextValue;

	try {
		item = getAppleCarouselItemContext();
	} catch {
		throw new Error(
			"useAppleCarouselItem must be used inside AppleCarouselContent"
		);
	}

	return {
		index: item.index,
		isClone: item.isClone,
		get isCurrent() {
			return carousel.index === item.index;
		}
	};
}

export function useAppleCarouselTab(): AppleCarouselTabContextValue {
	try {
		return getAppleCarouselTabContext();
	} catch {
		throw new Error(
			"AppleCarouselTab must be rendered by AppleCarouselTabList"
		);
	}
}

export {
	setAppleCarouselContext,
	setAppleCarouselItemContext,
	setAppleCarouselTabContext
};
