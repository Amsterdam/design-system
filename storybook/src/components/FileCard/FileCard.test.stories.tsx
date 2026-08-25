/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Column } from '@amsterdam/design-system-react'
import { FileCard, FileList } from '@amsterdam/design-system-react/src'

import { default as fileCardMeta } from './FileCard.stories'

const meta = {
  ...fileCardMeta,
  title: 'Components/Forms/File Card',
} satisfies Meta<typeof FileCard>

export default meta

type Story = StoryObj<typeof meta>

const remove = () => {}

const longName = 'aanvraag omgevingsvergunning Nieuwezijds Voorburgwal 147 definitieve versie 11 maart 2026.pdf'
const nameWithoutSpaces = 'aanvraag-omgevingsvergunning-nieuwezijds-voorburgwal-147-definitief-2026-03-11.pdf'
const previewUrl = 'https://picsum.photos/id/64/128/128'

/*
 * A hand-built matrix rather than renderComponentVariants: a File Card has no enum or boolean prop, so the
 * generated matrix would be a single cell. What is worth a picture is the preview, the presence of the
 * actions, and the two ways a name too long for its row has to wrap.
 */
export const Test: Story = {
  render: (args) => (
    <Column>
      <p>On its own, with and without a preview and actions</p>
      <FileCard {...args} onDelete={remove} />
      <FileCard {...args} />
      <FileCard {...args} name="pasfoto.jpg" onDelete={remove} previewUrl={previewUrl} type="image/jpeg" />
      <FileCard {...args} name="pasfoto.jpg" previewUrl={previewUrl} type="image/jpeg" />
      <p>Names that do not fit on one row</p>
      <FileCard {...args} name={longName} onDelete={remove} />
      <FileCard {...args} name={nameWithoutSpaces} onDelete={remove} />
      <p>Without a size or a type, so without details</p>
      <FileCard name="besluit.pdf" onDelete={remove} />
      <p>Within a File List</p>
      <FileList>
        <FileList.Item>
          <FileCard {...args} onDelete={remove} />
        </FileList.Item>
        <FileList.Item>
          <FileCard {...args} name="pasfoto.jpg" onDelete={remove} previewUrl={previewUrl} type="image/jpeg" />
        </FileList.Item>
        <FileList.Item>
          <FileCard {...args} name={longName} onDelete={remove} />
        </FileList.Item>
        <FileList.Item>
          <FileCard {...args} name={nameWithoutSpaces} onDelete={remove} />
        </FileList.Item>
      </FileList>
    </Column>
  ),
  tags: ['!dev', '!autodocs', '!manifest'],
}
