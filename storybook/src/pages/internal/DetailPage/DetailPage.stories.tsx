/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Breadcrumb,
  Column,
  DescriptionList,
  Grid,
  Heading,
  Image,
  Link,
  LinkList,
  Paragraph,
  Row,
  TabNavigation,
} from '@amsterdam/design-system-react'
import { DocumentWithPencilIcon, MailIcon } from '@amsterdam/design-system-react-icons'

import { commonMeta } from '../common/config'

const tabLabels = ['Overzicht', 'Kerngegevens', 'Projectinformatie', 'Projectgrenzen', 'Projectcodes', 'Autorisaties']

const sidebarLabels = [
  'Projectdetails',
  'Financiën',
  'Projectstructuur',
  'Kwaliteit',
  'Planning',
  "Risico's",
  'Logboek',
]

const meta = {
  ...commonMeta,
  title: 'Pages/Internal/Detail Page',
  render: () => (
    <>
      <Grid paddingTop="x-large">
        <Grid.Cell span="all">
          <Breadcrumb>
            <Breadcrumb.Link href="#">Dashboard</Breadcrumb.Link>
            <Breadcrumb.Link href="#">Projecten</Breadcrumb.Link>
          </Breadcrumb>
        </Grid.Cell>
      </Grid>
      <Grid paddingBottom="x-large">
        <Grid.Cell span="all">
          <Heading level={2} size="level-1">
            Kerngegevens
          </Heading>
          <Heading level={1} size="level-2">
            Brug 423 opwaardering (Berlagebrug) – ams20192715
          </Heading>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 8, wide: 10 }} start={{ narrow: 1, medium: 1, wide: 3 }}>
          <TabNavigation>
            <TabNavigation.List>
              {tabLabels.map((label) => (
                <TabNavigation.Link aria-current={label === 'Kerngegevens' ? 'page' : undefined} href="#" key={label}>
                  {label}
                </TabNavigation.Link>
              ))}
            </TabNavigation.List>
          </TabNavigation>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 2, wide: 2 }} start={1}>
          <TabNavigation orientation="vertical">
            <TabNavigation.List>
              {sidebarLabels.map((label) => (
                <TabNavigation.Link aria-current={label === 'Projectdetails' ? 'page' : undefined} href="#" key={label}>
                  {label}
                </TabNavigation.Link>
              ))}
            </TabNavigation.List>
          </TabNavigation>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }}>
          <Column gap="x-large">
            <Row align="between" alignVertical="baseline">
              <Heading level={3}>Kerngegevens</Heading>
              <LinkList>
                <LinkList.Link href="#" icon={DocumentWithPencilIcon}>
                  Wijzig kerngegevens
                </LinkList.Link>
              </LinkList>
            </Row>
            <section>
              <Heading className="ams-mb-m" level={4}>
                Opdrachtgevers
              </Heading>
              <DescriptionList termsWidth="medium">
                <DescriptionList.Term>Ambtelijk opdrachtgever</DescriptionList.Term>
                <DescriptionList.Description>
                  <Row align="between">
                    <span>Marise Ent</span>
                    <MailIcon fill="#004469" width={24} />
                  </Row>
                </DescriptionList.Description>
                <DescriptionList.Term>Bestuurlijk Opdrachtgever Stad</DescriptionList.Term>
                <DescriptionList.Description>
                  <Row align="between">
                    <span>Melanie van der Horst</span>
                    <MailIcon fill="#004469" width={24} />
                  </Row>
                </DescriptionList.Description>
              </DescriptionList>
            </section>
            <section>
              <Heading className="ams-mb-m" level={4}>
                Opdrachtnemers
              </Heading>
              <DescriptionList termsWidth="medium">
                <DescriptionList.Term>Accounthouder</DescriptionList.Term>
                <DescriptionList.Description>
                  <Row align="between">
                    <span>Paul Brouwer</span>
                    <MailIcon fill="#004469" width={24} />
                  </Row>
                </DescriptionList.Description>
                <DescriptionList.Term>Opdrachtnemer</DescriptionList.Term>
                <DescriptionList.Description>
                  <Row align="between">
                    <span>Erik Bakker</span>
                    <MailIcon fill="#004469" width={24} />
                  </Row>
                </DescriptionList.Description>
                <DescriptionList.Term>Projectbeheerser</DescriptionList.Term>
                <DescriptionList.Description>
                  <Row align="between">
                    <span>Klaas Helmers</span>
                    <MailIcon fill="#004469" width={24} />
                  </Row>
                </DescriptionList.Description>
                <DescriptionList.Term>Projectbeheerser</DescriptionList.Term>
                <DescriptionList.Description>
                  <Row align="between">
                    <span>Marjolein Boomer</span>
                    <MailIcon fill="#004469" width={24} />
                  </Row>
                </DescriptionList.Description>
                <DescriptionList.Term>Projectbeheerser</DescriptionList.Term>
                <DescriptionList.Description>
                  <Row align="between">
                    <span>Carina Cairo</span>
                    <MailIcon fill="#004469" width={24} />
                  </Row>
                </DescriptionList.Description>
              </DescriptionList>
            </section>
            <section>
              <Heading className="ams-mb-m" level={4}>
                Basisgegevens
              </Heading>
              <DescriptionList termsWidth="medium">
                <DescriptionList.Term>Gebied</DescriptionList.Term>
                <DescriptionList.Description>Gemeente Amsterdam</DescriptionList.Description>
                <DescriptionList.Term>Stadsdeel</DescriptionList.Term>
                <DescriptionList.Description>Amsterdam</DescriptionList.Description>
                <DescriptionList.Term>Stadsdeel</DescriptionList.Term>
                <DescriptionList.Description>Amsterdam</DescriptionList.Description>
                <DescriptionList.Term>Status</DescriptionList.Term>
                <DescriptionList.Description>Actief</DescriptionList.Description>
                <DescriptionList.Term>Projectsoort</DescriptionList.Term>
                <DescriptionList.Description>Programma Bruggen</DescriptionList.Description>
              </DescriptionList>
            </section>
          </Column>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 3, wide: 3 }} start={{ narrow: 1, medium: 3, wide: 10 }}>
          <Column>
            <Column gap="x-small">
              <Image alt="" src="https://picsum.photos/900/720?random=1" />
              <Paragraph>
                Impressie Brug 423 &nbsp; <Link href="#">Afbeelding wijzigen</Link>
              </Paragraph>
            </Column>
            <Column gap="x-small">
              <Image alt="" src="https://picsum.photos/900/720?random=2" />
              <Paragraph>
                Locatie Brug 423 &nbsp; <Link href="#">Bekijk op datapunt.nl</Link>
              </Paragraph>
            </Column>
          </Column>
        </Grid.Cell>
      </Grid>
    </>
  ),
} satisfies Meta

export default meta

export const Default: StoryObj = {}
