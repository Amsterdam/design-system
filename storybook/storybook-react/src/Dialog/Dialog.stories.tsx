/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Button, Dialog, Heading, Paragraph } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Containers/Dialog',
  component: Dialog,
  args: {
    title: 'Later verder gaan',
    children: [
      <Paragraph key={0}>
        U kunt de ingevulde antwoorden opslaan in onze beveiligde database, deze kunt u later openen om verder te gaan
        met invullen. Nadat u op opslaan heeft geklikt ontvangt u een mail. Met de link in deze mail kunt verder gaan
        met het formulier.
      </Paragraph>,
    ],
    actions: [
      <>
        <Button key={1} type="button" variant="tertiary" autoFocus>
          Terug
        </Button>
        <Button key={2} type="submit">
          Verder
        </Button>
      </>,
    ],
  },
} satisfies Meta<typeof Dialog>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    open: true,
  },
  render: (args) => (
    <div style={{ minHeight: '500px' }}>
      <Dialog {...args} />
    </div>
  ),
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}

export const NoActions: Story = {
  args: {
    actions: null,
    open: true,
  },
  render: (args) => (
    <div style={{ minHeight: '500px' }}>
      <Dialog {...args} />
    </div>
  ),
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}

export const ScrollContent: Story = {
  args: {
    open: true,
    title: 'Privacyverklaring gemeente Amsterdam',
    children: [
      <>
        <Heading key={0} size="level-4">
          Algemeen
        </Heading>
        <Paragraph key={1}>
          De gemeente Amsterdam verwerkt bij de uitvoering van haar taken en verplichtingen persoonsgegevens. De manier
          waarop de gemeente Amsterdam om gaat met persoonsgegevens is vastgelegd in het stedelijk kader verwerken
          persoonsgegevens.
        </Paragraph>
        <Paragraph key={2}>
          Deze verklaring geeft aanvullende informatie over de omgang met persoonsgegevens door de gemeente Amsterdam en
          over uw mogelijkheden tot het uitoefenen van uw rechten met betrekking tot persoonsgegevens.
        </Paragraph>
        <Paragraph key={3}>
          Meer specifieke informatie over privacy en de verwerking van persoonsgegevens door de gemeente Amsterdam kunt
          u op de hoofdpagina vinden.
        </Paragraph>
        <Paragraph key={4}>
          Vanwege nieuwe wetgeving of andere ontwikkelingen, past de gemeente regelmatig haar processen aan. Dit kunnen
          ook wijzigingen zijn in de wijze van het verwerken van persoonsgegevens. Wij raden u daarom aan om regelmatig
          deze pagina te bekijken. Deze pagina wordt doorlopend geactualiseerd.
        </Paragraph>
        <Heading key={5} size="level-4">
          Geldende wet- en regelgeving en reikwijdte
        </Heading>
        <Paragraph key={6}>
          Vanaf 25 mei 2018 is de Algemene verordening gegevensbescherming (Avg) van toepassing op alle verwerkingen van
          persoonsgegevens. Deze Europese wetgeving heeft directe werking in Nederland. Voor die zaken die nationaal
          geregeld moeten worden, is de Uitvoeringswet Avg in Nederland aanvullend van toepassing. Deze wetteksten kunt
          u vinden op de website van Autoriteit Persoonsgegevens.
        </Paragraph>
      </>,
    ],
  },
  render: (args) => (
    <div style={{ minHeight: '100vh' }}>
      <Dialog {...args} />
    </div>
  ),
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
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
