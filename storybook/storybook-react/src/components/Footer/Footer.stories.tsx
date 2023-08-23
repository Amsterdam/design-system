/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Footer, Heading, Link, List, Paragraph } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Footer',
  component: Footer,
  args: {
    children: 'Nieuw component',
  },
} satisfies Meta<typeof Footer>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: [
      <Footer.Top key={1}>
        <Heading className="amsterdam-visually-hidden">Colofon</Heading>
        <Footer.Column gridColumns={{ start: 1, span: 3 }}>
          <Heading level={2} size="level-4" inverseColor>
            Contact
          </Heading>
          <Paragraph size="small" inverseColor>
            Heeft u een vraag en kunt u het antwoord niet vinden op deze site? Neem dan contact met ons op.
          </Paragraph>
          <List>
            <li>
              <Link href="mailto:redactie.os@amsterdam.nl" variant="inList" onBackground="dark">
                E-mail
              </Link>
            </li>
            <li>
              <Link href="tel:+31202510333" variant="inList" onBackground="dark">
                020 251 0333
              </Link>
            </li>
          </List>
        </Footer.Column>
        <Footer.Column gridColumns={{ start: 5, span: 3 }}>
          <Heading level={2} size="level-4" inverseColor>
            Panels en enquêtes
          </Heading>
          <Paragraph size="small" inverseColor>
            Bent u uitgenodigd om mee te doen aan onderzoek of heeft u vragen over het panel of stadspaspanel?
          </Paragraph>
          <List>
            <li>
              <Link href="/" variant="inList" onBackground="dark" rel="external">
                Meedoen aan onderzoek
              </Link>
            </li>
            <li>
              <Link href="/" variant="inList" onBackground="dark" rel="external">
                Panel Amsterdam
              </Link>
            </li>
            <li>
              <Link href="/" variant="inList" onBackground="dark" rel="external">
                Stadspaspanel Amsterdam
              </Link>
            </li>
          </List>
        </Footer.Column>
        <Footer.Column gridColumns={{ start: 9, span: 3 }}>
          <Heading level={2} size="level-4" inverseColor>
            Onderzoek en Statistiek
          </Heading>
          <List>
            <li>
              <Link href="/" variant="inList" onBackground="dark">
                Over Onderzoek en Statistiek
              </Link>
            </li>
            <li>
              <Link href="/" variant="inList" onBackground="dark">
                Veelgestelde vragen
              </Link>
            </li>
            <li>
              <Link href="/" variant="inList" onBackground="dark" rel="external">
                Nieuwsbrief
              </Link>
            </li>
            <li>
              <Link href="/" variant="inList" onBackground="dark">
                Vacatures
              </Link>
            </li>
          </List>
        </Footer.Column>
      </Footer.Top>,
      <Footer.Bottom key={2}>
        {/*
          TODO: we need a horizontal list and another link variant for this.
          Or do we want to make a Footer.Link component?
          I think we need the same link in the Header
        */}
        <List>
          <li>
            <Link href="/" variant="inList">
              Privacy
            </Link>
          </li>
          <li>
            <Link href="/" variant="inList">
              Toegankelijkheid
            </Link>
          </li>
        </List>
      </Footer.Bottom>,
    ],
  },
}
