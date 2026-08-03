/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Breadcrumb,
  Breakout,
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
  TableOfContents,
} from '@amsterdam/design-system-react'
import { MailIcon, PhoneIcon } from '@amsterdam/design-system-react-icons'

import { exampleImageSource } from '#storybook/_common/exampleContent'

import { commonMeta, pageParameters } from '../common/commonMeta'

const images = [268, 12, 267, 164, 128].map((id) => ({
  alt: '',
  aspectRatio: '16:9' as const,
  src: `https://picsum.photos/id/${id}/1440/810`,
}))

const meta = {
  ...commonMeta,
  title: 'Pages/Public/Project Page',
  parameters: pageParameters(
    'Keeps residents and stakeholders informed about a construction or traffic project: ' +
      'what it involves, where and why it happens, and when each phase takes place.',
  ),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: (args) => (
    <>
      {/*
       * Padding is a prop of the Grid, not of the Grid Cell, so the breadcrumb needs its own Grid for
       * the paddingTop of large that opens every page.
       */}
      <Grid paddingTop="large">
        <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
          <Breadcrumb>
            <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
            <Breadcrumb.Link href="#">Bouwprojecten en verkeersprojecten</Breadcrumb.Link>
          </Breadcrumb>
        </Grid.Cell>
      </Grid>
      {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
      {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
      {/*
       * The Spotlight bands carry the project’s own content rather than supporting content,
       * so <main> wraps several Grids here rather than being one itself.
       */}
      <main id="inhoud">
        {/* The Content Header takes a Grid of its own, so the space below it is a padding rather than a row gap. */}
        {/* This Grid ends in a full-width Image Slider, whose edge marks the boundary, so a paddingBottom of x-large is enough. */}
        <Grid paddingBottom="x-large">
          <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
            <Heading level={1}>Centrumeiland: hét zelfbouweiland van Amsterdam</Heading>
          </Grid.Cell>
          {/*
           * The slider is no part of the Content Header, so it takes a Grid Cell of its own and the row gap
           * of x-large sets it apart. It spans the full grid width, where the title keeps to the Content Header Cell.
           */}
          <Grid.Cell span="all">
            {/*
             * ImageSlider takes an array of images. Each entry accepts the props of an Image plus an
             * optional caption; only alt is required.
             */}
            <ImageSlider images={images} />
          </Grid.Cell>
        </Grid>
        {/* Two adjacent Grids add their touching paddings together, so this one leaves its paddingTop off. */}
        {/* A coloured Spotlight follows, so this Grid takes a paddingBottom of x-large. */}
        <Grid paddingBottom="x-large">
          {/* ams-prose sets the vertical rhythm between the direct children of this cell. */}
          <Grid.Cell
            className="ams-prose"
            span={{ narrow: 4, medium: 6, wide: 7 }}
            start={{ narrow: 1, medium: 2, wide: 3 }}
          >
            <Heading level={2}>Wat</Heading>
            <Paragraph>
              Centrumeiland is hét zelfbouweiland van de stad en maakt deel uit van <Link href="#">IJburg</Link>. Er
              komen zo’n 1.500 tot 1.700 woningen, waarvan 60 tot 70 procent zelfbouw.
            </Paragraph>
            <Paragraph>
              Op verschillende zelfbouwkavels laten bewoners hun eigen droomwoning bouwen. Ook komen er sociale en
              middeldure huurwoningen. In totaal is de verdeling van huurwoningen straks 60 procent vrije sector en 40
              procent sociale en middeldure huur.
            </Paragraph>
            <Paragraph>
              Verder komen er verschillende voorzieningen zoals een basisschool, kinderdagverblijf,
              jongerentalentencentrum, horeca, broedplaats, verpleeghuis en passantenpension. Er komt een mix aan kleine
              winkels, bedrijven en kantoren. Het eiland is ongeveer 15 hectare groot. Dat komt overeen met ongeveer 23
              voetbalvelden. Dat is in oppervlakte vergelijkbaar met Steigereiland Zuid.
            </Paragraph>
            <StandaloneLink href="#">Lees meer over Centrumeiland</StandaloneLink>
            <Heading level={2}>Waar</Heading>
            <Paragraph>
              Centrumeiland ligt op IJburg aan de oostkant van Amsterdam, in het IJmeer. Het is het vierde eiland van
              IJburg en ligt tussen Haveneiland en Strandeiland. Het stadsstrand van IJburg en natuurgebied Diemer
              Vijfhoek liggen om de hoek.
            </Paragraph>
            <Paragraph>
              De wijk is goed bereikbaar met het openbaar vervoer, de fiets of de auto. De stad is niet ver weg: tram 26
              rijdt naar station Amsterdam Centraal en bus 66 gaat naar station Bijlmer Arena. Wie toch liever de auto
              pakt, is binnen enkele minuten op de A1 of A10.
            </Paragraph>
            <Heading level={2}>Wanneer</Heading>
            <Paragraph>
              De bouwwerkzaamheden op Centrumeiland zijn in volle gang. Veel zelfbouwers zijn bezig met de bouw van hun
              eigen huis. De eerste bewoners zijn in 2020 naar het eiland verhuisd. De komende jaren starten
              verschillende ontwikkelaars, bouwgroepen en zelfbouwers ook met de bouw van hun nieuwe woningen. We
              verwachten dat bijna alle woningen en voorzieningen klaar zijn in 2028. Het laatste woonblok wordt
              opgeleverd in 2029.
            </Paragraph>
          </Grid.Cell>
          {/* A Progress List is a block of its own, so it takes its own Grid Cell and the row gap spaces it. */}
          <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
            {/*
             * A ProgressList shows a timeline. status="completed" marks a finished step, status="current"
             * the one in progress, and a step with no status is still to come. Substeps are nested by hand
             * in a ProgressList.Substeps; hasSubsteps only tells the CSS about them, so that it draws the
             * connecting lines correctly. collapsible gives every step its own fold button and decides what
             * opens first: completed steps start collapsed, all others expanded, so the finished years here
             * arrive folded. headingLevel is 3 because the list sits under the ‘Wanneer’ heading of level 2.
             */}
            <ProgressList collapsible headingLevel={3}>
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
                      Opening <Link href="#">basisschool en kinderdagverblijf</Link>, zomer 2023.
                    </Paragraph>
                  </ProgressList.Substep>
                  <ProgressList.Substep status="completed">
                    <Paragraph>Strandeilandlaan krijgt definitieve inrichting.</Paragraph>
                  </ProgressList.Substep>
                  <ProgressList.Substep status="completed">
                    <Paragraph>
                      Start bouw <Link href="#">Annemie Wolffbrug</Link> tussen Haveneiland met Centrumeiland.
                    </Paragraph>
                  </ProgressList.Substep>
                  <ProgressList.Substep status="completed">
                    <Paragraph>
                      Voorbereiding en start bouw <Link href="#">Lee Millerbrug</Link> met brugpaviljoens tussen
                      Centrumeiland en Strandeiland.
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
          {/*
           * Two link lists: the full-width narrow span stacks them, and from medium up the start values
           * put them side by side – halves of the medium grid, inset 5-column blocks on the wide one.
           */}
          <Grid.Cell
            className="ams-prose"
            span={{ narrow: 4, medium: 4, wide: 5 }}
            start={{ narrow: 1, medium: 1, wide: 2 }}
          >
            <Heading level={2} size="level-3">
              Nieuws
            </Heading>
            <LinkList>
              <LinkList.Link href="#">Werkzaamheden Bert Haanstrakade en Pampuslaan (27 november 2025)</LinkList.Link>
              <LinkList.Link href="#">17 november: bijeenkomst over Strandeiland (11 november 2025)</LinkList.Link>
            </LinkList>
          </Grid.Cell>
          <Grid.Cell
            className="ams-prose"
            span={{ narrow: 4, medium: 4, wide: 5 }}
            start={{ narrow: 1, medium: 5, wide: 7 }}
          >
            <Heading level={2} size="level-3">
              Werk aan de weg
            </Heading>
            <LinkList>
              <LinkList.Link href="#">Bert Haanstrakade, omleiding</LinkList.Link>
              <LinkList.Link href="#">Straten Centrumeiland, afsluitingen</LinkList.Link>
            </LinkList>
          </Grid.Cell>
        </Grid>
        <Spotlight color="azure">
          {/*
           * The row gap would put an x-large below the heading, where the guidance asks for an x-small at this size.
           * So the Grid gives up its gap, the heading sets the space itself, and the Subgrid puts the gap back
           * between the Cells.
           */}
          <Grid gapVertical="none" paddingVertical="x-large">
            <Grid.Cell span="all">
              <Heading className="ams-mb-xs" color="inverse" level={2} size="level-3">
                Zelfbouw
              </Heading>
            </Grid.Cell>
            <Grid.Subgrid gapVertical="x-large" span="all">
              {/* The promo cells span 3 columns of the wide grid, so four of them line up only on wide screens. */}
              <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 3 }}>
                <Paragraph color="inverse">Meer over de verschillende vormen van zelfbouw vindt u op:</Paragraph>
                <StandaloneLink color="inverse" href="#">
                  Zelfbouw
                </StandaloneLink>
              </Grid.Cell>
              <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 3 }}>
                <Paragraph color="inverse">
                  Op de kavelkaart is te zien welke kavels in de toekomst op Centrumeiland vrij komen.
                </Paragraph>
                <StandaloneLink color="inverse" href="#">
                  Aanbod kavels
                </StandaloneLink>
              </Grid.Cell>
              <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 3 }}>
                <Paragraph color="inverse">
                  Op zoek naar medebouwers of samen met anderen bouwen? Plaats een oproep.
                </Paragraph>
                <StandaloneLink color="inverse" href="#">
                  Prikbord
                </StandaloneLink>
              </Grid.Cell>
              <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 3 }}>
                <Paragraph color="inverse">Meld u aan en blijf op de hoogte over zelfbouw in Amsterdam.</Paragraph>
                <StandaloneLink color="inverse" href="#">
                  Nieuwsbrief zelfbouw
                </StandaloneLink>
              </Grid.Cell>
            </Grid.Subgrid>
          </Grid>
        </Spotlight>
        <Grid paddingVertical="x-large">
          {/* These four cells alternate between the same start positions, so they too read as two columns. */}
          <Grid.Cell
            className="ams-prose"
            span={{ narrow: 4, medium: 4, wide: 5 }}
            start={{ narrow: 1, medium: 1, wide: 2 }}
          >
            <Heading level={2} size="level-3">
              Meer informatie
            </Heading>
            <LinkList>
              <LinkList.Link href="#">Blok 16: Amsterdams nabuurschap, een nieuwe vorm van zelfbouw</LinkList.Link>
              <LinkList.Link href="#">Strandlokaal IJburg</LinkList.Link>
              <LinkList.Link href="#">Woningaanbod Centrumeiland</LinkList.Link>
              <LinkList.Link href="#">Nieuwe bruggen op IJburg</LinkList.Link>
              <LinkList.Link href="#">IJburg: nieuwe eilanden en woningbouw</LinkList.Link>
              <LinkList.Link href="#">IJburg - stations Bijlmer Arena en Weesp: nieuwe busverbindingen</LinkList.Link>
              <LinkList.Link href="#">IJburg: verlengen IJtram</LinkList.Link>
            </LinkList>
            <StandaloneLink href="#">Meer projecten in Oost</StandaloneLink>
          </Grid.Cell>
          <Grid.Cell
            className="ams-prose"
            span={{ narrow: 4, medium: 4, wide: 5 }}
            start={{ narrow: 1, medium: 5, wide: 7 }}
          >
            <Heading level={2} size="level-3">
              Ontwikkeling Centrumeiland, herfst 2025
            </Heading>
            {/* This image only contributes to the visual atmosphere of the page, so it takes an empty alt. */}
            <Image alt="" src="https://picsum.photos/id/385/640/360" />
            <StandaloneLink href="#">Meer video’s</StandaloneLink>
          </Grid.Cell>
          <Grid.Cell
            className="ams-prose"
            span={{ narrow: 4, medium: 4, wide: 5 }}
            start={{ narrow: 1, medium: 1, wide: 2 }}
          >
            <Heading level={2} size="level-3">
              Plannen en publicaties
            </Heading>
            <StandaloneLink href="#">Plannen en publicaties Centrumeiland</StandaloneLink>
          </Grid.Cell>
          <Grid.Cell
            className="ams-prose"
            span={{ narrow: 4, medium: 4, wide: 5 }}
            start={{ narrow: 1, medium: 5, wide: 7 }}
          >
            <Heading level={2} size="level-3">
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
        {/*
         * The highlight colours have no prescribed meaning, so this second band takes the default purple
         * rather than repeating the azure of the first.
         */}
        <Spotlight>
          <Grid gapVertical="none" paddingVertical="x-large">
            <Grid.Cell span="all">
              <Heading className="ams-mb-xs" color="inverse" level={2} size="level-3">
                Contact
              </Heading>
            </Grid.Cell>
            <Grid.Subgrid gapVertical="x-large" span="all">
              <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
                <Paragraph color="inverse">
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
                {/* These lines are kept in one Paragraph so they read as a single contact block, not as running text. */}
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
            </Grid.Subgrid>
          </Grid>
        </Spotlight>
        {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
        <Grid paddingBottom="2x-large" paddingTop="x-large">
          <Grid.Cell span={{ narrow: 4, medium: 8, wide: 10 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
            <Image alt="" src={exampleImageSource(1280, 720)} />
          </Grid.Cell>
        </Grid>
      </main>
    </>
  ),
} satisfies Meta

export default meta

export const Default: StoryObj = {
  parameters: {
    docs: {
      source: {
        // Because this story’s `render` takes an argument, the Code Panel rebuilds its source from the rendered tree:
        // JSX comments disappear and every `map` is expanded. Provide the source by hand so repetitive sections can
        // be shortened with `{/* … */}` markers, keeping the timeline and grid patterns readable.
        code: `<>
  {/*
   * Padding is a prop of the Grid, not of the Grid Cell, so the breadcrumb needs its own Grid for
   * the paddingTop of large that opens every page.
   */}
  <Grid paddingTop="large">
    <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
      <Breadcrumb>
        <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
        <Breadcrumb.Link href="#">Bouwprojecten en verkeersprojecten</Breadcrumb.Link>
      </Breadcrumb>
    </Grid.Cell>
  </Grid>
  {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
  {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
  {/*
   * The Spotlight bands carry the project’s own content rather than supporting content,
   * so <main> wraps several Grids here rather than being one itself.
   */}
  <main id="inhoud">
    {/* The Content Header takes a Grid of its own, so the space below it is a padding rather than a row gap. */}
    {/* This Grid ends in a full-width Image Slider, whose edge marks the boundary, so a paddingBottom of x-large is enough. */}
    <Grid paddingBottom="x-large">
      <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading level={1}>Centrumeiland: hét zelfbouweiland van Amsterdam</Heading>
      </Grid.Cell>
      {/*
       * The slider is no part of the Content Header, so it takes a Grid Cell of its own and the row gap
       * of x-large sets it apart. It spans the full grid width, where the title keeps to the Content Header Cell.
       */}
      <Grid.Cell span="all">
        {/*
         * ImageSlider takes an array of images. Each entry accepts the props of an Image plus an
         * optional caption; only alt is required.
         */}
        <ImageSlider images={images} />
      </Grid.Cell>
    </Grid>
    {/* Two adjacent Grids add their touching paddings together, so this one leaves its paddingTop off. */}
    {/* A coloured Spotlight follows, so this Grid takes a paddingBottom of x-large. */}
    <Grid paddingBottom="x-large">
      {/* ams-prose sets the vertical rhythm between the direct children of this cell. */}
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
        <Heading level={2}>Wat</Heading>
        <Paragraph>
          Centrumeiland is hét zelfbouweiland van de stad en maakt deel uit van <Link href="#">IJburg</Link>.
          Er komen zo’n 1.500 tot 1.700 woningen, waarvan 60 tot 70 procent zelfbouw.
        </Paragraph>
        <StandaloneLink href="#">Lees meer over Centrumeiland</StandaloneLink>
        <Heading level={2}>Waar</Heading>
        <Paragraph>
          Centrumeiland ligt op IJburg aan de oostkant van Amsterdam, in het IJmeer. Het is het vierde eiland
          van IJburg en ligt tussen Haveneiland en Strandeiland.
        </Paragraph>
        <Heading level={2}>Wanneer</Heading>
        <Paragraph>
          De bouwwerkzaamheden op Centrumeiland zijn in volle gang. We verwachten dat bijna alle woningen en
          voorzieningen klaar zijn in 2028.
        </Paragraph>
      </Grid.Cell>
      {/* A Progress List is a block of its own, so it takes its own Grid Cell and the row gap spaces it. */}
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
        {/*
         * A ProgressList shows a timeline. status="completed" marks a finished step, status="current"
         * the one in progress, and a step with no status is still to come. Substeps are nested by hand
         * in a ProgressList.Substeps; hasSubsteps only tells the CSS about them, so that it draws the
         * connecting lines correctly. collapsible gives every step its own fold button and decides what
         * opens first: completed steps start collapsed, all others expanded, so the finished years here
         * arrive folded. headingLevel is 3 because the list sits under the ‘Wanneer’ heading of level 2.
         */}
        <ProgressList collapsible headingLevel={3}>
          <ProgressList.Step hasSubsteps heading="2021" status="completed">
            <ProgressList.Substeps>
              <ProgressList.Substep status="completed">
                <Paragraph>Landmaken voor de Noordoever en Noordpunt, start oktober.</Paragraph>
              </ProgressList.Substep>
            </ProgressList.Substeps>
          </ProgressList.Step>
          {/* … more completed years (2022–2025), each a Step with completed Substeps … */}
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
      {/*
       * Two link lists: the full-width narrow span stacks them, and from medium up the start values
       * put them side by side – halves of the medium grid, inset 5-column blocks on the wide one.
       */}
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading level={2} size="level-3">Nieuws</Heading>
        <LinkList>
          <LinkList.Link href="#">Werkzaamheden Bert Haanstrakade en Pampuslaan (27 november 2025)</LinkList.Link>
          <LinkList.Link href="#">17 november: bijeenkomst over Strandeiland (11 november 2025)</LinkList.Link>
        </LinkList>
      </Grid.Cell>
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 5, wide: 7 }}>
        <Heading level={2} size="level-3">Werk aan de weg</Heading>
        <LinkList>
          <LinkList.Link href="#">Bert Haanstrakade, omleiding</LinkList.Link>
          <LinkList.Link href="#">Straten Centrumeiland, afsluitingen</LinkList.Link>
        </LinkList>
      </Grid.Cell>
    </Grid>
    <Spotlight color="azure">
      {/*
       * The row gap would put an x-large below the heading, where the guidance asks for an x-small at this size.
       * So the Grid gives up its gap, the heading sets the space itself, and the Subgrid puts the gap back
       * between the Cells.
       */}
      <Grid gapVertical="none" paddingVertical="x-large">
        <Grid.Cell span="all">
          <Heading className="ams-mb-xs" color="inverse" level={2} size="level-3">Zelfbouw</Heading>
        </Grid.Cell>
        <Grid.Subgrid gapVertical="x-large" span="all">
          {/* The promo cells span 3 columns of the wide grid, so four of them line up only on wide screens. */}
          <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 3 }}>
            <Paragraph color="inverse">
              Meer over de verschillende vormen van zelfbouw vindt u op:
            </Paragraph>
            <StandaloneLink color="inverse" href="#">Zelfbouw</StandaloneLink>
          </Grid.Cell>
          {/* … three more columns (Aanbod kavels, Prikbord, Nieuwsbrief zelfbouw) … */}
        </Grid.Subgrid>
      </Grid>
    </Spotlight>
    <Grid paddingVertical="x-large">
      {/* These four cells alternate between the same start positions, so they too read as two columns. */}
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading level={2} size="level-3">Meer informatie</Heading>
        <LinkList>
          <LinkList.Link href="#">Blok 16: Amsterdams nabuurschap, een nieuwe vorm van zelfbouw</LinkList.Link>
          <LinkList.Link href="#">Woningaanbod Centrumeiland</LinkList.Link>
        </LinkList>
        <StandaloneLink href="#">Meer projecten in Oost</StandaloneLink>
      </Grid.Cell>
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 5, wide: 7 }}>
        <Heading level={2} size="level-3">Ontwikkeling Centrumeiland, herfst 2025</Heading>
        {/* This image only contributes to the visual atmosphere of the page, so it takes an empty alt. */}
        <Image alt="" src="https://picsum.photos/id/385/640/360" />
        <StandaloneLink href="#">Meer video’s</StandaloneLink>
      </Grid.Cell>
      {/* … a Plannen en publicaties cell, start-aligned to the left like Meer informatie … */}
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 5, wide: 7 }}>
        <Heading level={2} size="level-3">Blijf op de hoogte</Heading>
        <LinkList>
          <LinkList.Link href="#">Nieuwsbrief ontwikkeling IJburg</LinkList.Link>
          <LinkList.Link href="#">Hallo Centrumeiland: praat mee</LinkList.Link>
        </LinkList>
      </Grid.Cell>
    </Grid>
    {/*
     * The highlight colours have no prescribed meaning, so this second band takes the default purple
     * rather than repeating the azure of the first.
     */}
    <Spotlight>
      <Grid gapVertical="none" paddingVertical="x-large">
        <Grid.Cell span="all">
          <Heading className="ams-mb-xs" color="inverse" level={2} size="level-3">Contact</Heading>
        </Grid.Cell>
        <Grid.Subgrid gapVertical="x-large" span="all">
          <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
            <Paragraph color="inverse">
              Vragen over zelfbouw op Centrumeiland:{' '}
              <Link color="inverse" href="mailto:zelfbouwcentrumeiland@amsterdam.nl">zelfbouwcentrumeiland@amsterdam.nl</Link>
            </Paragraph>
          </Grid.Cell>
          <Grid.Cell span={{ narrow: 4, medium: 4, wide: 6 }}>
            {/* These lines are kept in one Paragraph so they read as a single contact block, not as running text. */}
            <Paragraph color="inverse">
              Maud van Esch
              <br />
              Omgevingsmanager IJburg
              <br />
              <Link color="inverse" href="mailto:m.van.esch@amsterdam.nl">m.van.esch@amsterdam.nl</Link>
            </Paragraph>
          </Grid.Cell>
        </Grid.Subgrid>
      </Grid>
    </Spotlight>
    {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
    <Grid paddingBottom="2x-large" paddingTop="x-large">
      <Grid.Cell span={{ narrow: 4, medium: 8, wide: 10 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Image alt="" src="https://picsum.photos/1280/720" />
      </Grid.Cell>
    </Grid>
  </main>
</>`,
        language: 'tsx',
      },
    },
  },
}

export const WithBreakout: StoryObj = {
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
        <Breadcrumb.Link href="#">Bouwprojecten en verkeersprojecten</Breadcrumb.Link>
        <Breadcrumb.Link href="#">Oost</Breadcrumb.Link>
      </Breadcrumb>
    </Grid.Cell>
  </Grid>
  {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
  {/*
   * The Spotlight bands below carry the project’s own content rather than supporting content, so they
   * sit inside <main>. That makes <main> the wrapper around several Grids instead of a Grid itself.
   */}
  <main id="inhoud">
    {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
    <Grid paddingBottom="x-large">
      {/* ams-prose sets the vertical rhythm between the elements of this Content Header. */}
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading level={1}>Amstelstation: vernieuwing van het station en het stationsplein</Heading>
        <Paragraph size="large">
          Het Amstelstation en het plein ervoor worden de komende jaren vernieuwd. Het station krijgt een ruimere
          hal en een tweede ingang aan de zuidkant. Reizigers houden tijdens de werkzaamheden toegang tot de trein,
          de metro en de tram.
        </Paragraph>
      </Grid.Cell>
      {/* The slider spans the full grid width, where the title above it keeps to the narrower header cell. */}
      <Grid.Cell span="all">
        {/*
         * ImageSlider takes an array of images. Each entry accepts the props of an Image plus an
         * optional caption; only alt is required.
         */}
        {/* controls adds the previous and next buttons. The thumbnails below render either way. */}
        <ImageSlider controls images={images} />
      </Grid.Cell>
    </Grid>
    {/*
     * A Spotlight for news that matters only for a while. Yellow is a light highlight colour, so the
     * heading and the paragraph keep their default colour and only the link takes color="contrast".
     */}
    <Spotlight color="yellow">
      <Grid paddingVertical="x-large">
        <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
          <Heading level={2}>Amstelstationstraat afgesloten tot en met 12 september</Heading>
          <Paragraph>
            Tot en met 12 september vervangen we de riolering onder de Amstelstationstraat. Doorgaand autoverkeer
            rijdt om via de Wibautstraat. De ingang van het station aan de kant van het Julianaplein blijft de hele
            periode open.
          </Paragraph>
          <StandaloneLink color="contrast" href="#">
            Bekijk de omleidingsroutes
          </StandaloneLink>
        </Grid.Cell>
      </Grid>
    </Spotlight>
    {/*
     * The Table of Contents comes first in source, so it precedes the body in the reading and tab order.
     * gridRowStart then puts it beside the body on the wide grid rather than above it: Grid.Cell offers
     * rowSpan but no rowStart, and without a row of its own the cell joins the automatic placement, where
     * a body Cell starting at an earlier column can no longer share its row. No other cell needs one.
     */}
    <Grid paddingVertical="x-large">
      <Grid.Cell
        span={{ narrow: 4, medium: 8, wide: 3 }}
        start={{ narrow: 1, medium: 1, wide: 10 }}
        style={{ gridRowStart: 1 }}
      >
        {/* The Table of Contents renders its own heading, at the size of a level 3 Heading. */}
        <TableOfContents heading="Op deze pagina">
          <TableOfContents.List>
            <TableOfContents.Link href="#wat" label="Wat gaan we doen" />
            <TableOfContents.Link href="#waar" label="Waar" />
            <TableOfContents.Link href="#wanneer" label="Wanneer" />
            <TableOfContents.Link href="#nieuws" label="Nieuws" />
            <TableOfContents.Link href="#werk-aan-de-weg" label="Werk aan de weg" />
            <TableOfContents.Link href="#deelprojecten" label="Deelprojecten" />
            <TableOfContents.Link href="#themas" label="Thema’s" />
            <TableOfContents.Link href="#documenten" label="Documenten" />
            <TableOfContents.Link href="#video" label="Video" />
            <TableOfContents.Link href="#meer-informatie" label="Meer informatie" />
            <TableOfContents.Link href="#blijf-op-de-hoogte" label="Blijf op de hoogte" />
          </TableOfContents.List>
        </TableOfContents>
      </Grid.Cell>
      <Grid.Cell
        className="ams-prose"
        span={{ narrow: 4, medium: 6, wide: 7 }}
        start={{ narrow: 1, medium: 2, wide: 3 }}
      >
        {/* Every section heading carries the id its Table of Contents entry points at. */}
        <Heading id="wat" level={2}>Wat gaan we doen</Heading>
        <Paragraph>
          De stationshal van het Amstelstation is te klein voor het aantal reizigers dat er dagelijks doorheen
          loopt. We vergroten de hal, verbreden de perrontrappen en maken een tweede ingang aan de zuidkant van het
          station.
        </Paragraph>
        <Paragraph>
          Op het Julianaplein komt meer ruimte voor voetgangers en fietsers. De taxistandplaats en de bushaltes
          verhuizen naar de oostkant van het plein. Daaronder komt een fietsenstalling met 7.000 plekken.
        </Paragraph>
        <Paragraph>
          Het stationsgebouw uit 1939 blijft behouden. De gevels en de grote hal met de wandschildering worden
          gerestaureerd.
        </Paragraph>
        <StandaloneLink href="#">Lees meer over het ontwerp van het nieuwe station</StandaloneLink>
        <Heading id="waar" level={2}>Waar</Heading>
        <Paragraph>
          Het Amstelstation ligt in stadsdeel Oost, tussen de Wibautstraat en de Amstel. Het project loopt van het
          Julianaplein aan de noordkant tot de Spaklerweg aan de zuidkant.
        </Paragraph>
        <Paragraph>
          De werkzaamheden raken de buurten Weesperzijde, Omval en Amstelkwartier. Bewoners en ondernemers krijgen
          bericht voordat het werk in hun straat begint.
        </Paragraph>
        <Heading id="wanneer" level={2}>Wanneer</Heading>
        <Paragraph>
          De vernieuwing gebeurt in stappen, zodat het station open blijft. We beginnen aan de zuidkant en werken
          toe naar het Julianaplein. De laatste werkzaamheden ronden we naar verwachting in 2030 af.
        </Paragraph>
      </Grid.Cell>
      {/* A Progress List is a block of its own, so it takes its own Grid Cell and the row gap spaces it. */}
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
        {/*
         * A ProgressList shows a timeline. status="completed" marks a finished step, status="current"
         * the one in progress, and a step with no status is still to come. Substeps are nested by hand
         * in a ProgressList.Substeps; hasSubsteps only tells the CSS about them, so that it draws the
         * connecting lines correctly. collapsible gives every step its own fold button and decides what
         * opens first: completed steps start collapsed, all others expanded, so the finished years here
         * arrive folded. headingLevel is 3 because the list sits under the ‘Wanneer’ heading of level 2.
         */}
        <ProgressList collapsible headingLevel={3}>
          {/*
           * A Substep takes any content, so a month gets a level 4 Heading above its description. That is
           * one level below the step headings the list renders itself.
           */}
          <ProgressList.Step hasSubsteps heading="2024" status="completed">
            <ProgressList.Substeps>
              <ProgressList.Substep status="completed">
                <Heading level={4}>Maart</Heading>
                <Paragraph>Sloop van de fietsenstalling aan de Spaklerweg.</Paragraph>
              </ProgressList.Substep>
              <ProgressList.Substep status="completed">
                <Heading level={4}>Oktober</Heading>
                <Paragraph>Start bouw van de tijdelijke stationshal aan de zuidkant.</Paragraph>
              </ProgressList.Substep>
            </ProgressList.Substeps>
          </ProgressList.Step>
          <ProgressList.Step hasSubsteps heading="2025" status="completed">
            <ProgressList.Substeps>
              <ProgressList.Substep status="completed">
                <Heading level={4}>Januari</Heading>
                <Paragraph>Tijdelijke stationshal in gebruik genomen.</Paragraph>
              </ProgressList.Substep>
              <ProgressList.Substep status="completed">
                <Heading level={4}>September</Heading>
                <Paragraph>
                  Start vervanging van de riolering onder de <Link href="#">Amstelstationstraat</Link>.
                </Paragraph>
              </ProgressList.Substep>
            </ProgressList.Substeps>
          </ProgressList.Step>
          <ProgressList.Step hasSubsteps heading="2026" status="current">
            <ProgressList.Substeps>
              <ProgressList.Substep status="current">
                <Heading level={4}>Maart</Heading>
                <Paragraph>Start verbouwing van de bestaande stationshal.</Paragraph>
              </ProgressList.Substep>
              <ProgressList.Substep>
                <Heading level={4}>November</Heading>
                <Paragraph>De nieuwe perrontrappen gaan open voor reizigers.</Paragraph>
              </ProgressList.Substep>
            </ProgressList.Substeps>
          </ProgressList.Step>
          <ProgressList.Step hasSubsteps heading="2028">
            <ProgressList.Substeps>
              <ProgressList.Substep>
                <Heading level={4}>Voorjaar</Heading>
                <Paragraph>Oplevering van de fietsenstalling onder het Julianaplein.</Paragraph>
              </ProgressList.Substep>
            </ProgressList.Substeps>
          </ProgressList.Step>
          <ProgressList.Step hasSubsteps heading="2030">
            <ProgressList.Substeps>
              <ProgressList.Substep>
                <Heading level={4}>Najaar</Heading>
                <Paragraph>Het plein en de tweede ingang aan de zuidkant zijn klaar.</Paragraph>
              </ProgressList.Substep>
            </ProgressList.Substeps>
          </ProgressList.Step>
        </ProgressList>
      </Grid.Cell>
      {/*
       * These two Cells set no rowStart: the rows above them are taken, so they fall in underneath the
       * body on every grid, in source order.
       */}
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
        <Heading id="nieuws" level={2} size="level-3">Nieuws</Heading>
        <LinkList>
          <LinkList.Link href="#">Fietsenstalling Julianaplein opent in het voorjaar (14 juli 2026)</LinkList.Link>
          <LinkList.Link href="#">Bushaltes verplaatst naar de Spaklerweg (2 juni 2026)</LinkList.Link>
          <LinkList.Link href="#">Terugblik op de informatieavond van 21 mei (28 mei 2026)</LinkList.Link>
          {/* A bottom margin on the second to last link sets the closing link apart from the items above it. */}
          <LinkList.Link className="ams-mb-m" href="#">
            Wandschildering in de stationshal gerestaureerd (9 april 2026)
          </LinkList.Link>
          <LinkList.Link href="#">Bekijk al het nieuws over dit project</LinkList.Link>
        </LinkList>
      </Grid.Cell>
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
        <Heading id="werk-aan-de-weg" level={2} size="level-3">Werk aan de weg</Heading>
        <LinkList>
          <LinkList.Link href="#">Amstelstationstraat: afsluiting tot en met 12 september</LinkList.Link>
          <LinkList.Link href="#">Julianaplein: omleiding voor fietsers</LinkList.Link>
          <LinkList.Link className="ams-mb-m" href="#">
            Spaklerweg: nachtelijke afsluitingen
          </LinkList.Link>
          <LinkList.Link href="#">Bekijk alle wegwerkzaamheden in Oost</LinkList.Link>
        </LinkList>
      </Grid.Cell>
    </Grid>
    {/*
     * A Breakout lets an image overlap the Spotlight below it. The Cell with has="spotlight" stretches
     * over the gaps and margins around it, so only that band reaches the edges of the Page; the image
     * keeps to the grid. Both Cells need explicit rows, and so does everything inside the Spotlight:
     * an automatically placed cell avoids the rows the Spotlight already occupies.
     */}
    {/*
     * That stretch is a negative block margin of one x-large, so the band paints an x-large below the
     * last row. Without a paddingBottom to land in, it would cover the space the next Grid opens with
     * and leave its heading against the colour.
     */}
    <Breakout paddingBottom="x-large">
      <Breakout.Cell colSpan="all" has="spotlight" rowSpan={3} rowStart={2}>
        <Spotlight color="yellow" />
      </Breakout.Cell>
      {/*
       * A map of the project area is not decorative: a reader looks at it to see where the work is, so
       * it takes an alt. Name the subject and how far it reaches, and leave the rest to the ‘Waar’
       * section, which carries the same information in words.
       */}
      {/* On the narrow grid the image takes a single row, so it sits above the band rather than over it. */}
      <Breakout.Cell colSpan="all" has="figure" rowSpan={{ narrow: 1, medium: 2, wide: 2 }} rowStart={1}>
        <Image
          alt="Kaart van het stationsgebied met de locaties van de deelprojecten."
          src="https://picsum.photos/1440/810"
        />
      </Breakout.Cell>
      <Breakout.Cell
        className="ams-prose"
        colSpan={{ narrow: 4, medium: 6, wide: 7 }}
        colStart={{ narrow: 1, medium: 2, wide: 3 }}
        rowStart={{ narrow: 2, medium: 3, wide: 3 }}
      >
        <Heading id="deelprojecten" level={2}>Deelprojecten</Heading>
        <Paragraph>
          De vernieuwing bestaat uit deelprojecten die deels tegelijk lopen. Elk deelproject heeft een eigen
          planning en een eigen aanspreekpunt.
        </Paragraph>
      </Breakout.Cell>
      <Breakout.Cell
        className="ams-prose"
        colSpan={{ narrow: 4, medium: 4, wide: 5 }}
        colStart={{ narrow: 1, medium: 1, wide: 2 }}
        rowStart={{ narrow: 3, medium: 4, wide: 4 }}
      >
        <Heading level={3}>Station en perrons</Heading>
        <LinkList>
          <LinkList.Link color="contrast" href="#">
            Verbouwing van de stationshal
          </LinkList.Link>
          <LinkList.Link color="contrast" href="#">
            Nieuwe perrontrappen
          </LinkList.Link>
          <LinkList.Link color="contrast" href="#">
            Tweede ingang aan de zuidkant
          </LinkList.Link>
          <LinkList.Link color="contrast" href="#">
            Restauratie van de wandschildering
          </LinkList.Link>
          <LinkList.Link color="contrast" href="#">
            Toegankelijkheid van de perrons
          </LinkList.Link>
        </LinkList>
      </Breakout.Cell>
      <Breakout.Cell
        className="ams-prose"
        colSpan={{ narrow: 4, medium: 4, wide: 5 }}
        colStart={{ narrow: 1, medium: 5, wide: 7 }}
        rowStart={{ narrow: 4, medium: 4, wide: 4 }}
      >
        <Heading level={3}>Plein en omgeving</Heading>
        <LinkList>
          <LinkList.Link color="contrast" href="#">
            Herinrichting van het Julianaplein
          </LinkList.Link>
          <LinkList.Link color="contrast" href="#">
            Fietsenstalling onder het plein
          </LinkList.Link>
          <LinkList.Link color="contrast" href="#">
            Bus- en tramhaltes
          </LinkList.Link>
          <LinkList.Link color="contrast" href="#">
            Riolering Amstelstationstraat
          </LinkList.Link>
          <LinkList.Link color="contrast" href="#">
            Groen langs de Amstel
          </LinkList.Link>
        </LinkList>
      </Breakout.Cell>
    </Breakout>
    <Grid paddingVertical="x-large">
      {/*
       * One Cell holds all five link sections, so ams-prose spaces them against one another. Separate
       * Cells would take that space from the row gap, which is one value for the whole Grid.
       */}
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
        <Heading id="themas" level={2} size="level-3">Thema’s</Heading>
        <LinkList>
          <LinkList.Link href="#">Bereikbaarheid tijdens de werkzaamheden</LinkList.Link>
          <LinkList.Link href="#">Duurzaam en circulair bouwen</LinkList.Link>
          <LinkList.Link href="#">Groen en biodiversiteit</LinkList.Link>
          <LinkList.Link className="ams-mb-m" href="#">
            Toegankelijkheid van het station
          </LinkList.Link>
          <LinkList.Link href="#">Bekijk alle thema’s</LinkList.Link>
        </LinkList>
        <Heading id="documenten" level={2} size="level-3">Documenten</Heading>
        <LinkList>
          <LinkList.Link href="#">Nota van uitgangspunten Amstelstation (pdf, 2,4 MB)</LinkList.Link>
          <LinkList.Link href="#">Voorlopig ontwerp Julianaplein (pdf, 8,1 MB)</LinkList.Link>
          <LinkList.Link className="ams-mb-m" href="#">
            Verkeersbesluit Amstelstationstraat (pdf, 310 kB)
          </LinkList.Link>
          <LinkList.Link href="#">Bekijk alle documenten</LinkList.Link>
        </LinkList>
        <Heading id="video" level={2} size="level-3">Video</Heading>
        {/*
         * A Paragraph between the heading and the image: the vertical space guide documents no value for
         * a heading directly above an image, which is a sign to introduce the image in words first.
         */}
        <Paragraph>In deze animatie ziet u hoe het station en het plein er na de vernieuwing uitzien.</Paragraph>
        {/* This image carries no information the text does not, so it takes an empty alt. */}
        <Image alt="" src="https://picsum.photos/1280/720" />
        <StandaloneLink href="#">Bekijk meer video’s over dit project</StandaloneLink>
        <Heading id="meer-informatie" level={2} size="level-3">Meer informatie</Heading>
        <LinkList>
          <LinkList.Link href="#">Amstelkwartier: woningbouw en openbare ruimte</LinkList.Link>
          <LinkList.Link href="#">Wibautstraat: vernieuwing van de rijbanen</LinkList.Link>
          <LinkList.Link href="#">Fietsparkeren in Amsterdam</LinkList.Link>
          <LinkList.Link href="#">Meer projecten in Oost</LinkList.Link>
        </LinkList>
        <Heading id="blijf-op-de-hoogte" level={2} size="level-3">Blijf op de hoogte</Heading>
        <LinkList>
          <LinkList.Link href="#">Nieuwsbrief vernieuwing Amstelstation</LinkList.Link>
          <LinkList.Link href="#">Informatieavonden en inloopspreekuren</LinkList.Link>
          <LinkList.Link href="#">Instagram: Amstelstation</LinkList.Link>
        </LinkList>
      </Grid.Cell>
    </Grid>
    {/*
     * The highlight colours have no prescribed meaning, so this band takes the default purple rather
     * than repeating the yellow above. Purple is a dark background, so everything in it takes
     * color="inverse".
     */}
    <Spotlight>
      {/*
       * The row gap would put an x-large below the heading, where the guidance asks for a small at this size.
       * So the Grid gives up its gap, the heading sets the space itself, and the Subgrid puts the gap back
       * between the Cells.
       */}
      <Grid gapVertical="none" paddingVertical="x-large">
        <Grid.Cell span="all">
          {/*
           * The Page Footer heads its own contact block ‘Contact’ as well, so someone browsing the page
           * by heading meets the word twice. The hidden phrase tells the two apart without repeating
           * ‘over dit project’ on screen, where the surrounding page already says so.
           */}
          <Heading className="ams-mb-s" color="inverse" level={2}>
            Contact<span className="ams-visually-hidden"> over dit project</span>
          </Heading>
        </Grid.Cell>
        <Grid.Subgrid gapVertical="x-large" span="all">
          <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
            <Paragraph color="inverse">
              Hilde Verkerk
              <br />
              Omgevingsmanager
            </Paragraph>
            {/* A Link List of contact details: an icon per link replaces the chevron the list draws by default. */}
            <LinkList>
              <LinkList.Link color="inverse" href="mailto:h.verkerk@amsterdam.nl" icon={<MailIcon />}>
                h.verkerk@amsterdam.nl
              </LinkList.Link>
              <LinkList.Link color="inverse" href="tel:+31618342210" icon={<PhoneIcon />}>
                06 1834 2210
              </LinkList.Link>
            </LinkList>
          </Grid.Cell>
          <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
            <Paragraph color="inverse">
              Joris Bramer
              <br />
              Communicatieadviseur
            </Paragraph>
            <LinkList>
              <LinkList.Link color="inverse" href="mailto:j.bramer@amsterdam.nl" icon={<MailIcon />}>
                j.bramer@amsterdam.nl
              </LinkList.Link>
              <LinkList.Link color="inverse" href="tel:+31611294478" icon={<PhoneIcon />}>
                06 1129 4478
              </LinkList.Link>
            </LinkList>
          </Grid.Cell>
        </Grid.Subgrid>
      </Grid>
    </Spotlight>
    {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
    <Grid paddingBottom="2x-large" paddingTop="x-large">
      <Grid.Cell span="all">
        <Image
          alt="Kaart van het projectgebied, van het Julianaplein tot de Spaklerweg."
          src="https://picsum.photos/1440/810"
        />
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
            <Breadcrumb.Link href="#">Bouwprojecten en verkeersprojecten</Breadcrumb.Link>
            <Breadcrumb.Link href="#">Oost</Breadcrumb.Link>
          </Breadcrumb>
        </Grid.Cell>
      </Grid>
      {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
      {/*
       * The Spotlight bands below carry the project’s own content rather than supporting content, so they
       * sit inside <main>. That makes <main> the wrapper around several Grids instead of a Grid itself.
       */}
      <main id="inhoud">
        {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
        <Grid paddingBottom="x-large">
          {/* ams-prose sets the vertical rhythm between the elements of this Content Header. */}
          <Grid.Cell
            className="ams-prose"
            span={{ narrow: 4, medium: 7, wide: 9 }}
            start={{ narrow: 1, medium: 1, wide: 2 }}
          >
            <Heading level={1}>Amstelstation: vernieuwing van het station en het stationsplein</Heading>
            <Paragraph size="large">
              Het Amstelstation en het plein ervoor worden de komende jaren vernieuwd. Het station krijgt een ruimere
              hal en een tweede ingang aan de zuidkant. Reizigers houden tijdens de werkzaamheden toegang tot de trein,
              de metro en de tram.
            </Paragraph>
          </Grid.Cell>
          {/* The slider spans the full grid width, where the title above it keeps to the narrower header cell. */}
          <Grid.Cell span="all">
            {/*
             * ImageSlider takes an array of images. Each entry accepts the props of an Image plus an
             * optional caption; only alt is required.
             */}
            {/* controls adds the previous and next buttons. The thumbnails below render either way. */}
            <ImageSlider controls images={images} />
          </Grid.Cell>
        </Grid>
        {/*
         * A Spotlight for news that matters only for a while. Yellow is a light highlight colour, so the
         * heading and the paragraph keep their default colour and only the link takes color="contrast".
         */}
        <Spotlight color="yellow">
          <Grid paddingVertical="x-large">
            <Grid.Cell
              className="ams-prose"
              span={{ narrow: 4, medium: 6, wide: 7 }}
              start={{ narrow: 1, medium: 2, wide: 3 }}
            >
              <Heading level={2}>Amstelstationstraat afgesloten tot en met 12 september</Heading>
              <Paragraph>
                Tot en met 12 september vervangen we de riolering onder de Amstelstationstraat. Doorgaand autoverkeer
                rijdt om via de Wibautstraat. De ingang van het station aan de kant van het Julianaplein blijft de hele
                periode open.
              </Paragraph>
              <StandaloneLink color="contrast" href="#">
                Bekijk de omleidingsroutes
              </StandaloneLink>
            </Grid.Cell>
          </Grid>
        </Spotlight>
        {/*
         * The Table of Contents comes first in source, so it precedes the body in the reading and tab order.
         * gridRowStart then puts it beside the body on the wide grid rather than above it: Grid.Cell offers
         * rowSpan but no rowStart, and without a row of its own the cell joins the automatic placement, where
         * a body Cell starting at an earlier column can no longer share its row. No other cell needs one.
         */}
        <Grid paddingVertical="x-large">
          <Grid.Cell
            span={{ narrow: 4, medium: 8, wide: 3 }}
            start={{ narrow: 1, medium: 1, wide: 10 }}
            style={{ gridRowStart: 1 }}
          >
            {/* The Table of Contents renders its own heading, at the size of a level 3 Heading. */}
            <TableOfContents heading="Op deze pagina">
              <TableOfContents.List>
                <TableOfContents.Link href="#wat" label="Wat gaan we doen" />
                <TableOfContents.Link href="#waar" label="Waar" />
                <TableOfContents.Link href="#wanneer" label="Wanneer" />
                <TableOfContents.Link href="#nieuws" label="Nieuws" />
                <TableOfContents.Link href="#werk-aan-de-weg" label="Werk aan de weg" />
                <TableOfContents.Link href="#deelprojecten" label="Deelprojecten" />
                <TableOfContents.Link href="#themas" label="Thema’s" />
                <TableOfContents.Link href="#documenten" label="Documenten" />
                <TableOfContents.Link href="#video" label="Video" />
                <TableOfContents.Link href="#meer-informatie" label="Meer informatie" />
                <TableOfContents.Link href="#blijf-op-de-hoogte" label="Blijf op de hoogte" />
              </TableOfContents.List>
            </TableOfContents>
          </Grid.Cell>
          <Grid.Cell
            className="ams-prose"
            span={{ narrow: 4, medium: 6, wide: 7 }}
            start={{ narrow: 1, medium: 2, wide: 3 }}
          >
            {/* Every section heading carries the id its Table of Contents entry points at. */}
            <Heading id="wat" level={2}>
              Wat gaan we doen
            </Heading>
            <Paragraph>
              De stationshal van het Amstelstation is te klein voor het aantal reizigers dat er dagelijks doorheen
              loopt. We vergroten de hal, verbreden de perrontrappen en maken een tweede ingang aan de zuidkant van het
              station.
            </Paragraph>
            <Paragraph>
              Op het Julianaplein komt meer ruimte voor voetgangers en fietsers. De taxistandplaats en de bushaltes
              verhuizen naar de oostkant van het plein. Daaronder komt een fietsenstalling met 7.000 plekken.
            </Paragraph>
            <Paragraph>
              Het stationsgebouw uit 1939 blijft behouden. De gevels en de grote hal met de wandschildering worden
              gerestaureerd.
            </Paragraph>
            <StandaloneLink href="#">Lees meer over het ontwerp van het nieuwe station</StandaloneLink>
            <Heading id="waar" level={2}>
              Waar
            </Heading>
            <Paragraph>
              Het Amstelstation ligt in stadsdeel Oost, tussen de Wibautstraat en de Amstel. Het project loopt van het
              Julianaplein aan de noordkant tot de Spaklerweg aan de zuidkant.
            </Paragraph>
            <Paragraph>
              De werkzaamheden raken de buurten Weesperzijde, Omval en Amstelkwartier. Bewoners en ondernemers krijgen
              bericht voordat het werk in hun straat begint.
            </Paragraph>
            <Heading id="wanneer" level={2}>
              Wanneer
            </Heading>
            <Paragraph>
              De vernieuwing gebeurt in stappen, zodat het station open blijft. We beginnen aan de zuidkant en werken
              toe naar het Julianaplein. De laatste werkzaamheden ronden we naar verwachting in 2030 af.
            </Paragraph>
          </Grid.Cell>
          {/* A Progress List is a block of its own, so it takes its own Grid Cell and the row gap spaces it. */}
          <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
            {/*
             * A ProgressList shows a timeline. status="completed" marks a finished step, status="current"
             * the one in progress, and a step with no status is still to come. Substeps are nested by hand
             * in a ProgressList.Substeps; hasSubsteps only tells the CSS about them, so that it draws the
             * connecting lines correctly. collapsible gives every step its own fold button and decides what
             * opens first: completed steps start collapsed, all others expanded, so the finished years here
             * arrive folded. headingLevel is 3 because the list sits under the ‘Wanneer’ heading of level 2.
             */}
            <ProgressList collapsible headingLevel={3}>
              {/*
               * A Substep takes any content, so a month gets a level 4 Heading above its description. That is
               * one level below the step headings the list renders itself.
               */}
              <ProgressList.Step hasSubsteps heading="2024" status="completed">
                <ProgressList.Substeps>
                  <ProgressList.Substep status="completed">
                    <Heading level={4}>Maart</Heading>
                    <Paragraph>Sloop van de fietsenstalling aan de Spaklerweg.</Paragraph>
                  </ProgressList.Substep>
                  <ProgressList.Substep status="completed">
                    <Heading level={4}>Oktober</Heading>
                    <Paragraph>Start bouw van de tijdelijke stationshal aan de zuidkant.</Paragraph>
                  </ProgressList.Substep>
                </ProgressList.Substeps>
              </ProgressList.Step>
              <ProgressList.Step hasSubsteps heading="2025" status="completed">
                <ProgressList.Substeps>
                  <ProgressList.Substep status="completed">
                    <Heading level={4}>Januari</Heading>
                    <Paragraph>Tijdelijke stationshal in gebruik genomen.</Paragraph>
                  </ProgressList.Substep>
                  <ProgressList.Substep status="completed">
                    <Heading level={4}>September</Heading>
                    <Paragraph>
                      Start vervanging van de riolering onder de <Link href="#">Amstelstationstraat</Link>.
                    </Paragraph>
                  </ProgressList.Substep>
                </ProgressList.Substeps>
              </ProgressList.Step>
              <ProgressList.Step hasSubsteps heading="2026" status="current">
                <ProgressList.Substeps>
                  <ProgressList.Substep status="current">
                    <Heading level={4}>Maart</Heading>
                    <Paragraph>Start verbouwing van de bestaande stationshal.</Paragraph>
                  </ProgressList.Substep>
                  <ProgressList.Substep>
                    <Heading level={4}>November</Heading>
                    <Paragraph>De nieuwe perrontrappen gaan open voor reizigers.</Paragraph>
                  </ProgressList.Substep>
                </ProgressList.Substeps>
              </ProgressList.Step>
              <ProgressList.Step hasSubsteps heading="2028">
                <ProgressList.Substeps>
                  <ProgressList.Substep>
                    <Heading level={4}>Voorjaar</Heading>
                    <Paragraph>Oplevering van de fietsenstalling onder het Julianaplein.</Paragraph>
                  </ProgressList.Substep>
                </ProgressList.Substeps>
              </ProgressList.Step>
              <ProgressList.Step hasSubsteps heading="2030">
                <ProgressList.Substeps>
                  <ProgressList.Substep>
                    <Heading level={4}>Najaar</Heading>
                    <Paragraph>Het plein en de tweede ingang aan de zuidkant zijn klaar.</Paragraph>
                  </ProgressList.Substep>
                </ProgressList.Substeps>
              </ProgressList.Step>
            </ProgressList>
          </Grid.Cell>
          {/*
           * These two Cells set no rowStart: the rows above them are taken, so they fall in underneath the
           * body on every grid, in source order.
           */}
          <Grid.Cell
            className="ams-prose"
            span={{ narrow: 4, medium: 6, wide: 7 }}
            start={{ narrow: 1, medium: 2, wide: 3 }}
          >
            <Heading id="nieuws" level={2} size="level-3">
              Nieuws
            </Heading>
            <LinkList>
              <LinkList.Link href="#">Fietsenstalling Julianaplein opent in het voorjaar (14 juli 2026)</LinkList.Link>
              <LinkList.Link href="#">Bushaltes verplaatst naar de Spaklerweg (2 juni 2026)</LinkList.Link>
              <LinkList.Link href="#">Terugblik op de informatieavond van 21 mei (28 mei 2026)</LinkList.Link>
              {/* A bottom margin on the second to last link sets the closing link apart from the items above it. */}
              <LinkList.Link className="ams-mb-m" href="#">
                Wandschildering in de stationshal gerestaureerd (9 april 2026)
              </LinkList.Link>
              <LinkList.Link href="#">Bekijk al het nieuws over dit project</LinkList.Link>
            </LinkList>
          </Grid.Cell>
          <Grid.Cell
            className="ams-prose"
            span={{ narrow: 4, medium: 6, wide: 7 }}
            start={{ narrow: 1, medium: 2, wide: 3 }}
          >
            <Heading id="werk-aan-de-weg" level={2} size="level-3">
              Werk aan de weg
            </Heading>
            <LinkList>
              <LinkList.Link href="#">Amstelstationstraat: afsluiting tot en met 12 september</LinkList.Link>
              <LinkList.Link href="#">Julianaplein: omleiding voor fietsers</LinkList.Link>
              <LinkList.Link className="ams-mb-m" href="#">
                Spaklerweg: nachtelijke afsluitingen
              </LinkList.Link>
              <LinkList.Link href="#">Bekijk alle wegwerkzaamheden in Oost</LinkList.Link>
            </LinkList>
          </Grid.Cell>
        </Grid>
        {/*
         * A Breakout lets an image overlap the Spotlight below it. The Cell with has="spotlight" stretches
         * over the gaps and margins around it, so only that band reaches the edges of the Page; the image
         * keeps to the grid. Both Cells need explicit rows, and so does everything inside the Spotlight:
         * an automatically placed cell avoids the rows the Spotlight already occupies.
         */}
        {/*
         * That stretch is a negative block margin of one x-large, so the band paints an x-large below the
         * last row. Without a paddingBottom to land in, it would cover the space the next Grid opens with
         * and leave its heading against the colour.
         */}
        <Breakout paddingBottom="x-large">
          <Breakout.Cell colSpan="all" has="spotlight" rowSpan={3} rowStart={2}>
            <Spotlight color="yellow" />
          </Breakout.Cell>
          {/*
           * A map of the project area is not decorative: a reader looks at it to see where the work is, so
           * it takes an alt. Name the subject and how far it reaches, and leave the rest to the ‘Waar’
           * section, which carries the same information in words.
           */}
          {/* On the narrow grid the image takes a single row, so it sits above the band rather than over it. */}
          <Breakout.Cell colSpan="all" has="figure" rowSpan={{ narrow: 1, medium: 2, wide: 2 }} rowStart={1}>
            <Image
              alt="Kaart van het stationsgebied met de locaties van de deelprojecten."
              src={exampleImageSource(1440, 810, 2)}
            />
          </Breakout.Cell>
          <Breakout.Cell
            className="ams-prose"
            colSpan={{ narrow: 4, medium: 6, wide: 7 }}
            colStart={{ narrow: 1, medium: 2, wide: 3 }}
            rowStart={{ narrow: 2, medium: 3, wide: 3 }}
          >
            <Heading id="deelprojecten" level={2}>
              Deelprojecten
            </Heading>
            <Paragraph>
              De vernieuwing bestaat uit deelprojecten die deels tegelijk lopen. Elk deelproject heeft een eigen
              planning en een eigen aanspreekpunt.
            </Paragraph>
          </Breakout.Cell>
          <Breakout.Cell
            className="ams-prose"
            colSpan={{ narrow: 4, medium: 4, wide: 5 }}
            colStart={{ narrow: 1, medium: 1, wide: 2 }}
            rowStart={{ narrow: 3, medium: 4, wide: 4 }}
          >
            <Heading level={3}>Station en perrons</Heading>
            <LinkList>
              <LinkList.Link color="contrast" href="#">
                Verbouwing van de stationshal
              </LinkList.Link>
              <LinkList.Link color="contrast" href="#">
                Nieuwe perrontrappen
              </LinkList.Link>
              <LinkList.Link color="contrast" href="#">
                Tweede ingang aan de zuidkant
              </LinkList.Link>
              <LinkList.Link color="contrast" href="#">
                Restauratie van de wandschildering
              </LinkList.Link>
              <LinkList.Link color="contrast" href="#">
                Toegankelijkheid van de perrons
              </LinkList.Link>
            </LinkList>
          </Breakout.Cell>
          <Breakout.Cell
            className="ams-prose"
            colSpan={{ narrow: 4, medium: 4, wide: 5 }}
            colStart={{ narrow: 1, medium: 5, wide: 7 }}
            rowStart={{ narrow: 4, medium: 4, wide: 4 }}
          >
            <Heading level={3}>Plein en omgeving</Heading>
            <LinkList>
              <LinkList.Link color="contrast" href="#">
                Herinrichting van het Julianaplein
              </LinkList.Link>
              <LinkList.Link color="contrast" href="#">
                Fietsenstalling onder het plein
              </LinkList.Link>
              <LinkList.Link color="contrast" href="#">
                Bus- en tramhaltes
              </LinkList.Link>
              <LinkList.Link color="contrast" href="#">
                Riolering Amstelstationstraat
              </LinkList.Link>
              <LinkList.Link color="contrast" href="#">
                Groen langs de Amstel
              </LinkList.Link>
            </LinkList>
          </Breakout.Cell>
        </Breakout>
        <Grid paddingVertical="x-large">
          {/*
           * One Cell holds all five link sections, so ams-prose spaces them against one another. Separate
           * Cells would take that space from the row gap, which is one value for the whole Grid.
           */}
          <Grid.Cell
            className="ams-prose"
            span={{ narrow: 4, medium: 6, wide: 7 }}
            start={{ narrow: 1, medium: 2, wide: 3 }}
          >
            <Heading id="themas" level={2} size="level-3">
              Thema’s
            </Heading>
            <LinkList>
              <LinkList.Link href="#">Bereikbaarheid tijdens de werkzaamheden</LinkList.Link>
              <LinkList.Link href="#">Duurzaam en circulair bouwen</LinkList.Link>
              <LinkList.Link href="#">Groen en biodiversiteit</LinkList.Link>
              <LinkList.Link className="ams-mb-m" href="#">
                Toegankelijkheid van het station
              </LinkList.Link>
              <LinkList.Link href="#">Bekijk alle thema’s</LinkList.Link>
            </LinkList>
            <Heading id="documenten" level={2} size="level-3">
              Documenten
            </Heading>
            <LinkList>
              <LinkList.Link href="#">Nota van uitgangspunten Amstelstation (pdf, 2,4 MB)</LinkList.Link>
              <LinkList.Link href="#">Voorlopig ontwerp Julianaplein (pdf, 8,1 MB)</LinkList.Link>
              <LinkList.Link className="ams-mb-m" href="#">
                Verkeersbesluit Amstelstationstraat (pdf, 310 kB)
              </LinkList.Link>
              <LinkList.Link href="#">Bekijk alle documenten</LinkList.Link>
            </LinkList>
            <Heading id="video" level={2} size="level-3">
              Video
            </Heading>
            {/*
             * A Paragraph between the heading and the image: the vertical space guide documents no value for
             * a heading directly above an image, which is a sign to introduce the image in words first.
             */}
            <Paragraph>In deze animatie ziet u hoe het station en het plein er na de vernieuwing uitzien.</Paragraph>
            {/* This image carries no information the text does not, so it takes an empty alt. */}
            <Image alt="" src={exampleImageSource(1280, 720, 3)} />
            <StandaloneLink href="#">Bekijk meer video’s over dit project</StandaloneLink>
            <Heading id="meer-informatie" level={2} size="level-3">
              Meer informatie
            </Heading>
            <LinkList>
              <LinkList.Link href="#">Amstelkwartier: woningbouw en openbare ruimte</LinkList.Link>
              <LinkList.Link href="#">Wibautstraat: vernieuwing van de rijbanen</LinkList.Link>
              <LinkList.Link href="#">Fietsparkeren in Amsterdam</LinkList.Link>
              <LinkList.Link href="#">Meer projecten in Oost</LinkList.Link>
            </LinkList>
            <Heading id="blijf-op-de-hoogte" level={2} size="level-3">
              Blijf op de hoogte
            </Heading>
            <LinkList>
              <LinkList.Link href="#">Nieuwsbrief vernieuwing Amstelstation</LinkList.Link>
              <LinkList.Link href="#">Informatieavonden en inloopspreekuren</LinkList.Link>
              <LinkList.Link href="#">Instagram: Amstelstation</LinkList.Link>
            </LinkList>
          </Grid.Cell>
        </Grid>
        {/*
         * The highlight colours have no prescribed meaning, so this band takes the default purple rather
         * than repeating the yellow above. Purple is a dark background, so everything in it takes
         * color="inverse".
         */}
        <Spotlight>
          {/*
           * The row gap would put an x-large below the heading, where the guidance asks for a small at this size.
           * So the Grid gives up its gap, the heading sets the space itself, and the Subgrid puts the gap back
           * between the Cells.
           */}
          <Grid gapVertical="none" paddingVertical="x-large">
            <Grid.Cell span="all">
              {/*
               * The Page Footer heads its own contact block ‘Contact’ as well, so someone browsing the page
               * by heading meets the word twice. The hidden phrase tells the two apart without repeating
               * ‘over dit project’ on screen, where the surrounding page already says so.
               */}
              <Heading className="ams-mb-s" color="inverse" level={2}>
                Contact<span className="ams-visually-hidden"> over dit project</span>
              </Heading>
            </Grid.Cell>
            <Grid.Subgrid gapVertical="x-large" span="all">
              <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
                <Paragraph color="inverse">
                  Hilde Verkerk
                  <br />
                  Omgevingsmanager
                </Paragraph>
                {/* A Link List of contact details: an icon per link replaces the chevron the list draws by default. */}
                <LinkList>
                  <LinkList.Link color="inverse" href="mailto:h.verkerk@amsterdam.nl" icon={<MailIcon />}>
                    h.verkerk@amsterdam.nl
                  </LinkList.Link>
                  <LinkList.Link color="inverse" href="tel:+31618342210" icon={<PhoneIcon />}>
                    06 1834 2210
                  </LinkList.Link>
                </LinkList>
              </Grid.Cell>
              <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
                <Paragraph color="inverse">
                  Joris Bramer
                  <br />
                  Communicatieadviseur
                </Paragraph>
                <LinkList>
                  <LinkList.Link color="inverse" href="mailto:j.bramer@amsterdam.nl" icon={<MailIcon />}>
                    j.bramer@amsterdam.nl
                  </LinkList.Link>
                  <LinkList.Link color="inverse" href="tel:+31611294478" icon={<PhoneIcon />}>
                    06 1129 4478
                  </LinkList.Link>
                </LinkList>
              </Grid.Cell>
            </Grid.Subgrid>
          </Grid>
        </Spotlight>
        {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
        <Grid paddingBottom="2x-large" paddingTop="x-large">
          <Grid.Cell span="all">
            <Image
              alt="Kaart van het projectgebied, van het Julianaplein tot de Spaklerweg."
              src={exampleImageSource(1440, 810, 4)}
            />
          </Grid.Cell>
        </Grid>
      </main>
    </>
  ),
}
