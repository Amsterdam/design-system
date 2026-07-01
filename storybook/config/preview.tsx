import type { StoryContext, StoryFn } from '@storybook/react-vite'
import type { ComponentProps } from 'react'

import { DocsContainer } from '@storybook/addon-docs/blocks'
import { withThemeByClassName } from '@storybook/addon-themes'
import { clsx } from 'clsx'

import { viewports } from './viewports'

import '@amsterdam/design-system-tokens/dist/index.css'
import '@amsterdam/design-system-tokens/dist/compact.theme.css'
import '@amsterdam/design-system-assets/font/index.css'
import '@amsterdam/design-system-css/dist/index.css'
import '../src/_styles/docs.css'
import '../src/_styles/overrides.css'
import '../src/_styles/tests.css'

export const argTypes = {
  children: {
    table: { disable: true },
  },
  className: {
    table: { disable: true },
  },
  defaultValue: {
    control: false,
    table: { disable: true },
  },
  onChange: {
    control: false,
    table: { disable: true },
  },
  onSubmit: {
    control: false,
    table: { disable: true },
  },
  style: {
    table: { disable: true },
  },
}

// Set the page language and apply the page background overrides for Canvas and Stories.
// Components that need a realistic Page or a width constraint add that themselves through a decorator.
export const decorators = [
  (Story: StoryFn, context: StoryContext) => {
    const { args, parameters } = context

    // The language of the story frame, so localised examples announce and hyphenate correctly and
    // any `:lang()`-based styling resolves. In priority order:
    //   1. `parameters.lang` — a story or component pins a fixed language;
    //   2. the language subtag of the `locale` arg — a story with a locale control; `lang` tracks it;
    //   3. `'nl'` — the Dutch default.
    const locale = args['locale']
    const lang = parameters['lang'] ?? (typeof locale === 'string' ? locale.split('-')[0] : undefined) ?? 'nl'

    return (
      <div
        className={clsx('ams-body _ams-body--storybook', {
          '_ams-page-background--dark': args['color'] === 'inverse',
          '_ams-page-background--light': args['color'] === 'contrast',
        })}
        lang={lang}
      >
        <Story />
      </div>
    )
  },
  withThemeByClassName({
    defaultTheme: 'Spacious',
    themes: {
      Compact: 'ams-theme--compact',
      Spacious: '',
    },
  }),
]

// Append the City’s three crosses as a centered footer beneath every docs page.
const DocsContainerWithFooter = ({ children, ...props }: ComponentProps<typeof DocsContainer>) => (
  <DocsContainer {...props}>
    {children}
    <div aria-hidden="true" className="_ams-docs-footer">
      ×××
    </div>
  </DocsContainer>
)

export const parameters = {
  backgrounds: { disable: true },
  controls: {
    sort: 'alpha', // Sorts controls in the Controls addon
  },
  docs: {
    codePanel: true,
    container: DocsContainerWithFooter,
    controls: {
      sort: 'alpha', // Sorts controls in the Controls doc block – https://github.com/storybookjs/storybook/issues/25386#issuecomment-1905468177
    },
    toc: {
      headingSelector: 'h2, h3',
    },
  },
  html: {
    root: '.ams-body',
  },
  options: {
    storySort: {
      order: [
        'Docs',
        ['Introduction', ['Getting Started']],
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
