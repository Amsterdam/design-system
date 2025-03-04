import { Breadcrumb, Grid, Heading, Image, Link, LinkList, Paragraph } from '@amsterdam/design-system-react'

export const NewsPage = () => (
  <>
    <Grid>
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }} start={{ narrow: 1, medium: 2, wide: 2 }}>
        <Breadcrumb>
          <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
          <Breadcrumb.Link href="#">Nieuws</Breadcrumb.Link>
        </Breadcrumb>
      </Grid.Cell>
    </Grid>
    <main id="main">
      <Grid paddingVertical="medium">
        {/* Create Grid.ArticleHeader etc. components to encapsulate column config and improve consistency. */}
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }} start={{ narrow: 1, medium: 2, wide: 2 }}>
          <Heading level={1}>Flevopark deels dicht voor publiek door festival</Heading>
          <Paragraph style={{ color: 'var(--ams-color-text-secondary)' }}>
            Taxonomie tag, tag, tag – systeemdatum 21 juni 2023
          </Paragraph>
        </Grid.Cell>
      </Grid>
      {/* Create Image stories at various column sizes for easy reuse in pages. */}
      <Image
        alt=""
        aspectRatio="2x-wide"
        sizes="(max-width: 36rem) 640px, (max-width: 68rem) 1280px, 1600px"
        src="https://picsum.photos/1600/500"
        srcSet="https://picsum.photos/640/200 640w, https://picsum.photos/1280/400 1280w, https://picsum.photos/1600/500 1600w"
      />
      <Grid paddingVertical="medium">
        <Grid.Cell span={{ narrow: 4, medium: 5, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
          <Paragraph size="large">
            Het Flevopark is deels dicht voor het publiek vanwege een festival op 23 en 24 juni. De velden rond de grote
            vijver zijn met hekken afgezet.
          </Paragraph>
          <Heading level={2}>H2 subtitel</Heading>
          <Paragraph>
            De Wet Natuurbescherming verbiedt festivals in het broedseizoen niet. Festivalorganisatoren moeten wel extra
            maatregelen nemen om de planten en dieren in het park te beschermen. Volgens een natuurtoets door een
            adviesbureau voldoet de festivalorganisator aan de eisen van de natuurbeschermingswet. Het stadsdeel moet
            daarom de vergunning verlenen.
          </Paragraph>
          <Paragraph>
            Volgens een natuurtoets door een adviesbureau voldoet de festivalorganisator aan de eisen van de
            natuurbeschermingswet. Het stadsdeel moet daarom de vergunning verlenen.
          </Paragraph>
          <Heading level={2}>H2 subtitel</Heading>
          <Paragraph>
            De Wet Natuurbescherming verbiedt festivals in het broedseizoen niet. Festivalorganisatoren moeten wel extra
            maatregelen nemen om de planten en dieren in het park te beschermen. Volgens een natuurtoets door een
            adviesbureau voldoet de festivalorganisator aan de eisen van de natuurbeschermingswet. Het stadsdeel moet
            daarom de vergunning verlenen.
          </Paragraph>
          <Heading level={3}>H3 subtitel</Heading>
          <Paragraph>
            Natuurtoets door een adviesbureau voldoet de festivalorganisator aan de eisen van de natuurbeschermingswet.
            Het stadsdeel moet daarom de vergunning verlenen.
          </Paragraph>
          <Paragraph>
            Adviesbureau voldoet de festivalorganisator aan de eisen van de natuurbeschermingswet. Het stadsdeel moet
            daarom de vergunning verlenen.
          </Paragraph>
          <Heading level={4}>H4 subtitel</Heading>
          <Paragraph>
            Extra maatregelen nemen om de planten en dieren in het park te beschermen. Volgens een natuurtoets door een
            adviesbureau voldoet de festivalorganisator aan de eisen van de natuurbeschermingswet. Het stadsdeel moet
            daarom de vergunning verlenen.
          </Paragraph>
          <Paragraph>
            Planten en dieren in het park te beschermen. Volgens een natuurtoets door een adviesbureau voldoet de
            festivalorganisator aan de eisen van de natuurbeschermingswet. Het stadsdeel moet daarom de vergunning
            verlenen.
          </Paragraph>
          <Heading level={2}>H2 subtitel</Heading>
          <Paragraph>
            Tot het Nationaal Slavernijmuseum er is, zijn er op verschillende plekken in Nederland tentoonstellingen en
            andere activiteiten te zien en te doen. Er is een voorkeursplek uitgesproken voor de bouw van het Nationaal
            Slavernijmuseum op de kop van het Java-eiland.
          </Paragraph>
          <Image alt="" aspectRatio="tall" src="https://picsum.photos/960/1280" />
          <Heading level={2}>H2 subtitel bijv. Aanmelden</Heading>
          <Paragraph>Aanmelden voor deze avond kunt u doen via de Kalender van Amsterdam.</Paragraph>
          <Link href="#" variant="standalone">
            Link naar kalender-item waar de CTA staat
          </Link>
          <Heading level={2}>Contact</Heading>
          <Paragraph>Contactinformatie uit CT Contact</Paragraph>
          <Heading level={2}>Locatie</Heading>
          <Paragraph>Beschrijving objecttype locatie</Paragraph>
          <Image alt="" aspectRatio="square" src="https://picsum.photos/960/960" />
          <Heading level={2}>Lees ook</Heading>
          <LinkList>
            <LinkList.Link href="#">Vaccinaties voor kinderen en jongeren beginnen weer, dicht bij huis</LinkList.Link>
            <LinkList.Link href="#">
              Gedenktekens bij 3 tramhaltes vanwaar Joodse Amsterdammers werden gedeporteerd
            </LinkList.Link>
          </LinkList>
        </Grid.Cell>
      </Grid>
    </main>
  </>
)
