/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Blockquote } from '@amsterdam/design-system-react'
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
    layout: 'fullscreen',
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
        <GridCell span={[4, 8, 4]}>
          <figure className="amsterdam-docs-figure">
            <img alt="Voorbeeld van een afbeelding" src="https://picsum.photos/1024/576?random=1" />
          </figure>
        </GridCell>
        <GridCell span={4}>
          <figure className="amsterdam-docs-figure">
            <img alt="Voorbeeld van een afbeelding" src="https://picsum.photos/1024/576?random=2" />
          </figure>
        </GridCell>
        <GridCell span={4}>
          <figure className="amsterdam-docs-figure">
            <img alt="Voorbeeld van een afbeelding" src="https://picsum.photos/1024/576?random=3" />
          </figure>
        </GridCell>
      </PageGrid>,
      <div key={Math.random()} style={{ backgroundColor: '#A00078', marginBlockEnd: '2rem', paddingBlock: '2rem' }}>
        <PageGrid>
          <GridCell span={[4, 3, 3]}>
            <Blockquote inverseColor>
              Er is maar één moment dat je op tijd kunt komen. Ben je er niet, dan ben je óf te vroeg, óf te laat.
            </Blockquote>
          </GridCell>
          <GridCell start={[1, 4, 5]} span={[4, 5, 8]}>
            <figure className="amsterdam-docs-figure">
              <img alt="Voorbeeld van een afbeelding" src="https://picsum.photos/1600/900?random=3" />
            </figure>
          </GridCell>
        </PageGrid>
      </div>,
      <PageGrid key={Math.random()} style={{ marginBlockEnd: '2rem' }}>
        <GridCell span={[4, 4, 6]}>
          <div style={{ backgroundColor: '#BED200', padding: '2rem', textAlign: 'center' }}>
            <Paragraph>Elk de helft</Paragraph>
          </div>
        </GridCell>
        <GridCell span={[4, 4, 6]}>
          <div style={{ backgroundColor: '#BED200', padding: '2rem', textAlign: 'center' }}>
            <Paragraph>Elk de helft</Paragraph>
          </div>
        </GridCell>
      </PageGrid>,
      <Footer key={Math.random()}>
        <Footer.Top>
          <VisuallyHidden>
            <Heading>Colofon</Heading>
          </VisuallyHidden>
          <Footer.Column span={[4, 3, 3]}>
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
          <Footer.Column span={[4, 3, 3]} start={[1, 5, 5]}>
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
          <Footer.Column span={[4, 3, 4]} start={[1, 1, 9]}>
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
