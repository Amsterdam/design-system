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
    // '@storybook/preset-scss',
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
}
