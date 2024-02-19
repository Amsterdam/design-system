import remarkGfm from 'remark-gfm'

// eslint-disable-next-line no-undef
const { STORYBOOK_BUILD_PATH } = process.env
const REPO_NAME = 'design-system'

const config = {
  core: {
    disableTelemetry: true,
  },
  // Removing the stories.mdx pattern here currently (1-6-2023) somehow
  // breaks (local) composition, so be careful
  stories: ['../src/*.stories.@(mdx|js|jsx|ts|tsx)'],
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
  refs: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = STORYBOOK_BUILD_PATH ? `/${REPO_NAME}/${STORYBOOK_BUILD_PATH}` : `/${REPO_NAME}`
    }
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
        title: 'React Components',
        url: STORYBOOK_BUILD_PATH ? `../${STORYBOOK_BUILD_PATH}/storybook-react` : `../${REPO_NAME}/storybook-react`,
      },
    }
  },
}

export default config
