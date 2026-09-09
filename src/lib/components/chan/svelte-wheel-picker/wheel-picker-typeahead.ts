const TYPEAHEAD_TIMEOUT_MS = 500;

type TypeaheadSearchOptions<T> = {
	getOptions: () => T[];
	getTextValue: (option: T) => string;
	getCurrentIndex: () => number;
	onMatch: (index: number) => void;
};

export function createTypeaheadSearch<T>({
	getOptions,
	getTextValue,
	getCurrentIndex,
	onMatch
}: TypeaheadSearchOptions<T>) {
	let searchBuffer = "";
	let timeout: ReturnType<typeof setTimeout> | null = null;

	function reset(): void {
		searchBuffer = "";

		if (timeout) {
			clearTimeout(timeout);
			timeout = null;
		}
	}

	function search(character: string): void {
		const options = getOptions();
		if (options.length === 0) return;

		if (timeout) clearTimeout(timeout);

		searchBuffer += character.toLocaleLowerCase();
		const repeated =
			searchBuffer.length > 1 &&
			[...searchBuffer].every(
				(searchCharacter) => searchCharacter === searchBuffer[0]
			);
		const searchTerm = repeated ? searchBuffer[0] : searchBuffer;

		let matchIndex = -1;

		if (searchTerm.length === 1) {
			const currentIndex = getCurrentIndex();

			for (let offset = 1; offset <= options.length; offset += 1) {
				const index = (currentIndex + offset) % options.length;
				if (
					getTextValue(options[index])
						.toLocaleLowerCase()
						.startsWith(searchTerm)
				) {
					matchIndex = index;
					break;
				}
			}
		} else {
			matchIndex = options.findIndex((option) =>
				getTextValue(option).toLocaleLowerCase().startsWith(searchTerm)
			);
		}

		if (matchIndex !== -1) onMatch(matchIndex);

		timeout = setTimeout(reset, TYPEAHEAD_TIMEOUT_MS);
	}

	return { search, reset };
}
