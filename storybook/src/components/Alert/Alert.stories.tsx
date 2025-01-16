/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Link, Paragraph, UnorderedList } from '@amsterdam/design-system-react'
import { Alert } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Feedback/Alert',
  component: Alert,
  args: {
    closeable: false,
    heading: 'Let op',
  },
} satisfies Meta<typeof Alert>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <Paragraph>
        Tijdens de hijswerkzaamheden geldt er een korte verkeersstop. We zetten verkeersregelaars in, volg hun
        aanwijzingen op. De verkeersstop duurt ongeveer 10 minuten.
      </Paragraph>
    ),
    heading: 'Tijdelijk geen verkeer mogelijk',
  },
}

export const Warning: Story = {
  args: {
    children: <Paragraph>Sommige verplichte velden zijn nog niet ingevuld.</Paragraph>,
    heading: 'Vul de gegevens aan',
    severity: 'warning',
  },
}

export const Error: Story = {
  args: {
    children: (
      <Paragraph>
        Wegens een technische fout kon het formulier niet worden verzonden. We hebben uw gegevens niet ontvangen.
        Probeer het over een paar minuten opnieuw.
      </Paragraph>
    ),
    heading: 'Niet gelukt',
    severity: 'error',
  },
}

export const Success: Story = {
  args: {
    children: <Paragraph>Het formulier is verzonden. We hebben uw gegevens goed ontvangen.</Paragraph>,
    closeable: true,
    heading: 'Gelukt',
    severity: 'success',
  },
}

export const Info: Story = {
  args: {
    children: (
      <Paragraph>
        Tijdens de hijswerkzaamheden geldt er een korte verkeersstop. We zetten verkeersregelaars in, volg hun
        aanwijzingen op. De verkeersstop duurt ongeveer 10 minuten.
      </Paragraph>
    ),
    closeable: true,
  },
}

export const WithList: Story = {
  args: {
    children: [
      <Paragraph key={1}>U bent vergeten de volgende verplichte velden in te vullen:</Paragraph>,
      <UnorderedList key={2}>
        <UnorderedList.Item>Naam</UnorderedList.Item>
        <UnorderedList.Item>Telefoonnummer</UnorderedList.Item>
      </UnorderedList>,
    ],
    heading: 'Vul de gegevens aan',
    severity: 'warning',
  },
}

export const WithInlineLink: Story = {
  args: {
    children: (
      <Paragraph>
        Tijdens Koningsdag zijn{' '}
        <Link variant="inline" href="#">
          alle Stadsloketten
        </Link>{' '}
        gesloten. Ook 14 020 en alle andere telefoonnummers van de gemeente zijn niet bereikbaar.
      </Paragraph>
    ),
    severity: 'warning',
  },
}
