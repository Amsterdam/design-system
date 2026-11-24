/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { IconGallery } from './IconGalleryV2'

const meta = {
  title: 'Components/Docs/Icon Gallery V2',
} satisfies Meta<typeof IconGallery>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: () => (
    <IconGallery icons={['CloseIcon', 'SearchIcon', 'ArrowDownIcon', 'ArrowUpIcon', 'ErrorFillIcon', 'ErrorIcon']} />
  ),
  tags: ['!dev', '!autodocs', '!manifest'],
}
