/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Page } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../utils/renderComponentVariants'
import { default as pageMeta } from './Page.stories'

const meta = {
  ...pageMeta,
  title: 'Components/Containers/Page',
} satisfies Meta<typeof Page>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) =>
    renderComponentVariants({
      component: Page,
      args,
    }),
  tags: ['!dev', '!autodocs'],
}
