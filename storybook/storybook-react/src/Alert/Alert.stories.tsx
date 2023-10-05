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
    severity: undefined,
    children: (
      <Paragraph>
        Tijdens Koningsdag zijn alle Stadsloketten gesloten. Ook 14 020 en alle andere telefoonnummers van de gemeente
        zijn niet bereikbaar.
      </Paragraph>
    ),
  },
}

export const InformationWithInlineLink: Story = {
  args: {
    severity: undefined,
    children: (
      <Paragraph>
        Tijdens Koningsdag zijn{' '}
        <Link variant="inline" onBackground="light" href="#">
          alle Stadsloketten
        </Link>{' '}
        gesloten. Ook 14 020 en alle andere telefoonnummers van de gemeente zijn niet bereikbaar. telefoonnummers van de
        gemeente zijn niet bereikbaar.
      </Paragraph>
    ),
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

export const ErrorWithList: Story = {
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

export const Success: Story = {
  args: {
    severity: 'success',
    title: 'Gelukt',
    closeable: true,
    icon: true,
    children: <Paragraph>Uw formulier is succesvol opgeslagen.</Paragraph>,
  },
}
