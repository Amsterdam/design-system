/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import {
  Card,
  Grid,
  Heading,
  Image,
  LinkList,
  PageHeading,
  Paragraph,
  SearchField,
  Spotlight,
  StandaloneLink,
} from '@amsterdam/design-system-react'
import {
  CameraIcon,
  FacebookIcon,
  LinkedinIcon,
  SpeechBalloonEllipsisIcon,
  XIcon,
} from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'
import { LinkGroupGridCells } from './LinkGroupGridCells'
import { NavigationPage } from './NavigationPage'
import { burgerzakenLinks, parkerenLinks } from './links'
import { exampleHeading, exampleParagraph, exampleStandaloneLine } from '../../../components/shared/exampleContent'
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
      <Grid as="main" id="main" paddingBottom="2x-large">
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }}>
          <Heading className="ams-mb-m" level={1}>
            Verkeer en Vervoer
          </Heading>
          <Paragraph size="large">
            Heeft u een paspoort, rijbewijs of uittreksel nodig? Of wilt u een verhuizing doorgeven of een geboorte
            aangeven? Op deze pagina vindt u alle informatie en regelzaken rondom Burgerzaken.
          </Paragraph>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
          <Card>
            <Card.Heading level={2} size="level-3">
              <Card.Link href="#">Milieuzone voor personenauto’s</Card.Link>
            </Card.Heading>
            <Paragraph>
              Met benzine, LPG of CNG mag u de zone in. Niet met een diesel emissieklasse 0 tot en met 4.
            </Paragraph>
          </Card>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 5, wide: 7 }}>
          <Card>
            <Card.Heading level={2} size="level-3">
              <Card.Link href="#">Fiets weg?</Card.Link>
            </Card.Heading>
            <Paragraph>
              Verwijderde fietsen gaan naar het Fietsdepot. U kunt online zoeken of uw fiets daar staat.
            </Paragraph>
          </Card>
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
        <Grid paddingBottom="2x-large">
          <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }}>
            <PageHeading className="ams-mb-m">Parkeren</PageHeading>
            <Paragraph className="ams-mb-m" size="large">
              {exampleParagraph()}
            </Paragraph>
          </Grid.Cell>
          <LinkGroupGridCells linkGroups={parkerenLinks}></LinkGroupGridCells>
        </Grid>
        <Spotlight>
          <Grid paddingVertical="x-large">
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
        <Image alt="" aspectRatio="16:9" className="ams-mb-2xl" src="https://picsum.photos/id/133/1440/810" />
      </main>
    ),
  },
}

export const SubnavigationPage: StoryObj = {
  args: {
    children: (
      <main id="main">
        <Grid paddingBottom="2x-large">
          <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }}>
            <PageHeading className="ams-mb-m">Overzichtspagina content / Subnavigatiepagina</PageHeading>
            <Paragraph size="large">
              Amsterdam wil een nieuwe traditie starten om met oud en nieuw naar een centrale nieuwjaarsviering te gaan
              in plaats van zelf vuurwerk af te steken.
            </Paragraph>
          </Grid.Cell>
        </Grid>
        <Image alt="" aspectRatio="16:5" src="https://picsum.photos/1440/450" />
        <Grid paddingVertical="x-large">
          <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
            <Heading className="ams-mb-s" level={2}>
              L2 Paragraaf titel
            </Heading>
            <Paragraph>{exampleParagraph()}</Paragraph>
          </Grid.Cell>
          <LinkGroupGridCells linkGroups={burgerzakenLinks.slice(0, 6)} />
          <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
            <Heading className="ams-mb-xs" level={2} size="level-4">
              {exampleHeading()}
            </Heading>
            <Paragraph className="ams-mb-m">{exampleParagraph()}</Paragraph>
            <StandaloneLink href="#">{exampleStandaloneLine()}</StandaloneLink>
          </Grid.Cell>
          <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }}>
            <Heading className="ams-mb-xs" level={2} size="level-4">
              {exampleHeading()}
            </Heading>
            <Paragraph className="ams-mb-m">{exampleParagraph()}</Paragraph>
            <StandaloneLink href="#">{exampleStandaloneLine()}</StandaloneLink>
          </Grid.Cell>
          <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
            <Heading className="ams-mb-xs" level={2} size="level-4">
              {exampleHeading()}
            </Heading>
            <Paragraph className="ams-mb-m">{exampleParagraph()}</Paragraph>
            <StandaloneLink href="#">{exampleStandaloneLine()}</StandaloneLink>
          </Grid.Cell>
          <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }}>
            <Heading className="ams-mb-xs" level={2} size="level-4">
              {exampleHeading()}
            </Heading>
            <Paragraph className="ams-mb-m">{exampleParagraph()}</Paragraph>
            <StandaloneLink href="#">{exampleStandaloneLine()}</StandaloneLink>
          </Grid.Cell>
        </Grid>
        <Spotlight color="magenta">
          <Grid paddingVertical="x-large">
            <Grid.Cell span={{ narrow: 4, medium: 8, wide: 10 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
              <Heading color="inverse" level={3}>
                {exampleHeading()}
              </Heading>
            </Grid.Cell>
            <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
              <Heading className="ams-mb-xs" color="inverse" level={4}>
                {exampleHeading()}
              </Heading>
              <Paragraph color="inverse">{exampleParagraph()}</Paragraph>
            </Grid.Cell>
            <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }}>
              <Heading className="ams-mb-xs" color="inverse" level={4}>
                {exampleHeading()}
              </Heading>
              <Paragraph color="inverse">{exampleParagraph()}</Paragraph>
            </Grid.Cell>
          </Grid>
        </Spotlight>
        <Grid paddingVertical="x-large">
          <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
            <Heading className="ams-mb-s" level={2}>
              L2 Paragraaf titel
            </Heading>
            <Paragraph>{exampleParagraph()}</Paragraph>
          </Grid.Cell>
          <LinkGroupGridCells linkGroups={burgerzakenLinks.slice(4, 8)} />
        </Grid>
        <Spotlight className="ams-mb-xl" color="green">
          <Grid paddingVertical="x-large">
            <Grid.Cell span={{ narrow: 4, medium: 5, wide: 7 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
              <Heading className="ams-mb-s" color="inverse" level={4}>
                Blijf op de hoogte
              </Heading>
              <Paragraph className="ams-mb-m" color="inverse">
                Schrijf u nu in voor de Nieuwsbrief Amsterdam en ontvang wekelijks nieuws, tips en mooie verhalen over
                de stad en uw stadsdeel.
              </Paragraph>
              <StandaloneLink color="inverse" href="#">
                Ik wil de nieuwsbrief
              </StandaloneLink>
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
                <LinkList.Link color="inverse" href="#" icon={SpeechBalloonEllipsisIcon}>
                  Whatsapp
                </LinkList.Link>
                <LinkList.Link color="inverse" href="#" icon={XIcon}>
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
