/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Alert, Link, Paragraph, UnorderedList } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Feedback/Alert',
  component: Alert,
  args: {
    title: 'Let op',
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
      },
      if: { arg: 'type', neq: undefined },
    },
    onDismiss: {
      action: 'onDismiss',
    },
    children: {
      control: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Alert>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: undefined,
    children: (
      <Paragraph>Tijdens Koningsdag zijn alle Stadsloketten gesloten, storingen op formulieren, enz.</Paragraph>
    ),
  },
}

export const InformationWithInlineLink: Story = {
  args: {
    type: undefined,
    children: (
      <Paragraph>
        Tijdens Koningsdag zijn <Link variant="inline">alle Stadsloketten</Link> gesloten, storingen op formulieren,
        enz.
      </Paragraph>
    ),
  },
}

export const Error: Story = {
  args: {
    type: 'error',
    icon: true,
    closeable: true,
    children: <Paragraph>U bent verplichte velden vergeten in te vullen</Paragraph>,
  },
}

export const ErrorWithList: Story = {
  args: {
    closeable: true,
    icon: true,
    type: 'error',
    title: 'Formulier kon niet opgeslagen worden',
  },
  render: (args) => (
    <Alert {...args}>
      <Paragraph>U bent verplichte velden vergeten in te vullen</Paragraph>
      <UnorderedList>
        <UnorderedList.Item>Naam</UnorderedList.Item>
        <UnorderedList.Item>Telefoonnummer</UnorderedList.Item>
      </UnorderedList>
    </Alert>
  ),
}

export const Success: Story = {
  args: {
    title: 'Gelukt',
    type: 'success',
    closeable: true,
    icon: true,
    children: <Paragraph>Uw formulier is succesvol opgeslagen</Paragraph>,
  },
}
