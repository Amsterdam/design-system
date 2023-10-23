/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Button, Dialog } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Feedback/Dialog',
  component: Dialog,
  args: {
    children:
      'U kunt de ingevulde antwoorden opslaan in onze beveiligde database, deze kunt u later openen om verder te gaan met invullen. Nadat u op opslaan heeft geklikt ontvangt u een mail. Met de link in deze mail kunt verder gaan met het formulier.',
  },
} satisfies Meta<typeof Dialog>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    open: true,
  },
  render: (args) => <Dialog {...args} />,
}

export const ShowDialog: Story = {
  decorators: [
    (Story) => (
      <article>
        <Button onClick={() => document.querySelector('dialog')?.showModal()}>Open Dialog</Button>
        <Story />
      </article>
    ),
  ],
}
