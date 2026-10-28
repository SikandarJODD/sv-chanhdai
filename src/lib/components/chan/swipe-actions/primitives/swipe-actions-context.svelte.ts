import { createContext } from "svelte";
import type {
	SwipeActionsContextValue,
	SwipeId,
	SwipeItemContextValue,
	SwipeRootContextValue
} from "./swipe-actions-types";

const [getRootContext, setSwipeRootContext] =
	createContext<SwipeRootContextValue>();
const [getItemContext, setSwipeItemContext] =
	createContext<SwipeItemContextValue>();
const [getActionsContext, setSwipeActionsContext] =
	createContext<SwipeActionsContextValue>();
const [getActionIdContext, setSwipeActionIdContext] = createContext<SwipeId>();

export function useSwipeRoot(): SwipeRootContextValue | null {
	try {
		return getRootContext();
	} catch {
		return null;
	}
}

export function useSwipeItem(): SwipeItemContextValue {
	try {
		return getItemContext();
	} catch {
		throw new Error("Swipe parts must be used within SwipeItem");
	}
}

export function useSwipeActions(): SwipeActionsContextValue {
	try {
		return getActionsContext();
	} catch {
		throw new Error("SwipeAction must be used within SwipeActions");
	}
}

export function useSwipeActionId(): SwipeId {
	try {
		return getActionIdContext();
	} catch {
		throw new Error("SwipeActionContent must be used within SwipeAction");
	}
}

export {
	setSwipeActionIdContext,
	setSwipeActionsContext,
	setSwipeItemContext,
	setSwipeRootContext
};
