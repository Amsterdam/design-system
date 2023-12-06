import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming/create'
import themeConfig from '../../../storybook/theme.config'

addons.setConfig({
  theme: create(themeConfig),
  sidebar: {
    filters: {
      hidden: (item) => {
        console.log(item.title, item.tags)
        return !item.tags.includes('hidden')
      },
    },
  },
})
