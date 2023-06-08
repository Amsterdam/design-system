import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming/create'
import amsterdam from '../../../storybook/storybook-theme/amsterdam'

addons.setConfig({ theme: create(amsterdam) })
