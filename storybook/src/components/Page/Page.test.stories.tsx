/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Page } from '@amsterdam/design-system-react/src'

import { getVariants } from '../../utils/getVariants'
import { default as pageMeta } from './Page.stories'

const meta = {
  ...pageMeta,
  title: 'Components/Containers/Page',
} satisfies Meta<typeof Page>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) =>
    getVariants({
      component: Page,
      args,
    }),
  tags: ['!dev', '!autodocs'],
}
