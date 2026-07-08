/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { FileList } from '@amsterdam/design-system-react/src'

const sampleFile = new File(['sample'], 'document.pdf', { lastModified: Date.now(), type: 'application/pdf' })

const meta = {
  title: 'Components/Forms/File List',
  component: FileList.Item,
  argTypes: {
    file: { control: false }, // A File object has no usable controls panel widget.
    onDelete: { control: false },
  },
  decorators: [
    (Story) => (
      <FileList>
        <Story />
      </FileList>
    ),
  ],
} satisfies Meta<typeof FileList.Item>

export default meta

type Story = StoryObj<typeof meta>

export const Item: Story = {
  args: {
    file: sampleFile,
    onDelete: () => {},
  },
}
