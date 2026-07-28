/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Breadcrumb,
  Button,
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
  TableOfContents,
  UnorderedList,
} from '@amsterdam/design-system-react'

import {
  exampleHeading,
  exampleImageSource,
  exampleParagraph,
  exampleStandaloneLink,
} from '#storybook/_common/exampleContent'

import { commonMeta, pageParameters } from '../common/commonMeta'
import { burgerzakenLinks, parkerenLinks, persons, shopGroups, shopLocations, topTaskLinks } from './data'

const meta = {
  ...commonMeta,
  title: 'Pages/Public/Navigation Page',
  parameters: pageParameters(
    'A signpost with little content of its own, grouping links to related pages ' +
      'so visitors can find their way around a subject.',
  ),
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
        // Because this story’s `render` takes an argument, the Code Panel rebuilds its source from the rendered tree:
        // JSX comments disappear and every `map` is expanded. Provide the source by hand so the `map` and `getLinks`
        // patterns read the way a developer would write them.
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
  {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
  <main id="inhoud">
    {/* The Content Header takes a Grid of its own, so the space below it is a padding rather than a row gap. */}
    {/* That Grid has no paddingTop, so the breadcrumb and the page title read as one block. */}
    {/* Both this Grid and the one below it have the default background colour, so this Grid takes a paddingBottom of 2x-large. */}
    <Grid paddingBottom="2x-large">
      {/* ams-prose sets the vertical rhythm between the title and the lead of this Content Header. */}
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading level={1}>Burgerzaken</Heading>
        <Paragraph size="large">
          Heeft u een paspoort, rijbewijs of uittreksel nodig? Of wilt u een verhuizing doorgeven of een
          geboorte aangeven? Op deze pagina vindt u alle informatie en regelzaken rondom Burgerzaken.
        </Paragraph>
      </Grid.Cell>
    </Grid>
    {/* Two adjacent Grids add their touching paddings together, so this one leaves its paddingTop off. */}
    {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
    <Grid paddingBottom="2x-large">
      {/* start pins the even-indexed cells to the content column; odd-indexed cells fall in beside them. */}
      {burgerzakenLinks.map(({ heading, links }, index) => (
        <Grid.Cell className="ams-prose"
          key={heading}
          span={{ narrow: 4, medium: 4, wide: 5 }}
          start={index % 2 ? undefined : { narrow: 1, medium: 1, wide: 2 }}
        >
          <Heading level={2} size="level-3">{heading}</Heading>
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
          </Breadcrumb>
        </Grid.Cell>
      </Grid>
      {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
      <main id="inhoud">
        {/* The Content Header takes a Grid of its own, so the space below it is a padding rather than a row gap. */}
        {/* That Grid has no paddingTop, so the breadcrumb and the page title read as one block. */}
        {/* Both this Grid and the one below it have the default background colour, so this Grid takes a paddingBottom of 2x-large. */}
        <Grid paddingBottom="2x-large">
          {/* ams-prose sets the vertical rhythm between the title and the lead of this Content Header. */}
          <Grid.Cell
            className="ams-prose"
            span={{ narrow: 4, medium: 7, wide: 9 }}
            start={{ narrow: 1, medium: 1, wide: 2 }}
          >
            <Heading level={1}>Burgerzaken</Heading>
            <Paragraph size="large">
              Heeft u een paspoort, rijbewijs of uittreksel nodig? Of wilt u een verhuizing doorgeven of een geboorte
              aangeven? Op deze pagina vindt u alle informatie en regelzaken rondom Burgerzaken.
            </Paragraph>
          </Grid.Cell>
        </Grid>
        {/* Two adjacent Grids add their touching paddings together, so this one leaves its paddingTop off. */}
        {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
        <Grid paddingBottom="2x-large">
          {/* start pins the even-indexed cells to the content column; odd-indexed cells fall in beside them. */}
          {burgerzakenLinks.map(({ heading, links }, index) => (
            <Grid.Cell
              className="ams-prose"
              key={heading}
              span={{ narrow: 4, medium: 4, wide: 5 }}
              start={index % 2 ? undefined : { narrow: 1, medium: 1, wide: 2 }}
            >
              <Heading level={2} size="level-3">
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

export const WithTopTasks: StoryObj = {
  parameters: {
    docs: {
      source: {
        // Because this story’s `render` takes an argument, the Code Panel rebuilds its source from the rendered tree:
        // JSX comments disappear and every `map` is expanded. Provide the source by hand so the `map` and `getLinks`
        // patterns read the way a developer would write them.
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
  {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
  <main id="inhoud">
    {/* The Content Header takes a Grid of its own, so the space below it is a padding rather than a row gap. */}
    {/* That Grid has no paddingTop, so the breadcrumb and the page title read as one block. */}
    {/* Both this Grid and the one below it have the default background colour, so this Grid takes a paddingBottom of 2x-large. */}
    <Grid paddingBottom="2x-large">
      <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading level={1}>Leefomgeving</Heading>
      </Grid.Cell>
    </Grid>
    {/* Two adjacent Grids add their touching paddings together, so this one leaves its paddingTop off. */}
    {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
    <Grid paddingBottom="2x-large">
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
        <Grid.Cell className="ams-prose"
          key={heading}
          span={{ narrow: 4, medium: 4, wide: 5 }}
          start={index % 2 ? undefined : { narrow: 1, medium: 1, wide: 2 }}
        >
          <Heading level={2} size="level-3">{heading}</Heading>
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
          </Breadcrumb>
        </Grid.Cell>
      </Grid>
      {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
      <main id="inhoud">
        {/* The Content Header takes a Grid of its own, so the space below it is a padding rather than a row gap. */}
        {/* That Grid has no paddingTop, so the breadcrumb and the page title read as one block. */}
        {/* Both this Grid and the one below it have the default background colour, so this Grid takes a paddingBottom of 2x-large. */}
        <Grid paddingBottom="2x-large">
          <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
            <Heading level={1}>Leefomgeving</Heading>
          </Grid.Cell>
        </Grid>
        {/* Two adjacent Grids add their touching paddings together, so this one leaves its paddingTop off. */}
        {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
        <Grid paddingBottom="2x-large">
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
              className="ams-prose"
              key={heading}
              span={{ narrow: 4, medium: 4, wide: 5 }}
              start={index % 2 ? undefined : { narrow: 1, medium: 1, wide: 2 }}
            >
              <Heading level={2} size="level-3">
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

export const WithInteractiveElement: StoryObj = {
  parameters: {
    docs: {
      source: {
        // Because this story’s `render` takes an argument, the Code Panel rebuilds its source from the rendered tree:
        // JSX comments disappear and every `map` is expanded. Provide the source by hand so the `map` and `getLinks`
        // patterns read the way a developer would write them.
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
  {/*
   * The Content Header, the Spotlights and the full-bleed images are each their own section, so a plain
   * <main> wraps them all.
   */}
  {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
  <main id="inhoud">
    {/* The Content Header takes a Grid of its own, so the space below it is a padding rather than a row gap. */}
    {/* Both this Grid and the one below it have the default background colour, so this Grid takes a paddingBottom of 2x-large. */}
    <Grid paddingBottom="2x-large">
      {/* ams-prose sets the vertical rhythm between the title and the lead of this Content Header. */}
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading level={1}>Parkeren</Heading>
        <Paragraph size="large">
          Vind informatie over parkeervergunningen, parkeertarieven en betaald parkeren in Amsterdam.
        </Paragraph>
      </Grid.Cell>
    </Grid>
    {/* Two adjacent Grids add their touching paddings together, so this one leaves its paddingTop off. */}
    {/* A coloured Spotlight follows, so this Grid takes a paddingBottom of x-large. */}
    <Grid paddingBottom="x-large">
      {/* start pins the even-indexed cells to the content column; odd-indexed cells fall in beside them. */}
      {parkerenLinks.map(({ heading, links }, index) => (
        <Grid.Cell className="ams-prose"
          key={heading}
          span={{ narrow: 4, medium: 4, wide: 5 }}
          start={index % 2 ? undefined : { narrow: 1, medium: 1, wide: 2 }}
        >
          <Heading level={2} size="level-3">{heading}</Heading>
          {getLinks(links)}
        </Grid.Cell>
      ))}
    </Grid>
    {/*
     * These bands sit inside <main>, so they stay plain <div>s; the Article Page marks its comparable
     * pull-outs as labelled asides because those sit outside its <main>, where as="aside" makes them
     * complementary landmarks.
     */}
    <Spotlight>
      <Grid paddingVertical="x-large">
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
          <Heading className="ams-mb-m" color="inverse" level={2} size="level-3">Parkeertarieven</Heading>
          {/* An interactive element in the page: a search field. */}
          <SearchField className="ams-mb-m">
            {/*
             * SearchField renders the label visually hidden and offers no way to show it, so the placeholder is the
             * only visible text this field can carry. It disappears on the first keystroke, so the field is then
             * unlabelled on screen. The design system advises against placeholders; this one is a compromise.
             */}
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
    {/*
     * Image always reserves its box: .ams-image sets inline-size: 100% and an aspect ratio, so the
     * layout does not shift while the file loads.
     */}
    {/* This image carries no information the text does not, so it takes an empty alt. */}
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
      {/*
       * The Content Header, the Spotlights and the full-bleed images are each their own section, so a plain
       * <main> wraps them all.
       */}
      {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
      <main id="inhoud">
        {/* The Content Header takes a Grid of its own, so the space below it is a padding rather than a row gap. */}
        {/* Both this Grid and the one below it have the default background colour, so this Grid takes a paddingBottom of 2x-large. */}
        <Grid paddingBottom="2x-large">
          {/* ams-prose sets the vertical rhythm between the title and the lead of this Content Header. */}
          <Grid.Cell
            className="ams-prose"
            span={{ narrow: 4, medium: 7, wide: 9 }}
            start={{ narrow: 1, medium: 1, wide: 2 }}
          >
            <Heading level={1}>Parkeren</Heading>
            <Paragraph size="large">{exampleParagraph()}</Paragraph>
          </Grid.Cell>
        </Grid>
        {/* Two adjacent Grids add their touching paddings together, so this one leaves its paddingTop off. */}
        {/* A coloured Spotlight follows, so this Grid takes a paddingBottom of x-large. */}
        <Grid paddingBottom="x-large">
          {/* start pins the even-indexed cells to the content column; odd-indexed cells fall in beside them. */}
          {parkerenLinks.map(({ heading, links }, index) => (
            <Grid.Cell
              className="ams-prose"
              key={heading}
              span={{ narrow: 4, medium: 4, wide: 5 }}
              start={index % 2 ? undefined : { narrow: 1, medium: 1, wide: 2 }}
            >
              <Heading level={2} size="level-3">
                {heading}
              </Heading>
              {getLinks(links)}
            </Grid.Cell>
          ))}
        </Grid>
        {/*
         * These bands sit inside <main>, so they stay plain <div>s; the Article Page marks its comparable
         * pull-outs as labelled asides because those sit outside its <main>, where as="aside" makes them
         * complementary landmarks.
         */}
        <Spotlight>
          <Grid paddingVertical="x-large">
            <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
              <Heading className="ams-mb-m" color="inverse" level={2} size="level-3">
                Parkeertarieven
              </Heading>
              {/* An interactive element in the page: a search field. */}
              <SearchField className="ams-mb-m">
                {/*
                 * SearchField renders the label visually hidden and offers no way to show it, so the placeholder is the
                 * only visible text this field can carry. It disappears on the first keystroke, so the field is then
                 * unlabelled on screen. The design system advises against placeholders; this one is a compromise.
                 */}
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
        {/*
         * Image always reserves its box: .ams-image sets inline-size: 100% and an aspect ratio, so the
         * layout does not shift while the file loads.
         */}
        {/* This image carries no information the text does not, so it takes an empty alt. */}
        <Image alt="" aspectRatio="16:9" className="ams-mb-2xl" src="https://picsum.photos/id/133/1440/810" />
      </main>
    </>
  ),
}

export const WithImageGallery: StoryObj = {
  parameters: {
    docs: {
      source: {
        // Because this story’s `render` takes an argument, the Code Panel rebuilds its source from the rendered tree:
        // JSX comments disappear and every `map` is expanded. Provide the source by hand so the `map` and `getLinks`
        // patterns read the way a developer would write them.
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
  {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
  <main id="inhoud">
    <Grid paddingBottom="x-large">
      {/* ams-prose sets the vertical rhythm between the title and the lead of this Content Header. */}
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading level={1}>College van burgemeester en wethouders</Heading>
        <Paragraph size="large">
          Het college van burgemeester en wethouders is verantwoordelijk voor het dagelijks bestuur van de
          gemeente Amsterdam.
        </Paragraph>
      </Grid.Cell>
    </Grid>
    {/* Outside the Grid, the image spans the full Page width: up to 90rem, centred — not the full window. */}
    {/* Image always reserves its box; aspectRatio only changes it from the default 16:9 to a banner’s 16:5. */}
    {/* This image carries no information the text does not, so it takes an empty alt. */}
    <Image alt="" aspectRatio="16:5" src="https://picsum.photos/1440/450" />
    <Grid paddingVertical="x-large">
      {/* This cell is as wide as a regular content body, but it start-aligns with the grid it introduces. */}
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 6, wide: 7 }}>
        <Heading level={2}>Burgemeester en wethouders</Heading>
        <Paragraph>
          Het college bestaat uit de burgemeester en 9 wethouders en wordt ambtelijk ondersteund door de
          gemeentesecretaris.
        </Paragraph>
      </Grid.Cell>
      {/*
       * The image gallery. Each card spans 4 columns; the computed start lays them out two per row on
       * medium ([1, 5]) and three per row on wide ([1, 5, 9]) screens.
       * Indexing a plain array produces a number, which is wider than the union Grid.Cell accepts, so each
       * array is marked as const to keep its elements narrow.
       */}
      {persons.map(({ imageSource, name, role, suffix }, index) => (
        <Grid.Cell
          key={name}
          span={4}
          start={{ narrow: 1, medium: ([1, 5] as const)[index % 2], wide: ([1, 5, 9] as const)[index % 3] }}
        >
          <Card>
            {/* Screen readers skip a Card’s image, so only use a decorative one with an empty alt. */}
            <Card.Image alt="" src={imageSource} />
            {/* Level 3 keeps the card under the level-2 section heading; Card.Heading supplies its own size. */}
            <Card.Heading level={3}>
              <Card.Link href="#">{\`\${role} \${name}\${suffix ? \` (\${suffix})\` : ''}\`}</Card.Link>
            </Card.Heading>
          </Card>
        </Grid.Cell>
      ))}
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading level={2} size="level-3">Portefeuilleverdeling</Heading>
        <Paragraph>
          Een alfabetisch overzicht van de portefeuilles van burgemeester en wethouders.
        </Paragraph>
        <StandaloneLink href="#">Portefeuilleverdeling</StandaloneLink>
      </Grid.Cell>
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 5 }}>
        <Heading level={2} size="level-3">Coalitieakkoord</Heading>
        <Paragraph>
          In dit akkoord staan de plannen en visie van de coalitie PvdA, GroenLinks en D66 voor 2022-2026.
        </Paragraph>
        <StandaloneLink href="#">Coalitieakkoord en Uitvoeringsagenda</StandaloneLink>
      </Grid.Cell>
    </Grid>
    <Spotlight>
      <Grid paddingVertical="x-large">
        <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
          <Heading color="inverse" level={2} size="level-3">Persberichten en nieuws</Heading>
          <LinkList>
            <LinkList.Link color="inverse" href="#">
              Proef elektrische fietsen voor sociale huurders op Strandeiland en Centrumeiland
            </LinkList.Link>
            <LinkList.Link color="inverse" href="#">Definitief ontwerp voor nieuwe Jaap Eden IJshal</LinkList.Link>
            <LinkList.Link color="inverse" href="#">Meer persberichten</LinkList.Link>
          </LinkList>
        </Grid.Cell>
        <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 5 }}>
          <Heading color="inverse" level={2} size="level-3">Besluiten B en W</Heading>
          <LinkList>
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
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading level={2} size="level-3">Pers en woordvoering</Heading>
        <Paragraph>Voor vragen van journalisten aan de afdeling Bestuursvoorlichting.</Paragraph>
        <StandaloneLink href="#">Pers en woordvoering</StandaloneLink>
      </Grid.Cell>
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 5 }}>
        <Heading level={2} size="level-3">Meer over het college</Heading>
        <LinkList>
          <LinkList.Link href="#">Vervangingsregeling en locoburgemeesters</LinkList.Link>
          <LinkList.Link href="#">Gedragscode</LinkList.Link>
          <LinkList.Link href="#">Declaraties en dienstreizen</LinkList.Link>
          <LinkList.Link href="#">Geschenkenregister college van B&W</LinkList.Link>
        </LinkList>
      </Grid.Cell>
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading level={2} size="level-3">Contact</Heading>
        <Paragraph>Een bericht voor het college van burgemeester en wethouders kunt u:</Paragraph>
        <UnorderedList>
          <UnorderedList.Item>sturen naar Postbus 202, 1000 AE Amsterdam</UnorderedList.Item>
          <UnorderedList.Item>afgeven bij 1 van de <Link href="#">stadsloketten</Link></UnorderedList.Item>
          <UnorderedList.Item>mailen met het <Link href="#">contactformulier</Link></UnorderedList.Item>
        </UnorderedList>
      </Grid.Cell>
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 5 }}>
        <Heading level={2} size="level-3">Rechtenvrije foto’s</Heading>
        {/*
         * Image always crops to an aspect ratio: omitting aspectRatio falls back to the 16:9 default,
         * not to the file’s own ratio. This 640x360 source is already 16:9, so nothing is cropped.
         */}
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
      {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
      <main id="inhoud">
        <Grid paddingBottom="x-large">
          {/* ams-prose sets the vertical rhythm between the title and the lead of this Content Header. */}
          <Grid.Cell
            className="ams-prose"
            span={{ narrow: 4, medium: 7, wide: 9 }}
            start={{ narrow: 1, medium: 1, wide: 2 }}
          >
            <Heading level={1}>College van burgemeester en wethouders</Heading>
            <Paragraph size="large">
              Het college van burgemeester en wethouders is verantwoordelijk voor het dagelijks bestuur van de gemeente
              Amsterdam.
            </Paragraph>
          </Grid.Cell>
        </Grid>
        {/* Outside the Grid, the image spans the full Page width: up to 90rem, centred — not the full window. */}
        {/* Image always reserves its box; aspectRatio only changes it from the default 16:9 to a banner’s 16:5. */}
        {/* This image carries no information the text does not, so it takes an empty alt. */}
        <Image alt="" aspectRatio="16:5" src={exampleImageSource(1440, 450, 11)} />
        <Grid paddingVertical="x-large">
          {/* This cell is as wide as a regular content body, but it start-aligns with the grid it introduces. */}
          <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 6, wide: 7 }}>
            <Heading level={2}>Burgemeester en wethouders</Heading>
            <Paragraph>
              Het college bestaat uit de burgemeester en 9 wethouders en wordt ambtelijk ondersteund door de
              gemeentesecretaris.
            </Paragraph>
          </Grid.Cell>
          {/*
           * The image gallery. Each card spans 4 columns; the computed start lays them out two per row on
           * medium ([1, 5]) and three per row on wide ([1, 5, 9]) screens.
           * Indexing a plain array produces a number, which is wider than the union Grid.Cell accepts, so each
           * array is marked as const to keep its elements narrow.
           */}
          {persons.map(({ imageSource, name, role, suffix }, index) => (
            <Grid.Cell
              key={name}
              span={4}
              start={{ narrow: 1, medium: ([1, 5] as const)[index % 2], wide: ([1, 5, 9] as const)[index % 3] }}
            >
              <Card>
                {/* Screen readers skip a Card’s image, so only use a decorative one with an empty alt. */}
                <Card.Image alt="" src={imageSource} />
                {/* Level 3 keeps the card under the level-2 section heading; Card.Heading supplies its own size. */}
                <Card.Heading level={3}>
                  <Card.Link href="#">{`${role} ${name}${suffix ? ` (${suffix})` : ''}`}</Card.Link>
                </Card.Heading>
              </Card>
            </Grid.Cell>
          ))}
          <Grid.Cell
            className="ams-prose"
            span={{ narrow: 4, medium: 4, wide: 5 }}
            start={{ narrow: 1, medium: 1, wide: 2 }}
          >
            <Heading level={2} size="level-3">
              Portefeuilleverdeling
            </Heading>
            <Paragraph>Een alfabetisch overzicht van de portefeuilles van burgemeester en wethouders.</Paragraph>
            <StandaloneLink href="#">Portefeuilleverdeling</StandaloneLink>
          </Grid.Cell>
          <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 5 }}>
            <Heading level={2} size="level-3">
              Coalitieakkoord
            </Heading>
            <Paragraph>
              In dit akkoord staan de plannen en visie van de coalitie PvdA, GroenLinks en D66 voor 2022-2026.
            </Paragraph>
            <StandaloneLink href="#">Coalitieakkoord en Uitvoeringsagenda</StandaloneLink>
          </Grid.Cell>
        </Grid>
        <Spotlight>
          <Grid paddingVertical="x-large">
            <Grid.Cell
              className="ams-prose"
              span={{ narrow: 4, medium: 4, wide: 5 }}
              start={{ narrow: 1, medium: 1, wide: 2 }}
            >
              <Heading color="inverse" level={2} size="level-3">
                Persberichten en nieuws
              </Heading>
              <LinkList>
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
            <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 5 }}>
              <Heading color="inverse" level={2} size="level-3">
                Besluiten B en W
              </Heading>
              <LinkList>
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
          <Grid.Cell
            className="ams-prose"
            span={{ narrow: 4, medium: 4, wide: 5 }}
            start={{ narrow: 1, medium: 1, wide: 2 }}
          >
            <Heading level={2} size="level-3">
              Pers en woordvoering
            </Heading>
            <Paragraph>Voor vragen van journalisten aan de afdeling Bestuursvoorlichting.</Paragraph>
            <StandaloneLink href="#">Pers en woordvoering</StandaloneLink>
          </Grid.Cell>
          <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 5 }}>
            <Heading level={2} size="level-3">
              Meer over het college
            </Heading>
            <LinkList>
              <LinkList.Link href="#">Vervangingsregeling en locoburgemeesters</LinkList.Link>
              <LinkList.Link href="#">Gedragscode</LinkList.Link>
              <LinkList.Link href="#">Declaraties en dienstreizen</LinkList.Link>
              <LinkList.Link href="#">Geschenkenregister college van B&W</LinkList.Link>
            </LinkList>
          </Grid.Cell>
          <Grid.Cell
            className="ams-prose"
            span={{ narrow: 4, medium: 4, wide: 5 }}
            start={{ narrow: 1, medium: 1, wide: 2 }}
          >
            <Heading level={2} size="level-3">
              Contact
            </Heading>
            <Paragraph>Een bericht voor het college van burgemeester en wethouders kunt u:</Paragraph>
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
          <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 5 }}>
            <Heading level={2} size="level-3">
              Rechtenvrije foto’s
            </Heading>
            {/*
             * Image always crops to an aspect ratio: omitting aspectRatio falls back to the 16:9 default,
             * not to the file’s own ratio. This 640x360 source is already 16:9, so nothing is cropped.
             */}
            <Image alt="" src={exampleImageSource(640, 360, 12)} />
          </Grid.Cell>
        </Grid>
      </main>
    </>
  ),
}

const currentShop = shopGroups[0].shops[0]

export const WithSideNavigation: StoryObj = {
  parameters: {
    docs: {
      source: {
        // Because this story’s `render` takes an argument, the Code Panel rebuilds its source from the rendered tree:
        // JSX comments disappear and every `map` is expanded. Provide the source by hand so the `map` patterns read
        // the way a developer would write them.
        code: `// currentShop is the shop on screen: it titles the section and marks that entry in the navigation.

<>
  {/* Keep the breadcrumb in its own Grid above <main>, so it sits outside the main content region. */}
  <Grid paddingTop="large">
    <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
      <Breadcrumb>
        <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
        <Breadcrumb.Link href="#">Waar te gebruiken</Breadcrumb.Link>
      </Breadcrumb>
    </Grid.Cell>
  </Grid>
  {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
  {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
  <Grid paddingBottom="2x-large">
    {/* ams-prose sets the vertical rhythm between the title and the lead of this Content Header. */}
    <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
      <Heading level={1}>Winkels</Heading>
      <Paragraph size="large">
        Alle winkels met een fysiek adres vindt u op de kaart en in de lijst. Webshops vindt u alleen in de lijst.
      </Paragraph>
    </Grid.Cell>
    {/* Inside the Grid, the map lines up with the sections around it instead of spanning the full Page width. */}
    <Grid.Cell span={{ narrow: 4, medium: 8, wide: 10 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
      {/* Image always reserves its box; aspectRatio only changes it from the default 16:9 to the map’s 4:3. */}
      {/* This image carries no information the text does not, so it takes an empty alt. */}
      <Image alt="" aspectRatio="4:3" src="https://picsum.photos/1040/780" />
    </Grid.Cell>
    {/*
     * The navigation comes first in source, so it precedes the content in the reading and tab order. It
     * only sits beside the content on the wide grid; on narrower screens it spans the full width above it.
     */}
    <Grid.Cell span={{ narrow: 4, medium: 8, wide: 3 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
      {/*
       * collapsible is the capability and defaultExpanded the initial state; set on the outer list, every
       * group inherits it. aria-current="page" marks the shop on screen, and every other link gets
       * undefined, which drops the attribute.
       */}
      {/* The first of the two Skip Links this story declares targets this id; Table of Contents renders the nav. */}
      <TableOfContents collapsible heading="Deelnemende winkels" id="deelnemende-winkels">
        <TableOfContents.List defaultExpanded>
          {shopGroups.map(({ heading, shops }) => (
            <TableOfContents.Link href="#" key={heading} label={heading}>
              <TableOfContents.List>
                {shops.map((shop) => (
                  <TableOfContents.Link
                    aria-current={shop === currentShop ? 'page' : undefined}
                    href="#"
                    key={shop}
                    label={shop}
                  />
                ))}
              </TableOfContents.List>
            </TableOfContents.Link>
          ))}
        </TableOfContents.List>
      </TableOfContents>
    </Grid.Cell>
    {/*
     * A Subgrid hands the columns it spans to its own children, so the Cells inside it are placed on the
     * columns of the page rather than on columns of their own. It grows with the addresses it holds, so
     * the navigation beside it needs no row span and the page fits any number of them.
     */}
    {/*
     * The entry on screen is the main content; the navigation that switches between entries is not, so
     * <main> is the Subgrid rather than the Grid around it. That leaves the page title outside the
     * landmark, which is the trade-off for keeping the navigation out of it.
     */}
    {/* The second Skip Link targets this id, so the next Tab press lands on the entry itself. */}
    <Grid.Subgrid
      as="main"
      id="inhoud"
      span={{ narrow: 4, medium: 8, wide: 8 }}
      start={{ narrow: 1, medium: 1, wide: 5 }}
    >
      <Grid.Cell span="all">
        <Heading level={2}>{currentShop}</Heading>
      </Grid.Cell>
      {shopLocations.map(({ postalCode, street }) => (
        <Grid.Cell className="ams-prose" key={street} span={4}>
          <Paragraph>
            {street}
            <br />
            {postalCode} Amsterdam
          </Paragraph>
          {/*
           * Six buttons reading ‘Toon op de kaart’ are indistinguishable in a list of buttons, so a visually
           * hidden address extends each accessible name. It follows the visible label rather than
           * interrupting it, which keeps that label a contiguous part of the name for speech input.
           */}
          <Button variant="secondary">
            Toon op de kaart<span className="ams-visually-hidden">, {street}</span>
          </Button>
        </Grid.Cell>
      ))}
    </Grid.Subgrid>
  </Grid>
</>`,
        language: 'tsx',
      },
    },
    // This story overrides the single Skip Link of the shared Page Layout: a reader may want to reach either
    // the navigation or the entry it selects. Each targetId matches an id in the story below.
    skipLinks: [
      { label: 'Direct naar de deelnemende winkels', targetId: 'deelnemende-winkels' },
      { label: 'Direct naar inhoud', targetId: 'inhoud' },
    ],
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: (args) => (
    // currentShop is the shop on screen: it titles the section and marks that entry in the navigation.
    <>
      {/* Keep the breadcrumb in its own Grid above <main>, so it sits outside the main content region. */}
      <Grid paddingTop="large">
        <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
          <Breadcrumb>
            <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
            <Breadcrumb.Link href="#">Waar te gebruiken</Breadcrumb.Link>
          </Breadcrumb>
        </Grid.Cell>
      </Grid>
      {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
      {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
      <Grid paddingBottom="2x-large">
        {/* ams-prose sets the vertical rhythm between the title and the lead of this Content Header. */}
        <Grid.Cell
          className="ams-prose"
          span={{ narrow: 4, medium: 7, wide: 9 }}
          start={{ narrow: 1, medium: 1, wide: 2 }}
        >
          <Heading level={1}>Winkels</Heading>
          <Paragraph size="large">
            Alle winkels met een fysiek adres vindt u op de kaart en in de lijst. Webshops vindt u alleen in de lijst.
          </Paragraph>
        </Grid.Cell>
        {/* Inside the Grid, the map lines up with the sections around it instead of spanning the full Page width. */}
        <Grid.Cell span={{ narrow: 4, medium: 8, wide: 10 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
          {/* Image always reserves its box; aspectRatio only changes it from the default 16:9 to the map’s 4:3. */}
          {/* This image carries no information the text does not, so it takes an empty alt. */}
          <Image alt="" aspectRatio="4:3" src={exampleImageSource(1040, 780)} />
        </Grid.Cell>
        {/*
         * The navigation comes first in source, so it precedes the content in the reading and tab order. It
         * only sits beside the content on the wide grid; on narrower screens it spans the full width above it.
         */}
        <Grid.Cell span={{ narrow: 4, medium: 8, wide: 3 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
          {/*
           * collapsible is the capability and defaultExpanded the initial state; set on the outer list, every
           * group inherits it. aria-current="page" marks the shop on screen, and every other link gets
           * undefined, which drops the attribute.
           */}
          {/* The first of the two Skip Links this story declares targets this id; Table of Contents renders the nav. */}
          <TableOfContents collapsible heading="Deelnemende winkels" id="deelnemende-winkels">
            <TableOfContents.List defaultExpanded>
              {shopGroups.map(({ heading, shops }) => (
                <TableOfContents.Link href="#" key={heading} label={heading}>
                  <TableOfContents.List>
                    {shops.map((shop) => (
                      <TableOfContents.Link
                        aria-current={shop === currentShop ? 'page' : undefined}
                        href="#"
                        key={shop}
                        label={shop}
                      />
                    ))}
                  </TableOfContents.List>
                </TableOfContents.Link>
              ))}
            </TableOfContents.List>
          </TableOfContents>
        </Grid.Cell>
        {/*
         * A Subgrid hands the columns it spans to its own children, so the Cells inside it are placed on the
         * columns of the page rather than on columns of their own. It grows with the addresses it holds, so
         * the navigation beside it needs no row span and the page fits any number of them.
         */}
        {/*
         * The entry on screen is the main content; the navigation that switches between entries is not, so
         * <main> is the Subgrid rather than the Grid around it. That leaves the page title outside the
         * landmark, which is the trade-off for keeping the navigation out of it.
         */}
        {/* The second Skip Link targets this id, so the next Tab press lands on the entry itself. */}
        <Grid.Subgrid
          as="main"
          id="inhoud"
          span={{ narrow: 4, medium: 8, wide: 8 }}
          start={{ narrow: 1, medium: 1, wide: 5 }}
        >
          <Grid.Cell span="all">
            <Heading level={2}>{currentShop}</Heading>
          </Grid.Cell>
          {shopLocations.map(({ postalCode, street }) => (
            <Grid.Cell className="ams-prose" key={street} span={4}>
              <Paragraph>
                {street}
                <br />
                {postalCode} Amsterdam
              </Paragraph>
              {/*
               * Six buttons reading ‘Toon op de kaart’ are indistinguishable in a list of buttons, so a visually
               * hidden address extends each accessible name. It follows the visible label rather than
               * interrupting it, which keeps that label a contiguous part of the name for speech input.
               */}
              <Button variant="secondary">
                Toon op de kaart<span className="ams-visually-hidden">, {street}</span>
              </Button>
            </Grid.Cell>
          ))}
        </Grid.Subgrid>
      </Grid>
    </>
  ),
}

export const SubnavigationPage: StoryObj = {
  parameters: {
    docs: {
      source: {
        // Because this story’s `render` takes an argument, the Code Panel rebuilds its source from the rendered tree:
        // JSX comments disappear and every `map` is expanded. Provide the source by hand so the `map` and `getLinks`
        // patterns read the way a developer would write them.
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
  {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
  <main id="inhoud">
    <Grid paddingBottom="x-large">
      {/* ams-prose sets the vertical rhythm between the title and the lead of this Content Header. */}
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading level={1}>Onderwerp</Heading>
        <Paragraph size="large">
          Amsterdam wil een nieuwe traditie starten om met oud en nieuw naar een centrale nieuwjaarsviering
          te gaan in plaats van zelf vuurwerk af te steken.
        </Paragraph>
      </Grid.Cell>
    </Grid>
    {/* Outside the Grid, the image spans the full Page width: up to 90rem, centred — not the full window. */}
    {/* Image always reserves its box; aspectRatio only changes it from the default 16:9 to a banner’s 16:5. */}
    {/* This image carries no information the text does not, so it takes an empty alt. */}
    <Image alt="" aspectRatio="16:5" src="https://picsum.photos/1440/450" />
    <Grid paddingVertical="x-large">
      {/* This cell is as wide as a regular content body, but it start-aligns with the grid it introduces. */}
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        {/*
         * This page nests one level deeper than the other navigation pages: level-2 section titles with
         * level-3 groups under them. Those headings each want the size of their own level, so they set
         * no size. The Spotlight headings below are the exception: they stay level={2} in the outline
         * but take size="level-3", as Link Sections do.
         */}
        <Heading level={2}>L2 Paragraaf titel</Heading>
        <Paragraph>Voorbeeldtekst bij dit onderwerp.</Paragraph>
      </Grid.Cell>
      {/* start pins the even-indexed cells to the content column; odd-indexed cells fall in beside them. */}
      {burgerzakenLinks.slice(0, 6).map(({ heading, links }, index) => (
        <Grid.Cell className="ams-prose"
          key={heading}
          span={{ narrow: 4, medium: 4, wide: 5 }}
          start={index % 2 ? undefined : { narrow: 1, medium: 1, wide: 2 }}
        >
          <Heading level={3}>{heading}</Heading>
          {getLinks(links)}
        </Grid.Cell>
      ))}
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading level={3}>Titel</Heading>
        <Paragraph>Voorbeeldtekst bij dit onderwerp.</Paragraph>
        <StandaloneLink href="#">Lees meer</StandaloneLink>
      </Grid.Cell>
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 5 }}>
        <Heading level={3}>Titel</Heading>
        <Paragraph>Voorbeeldtekst bij dit onderwerp.</Paragraph>
        <StandaloneLink href="#">Lees meer</StandaloneLink>
      </Grid.Cell>
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading level={3}>Titel</Heading>
        <Paragraph>Voorbeeldtekst bij dit onderwerp.</Paragraph>
        <StandaloneLink href="#">Lees meer</StandaloneLink>
      </Grid.Cell>
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 5 }}>
        <Heading level={3}>Titel</Heading>
        <Paragraph>Voorbeeldtekst bij dit onderwerp.</Paragraph>
        <StandaloneLink href="#">Lees meer</StandaloneLink>
      </Grid.Cell>
    </Grid>
    <Spotlight color="magenta">
      <Grid paddingVertical="x-large">
        <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
          <Heading color="inverse" level={2} size="level-3">Titel</Heading>
          <Paragraph color="inverse">Voorbeeldtekst bij dit onderwerp.</Paragraph>
        </Grid.Cell>
        <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 5 }}>
          <Heading color="inverse" level={2} size="level-3">Titel</Heading>
          <Paragraph color="inverse">Voorbeeldtekst bij dit onderwerp.</Paragraph>
        </Grid.Cell>
      </Grid>
    </Spotlight>
    {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
    <Grid paddingBottom="2x-large" paddingTop="x-large">
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading level={2}>L2 Paragraaf titel</Heading>
        <Paragraph>Voorbeeldtekst bij dit onderwerp.</Paragraph>
      </Grid.Cell>
      {/* start pins the even-indexed cells to the content column; odd-indexed cells fall in beside them. */}
      {burgerzakenLinks.slice(4, 8).map(({ heading, links }, index) => (
        <Grid.Cell className="ams-prose"
          key={heading}
          span={{ narrow: 4, medium: 4, wide: 5 }}
          start={index % 2 ? undefined : { narrow: 1, medium: 1, wide: 2 }}
        >
          <Heading level={3}>{heading}</Heading>
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
      {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
      <main id="inhoud">
        <Grid paddingBottom="x-large">
          {/* ams-prose sets the vertical rhythm between the title and the lead of this Content Header. */}
          <Grid.Cell
            className="ams-prose"
            span={{ narrow: 4, medium: 7, wide: 9 }}
            start={{ narrow: 1, medium: 1, wide: 2 }}
          >
            <Heading level={1}>{exampleHeading()}</Heading>
            <Paragraph size="large">
              Amsterdam wil een nieuwe traditie starten om met oud en nieuw naar een centrale nieuwjaarsviering te gaan
              in plaats van zelf vuurwerk af te steken.
            </Paragraph>
          </Grid.Cell>
        </Grid>
        {/* Outside the Grid, the image spans the full Page width: up to 90rem, centred — not the full window. */}
        {/* Image always reserves its box; aspectRatio only changes it from the default 16:9 to a banner’s 16:5. */}
        {/* This image carries no information the text does not, so it takes an empty alt. */}
        <Image alt="" aspectRatio="16:5" src={exampleImageSource(1440, 450)} />
        <Grid paddingVertical="x-large">
          {/* This cell is as wide as a regular content body, but it start-aligns with the grid it introduces. */}
          <Grid.Cell
            className="ams-prose"
            span={{ narrow: 4, medium: 6, wide: 7 }}
            start={{ narrow: 1, medium: 1, wide: 2 }}
          >
            {/*
             * This page nests one level deeper than the other navigation pages: level-2 section titles with
             * level-3 groups under them. Those headings each want the size of their own level, so they set
             * no size. The Spotlight headings below are the exception: they stay level={2} in the outline
             * but take size="level-3", as Link Sections do.
             */}
            <Heading level={2}>L2 Paragraaf titel</Heading>
            <Paragraph>{exampleParagraph()}</Paragraph>
          </Grid.Cell>
          {/* start pins the even-indexed cells to the content column; odd-indexed cells fall in beside them. */}
          {burgerzakenLinks.slice(0, 6).map(({ heading, links }, index) => (
            <Grid.Cell
              className="ams-prose"
              key={heading}
              span={{ narrow: 4, medium: 4, wide: 5 }}
              start={index % 2 ? undefined : { narrow: 1, medium: 1, wide: 2 }}
            >
              <Heading level={3}>{heading}</Heading>
              {getLinks(links)}
            </Grid.Cell>
          ))}
          <Grid.Cell
            className="ams-prose"
            span={{ narrow: 4, medium: 4, wide: 5 }}
            start={{ narrow: 1, medium: 1, wide: 2 }}
          >
            <Heading level={3}>{exampleHeading()}</Heading>
            <Paragraph>{exampleParagraph()}</Paragraph>
            <StandaloneLink href="#">{exampleStandaloneLink()}</StandaloneLink>
          </Grid.Cell>
          <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 5 }}>
            <Heading level={3}>{exampleHeading()}</Heading>
            <Paragraph>{exampleParagraph()}</Paragraph>
            <StandaloneLink href="#">{exampleStandaloneLink()}</StandaloneLink>
          </Grid.Cell>
          <Grid.Cell
            className="ams-prose"
            span={{ narrow: 4, medium: 4, wide: 5 }}
            start={{ narrow: 1, medium: 1, wide: 2 }}
          >
            <Heading level={3}>{exampleHeading()}</Heading>
            <Paragraph>{exampleParagraph()}</Paragraph>
            <StandaloneLink href="#">{exampleStandaloneLink()}</StandaloneLink>
          </Grid.Cell>
          <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 5 }}>
            <Heading level={3}>{exampleHeading()}</Heading>
            <Paragraph>{exampleParagraph()}</Paragraph>
            <StandaloneLink href="#">{exampleStandaloneLink()}</StandaloneLink>
          </Grid.Cell>
        </Grid>
        <Spotlight color="magenta">
          <Grid paddingVertical="x-large">
            <Grid.Cell
              className="ams-prose"
              span={{ narrow: 4, medium: 4, wide: 5 }}
              start={{ narrow: 1, medium: 1, wide: 2 }}
            >
              <Heading color="inverse" level={2} size="level-3">
                {exampleHeading()}
              </Heading>
              <Paragraph color="inverse">{exampleParagraph()}</Paragraph>
            </Grid.Cell>
            <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 5 }}>
              <Heading color="inverse" level={2} size="level-3">
                {exampleHeading()}
              </Heading>
              <Paragraph color="inverse">{exampleParagraph()}</Paragraph>
            </Grid.Cell>
          </Grid>
        </Spotlight>
        {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
        <Grid paddingBottom="2x-large" paddingTop="x-large">
          <Grid.Cell
            className="ams-prose"
            span={{ narrow: 4, medium: 6, wide: 7 }}
            start={{ narrow: 1, medium: 1, wide: 2 }}
          >
            <Heading level={2}>L2 Paragraaf titel</Heading>
            <Paragraph>{exampleParagraph()}</Paragraph>
          </Grid.Cell>
          {/* start pins the even-indexed cells to the content column; odd-indexed cells fall in beside them. */}
          {burgerzakenLinks.slice(4, 8).map(({ heading, links }, index) => (
            <Grid.Cell
              className="ams-prose"
              key={heading}
              span={{ narrow: 4, medium: 4, wide: 5 }}
              start={index % 2 ? undefined : { narrow: 1, medium: 1, wide: 2 }}
            >
              <Heading level={3}>{heading}</Heading>
              {getLinks(links)}
            </Grid.Cell>
          ))}
        </Grid>
      </main>
    </>
  ),
}
