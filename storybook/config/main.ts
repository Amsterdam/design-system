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
    ...(process.env['IS_CHROMATIC'] || process.env['NODE_ENV'] === 'development'
      ? ['storybook-addon-pseudo-states']
      : []),
  ],

  core: {
    disableTelemetry: true,
  },

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  staticDirs: ['../../packages-proprietary/assets'],
  stories: ['../src/**/*.docs.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      include: [
        `${path.resolve(repoRoot, 'packages/react/src')}/**/*.tsx`,
        `${path.resolve(repoRoot, 'packages-proprietary/react-icons/src')}/**/*.tsx`,
      ],
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      tsconfigPath: path.resolve(repoRoot, 'packages/react/tsconfig.json'),
    },
  },
}

export default config
