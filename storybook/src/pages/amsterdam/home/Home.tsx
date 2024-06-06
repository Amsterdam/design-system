import {
  AspectRatio,
  Card,
  Column,
  Footer,
  Grid,
  Header,
  Heading,
  Image,
  Link,
  Overlap,
  Paragraph,
  Screen,
  SearchField,
  SkipLink,
  Spotlight,
} from '@amsterdam/design-system-react'
import type { FooterProps } from '@amsterdam/design-system-react'
import { ReactElement } from 'react'

type HomeProps = {
  footer: ReactElement<FooterProps>
}

export const Home = ({ footer }: HomeProps) => (
  <>
    <SkipLink href="#main">Direct naar inhoud</SkipLink>
    <Screen maxWidth="wide">
      <Grid>
        <Grid.Cell span="all">
          <Header menu={<button className="ams-header__menu-button">Menu</button>} />
        </Grid.Cell>
      </Grid>
      <Overlap>
        <AspectRatio ratio="2x-wide">
          <Image
            alt=""
            cover
            srcSet="https://picsum.photos/640/360 640w, https://picsum.photos/1280/720 1280w"
            sizes="(max-width: 36rem) 640px, 100vw"
          />
        </AspectRatio>
        <Grid style={{ alignSelf: 'center' }}>
          <Grid.Cell span={{ medium: 6, narrow: 4, wide: 8 }} start={{ medium: 2, narrow: 1, wide: 3 }}>
            <SearchField onSubmit={() => {}}>
              <SearchField.Input label="Zoeken" placeholder="Wat kunnen we voor u vinden?" />
              <SearchField.Button />
            </SearchField>
          </Grid.Cell>
        </Grid>
      </Overlap>
      <Grid paddingVertical="medium">
        <Grid.Cell span="all">
          <Heading>Meest bezocht</Heading>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 3 }}>
          <Card>
            <Heading level={3} size="level-4">
              <Card.Link href="#">Gemeentebelastingen</Card.Link>
            </Heading>
            <Paragraph size="small">
              Bekijk welke belastingen en heffingen er zijn, hoe u bezwaar maakt of een betalingsregeling treft.
            </Paragraph>
          </Card>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 3 }}>
          <Card>
            <Heading level={3} size="level-4">
              <Card.Link href="#">Parkeren + Reizen (P+R)</Card.Link>
            </Heading>
            <Paragraph size="small">
              U kunt met uw auto goedkoop parkeren bij een P+R-locatie aan de rand van de stad.
            </Paragraph>
          </Card>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 3 }}>
          <Card>
            <Heading level={3} size="level-4">
              <Card.Link href="#">Paspoort, ID-kaart en rijbewijs</Card.Link>
            </Heading>
            <Paragraph size="small">Vraag deze bewijzen aan of verleng ze. Geef een vermissing aan.</Paragraph>
          </Card>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 3 }}>
          <Card>
            <Heading level={3} size="level-4">
              <Card.Link href="#">Onderwijs</Card.Link>
            </Heading>
            <Paragraph size="small">
              Meld een kind aan voor basisschool, middelbare school of kinderopvang. Bekijk het kindtegoed op uw
              Stadspas.
            </Paragraph>
          </Card>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 3 }}>
          <Card>
            <Heading level={3} size="level-4">
              <Card.Link href="#">Meldingen openbare ruimte en overlast</Card.Link>
            </Heading>
            <Paragraph size="small">
              Ziet u op straat of in een park iets waarvan u wilt dat het gemaakt of opgeruimd wordt, dan kunt u dat bij
              de gemeente melden.
            </Paragraph>
          </Card>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 3 }}>
          <Card>
            <Heading level={3} size="level-4">
              <Card.Link href="#">Verhuizing doorgeven</Card.Link>
            </Heading>
            <Paragraph size="small">
              Geef uw nieuwe adres door als u binnen Amsterdam of naar Amsterdam verhuist.
            </Paragraph>
          </Card>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 3 }}>
          <Card>
            <Heading level={3} size="level-4">
              <Card.Link href="#">Grof afval</Card.Link>
            </Heading>
            <Paragraph size="small">Grof afval zijn spullen die niet in een vuilniszak passen.</Paragraph>
          </Card>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 3 }}>
          <Card>
            <Heading level={3} size="level-4">
              <Card.Link href="#">Kennisgevingen en bekendmakingen</Card.Link>
            </Heading>
            <Paragraph size="small">
              Kennisgevingen en bekendmakingen van de gemeente Amsterdam van de laatste 8 weken.
            </Paragraph>
          </Card>
        </Grid.Cell>
      </Grid>
      <Spotlight color="purple">
        <Grid paddingVertical="medium">
          <Grid.Cell span={{ narrow: 4, medium: 4, wide: 6 }}>
            <Heading inverseColor style={{ marginBlockEnd: '1.5rem' }} size="level-2">
              Ontheffing of vergunning
            </Heading>
            <Paragraph inverseColor size="small" style={{ marginBlockEnd: '1.5rem' }}>
              Check welke ontheffing of vergunning u nodig heeft. Bijvoorbeeld een RVV, TVM, objectvergunning,{' '}
              nachtwerkontheffing, e-RVV, e-TVM of filmmelding. Dat regult u allemaal met 1 formulier.
            </Paragraph>
            <Link href="#" variant="standalone" onBackground="dark">
              Eenvoudig regelen
            </Link>
          </Grid.Cell>
          <Grid.Cell span={{ narrow: 4, medium: 4, wide: 6 }}>
            <Heading inverseColor style={{ marginBlockEnd: '1.5rem' }} size="level-2">
              Werkzaamheden
            </Heading>
            <Paragraph inverseColor lang="la" size="small" style={{ marginBlockEnd: '1.5rem' }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae cumque deleniti exercitationem
              facere fugiat laudantium libero magnam mollitia nisi, omnis pariatur preferendis.
            </Paragraph>
            <Link href="#" variant="standalone" onBackground="dark">
              Alle bouw- en verkeerswerkzaamheden
            </Link>
          </Grid.Cell>
        </Grid>
      </Spotlight>
      <Grid paddingVertical="medium">
        <Grid.Cell span={3}>
          <Heading className="ams-mb--sm">Kalender</Heading>
          <Column>
            <Card>
              <Heading level={2} size="level-4">
                <Card.Link href="#">29 juni 2023</Card.Link>
              </Heading>
              <Paragraph size="small">Presentatie nieuwe Stopera-gebouw</Paragraph>
              <Paragraph size="small">Tijd: 18.00 – 21.00 uur</Paragraph>
            </Card>
            <Card>
              <Heading level={2} size="level-4">
                <Card.Link href="#">22 juni 2023</Card.Link>
              </Heading>
              <Paragraph size="small">Praat mee over het toekomstige slavernijmuseum</Paragraph>
              <Paragraph size="small">Tijd: 13.00 – 16.00 uur</Paragraph>
            </Card>
            <Card>
              <Heading level={2} size="level-4">
                <Card.Link href="#">15 juni 2023</Card.Link>
              </Heading>
              <Paragraph size="small">Opening tentoonstelling schilderijen Van Rijn</Paragraph>
              <Paragraph size="small">Tijd: 10.00 – 11.30 uur</Paragraph>
            </Card>
          </Column>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 5, wide: 8 }} start={{ narrow: 1, medium: 4, wide: 5 }}>
          <Heading className="ams-mb--sm">Nieuws</Heading>
          <Card>
            <AspectRatio ratio="x-wide">
              <Image alt="" src="https://picsum.photos/640/360" />
            </AspectRatio>
            <Card.HeadingGroup tagline="Nieuws">
              <Heading level={2} size="level-4">
                <Card.Link href="#">Waar u stormschade kunt melden</Card.Link>
              </Heading>
            </Card.HeadingGroup>
            <Paragraph size="small">
              Storm Poly raasde woensdag 5 juli over de stad. Het zal in sommige gevallen nog enkele dagen duren voordat
              alle schade is opgeruimd. U kunt een melding doen van afgebroken takken, andere stormschade of
              wateroverlast.
            </Paragraph>
          </Card>
        </Grid.Cell>
        <Grid.Cell span={4}>
          <Card>
            <AspectRatio ratio="x-wide">
              <Image alt="" src="https://picsum.photos/640/360" />
            </AspectRatio>
            <Card.HeadingGroup tagline="Nieuws">
              <Heading level={2} size="level-4">
                <Card.Link href="#">Nederlands eerste houten woonwijk komt in Zuidoost</Card.Link>
              </Heading>
            </Card.HeadingGroup>
          </Card>
        </Grid.Cell>
        <Grid.Cell span={4}>
          <Card>
            <AspectRatio ratio="x-wide">
              <Image alt="" src="https://picsum.photos/640/360" />
            </AspectRatio>
            <Card.HeadingGroup tagline="Nieuws">
              <Heading level={2} size="level-4">
                <Card.Link href="#">Gratis openbaar vervoer voor kinderen</Card.Link>
              </Heading>
            </Card.HeadingGroup>
          </Card>
        </Grid.Cell>
        <Grid.Cell span={4}>
          <Card>
            <AspectRatio ratio="x-wide">
              <Image alt="" src="https://picsum.photos/640/360" />
            </AspectRatio>
            <Card.HeadingGroup tagline="Nieuws">
              <Heading level={2} size="level-4">
                <Card.Link href="#">Zonnepanelen op uw dak? Zo houdt u uw huis veilig</Card.Link>
              </Heading>
            </Card.HeadingGroup>
          </Card>
        </Grid.Cell>
      </Grid>
      <Footer>{footer}</Footer>
    </Screen>
  </>
)
