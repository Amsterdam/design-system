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
            // Set the open attribute instead of calling show(), which would move focus here and scroll the docs page.
            dialog.open = true
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
      <Heading id="ams-modal-dialog-header-heading" level={1} size="level-2">
        Titel van het dialoogvenster
      </Heading>
    ),
  },
}
