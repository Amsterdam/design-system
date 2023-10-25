/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Highlight } from '@amsterdam/design-system-react'
import { Blockquote } from '@amsterdam/design-system-react'
import { Footer } from '@amsterdam/design-system-react'
import { GridCell } from '@amsterdam/design-system-react'
import { Heading } from '@amsterdam/design-system-react'
import { Link } from '@amsterdam/design-system-react'
import { PageGrid } from '@amsterdam/design-system-react'
import { PageHeading } from '@amsterdam/design-system-react'
import { PageMenu } from '@amsterdam/design-system-react'
import { Paragraph } from '@amsterdam/design-system-react'
import { Screen } from '@amsterdam/design-system-react'
import { UnorderedList } from '@amsterdam/design-system-react'
import { VisuallyHidden } from '@amsterdam/design-system-react'
import { MenuIcon } from '@amsterdam/design-system-react-icons'
import { LoginIcon } from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Layout/Screen',
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
  args: { children: <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">Ik pas in het scherm.</p> },
}

export const HomePage: Story = {
  args: {
    children: [
      <PageGrid key={Math.random()} style={{ marginBlockEnd: '2rem' }}>
        <GridCell fullWidth>
          <header>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '2rem', alignItems: 'center' }}>
              <div style={{ flex: 2 }}>
                <img
                  alt="Logo van de gemeente Amsterdam"
                  className="amsterdam-docs-image"
                  height={40}
                  src="https://amsterdam.nl/publish/pages/963333/basis_variant_1_rgb_1.png"
                  width={92}
                />
              </div>
              <PageHeading style={{ flex: 2 }}>Titel</PageHeading>
              <PageMenu style={{ flex: 8, justifyContent: 'flex-end' }}>
                <PageMenu.Link href="#">English</PageMenu.Link>
                <PageMenu.Link href="#">Contact</PageMenu.Link>
                <PageMenu.Link href="#" icon={LoginIcon}>
                  Mijn Amsterdam
                </PageMenu.Link>
                <PageMenu.Button icon={MenuIcon}>Menu</PageMenu.Button>
              </PageMenu>
            </div>
          </header>
        </GridCell>
        <GridCell span={{ narrow: 4, medium: 8, wide: 4 }}>
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
      <Highlight color="purple" key={Math.random()} style={{ marginBlockEnd: '2rem' }}>
        <PageGrid>
          <GridCell span={{ narrow: 4, medium: 3, wide: 3 }}>
            <Blockquote inverseColor>
              Er is maar één moment dat je op tijd kunt komen. Ben je er niet, dan ben je óf te vroeg, óf te laat.
            </Blockquote>
          </GridCell>
          <GridCell start={{ narrow: 1, medium: 4, wide: 5 }} span={{ narrow: 4, medium: 5, wide: 8 }}>
            <figure className="amsterdam-docs-figure">
              <img alt="Voorbeeld van een afbeelding" src="https://picsum.photos/1600/900?random=3" />
            </figure>
          </GridCell>
        </PageGrid>
      </Highlight>,
      <PageGrid key={Math.random()} style={{ marginBlockEnd: '2rem' }}>
        <GridCell span={{ narrow: 4, medium: 4, wide: 6 }}>
          <div style={{ backgroundColor: '#BED200', padding: '2rem', textAlign: 'center' }}>
            <p className="amsterdam-docs-paragraph">Elk de helft</p>
          </div>
        </GridCell>
        <GridCell span={{ narrow: 4, medium: 4, wide: 6 }}>
          <div style={{ backgroundColor: '#BED200', padding: '2rem', textAlign: 'center' }}>
            <p className="amsterdam-docs-paragraph">Elk de helft</p>
          </div>
        </GridCell>
      </PageGrid>,
      <Footer key={Math.random()}>
        <Footer.Top>
          <VisuallyHidden>
            <Heading>Colofon</Heading>
          </VisuallyHidden>
          <Footer.Column span={{ narrow: 4, medium: 3, wide: 3 }}>
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
          <Footer.Column span={{ narrow: 4, medium: 3, wide: 3 }} start={{ narrow: 1, medium: 5, wide: 5 }}>
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
          <Footer.Column span={{ narrow: 4, medium: 3, wide: 4 }} start={{ narrow: 1, medium: 1, wide: 9 }}>
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

export const OverviewPage: Story = {
  args: {
    children: <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">Overzichtspagina nog te maken.</p>,
  },
}

export const ArticlePage: Story = {
  args: { children: <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">Detailpagina nog te maken.</p> },
}
