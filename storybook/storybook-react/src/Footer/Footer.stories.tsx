/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import {
  Footer,
  GridCell,
  Heading,
  Link,
  PageGrid,
  PageMenu,
  Paragraph,
  UnorderedList,
} from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Containers/Footer',
  component: Footer,
  args: {
    children: 'Nieuw component',
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'hidden',
      },
    },
  },
} satisfies Meta<typeof Footer>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: [
      <Footer.Top key="footer-top">
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
      </Footer.Top>,
      <Footer.Bottom key="footer-bottom">
        <PageGrid>
          <GridCell fullWidth>
            <PageMenu>
              <PageMenu.Link href="/">Privacy</PageMenu.Link>
              <PageMenu.Link href="/">Toegankelijkheid</PageMenu.Link>
            </PageMenu>
          </GridCell>
        </PageGrid>
      </Footer.Bottom>,
    ],
  },
}
