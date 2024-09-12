/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Button, Heading, Paragraph } from '@amsterdam/design-system-react'
import { Dialog } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Containers/Dialog',
  component: Dialog,
  args: {
    footer: (
      <Button onClick={Dialog.close} variant="primary">
        Sluiten
      </Button>
    ),
    children: (
      <Paragraph>
        Weet u zeker dat u door wilt gaan met het uitvoeren van deze actie? Dat verwijdert gegevens die nog niet
        opgeslagen zijn.
      </Paragraph>
    ),
    heading: 'Niet alle gegevens zijn opgeslagen',
  },
  argTypes: {
    footer: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof Dialog>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    open: true,
  },
  argTypes: {
    heading: {
      description: 'The text for the heading.',
    },
    open: {
      description: 'Whether the dialog box is active and available for interaction.',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#0006', position: 'absolute', width: '100%', height: '100%' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      story: { height: '32em' },
    },
    layout: 'fullscreen',
  },
}

export const FormDialog: Story = {
  args: {
    open: true,
    footer: (
      <>
        <Button type="submit" form="dialog1" value="continue">
          Doorgaan
        </Button>
        <Button onClick={Dialog.close} variant="tertiary">
          Stoppen
        </Button>
      </>
    ),
    children: (
      <form method="dialog" id="dialog1">
        <Paragraph>
          Weet u zeker dat u door wilt gaan met het uitvoeren van deze actie? Dat verwijdert gegevens die nog niet
          opgeslagen zijn.
        </Paragraph>
      </form>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#0006', position: 'absolute', width: '100%', height: '100%' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      story: { height: '32em' },
    },
    layout: 'fullscreen',
  },
}

export const WithScrollbar: Story = {
  args: {
    footer: <Button onClick={Dialog.close}>Sluiten</Button>,
    children: [
      <Heading level={2} size="level-5" key={1}>
        Algemeen
      </Heading>,
      <Paragraph key={2}>
        De gemeente Amsterdam verwerkt bij de uitvoering van haar taken en verplichtingen persoonsgegevens. De manier
        waarop de gemeente Amsterdam om gaat met persoonsgegevens is vastgelegd in het stedelijk kader verwerken
        persoonsgegevens.
      </Paragraph>,
      <Paragraph key={3}>
        Deze verklaring geeft aanvullende informatie over de omgang met persoonsgegevens door de gemeente Amsterdam en
        over uw mogelijkheden tot het uitoefenen van uw rechten met betrekking tot persoonsgegevens.
      </Paragraph>,
      <Paragraph key={4}>
        Meer specifieke informatie over privacy en de verwerking van persoonsgegevens door de gemeente Amsterdam kunt u
        op de hoofdpagina vinden.
      </Paragraph>,
      <Paragraph key={5}>
        Vanwege nieuwe wetgeving of andere ontwikkelingen, past de gemeente regelmatig haar processen aan. Dit kunnen
        ook wijzigingen zijn in de wijze van het verwerken van persoonsgegevens. Wij raden u daarom aan om regelmatig
        deze pagina te bekijken. Deze pagina wordt doorlopend geactualiseerd.
      </Paragraph>,
      <Heading level={2} size="level-5" key={6}>
        Geldende wet- en regelgeving en reikwijdte
      </Heading>,
      <Paragraph key={7}>
        Vanaf 25 mei 2018 is de Algemene verordening gegevensbescherming (Avg) van toepassing op alle verwerkingen van
        persoonsgegevens. Deze Europese wetgeving heeft directe werking in Nederland. Voor die zaken die nationaal
        geregeld moeten worden, is de Uitvoeringswet Avg in Nederland aanvullend van toepassing. Deze wetteksten kunt u
        vinden op de website van Autoriteit Persoonsgegevens.
      </Paragraph>,
    ],
    heading: 'Privacyverklaring gemeente Amsterdam',
    open: true,
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#0006', position: 'absolute', width: '100%', height: '100%' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      story: { height: '100vh' },
    },
    layout: 'fullscreen',
  },
}

export const TriggerButton: Story = {
  args: {
    id: 'openDialog',
  },
  decorators: [
    (Story) => (
      <article>
        <Button onClick={() => Dialog.open('#openDialog')}>Open Dialog</Button>
        <Story />
      </article>
    ),
  ],
}

export const VerticalButtons: Story = {
  args: {
    footer: (
      <>
        <Button type="submit" form="dialog2">
          Lange teksten op deze knoppen
        </Button>
        <Button onClick={Dialog.close} variant="tertiary">
          Om verticaal stapelen te demonstreren
        </Button>
      </>
    ),
    children: (
      <form method="dialog" id="dialog2">
        <Paragraph>
          Weet u zeker dat u door wilt gaan met het uitvoeren van deze actie? Dat verwijdert gegevens die nog niet
          opgeslagen zijn.
        </Paragraph>
      </form>
    ),
    open: true,
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#0006', position: 'absolute', width: '100%', height: '100%' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      story: { height: '32em' },
    },
    layout: 'fullscreen',
  },
}
