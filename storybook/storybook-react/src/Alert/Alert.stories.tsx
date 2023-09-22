/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Alert, UnorderedList } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Feedback/Alert',
  component: Alert,
  args: {
    title: 'Let op',
    text: 'Tijdens Koningsdag zijn alle Stadsloketten gesloten, storingen op formulieren, enz.',
    closeable: false,
    icon: false,
  },
  argTypes: {
    type: {
      control: {
        type: 'select',
        labels: { undefined: 'default', error: 'error', success: 'success' },
      },
      options: [undefined, 'error', 'success'],
    },
    closeable: {
      control: {
        type: 'boolean',
        default: false,
      },
    },
    icon: {
      control: {
        type: 'boolean',
        if: { arg: 'type', eq: ['error', 'success'] },
      },
    },
  },
} satisfies Meta<typeof Alert>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: undefined,
  },
}

export const Error: Story = {
  args: {
    type: 'error',
    icon: true,
  },
}

export const ErrorWithChildren: Story = {
  render: () => (
    <Alert
      type="error"
      icon={true}
      title="Formulier kon niet opgeslagen worden"
      text="U bent verplichte velden vergeten in te vullen"
    >
      <UnorderedList>
        <UnorderedList.Item>Naam</UnorderedList.Item>
        <UnorderedList.Item>Telefoonnummer</UnorderedList.Item>
      </UnorderedList>
    </Alert>
  ),
}

export const Success: Story = {
  args: {
    type: 'success',
    icon: true,
  },
}
