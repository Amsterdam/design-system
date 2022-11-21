/* eslint-env node */
module.exports = {
  core: {
    builder: 'webpack5',
    disableTelemetry: true,
  },
  stories: ['../src/stories/**/*.stories.mdx', '../src/stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    'storybook-addon-pseudo-states',
    '@storybook/preset-scss',
  ],
  features: {
    postcss: false,
    buildStoriesJson: true,
  },
  framework: '@storybook/react',
  staticDirs: ['../../../proprietary/assets'],
  webpackFinal: async (config) => ({
    ...config,
    performance: {
      // Disable warning for: "asset size exceeds the recommended limit (244 KiB)"
      hints: false,
    },
  }),
};
