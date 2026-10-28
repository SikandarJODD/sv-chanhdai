import {
	SwipeActions as Actions,
	SwipeItem as Item,
	SwipeRoot as Root
} from "./primitives";
import Action from "./swipe-action.svelte";
import Content from "./swipe-content.svelte";

export {
	Action,
	Actions,
	Content,
	Item,
	Root,
	Action as SwipeAction,
	Actions as SwipeActions,
	Content as SwipeContent,
	Item as SwipeItem,
	Root as SwipeRoot
};

export type {
	SwipeActionProps,
	SwipeActionsProps,
	SwipeContentProps,
	SwipeItemProps,
	SwipeItemState,
	SwipeRootProps,
	SwipeSide,
	SwipeState
} from "./primitives";
