import '@amsterdam/design-system-tokens/dist/index.css'
import '@amsterdam/design-system-tokens/dist/compact.theme.css'
import '@amsterdam/design-system-assets/font/index.css'
import '@amsterdam/design-system-css/dist/index.css'
import '../src/styles/docs.css'
import '../src/styles/overrides.css'
import { Screen } from '@amsterdam/design-system-react'
import { withThemeByClassName } from '@storybook/addon-themes'
import { viewports } from './viewports'

export const argTypes = {
  children: {
    table: { disable: true },
  },
}

// Wrap in Screen, set language to Dutch for Canvas and Stories
export const decorators = [
  (Story: any) => (
    <Screen lang="nl">
      <Story />
    </Screen>
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
  grid: {
    disable: true,
  },
  options: {
    storySort: {
      order: [
        'Docs',
        ['Introduction', 'Developer Guide', ['Getting Started']],
        'Brand',
        'Components',
        ['Buttons', 'Containers', 'Feedback', 'Forms', 'Layout', 'Media', 'Navigation', 'Text'],
        'Utilities',
        'Pages',
        ['Introduction', 'Amsterdam.nl', ['Home Page']],
      ],
    },
  },
  viewport: {
    viewports,
  },
  viewMode: 'docs',
  html: {
    root: '.ams-screen',
  },
}
