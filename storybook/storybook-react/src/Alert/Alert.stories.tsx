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
    severity: {
      control: {
        type: 'radio',
        labels: { info: 'info', success: 'success', warning: 'warning', error: 'error' },
      },
      options: ['error', 'info', 'success', 'warning'],
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
    },
    onClose: {
      action: 'onClose',
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
    severity: 'info',
    children: (
      <Paragraph>
        Tijdens Koningsdag zijn alle Stadsloketten gesloten. Ook 14 020 en alle andere telefoonnummers van de gemeente
        zijn niet bereikbaar.
      </Paragraph>
    ),
  },
}

export const WithInlineLink: Story = {
  args: {
    severity: undefined,
    children: (
      <Paragraph>
        Tijdens Koningsdag zijn{' '}
        <Link variant="inline" href="#">
          alle Stadsloketten
        </Link>{' '}
        gesloten. Ook 14 020 en alle andere telefoonnummers van de gemeente zijn niet bereikbaar. telefoonnummers van de
        gemeente zijn niet bereikbaar.
      </Paragraph>
    ),
  },
}

export const Success: Story = {
  args: {
    severity: 'success',
    title: 'Gelukt',
    closeable: true,
    icon: true,
    children: <Paragraph>Uw formulier is succesvol opgeslagen.</Paragraph>,
  },
}

export const Warning: Story = {
  args: {
    severity: 'warning',
    title: 'Mislukt',
    closeable: true,
    icon: true,
    children: <Paragraph>Uw formulier is niet succesvol opgeslagen.</Paragraph>,
  },
}

export const Error: Story = {
  args: {
    severity: 'error',
    icon: true,
    closeable: true,
    children: <Paragraph>U bent verplichte velden vergeten in te vullen.</Paragraph>,
  },
}

export const WithList: Story = {
  args: {
    severity: 'error',
    icon: true,
    closeable: true,
    title: 'Formulier kon niet opgeslagen worden',
  },
  render: (args) => (
    <Alert {...args}>
      <Paragraph>U bent verplichte velden vergeten in te vullen.</Paragraph>
      <UnorderedList>
        <UnorderedList.Item>Naam</UnorderedList.Item>
        <UnorderedList.Item>Telefoonnummer</UnorderedList.Item>
      </UnorderedList>
    </Alert>
  ),
}

export const WithoutTitle: Story = {
  args: {
    title: undefined,
    children: (
      <Paragraph>
        Tijdens Koningsdag zijn alle Stadsloketten gesloten. Ook 14 020 en alle andere telefoonnummers van de gemeente
        zijn niet bereikbaar.
      </Paragraph>
    ),
  },
}
