/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { ActionGroup, Button, Column, Heading, Paragraph } from '@amsterdam/design-system-react'
import { Dialog } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'
import { exampleHeading, exampleParagraph } from '../shared/exampleContent'

const heading = exampleHeading()
const paragraph = exampleParagraph()

const defaultChildren = (formId: string) => (
  <form id={formId} method="dialog">
    <Paragraph>
      Weet u zeker dat u door wilt gaan met het uitvoeren van deze actie? Gegevens die nog niet opgeslagen zijn gaan dan
      verloren.
    </Paragraph>
  </form>
)

const defaultFooter = (formId: string) => (
  <ActionGroup>
    <Button form={formId} type="submit" value="submit">
      Doorgaan
    </Button>
    <Button onClick={Dialog.close} variant="tertiary">
      Stoppen
    </Button>
  </ActionGroup>
)

const meta = {
  title: 'Components/Containers/Dialog',
  component: Dialog,
  args: {
    children: defaultChildren('ams-dialog-form'),
    footer: defaultFooter('ams-dialog-form'),
    heading: 'Niet alle gegevens zijn opgeslagen',
  },
  argTypes: {
    footer: {
      table: { disable: true },
    },
    heading: {
      description: 'The text for the heading.',
    },
    open: {
      description: 'Whether the dialog box is active and available for interaction.',
    },
  },
} satisfies Meta<typeof Dialog>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <Paragraph>De gegevens zijn opgeslagen.</Paragraph>,
    footer: (
      <ActionGroup>
        <Button onClick={Dialog.close} variant="primary">
          Sluiten
        </Button>
      </ActionGroup>
    ),
    heading: 'Gelukt',
    open: true,
  },
  decorators: [
    (Story) => (
      <div className="ams-docs-backdrop">
        <Heading level={1}>{heading}</Heading>
        <Paragraph>{paragraph}</Paragraph>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      story: { height: '28rem' },
    },
    layout: 'fullscreen',
  },
}

export const OpenAndClose: Story = {
  args: {
    id: 'ams-dialog',
  },
  decorators: [
    (Story) => (
      <Column alignHorizontal="start">
        <Heading level={1}>{heading}</Heading>
        <Paragraph>{paragraph}</Paragraph>
        <Button onClick={() => Dialog.open('#ams-dialog')}>Open dialoog</Button>
        <Story />
      </Column>
    ),
  ],
}

export const AskingToConfirm: Story = {
  args: {
    children: defaultChildren('ams-dialog-asking-to-confirm-form'),
    footer: defaultFooter('ams-dialog-asking-to-confirm-form'),
    open: true,
  },
  decorators: [
    (Story) => (
      <div className="ams-docs-backdrop">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      story: { height: '32rem' },
    },
    layout: 'fullscreen',
  },
}

export const WithScrollbar: Story = {
  args: {
    children: (
      <Column gap="small">
        <Heading level={2} size="level-5">
          Algemeen
        </Heading>
        <Paragraph>
          De gemeente Amsterdam verwerkt bij de uitvoering van haar taken en verplichtingen persoonsgegevens. De manier
          waarop de gemeente Amsterdam om gaat met persoonsgegevens is vastgelegd in het stedelijk kader verwerken
          persoonsgegevens.
        </Paragraph>
        <Paragraph>
          Deze verklaring geeft aanvullende informatie over de omgang met persoonsgegevens door de gemeente Amsterdam en
          over uw mogelijkheden tot het uitoefenen van uw rechten met betrekking tot persoonsgegevens.
        </Paragraph>
        <Paragraph>
          Meer specifieke informatie over privacy en de verwerking van persoonsgegevens door de gemeente Amsterdam kunt
          u op de hoofdpagina vinden.
        </Paragraph>
        <Paragraph>
          Vanwege nieuwe wetgeving of andere ontwikkelingen, past de gemeente regelmatig haar processen aan. Dit kunnen
          ook wijzigingen zijn in de wijze van het verwerken van persoonsgegevens. Wij raden u daarom aan om regelmatig
          deze pagina te bekijken. Deze pagina wordt doorlopend geactualiseerd.
        </Paragraph>
        <Heading level={2} size="level-5">
          Geldende wet- en regelgeving en reikwijdte
        </Heading>
        <Paragraph>
          Vanaf 25 mei 2018 is de Algemene verordening gegevensbescherming (Avg) van toepassing op alle verwerkingen van
          persoonsgegevens. Deze Europese wetgeving heeft directe werking in Nederland. Voor die zaken die nationaal
          geregeld moeten worden, is de Uitvoeringswet Avg in Nederland aanvullend van toepassing. Deze wetteksten kunt
          u vinden op de website van Autoriteit Persoonsgegevens.
        </Paragraph>
      </Column>
    ),
    footer: (
      <ActionGroup>
        <Button onClick={Dialog.close}>Sluiten</Button>
      </ActionGroup>
    ),
    heading: 'Privacyverklaring gemeente Amsterdam',
    open: true,
  },
  decorators: [
    (Story) => (
      <div className="ams-docs-backdrop">
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
