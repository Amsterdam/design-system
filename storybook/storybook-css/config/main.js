/* eslint-env node */
module.exports = {
  core: {
    builder: '@storybook/builder-webpack5',
    disableTelemetry: true,
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/preset-scss',
  ],
  features: {
    postcss: false,
    buildStoriesJson: true,
    previewMdx2: true,
  },
  framework: '@storybook/react',
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
  webpackFinal: async (config) => ({
    ...config,
    performance: {
      // Disable warning for: "asset size exceeds the recommended limit (244 KiB)"
      hints: false,
    },
  }),
}
