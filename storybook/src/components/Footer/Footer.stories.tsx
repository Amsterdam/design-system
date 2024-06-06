/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import {
  Footer,
  Grid,
  Heading,
  LinkList,
  PageMenu,
  Paragraph,
  VisuallyHidden,
} from '@amsterdam/design-system-react/src'
import { EmailIcon, PhoneIcon } from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Containers/Footer',
  component: Footer,
} satisfies Meta<typeof Footer>

export default meta

type Story = StoryObj<typeof meta>

// TODO Implement the actual Amsterdam.nl footer
export const Default: Story = {
  args: {
    children: [
      <Footer.Top key="footer-top">
        <VisuallyHidden>
          <Heading>Colofon</Heading>
        </VisuallyHidden>
        <Grid gapVertical="large" paddingVertical="medium">
          <Grid.Cell span={3}>
            <div style={{ display: 'grid', gap: '2.5rem' }}>
              <Heading level={2} size="level-4" inverseColor>
                Contact
              </Heading>
              <Paragraph size="small" inverseColor>
                Heeft u een vraag en kunt u het antwoord niet vinden op deze site? Neem dan contact met ons op.
              </Paragraph>
              <LinkList>
                <LinkList.Link href="mailto:redactie.os@amsterdam.nl" icon={EmailIcon} onBackground="dark" size="small">
                  E-mail
                </LinkList.Link>
                <LinkList.Link href="tel:+31202510333" icon={PhoneIcon} onBackground="dark" size="small">
                  020 251 0333
                </LinkList.Link>
              </LinkList>
            </div>
          </Grid.Cell>
          <Grid.Cell span={3} start={{ narrow: 1, medium: 5, wide: 5 }}>
            <div style={{ display: 'grid', gap: '2.5rem' }}>
              <Heading level={2} size="level-4" inverseColor>
                Panels en enquêtes
              </Heading>
              <Paragraph size="small" inverseColor>
                Bent u uitgenodigd om mee te doen aan onderzoek of heeft u vragen over het panel of stadspaspanel?
              </Paragraph>
              <LinkList>
                <LinkList.Link href="#" onBackground="dark" rel="external" size="small">
                  Meedoen aan onderzoek
                </LinkList.Link>
                <LinkList.Link href="#" onBackground="dark" rel="external" size="small">
                  Panel Amsterdam
                </LinkList.Link>
                <LinkList.Link href="#" onBackground="dark" rel="external" size="small">
                  Stadspaspanel Amsterdam
                </LinkList.Link>
              </LinkList>
            </div>
          </Grid.Cell>
          <Grid.Cell span={3} start={{ narrow: 1, medium: 1, wide: 9 }}>
            <div style={{ display: 'grid', gap: '2.5rem' }}>
              <Heading level={2} size="level-4" inverseColor>
                Onderzoek en Statistiek
              </Heading>
              <LinkList>
                <LinkList.Link href="#" onBackground="dark" size="small">
                  Over Onderzoek en Statistiek
                </LinkList.Link>
                <LinkList.Link href="#" onBackground="dark" size="small">
                  Veelgestelde vragen
                </LinkList.Link>
                <LinkList.Link href="#" onBackground="dark" rel="external" size="small">
                  Nieuwsbrief
                </LinkList.Link>
                <LinkList.Link href="#" onBackground="dark" size="small">
                  Vacatures
                </LinkList.Link>
              </LinkList>
            </div>
          </Grid.Cell>
        </Grid>
      </Footer.Top>,
      <Footer.Bottom key="footer-bottom">
        <VisuallyHidden>
          <Heading level={2}>Over deze website</Heading>
        </VisuallyHidden>
        <Grid paddingVertical="small">
          <Grid.Cell span="all">
            <PageMenu>
              <PageMenu.Link href="#">Over deze site</PageMenu.Link>
              <PageMenu.Link href="#">Privacy</PageMenu.Link>
              <PageMenu.Link href="#">Cookies</PageMenu.Link>
              <PageMenu.Link href="#">Archief</PageMenu.Link>
            </PageMenu>
          </Grid.Cell>
        </Grid>
      </Footer.Bottom>,
    ],
  },
}
