/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { TableOfContents } from '@amsterdam/design-system-react/src'

import { default as tableOfContentsMeta } from './TableOfContents.stories'

const meta = {
  ...tableOfContentsMeta,
  title: 'Components/Navigation/Table of Contents',
} satisfies Meta<typeof TableOfContents>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: () => (
    <div className="_ams-tests-stack">
      <TableOfContents heading="Op deze pagina">
        <TableOfContents.List>
          <TableOfContents.Link href="#section-1" label="Zo werkt het" />
          <TableOfContents.Link href="#section-2" label="Voorwaarden" />
          <TableOfContents.Link aria-current="page" href="#section-3" label="Aanvragen" />
          <TableOfContents.Link href="#section-4" label="Zie ook" />
        </TableOfContents.List>
      </TableOfContents>
      <TableOfContents collapsible heading="Inhoudsopgave">
        <TableOfContents.List>
          <TableOfContents.Link href="#s1" label="Inleiding" />
          <TableOfContents.Link defaultExpanded href="#s2" label="Vaststellen en waarderen van functies">
            <TableOfContents.List>
              <TableOfContents.Link href="#s2-1" label="Algemeen" />
              <TableOfContents.Link defaultExpanded href="#s2-2" label="Waardering van functies">
                <TableOfContents.List>
                  <TableOfContents.Link aria-current="page" href="#s2-2-1" label="Methode" />
                  <TableOfContents.Link href="#s2-2-2" label="Procedure" />
                </TableOfContents.List>
              </TableOfContents.Link>
              <TableOfContents.Link href="#s2-3" label="Herwaardering">
                <TableOfContents.List>
                  <TableOfContents.Link href="#s2-3-1" label="Aanleiding" />
                </TableOfContents.List>
              </TableOfContents.Link>
            </TableOfContents.List>
          </TableOfContents.Link>
          <TableOfContents.Link href="#s3" label="Salaristoelagen">
            <TableOfContents.List>
              <TableOfContents.Link href="#s3-1" label="Functioneringstoelage" />
            </TableOfContents.List>
          </TableOfContents.Link>
        </TableOfContents.List>
      </TableOfContents>
    </div>
  ),
  tags: ['!dev', '!autodocs'],
}
