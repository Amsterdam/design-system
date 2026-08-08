/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Heading } from '@amsterdam/design-system-react'
import { AlertDialog } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Containers/Alert Dialog',
  component: AlertDialog.Header,
  argTypes: {
    severity: {
      control: { labels: { undefined: 'none' }, type: 'select' },
      options: [undefined, 'error', 'warning', 'success'],
    },
  },
  decorators: [
    (Story) => (
      <AlertDialog
        aria-labelledby="ams-alert-dialog-header-heading"
        ref={(dialog) => {
          if (dialog && !dialog.open) {
            // Set the open attribute instead of calling show(), which would move focus here and scroll the docs page.
            dialog.open = true
          }
        }}
        style={{ position: 'static' }}
      >
        <Story />
      </AlertDialog>
    ),
  ],
  tags: ['!manifest'],
} satisfies Meta<typeof AlertDialog.Header>

export default meta

type Story = StoryObj<typeof meta>

export const Header: Story = {
  args: {
    children: (
      <Heading id="ams-alert-dialog-header-heading" level={1} size="level-3">
        Titel van het dialoogvenster
      </Heading>
    ),
  },
}
