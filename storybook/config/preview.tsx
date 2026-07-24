import type { StoryContext, StoryFn } from '@storybook/react-vite'
import type { ComponentProps } from 'react'
import type { ArgTypesEnhancer } from 'storybook/internal/types'

import { DocsContainer } from '@storybook/addon-docs/blocks'
import { clsx } from 'clsx'
import { addons } from 'storybook/preview-api'

import { collapseInlineObjects, maxInlineWidth } from './collapseInlineObjects'
import { sortLiteralUnionValues } from './sortLiteralUnionValues'
import { matchTheme, readStoredTheme, THEME_EVENT, THEME_KEY, themeNames } from './themes'
import { viewports } from './viewports'

import '@amsterdam/design-system-tokens/dist/index.css'
import '@amsterdam/design-system-tokens/dist/compact.theme.css'
import '@amsterdam/design-system-tokens/dist/lo-fi.theme.css'
import '@amsterdam/design-system-assets/font/index.css'
import '@amsterdam/design-system-assets/font/lo-fi/index.css'
import '@amsterdam/design-system-css/dist/index.css'
import '../src/_styles/authoring.css'
import '../src/_styles/docs.css'
import '../src/_styles/canvas.css'

// Load the Redacted Script font up front so switching to Lo-fi Mode applies it instantly.
// The @font-face files load lazily on first use otherwise, flashing the fallback font — and
// reflowing the whole story — for a moment after each switch. One weight per file is enough.
if (typeof document !== 'undefined' && 'fonts' in document) {
  for (const face of ['300 1em "Redacted Script"', '400 1em "Redacted Script"', '700 1em "Redacted Script"']) {
    document.fonts.load(face).catch(() => {})
  }
}

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

type ComponentWithDocgen = {
  __docgenInfo?: {
    props?: Record<string, { tags?: Record<string, string> }>
  }
}

// Surface `@deprecated` JSDoc tags in the controls tables: lead the prop description with a bold
// notice and group the prop under a ‘Deprecated’ category at the bottom of the table.
// The tags reach the docgen info through `shouldIncludePropTagMap` in main.ts.
const formatDeprecatedProps: ArgTypesEnhancer = ({ component, argTypes }) => {
  const docgenProps = (component as ComponentWithDocgen | null)?.__docgenInfo?.props

  if (!docgenProps) {
    return argTypes
  }

  return Object.fromEntries(
    Object.entries(argTypes).map(([name, argType]) => {
      const deprecated = docgenProps[name]?.tags?.['deprecated']

      if (deprecated === undefined) {
        return [name, argType]
      }

      return [
        name,
        {
          ...argType,
          description: [`**Deprecated.** ${deprecated}`.trim(), argType.description].filter(Boolean).join('\n\n'),
          table: { ...argType.table, category: 'Deprecated' },
        },
      ]
    }),
  )
}

// Show `@default` JSDoc tags in the ‘Default’ column of the controls tables, unless docgen already
// derived a default value from the code itself.
// The tags reach the docgen info through `shouldIncludePropTagMap` in main.ts.
const formatDefaultValues: ArgTypesEnhancer = ({ component, argTypes }) => {
  const docgenProps = (component as ComponentWithDocgen | null)?.__docgenInfo?.props

  if (!docgenProps) {
    return argTypes
  }

  return Object.fromEntries(
    Object.entries(argTypes).map(([name, argType]) => {
      const defaultValue = docgenProps[name]?.tags?.['default']

      if (defaultValue === undefined || argType.table?.defaultValue !== undefined) {
        return [name, argType]
      }

      return [name, { ...argType, table: { ...argType.table, defaultValue: { summary: defaultValue } } }]
    }),
  )
}

export const argTypesEnhancers = [formatDefaultValues, formatDeprecatedProps, sortLiteralUnionValues]

// Applies the mode classes as a plain CSS class toggle on the root element. The theme is sent from
// the toolbar (manager.tsx) over the channel rather than through a Storybook global: a global change
// re-renders every story on the page — very janky on docs pages with many canvases — whereas this
// toggle is a single style recalc. The decorator resolves the class per story render (so pinned
// stories adapt on navigation); the channel listener handles toolbar switches without a re-render.
let selectedTheme = readStoredTheme()
let currentOptions: string[] = themeNames

const applyModeClasses = (theme: string) => {
  const { classList } = document.documentElement
  classList.toggle('ams-theme--compact', theme.startsWith('Compact'))
  classList.toggle('ams-theme--lo-fi', theme.includes('Lo-fi'))
}

const applySelectedTheme = (theme: string) => {
  if (!theme) {
    return
  }

  selectedTheme = theme
  applyModeClasses(matchTheme(currentOptions, selectedTheme))
}

let listenersBound = false
const bindThemeListeners = () => {
  if (listenersBound) {
    return
  }
  listenersBound = true

  // The toolbar sends the selection over the Storybook channel — the fast path in Chrome and
  // Firefox.
  addons.getChannel().on(THEME_EVENT, applySelectedTheme)

  // Safari does not reliably deliver that channel message across the manager/preview boundary, so
  // also react to the localStorage write the toolbar makes: the storage event fires in this frame
  // when the manager frame changes the value, and is dependable across browsers.
  window.addEventListener('storage', (event) => {
    if (event.key === THEME_KEY && event.newValue) {
      applySelectedTheme(event.newValue)
    }
  })
}

const withModeClassNames = (Story: StoryFn, context: StoryContext) => {
  bindThemeListeners()

  const override = context.parameters['themes']?.['options']
  currentOptions = Array.isArray(override) ? (override as string[]) : themeNames
  applyModeClasses(matchTheme(currentOptions, selectedTheme))

  return <Story />
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
  withModeClassNames,
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
    expanded: true, // Shows the description and default columns in the Controls addon
    sort: 'alpha', // Sorts controls in the Controls addon
  },
  docs: {
    codePanel: true,
    container: DocsContainerWithFooter,
    controls: {
      sort: 'alpha', // Sorts controls in the Controls doc block – https://github.com/storybookjs/storybook/issues/25386#issuecomment-1905468177
    },
    source: {
      // Collapse the multi-line object and array props that the source generator expands (see the module).
      transform: collapseInlineObjects,
    },
    toc: {
      headingSelector: 'h2, h3',
    },
  },
  html: {
    root: '.ams-body',
  },
  // Declare Dutch on the story root in story view and on the embedded canvases in docs view. Without
  // this, Storybook marks docs canvases as English, so screen readers would mispronounce the Dutch
  // examples. The decorator above refines the language per story through `parameters.lang` or a
  // `locale` arg; docs prose keeps Storybook’s English default.
  htmlLang: 'nl',
  // Widen the Code Panel’s line budget. Without this, react-element-to-jsx-string – which generates the
  // source for stories with a `render` function – puts every element with more than one attribute onto
  // multiple lines. Keeping attributes inline until a line reaches this length shows more code at once.
  jsx: {
    maxInlineAttributesLineLength: maxInlineWidth,
  },
  options: {
    storySort: {
      order: [
        'Docs',
        ['Introduction', 'Release notes'],
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
