/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button, Column } from '@amsterdam/design-system-react'
import { FileCard, formatFileMetadataTextEn } from '@amsterdam/design-system-react/src'

const remove = () => {}
const download = () => {}

const meta = {
  title: 'Components/Forms/File Card',
  component: FileCard,
  args: {
    name: 'paspoort.pdf',
    size: 1536000,
    type: 'application/pdf',
  },
  argTypes: {
    actions: { control: false },
    formatMetadataText: { control: false },
    onDelete: { control: false },
    size: { control: { min: 0, type: 'number' } },
  },
} satisfies Meta<typeof FileCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

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

export const WithCustomActions: Story = {
  args: {
    actions: (
      <Button onClick={download} variant="tertiary">
        Download
      </Button>
    ),
    onDelete: remove,
  },
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
        formatMetadataText={formatFileMetadataTextEn}
        lang="en"
        name="passport.pdf"
      />
    </Column>
  ),
}
