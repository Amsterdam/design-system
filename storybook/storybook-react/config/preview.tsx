import '@amsterdam/design-system-tokens/dist/root.css'
import '@amsterdam/design-system-assets/font/index.css'
import '@amsterdam/design-system-css/dist/index.css'

const viewports = {
  narrow: {
    name: 'Breakpoint: Narrow',
    styles: {
      width: '320px',
      height: '640px',
    },
  },
  medium: {
    name: 'Breakpoint: Medium',
    styles: {
      width: '576px',
      height: '640px',
    },
  },
  wide: {
    name: 'Breakpoint: Wide',
    styles: {
      width: '1088px',
      height: '640px',
    },
  },
  'x-wide': {
    name: 'Max width: website',
    styles: {
      width: '1600px',
      height: '640px',
    },
  },
  'xx-wide': {
    name: 'Max width: application',
    styles: {
      width: '2112px',
      height: '640px',
    },
  },
}

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
  docs: {
    // Show code by default.
    canvas: {
      sourceState: 'shown',
    },
  },
  options: {
    storySort: {
      order: ['Buttons', 'Containers', 'Feedback', 'Forms', 'Layout', 'Media', 'Navigation', 'Text'],
    },
  },
  viewport: {
    defaultViewport: 'responsive',
    viewports,
  },
  viewMode: 'docs',
}
