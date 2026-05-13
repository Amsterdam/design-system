/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Accordion,
  CallToActionLink,
  Heading,
  Link,
  OrderedList,
  Paragraph,
  Table,
  UnorderedList,
} from '@amsterdam/design-system-react'

import type { ProseProps } from './Prose'

import { Prose } from './Prose'

//eslint-disable-next-line @typescript-eslint/no-unused-vars -- Required to render source code in Storybook.
const render = (props: ProseProps) => (
  <article className="ams-prose">
    <Heading level={1}>Werkzaamheden aan de Oranje Loper</Heading>
    <Paragraph>16 augustus 2024</Paragraph>
    <Paragraph size="large">
      Afgelopen maand konden bewoners hun reactie op de plannen geven tijdens informatiebijeenkomsten. Online kunt u tot
      en met 31 oktober reageren op de plannen.
    </Paragraph>

    <Heading level={2}>Waar vinden de werkzaamheden plaats?</Heading>
    <Paragraph>
      De Oranjeloper loopt van oost naar west door de stad. We passen onderstaande straten en kruispunten aan, zodat de
      route veilig en toegankelijk blijft voor alle weggebruikers. Fietsers, voetgangers en het openbaar vervoer krijgen
      tijdens de uitvoering waar mogelijk ruim baan.
    </Paragraph>
    <UnorderedList>
      <UnorderedList.Item>De Clercqstraat en Jan Evertsenstraat</UnorderedList.Item>
      <UnorderedList.Item>Kruispunt Admiraal de Ruijterweg–Jan Evertsenstraat</UnorderedList.Item>
      <UnorderedList.Item>Raadhuisstraat, Westermarkt en Rozengracht</UnorderedList.Item>
      <UnorderedList.Item>Kruispunt Marnixstraat–Rozengracht</UnorderedList.Item>
      <UnorderedList.Item>Nieuwezijds Voorburgwal</UnorderedList.Item>
      <UnorderedList.Item>Molenslootbrug en Ritsaert ten Catebrug</UnorderedList.Item>
    </UnorderedList>

    <Heading level={2}>Planning per fase</Heading>
    <Paragraph>
      We richten de rotonde bij de Bouhuijstunnel opnieuw in en maken het veiliger. Ook het fiets- en voetpad passen we
      aan. De werkzaamheden zijn opgedeeld in vijf fasen, zodat we het verkeer zo min mogelijk hinderen.
    </Paragraph>
    <Paragraph>
      Tussen de fasen houden we rekening met feestdagen en evenementen in de buurt. Bij aanhoudend slecht weer schuiven
      we de planning in overleg met de aannemer op. We informeren bewoners en ondernemers dan minimaal een week van
      tevoren.
    </Paragraph>

    <Heading level={3}>Fasen van de rotonde</Heading>
    <OrderedList>
      <OrderedList.Item>Voorbereiden van de werkzaamheden: 25 september tot 27 september.</OrderedList.Item>
      <OrderedList.Item>
        Start werkzaamheden zuidelijke en halfwestelijke deel van de rotonde: 27 september tot 19 oktober.
        <OrderedList>
          <OrderedList.Item>Opbreken van de bestaande verharding en kantopsluiting.</OrderedList.Item>
          <OrderedList.Item>Aanleg van de nieuwe fundering en de onderste asfaltlaag.</OrderedList.Item>
        </OrderedList>
      </OrderedList.Item>
      <OrderedList.Item>
        Voortgang werkzaamheden zuidelijke en halfwestelijke deel: 20 oktober tot 11 november.
      </OrderedList.Item>
      <OrderedList.Item>
        Start werkzaamheden van het noordelijke deel van de rotonde: 13 november tot 6 december.
      </OrderedList.Item>
      <OrderedList.Item>
        Afronden van de werkzaamheden en verwijderen van tijdelijke maatregelen: 7 december tot 15 december.
      </OrderedList.Item>
    </OrderedList>

    <Heading level={2}>Bereikbaarheid tijdens de werkzaamheden</Heading>
    <Paragraph>
      Tijdens de uitvoering leiden we het verkeer om via de belangrijkste aanrijroutes. Fietsers en voetgangers kunnen
      de meeste bestemmingen op loopafstand bereiken; voor autoverkeer en het openbaar vervoer gelden tijdelijke
      omleidingen.
    </Paragraph>
    <Table>
      <Table.Caption>
        <Heading level={3}>Omleidingen per vervoermiddel</Heading>
      </Table.Caption>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Vervoermiddel</Table.HeaderCell>
          <Table.HeaderCell>Omleiding</Table.HeaderCell>
          <Table.HeaderCell>Periode</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Fietsers</Table.Cell>
          <Table.Cell>Via Marnixstraat en Nassaukade</Table.Cell>
          <Table.Cell>Gehele periode</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Voetgangers</Table.Cell>
          <Table.Cell>Trottoir blijft beschikbaar, enkele oversteken verplaatst</Table.Cell>
          <Table.Cell>Gehele periode</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Tram 17</Table.Cell>
          <Table.Cell>Ingekort tot halte Westermarkt</Table.Cell>
          <Table.Cell>27 september tot 6 december</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Autoverkeer</Table.Cell>
          <Table.Cell>Via de S100 rond het centrum</Table.Cell>
          <Table.Cell>Tijdens fase 2 en fase 3</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>

    <Heading level={2}>Veelgestelde vragen</Heading>
    <Paragraph>
      Hieronder vindt u antwoorden op vragen die bewoners en ondernemers ons het vaakst stellen over de werkzaamheden.
      Staat uw vraag er niet bij, neem dan contact op via het contactformulier onderaan deze pagina.
    </Paragraph>
    <Accordion headingLevel={3}>
      <Accordion.Section label="Wat gebeurt er met mijn parkeerplaats tijdens de werkzaamheden?">
        <Paragraph>
          Tijdens de uitvoering vervallen een aantal parkeerplaatsen langs de route tijdelijk. Bewoners met een
          parkeervergunning kunnen in overleg met de gemeente gebruikmaken van aangewezen uitwijklocaties in de buurt.
          Ondernemers met een laad- en losvergunning ontvangen vooraf bericht over tijdelijke alternatieven. We proberen
          de overlast zo beperkt mogelijk te houden en informeren betrokkenen minimaal twee weken van tevoren. Zodra een
          fase is afgerond, worden de parkeerplaatsen zo snel mogelijk teruggegeven.
        </Paragraph>
      </Accordion.Section>
      <Accordion.Section label="Kan ik mijn woning of bedrijf blijven bereiken?">
        <Paragraph>
          Uw woning en bedrijf blijven gedurende de gehele periode bereikbaar, al kan de route tijdelijk afwijken van
          wat u gewend bent. Voor voetgangers en fietsers zorgen we altijd voor een veilige doorgang langs de
          werkzaamheden. Autoverkeer wordt via omleidingsborden naar de dichtstbijzijnde alternatieve route geleid.
          Heeft u bijzondere bereikbaarheidsbehoeften, bijvoorbeeld voor medisch vervoer of een zwaar transport, neem
          dan vooraf contact met ons op zodat we samen een oplossing kunnen zoeken.
        </Paragraph>
      </Accordion.Section>
      <Accordion.Section label="Wat doe ik als ik schade ondervind door de werkzaamheden?">
        <Paragraph>
          Constateert u schade aan uw woning, bedrijfspand of voertuig die mogelijk is veroorzaakt door de
          werkzaamheden, meld dit dan zo snel mogelijk via <Link href="#">amsterdam.nl/schade-melden</Link>. Voeg
          daarbij zo veel mogelijk documentatie toe, zoals foto&apos;s met datum en tijdstip. De gemeente beoordeelt
          iedere melding afzonderlijk en neemt binnen vijf werkdagen contact met u op. Is de schade dringend, bel dan de
          gemeentelijke storingsdienst op 14 020. Schade veroorzaakt door de aannemer wordt in eerste instantie door de
          aannemer afgehandeld; de gemeente fungeert daarbij als aanspreekpunt.
        </Paragraph>
      </Accordion.Section>
    </Accordion>

    <Heading level={2}>Op de hoogte blijven</Heading>
    <Paragraph>
      Op <Link href="https://amsterdam.nl/oranjeloper">amsterdam.nl/oranjeloper</Link> vindt u een actueel overzicht van
      alle werkzaamheden. U kunt zich daar ook inschrijven voor de digitale nieuwsbrief, zodat we u per e-mail op de
      hoogte houden van wijzigingen in de planning en tijdelijke omleidingen.
    </Paragraph>
    <CallToActionLink href="#">Aanmelden voor de nieuwsbrief</CallToActionLink>
  </article>
)

const meta = {
  title: 'Utilities/CSS/Prose',
  component: Prose,
} satisfies Meta<typeof Prose>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render,
}
