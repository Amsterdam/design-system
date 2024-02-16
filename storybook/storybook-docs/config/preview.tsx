import '@amsterdam/design-system-tokens/dist/index.css'
import '@amsterdam/design-system-tokens/dist/compact.theme.css'
import '@amsterdam/design-system-assets/font/index.css'
import '@amsterdam/design-system-css/dist/index.css'
import '../../storybook-overrides.css'
import { withThemeByClassName } from '@storybook/addon-themes'

export const decorators = [
  (Story: any) => (
    <div lang="nl">
      <Story />
    </div>
  ),
  withThemeByClassName({
    themes: {
      spacious: 'amsterdam-theme--spacious',
      compact: 'amsterdam-theme--compact',
    },
    defaultTheme: 'spacious',
  }),
]

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
