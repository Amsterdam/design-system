import '@amsterdam/design-system-tokens/dist/index.css'
import '@amsterdam/design-system-tokens/dist/compact.theme.css'
import '@amsterdam/design-system-assets/font/index.css'
import '@amsterdam/design-system-css/dist/index.css'

import '../src/styles/docs.css'
import '../src/styles/overrides.css'
import type { PageProps } from '@amsterdam/design-system-react'
import type { StoryContext, StoryFn } from '@storybook/react-vite'

import { Page } from '@amsterdam/design-system-react'
import { withThemeByClassName } from '@storybook/addon-themes'
import { clsx } from 'clsx'

import { viewports } from './viewports'

export const argTypes = {
  children: {
    table: { disable: true },
  },
  className: {
    table: { disable: true },
  },
  style: {
    table: { disable: true },
  },
}

// Wrap in Page, set language to Dutch for Canvas and Stories
export const decorators = [
  (Story: StoryFn, context: StoryContext) => {
    const { component, args } = context
    if (component?.displayName === 'Page') {
      return <Story />
    }

    const withMenu: PageProps['withMenu'] = context.title.startsWith('Pages/Internal')

    return (
      <Page
        className={clsx({
          '_ams-page-background--dark': args['color'] === 'inverse',
          '_ams-page-background--light': args['color'] === 'contrast',
        })}
        lang="nl"
        withMenu={withMenu}
      >
        <Story />
      </Page>
    )
  },
  withThemeByClassName({
    defaultTheme: 'Spacious',
    themes: {
      Compact: 'ams-body ams-theme--compact',
      Spacious: 'ams-body',
    },
  }),
]

export const parameters = {
  backgrounds: {
    disabled: true,
    grid: {
      disable: true,
    },
  },
  controls: {
    sort: 'alpha', // Sorts controls in the Controls addon
  },
  docs: {
    codePanel: true,
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
        ['Introduction', 'Public', ['Introduction', 'Home Page'], 'Internal', ['Introduction', 'Home Page']],
      ],
    },
  },
  pseudo: {
    hover: ['.hover'],
  },
  viewMode: 'docs',
  viewport: {
    options: viewports,
  },
}

export const tags = ['autodocs']
