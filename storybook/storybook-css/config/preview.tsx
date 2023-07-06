import '@amsterdam/design-system-tokens/dist/root.css'
import '@amsterdam/design-system-assets/font/index.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    // Show code by default.
    canvas: {
      sourceState: 'shown',
    },
  },
  options: {
    storySort: {
      order: ['Docs', ['Intro']],
    },
  },
  viewMode: 'docs',
}
