/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Link } from '@amsterdam/design-system-react'
import { UnorderedList } from '@amsterdam/design-system-react'
import { Footer } from '@amsterdam/design-system-react'
import { Heading } from '@amsterdam/design-system-react'
import { VisuallyHidden } from '@amsterdam/design-system-react'
import { PageGrid } from '@amsterdam/design-system-react'
import { PageMenu } from '@amsterdam/design-system-react'
import { PageHeading } from '@amsterdam/design-system-react'
import { Paragraph } from '@amsterdam/design-system-react'
import { GridCell } from '@amsterdam/design-system-react'
import { Screen } from '@amsterdam/design-system-react'
import { MenuIcon } from '@amsterdam/design-system-react-icons'
import { LoginIcon } from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'
import '../../../storybook-docs/src/stories.scss'

const meta = {
  title: 'Containers/Screen',
  component: Screen,
  parameters: {
    docs: {
      canvas: {
        sourceState: 'hidden',
      },
    },
  },
} satisfies Meta<typeof Screen>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: [
      <PageGrid key={Math.random()} style={{ marginBlockEnd: '2rem' }}>
        <GridCell fullWidth>
          <header>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Paragraph style={{ flex: 2 }}>Logo</Paragraph>
              <PageHeading style={{ flex: 4 }}>Titel</PageHeading>
              <PageMenu style={{ flex: 6 }}>
                <PageMenu.Link href="#">English</PageMenu.Link>
                <PageMenu.Link href="#" icon={LoginIcon}>
                  Inloggen Mijn Amsterdam
                </PageMenu.Link>
                <PageMenu.Button icon={MenuIcon}>Alle onderwerpen</PageMenu.Button>
              </PageMenu>
            </div>
          </header>
        </GridCell>
        <GridCell gridColumns={4}>
          <figure className="amsterdam-docs-figure">
            <img alt="Voorbeeld van een afbeelding" src="https://picsum.photos/800/450?random=1" />
          </figure>
        </GridCell>
        <GridCell gridColumns={4}>
          <figure className="amsterdam-docs-figure">
            <img alt="Voorbeeld van een afbeelding" src="https://picsum.photos/800/450?random=2" />
          </figure>
        </GridCell>
        <GridCell gridColumns={4}>
          <figure className="amsterdam-docs-figure">
            <img alt="Voorbeeld van een afbeelding" src="https://picsum.photos/800/450?random=3" />
          </figure>
        </GridCell>
      </PageGrid>,
      <div key={Math.random()} style={{ backgroundColor: 'hotpink', marginBlockEnd: '2rem', padding: '2rem 84px' }}>
        <Paragraph inverseColor>Highlight</Paragraph>
      </div>,
      <PageGrid key={Math.random()} style={{ marginBlockEnd: '2rem' }}>
        <GridCell gridColumns={6}>
          <Paragraph>Six columns</Paragraph>
        </GridCell>
        <GridCell gridColumns={6}>
          <Paragraph>Six columns</Paragraph>
        </GridCell>
      </PageGrid>,
      <Footer key={Math.random()}>
        <Footer.Top>
          <VisuallyHidden>
            <Heading>Colofon</Heading>
          </VisuallyHidden>
          <Footer.Column gridColumns={{ start: 1, span: 3 }}>
            <Heading level={2} size="level-4" inverseColor>
              Contact
            </Heading>
            <Paragraph size="small" inverseColor>
              Heeft u een vraag en kunt u het antwoord niet vinden op deze site? Neem dan contact met ons op.
            </Paragraph>
            <UnorderedList markers={false}>
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
            </UnorderedList>
          </Footer.Column>
          <Footer.Column gridColumns={{ start: 5, span: 3 }}>
            <Heading level={2} size="level-4" inverseColor>
              Panels en enquêtes
            </Heading>
            <Paragraph size="small" inverseColor>
              Bent u uitgenodigd om mee te doen aan onderzoek of heeft u vragen over het panel of stadspaspanel?
            </Paragraph>
            <UnorderedList markers={false}>
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
            </UnorderedList>
          </Footer.Column>
          <Footer.Column gridColumns={{ start: 9, span: 3 }}>
            <Heading level={2} size="level-4" inverseColor>
              Onderzoek en Statistiek
            </Heading>
            <UnorderedList markers={false}>
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
            </UnorderedList>
          </Footer.Column>
        </Footer.Top>
      </Footer>,
    ],
  },
}
