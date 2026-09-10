/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Column } from '@amsterdam/design-system-react'
import { FileCard, FileList, formatFileDetailsTextEn } from '@amsterdam/design-system-react/src'

const remove = () => {}

const meta = {
  title: 'Components/Forms/File Card',
  component: FileCard,
  args: {
    name: 'paspoort.pdf',
    size: 1536000,
    type: 'application/pdf',
  },
  argTypes: {
    formatDetailsText: { control: false },
    onDelete: { control: false },
    size: { control: { min: 0, type: 'number' } },
  },
} satisfies Meta<typeof FileCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onDelete: remove,
  },
}

export const WithPreview: Story = {
  args: {
    name: 'pasfoto.jpg',
    onDelete: remove,
    previewUrl: 'https://picsum.photos/id/64/128/128',
    size: 248000,
    type: 'image/jpeg',
  },
}

export const WithoutActions: Story = {}

export const InAFileList: Story = {
  args: {
    onDelete: remove,
  },
  render: (args) => (
    <FileList>
      <FileList.Item>
        <FileCard {...args} />
      </FileList.Item>
      <FileList.Item>
        <FileCard
          {...args}
          name="pasfoto.jpg"
          previewUrl="https://picsum.photos/id/64/128/128"
          size={248000}
          type="image/jpeg"
        />
      </FileList.Item>
      <FileList.Item>
        <FileCard {...args} name="aanvraag-2026-03-11-definitief.docx" size={72000} type="application/msword" />
      </FileList.Item>
    </FileList>
  ),
}

export const Translated: Story = {
  args: {
    onDelete: remove,
  },
  render: (args) => (
    <Column>
      <FileCard {...args} lang="nl" />
      <FileCard
        {...args}
        deleteButtonLabel="Delete"
        formatDetailsText={formatFileDetailsTextEn}
        lang="en"
        name="passport.pdf"
      />
    </Column>
  ),
}
