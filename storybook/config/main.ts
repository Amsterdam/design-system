import type { StorybookConfig } from '@storybook/react-vite'

import remarkGfm from 'remark-gfm'

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
    'storybook-addon-pseudo-states',
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
  },
}

export default config
