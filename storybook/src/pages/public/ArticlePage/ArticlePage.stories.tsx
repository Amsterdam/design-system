/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Accordion,
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
  UnorderedList,
} from '@amsterdam/design-system-react'
import parse from 'html-react-parser'
import { Fragment } from 'react'

import type { NewsArticle } from './news-articles'

import { formatDate } from '../../../_common/formatDate'
import { commonMeta } from '../common/config'
import { newsSection } from '../HomePage/data'
import { newsArticles } from './news-articles'
import { parserOptions } from './parser.config'

const meta = {
  ...commonMeta,
  title: 'Pages/Public/Article Page',

  render: (args) => (
    <>
      <Grid paddingTop="large">
        <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
          <Breadcrumb>
            <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
            <Breadcrumb.Link href="#">Nieuws</Breadcrumb.Link>
          </Breadcrumb>
        </Grid.Cell>
      </Grid>
      <Grid as="main" id="inhoud" paddingBottom="x-large">
        <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
          <Heading className="ams-mb-s" level={1}>
            {args.heading}
          </Heading>
          <Paragraph className="ams-mb-xl">{formatDate(args.published)}</Paragraph>
          <Paragraph size="large">{args.lead}</Paragraph>
        </Grid.Cell>
      </Grid>
      <Image
        alt={args.image.alt ?? ''}
        aspectRatio="16:5"
        loading="lazy"
        src={args.image.src}
        srcSet={args.image.srcSet}
      />
      <Grid paddingVertical="x-large">
        <Grid.Cell
          className="ams-prose"
          span={{ narrow: 4, medium: 6, wide: 7 }}
          start={{ narrow: 1, medium: 2, wide: 3 }}
        >
          {args.sections.map(({ body, heading, id }) => (
            <Fragment key={id}>
              <Heading level={2}>{heading}</Heading>
              {parse(body, parserOptions)}
            </Fragment>
          ))}
          <Heading level={2}>Lees ook</Heading>
          <LinkList>
            {args.relatedArticles?.map(({ heading, url }) => (
              <LinkList.Link href={url} key={url}>
                {heading}
              </LinkList.Link>
            ))}
          </LinkList>
        </Grid.Cell>
      </Grid>
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
          {newsSection.items.map(({ title, description, image }) => (
            <Grid.Cell key={title} span={4}>
              <Card>
                <Card.Image alt="" src={image} />
                <Card.HeadingGroup tagline="Nieuws">
                  <Card.Heading level={3}>
                    <Card.Link href="#">{title}</Card.Link>
                  </Card.Heading>
                </Card.HeadingGroup>
                <Paragraph>{description}</Paragraph>
              </Card>
            </Grid.Cell>
          ))}
        </Grid>
      </aside>
    </>
  ),
} satisfies Meta<NewsArticle>

export default meta

const getArgsFromNewsArticle = (id: number): NewsArticle | undefined => {
  return newsArticles.find((article) => article.id === id)
}

export const Default: StoryObj = {
  args: getArgsFromNewsArticle(1),
}

export const CzaarPeterstraat: StoryObj = {
  render: () => (
    <>
      <Grid paddingTop="large">
        <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
          <Breadcrumb>
            <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
            <Breadcrumb.Link href="#">Bouwprojecten en verkeersprojecten</Breadcrumb.Link>
            <Breadcrumb.Link href="#">Czaar Peterstraat</Breadcrumb.Link>
          </Breadcrumb>
        </Grid.Cell>
      </Grid>
      <Grid as="main" id="inhoud" paddingBottom="x-large">
        <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
          <Heading level={1}>Meer over de herinrichting van de Czaar Peterstraat</Heading>
        </Grid.Cell>
        <Grid.Cell
          className="ams-prose"
          span={{ narrow: 4, medium: 6, wide: 7 }}
          start={{ narrow: 1, medium: 2, wide: 3 }}
        >
          <Heading level={2}>Nota van uitgangspunten</Heading>
          <Paragraph>
            Op 16 februari 2022 heeft de gemeenteraad de <Link href="#">nota van uitgangspunten</Link> voor de
            herinrichting van de Czaar Peterstraat vastgesteld. Dit is de basis voor het ontwerp. Voor de vaststelling
            van de nota van uitgangspunten is in 2018 inspraak geweest en in 2021 een bijeenkomst over de actualisatie
            van de nota van uitgangspunten. Alle inspraakreacties zijn toegelicht in de{' '}
            <Link href="#">nota van beantwoording</Link>. Het college van burgemeester en wethouders heeft deze
            vastgesteld.
          </Paragraph>
          <Heading level={2}>Uitwerking ontwerp</Heading>
          <Paragraph>
            In 2022 zijn we gestart met het opstellen van het programma van eisen. We hebben de vastgestelde
            uitgangspunten en randvoorwaarden vanuit het gemeentelijke beleid uitgewerkt tot duidelijke onderdelen voor
            het ontwerp van de straat. Ook hebben we onderzoek gedaan naar het verkeer in de straat, naar de invloed van
            het verschuiven van de trambaan op het geluids- en trillingsniveau in de straat en naar de geschiktste plek
            voor de tramhalte. We gebruikten informatie uit deze onderzoeken en de inbreng vanuit de buurt om het
            ontwerp uit te werken tot een voorlopig ontwerp. Van 5 tot en met 20 oktober 2023 konden buurtbewoners,
            ondernemers en andere belanghebbenden reageren op het voorlopig ontwerp. Daarna hebben we het ontwerp
            definitief gemaakt. In mei 2024 heeft stadsdeel Centrum positief geadviseerd over het ontwerp.
          </Paragraph>
          <Heading level={2}>Onderzoeksresultaten</Heading>
          <Paragraph>
            We willen bij de herinrichting van de straat de trambaan over de hele lengte van de straat ongeveer 60
            centimeter opschuiven naar de even huisnummers. Zo kunnen we aan beide kanten een breder fietspad aanleggen.
            We vervangen het dubbele spoor dat in elkaar loopt door 2 losse tramsporen. Zo hoeven trams niet meer op
            elkaar te wachten. Autoverkeer rijdt in 1 richting mee over de trambaan. We voegen de 2 tramhaltes samen tot
            1 nieuwe halte, op een centrale plek. We hebben onderzocht wat de gevolgen van deze voorgenomen aanpassingen
            zijn voor de omgeving. De belangrijkste resultaten uit onderzoeken staan hieronder. U kunt ook een onderzoek
            opvragen door een e-mail te sturen naar{' '}
            <Link href="mailto:binnenring@amsterdam.nl">binnenring@amsterdam.nl</Link>.
          </Paragraph>
          <Accordion headingLevel={3}>
            <Accordion.Section label="Tramhalte">
              <Paragraph>
                We voegen de 2 tramhaltes Eerste Coehoornstraat en Eerste Leeghwaterstraat samen tot 1 nieuwe halte, met
                een gelijkvloerse instap. De plek van de nieuwe tramhalte is een belangrijk en bepalend onderdeel voor
                het ontwerp van de Czaar Peterstraat. Daar waar een tramhalte komt, is op de stoep geen ruimte voor
                bomen, planten, een terras of andere opvulling. Zo blijft er voldoende ruimte om door te lopen.
              </Paragraph>
              <Paragraph>
                We hebben onderzocht wat een zo goed mogelijke plek voor de nieuwe tramhalte is. We hebben verschillende
                mogelijkheden bekeken, bijvoorbeeld:
              </Paragraph>
              <UnorderedList>
                <UnorderedList.Item>een halte bij de Eerste Leeghwaterstraat</UnorderedList.Item>
                <UnorderedList.Item>
                  een halte met de perrons ver uit elkaar: voor de trams in de richting Azartplein een halteperron net
                  voor de kruising met de Cruquiusstraat, voor trams in de richting Sloterpark een halteperron bij de
                  Eerste Leeghwaterstraat, of andersom
                </UnorderedList.Item>
                <UnorderedList.Item>behoud van 1 van de bestaande haltes</UnorderedList.Item>
              </UnorderedList>
              <Paragraph>Bij de afweging is gekeken naar:</Paragraph>
              <UnorderedList>
                <UnorderedList.Item>
                  de loopafstand van de nieuwe halteperrons tot woningen, winkels en voorzieningen in de buurt
                </UnorderedList.Item>
                <UnorderedList.Item>de afstand tot andere haltes voor openbaar vervoer in de buurt</UnorderedList.Item>
                <UnorderedList.Item>
                  de aansluiting op de nieuwe woonwijk en de nieuwe brug naar Oostenburg
                </UnorderedList.Item>
                <UnorderedList.Item>
                  het behoud van zoveel mogelijk bomen, de bomenlaan en zichtlijnen in de straat
                </UnorderedList.Item>
                <UnorderedList.Item>voldoende vrije doorloopruimte op de stoep</UnorderedList.Item>
                <UnorderedList.Item>de verkeersveiligheid, meer overzicht vanuit de zijstraten</UnorderedList.Item>
              </UnorderedList>
              <Paragraph>
                Een halte bij de Cruquiusstraat scoort in deze keuze het beste. De halte voor trams richting Azartplein
                komt bij de sportschool Kensho, huisnummer 22. De halte voor de trams richting Sloterpark komt bij de
                huisnummers 51-57.
              </Paragraph>
            </Accordion.Section>
            <Accordion.Section label="Geluid en trillingen">
              <Paragraph>
                In opdracht van de gemeente heeft Crux Engineering met Bouwrisk onderzoek uitgevoerd naar geluid en
                trillingen rond de trambaan in de bestaande situatie en in de situatie na de herinrichting. De metingen
                waren in 2022, op verschillende meetpunten in de straat, vlak naast de weg en aan de gevel van woningen.
              </Paragraph>
              <Heading level={4}>Trillingen niet tot nauwelijks voelbaar</Heading>
              <Paragraph>
                Conclusie van de trillingsmetingen is dat de trillingen in de straat gemiddeld zeer laag zijn en niet of
                bijna niet voelbaar zijn voor bewoners. In de nieuwe situatie, na het verschuiven van de trambaan en het
                autoverkeer, neemt het trillingsniveau wel iets toe, maar blijft niet of bijna niet voelbaar.
              </Paragraph>
              <Heading level={4}>Geluid</Heading>
              <Paragraph>
                In 2022 zijn geluidsmetingen gedaan bij Czaar Peterstraat 135 en 37-39. In de nieuwe situatie veranderen
                de geluidsniveaus vooral door het verplaatsen van de tramhaltes. Waar de tramhaltes weggaan neemt geluid
                iets af. Bij de nieuwe halte neemt het geluid iets toe.
              </Paragraph>
            </Accordion.Section>
            <Accordion.Section label="Verkeer">
              <Paragraph>
                We hebben onderzoek gedaan om de verkeersveiligheid waar nodig te verbeteren. We hebben gekeken naar de
                samenstelling van het verkeer, zoals zwaar verkeer, busjes, personenauto’s, (brom-)fietsers,
                bestemmingsverkeer, doorgaand verkeer, logistiek verkeer, naar de spreiding van drukte over de dag, en
                hoe het verkeer zich op de kruisingen beweegt.
              </Paragraph>
              <Paragraph>
                In 2022 is met camera’s en telslangen onderzoek gedaan in de Czaar Peterstraat. De belangrijkste
                conclusies uit het verkeersonderzoek zijn:
              </Paragraph>
              <UnorderedList>
                <UnorderedList.Item>
                  Op een gemiddelde werkdag rijden ongeveer 9.000 fietsers de Czaar Peterstraat in- of uit bij de
                  kruising bij de Oostenburgergracht en de Cruquiusstraat.
                </UnorderedList.Item>
                <UnorderedList.Item>
                  Het aantal brom- en snorfietsen is klein, ongeveer 35 per uur. Dit is gemiddeld 23 bromfietsen en 12
                  snorfietsen.
                </UnorderedList.Item>
                <UnorderedList.Item>
                  Op een gemiddelde werkdag rijden ongeveer 1.500 auto’s vanaf de kruising bij de Oostenburgergracht en
                  Cruquiusstraat de Czaar Peterstraat in.
                </UnorderedList.Item>
                <UnorderedList.Item>
                  Laden en lossen gebeurt verspreid over de dag, vooral buiten de spitsuren. Op een gemiddelde werkdag
                  vindt 45 procent van het laden en lossen plaats tussen 10.00 en 15.00 uur.
                </UnorderedList.Item>
              </UnorderedList>
            </Accordion.Section>
          </Accordion>
          <Heading level={2}>Meedoen</Heading>
          <Paragraph>
            We doen de voorbereiding, uitwerking en uitvoering van het herinrichtingsproject in fasen. Bij iedere fase
            betrekken we de omgeving en zijn er momenten waarop u kunt meedenken of meedoen, inbreng geven, voordat
            ergens over besloten wordt.
          </Paragraph>
          <Paragraph>
            In 2023 is onderzoek gedaan naar de technische haalbaarheid en zijn de uitgangspunten uitgewerkt tot
            concrete oplossingen voor het ontwerp. Voor de buurt was er ruimte om mee te denken op de volgende momenten:
          </Paragraph>
          <Heading level={3}>Begin 2023: plek van de tramhalte, invulling van de stoep, autoluwe straat</Heading>
          <Paragraph>
            Tot eind januari konden mensen reageren op de plek van de nieuwe tramhalte, invulling van de ruimte op de
            stoep en ideeën geven om de straat autoluwer te maken:
          </Paragraph>
          <UnorderedList>
            <UnorderedList.Item>
              Het voorstel waar de nieuwe tramhalte komt: de tram stopt in de Czaar Peterstraat in beide richtingen voor
              de kruising met de Cruquiusstraat. Bij de halte is straks op de stoep geen ruimte voor plantenbakken,
              fietsparkeren en bankjes. Zo blijft er voldoende ruimte om door te lopen.
            </UnorderedList.Item>
            <UnorderedList.Item>
              De invulling van de beperkte ruimte op de stoep. We zoeken naar een balans tussen de wensen en behoeftes
              en de ruimte die er is om dit goed in te passen:
              <UnorderedList>
                <UnorderedList.Item>
                  (Brom-) fietsparkeren: de parkeerdruk is hoog, maar niet op alle plekken in de straat.
                </UnorderedList.Item>
                <UnorderedList.Item>
                  Vrije doorloopruimte: de minimale maat voor vrije doorloopruimte van 2 meter wordt nu niet overal
                  gehaald. We willen de straat zo toegankelijk mogelijke straat maken.
                </UnorderedList.Item>
                <UnorderedList.Item>
                  Bij het pleintje bij de Eerste Coehoornstraat komt ruimte voor andere invulling door het verdwijnen
                  van de tramhalte.
                </UnorderedList.Item>
                <UnorderedList.Item>
                  Laad- en losplekken: het aantal plekken blijft gelijk. Er wordt wat geschoven, zodat er bij de
                  ophaalpunten voor de post in de straat een plek is.
                </UnorderedList.Item>
                <UnorderedList.Item>
                  Bomen en groen: samen met de groenbeheerder willen we meer bomen/groen planten. In ieder geval op de
                  plekken waar eerder bomen gestaan hebben.
                </UnorderedList.Item>
                <UnorderedList.Item>
                  Een autoluwe straat: welke maatregelen kunnen bijdragen aan minder autoverkeer in de straat?
                </UnorderedList.Item>
              </UnorderedList>
            </UnorderedList.Item>
          </UnorderedList>
          <Heading level={3}>Najaar 2023: reageren op voorlopig ontwerp</Heading>
          <Paragraph>
            Voor bewoners en ondernemers zijn informatiebijeenkomsten georganiseerd waarbij we een toelichting gaven op
            het voorlopig ontwerp. Bewoners konden reageren op het ontwerp. Waar mogelijk hebben we de reacties verwerkt
            in het definitief ontwerp voor de straat.
          </Paragraph>
          <Heading level={3}>2024: advies en besluit over definitief ontwerp</Heading>
          <Paragraph>
            Begin 2024 is het definitief ontwerp afgerond. In april is dit ontwerp in de stadsdeelcommissie van
            stadsdeel Centrum behandeld. Hierbij was de mogelijkheid om in te spreken. Op 14 mei heeft het stadsdeel
            positief geadviseerd over het ontwerp. Vervolgens hebben we het college gevraagd het ontwerp en het
            benodigde geld voor de uitvoering vast te stellen. Dit is gebeurd op 22 oktober 2024.
          </Paragraph>
          <Heading level={2}>Uitvoering</Heading>
          <Paragraph>De herinrichting is gestart in maart 2025 en duurt tot eind juli 2026.</Paragraph>
          <Heading level={2}>Blijf op de hoogte</Heading>
          <Paragraph>
            Wilt u op de hoogte gehouden worden over dit project? Meld u dan aan voor onze mailing door een bericht te
            sturen aan <Link href="mailto:czaarpeterstraat@amsterdam.nl">czaarpeterstraat@amsterdam.nl</Link>
          </Paragraph>
          <Paragraph size="small">
            Bron: <Link href="https://www.amsterdam.nl/projecten/czaar-peterstraat/meer/">amsterdam.nl</Link>.
          </Paragraph>
        </Grid.Cell>
      </Grid>
    </>
  ),
}
