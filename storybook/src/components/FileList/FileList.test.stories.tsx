/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { FileList } from '@amsterdam/design-system-react/src'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { default as fileListMeta } from './FileList.stories'

const meta = {
  ...fileListMeta,
  title: 'Components/Forms/File List',
} satisfies Meta<typeof FileList>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  tags: ['!dev', '!autodocs'],
}
