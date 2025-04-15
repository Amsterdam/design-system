import '@amsterdam/design-system-tokens/dist/index.css'
import '@amsterdam/design-system-tokens/dist/compact.theme.css'
import '@amsterdam/design-system-assets/font/index.css'
import '@amsterdam/design-system-css/dist/index.css'
import '../src/styles/docs.css'
import '../src/styles/overrides.css'
import { Page } from '@amsterdam/design-system-react'
import { withThemeByClassName } from '@storybook/addon-themes'
import type { StoryContext, StoryFn } from '@storybook/react'
import clsx from 'clsx'
import { viewports } from './viewports'

export const argTypes = {
  children: {
    table: { disable: true },
  },
}

// Wrap in Screen, set language to Dutch for Canvas and Stories
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
    disable: true,
    grid: {
      disable: true,
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
    root: '.ams-screen',
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
  viewMode: 'docs',
  viewport: {
    viewports,
  },
}
