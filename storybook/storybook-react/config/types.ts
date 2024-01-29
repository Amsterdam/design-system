// Some viewport types that Storybook doesn’t seem to export
// Copied from https://github.com/storybookjs/storybook/blob/next/code/addons/viewport/src/models/Viewport.ts

export type ViewportMap = {
  [key: string]: Viewport
}

type Viewport = {
  name: string
  styles: ViewportStyles
  type: 'desktop' | 'mobile' | 'tablet' | 'other'
}

type ViewportStyles = {
  height: string
  width: string
}
