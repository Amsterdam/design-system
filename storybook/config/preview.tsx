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
      Spacious: '',
      Compact: 'ams-theme--compact',
    },
    defaultTheme: 'Spacious',
  }),
]

export const parameters = {
  backgrounds: {
    disable: true,
  },
  controls: {
    sort: 'alpha',
  },
  options: {
    storySort: {
      order: [
        'Docs',
        ['Introduction', 'Getting started', 'Assets', 'Design Guidelines'],
        'Components',
        ['Buttons', 'Containers', 'Feedback', 'Forms', 'Layout', 'Media', 'Navigation', 'Text'],
        'Pages',
        ['Introduction', 'Amsterdam.nl', ['Home Page'], 'Amopis'],
      ],
    },
  },
  viewport: {
    viewports,
  },
  viewMode: 'docs',
  html: {
    root: 'div[lang="nl"]',
  },
}
