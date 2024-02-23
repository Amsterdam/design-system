import '@amsterdam/design-system-tokens/dist/index.css'
import '@amsterdam/design-system-tokens/dist/compact.theme.css'
import '@amsterdam/design-system-assets/font/index.css'
import '@amsterdam/design-system-css/dist/index.css'
import './storybook-overrides.css'
import { withThemeByClassName } from '@storybook/addon-themes'
import { viewports } from './viewports'

export const argTypes = {
  children: {
    table: { disable: true },
  },
}

// Set language to Dutch for Canvas and Stories
export const decorators = [
  (Story: any) => (
    <div lang="nl">
      <Story />
    </div>
  ),
  withThemeByClassName({
    themes: {
      Spacious: 'amsterdam-theme--spacious',
      Compact: 'amsterdam-theme--compact',
    },
    defaultTheme: 'Spacious',
  }),
]

export const parameters = {
  actions: {
    argTypesRegex: '^on[A-Z].*',
  },
  backgrounds: {
    disable: true,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    sort: 'alpha',
  },
  options: {
    storySort: {
      order: [
        'Docs',
        ['Introduction', 'Assets', 'Design Guidelines'],
        'React Components',
        ['Buttons', 'Containers', 'Feedback', 'Forms', 'Layout', 'Media', 'Navigation', 'Text'],
      ],
    },
  },
  viewport: {
    viewports,
  },
  viewMode: 'docs',
}
