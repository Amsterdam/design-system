/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import {
  Grid,
  Heading,
  Image,
  Link,
  LinkList,
  PageHeading,
  Paragraph,
  SearchField,
  Spotlight,
} from '@amsterdam/design-system-react'
import {
  CameraIcon,
  ChatBubbleIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'
import { LinkGroupGridCells } from './LinkGroupGridCells'
import { NavigationPage } from './NavigationPage'
import { burgerzakenLinks, parkerenLinks } from './links'
import { exampleHeading, exampleParagraph } from '../../../components/shared/exampleContent'
import { commonMeta } from '../common/config'

const meta = {
  ...commonMeta,
  title: 'Pages/Amsterdam.nl/Navigation Page',
  component: NavigationPage,
} satisfies Meta<typeof NavigationPage>

export default meta

export const Default: StoryObj = {
  args: {
    children: (
      <Grid as="main" gapVertical="large" id="main" paddingBottom="large">
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }}>
          <PageHeading className="ams-mb-m">Burgerzaken</PageHeading>
          <Paragraph size="large">
            Heeft u een paspoort, rijbewijs of uittreksel nodig? Of wilt u een verhuizing doorgeven of een geboorte
            aangeven? Op deze pagina vindt u alle informatie en regelzaken rondom Burgerzaken.
          </Paragraph>
        </Grid.Cell>
        <LinkGroupGridCells linkGroups={burgerzakenLinks} />
      </Grid>
    ),
  },
}

export const WithInteractiveElement: StoryObj = {
  args: {
    children: (
      <main id="main">
        <Grid gapVertical="large" paddingBottom="large">
          <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }}>
            <PageHeading className="ams-mb-m">Parkeren</PageHeading>
            <Paragraph className="ams-mb-m" size="large">
              {exampleParagraph()}
            </Paragraph>
            <Paragraph>{exampleParagraph()}</Paragraph>
          </Grid.Cell>
          <LinkGroupGridCells linkGroups={parkerenLinks}></LinkGroupGridCells>
        </Grid>
        <Spotlight>
          <Grid paddingVertical="large">
            <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
              <Heading className="ams-mb-m" color="inverse" level={2}>
                Parkeertarieven
              </Heading>
              <SearchField className="ams-mb-m">
                <SearchField.Input placeholder="Zoek op adres" />
                <SearchField.Button />
              </SearchField>
              <LinkList>
                <LinkList.Link color="inverse" href="#">
                  Tarieven stadsgebied Weesp
                </LinkList.Link>
                <LinkList.Link color="inverse" href="#">
                  Parkeren op feestdagen
                </LinkList.Link>
              </LinkList>
            </Grid.Cell>
          </Grid>
        </Spotlight>
        <Image alt="" aspectRatio="16:9" className="ams-mb-2xl" src="https://picsum.photos/id/133/1600/900" />
      </main>
    ),
  },
}

export const SubnavigationPage: StoryObj = {
  args: {
    children: (
      <main id="main">
        <Grid gapVertical="large" paddingBottom="large">
          <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }}>
            <PageHeading className="ams-mb-m">Overzichtspagina content / Subnavigatiepagina</PageHeading>
            <Paragraph size="large">
              Amsterdam wil een nieuwe traditie starten om met oud en nieuw naar een centrale nieuwjaarsviering te gaan
              in plaats van zelf vuurwerk af te steken.
            </Paragraph>
          </Grid.Cell>
        </Grid>
        <Image alt="" aspectRatio="16:5" src="https://picsum.photos/1600/500" />
        <Grid paddingVertical="large">
          <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
            <Heading className="ams-mb-s" level={2}>
              L2 Paragraaf titel
            </Heading>
            <Paragraph>{exampleParagraph()}</Paragraph>
          </Grid.Cell>
          <LinkGroupGridCells linkGroups={burgerzakenLinks.slice(0, 6)} />
          <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
            <Heading className="ams-mb-s" level={2} size="level-4">
              {exampleHeading()}
            </Heading>
            <Paragraph className="ams-mb-s">{exampleParagraph()}</Paragraph>
            <Link href="#" variant="standalone">
              Rijbewijs aanvragen
            </Link>
          </Grid.Cell>
          <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }}>
            <Heading className="ams-mb-s" level={2} size="level-4">
              {exampleHeading()}
            </Heading>
            <Paragraph className="ams-mb-s">{exampleParagraph()}</Paragraph>
            <Link href="#" variant="standalone">
              Rijbewijs aanvragen
            </Link>
          </Grid.Cell>
          <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
            <Heading className="ams-mb-s" level={2} size="level-4">
              {exampleHeading()}
            </Heading>
            <Paragraph className="ams-mb-s">{exampleParagraph()}</Paragraph>
            <Link href="#" variant="standalone">
              Rijbewijs aanvragen
            </Link>
          </Grid.Cell>
          <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }}>
            <Heading className="ams-mb-s" level={2} size="level-4">
              {exampleHeading()}
            </Heading>
            <Paragraph className="ams-mb-s">{exampleParagraph()}</Paragraph>
            <Link href="#" variant="standalone">
              Rijbewijs aanvragen
            </Link>
          </Grid.Cell>
        </Grid>
        <Spotlight color="magenta">
          <Grid paddingVertical="large">
            <Grid.Cell span={{ narrow: 4, medium: 8, wide: 10 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
              <Heading color="inverse" level={3}>
                {exampleHeading()}
              </Heading>
            </Grid.Cell>
            <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
              <Heading className="ams-mb-s" color="inverse" level={4}>
                {exampleHeading()}
              </Heading>
              <Paragraph color="inverse">{exampleParagraph()}</Paragraph>
            </Grid.Cell>
            <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }}>
              <Heading className="ams-mb-s" color="inverse" level={4}>
                {exampleHeading()}
              </Heading>
              <Paragraph color="inverse">{exampleParagraph()}</Paragraph>
            </Grid.Cell>
          </Grid>
        </Spotlight>
        <Grid paddingVertical="large">
          <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
            <Heading className="ams-mb-s" level={2}>
              L2 Paragraaf titel
            </Heading>
            <Paragraph>{exampleParagraph()}</Paragraph>
          </Grid.Cell>
          <LinkGroupGridCells linkGroups={burgerzakenLinks.slice(4, 8)} />
        </Grid>
        <Spotlight className="ams-mb-xl" color="green">
          <Grid paddingVertical="large">
            <Grid.Cell span={{ narrow: 4, medium: 5, wide: 7 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
              <Heading className="ams-mb-s" color="inverse" level={4}>
                Blijf op de hoogte
              </Heading>
              <Paragraph className="ams-mb-m" color="inverse">
                Schrijf u nu in voor de Nieuwsbrief Amsterdam en ontvang wekelijks nieuws, tips en mooie verhalen over
                de stad en uw stadsdeel.
              </Paragraph>
              <Link color="inverse" href="#" variant="standalone">
                Ik wil de nieuwsbrief
              </Link>
            </Grid.Cell>
            <Grid.Cell span={{ narrow: 4, medium: 3, wide: 4 }}>
              <Heading className="ams-mb-s" color="inverse" level={4}>
                Deel deze pagina
              </Heading>
              <LinkList>
                <LinkList.Link color="inverse" href="#" icon={FacebookIcon}>
                  Facebook
                </LinkList.Link>
                <LinkList.Link color="inverse" href="#" icon={CameraIcon}>
                  Instagram
                </LinkList.Link>
                <LinkList.Link color="inverse" href="#" icon={LinkedinIcon}>
                  LinkedIn
                </LinkList.Link>
                <LinkList.Link color="inverse" href="#" icon={ChatBubbleIcon}>
                  Whatsapp
                </LinkList.Link>
                <LinkList.Link color="inverse" href="#" icon={TwitterIcon}>
                  X (Twitter)
                </LinkList.Link>
              </LinkList>
            </Grid.Cell>
          </Grid>
        </Spotlight>
      </main>
    ),
  },
}
