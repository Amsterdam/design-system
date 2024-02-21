import '@amsterdam/design-system-tokens/dist/index.css'
import '@amsterdam/design-system-tokens/dist/compact.theme.css'
import '@amsterdam/design-system-assets/font/index.css'
import '@amsterdam/design-system-css/dist/index.css'
import '../../storybook-overrides.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Docs', ['Introduction', 'Assets', 'Design Guidelines']],
    },
  },
  viewMode: 'docs',
}
