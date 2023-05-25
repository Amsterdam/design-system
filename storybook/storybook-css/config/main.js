/* eslint-env node */
module.exports = {
  core: {
    disableTelemetry: true,
  },
  stories: ['../src/**/*.stories.@(mdx|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  features: {
    postcss: false,
    buildStoriesJson: true,
    previewMdx2: true,
    StoryStoreV7: true,
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
