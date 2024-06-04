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
