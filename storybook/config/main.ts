/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { StorybookConfig } from '@storybook/react-vite'

import { dirname } from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import remarkGfm from 'remark-gfm'

// Apply suggestion for module resolution in special environments
// See: https://storybook.js.org/docs/faq#how-do-i-fix-module-resolution-in-special-environments
const getAbsolutePath = (packageName: string) => {
  return dirname(fileURLToPath(import.meta.resolve(`${packageName}/package.json`)))
}

const config: StorybookConfig = {
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-themes'),
    {
      name: getAbsolutePath('@storybook/addon-docs'),
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    getAbsolutePath('@linus_janns/storybook-addon-html'),
    ...(process.env['IS_CHROMATIC'] || process.env['NODE_ENV'] === 'development'
      ? [getAbsolutePath('storybook-addon-pseudo-states')]
      : []),
  ],

  core: {
    disableTelemetry: true,
  },

  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },

  staticDirs: ['../../packages-proprietary/assets'],
  stories: ['../src/**/*.docs.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
}

export default config
