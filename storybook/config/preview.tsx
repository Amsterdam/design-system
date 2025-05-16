import '@amsterdam/design-system-tokens/dist/index.css'
import '@amsterdam/design-system-tokens/dist/compact.theme.css'
import '@amsterdam/design-system-assets/font/index.css'
import '@amsterdam/design-system-css/dist/index.css'
import '../src/styles/docs.css'
import '../src/styles/overrides.css'
import { Page } from '@amsterdam/design-system-react'
import { withThemeByClassName } from '@storybook/addon-themes'
import type { StoryContext, StoryFn } from '@storybook/react'
import { viewports } from './viewports'
import clsx from 'clsx'

export const argTypes = {
  children: {
    table: { disable: true },
  },
}

// Wrap in Page, set language to Dutch for Canvas and Stories
export const decorators = [
  (Story: StoryFn, { args }: StoryContext) => (
    <Page
      className={clsx({
        'ams-docs-dark-background': args['color'] === 'inverse',
        'ams-docs-light-background': args['color'] === 'contrast',
      })}
      lang="nl"
    >
      <Story />
    </Page>
  ),
  withThemeByClassName({
    defaultTheme: 'Spacious',
    themes: {
      Compact: 'ams-theme--compact',
      Spacious: '',
    },
  }),
]

export const parameters = {
  backgrounds: {
    grid: {
      disable: true,
    },
    options: {
      white: { name: 'white', value: '#FFFFFF' },
      azure: { name: 'azure', value: '#009DE6' },
      blue: { name: 'blue', value: '#004699' },
      green: { name: 'green', value: '#00A03C' },
      lime: { name: 'lime', value: '#BED200' },
      magenta: { name: 'magenta', value: '#E50082' },
      orange: { name: 'orange', value: '#FF9100' },
      purple: { name: 'purple', value: '#A00078' },
      yellow: { name: 'yellow', value: '#FFE600' },
    },
  },
  controls: {
    sort: 'alpha', // Sorts controls in the Controls addon
  },
  docs: {
    controls: {
      sort: 'alpha', // Sorts controls in the Controls doc block – https://github.com/storybookjs/storybook/issues/25386#issuecomment-1905468177
    },
  },
  html: {
    root: '.ams-page',
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
        ['Introduction', 'Guidelines', 'Amsterdam.nl', ['Home Page']],
      ],
    },
  },
  viewMode: 'docs',
  viewport: {
    viewports,
  },
}

export const initialGlobals = {
  backgrounds: { value: 'light' },
}
