/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { FileCard, FileList } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '#storybook/_common/renderComponentVariants'

import { default as fileListMeta } from './FileList.stories'

const meta = {
  ...fileListMeta,
  title: 'Components/Forms/File List',
} satisfies Meta<typeof FileList>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  args: {
    children: (
      <FileList.Item>
        <FileCard name="paspoort.pdf" size={1536000} type="application/pdf" />
      </FileList.Item>
    ),
  },
  render: (args, context) => renderComponentVariants(FileList, { args }, context),
  tags: ['!dev', '!autodocs', '!manifest'],
}
