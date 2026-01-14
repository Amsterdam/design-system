/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AspectRatioProps } from '@amsterdam/design-system-react/dist/common/types'

import {
  Accordion,
  Breadcrumb,
  Grid,
  Heading,
  Image,
  ImageSlider,
  Link,
  LinkList,
  Paragraph,
  ProgressList,
  Spotlight,
  StandaloneLink,
} from '@amsterdam/design-system-react'

const images = [268, 12, 267, 164, 128].map((id) => ({
  alt: '',
  aspectRatio: '16:9' as AspectRatioProps['aspectRatio'],
  src: `https://picsum.photos/id/${id}/1440/810`,
}))

// Source: https://www.amsterdam.nl/projecten/centrumeiland/#PagCls_16216116
export const ProjectPage = () => (
  <>
    <Grid paddingTop="large">
      <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Breadcrumb>
          <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
          <Breadcrumb.Link href="#">Bouwprojecten en verkeersprojecten</Breadcrumb.Link>
        </Breadcrumb>
      </Grid.Cell>
    </Grid>
    <Grid as="main" id="inhoud" paddingBottom="x-large">
      <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading level={1}>Centrumeiland: hét zelfbouweiland van Amsterdam</Heading>
      </Grid.Cell>
      <Grid.Cell span="all">
        <ImageSlider images={images} />
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
        <Heading className="ams-mb-s" level={2}>
          Wat
        </Heading>
        <Paragraph className="ams-mb-m">
          Centrumeiland is hét zelfbouweiland van de stad en maakt deel uit van{' '}
          <Link href="https://www.amsterdam.nl/projecten/ijburg/">IJburg</Link>. Er komen zo’n 1.500 tot 1.700 woningen,
          waarvan 60 tot 70 procent zelfbouw.
        </Paragraph>
        <Paragraph className="ams-mb-m">
          Op verschillende zelfbouwkavels laten bewoners hun eigen droomwoning bouwen. Ook komen er sociale en
          middeldure huurwoningen. In totaal is de verdeling van huurwoningen straks 60 procent vrije sector en 40
          procent sociale en middeldure huur.
        </Paragraph>
        <Paragraph className="ams-mb-m">
          Verder komen er verschillende voorzieningen zoals een basisschool, kinderdagverblijf, jongerentalentencentrum,
          horeca, broedplaats, verpleeghuis en passantenpension. Er komt een mix aan kleine winkels, bedrijven en
          kantoren. Het eiland is ongeveer 15 hectare groot. Dat komt overeen met ongeveer 23 voetbalvelden. Dat is in
          oppervlakte vergelijkbaar met Steigereiland Zuid.
        </Paragraph>
        <StandaloneLink className="ams-mb-xl" href="#">
          Lees meer over Centrumeiland
        </StandaloneLink>
        <Heading className="ams-mb-s" level={2}>
          Waar
        </Heading>
        <Paragraph className="ams-mb-m">
          Centrumeiland ligt op IJburg aan de oostkant van Amsterdam, in het IJmeer. Het is het vierde eiland van IJburg
          en ligt tussen Haveneiland en Strandeiland. Het stadsstrand van IJburg en natuurgebied Diemer Vijfhoek liggen
          om de hoek.
        </Paragraph>
        <Paragraph className="ams-mb-xl">
          De wijk is goed bereikbaar met het openbaar vervoer, de fiets of de auto. De stad is niet ver weg: tram 26
          rijdt naar station Amsterdam Centraal en bus 66 gaat naar station Bijlmer Arena. Wie toch liever de auto pakt,
          is binnen enkele minuten op de A1 of A10.
        </Paragraph>
        <Heading className="ams-mb-s" level={2}>
          Wanneer
        </Heading>
        <Paragraph className="ams-mb-l">
          De bouwwerkzaamheden op Centrumeiland zijn in volle gang. Veel zelfbouwers zijn bezig met de bouw van hun
          eigen huis. De eerste bewoners zijn in 2020 naar het eiland verhuisd. De komende jaren starten verschillende
          ontwikkelaars, bouwgroepen en zelfbouwers ook met de bouw van hun nieuwe woningen. We verwachten dat bijna
          alle woningen en voorzieningen klaar zijn in 2028. Het laatste woonblok wordt opgeleverd in 2029.
        </Paragraph>
        <ProgressList headingLevel={3}>
          <ProgressList.Step hasSubsteps heading="2021" status="completed">
            <ProgressList.Substeps>
              <ProgressList.Substep status="completed">
                <Paragraph>Landmaken voor de Noordoever en Noordpunt, start oktober.</Paragraph>
              </ProgressList.Substep>
              <ProgressList.Substep status="completed">
                <Paragraph>Start bouw brug tussen Centrumeiland en Strandeiland in oktober (brug 2125).</Paragraph>
              </ProgressList.Substep>
            </ProgressList.Substeps>
          </ProgressList.Step>
          <ProgressList.Step hasSubsteps heading="2022" status="completed">
            <ProgressList.Substeps>
              <ProgressList.Substep status="completed">
                <Paragraph>Inrichting zuidelijke natuuroever, begin 2022.</Paragraph>
              </ProgressList.Substep>
              <ProgressList.Substep status="completed">
                <Paragraph>Start bouw basisschool en kinderdagverblijf, begin 2022.</Paragraph>
              </ProgressList.Substep>
            </ProgressList.Substeps>
          </ProgressList.Step>
          <ProgressList.Step hasSubsteps heading="2023" status="completed">
            <ProgressList.Substeps>
              <ProgressList.Substep status="completed">
                <Paragraph>
                  Opening <Link href="https://www.mkcdeschatkaart.nl/">basisschool en kinderdagverblijf</Link>, zomer
                  2023.
                </Paragraph>
              </ProgressList.Substep>
              <ProgressList.Substep status="completed">
                <Paragraph>Strandeilandlaan krijgt definitieve inrichting.</Paragraph>
              </ProgressList.Substep>
              <ProgressList.Substep status="completed">
                <Paragraph>
                  Start bouw{' '}
                  <Link href="https://www.amsterdam.nl/projecten/ijburg/nieuwe-bruggen/">Annemie Wolffbrug</Link> tussen
                  Haveneiland met Centrumeiland.
                </Paragraph>
              </ProgressList.Substep>
              <ProgressList.Substep status="completed">
                <Paragraph>
                  Voorbereiding en start bouw{' '}
                  <Link href="https://www.amsterdam.nl/projecten/ijburg/nieuwe-bruggen/">Lee Millerbrug</Link> met
                  brugpaviljoens tussen Centrumeiland en Strandeiland.
                </Paragraph>
              </ProgressList.Substep>
            </ProgressList.Substeps>
          </ProgressList.Step>
          <ProgressList.Step hasSubsteps heading="2024" status="completed">
            <ProgressList.Substeps>
              <ProgressList.Substep status="completed">
                <Paragraph>Start bouw brug tussen Centrumeiland en Strandeiland (brug 2080 bij strand).</Paragraph>
              </ProgressList.Substep>
              <ProgressList.Substep status="completed">
                <Paragraph>Opening Jongerentalentencentrum.</Paragraph>
              </ProgressList.Substep>
              <ProgressList.Substep status="completed">
                <Paragraph>Definitieve inrichting eerste straten en wadi’s.</Paragraph>
              </ProgressList.Substep>
              <ProgressList.Substep status="completed">
                <Paragraph>Oplevering sociale woonblokken Ymere en de Alliantie.</Paragraph>
              </ProgressList.Substep>
            </ProgressList.Substeps>
          </ProgressList.Step>
          <ProgressList.Step hasSubsteps heading="2025" status="completed">
            <ProgressList.Substeps>
              <ProgressList.Substep status="completed">
                <Paragraph>Halte IJtram 26 op Centrumeiland eind 2025.</Paragraph>
              </ProgressList.Substep>
              <ProgressList.Substep status="completed">
                <Paragraph>Start bouw Robin Wood.</Paragraph>
              </ProgressList.Substep>
            </ProgressList.Substeps>
          </ProgressList.Step>
          <ProgressList.Step hasSubsteps heading="2026" status="current">
            <ProgressList.Substeps>
              <ProgressList.Substep>
                <Paragraph>Oplevering Zuidoever (ecologische oever).</Paragraph>
              </ProgressList.Substep>
            </ProgressList.Substeps>
          </ProgressList.Step>
          <ProgressList.Step hasSubsteps heading="2029">
            <ProgressList.Substeps>
              <ProgressList.Substep>
                <Paragraph>Waarschijnlijk zijn bijna alle woningen en voorzieningen klaar.</Paragraph>
              </ProgressList.Substep>
            </ProgressList.Substeps>
          </ProgressList.Step>
        </ProgressList>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading className="ams-mb-s" level={2} size="level-3">
          Nieuws
        </Heading>
        <LinkList>
          <LinkList.Link href="#">Werkzaamheden Bert Haanstrakade en Pampuslaan (27 november 2025)</LinkList.Link>
          <LinkList.Link href="#">17 november: bijeenkomst over Strandeiland (11 november 2025)</LinkList.Link>
        </LinkList>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 5, wide: 7 }}>
        <Heading className="ams-mb-s" level={2} size="level-3">
          Werk aan de weg
        </Heading>
        <LinkList>
          <LinkList.Link href="#">Bert Haanstrakade, omleiding</LinkList.Link>
          <LinkList.Link href="#">Straten Centrumeiland, afsluitingen</LinkList.Link>
        </LinkList>
      </Grid.Cell>
    </Grid>
    <Spotlight color="azure">
      <Grid paddingVertical="x-large">
        <Grid.Cell span="all">
          <Heading className="ams-mb-m" color="inverse" level={2}>
            Zelfbouw
          </Heading>
          <Grid style={{ paddingInline: 0 }}>
            <Grid.Cell span={{ narrow: 4, medium: 4, wide: 3 }}>
              <Paragraph className="ams-mb-s" color="inverse">
                Meer over de verschillende vormen van zelfbouw vindt u op:
              </Paragraph>
              <StandaloneLink color="inverse" href="#">
                Zelfbouw
              </StandaloneLink>
            </Grid.Cell>
            <Grid.Cell span={{ narrow: 4, medium: 4, wide: 3 }}>
              <Paragraph className="ams-mb-s" color="inverse">
                Op de kavelkaart is te zien welke kavels in de toekomst op Centrumeiland vrij komen.
              </Paragraph>
              <StandaloneLink color="inverse" href="#">
                Aanbod kavels
              </StandaloneLink>
            </Grid.Cell>
            <Grid.Cell span={{ narrow: 4, medium: 4, wide: 3 }}>
              <Paragraph className="ams-mb-s" color="inverse">
                Op zoek naar medebouwers of samen met anderen bouwen? Plaats een oproep.
              </Paragraph>
              <StandaloneLink color="inverse" href="#">
                Prikbord
              </StandaloneLink>
            </Grid.Cell>
            <Grid.Cell span={{ narrow: 4, medium: 4, wide: 3 }}>
              <Paragraph className="ams-mb-s" color="inverse">
                Meld u aan en blijf op de hoogte over zelfbouw in Amsterdam.
              </Paragraph>
              <StandaloneLink color="inverse" href="#">
                Nieuwsbrief zelfbouw
              </StandaloneLink>
            </Grid.Cell>
          </Grid>
        </Grid.Cell>
      </Grid>
    </Spotlight>
    <Grid paddingVertical="x-large">
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading className="ams-mb-s" level={2} size="level-3">
          Meer informatie
        </Heading>
        <LinkList>
          <LinkList.Link href="#">Blok 16: Amsterdams nabuurschap, een nieuwe vorm van zelfbouw</LinkList.Link>
          <LinkList.Link href="#">Strandlokaal IJburg</LinkList.Link>
          <LinkList.Link href="#">Woningaanbod Centrumeiland</LinkList.Link>
          <LinkList.Link href="#">Nieuwe bruggen op IJburg</LinkList.Link>
          <LinkList.Link href="#">IJburg: nieuwe eilanden en woningbouw</LinkList.Link>
          <LinkList.Link href="#">IJburg - stations Bijlmer Arena en Weesp: nieuwe busverbindingen</LinkList.Link>
          <LinkList.Link className="ams-mb-m" href="#">
            IJburg: verlengen IJtram
          </LinkList.Link>
          <LinkList.Link href="#">Meer projecten in Oost</LinkList.Link>
        </LinkList>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 5, wide: 7 }}>
        <Heading className="ams-mb-m" level={2} size="level-3">
          Ontwikkeling Centrumeiland, herfst 2025
        </Heading>
        <Image alt="" className="ams-mb-m" src="https://picsum.photos/id/385/640/360" />
        <Accordion className="ams-mb-l" headingLevel={3}>
          <Accordion.Section label="Uitgeschreven tekst van video">
            <Paragraph>
              De Lee Millerbrug is in 2026 klaar. De Annemie Wolffbrug zou eind 2025 volledig in gebruik worden genomen.
              Dit is echter uitgesteld tot 2026. De tram rijdt halverwege 2026 over de bruggen richting Strandeiland. We
              werken ook hard aan Robin Wood. Het gebouw wordt bijna volledig van hout. In Robin Wood komen 165
              woningen, horeca en een vestiging van de Openbare Bibliotheek Amsterdam . De Torteltuin is ook in aanbouw.
              Er komen 40 woningen, waarvan 12 sociale huur en 28 middeldure huur. De oplevering is in 2028. Op kavel
              12.01 komt het nieuwe gebouw Akropolis, met daarin 31 woningen: 8 sociale huur en 23 middeldure huur. De
              Zuidoever is een speciale natuuroever. Het biedt leefplekken voor diverse dieren en planten, zoals padden,
              vleermuizen, ringslangen en oeverzwaluwen. De Zuidoever is verboden terrein voor mensen en huisdieren. In
              het gebouw Juf Nienke wordt in december een kinderdagverblijf geopend. De definitieve inrichting van
              straten start dit jaar en loopt door tot in 2026.
            </Paragraph>
          </Accordion.Section>
        </Accordion>
        <StandaloneLink href="#">Meer video’s</StandaloneLink>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading className="ams-mb-s" level={2} size="level-3">
          Plannen en publicaties
        </Heading>
        <LinkList>
          <LinkList.Link href="#">Plannen en publicaties Centrumeiland</LinkList.Link>
        </LinkList>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 5, wide: 7 }}>
        <Heading className="ams-mb-s" level={2} size="level-3">
          Blijf op de hoogte
        </Heading>
        <LinkList>
          <LinkList.Link href="#">Nieuwsbrief ontwikkeling IJburg</LinkList.Link>
          <LinkList.Link href="#">Hallo Centrumeiland: praat mee</LinkList.Link>
          <LinkList.Link href="#">Facebook: IJburg</LinkList.Link>
          <LinkList.Link href="#">Instagram: Centrumeiland</LinkList.Link>
        </LinkList>
      </Grid.Cell>
    </Grid>
    <Spotlight>
      <Grid paddingVertical="x-large">
        <Grid.Cell span="all">
          <Heading className="ams-mb-s" color="inverse" level={2}>
            Contact
          </Heading>
          <Grid style={{ paddingInline: 0 }}>
            <Grid.Cell span={{ narrow: 4, medium: 4, wide: 6 }}>
              <Paragraph className="ams-mb-m" color="inverse">
                Vragen over zelfbouw op Centrumeiland:{' '}
                <Link color="inverse" href="mailto:zelfbouwcentrumeiland@amsterdam.nl">
                  zelfbouwcentrumeiland@amsterdam.nl
                </Link>
              </Paragraph>
              <Paragraph color="inverse">
                Elke donderdag is er van 16.00 uur tot 17.00 uur een telefonisch spreekuur. Aanmelden via e-mail.
              </Paragraph>
            </Grid.Cell>
            <Grid.Cell span={{ narrow: 4, medium: 4, wide: 6 }}>
              <Paragraph color="inverse">
                Maud van Esch
                <br />
                Omgevingsmanager IJburg
                <br />
                <Link color="inverse" href="mailto:m.van.esch@amsterdam.nl">
                  m.van.esch@amsterdam.nl
                </Link>
                <br />
                <Link color="inverse" href="tel:+316645899537">
                  06 4589 9537
                </Link>
                <br />
                Voor vragen over werkzaamheden of bouwactiviteiten
              </Paragraph>
            </Grid.Cell>
          </Grid>
        </Grid.Cell>
      </Grid>
    </Spotlight>
    <Grid paddingVertical="x-large">
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 10 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Image alt="" src="https://picsum.photos/1280/720" />
      </Grid.Cell>
    </Grid>
  </>
)
