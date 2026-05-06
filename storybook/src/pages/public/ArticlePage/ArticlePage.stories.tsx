/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Breadcrumb,
  Card,
  Grid,
  Heading,
  Image,
  Link,
  LinkList,
  Paragraph,
  Spotlight,
  StandaloneLink,
} from '@amsterdam/design-system-react'

import { commonMeta } from '../common/config'

const meta = {
  ...commonMeta,
  title: 'Pages/Public/Article Page',
} satisfies Meta

export default meta

export const Default: StoryObj = {
  render: () => (
    <>
      <Grid paddingTop="large">
        <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
          <Breadcrumb>
            <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
            <Breadcrumb.Link href="#">Nieuws</Breadcrumb.Link>
          </Breadcrumb>
        </Grid.Cell>
      </Grid>
      <main id="inhoud">
        <Grid paddingBottom="x-large">
          <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
            <Heading className="ams-mb-s" level={1}>
              Met korting van A naar B op de deelscooter of -bakfiets
            </Heading>
            <Paragraph className="ams-mb-xl">29 juli 2025</Paragraph>
            <Paragraph size="large">
              Woont of werkt u in Amsterdam? Dan maakt u tot en met oktober met korting gebruik van deelscooters en
              -bakfietsen. Zo kunt u de auto laten staan en de werkzaamheden in en rond de stad vermijden.
            </Paragraph>
          </Grid.Cell>
        </Grid>
        <Image
          alt=""
          aspectRatio="16:5"
          loading="lazy"
          src="https://picsum.photos/1440/450"
          srcSet="https://picsum.photos/640/200 640w, https://picsum.photos/1280/400 1280w, https://picsum.photos/1440/450 1440w"
        />
        <Grid paddingVertical="x-large">
          <Grid.Cell
            className="ams-prose"
            span={{ narrow: 4, medium: 6, wide: 7 }}
            start={{ narrow: 1, medium: 2, wide: 3 }}
          >
            <Paragraph>
              U kunt gebruikmaken van de kortingsacties via Amsterdam Bereikbaar. De actie geldt voor Amsterdammers en
              forenzen van en naar Amsterdam, en is te activeren tot 6 oktober. U kunt de korting gebruiken tot en met
              31 oktober.
            </Paragraph>
            <Heading level={2}>Meer deelvervoer</Heading>
            <Paragraph>
              Het gebruik van deelvervoer groeit snel. Deelscooters en deelbakfietsen zijn een erg gewild
              vervoersalternatief. Vanwege de grote vraag en het vele gebruik is besloten om per juli dit jaar het
              aantal deelscooters in de stad te verhogen. Van 1.200 naar 1.500 stuks, met extra aanbod in de stadsdelen
              Nieuw-West, Noord en Zuidoost. Op de{' '}
              <Link href="https://kaart.amsterdam.nl/deelvervoer?pk_vid=6b30897b3a8b78d71753106853e193da#52.3102/4.7243/52.4050/5.0539/brt/14329,14331/">
                Kaart deelvervoer Amsterdam
              </Link>{' '}
              ziet u waar bij u in de buurt deelvervoer wordt aangeboden.
            </Paragraph>
            <Heading level={2}>Evenementen in de stad</Heading>
            <Paragraph>
              Deelvervoer is ook handig tijdens evenementen. Geen gedoe waar de auto te parkeren of wachten in de rij.
              Zo werden er op 21 juni, de dag van het festival Op de Ring, bijna 12.000 ritten gemaakt met de
              deelscooter en deelbakfiets. Dat is meer dan ooit gemaakt op 1 dag. Deze zomer staan er nog een paar grote
              evenementen op de agenda, waaronder Sail 2025. Ook hier kunt u met deelvervoer naartoe komen.
            </Paragraph>
            <Heading level={2}>Verkeershinder ontwijken</Heading>
            <Paragraph>
              Daarnaast kunt u met deelscooters en -bakfietsen verkeershinder omzeilen. Deze zomer vinden er veel
              werkzaamheden plaats in en rond de stad, waaronder op grote delen van de ring A10 door Rijkswaterstaat.
              Door de auto te laten staan en met korting anders te reizen, heeft u hopelijk minder last van de hinder.
            </Paragraph>
            <Heading level={2}>Meer weten</Heading>
            <Paragraph>
              Gebruikmaken van de kortingsacties? Kijk dan op{' '}
              <Link href="https://www.amsterdambereikbaar.nl/en/2025/kortingsacties">Amsterdam Bereikbaar</Link>. Wilt u
              meer weten over deelvervoer in de stad? Ga dan naar{' '}
              <Link href="https://www.amsterdam.nl/deelvervoer/">Deelvervoer</Link>.
            </Paragraph>
            <Heading level={2}>Lees ook</Heading>
            <LinkList>
              <LinkList.Link href="https://www.amsterdam.nl/nieuws/nieuwsoverzicht/e-bike-uitproberen/">
                Sociale huurders op Strandeiland en Centrumeiland kunnen gratis e-bike uitproberen
              </LinkList.Link>
              <LinkList.Link href="https://www.amsterdam.nl/nieuws/nieuwsoverzicht/amstelveenseweg-dicht/">
                Amstelveenseweg ruim 5 weken dicht voor gemotoriseerd verkeer
              </LinkList.Link>
              <LinkList.Link href="https://www.amsterdam.nl/nieuws/nieuwsoverzicht/groot-onderhoud-a4/">
                Groot onderhoud A4 vanaf 11 juli: houd rekening met flinke vertraging
              </LinkList.Link>
            </LinkList>
          </Grid.Cell>
        </Grid>
      </main>
      <Spotlight as="aside" color="green">
        <Grid paddingVertical="x-large">
          <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
            <Heading className="ams-mb-s" color="inverse" level={2} size="level-3">
              Blijf op de hoogte!
            </Heading>
            <Paragraph className="ams-mb-m" color="inverse">
              Schrijf u nu in voor de Nieuwsbrief Amsterdam en ontvang wekelijks nieuws, tips en mooie verhalen over de
              stad en uw stadsdeel.
            </Paragraph>
            <StandaloneLink color="inverse" href="#">
              Ik wil de nieuwsbrief
            </StandaloneLink>
          </Grid.Cell>
        </Grid>
      </Spotlight>
      <aside>
        <Grid gapVertical="large" paddingVertical="x-large">
          <Grid.Cell span="all">
            <Heading level={2} size="level-1">
              Meer nieuws
            </Heading>
          </Grid.Cell>
          <Grid.Cell span={4}>
            <Card>
              <Card.Image alt="" src="https://picsum.photos/640/360?random=1" />
              <Card.HeadingGroup tagline="Nieuws">
                <Card.Heading level={3}>
                  <Card.Link href="#">Waarom we op zoek zijn naar vleermuizen</Card.Link>
                </Card.Heading>
              </Card.HeadingGroup>
              <Paragraph>
                U kunt &apos;s avonds ecologen in oranje hesjes tegenkomen. Zij zijn op zoek naar vleermuizen. Dat heeft
                te maken met het verduurzamen van woningen.
              </Paragraph>
            </Card>
          </Grid.Cell>
          <Grid.Cell span={4}>
            <Card>
              <Card.Image alt="" src="https://picsum.photos/640/360?random=2" />
              <Card.HeadingGroup tagline="Nieuws">
                <Card.Heading level={3}>
                  <Card.Link href="#">Meer aandacht voor voetgangers, een jaar lang</Card.Link>
                </Card.Heading>
              </Card.HeadingGroup>
              <Paragraph>
                We gaan de veiligheid voor voetgangers verbeteren, meer ruimte maken, en lopen en wandelen stimuleren.
              </Paragraph>
            </Card>
          </Grid.Cell>
          <Grid.Cell span={4}>
            <Card>
              <Card.Image alt="" src="https://picsum.photos/640/360?random=3" />
              <Card.HeadingGroup tagline="Nieuws">
                <Card.Heading level={3}>
                  <Card.Link href="#">Nieuwe manieren om afval op te halen</Card.Link>
                </Card.Heading>
              </Card.HeadingGroup>
              <Paragraph>
                Afvalboten, bakfietsen en ondergrondse containers. We experimenteren met nieuwe manieren om afval op te
                halen in het centrum.
              </Paragraph>
            </Card>
          </Grid.Cell>
        </Grid>
      </aside>
    </>
  ),
}
