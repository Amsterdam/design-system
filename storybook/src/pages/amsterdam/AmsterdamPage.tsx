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
  LinkList,
  Overlap,
  PageMenu,
  Paragraph,
  Screen,
  SearchField,
  SkipLink,
  Spotlight,
  VisuallyHidden,
} from '@amsterdam/design-system-react'
import { ChattingIcon, PhoneIcon } from '@amsterdam/design-system-react-icons'

export const AmsterdamPage = () => {
  return (
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
                Ziet u op straat of in een park iets waarvan u wilt dat het gemaakt of opgeruimd wordt, dan kunt u dat
                bij de gemeente melden.
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae cumque deleniti
                exercitationem facere fugiat laudantium libero magnam mollitia nisi, omnis pariatur preferendis.
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
                Storm Poly raasde woensdag 5 juli over de stad. Het zal in sommige gevallen nog enkele dagen duren
                voordat alle schade is opgeruimd. U kunt een melding doen van afgebroken takken, andere stormschade of
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
        <Footer>
          <Footer.Top>
            <VisuallyHidden>
              <Heading>Colofon</Heading>
            </VisuallyHidden>
            <Grid gapVertical="large" paddingVertical="medium">
              <Grid.Cell span={3}>
                <Column gap="extra-small">
                  <Heading level={2} size="level-4" inverseColor>
                    Contact
                  </Heading>
                  <Paragraph size="small" inverseColor>
                    Heeft u een vraag en kunt u het antwoord niet vinden op deze site? Neem dan contact met ons op.
                  </Paragraph>
                  <LinkList>
                    <LinkList.Link
                      href="https://formulieren.amsterdam.nl/TriplEforms/DirectRegelen/formulier/nl-NL/evAmsterdam/contactformulier.aspx/?pk_vid=9f948f5fae0c5e90169952648840adc6"
                      icon={ChattingIcon}
                      onBackground="dark"
                      size="small"
                    >
                      Contactformulier
                    </LinkList.Link>
                    <LinkList.Link href="https://www.amsterdam.nl/contact/" onBackground="dark" size="small">
                      Adressen en openingstijden
                    </LinkList.Link>
                    <LinkList.Link href="tel:+3114020" icon={PhoneIcon} onBackground="dark" size="small">
                      Bel 14 020
                    </LinkList.Link>
                  </LinkList>
                </Column>
              </Grid.Cell>
              <Grid.Cell span={3} start={{ narrow: 1, medium: 5, wide: 5 }}>
                <Column gap="extra-small">
                  <Heading level={2} size="level-4" inverseColor>
                    Volg de gemeente
                  </Heading>
                  <LinkList>
                    <LinkList.Link
                      href="https://www.amsterdam.nl/nieuws/volg-de-gemeente/nieuwsbrief-amsterdam/"
                      onBackground="dark"
                      size="small"
                    >
                      Nieuwsbrief Amsterdam
                    </LinkList.Link>
                    <LinkList.Link
                      href="https://twitter.com/AmsterdamNL"
                      onBackground="dark"
                      rel="external"
                      size="small"
                    >
                      Twitter
                    </LinkList.Link>
                    <LinkList.Link
                      href="https://www.facebook.com/gemeenteamsterdam"
                      onBackground="dark"
                      rel="external"
                      size="small"
                    >
                      Facebook
                    </LinkList.Link>
                    <LinkList.Link
                      href="https://www.instagram.com/gemeenteamsterdam/"
                      onBackground="dark"
                      rel="external"
                      size="small"
                    >
                      Instagram
                    </LinkList.Link>
                    <LinkList.Link
                      href="https://www.linkedin.com/company/gemeente-amsterdam"
                      onBackground="dark"
                      rel="external"
                      size="small"
                    >
                      LinkedIn
                    </LinkList.Link>
                    <LinkList.Link
                      href="https://social.amsterdam.nl/@gemeenteamsterdam"
                      onBackground="dark"
                      rel="external"
                      size="small"
                    >
                      Mastodon
                    </LinkList.Link>
                    <LinkList.Link
                      href="https://www.youtube.com/channel/UCEiYFPFR5jGhFakHhbswlig"
                      onBackground="dark"
                      rel="external"
                      size="small"
                    >
                      YouTube
                    </LinkList.Link>
                    <LinkList.Link href="https://werkenbij.amsterdam.nl/" onBackground="dark" size="small">
                      Werkenbij
                    </LinkList.Link>
                  </LinkList>
                </Column>
              </Grid.Cell>
              <Grid.Cell span={3} start={{ narrow: 1, medium: 1, wide: 9 }}>
                <Column gap="small">
                  <Column as="section" gap="extra-small">
                    <Heading level={2} size="level-4" inverseColor>
                      Kalender
                    </Heading>
                    <Paragraph size="small" inverseColor>
                      Van buurtactiviteiten tot inspraakavonden. Wat organiseert de gemeente voor u? Kijk op{' '}
                      <Link
                        href="https://activiteiten.amsterdam.nl/?pk_vid=9f948f5fae0c5e90169952714540adc6"
                        onBackground="dark"
                        variant="inline"
                      >
                        Kalender Amsterdam
                      </Link>
                      .
                    </Paragraph>
                  </Column>
                  <Column as="section" gap="extra-small">
                    <Heading level={3} size="level-4" inverseColor>
                      Uit in Amsterdam
                    </Heading>
                    <Paragraph size="small" inverseColor>
                      Benieuwd wat er allemaal te doen is in de stad? Op{' '}
                      <Link href="https://www.iamsterdam.com/" onBackground="dark" variant="inline">
                        Iamsterdam.com
                      </Link>{' '}
                      vindt u de beste tips op het gebied van cultuur, uitgaan en evenementen.
                    </Paragraph>
                  </Column>
                </Column>
              </Grid.Cell>
            </Grid>
          </Footer.Top>
        </Footer>
        <Grid paddingVertical="small">
          <Grid.Cell span="all">
            <PageMenu>
              <PageMenu.Link href="#">Home</PageMenu.Link>
              <PageMenu.Link href="#">Zoeken</PageMenu.Link>
              <PageMenu.Link href="#">Nieuws</PageMenu.Link>
              <PageMenu.Link href="#">Burgerzaken</PageMenu.Link>
              <PageMenu.Link href="#">Kunst en cultuur</PageMenu.Link>
              <PageMenu.Link href="#">Projecten</PageMenu.Link>
              <PageMenu.Link href="#">Project</PageMenu.Link>
              <PageMenu.Link href="#">Parkeren</PageMenu.Link>
            </PageMenu>
          </Grid.Cell>
        </Grid>
      </Screen>
    </>
  )
}
