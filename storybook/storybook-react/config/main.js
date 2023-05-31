/* eslint-env node */
module.exports = {
  core: {
    disableTelemetry: true,
  },
  stories: ['../src/**/*.docs.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  features: {
    postcss: false,
    buildStoriesJson: true,
    StoryStoreV7: true,
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
}
