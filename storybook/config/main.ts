import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  core: {
    disableTelemetry: true,
  },
  stories: ['../src/**/*.docs.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-themes',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: true,
  },
}

export default config
