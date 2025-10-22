/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Page } from '@amsterdam/design-system-react/src'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { default as buttonMeta } from './Page.stories'

const meta = {
  ...buttonMeta,
  title: 'Components/Containers/Page',
} satisfies Meta<typeof Page>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  args: {
    children: <div className="ams-docs-item" />,
  },
  tags: ['!dev', '!autodocs'],
}
