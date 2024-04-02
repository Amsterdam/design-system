/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Alert, Link, Paragraph, UnorderedList } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Feedback/Alert',
  component: Alert,
  args: {
    title: 'Let op',
    closeable: false,
  },
} satisfies Meta<typeof Alert>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <Paragraph>
        Tijdens Koningsdag zijn alle Stadsloketten gesloten. Ook 14 020 en alle andere telefoonnummers van de gemeente
        zijn niet bereikbaar.
      </Paragraph>
    ),
  },
}

export const Warning: Story = {
  args: {
    children: <Paragraph>U bent vergeten verplichte velden in te vullen.</Paragraph>,
    title: 'Vul de gegevens aan',
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
    severity: 'error',
    title: 'Niet gelukt',
  },
}

export const Success: Story = {
  args: {
    children: <Paragraph>Het formulier is verzonden. We hebben uw gegevens goed ontvangen.</Paragraph>,
    closeable: true,
    severity: 'success',
    title: 'Gelukt',
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
    severity: 'info',
  },
}

export const WithList: Story = {
  args: {
    title: 'Vul de gegevens aan',
    children: [
      <Paragraph key={1}>U bent vergeten de volgende verplichte velden in te vullen:</Paragraph>,
      <UnorderedList key={2}>
        <UnorderedList.Item>Naam</UnorderedList.Item>
        <UnorderedList.Item>Telefoonnummer</UnorderedList.Item>
      </UnorderedList>,
    ],
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
    severity: 'info',
  },
}

export const WithoutTitle: Story = {
  args: {
    children: (
      <Paragraph>
        De geschatte wachttijd in de adreszoeker klopt momenteel niet altijd. We werken aan een oplossing.
      </Paragraph>
    ),
    title: undefined,
  },
}
