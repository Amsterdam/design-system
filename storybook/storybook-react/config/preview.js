import '@amsterdam/design-tokens/dist/index.css'
import '@amsterdam/components-css/document/document.scss'
import '@amsterdam/font/src/index.css'

export const decorators = [(Story) => <div className="amsterdam-document amsterdam-theme">{Story()}</div>]

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
}
