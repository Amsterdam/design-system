/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { FileList } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../_common/renderComponentVariants'
import { default as fileListMeta } from './FileList.stories'

const meta = {
  ...fileListMeta,
  title: 'Components/Forms/File List',
} satisfies Meta<typeof FileList>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  args: {
    children: <FileList.Item file={new File(['sample1'], 'sample1.txt', { type: 'text/plain' })} />,
  },
  render: (args) => renderComponentVariants(FileList, { args }),
  tags: ['!dev', '!autodocs'],
}
