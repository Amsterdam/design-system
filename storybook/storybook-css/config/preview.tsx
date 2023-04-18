import '@amsterdam/design-system-tokens/dist/root.css'
import '@amsterdam/design-system-font/static/index.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewMode: 'docs',
  docs: {
    // Show code by default.
    // Stories without concise code snippets can hide the code at Story level.
    source: {
      state: 'open',
    },
  },
  options: {
    storySort: {
      order: ['Docs'],
    },
  },
}
