/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { FileCard, FileList } from '@amsterdam/design-system-react/src'
import { expect } from 'storybook/test'

import { renderComponentVariants } from '#storybook/_common/renderComponentVariants'

import { FileInputWithFileList } from './FileInputWithFileList'
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

/*
 * The example is the only place that handles an emptied list, which a File Card cannot do for itself.
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
  render: () => <FileInputWithFileList />,
  tags: ['!dev', '!autodocs', '!manifest'],
}
