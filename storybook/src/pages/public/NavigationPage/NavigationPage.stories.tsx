/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { GridColumnNumbers } from '@amsterdam/design-system-react'
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
  SearchField,
  Spotlight,
  StandaloneLink,
  UnorderedList,
} from '@amsterdam/design-system-react'

import {
  exampleHeading,
  exampleImageSource,
  exampleParagraph,
  exampleStandaloneLink,
} from '#storybook/_common/exampleContent'

import { commonMeta } from '../common/commonMeta'
import { burgerzakenLinks, parkerenLinks, persons, topTaskLinks } from './data'

const meta = {
  ...commonMeta,
  title: 'Pages/Public/Navigation Page',
} satisfies Meta

export default meta

const getLinks = (links: string[]) =>
  links.length === 1 ? (
    <StandaloneLink href="#">{links[0]}</StandaloneLink>
  ) : (
    <LinkList>
      {links.map((link) => (
        <LinkList.Link href="#" key={link}>
          {link}
        </LinkList.Link>
      ))}
    </LinkList>
  )

export const Default: StoryObj = {
  parameters: {
    docs: {
      source: {
        // The Code Panel regenerates a `render` story’s source from the rendered tree, which drops JSX
        // comments. Provide the source by hand so the guidance below stays visible in the panel.
        code: `// getLinks shows a single StandaloneLink when a group has one link, or a LinkList when it has several.

<>
  {/* Keep the breadcrumb in its own Grid above <main>, so it sits outside the main content region. */}
  <Grid paddingTop="large">
    <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
      <Breadcrumb>
        <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
      </Breadcrumb>
    </Grid.Cell>
  </Grid>
  {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
  {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
  <Grid as="main" id="inhoud" paddingBottom="2x-large">
    <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
      <Heading className="ams-mb-m" level={1}>Burgerzaken</Heading>
      <Paragraph size="large">
        Heeft u een paspoort, rijbewijs of uittreksel nodig? Of wilt u een verhuizing doorgeven of een
        geboorte aangeven? Op deze pagina vindt u alle informatie en regelzaken rondom Burgerzaken.
      </Paragraph>
    </Grid.Cell>
    {/* start pins the even-indexed cells to the content column; odd-indexed cells fall in beside them. */}
    {burgerzakenLinks.map(({ heading, links }, index) => (
      <Grid.Cell
        key={heading}
        span={{ narrow: 4, medium: 4, wide: 5 }}
        start={index % 2 ? undefined : { narrow: 1, medium: 1, wide: 2 }}
      >
        <Heading className="ams-mb-s" level={2} size="level-3">{heading}</Heading>
        {getLinks(links)}
      </Grid.Cell>
    ))}
  </Grid>
</>`,
        language: 'tsx',
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: (args) => (
    // getLinks shows a single StandaloneLink when a group has one link, or a LinkList when it has several.
    <>
      {/* Keep the breadcrumb in its own Grid above <main>, so it sits outside the main content region. */}
      <Grid paddingTop="large">
        <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
          <Breadcrumb>
            <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
          </Breadcrumb>
        </Grid.Cell>
      </Grid>
      {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
      {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
      <Grid as="main" id="inhoud" paddingBottom="2x-large">
        <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
          <Heading className="ams-mb-m" level={1}>
            Burgerzaken
          </Heading>
          <Paragraph size="large">
            Heeft u een paspoort, rijbewijs of uittreksel nodig? Of wilt u een verhuizing doorgeven of een geboorte
            aangeven? Op deze pagina vindt u alle informatie en regelzaken rondom Burgerzaken.
          </Paragraph>
        </Grid.Cell>
        {/* start pins the even-indexed cells to the content column; odd-indexed cells fall in beside them. */}
        {burgerzakenLinks.map(({ heading, links }, index) => (
          <Grid.Cell
            key={heading}
            span={{ narrow: 4, medium: 4, wide: 5 }}
            start={index % 2 ? undefined : { narrow: 1, medium: 1, wide: 2 }}
          >
            <Heading className="ams-mb-s" level={2} size="level-3">
              {heading}
            </Heading>
            {getLinks(links)}
          </Grid.Cell>
        ))}
      </Grid>
    </>
  ),
}

export const WithTopTasks: StoryObj = {
  parameters: {
    docs: {
      source: {
        // The Code Panel regenerates a `render` story’s source from the rendered tree, which drops JSX
        // comments. Provide the source by hand so the guidance below stays visible in the panel.
        code: `// getLinks shows a single StandaloneLink when a group has one link, or a LinkList when it has several.

<>
  {/* Keep the breadcrumb in its own Grid above <main>, so it sits outside the main content region. */}
  <Grid paddingTop="large">
    <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
      <Breadcrumb>
        <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
      </Breadcrumb>
    </Grid.Cell>
  </Grid>
  {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
  {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
  <Grid as="main" id="inhoud" paddingBottom="2x-large">
    <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
      <Heading className="ams-mb-m" level={1}>Leefomgeving</Heading>
    </Grid.Cell>
    {/* The two most important tasks get a full Card each; the groups below are plain heading + links. */}
    <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
      <Card>
        <Card.Heading level={2}>
          <Card.Link href="/">Doe een melding</Card.Link>
        </Card.Heading>
        <Paragraph>
          Meld overlast van geluid of afval op straat. U kunt ook kapotte dingen melden of iets dat we
          moeten opruimen.
        </Paragraph>
      </Card>
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }}>
      <Card>
        <Card.Heading level={2}>
          <Card.Link href="/">Kondig een demonstratie of manifestatie aan</Card.Link>
        </Card.Heading>
        <Paragraph>Een demonstratie of manifestatie meldt u vooraf bij de gemeente.</Paragraph>
      </Card>
    </Grid.Cell>
    {/* start pins the even-indexed cells to the content column; odd-indexed cells fall in beside them. */}
    {topTaskLinks.map(({ heading, links }, index) => (
      <Grid.Cell
        key={heading}
        span={{ narrow: 4, medium: 4, wide: 5 }}
        start={index % 2 ? undefined : { narrow: 1, medium: 1, wide: 2 }}
      >
        <Heading className="ams-mb-s" level={2} size="level-3">{heading}</Heading>
        {getLinks(links)}
      </Grid.Cell>
    ))}
  </Grid>
</>`,
        language: 'tsx',
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: (args) => (
    // getLinks shows a single StandaloneLink when a group has one link, or a LinkList when it has several.
    <>
      {/* Keep the breadcrumb in its own Grid above <main>, so it sits outside the main content region. */}
      <Grid paddingTop="large">
        <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
          <Breadcrumb>
            <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
          </Breadcrumb>
        </Grid.Cell>
      </Grid>
      {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
      {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
      <Grid as="main" id="inhoud" paddingBottom="2x-large">
        <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
          <Heading className="ams-mb-m" level={1}>
            Leefomgeving
          </Heading>
        </Grid.Cell>
        {/* The two most important tasks get a full Card each; the groups below are plain heading + links. */}
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
          <Card>
            <Card.Heading level={2}>
              <Card.Link href="/">Doe een melding</Card.Link>
            </Card.Heading>
            <Paragraph>
              Meld overlast van geluid of afval op straat. U kunt ook kapotte dingen melden of iets dat we moeten
              opruimen.
            </Paragraph>
          </Card>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }}>
          <Card>
            <Card.Heading level={2}>
              <Card.Link href="/">Kondig een demonstratie of manifestatie aan</Card.Link>
            </Card.Heading>
            <Paragraph>Een demonstratie of manifestatie meldt u vooraf bij de gemeente.</Paragraph>
          </Card>
        </Grid.Cell>
        {/* start pins the even-indexed cells to the content column; odd-indexed cells fall in beside them. */}
        {topTaskLinks.map(({ heading, links }, index) => (
          <Grid.Cell
            key={heading}
            span={{ narrow: 4, medium: 4, wide: 5 }}
            start={index % 2 ? undefined : { narrow: 1, medium: 1, wide: 2 }}
          >
            <Heading className="ams-mb-s" level={2} size="level-3">
              {heading}
            </Heading>
            {getLinks(links)}
          </Grid.Cell>
        ))}
      </Grid>
    </>
  ),
}

export const WithInteractiveElement: StoryObj = {
  parameters: {
    docs: {
      source: {
        // The Code Panel regenerates a `render` story’s source from the rendered tree, which drops JSX
        // comments. Provide the source by hand so the guidance below stays visible in the panel.
        code: `// getLinks shows a single StandaloneLink when a group has one link, or a LinkList when it has several.

<>
  {/* Keep the breadcrumb in its own Grid above <main>, so it sits outside the main content region. */}
  <Grid paddingTop="large">
    <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
      <Breadcrumb>
        <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
      </Breadcrumb>
    </Grid.Cell>
  </Grid>
  {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
  <main id="inhoud">
    <Grid paddingBottom="x-large">
      <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading className="ams-mb-m" level={1}>Parkeren</Heading>
        <Paragraph className="ams-mb-m" size="large">
          Vind informatie over parkeervergunningen, parkeertarieven en betaald parkeren in Amsterdam.
        </Paragraph>
      </Grid.Cell>
      {/* start pins the even-indexed cells to the content column; odd-indexed cells fall in beside them. */}
      {parkerenLinks.map(({ heading, links }, index) => (
        <Grid.Cell
          key={heading}
          span={{ narrow: 4, medium: 4, wide: 5 }}
          start={index % 2 ? undefined : { narrow: 1, medium: 1, wide: 2 }}
        >
          <Heading className="ams-mb-s" level={2} size="level-3">{heading}</Heading>
          {getLinks(links)}
        </Grid.Cell>
      ))}
    </Grid>
    {/* The paddings either side of the Spotlight add up on purpose: the coloured band separates them. */}
    <Spotlight>
      <Grid paddingVertical="x-large">
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
          {/* On the dark Spotlight, color="inverse" switches the heading, text, and links to their light variant. */}
          <Heading className="ams-mb-m" color="inverse" level={2} size="level-3">Parkeertarieven</Heading>
          {/* An interactive element in the page: a search field. */}
          <SearchField className="ams-mb-m">
            <SearchField.Input label="Zoek op adres" placeholder="Zoek op adres" />
            <SearchField.Button />
          </SearchField>
          <LinkList>
            <LinkList.Link color="inverse" href="#">Tarieven stadsgebied Weesp</LinkList.Link>
            <LinkList.Link color="inverse" href="#">Parkeren op feestdagen</LinkList.Link>
          </LinkList>
        </Grid.Cell>
      </Grid>
    </Spotlight>
    {/* A last section that is not a Grid takes ams-mb-2xl instead of a Grid’s paddingBottom. */}
    <Image alt="" aspectRatio="16:9" className="ams-mb-2xl" src="https://picsum.photos/id/133/1440/810" />
  </main>
</>`,
        language: 'tsx',
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: (args) => (
    // getLinks shows a single StandaloneLink when a group has one link, or a LinkList when it has several.
    <>
      {/* Keep the breadcrumb in its own Grid above <main>, so it sits outside the main content region. */}
      <Grid paddingTop="large">
        <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
          <Breadcrumb>
            <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
          </Breadcrumb>
        </Grid.Cell>
      </Grid>
      {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
      <main id="inhoud">
        <Grid paddingBottom="x-large">
          <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
            <Heading className="ams-mb-m" level={1}>
              Parkeren
            </Heading>
            <Paragraph className="ams-mb-m" size="large">
              {exampleParagraph()}
            </Paragraph>
          </Grid.Cell>
          {/* start pins the even-indexed cells to the content column; odd-indexed cells fall in beside them. */}
          {parkerenLinks.map(({ heading, links }, index) => (
            <Grid.Cell
              key={heading}
              span={{ narrow: 4, medium: 4, wide: 5 }}
              start={index % 2 ? undefined : { narrow: 1, medium: 1, wide: 2 }}
            >
              <Heading className="ams-mb-s" level={2} size="level-3">
                {heading}
              </Heading>
              {getLinks(links)}
            </Grid.Cell>
          ))}
        </Grid>
        {/* The paddings either side of the Spotlight add up on purpose: the coloured band separates them. */}
        <Spotlight>
          <Grid paddingVertical="x-large">
            <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
              {/* On the dark Spotlight, color="inverse" switches the heading, text, and links to their light variant. */}
              <Heading className="ams-mb-m" color="inverse" level={2} size="level-3">
                Parkeertarieven
              </Heading>
              {/* An interactive element in the page: a search field. */}
              <SearchField className="ams-mb-m">
                <SearchField.Input label="Zoek op adres" placeholder="Zoek op adres" />
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
        {/* A last section that is not a Grid takes ams-mb-2xl instead of a Grid’s paddingBottom. */}
        <Image alt="" aspectRatio="16:9" className="ams-mb-2xl" src="https://picsum.photos/id/133/1440/810" />
      </main>
    </>
  ),
}

export const WithImageGallery: StoryObj = {
  parameters: {
    docs: {
      source: {
        // The Code Panel regenerates a `render` story’s source from the rendered tree, which drops JSX
        // comments. Provide the source by hand so the guidance below stays visible in the panel.
        code: `<>
  {/* Keep the breadcrumb in its own Grid above <main>, so it sits outside the main content region. */}
  <Grid paddingTop="large">
    <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
      <Breadcrumb>
        <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
        <Breadcrumb.Link href="#">Bestuur en Organisatie</Breadcrumb.Link>
      </Breadcrumb>
    </Grid.Cell>
  </Grid>
  {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
  <main id="inhoud">
    <Grid paddingBottom="x-large">
      <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading className="ams-mb-m" level={1}>College van burgemeester en wethouders</Heading>
        <Paragraph size="large">
          Het college van burgemeester en wethouders is verantwoordelijk voor het dagelijks bestuur van de
          gemeente Amsterdam.
        </Paragraph>
      </Grid.Cell>
    </Grid>
    {/* A full-width banner image sits outside the Grid and runs full-bleed; aspectRatio keeps it from shifting the layout. */}
    <Image alt="" aspectRatio="16:5" src="https://picsum.photos/1440/450" />
    <Grid paddingVertical="x-large">
      {/* This cell is as wide as a regular content body, but it start-aligns with the grid it introduces. */}
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }}>
        <Heading className="ams-mb-s" level={2}>Burgemeester en wethouders</Heading>
        <Paragraph>
          Het college bestaat uit de burgemeester en 9 wethouders en wordt ambtelijk ondersteund door de
          gemeentesecretaris.
        </Paragraph>
      </Grid.Cell>
      {/*
       * The image gallery. Each card spans 4 columns; the computed start lays them out two per row on
       * medium ([1, 5]) and three per row on wide ([1, 5, 9]) screens.
       */}
      {persons.map(({ imageSource, name, role }, index) => (
        <Grid.Cell
          key={name}
          span={4}
          start={{ narrow: 1, medium: [1, 5][index % 2], wide: [1, 5, 9][index % 3] }}
        >
          <Card>
            <Card.Image alt="" src={imageSource} />
            <Card.Heading level={3}>
              <Card.Link href="#">{role} {name}</Card.Link>
            </Card.Heading>
          </Card>
        </Grid.Cell>
      ))}
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading className="ams-mb-s" level={2} size="level-3">Portefeuilleverdeling</Heading>
        <Paragraph className="ams-mb-s">
          Een alfabetisch overzicht van de portefeuilles van burgemeester en wethouders.
        </Paragraph>
        <StandaloneLink href="#">Portefeuilleverdeling</StandaloneLink>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }}>
        <Heading className="ams-mb-s" level={2} size="level-3">Coalitieakkoord</Heading>
        <Paragraph className="ams-mb-s">
          In dit akkoord staan de plannen en visie van de coalitie PvdA, GroenLinks en D66 voor 2022-2026.
        </Paragraph>
        <StandaloneLink href="#">Coalitieakkoord en Uitvoeringsagenda</StandaloneLink>
      </Grid.Cell>
    </Grid>
    {/* The paddings either side of the Spotlight add up on purpose: the coloured band separates them. */}
    <Spotlight>
      <Grid paddingVertical="x-large">
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
          {/* On the dark Spotlight, color="inverse" switches the heading, text, and links to their light variant. */}
          <Heading className="ams-mb-s" color="inverse" level={2} size="level-3">Persberichten en nieuws</Heading>
          <LinkList className="ams-mb-m">
            <LinkList.Link color="inverse" href="#">
              Proef elektrische fietsen voor sociale huurders op Strandeiland en Centrumeiland
            </LinkList.Link>
            <LinkList.Link color="inverse" href="#">Definitief ontwerp voor nieuwe Jaap Eden IJshal</LinkList.Link>
            <LinkList.Link color="inverse" href="#">Meer persberichten</LinkList.Link>
          </LinkList>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }}>
          <Heading className="ams-mb-s" color="inverse" level={2} size="level-3">Besluiten B en W</Heading>
          <LinkList className="ams-mb-m">
            <LinkList.Link color="inverse" href="#">Nieuws uit B en W 9 juli 2025</LinkList.Link>
            <LinkList.Link color="inverse" href="#">Nieuws uit B en W 2 juli 2025</LinkList.Link>
            <LinkList.Link color="inverse" href="#">Nieuws uit B en W 25 juni 2025</LinkList.Link>
            <LinkList.Link color="inverse" href="#">Meer besluiten B en W</LinkList.Link>
          </LinkList>
        </Grid.Cell>
      </Grid>
    </Spotlight>
    {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
    <Grid paddingBottom="2x-large" paddingTop="x-large">
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading className="ams-mb-s" level={2} size="level-3">Pers en woordvoering</Heading>
        <Paragraph className="ams-mb-s">Voor vragen van journalisten aan de afdeling Bestuursvoorlichting.</Paragraph>
        <StandaloneLink href="#">Pers en woordvoering</StandaloneLink>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }}>
        <Heading className="ams-mb-s" level={2} size="level-3">Meer over het college</Heading>
        <LinkList className="ams-mb-m">
          <LinkList.Link href="#">Vervangingsregeling en locoburgemeesters</LinkList.Link>
          <LinkList.Link href="#">Gedragscode</LinkList.Link>
          <LinkList.Link href="#">Declaraties en dienstreizen</LinkList.Link>
          <LinkList.Link href="#">Geschenkenregister college van B&W</LinkList.Link>
        </LinkList>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading className="ams-mb-s" level={2} size="level-3">Contact</Heading>
        <Paragraph className="ams-mb-s">Een bericht voor het college van burgemeester en wethouders kunt u:</Paragraph>
        <UnorderedList>
          <UnorderedList.Item>sturen naar Postbus 202, 1000 AE Amsterdam</UnorderedList.Item>
          <UnorderedList.Item>afgeven bij 1 van de <Link href="#">stadsloketten</Link></UnorderedList.Item>
          <UnorderedList.Item>mailen met het <Link href="#">contactformulier</Link></UnorderedList.Item>
        </UnorderedList>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }}>
        <Heading className="ams-mb-s" level={2} size="level-3">Rechtenvrije foto’s</Heading>
        <Image alt="" src="https://picsum.photos/640/360" />
      </Grid.Cell>
    </Grid>
  </main>
</>`,
        language: 'tsx',
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: (args) => (
    <>
      {/* Keep the breadcrumb in its own Grid above <main>, so it sits outside the main content region. */}
      <Grid paddingTop="large">
        <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
          <Breadcrumb>
            <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
            <Breadcrumb.Link href="#">Bestuur en Organisatie</Breadcrumb.Link>
          </Breadcrumb>
        </Grid.Cell>
      </Grid>
      {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
      <main id="inhoud">
        <Grid paddingBottom="x-large">
          <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
            <Heading className="ams-mb-m" level={1}>
              College van burgemeester en wethouders
            </Heading>
            <Paragraph size="large">
              Het college van burgemeester en wethouders is verantwoordelijk voor het dagelijks bestuur van de gemeente
              Amsterdam.
            </Paragraph>
          </Grid.Cell>
        </Grid>
        {/* A full-width banner image sits outside the Grid and runs full-bleed; aspectRatio keeps it from shifting the layout. */}
        <Image alt="" aspectRatio="16:5" src={exampleImageSource(1440, 450, 11)} />
        <Grid paddingVertical="x-large">
          {/* This cell is as wide as a regular content body, but it start-aligns with the grid it introduces. */}
          <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }}>
            <Heading className="ams-mb-s" level={2}>
              Burgemeester en wethouders
            </Heading>
            <Paragraph>
              Het college bestaat uit de burgemeester en 9 wethouders en wordt ambtelijk ondersteund door de
              gemeentesecretaris.
            </Paragraph>
          </Grid.Cell>
          {/*
           * The image gallery. Each card spans 4 columns; the computed start lays them out two per row on
           * medium ([1, 5]) and three per row on wide ([1, 5, 9]) screens.
           */}
          {persons.map(({ imageSource, name, role, suffix }, index) => (
            <Grid.Cell
              key={name}
              span={4}
              start={{ narrow: 1, medium: [1, 5][index % 2], wide: [1, 5, 9][index % 3] } as GridColumnNumbers}
            >
              <Card>
                <Card.Image alt="" src={imageSource} />
                <Card.Heading level={3}>
                  <Card.Link href="#">{`${role} ${name}${suffix ? ` (${suffix})` : ''}`}</Card.Link>
                </Card.Heading>
              </Card>
            </Grid.Cell>
          ))}
          <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
            <Heading className="ams-mb-s" level={2} size="level-3">
              Portefeuilleverdeling
            </Heading>
            <Paragraph className="ams-mb-s">
              Een alfabetisch overzicht van de portefeuilles van burgemeester en wethouders.
            </Paragraph>
            <StandaloneLink href="#">Portefeuilleverdeling</StandaloneLink>
          </Grid.Cell>
          <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }}>
            <Heading className="ams-mb-s" level={2} size="level-3">
              Coalitieakkoord
            </Heading>
            <Paragraph className="ams-mb-s">
              In dit akkoord staan de plannen en visie van de coalitie Pvda, GroenLinks en D66 voor 2022-2026.
            </Paragraph>
            <StandaloneLink href="#">Coalitieakkoord en Uitvoeringsagenda</StandaloneLink>
          </Grid.Cell>
        </Grid>
        {/* The paddings either side of the Spotlight add up on purpose: the coloured band separates them. */}
        <Spotlight>
          <Grid paddingVertical="x-large">
            <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
              {/* On the dark Spotlight, color="inverse" switches the heading, text, and links to their light variant. */}
              <Heading className="ams-mb-s" color="inverse" level={2} size="level-3">
                Persberichten en nieuws
              </Heading>
              <LinkList className="ams-mb-m">
                <LinkList.Link color="inverse" href="#">
                  Proef elektrische fietsen voor sociale huurders op Strandeiland en Centrumeiland
                </LinkList.Link>
                <LinkList.Link color="inverse" href="#">
                  Definitief ontwerp voor nieuwe Jaap Eden IJshal
                </LinkList.Link>
                <LinkList.Link color="inverse" href="#">
                  Meer persberichten
                </LinkList.Link>
              </LinkList>
            </Grid.Cell>
            <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }}>
              <Heading className="ams-mb-s" color="inverse" level={2} size="level-3">
                Besluiten B en W
              </Heading>
              <LinkList className="ams-mb-m">
                <LinkList.Link color="inverse" href="#">
                  Nieuws uit B en W 9 juli 2025
                </LinkList.Link>
                <LinkList.Link color="inverse" href="#">
                  Nieuws uit B en W 2 juli 2025
                </LinkList.Link>
                <LinkList.Link color="inverse" href="#">
                  Nieuws uit B en W 25 juni 2025
                </LinkList.Link>
                <LinkList.Link color="inverse" href="#">
                  Meer besluiten B en W
                </LinkList.Link>
              </LinkList>
            </Grid.Cell>
          </Grid>
        </Spotlight>
        {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
        <Grid paddingBottom="2x-large" paddingTop="x-large">
          <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
            <Heading className="ams-mb-s" level={2} size="level-3">
              Pers en woordvoering
            </Heading>
            <Paragraph className="ams-mb-s">
              Voor vragen van journalisten aan de afdeling Bestuursvoorlichting.
            </Paragraph>
            <StandaloneLink href="#">Pers en woordvoering</StandaloneLink>
          </Grid.Cell>
          <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }}>
            <Heading className="ams-mb-s" level={2} size="level-3">
              Meer over het college
            </Heading>
            <LinkList className="ams-mb-m">
              <LinkList.Link href="#">Vervangingsregeling en locoburgemeesters</LinkList.Link>
              <LinkList.Link href="#">Gedragscode</LinkList.Link>
              <LinkList.Link href="#">Declaraties en dienstreizen</LinkList.Link>
              <LinkList.Link href="#">Geschenkenregister college van B&W</LinkList.Link>
            </LinkList>
          </Grid.Cell>
          <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
            <Heading className="ams-mb-s" level={2} size="level-3">
              Contact
            </Heading>
            <Paragraph className="ams-mb-s">
              Een bericht voor het college van burgemeester en wethouders kunt u:
            </Paragraph>
            <UnorderedList>
              <UnorderedList.Item>sturen naar Postbus 202, 1000 AE Amsterdam</UnorderedList.Item>
              <UnorderedList.Item>
                afgeven bij 1 van de <Link href="#">stadsloketten</Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                mailen met het <Link href="#">contactformulier</Link>
              </UnorderedList.Item>
            </UnorderedList>
          </Grid.Cell>
          <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }}>
            <Heading className="ams-mb-s" level={2} size="level-3">
              Rechtenvrije foto’s
            </Heading>
            <Image alt="" src={exampleImageSource(640, 360, 12)} />
          </Grid.Cell>
        </Grid>
      </main>
    </>
  ),
}

export const SubnavigationPage: StoryObj = {
  parameters: {
    docs: {
      source: {
        // The Code Panel regenerates a `render` story’s source from the rendered tree, which drops JSX
        // comments. Provide the source by hand so the guidance below stays visible in the panel.
        code: `// getLinks shows a single StandaloneLink when a group has one link, or a LinkList when it has several.

<>
  {/* Keep the breadcrumb in its own Grid above <main>, so it sits outside the main content region. */}
  <Grid paddingTop="large">
    <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
      <Breadcrumb>
        <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
        <Breadcrumb.Link href="#">Onderwerp</Breadcrumb.Link>
      </Breadcrumb>
    </Grid.Cell>
  </Grid>
  {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
  <main id="inhoud">
    <Grid paddingBottom="x-large">
      <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading className="ams-mb-m" level={1}>Onderwerp</Heading>
        <Paragraph size="large">
          Amsterdam wil een nieuwe traditie starten om met oud en nieuw naar een centrale nieuwjaarsviering
          te gaan in plaats van zelf vuurwerk af te steken.
        </Paragraph>
      </Grid.Cell>
    </Grid>
    <Image alt="" aspectRatio="16:5" src="https://picsum.photos/1440/450" />
    <Grid paddingVertical="x-large">
      {/* This cell is as wide as a regular content body, but it start-aligns with the grid it introduces. */}
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading className="ams-mb-s" level={2}>L2 Paragraaf titel</Heading>
        <Paragraph>Voorbeeldtekst bij dit onderwerp.</Paragraph>
      </Grid.Cell>
      {/* start pins the even-indexed cells to the content column; odd-indexed cells fall in beside them. */}
      {burgerzakenLinks.slice(0, 6).map(({ heading, links }, index) => (
        <Grid.Cell
          key={heading}
          span={{ narrow: 4, medium: 4, wide: 5 }}
          start={index % 2 ? undefined : { narrow: 1, medium: 1, wide: 2 }}
        >
          <Heading className="ams-mb-s" level={3}>{heading}</Heading>
          {getLinks(links)}
        </Grid.Cell>
      ))}
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading className="ams-mb-s" level={3}>Titel</Heading>
        <Paragraph className="ams-mb-m">Voorbeeldtekst bij dit onderwerp.</Paragraph>
        <StandaloneLink href="#">Lees meer</StandaloneLink>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }}>
        <Heading className="ams-mb-s" level={3}>Titel</Heading>
        <Paragraph className="ams-mb-m">Voorbeeldtekst bij dit onderwerp.</Paragraph>
        <StandaloneLink href="#">Lees meer</StandaloneLink>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading className="ams-mb-s" level={3}>Titel</Heading>
        <Paragraph className="ams-mb-m">Voorbeeldtekst bij dit onderwerp.</Paragraph>
        <StandaloneLink href="#">Lees meer</StandaloneLink>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }}>
        <Heading className="ams-mb-s" level={3}>Titel</Heading>
        <Paragraph className="ams-mb-m">Voorbeeldtekst bij dit onderwerp.</Paragraph>
        <StandaloneLink href="#">Lees meer</StandaloneLink>
      </Grid.Cell>
    </Grid>
    {/* The paddings either side of the Spotlight add up on purpose: the coloured band separates them. */}
    <Spotlight color="magenta">
      <Grid paddingVertical="x-large">
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
          {/* On the magenta Spotlight, color="inverse" switches the heading, text, and links to their light variant. */}
          <Heading className="ams-mb-s" color="inverse" level={2} size="level-3">Titel</Heading>
          <Paragraph color="inverse">Voorbeeldtekst bij dit onderwerp.</Paragraph>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }}>
          <Heading className="ams-mb-s" color="inverse" level={2} size="level-3">Titel</Heading>
          <Paragraph color="inverse">Voorbeeldtekst bij dit onderwerp.</Paragraph>
        </Grid.Cell>
      </Grid>
    </Spotlight>
    {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
    <Grid paddingBottom="2x-large" paddingTop="x-large">
      {/* This cell is as wide as a regular content body, but it start-aligns with the grid it introduces. */}
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading className="ams-mb-s" level={2}>L2 Paragraaf titel</Heading>
        <Paragraph>Voorbeeldtekst bij dit onderwerp.</Paragraph>
      </Grid.Cell>
      {/* start pins the even-indexed cells to the content column; odd-indexed cells fall in beside them. */}
      {burgerzakenLinks.slice(4, 8).map(({ heading, links }, index) => (
        <Grid.Cell
          key={heading}
          span={{ narrow: 4, medium: 4, wide: 5 }}
          start={index % 2 ? undefined : { narrow: 1, medium: 1, wide: 2 }}
        >
          <Heading className="ams-mb-s" level={3}>{heading}</Heading>
          {getLinks(links)}
        </Grid.Cell>
      ))}
    </Grid>
  </main>
</>`,
        language: 'tsx',
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: (args) => (
    // getLinks shows a single StandaloneLink when a group has one link, or a LinkList when it has several.
    <>
      {/* Keep the breadcrumb in its own Grid above <main>, so it sits outside the main content region. */}
      <Grid paddingTop="large">
        <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
          <Breadcrumb>
            <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
            <Breadcrumb.Link href="#">Onderwerp</Breadcrumb.Link>
          </Breadcrumb>
        </Grid.Cell>
      </Grid>
      {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
      <main id="inhoud">
        <Grid paddingBottom="x-large">
          <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
            <Heading className="ams-mb-m" level={1}>
              {exampleHeading()}
            </Heading>
            <Paragraph size="large">
              Amsterdam wil een nieuwe traditie starten om met oud en nieuw naar een centrale nieuwjaarsviering te gaan
              in plaats van zelf vuurwerk af te steken.
            </Paragraph>
          </Grid.Cell>
        </Grid>
        <Image alt="" aspectRatio="16:5" src={exampleImageSource(1440, 450)} />
        <Grid paddingVertical="x-large">
          {/* This cell is as wide as a regular content body, but it start-aligns with the grid it introduces. */}
          <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
            <Heading className="ams-mb-s" level={2}>
              L2 Paragraaf titel
            </Heading>
            <Paragraph>{exampleParagraph()}</Paragraph>
          </Grid.Cell>
          {/* start pins the even-indexed cells to the content column; odd-indexed cells fall in beside them. */}
          {burgerzakenLinks.slice(0, 6).map(({ heading, links }, index) => (
            <Grid.Cell
              key={heading}
              span={{ narrow: 4, medium: 4, wide: 5 }}
              start={index % 2 ? undefined : { narrow: 1, medium: 1, wide: 2 }}
            >
              <Heading className="ams-mb-s" level={3}>
                {heading}
              </Heading>
              {getLinks(links)}
            </Grid.Cell>
          ))}
          <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
            <Heading className="ams-mb-s" level={3}>
              {exampleHeading()}
            </Heading>
            <Paragraph className="ams-mb-m">{exampleParagraph()}</Paragraph>
            <StandaloneLink href="#">{exampleStandaloneLink()}</StandaloneLink>
          </Grid.Cell>
          <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }}>
            <Heading className="ams-mb-s" level={3}>
              {exampleHeading()}
            </Heading>
            <Paragraph className="ams-mb-m">{exampleParagraph()}</Paragraph>
            <StandaloneLink href="#">{exampleStandaloneLink()}</StandaloneLink>
          </Grid.Cell>
          <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
            <Heading className="ams-mb-s" level={3}>
              {exampleHeading()}
            </Heading>
            <Paragraph className="ams-mb-m">{exampleParagraph()}</Paragraph>
            <StandaloneLink href="#">{exampleStandaloneLink()}</StandaloneLink>
          </Grid.Cell>
          <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }}>
            <Heading className="ams-mb-s" level={3}>
              {exampleHeading()}
            </Heading>
            <Paragraph className="ams-mb-m">{exampleParagraph()}</Paragraph>
            <StandaloneLink href="#">{exampleStandaloneLink()}</StandaloneLink>
          </Grid.Cell>
        </Grid>
        {/* The paddings either side of the Spotlight add up on purpose: the coloured band separates them. */}
        <Spotlight color="magenta">
          <Grid paddingVertical="x-large">
            <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
              {/* On the magenta Spotlight, color="inverse" switches the heading, text, and links to their light variant. */}
              <Heading className="ams-mb-s" color="inverse" level={2} size="level-3">
                {exampleHeading()}
              </Heading>
              <Paragraph color="inverse">{exampleParagraph()}</Paragraph>
            </Grid.Cell>
            <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }}>
              <Heading className="ams-mb-s" color="inverse" level={2} size="level-3">
                {exampleHeading()}
              </Heading>
              <Paragraph color="inverse">{exampleParagraph()}</Paragraph>
            </Grid.Cell>
          </Grid>
        </Spotlight>
        {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
        <Grid paddingBottom="2x-large" paddingTop="x-large">
          {/* This cell is as wide as a regular content body, but it start-aligns with the grid it introduces. */}
          <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
            <Heading className="ams-mb-s" level={2}>
              L2 Paragraaf titel
            </Heading>
            <Paragraph>{exampleParagraph()}</Paragraph>
          </Grid.Cell>
          {/* start pins the even-indexed cells to the content column; odd-indexed cells fall in beside them. */}
          {burgerzakenLinks.slice(4, 8).map(({ heading, links }, index) => (
            <Grid.Cell
              key={heading}
              span={{ narrow: 4, medium: 4, wide: 5 }}
              start={index % 2 ? undefined : { narrow: 1, medium: 1, wide: 2 }}
            >
              <Heading className="ams-mb-s" level={3}>
                {heading}
              </Heading>
              {getLinks(links)}
            </Grid.Cell>
          ))}
        </Grid>
      </main>
    </>
  ),
}
