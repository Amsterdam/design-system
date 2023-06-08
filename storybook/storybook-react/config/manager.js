import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming/create'
import config from '../../../storybook/storybook-theme/amsterdam'

addons.setConfig(create(config))
