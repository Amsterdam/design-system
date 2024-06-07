/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { TableOfContents } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Navigation/Table of Contents',
  component: TableOfContents,
  args: {
    heading: 'Op deze pagina',
    children: (
      <TableOfContents.List>
        <TableOfContents.Link href="#section-1" label="Zo werkt het" />
        <TableOfContents.Link href="#section-2" label="Voorwaarden" />
        <TableOfContents.Link href="#section-3" label="Aanvragen" />
        <TableOfContents.Link href="#section-4" label="Zie ook" />
      </TableOfContents.List>
    ),
  },
} satisfies Meta<typeof TableOfContents>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const MultiLevel: Story = {
  args: {
    heading: 'Inhoudsopgave',
    children: (
      <TableOfContents.List>
        <TableOfContents.Link href="#section-1" label="Waarom is het belangrijk om helder te schrijven?" />
        <TableOfContents.Link href="#section-2" label="Schrijf in stappen">
          <TableOfContents.List>
            <TableOfContents.Link href="#section-2.1" label="Stap 2" />
            <TableOfContents.Link href="#section-2.2" label="Stap 3" />
            <TableOfContents.Link href="#section-2.3" label="Stap 4" />
          </TableOfContents.List>
        </TableOfContents.Link>
        <TableOfContents.Link href="#section-3" label="Structuur van een heldere tekst">
          <TableOfContents.List>
            <TableOfContents.Link href="#section-3.1" label="Opmaakeisen" />
            <TableOfContents.Link href="#section-3.2" label="Tekstlengte">
              <TableOfContents.List>
                <TableOfContents.Link href="#section-3.2.1" label="Boodschap en achtergronden" />
              </TableOfContents.List>
            </TableOfContents.Link>
            <TableOfContents.Link href="#section-3.3" label="Alinea's en tussenkopjes" />
            <TableOfContents.Link href="#section-3.4" label="Opsommingen" />
          </TableOfContents.List>
        </TableOfContents.Link>
        <TableOfContents.Link href="#section-4" label="Taalgebruik in heldere taal" />
        <TableOfContents.Link href="#section-5" label="Tekstonderdelen in heldere taal" />
        <TableOfContents.Link href="#section-6" label="Moeilijke woordenboek (inclusief niet te gebruiken)" />
      </TableOfContents.List>
    ),
  },
}
