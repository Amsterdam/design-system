/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { StorybookConfig } from '@storybook/react-vite'
import type { PluginOption } from 'vite'

import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import remarkGfm from 'remark-gfm'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(__dirname, '../..')

// Let the preview fill the window on a device with a display cutout, instead of being letterboxed
// between two inert bands. Without this, `env(safe-area-inset-*)` stays `0px` and stories can’t
// show whether they hold their content clear of the cutout.
// Storybook’s preview template emits `<meta name="viewport" content="width=device-width,
// initial-scale=1">` itself, and offers no option to configure it: `previewHead` only appends to the
// head, and browsers disagree on which of two viewport meta elements wins. Rewriting the one that is
// already there leaves exactly one, in the markup the browser parses, so there is no reflow.
const viewportFitCover: PluginOption = {
  name: 'ams-viewport-fit-cover',
  transformIndexHtml: {
    handler: (html) => {
      const viewportMeta = /<meta\s+name="viewport"\s+content="([^"]*)"/i

      if (!viewportMeta.test(html)) {
        return html.replace(/<head>/i, '<head>\n    <meta name="viewport" content="viewport-fit=cover" />')
      }

      return html.replace(viewportMeta, (match, content: string) =>
        content.includes('viewport-fit') ? match : match.replace(content, `${content}, viewport-fit=cover`),
      )
    },
    order: 'post',
  },
}

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    '@linus_janns/storybook-addon-html',
    '@storybook/addon-mcp',
    // Load the pseudo-states addon only for Chromatic, which sets `IS_CHROMATIC` through the
    // `build:chromatic` command. It rewrites CSS at runtime to simulate `:hover`/`:focus`/`:active`
    // for the visual regression snapshots. That rewrite breaks selectors that hide on focus, such as
    // `.ams-visually-hidden:not(:active, :focus)` on the Skip Link, so keep it out of the local dev server.
    ...(process.env['IS_CHROMATIC'] === 'true' ? ['storybook-addon-pseudo-states'] : []),
  ],

  core: {
    disableTelemetry: true,
  },

  features: {
    experimentalReactComponentMeta: true,
  },

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  // Mount the individual asset folders rather than the package root: the package
  // also holds infrastructure (node_modules, configs) that must not be published.
  staticDirs: [
    { from: '../../packages-proprietary/assets/app-icons', to: '/app-icons' },
    { from: '../../packages-proprietary/assets/favicon', to: '/favicon' },
    { from: '../../packages-proprietary/assets/font', to: '/font' },
    { from: '../../packages-proprietary/assets/icons', to: '/icons' },
    { from: '../../packages-proprietary/assets/logo', to: '/logo' },
    { from: '../../packages-proprietary/assets/manifest', to: '/manifest' },
  ],
  stories: ['../src/**/*.docs.mdx', '../src/**/*.stories.@(ts|tsx)'],

  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      include: [
        `${path.resolve(repoRoot, 'packages/react/src')}/**/*.tsx`,
        `${path.resolve(repoRoot, 'packages-proprietary/react-icons/src')}/**/*.tsx`,
      ],
      shouldExtractLiteralValuesFromEnum: true,
      shouldIncludePropTagMap: true, // Provides JSDoc tags like `@deprecated` to the argTypes enhancer in preview.tsx
      shouldRemoveUndefinedFromOptional: true,
      tsconfigPath: 'tsconfig.docgen.json',
    },
  },

  viteFinal: (viteConfig) => ({
    ...viteConfig,
    plugins: [...(viteConfig.plugins ?? []), viewportFitCover],
  }),
}

export default config
