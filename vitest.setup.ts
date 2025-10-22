import '@testing-library/jest-dom'

// jsdom doesn't implement matchMedia; provide a minimal mock used by ThemeToggle
if (typeof window !== 'undefined' && !('matchMedia' in window)) {
		type Listener = (this: MediaQueryList, ev: MediaQueryListEvent) => void
		interface MockMediaQueryList extends MediaQueryList {
			addListener: (listener: Listener) => void
			removeListener: (listener: Listener) => void
		}
	// @ts-expect-error - augmenting window for tests
	window.matchMedia = (query: string): MockMediaQueryList => {
		const mql: MockMediaQueryList = {
			matches: false,
			media: query,
			onchange: null,
			addListener: () => {},
			removeListener: () => {},
			addEventListener: () => {},
			removeEventListener: () => {},
			dispatchEvent: () => false
		} as unknown as MockMediaQueryList
		return mql
	}
}
