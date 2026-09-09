import { watch } from "runed";

type StateUpdater<T> = T | ((currentValue: T) => T);

type ControllableStateOptions<T> = {
	value: () => T | undefined;
	defaultValue: () => T;
	onChange: () => ((value: T) => void) | undefined;
	caller: string;
};

/**
 * Svelte counterpart to Radix's controllable-state hook. The getter always
 * reads the latest controlled prop, while uncontrolled state is owned here.
 */
export function createControllableState<T>(
	options: ControllableStateOptions<T>
) {
	let uncontrolledValue = $state(options.defaultValue());
	let wasControlled = options.value() !== undefined;

	if (import.meta.env.DEV) {
		watch(
			() => options.value() !== undefined,
			(isControlled) => {
				if (wasControlled !== isControlled) {
					const from = wasControlled ? "controlled" : "uncontrolled";
					const to = isControlled ? "controlled" : "uncontrolled";

					console.warn(
						`${options.caller} is changing from ${from} to ${to}. Components should not switch between controlled and uncontrolled modes during their lifetime.`
					);
				}

				wasControlled = isControlled;
			},
			{ lazy: true }
		);
	}

	function get(): T {
		return options.value() ?? uncontrolledValue;
	}

	function set(updater: StateUpdater<T>): void {
		const currentValue = get();
		const nextValue =
			typeof updater === "function"
				? (updater as (value: T) => T)(currentValue)
				: updater;

		if (nextValue === currentValue) return;

		if (options.value() === undefined) {
			uncontrolledValue = nextValue;
		}

		options.onChange()?.(nextValue);
	}

	return { get, set };
}
