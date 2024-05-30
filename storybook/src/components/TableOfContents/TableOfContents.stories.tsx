/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Column, Grid, Heading, Paragraph } from '@amsterdam/design-system-react'
import { TableOfContents } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'
import { exampleParagraph } from '../shared/exampleContent'

const meta = {
  title: 'Components/Navigation/Table of Contents',
  component: TableOfContents,
  args: {
    title: 'Op deze pagina',
    children: [
      <TableOfContents.Link href="#section-1" key={1} label="Zo werkt het" />,
      <TableOfContents.Link href="#section-2" key={2} label="Voorwaarden" />,
      <TableOfContents.Link href="#section-3" key={3} label="Aanvragen" />,
      <TableOfContents.Link href="#section-4" key={4} label="Zie ook" />,
    ],
  },
} satisfies Meta<typeof TableOfContents>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const MultiLevel: Story = {
  args: {
    title: 'Inhoudsopgave',
    children: [
      <TableOfContents.Link href="#section-1" key={1} label="Waarom is het belangrijk om helder te schrijven?" />,
      <TableOfContents.Link href="#section-2" key={2} label="Schrijf in stappen">
        <TableOfContents>
          <TableOfContents.Link href="#section-4.1" label="Stap 2" />
          <TableOfContents.Link href="#section-4.2" label="Stap 3" />
          <TableOfContents.Link href="#section-4.3" label="Stap 4" />
        </TableOfContents>
      </TableOfContents.Link>,
      <TableOfContents.Link href="#section-3" key={3} label="Structuur van een heldere tekst">
        <TableOfContents>
          <TableOfContents.Link href="#section-3.1" label="Opmaakeisen" />
          <TableOfContents.Link href="#section-3.2" label="Tekstlengte">
            <TableOfContents>
              <TableOfContents.Link href="#section-3.2.1" label="Boodschap en achtergronden" />
            </TableOfContents>
          </TableOfContents.Link>
          <TableOfContents.Link href="#section-3.2" label="Alinea's en tussenkopjes" />
          <TableOfContents.Link href="#section-3.2" label="Opsommingen" />
        </TableOfContents>
      </TableOfContents.Link>,
      <TableOfContents.Link href="#section-4" key={4} label="Taalgebruik in heldere taal" />,
      <TableOfContents.Link href="#section-5" key={5} label="Tekstonderdelen in heldere taal" />,
      <TableOfContents.Link href="#section-6" key={6} label="Moeilijke woordenboek (inclusief niet te gebruiken)" />,
    ],
  },
}

export const Active: Story = {
  args: {
    startLevel: 'h2',
    children: [
      <TableOfContents.Link href="#section-1" key={1} label="Zo werkt het" active />,
      <TableOfContents.Link href="#section-2" key={2} label="Voorwaarden" />,
      <TableOfContents.Link href="#section-3" key={3} label="Aanvragen" />,
      <TableOfContents.Link href="#section-4" key={4} label="Zie ook" />,
    ],
  },
  render: (args) => (
    <Grid gapVertical="large" id="grid-row-test">
      <Grid.Cell span={{ narrow: 4, medium: 3, wide: 3 }} start={{ narrow: 1, medium: 6, wide: 10 }}>
        <TableOfContents {...args} id="grid-row-test-toc" />
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 5, wide: 7 }} start={{ narrow: 1, medium: 1, wide: 3 }}>
        <Column gap="medium">
          <Heading level={2} id="section-1">
            Zo werkt het
          </Heading>
          <Paragraph>{exampleParagraph()}</Paragraph>
          <Heading level={2} id="section-2">
            Voorwaarden
          </Heading>
          <Paragraph>{exampleParagraph()}</Paragraph>
          <Heading level={2} id="section-3">
            Aanvragen
          </Heading>
          <Paragraph>{exampleParagraph()}</Paragraph>
          <Heading level={2} id="section-4">
            Zie ook
          </Heading>
          <Paragraph>{exampleParagraph()}</Paragraph>
        </Column>
      </Grid.Cell>
    </Grid>
  ),
}
