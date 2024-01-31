import '@amsterdam/design-system-tokens/dist/root.css'
import '@amsterdam/design-system-assets/font/index.css'
import '@amsterdam/design-system-css/dist/index.css'
import '../../storybook-overrides.css'
import { viewports } from './viewports'

export const decorators = [
  (Story: any) => {
    // Set language to Dutch for Canvas and Stories
    document.querySelectorAll('.docs-story').forEach((e) => e.setAttribute('lang', 'nl'))

    return Story()
  },
]

export const parameters = {
  actions: {
    argTypesRegex: '^on[A-Z].*',
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Buttons', 'Containers', 'Feedback', 'Forms', 'Layout', 'Media', 'Navigation', 'Text'],
    },
  },
  viewport: {
    viewports,
  },
  viewMode: 'docs',
}
