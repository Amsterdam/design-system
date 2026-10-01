/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button, Column, UnorderedList } from '@amsterdam/design-system-react'
import { FileCard } from '@amsterdam/design-system-react/src'
import { useState } from 'react'
import { expect } from 'storybook/test'

import { default as fileCardMeta } from './FileCard.stories'
import { FileInputWithFileCards } from './FileInputWithFileCards'

const meta = {
  ...fileCardMeta,
  title: 'Components/Forms/File Card',
} satisfies Meta<typeof FileCard>

export default meta

type Story = StoryObj<typeof meta>

const remove = () => {}
const download = () => {}

const longName = 'aanvraag omgevingsvergunning Nieuwezijds Voorburgwal 147 definitieve versie 11 maart 2026.pdf'
const nameWithoutSpaces = 'aanvraag-omgevingsvergunning-nieuwezijds-voorburgwal-147-definitief-2026-03-11.pdf'
const previewUrl = 'https://picsum.photos/id/64/128/128'
const actions = (
  <Button onClick={download} variant="tertiary">
    Download
  </Button>
)

/*
 * A hand-built matrix rather than renderComponentVariants: a File Card has no enum or boolean prop, so the
 * generated matrix would be a single cell. What is worth a picture is the preview, the actions on their own
 * and beside the delete button, and the two ways a name too long for its row has to wrap.
 */
export const Test: Story = {
  render: (args) => (
    <Column>
      <p>On its own, with and without a preview and actions</p>
      <FileCard {...args} onDelete={remove} />
      <FileCard {...args} />
      <FileCard {...args} actions={actions} />
      <FileCard {...args} actions={actions} onDelete={remove} />
      <FileCard {...args} name="pasfoto.jpg" onDelete={remove} previewUrl={previewUrl} type="image/jpeg" />
      <FileCard {...args} name="pasfoto.jpg" previewUrl={previewUrl} type="image/jpeg" />
      <p>Names that do not fit on one row</p>
      <FileCard {...args} name={longName} onDelete={remove} />
      <FileCard {...args} name={nameWithoutSpaces} onDelete={remove} />
      <p>In a narrow container, where the actions move below the name</p>
      <div style={{ maxInlineSize: '20rem' }}>
        <FileCard {...args} actions={actions} name={nameWithoutSpaces} onDelete={remove} />
      </div>
      <p>Without a size or a type, so without details</p>
      <FileCard name="besluit.pdf" onDelete={remove} />
      <p>In an Unordered List</p>
      <UnorderedList markers={false}>
        <UnorderedList.Item>
          <FileCard {...args} onDelete={remove} />
        </UnorderedList.Item>
        <UnorderedList.Item>
          <FileCard {...args} name="pasfoto.jpg" onDelete={remove} previewUrl={previewUrl} type="image/jpeg" />
        </UnorderedList.Item>
        <UnorderedList.Item>
          <FileCard {...args} name={longName} onDelete={remove} />
        </UnorderedList.Item>
        <UnorderedList.Item>
          <FileCard {...args} name={nameWithoutSpaces} onDelete={remove} />
        </UnorderedList.Item>
      </UnorderedList>
    </Column>
  ),
  tags: ['!dev', '!autodocs', '!manifest'],
}

const removableFiles = [
  { name: 'eerste.pdf', size: 1536000, type: 'application/pdf' },
  { name: 'tweede.pdf', size: 248000, type: 'application/pdf' },
  { name: 'derde.pdf', size: 72000, type: 'application/pdf' },
]

const RemovableFileCards = () => {
  const [remaining, setRemaining] = useState(removableFiles)

  return (
    <UnorderedList markers={false}>
      {remaining.map((file) => (
        <UnorderedList.Item key={file.name}>
          <FileCard
            {...file}
            onDelete={() => setRemaining((current) => current.filter(({ name }) => name !== file.name))}
          />
        </UnorderedList.Item>
      ))}
    </UnorderedList>
  )
}

/*
 * Removing a file here really removes it, so this covers what the unit tests cannot: where focus ends up
 * once React has taken the item away, rather than where it was put just before.
 */
export const FocusAfterDelete: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Verwijder tweede.pdf' }))

    await expect(canvas.queryByText('tweede.pdf')).not.toBeInTheDocument()
    await expect(canvas.getByRole('button', { name: 'Verwijder derde.pdf' })).toHaveFocus()

    await userEvent.click(canvas.getByRole('button', { name: 'Verwijder derde.pdf' }))

    await expect(canvas.queryByText('derde.pdf')).not.toBeInTheDocument()
    await expect(canvas.getByRole('button', { name: 'Verwijder eerste.pdf' })).toHaveFocus()
  },
  render: () => <RemovableFileCards />,
  tags: ['!dev', '!autodocs', '!manifest'],
}

/*
 * The file-input example is the one place that handles an emptied list, which a File Card cannot do for itself.
 * Removing the last file has to reach the line that says so, rather than dropping focus on the body.
 */
export const FocusWhenEmptied: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.upload(canvas.getByLabelText('Bijlagen'), [
      new File(['een'], 'een.pdf', { type: 'application/pdf' }),
      new File(['twee'], 'twee.pdf', { type: 'application/pdf' }),
    ])

    await userEvent.click(canvas.getByRole('button', { name: 'Verwijder twee.pdf' }))

    await expect(canvas.getByRole('button', { name: 'Verwijder een.pdf' })).toHaveFocus()

    await userEvent.click(canvas.getByRole('button', { name: 'Verwijder een.pdf' }))

    await expect(canvas.getByText('Alle bijlagen zijn verwijderd.')).toHaveFocus()
  },
  render: () => <FileInputWithFileCards />,
  tags: ['!dev', '!autodocs', '!manifest'],
}

export const PreviewRemovalLifecycle: Story = {
  play: async ({ canvas, canvasElement, userEvent }) => {
    const originalRevokeObjectURL = URL.revokeObjectURL
    const revokedUrls: string[] = []

    URL.revokeObjectURL = (url: string) => {
      revokedUrls.push(url)
      originalRevokeObjectURL(url)
    }

    try {
      await userEvent.upload(canvas.getByLabelText('Bijlagen'), [
        new File(['een'], 'eerste.png', { type: 'image/png' }),
        new File(['twee'], 'tweede.png', { type: 'image/png' }),
      ])

      const previewsBeforeRemoval = Array.from(canvasElement.querySelectorAll('img'))
      const firstPreviewUrl = previewsBeforeRemoval[0]?.getAttribute('src')
      const secondPreviewUrl = previewsBeforeRemoval[1]?.getAttribute('src')

      await userEvent.click(canvas.getByRole('button', { name: 'Verwijder eerste.png' }))

      await expect(canvas.queryByText('eerste.png')).not.toBeInTheDocument()
      await expect(revokedUrls).toContain(firstPreviewUrl)
      await expect(revokedUrls).not.toContain(secondPreviewUrl)
      await expect(canvasElement.querySelector('img')).toHaveAttribute('src', secondPreviewUrl)
    } finally {
      URL.revokeObjectURL = originalRevokeObjectURL
    }
  },
  render: () => <FileInputWithFileCards />,
  tags: ['!dev', '!autodocs', '!manifest'],
}
