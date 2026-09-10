/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { FileCard, FileList } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Forms/File List',
  component: FileList.Item,
  argTypes: {
    file: { control: false }, // Deprecated, and a File object has no usable controls panel widget.
    onDelete: { control: false },
  },
  decorators: [
    (Story) => (
      <FileList>
        <Story />
      </FileList>
    ),
  ],
  tags: ['!manifest'],
} satisfies Meta<typeof FileList.Item>

export default meta

type Story = StoryObj<typeof meta>

export const Item: Story = {
  args: {
    children: <FileCard name="document.pdf" onDelete={() => {}} size={1536000} type="application/pdf" />,
  },
}
