import remarkGfm from 'remark-gfm'

/* eslint-env node */
module.exports = {
  core: {
    disableTelemetry: true,
  },
  // Removing the stories.mdx pattern here currently (1-6-2023) somehow
  // breaks (local) composition, so be careful
  stories: ['../src/**/*.stories.@(mdx|js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
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
  ],
  features: {
    buildStoriesJson: true,
    storyStoreV7: true,
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  refs: (_, { configType }) => {
    if (configType === 'DEVELOPMENT') {
      return {
        react: {
          title: 'React Components',
          url: 'http://localhost:6007',
        },
      }
    }
    return {
      react: {
        title: 'React.js Components',
        url: '../design-system/storybook-react',
      },
    }
  },
}
