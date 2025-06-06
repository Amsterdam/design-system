/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { ErrorMessage } from '@amsterdam/design-system-react/src'
import { MegaphoneIcon } from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Forms/Error Message',
  component: ErrorMessage,
  args: {
    children: 'Vul een geldig e-mailadres in, bijvoorbeeld naam@voorbeeld.nl.',
  },
  argTypes: {
    children: {
      table: { disable: false },
    },
  },
} satisfies Meta<typeof ErrorMessage>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const CustomPrefix: Story = {
  args: {
    children: 'Enter an email address in the correct format, like name@example.com',
    prefix: 'Error',
  },
}

export const WithCustomIcon: Story = {
  args: {
    icon: MegaphoneIcon,
  },
}
