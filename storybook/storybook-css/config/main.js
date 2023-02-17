/* eslint-env node */
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/preset-scss',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
    disableTelemetry: true,
  },
  features: {
    postcss: false,
    buildStoriesJson: true,
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
        url: '../storybook-react',
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
