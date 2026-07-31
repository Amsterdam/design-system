/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Accordion,
  Breadcrumb,
  Figure,
  Grid,
  Heading,
  Image,
  Link,
  Paragraph,
  Table,
} from '@amsterdam/design-system-react'

import { commonMeta } from '../common/commonMeta'

const meta = {
  ...commonMeta,
  title: 'Pages/Public/Information Page',
} satisfies Meta

export default meta

export const Default: StoryObj = {
  parameters: {
    docs: {
      source: {
        // Because this story’s `render` takes no argument, the Code Panel prints its source as written, the story
        // wrapper and its types included. Provide the source by hand so the panel shows the markup to compose,
        // without that scaffolding.
        code: `<>
  {/* Keep the breadcrumb in its own Grid above <main>, so it sits outside the main content region. */}
  <Grid paddingTop="large">
    <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
      <Breadcrumb>
        <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
        <Breadcrumb.Link href="#">Parken en groen</Breadcrumb.Link>
        <Breadcrumb.Link href="#">Evenementen in parken</Breadcrumb.Link>
      </Breadcrumb>
    </Grid.Cell>
  </Grid>
  {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
  {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
  <main id="inhoud">
    <Grid paddingBottom="x-large">
      {/* The title spans the wide intro column. The taxonomy tags below it are a metadata Paragraph. */}
      <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading className="ams-mb-xs" level={1}>Natuurbescherming bij evenementen in parken en groengebieden</Heading>
        <Paragraph>Evenementen, Natuur en groen, Vergunningen</Paragraph>
      </Grid.Cell>
      {/*
       * The lead paragraph and the introductory image take the side-by-side Cell sizes, so the pair reaches a
       * column further than the header Cell above it. Both stack on the narrow grid.
       */}
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Paragraph size="large">
          De Wet Natuurbescherming verbiedt festivals in het broedseizoen niet. Festivalorganisatoren moeten wel
          extra maatregelen nemen om de planten en dieren in het park te beschermen. Volgens een natuurtoets door
          een adviesbureau voldoet de festivalorganisator aan de eisen van de natuurbeschermingswet. Het stadsdeel
          verleent de vergunning.
        </Paragraph>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 5, wide: 7 }}>
        {/*
         * Image always reserves its box; aspectRatio only changes it from the default 16:9 to 4:3. This one
         * sits in the first screenful, so it is not lazy-loaded: that would delay the largest image in the
         * viewport.
         */}
        {/* This image carries no information the text does not, so it takes an empty alt. */}
        <Image alt="" aspectRatio="4:3" src="https://picsum.photos/id/1015/640/480" />
      </Grid.Cell>
    </Grid>
    {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
    <Grid paddingBottom="2x-large">
      {/* The body sits in a narrower cell, indented one column on wider screens, for a comfortable reading measure. */}
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
        <Heading className="ams-mb-s" level={2}>Regels tijdens het broedseizoen</Heading>
        <Paragraph className="ams-mb-l">
          Van half maart tot half juli broeden veel vogels in de parken. In die periode gelden extra regels voor
          geluid, verlichting en de opbouw van podia.
        </Paragraph>
        {/* The Accordion’s headings sit one level below the section heading above it, so headingLevel is 3 here. */}
        <Accordion className="ams-mb-xl" headingLevel={3}>
          <Accordion.Section label="Wanneer is het broedseizoen?">
            <Paragraph>
              Het broedseizoen loopt globaal van 15 maart tot 15 juli. De precieze periode verschilt per vogelsoort
              en per jaar. Een ecoloog bepaalt bij elk evenement of er op dat moment nesten in gebruik zijn.
            </Paragraph>
          </Accordion.Section>
          <Accordion.Section label="Welke maatregelen neemt een organisator?">
            <Paragraph>
              Denk aan het weren van geluid richting bosschages, het uitschakelen van schijnwerpers na
              zonsondergang, en het vrijhouden van een zone rond nestbomen. De maatregelen staan in het ecologisch
              werkprotocol bij de vergunning.
            </Paragraph>
          </Accordion.Section>
          <Accordion.Section label="Wat staat er in een natuurtoets?">
            <Paragraph>
              Een adviesbureau onderzoekt welke beschermde planten en dieren in het gebied voorkomen. De natuurtoets
              beschrijft de verwachte effecten van het evenement en de maatregelen die nodig zijn om schade te
              voorkomen.
            </Paragraph>
          </Accordion.Section>
          <Accordion.Section label="Wie controleert de afspraken?">
            <Paragraph>
              Toezichthouders van de gemeente controleren voor, tijdens en na het evenement. Bij overtredingen kan
              het stadsdeel het evenement stilleggen of de vergunning voor een volgend jaar weigeren.
            </Paragraph>
          </Accordion.Section>
          <Accordion.Section label="Waar meldt u schade aan groen?">
            <Paragraph>
              Ziet u schade aan bomen, struiken of oevers? Meld dit via het formulier Melding openbare ruimte.
              Vermeld de locatie en voeg zo mogelijk een foto toe.
            </Paragraph>
          </Accordion.Section>
        </Accordion>

        <Heading className="ams-mb-s" level={2}>Onderzoek naar planten en dieren</Heading>
        <Paragraph className="ams-mb-l">
          Voor elk groot evenement in een park laat de organisator een natuurtoets uitvoeren. Het onderzoek brengt
          in kaart welke soorten er leven en hoe kwetsbaar zij zijn. De uitkomsten bepalen waar podia, hekken en
          horeca mogen staan.
        </Paragraph>
        {/* An image within the body column is as wide as the text above it. */}
        <Image alt="" className="ams-mb-xl" loading="lazy" src="https://picsum.photos/id/1016/1280/720" />

        <Heading className="ams-mb-s" level={2}>Bezwaar maken tegen een vergunning</Heading>
        <Paragraph className="ams-mb-m">
          Bent u het niet eens met een verleende vergunning? Dan kunt u binnen 6 weken na de bekendmaking bezwaar
          maken. De termijn begint op de dag na de publicatie in het Gemeenteblad.
        </Paragraph>
        <Paragraph className="ams-mb-l">
          Een bezwaar schorst de vergunning niet. Wilt u dat het evenement voorlopig niet doorgaat, dan vraagt u de
          rechtbank daarnaast om een voorlopige voorziening.
        </Paragraph>
        <Heading className="ams-mb-xs" level={3}>Wat zet u in uw bezwaarschrift?</Heading>
        <Paragraph className="ams-mb-m">
          Beschrijf om welke vergunning het gaat, waarom u het er niet mee eens bent, en wat u anders zou willen
          zien. Vermeld ook uw naam, adres en de datum.
        </Paragraph>
        <Paragraph>
          U ontvangt een bevestiging van ontvangst. Daarna nodigt de bezwaarcommissie u uit voor een hoorzitting.
          Binnen 12 weken volgt een beslissing op uw bezwaar.
        </Paragraph>
      </Grid.Cell>
    </Grid>
  </main>
</>`,
        language: 'tsx',
      },
    },
  },
  render: () => (
    <>
      {/* Keep the breadcrumb in its own Grid above <main>, so it sits outside the main content region. */}
      <Grid paddingTop="large">
        <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
          <Breadcrumb>
            <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
            <Breadcrumb.Link href="#">Parken en groen</Breadcrumb.Link>
            <Breadcrumb.Link href="#">Evenementen in parken</Breadcrumb.Link>
          </Breadcrumb>
        </Grid.Cell>
      </Grid>
      {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
      {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
      <main id="inhoud">
        <Grid paddingBottom="x-large">
          {/* The title spans the wide intro column. The taxonomy tags below it are a metadata Paragraph. */}
          <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
            <Heading className="ams-mb-xs" level={1}>
              Natuurbescherming bij evenementen in parken en groengebieden
            </Heading>
            <Paragraph>Evenementen, Natuur en groen, Vergunningen</Paragraph>
          </Grid.Cell>
          {/*
           * The lead paragraph and the introductory image take the side-by-side Cell sizes, so the pair reaches a
           * column further than the header Cell above it. Both stack on the narrow grid.
           */}
          <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
            <Paragraph size="large">
              De Wet Natuurbescherming verbiedt festivals in het broedseizoen niet. Festivalorganisatoren moeten wel
              extra maatregelen nemen om de planten en dieren in het park te beschermen. Volgens een natuurtoets door
              een adviesbureau voldoet de festivalorganisator aan de eisen van de natuurbeschermingswet. Het stadsdeel
              verleent de vergunning.
            </Paragraph>
          </Grid.Cell>
          <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 5, wide: 7 }}>
            {/*
             * Image always reserves its box; aspectRatio only changes it from the default 16:9 to 4:3. This one
             * sits in the first screenful, so it is not lazy-loaded: that would delay the largest image in the
             * viewport.
             */}
            {/* This image carries no information the text does not, so it takes an empty alt. */}
            <Image alt="" aspectRatio="4:3" src="https://picsum.photos/id/1015/640/480" />
          </Grid.Cell>
        </Grid>
        {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
        <Grid paddingBottom="2x-large">
          {/* The body sits in a narrower cell, indented one column on wider screens, for a comfortable reading measure. */}
          <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
            <Heading className="ams-mb-s" level={2}>
              Regels tijdens het broedseizoen
            </Heading>
            <Paragraph className="ams-mb-l">
              Van half maart tot half juli broeden veel vogels in de parken. In die periode gelden extra regels voor
              geluid, verlichting en de opbouw van podia.
            </Paragraph>
            {/* The Accordion’s headings sit one level below the section heading above it, so headingLevel is 3 here. */}
            <Accordion className="ams-mb-xl" headingLevel={3}>
              <Accordion.Section label="Wanneer is het broedseizoen?">
                <Paragraph>
                  Het broedseizoen loopt globaal van 15 maart tot 15 juli. De precieze periode verschilt per vogelsoort
                  en per jaar. Een ecoloog bepaalt bij elk evenement of er op dat moment nesten in gebruik zijn.
                </Paragraph>
              </Accordion.Section>
              <Accordion.Section label="Welke maatregelen neemt een organisator?">
                <Paragraph>
                  Denk aan het weren van geluid richting bosschages, het uitschakelen van schijnwerpers na
                  zonsondergang, en het vrijhouden van een zone rond nestbomen. De maatregelen staan in het ecologisch
                  werkprotocol bij de vergunning.
                </Paragraph>
              </Accordion.Section>
              <Accordion.Section label="Wat staat er in een natuurtoets?">
                <Paragraph>
                  Een adviesbureau onderzoekt welke beschermde planten en dieren in het gebied voorkomen. De natuurtoets
                  beschrijft de verwachte effecten van het evenement en de maatregelen die nodig zijn om schade te
                  voorkomen.
                </Paragraph>
              </Accordion.Section>
              <Accordion.Section label="Wie controleert de afspraken?">
                <Paragraph>
                  Toezichthouders van de gemeente controleren voor, tijdens en na het evenement. Bij overtredingen kan
                  het stadsdeel het evenement stilleggen of de vergunning voor een volgend jaar weigeren.
                </Paragraph>
              </Accordion.Section>
              <Accordion.Section label="Waar meldt u schade aan groen?">
                <Paragraph>
                  Ziet u schade aan bomen, struiken of oevers? Meld dit via het formulier Melding openbare ruimte.
                  Vermeld de locatie en voeg zo mogelijk een foto toe.
                </Paragraph>
              </Accordion.Section>
            </Accordion>

            <Heading className="ams-mb-s" level={2}>
              Onderzoek naar planten en dieren
            </Heading>
            <Paragraph className="ams-mb-l">
              Voor elk groot evenement in een park laat de organisator een natuurtoets uitvoeren. Het onderzoek brengt
              in kaart welke soorten er leven en hoe kwetsbaar zij zijn. De uitkomsten bepalen waar podia, hekken en
              horeca mogen staan.
            </Paragraph>
            {/* An image within the body column is as wide as the text above it. */}
            <Image alt="" className="ams-mb-xl" loading="lazy" src="https://picsum.photos/id/1016/1280/720" />

            <Heading className="ams-mb-s" level={2}>
              Bezwaar maken tegen een vergunning
            </Heading>
            <Paragraph className="ams-mb-m">
              Bent u het niet eens met een verleende vergunning? Dan kunt u binnen 6 weken na de bekendmaking bezwaar
              maken. De termijn begint op de dag na de publicatie in het Gemeenteblad.
            </Paragraph>
            <Paragraph className="ams-mb-l">
              Een bezwaar schorst de vergunning niet. Wilt u dat het evenement voorlopig niet doorgaat, dan vraagt u de
              rechtbank daarnaast om een voorlopige voorziening.
            </Paragraph>
            <Heading className="ams-mb-xs" level={3}>
              Wat zet u in uw bezwaarschrift?
            </Heading>
            <Paragraph className="ams-mb-m">
              Beschrijf om welke vergunning het gaat, waarom u het er niet mee eens bent, en wat u anders zou willen
              zien. Vermeld ook uw naam, adres en de datum.
            </Paragraph>
            <Paragraph>
              U ontvangt een bevestiging van ontvangst. Daarna nodigt de bezwaarcommissie u uit voor een hoorzitting.
              Binnen 12 weken volgt een beslissing op uw bezwaar.
            </Paragraph>
          </Grid.Cell>
        </Grid>
      </main>
    </>
  ),
}

export const WithTable: StoryObj = {
  parameters: {
    docs: {
      source: {
        // Because this story’s `render` takes no argument, the Code Panel prints its source as written, the story
        // wrapper and its types included. Provide the source by hand so the panel shows the markup to compose,
        // without that scaffolding.
        code: `<>
  {/* Keep the breadcrumb in its own Grid above <main>, so it sits outside the main content region. */}
  <Grid paddingTop="large">
    <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
      <Breadcrumb>
        <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
        <Breadcrumb.Link href="#">Belastingen</Breadcrumb.Link>
        <Breadcrumb.Link href="#">WOZ-waarde</Breadcrumb.Link>
      </Breadcrumb>
    </Grid.Cell>
  </Grid>
  {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
  {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
  <main id="inhoud">
    <Grid paddingBottom="x-large">
      {/* Without an image beside it, the lead paragraph stays in the header cell with the title and metadata. */}
      <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading className="ams-mb-xs" level={1}>
          Landelijk vastgestelde gegevens voor de WOZ-waarde van uw woning
        </Heading>
        <Paragraph className="ams-mb-xl">
          {/* The visible date is prose; dateTime repeats it in the machine-readable format software parses. */}
          <time dateTime="2026-01-01">1 januari 2026</time> – Belastingen, Wonen, WOZ
        </Paragraph>
        <Paragraph size="large">
          De gemeente stelt elk jaar de WOZ-waarde van uw woning vast. Welke gegevens daarbij horen en hoe zij
          worden vastgelegd, is landelijk bepaald. Zo betekent een gegeven in Amsterdam hetzelfde als in elke andere
          gemeente.
        </Paragraph>
      </Grid.Cell>
    </Grid>
    <Grid paddingBottom="x-large">
      {/* The body sits in a narrower cell, indented one column on wider screens, for a comfortable reading measure. */}
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
        <Heading className="ams-mb-s" level={2}>Hoe de WOZ-waarde tot stand komt</Heading>
        <Paragraph className="ams-mb-m">
          De WOZ-waarde is de waarde die uw woning op de peildatum zou opbrengen bij verkoop. De peildatum ligt
          altijd een jaar voor het belastingjaar, zodat de gemeente verkoopcijfers van een heel jaar kan gebruiken.
        </Paragraph>
        <Paragraph className="ams-mb-l">
          Voor de vergelijking gebruikt de gemeente woningen die in dezelfde periode zijn verkocht en die op uw
          woning lijken in type, grootte, bouwjaar en ligging. Verschillen tussen die woningen en de uwe worden
          verrekend.
        </Paragraph>
        <Heading className="ams-mb-xs" level={3}>Niet eens met de waarde</Heading>
        <Paragraph className="ams-mb-m">
          Bekijk eerst het taxatieverslag. Daarin staat welke woningen zijn vergeleken en welke kenmerken zijn
          gebruikt. Klopt een kenmerk niet, geef dat dan aan ons door.
        </Paragraph>
        <Paragraph>
          Bent u het daarna nog niet eens met de waarde? Maak dan binnen 6 weken na de dagtekening van de aanslag
          bezwaar. U hoeft daar geen bureau voor in te schakelen.
        </Paragraph>
      </Grid.Cell>
    </Grid>
    {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
    <Grid paddingBottom="2x-large">
      {/*
       * A Table sizes to its content and scrolls once it outgrows its cell, so give it a wider cell than the reading
       * column.
       */}
      <Grid.Cell span={{ narrow: 4, medium: 8, wide: 10 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        {/* A Figure groups the table with the sources it came from. The Figure supplies the space between them. */}
        <Figure>
          <Table>
            <Table.Caption>
              <Heading level={2}>Landelijk vastgestelde gegevens WOZ</Heading>
            </Table.Caption>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Gegeven</Table.HeaderCell>
                <Table.HeaderCell>Omschrijving</Table.HeaderCell>
                <Table.HeaderCell>Eenheid</Table.HeaderCell>
                <Table.HeaderCell>Verplicht</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                {/* A row header names the row, so screen readers announce it with each cell that follows. */}
                <Table.HeaderCell scope="row">WOZ-waarde</Table.HeaderCell>
                <Table.Cell>Vastgestelde waarde van de woning</Table.Cell>
                <Table.Cell>Euro</Table.Cell>
                <Table.Cell>Ja</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell scope="row">Objectnummer</Table.HeaderCell>
                <Table.Cell>Uniek nummer van het WOZ-object</Table.Cell>
                <Table.Cell>Tekst</Table.Cell>
                <Table.Cell>Ja</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell scope="row">Grondoppervlakte</Table.HeaderCell>
                <Table.Cell>Oppervlakte van het perceel</Table.Cell>
                <Table.Cell>m²</Table.Cell>
                <Table.Cell>Ja</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell scope="row">Woonoppervlakte</Table.HeaderCell>
                <Table.Cell>Gebruiksoppervlakte volgens de BAG</Table.Cell>
                <Table.Cell>m²</Table.Cell>
                <Table.Cell>Nee</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell scope="row">Bouwjaar</Table.HeaderCell>
                <Table.Cell>Jaar waarin het object is gebouwd</Table.Cell>
                <Table.Cell>Jaartal</Table.Cell>
                <Table.Cell>Nee</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell scope="row">Gebruiksdoel</Table.HeaderCell>
                <Table.Cell>Functie van het object volgens de BAG</Table.Cell>
                <Table.Cell>Tekst</Table.Cell>
                <Table.Cell>Ja</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          {/* Write any sources as one sentence, so the Figure Caption presents them in its small caption text. */}
          <Figure.Caption>
            Bronnen: <Link href="#">Catalogus Basisregistratie WOZ</Link> en{' '}
            <Link href="#">Gegevenswoordenboek WOZ</Link>.
          </Figure.Caption>
        </Figure>
      </Grid.Cell>
    </Grid>
  </main>
</>`,
        language: 'tsx',
      },
    },
  },
  render: () => (
    <>
      {/* Keep the breadcrumb in its own Grid above <main>, so it sits outside the main content region. */}
      <Grid paddingTop="large">
        <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
          <Breadcrumb>
            <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
            <Breadcrumb.Link href="#">Belastingen</Breadcrumb.Link>
            <Breadcrumb.Link href="#">WOZ-waarde</Breadcrumb.Link>
          </Breadcrumb>
        </Grid.Cell>
      </Grid>
      {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
      {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
      <main id="inhoud">
        <Grid paddingBottom="x-large">
          {/* Without an image beside it, the lead paragraph stays in the header cell with the title and metadata. */}
          <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
            <Heading className="ams-mb-xs" level={1}>
              Landelijk vastgestelde gegevens voor de WOZ-waarde van uw woning
            </Heading>
            <Paragraph className="ams-mb-xl">
              {/* The visible date is prose; dateTime repeats it in the machine-readable format software parses. */}
              <time dateTime="2026-01-01">1 januari 2026</time> – Belastingen, Wonen, WOZ
            </Paragraph>
            <Paragraph size="large">
              De gemeente stelt elk jaar de WOZ-waarde van uw woning vast. Welke gegevens daarbij horen en hoe zij
              worden vastgelegd, is landelijk bepaald. Zo betekent een gegeven in Amsterdam hetzelfde als in elke andere
              gemeente.
            </Paragraph>
          </Grid.Cell>
        </Grid>
        <Grid paddingBottom="x-large">
          {/* The body sits in a narrower cell, indented one column on wider screens, for a comfortable reading measure. */}
          <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
            <Heading className="ams-mb-s" level={2}>
              Hoe de WOZ-waarde tot stand komt
            </Heading>
            <Paragraph className="ams-mb-m">
              De WOZ-waarde is de waarde die uw woning op de peildatum zou opbrengen bij verkoop. De peildatum ligt
              altijd een jaar voor het belastingjaar, zodat de gemeente verkoopcijfers van een heel jaar kan gebruiken.
            </Paragraph>
            <Paragraph className="ams-mb-l">
              Voor de vergelijking gebruikt de gemeente woningen die in dezelfde periode zijn verkocht en die op uw
              woning lijken in type, grootte, bouwjaar en ligging. Verschillen tussen die woningen en de uwe worden
              verrekend.
            </Paragraph>
            <Heading className="ams-mb-xs" level={3}>
              Niet eens met de waarde
            </Heading>
            <Paragraph className="ams-mb-m">
              Bekijk eerst het taxatieverslag. Daarin staat welke woningen zijn vergeleken en welke kenmerken zijn
              gebruikt. Klopt een kenmerk niet, geef dat dan aan ons door.
            </Paragraph>
            <Paragraph>
              Bent u het daarna nog niet eens met de waarde? Maak dan binnen 6 weken na de dagtekening van de aanslag
              bezwaar. U hoeft daar geen bureau voor in te schakelen.
            </Paragraph>
          </Grid.Cell>
        </Grid>
        {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
        <Grid paddingBottom="2x-large">
          {/* A Table sizes to its content and scrolls once it outgrows its cell, so give it a wider cell than the reading column. */}
          <Grid.Cell span={{ narrow: 4, medium: 8, wide: 10 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
            {/* A Figure groups the table with the sources it came from. The Figure supplies the space between them. */}
            <Figure>
              <Table>
                <Table.Caption>
                  <Heading level={2}>Landelijk vastgestelde gegevens WOZ</Heading>
                </Table.Caption>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Gegeven</Table.HeaderCell>
                    <Table.HeaderCell>Omschrijving</Table.HeaderCell>
                    <Table.HeaderCell>Eenheid</Table.HeaderCell>
                    <Table.HeaderCell>Verplicht</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    {/* A row header names the row, so screen readers announce it with each cell that follows. */}
                    <Table.HeaderCell scope="row">WOZ-waarde</Table.HeaderCell>
                    <Table.Cell>Vastgestelde waarde van de woning</Table.Cell>
                    <Table.Cell>Euro</Table.Cell>
                    <Table.Cell>Ja</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell scope="row">Objectnummer</Table.HeaderCell>
                    <Table.Cell>Uniek nummer van het WOZ-object</Table.Cell>
                    <Table.Cell>Tekst</Table.Cell>
                    <Table.Cell>Ja</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell scope="row">Grondoppervlakte</Table.HeaderCell>
                    <Table.Cell>Oppervlakte van het perceel</Table.Cell>
                    <Table.Cell>m²</Table.Cell>
                    <Table.Cell>Ja</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell scope="row">Woonoppervlakte</Table.HeaderCell>
                    <Table.Cell>Gebruiksoppervlakte volgens de BAG</Table.Cell>
                    <Table.Cell>m²</Table.Cell>
                    <Table.Cell>Nee</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell scope="row">Bouwjaar</Table.HeaderCell>
                    <Table.Cell>Jaar waarin het object is gebouwd</Table.Cell>
                    <Table.Cell>Jaartal</Table.Cell>
                    <Table.Cell>Nee</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell scope="row">Gebruiksdoel</Table.HeaderCell>
                    <Table.Cell>Functie van het object volgens de BAG</Table.Cell>
                    <Table.Cell>Tekst</Table.Cell>
                    <Table.Cell>Ja</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
              {/* Write any sources as one sentence, so the Figure Caption presents them in its small caption text. */}
              <Figure.Caption>
                Bronnen: <Link href="#">Catalogus Basisregistratie WOZ</Link> en{' '}
                <Link href="#">Gegevenswoordenboek WOZ</Link>.
              </Figure.Caption>
            </Figure>
          </Grid.Cell>
        </Grid>
      </main>
    </>
  ),
}
