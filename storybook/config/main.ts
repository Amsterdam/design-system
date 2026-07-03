/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { StorybookConfig } from '@storybook/react-vite'

import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import remarkGfm from 'remark-gfm'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(__dirname, '../..')

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-themes',
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
    '@storybook/addon-vitest',
    ...(process.env['IS_CHROMATIC'] || process.env['NODE_ENV'] === 'development'
      ? ['storybook-addon-pseudo-states']
      : []),
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
}

export default config
