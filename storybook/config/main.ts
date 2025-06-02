import type { StorybookConfig } from '@storybook/react-vite'
import { createRequire } from 'node:module'
import { dirname, join } from 'node:path'
import remarkGfm from 'remark-gfm'

const require = createRequire(import.meta.url)

const getAbsolutePath = (value: string): any => dirname(require.resolve(join(value, 'package.json')))

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
    getAbsolutePath('@whitespace/storybook-addon-html'),
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
