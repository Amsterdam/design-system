/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Button, Dialog, Heading, Paragraph } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'

const meta = {
  title: 'Containers/Dialog',
  component: Dialog,
  args: {
    title: 'Later verder gaan',
    children: (
      <Paragraph>
        U kunt de ingevulde antwoorden opslaan in onze beveiligde database, deze kunt u later openen om verder te gaan
        met invullen. Nadat u op opslaan heeft geklikt ontvangt u een mail. Met de link in deze mail kunt verder gaan
        met het formulier.
      </Paragraph>
    ),
    actions: (
      <>
        <Button variant="tertiary" autoFocus onClick={(event) => event.currentTarget.closest('dialog')?.close()}>
          Terug
        </Button>
        <Button type="submit">Verder</Button>
      </>
    ),
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
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
}

export const ScrollContent: Story = {
  args: {
    open: true,
    title: 'Privacyverklaring gemeente Amsterdam',
    children: (
      <>
        <Heading size="level-4">Algemeen</Heading>
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
        <Heading size="level-4">Geldende wet- en regelgeving en reikwijdte</Heading>
        <Paragraph>
          Vanaf 25 mei 2018 is de Algemene verordening gegevensbescherming (Avg) van toepassing op alle verwerkingen van
          persoonsgegevens. Deze Europese wetgeving heeft directe werking in Nederland. Voor die zaken die nationaal
          geregeld moeten worden, is de Uitvoeringswet Avg in Nederland aanvullend van toepassing. Deze wetteksten kunt
          u vinden op de website van Autoriteit Persoonsgegevens.
        </Paragraph>
      </>
    ),
  },
  render: (args) => (
    <div style={{ minHeight: '100vh' }}>
      <Dialog {...args} />
    </div>
  ),
}

export const ShowDialog: Story = {
  args: {
    id: 'showdialog',
    actions: (
      <>
        <Button variant="tertiary" autoFocus onClick={(event) => event.currentTarget.closest('dialog')?.close()}>
          Terug
        </Button>
        <Button type="submit">Verder</Button>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <article>
        <Button onClick={() => (document.querySelector('#showdialog') as HTMLDialogElement)?.showModal()}>
          Open Dialog
        </Button>
        <Story />
      </article>
    ),
  ],
  parameters: {
    backgrounds: {
      disable: true,
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button'), { delay: 500 })
    await userEvent.click(canvas.getByText('Sluiten'), { delay: 1000 })
  },
}
