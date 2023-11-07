// Some viewport types that Storybook doesn’t seem to export
// Copied from https://github.com/storybookjs/storybook/blob/next/code/addons/viewport/src/models/Viewport.ts

export interface ViewportMap {
  [key: string]: Viewport
}

interface Viewport {
  name: string
  styles: ViewportStyles
  type: 'desktop' | 'mobile' | 'tablet' | 'other'
}

interface ViewportStyles {
  height: string
  width: string
}
