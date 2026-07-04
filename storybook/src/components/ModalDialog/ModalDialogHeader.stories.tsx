/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Heading } from '@amsterdam/design-system-react'
import { ModalDialog } from '@amsterdam/design-system-react/src'

import { iconArgType } from '#storybook/_common/iconArgTypes'

const meta = {
  title: 'Components/Containers/Modal Dialog',
  component: ModalDialog.Header,
  argTypes: {
    closeButtonIcon: iconArgType('CloseIcon'),
  },
  decorators: [
    (Story) => (
      <ModalDialog
        aria-labelledby="ams-modal-dialog-header-heading"
        ref={(dialog) => {
          if (dialog && !dialog.open) {
            dialog.show() // Open the dialog non-modally, in place, to display the Header.
          }
        }}
        style={{ position: 'static' }}
      >
        <Story />
      </ModalDialog>
    ),
  ],
} satisfies Meta<typeof ModalDialog.Header>

export default meta

type Story = StoryObj<typeof meta>

export const Header: Story = {
  args: {
    children: (
      <Heading id="ams-modal-dialog-header-heading" level={1} size="level-3">
        Titel van het dialoogvenster
      </Heading>
    ),
  },
}
