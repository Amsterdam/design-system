/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Alert,
  Breadcrumb,
  Card,
  Column,
  DescriptionList,
  Grid,
  Heading,
  Image,
  ImageSlider,
  Link,
  LinkList,
  Paragraph,
  Spotlight,
  StandaloneLink,
  UnorderedList,
} from '@amsterdam/design-system-react'
import { MailIcon, PersonsIcon } from '@amsterdam/design-system-react-icons'

import { PhotoPlaceholder } from '#storybook/_components/PhotoPlaceholder/PhotoPlaceholder'

import { commonMeta } from '../common/commonMeta'
import { councilMembers, groupRepresentatives } from './data'

// Lorem Picsum is mostly landscapes, so these ids are hand-picked: each one is a photo in which a
// person is actually visible.
const pressPhotos = [
  { alt: 'Een optreden tijdens een stadsevenement.', id: 453 },
  { alt: 'Twee mensen in gesprek op straat.', id: 838 },
  { alt: 'Bezoekers op een markt in de stad.', id: 342 },
].map(({ alt, id }) => ({
  alt,
  aspectRatio: '16:9' as const,
  src: `https://picsum.photos/id/${id}/1440/810`,
}))

const sublocationPhotos = [
  { alt: 'De kunstgrasvelden gezien vanaf de tribune.', id: 1084 },
  { alt: 'De atletiekbaan met de werpkooi op de achtergrond.', id: 274 },
  { alt: 'Het clubhuis met het terras aan de voorzijde.', id: 355 },
  { alt: 'Een van de kleedkamers met banken en kapstokken.', id: 431 },
  { alt: 'De ingang van het sportpark aan de Sloterweg.', id: 452 },
].map(({ alt, id }) => ({
  alt,
  aspectRatio: '16:9' as const,
  src: `https://picsum.photos/id/${id}/1440/810`,
}))

const meta = {
  ...commonMeta,
  title: 'Pages/Public/Profile Page',
} satisfies Meta

export default meta

export const Person: StoryObj = {
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
        <Breadcrumb.Link href="#">Bestuur en organisatie</Breadcrumb.Link>
        <Breadcrumb.Link href="#">College van burgemeester en wethouders</Breadcrumb.Link>
      </Breadcrumb>
    </Grid.Cell>
  </Grid>
  {/*
   * Spotlights and full-bleed images sit between the Grids, so a plain <main> wraps them all. A page that
   * is a single section can put as="main" on the Grid itself instead.
   */}
  {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
  <main id="inhoud">
    {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
    <Grid paddingBottom="x-large">
      {/*
       * The title takes the full header cell, while the lead sits in a narrower one so the portrait fits
       * beside it. Two cells hand their spacing to the Grid’s row gap, which has no medium step.
       */}
      <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading level={1}>Burgemeester Miriam Doornbos</Heading>
      </Grid.Cell>
      {/* ams-prose sets the vertical rhythm between the elements of this Content Header. */}
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Paragraph size="large">De functie van burgemeester wordt uitgevoerd door Miriam Doornbos.</Paragraph>
        <Paragraph>Zij is verantwoordelijk voor de portefeuilles:</Paragraph>
        <UnorderedList>
          <UnorderedList.Item>Algemene Zaken</UnorderedList.Item>
          <UnorderedList.Item>Openbare Orde en Veiligheid</UnorderedList.Item>
          <UnorderedList.Item>Integraal Veiligheidsbeleid</UnorderedList.Item>
          <UnorderedList.Item>Regelgeving en Handhaving</UnorderedList.Item>
          <UnorderedList.Item>Juridische Zaken</UnorderedList.Item>
          <UnorderedList.Item>Communicatie</UnorderedList.Item>
          <UnorderedList.Item>Raadsaangelegenheden</UnorderedList.Item>
          <UnorderedList.Item>Bestuursdienst</UnorderedList.Item>
          <UnorderedList.Item>Democratisering</UnorderedList.Item>
          <UnorderedList.Item>Vrouwenoffensief</UnorderedList.Item>
        </UnorderedList>
      </Grid.Cell>
      {/*
       * PhotoPlaceholder is a Storybook stand-in, so that no photograph of a person appears in these
       * examples. Use an Image here, with a portrait of the person the page is about.
       */}
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 4 }}>
        <PhotoPlaceholder aspectRatio="3:4" />
      </Grid.Cell>
    </Grid>
    <Spotlight as="section">
      <Grid paddingVertical="x-large">
        <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
          <Heading color="inverse" level={2} size="level-3">Persberichten</Heading>
          <Paragraph color="inverse">
            De laatste 3 persberichten van de burgemeester of waarin de burgemeester een aandeel heeft
          </Paragraph>
          <LinkList>
            <LinkList.Link color="inverse" href="#">
              Gemeente investeert in veilige fietsroutes naar school
            </LinkList.Link>
            <LinkList.Link color="inverse" href="#">
              Extra inzet voor schone en veilige uitgaansgebieden
            </LinkList.Link>
            <LinkList.Link color="inverse" href="#">
              Gemeente en vervoerbedrijven maken reizen in de stad toegankelijker
            </LinkList.Link>
          </LinkList>
          <Column alignHorizontal="start" gap="small">
            <StandaloneLink color="inverse" href="#">
              Meer persberichten van de burgemeester
            </StandaloneLink>
            <StandaloneLink color="inverse" href="#">
              Persberichten over sluitingen
            </StandaloneLink>
          </Column>
        </Grid.Cell>
        <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
          <Heading color="inverse" level={2} size="level-3">Toespraken</Heading>
          <Paragraph color="inverse">De laatste 3 toespraken van de burgemeester</Paragraph>
          <LinkList>
            <LinkList.Link color="inverse" href="#">
              Toespraak bij de opening van het culturele seizoen
            </LinkList.Link>
            <LinkList.Link color="inverse" href="#">
              Toespraak bij de installatie van de gemeenteraad
            </LinkList.Link>
            <LinkList.Link color="inverse" href="#">
              Toespraak bij de opening van het nieuwe stadsloket
            </LinkList.Link>
          </LinkList>
          <StandaloneLink color="inverse" href="#">
            Meer toespraken van de burgemeester
          </StandaloneLink>
        </Grid.Cell>
      </Grid>
    </Spotlight>
    {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
    <Grid paddingBottom="2x-large" paddingTop="x-large">
      {/*
       * Two Subgrids make two columns of blocks. A Subgrid hands the columns it spans to its own Cells, so each
       * column stacks on its own and the tall photo block does not push the block beside it down. They span the
       * whole narrow grid, so it lays the right column out below the left one rather than interleaving the two.
       */}
      <Grid.Subgrid span={{ narrow: 4, medium: 4, wide: 6 }}>
        <Grid.Cell className="ams-prose" span="all">
          <Heading level={2} size="level-3">Contact</Heading>
          <Paragraph>
            Wilt u de burgemeester uitnodigen of een vraag stellen? Neem dan contact op met het secretariaat via het
            mailformulier.
          </Paragraph>
          <StandaloneLink href="#">Mail of nodig de burgemeester uit</StandaloneLink>
        </Grid.Cell>
        <Grid.Cell className="ams-prose" span="all">
          <Heading level={2} size="level-3">Sociale media</Heading>
          <Paragraph>Volg de burgemeester</Paragraph>
          <LinkList>
            <LinkList.Link href="#">Instagram burgemeester Miriam Doornbos</LinkList.Link>
            <LinkList.Link href="#">LinkedIn burgemeester Miriam Doornbos</LinkList.Link>
            <LinkList.Link href="#">Threads burgemeester Miriam Doornbos</LinkList.Link>
          </LinkList>
        </Grid.Cell>
        <Grid.Cell className="ams-prose" span="all">
          <Heading level={2} size="level-3">Meer informatie</Heading>
          {/*
           * The curriculum vitae and the list of additional positions carry too much text for this page, so each
           * one is a page of its own that this section links to.
           */}
          <LinkList>
            <LinkList.Link href="#">CV Miriam Doornbos</LinkList.Link>
            <LinkList.Link href="#">Nevenfuncties en neveninkomsten</LinkList.Link>
          </LinkList>
        </Grid.Cell>
      </Grid.Subgrid>
      <Grid.Subgrid span={{ narrow: 4, medium: 4, wide: 6 }}>
        <Grid.Cell className="ams-prose" span="all">
          <Heading level={2} size="level-3">Ambtswoning</Heading>
          <Paragraph>
            De burgemeester woont in de ambtswoning van de gemeente. Het pand wordt ook gebruikt voor ontvangsten en
            officiële gelegenheden.
          </Paragraph>
          <StandaloneLink href="#">Over de ambtswoning</StandaloneLink>
        </Grid.Cell>
        {/* Prose has no rule for an Image Slider, so every element but the last in this cell sets its own margin. */}
        <Grid.Cell span="all">
          <Heading className="ams-mb-s" level={2} size="level-3">Rechtenvrije foto’s</Heading>
          {/*
           * ImageSlider takes an array of images. Each entry accepts the props of an Image plus an
           * optional caption; only alt is required.
           */}
          <ImageSlider className="ams-mb-m" images={pressPhotos} />
          <StandaloneLink href="#">Bekijk de foto’s</StandaloneLink>
        </Grid.Cell>
      </Grid.Subgrid>
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
            <Breadcrumb.Link href="#">Bestuur en organisatie</Breadcrumb.Link>
            <Breadcrumb.Link href="#">College van burgemeester en wethouders</Breadcrumb.Link>
          </Breadcrumb>
        </Grid.Cell>
      </Grid>
      {/*
       * Spotlights and full-bleed images sit between the Grids, so a plain <main> wraps them all. A page that
       * is a single section can put as="main" on the Grid itself instead.
       */}
      {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
      <main id="inhoud">
        {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
        <Grid paddingBottom="x-large">
          {/*
           * The title takes the full header cell, while the lead sits in a narrower one so the portrait fits
           * beside it. Two cells hand their spacing to the Grid’s row gap, which has no medium step.
           */}
          <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
            <Heading level={1}>Burgemeester Miriam Doornbos</Heading>
          </Grid.Cell>
          {/* ams-prose sets the vertical rhythm between the elements of this Content Header. */}
          <Grid.Cell
            className="ams-prose"
            span={{ narrow: 4, medium: 4, wide: 5 }}
            start={{ narrow: 1, medium: 1, wide: 2 }}
          >
            <Paragraph size="large">De functie van burgemeester wordt uitgevoerd door Miriam Doornbos.</Paragraph>
            <Paragraph>Zij is verantwoordelijk voor de portefeuilles:</Paragraph>
            <UnorderedList>
              <UnorderedList.Item>Algemene Zaken</UnorderedList.Item>
              <UnorderedList.Item>Openbare Orde en Veiligheid</UnorderedList.Item>
              <UnorderedList.Item>Integraal Veiligheidsbeleid</UnorderedList.Item>
              <UnorderedList.Item>Regelgeving en Handhaving</UnorderedList.Item>
              <UnorderedList.Item>Juridische Zaken</UnorderedList.Item>
              <UnorderedList.Item>Communicatie</UnorderedList.Item>
              <UnorderedList.Item>Raadsaangelegenheden</UnorderedList.Item>
              <UnorderedList.Item>Bestuursdienst</UnorderedList.Item>
              <UnorderedList.Item>Democratisering</UnorderedList.Item>
              <UnorderedList.Item>Vrouwenoffensief</UnorderedList.Item>
            </UnorderedList>
          </Grid.Cell>
          {/*
           * PhotoPlaceholder is a Storybook stand-in, so that no photograph of a person appears in these
           * examples. Use an Image here, with a portrait of the person the page is about.
           */}
          <Grid.Cell span={{ narrow: 4, medium: 4, wide: 4 }}>
            <PhotoPlaceholder aspectRatio="3:4" />
          </Grid.Cell>
        </Grid>
        <Spotlight as="section">
          <Grid paddingVertical="x-large">
            <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
              <Heading color="inverse" level={2} size="level-3">
                Persberichten
              </Heading>
              <Paragraph color="inverse">
                De laatste 3 persberichten van de burgemeester of waarin de burgemeester een aandeel heeft
              </Paragraph>
              <LinkList>
                <LinkList.Link color="inverse" href="#">
                  Gemeente investeert in veilige fietsroutes naar school
                </LinkList.Link>
                <LinkList.Link color="inverse" href="#">
                  Extra inzet voor schone en veilige uitgaansgebieden
                </LinkList.Link>
                <LinkList.Link color="inverse" href="#">
                  Gemeente en vervoerbedrijven maken reizen in de stad toegankelijker
                </LinkList.Link>
              </LinkList>
              <Column alignHorizontal="start" gap="small">
                <StandaloneLink color="inverse" href="#">
                  Meer persberichten van de burgemeester
                </StandaloneLink>
                <StandaloneLink color="inverse" href="#">
                  Persberichten over sluitingen
                </StandaloneLink>
              </Column>
            </Grid.Cell>
            <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
              <Heading color="inverse" level={2} size="level-3">
                Toespraken
              </Heading>
              <Paragraph color="inverse">De laatste 3 toespraken van de burgemeester</Paragraph>
              <LinkList>
                <LinkList.Link color="inverse" href="#">
                  Toespraak bij de opening van het culturele seizoen
                </LinkList.Link>
                <LinkList.Link color="inverse" href="#">
                  Toespraak bij de installatie van de gemeenteraad
                </LinkList.Link>
                <LinkList.Link color="inverse" href="#">
                  Toespraak bij de opening van het nieuwe stadsloket
                </LinkList.Link>
              </LinkList>
              <StandaloneLink color="inverse" href="#">
                Meer toespraken van de burgemeester
              </StandaloneLink>
            </Grid.Cell>
          </Grid>
        </Spotlight>
        {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
        <Grid paddingBottom="2x-large" paddingTop="x-large">
          {/*
           * Two Subgrids make two columns of blocks. A Subgrid hands the columns it spans to its own Cells, so each
           * column stacks on its own and the tall photo block does not push the block beside it down. They span the
           * whole narrow grid, so it lays the right column out below the left one rather than interleaving the two.
           */}
          <Grid.Subgrid span={{ narrow: 4, medium: 4, wide: 6 }}>
            <Grid.Cell className="ams-prose" span="all">
              <Heading level={2} size="level-3">
                Contact
              </Heading>
              <Paragraph>
                Wilt u de burgemeester uitnodigen of een vraag stellen? Neem dan contact op met het secretariaat via het
                mailformulier.
              </Paragraph>
              <StandaloneLink href="#">Mail of nodig de burgemeester uit</StandaloneLink>
            </Grid.Cell>
            <Grid.Cell className="ams-prose" span="all">
              <Heading level={2} size="level-3">
                Sociale media
              </Heading>
              <Paragraph>Volg de burgemeester</Paragraph>
              <LinkList>
                <LinkList.Link href="#">Instagram burgemeester Miriam Doornbos</LinkList.Link>
                <LinkList.Link href="#">LinkedIn burgemeester Miriam Doornbos</LinkList.Link>
                <LinkList.Link href="#">Threads burgemeester Miriam Doornbos</LinkList.Link>
              </LinkList>
            </Grid.Cell>
            <Grid.Cell className="ams-prose" span="all">
              <Heading level={2} size="level-3">
                Meer informatie
              </Heading>
              {/*
               * The curriculum vitae and the list of additional positions carry too much text for this page, so each
               * one is a page of its own that this section links to.
               */}
              <LinkList>
                <LinkList.Link href="#">CV Miriam Doornbos</LinkList.Link>
                <LinkList.Link href="#">Nevenfuncties en neveninkomsten</LinkList.Link>
              </LinkList>
            </Grid.Cell>
          </Grid.Subgrid>
          <Grid.Subgrid span={{ narrow: 4, medium: 4, wide: 6 }}>
            <Grid.Cell className="ams-prose" span="all">
              <Heading level={2} size="level-3">
                Ambtswoning
              </Heading>
              <Paragraph>
                De burgemeester woont in de ambtswoning van de gemeente. Het pand wordt ook gebruikt voor ontvangsten en
                officiële gelegenheden.
              </Paragraph>
              <StandaloneLink href="#">Over de ambtswoning</StandaloneLink>
            </Grid.Cell>
            {/* Prose has no rule for an Image Slider, so every element but the last in this cell sets its own margin. */}
            <Grid.Cell span="all">
              <Heading className="ams-mb-s" level={2} size="level-3">
                Rechtenvrije foto’s
              </Heading>
              {/*
               * ImageSlider takes an array of images. Each entry accepts the props of an Image plus an
               * optional caption; only alt is required.
               */}
              <ImageSlider className="ams-mb-m" images={pressPhotos} />
              <StandaloneLink href="#">Bekijk de foto’s</StandaloneLink>
            </Grid.Cell>
          </Grid.Subgrid>
        </Grid>
      </main>
    </>
  ),
}

export const Group: StoryObj = {
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
        <Breadcrumb.Link href="#">Bestuur en organisatie</Breadcrumb.Link>
        <Breadcrumb.Link href="#">Raadsleden en fracties</Breadcrumb.Link>
      </Breadcrumb>
    </Grid.Cell>
  </Grid>
  {/*
   * Spotlights and full-bleed images sit between the Grids, so a plain <main> wraps them all. A page that
   * is a single section can put as="main" on the Grid itself instead.
   */}
  {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
  <main id="inhoud">
    {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
    <Grid paddingBottom="x-large">
      {/*
       * The title takes the full header cell, while the lead sits in a narrower one so the photo fits
       * beside it. Two cells hand their spacing to the Grid’s row gap, which has no medium step.
       */}
      <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading level={1}>Fractie Stadspartij</Heading>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Paragraph size="large">
          De fractie van de Stadspartij heeft 9 zetels. De fractievoorzitter is Karin Bosman.
        </Paragraph>
      </Grid.Cell>
      {/*
       * PhotoPlaceholder is a Storybook stand-in, so that no photograph of a person appears in these
       * examples. Use an Image here, and pass PersonsIcon for a group so the icon matches the subject.
       */}
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 4 }}>
        <PhotoPlaceholder aspectRatio="16:9" icon={PersonsIcon} />
      </Grid.Cell>
      <Grid.Cell span="all">
        <Heading level={2}>Adres en contact</Heading>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 6 }}>
        <DescriptionList>
          <DescriptionList.Term>Adres</DescriptionList.Term>
          {/* One Description holds the whole address: separate ones would read as alternative addresses. */}
          <DescriptionList.Description>
            Gemeenteraad Amsterdam
            <br />
            Amstel 1
            <br />
            kamer 1B04
            <br />
            1011 PN Amsterdam
          </DescriptionList.Description>
        </DescriptionList>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 6 }}>
        <DescriptionList>
          <DescriptionList.Term>Bellen</DescriptionList.Term>
          <DescriptionList.Description>
            <Link href="tel:+31205523477">020 552 3477</Link>
          </DescriptionList.Description>
          <DescriptionList.Term>Mailen</DescriptionList.Term>
          <DescriptionList.Description>
            <Link href="mailto:stadspartij@raad.amsterdam.nl">stadspartij@raad.amsterdam.nl</Link>
          </DescriptionList.Description>
          <DescriptionList.Term>Website</DescriptionList.Term>
          <DescriptionList.Description>
            <Link href="#" rel="external">stadspartij-amsterdam.nl</Link>
          </DescriptionList.Description>
        </DescriptionList>
      </Grid.Cell>
    </Grid>
    <Spotlight as="section">
      <Grid paddingVertical="x-large">
        {/* ams-prose sets the vertical rhythm between the elements of a cell, so none of them needs a margin. */}
        <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
          <Heading color="inverse" level={2}>Persberichten</Heading>
          <Paragraph color="inverse">De fractie laat van zich horen over de onderwerpen die in de raad spelen.</Paragraph>
          <LinkList>
            <LinkList.Link color="inverse" href="#">
              Stadspartij wil meer betaalbare woningen in nieuwe wijken
            </LinkList.Link>
            <LinkList.Link color="inverse" href="#">
              Fractie stelt vragen over de wachtlijsten in de jeugdzorg
            </LinkList.Link>
            <LinkList.Link color="inverse" href="#">
              Stadspartij presenteert plan voor gratis openbaar vervoer voor minima
            </LinkList.Link>
          </LinkList>
          <StandaloneLink color="inverse" href="#">
            Meer persberichten van de fractie
          </StandaloneLink>
        </Grid.Cell>
        <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
          <Heading color="inverse" level={2}>Toespraken</Heading>
          <Paragraph color="inverse">Lees na wat de fractie in de raadsvergaderingen naar voren bracht.</Paragraph>
          <LinkList>
            <LinkList.Link color="inverse" href="#">
              Algemene beschouwingen: de bijdrage van Karin Bosman
            </LinkList.Link>
            <LinkList.Link color="inverse" href="#">
              Bijdrage aan het debat over de woonagenda
            </LinkList.Link>
            <LinkList.Link color="inverse" href="#">
              Toespraak bij de start van het raadsjaar
            </LinkList.Link>
          </LinkList>
          <StandaloneLink color="inverse" href="#">
            Meer toespraken van de fractie
          </StandaloneLink>
        </Grid.Cell>
      </Grid>
    </Spotlight>
    {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
    <Grid paddingBottom="2x-large" paddingTop="x-large">
      <Grid.Cell span="all">
        <Heading level={2}>Raadsleden</Heading>
      </Grid.Cell>
      {/* Preview cards take a span of 4, so they fit three to a row on the wide grid and two on the medium one. */}
      {councilMembers.map(({ name, role }) => (
        <Grid.Cell key={name} span={4}>
          <Card>
            {/*
             * Screen readers skip a Card’s image, so only use a decorative one with an empty alt. The
             * placeholder takes the class Card.Image would set, so it sits in the same place.
             */}
            <PhotoPlaceholder aspectRatio="16:9" className="ams-card__image" />
            {/* Level 3 keeps the card under the level-2 section heading; Card.Heading supplies its own size. */}
            <Card.Heading level={3}>
              {/* Card.Link stretches over the whole Card, so the entire Card is one clickable link. */}
              <Card.Link href="#">{name}</Card.Link>
            </Card.Heading>
            <Paragraph size="small">{role}</Paragraph>
          </Card>
        </Grid.Cell>
      ))}
      <Grid.Cell span="all">
        <Heading level={2}>Fractievertegenwoordigers</Heading>
      </Grid.Cell>
      {groupRepresentatives.map(({ name, role }) => (
        <Grid.Cell key={name} span={4}>
          <Card>
            <PhotoPlaceholder aspectRatio="16:9" className="ams-card__image" />
            <Card.Heading level={3}>
              <Card.Link href="#">{name}</Card.Link>
            </Card.Heading>
            <Paragraph size="small">{role}</Paragraph>
          </Card>
        </Grid.Cell>
      ))}
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
            <Breadcrumb.Link href="#">Bestuur en organisatie</Breadcrumb.Link>
            <Breadcrumb.Link href="#">Raadsleden en fracties</Breadcrumb.Link>
          </Breadcrumb>
        </Grid.Cell>
      </Grid>
      {/*
       * Spotlights and full-bleed images sit between the Grids, so a plain <main> wraps them all. A page that
       * is a single section can put as="main" on the Grid itself instead.
       */}
      {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
      <main id="inhoud">
        {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
        <Grid paddingBottom="x-large">
          {/*
           * The title takes the full header cell, while the lead sits in a narrower one so the photo fits
           * beside it. Two cells hand their spacing to the Grid’s row gap, which has no medium step.
           */}
          <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
            <Heading level={1}>Fractie Stadspartij</Heading>
          </Grid.Cell>
          <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
            <Paragraph size="large">
              De fractie van de Stadspartij heeft 9 zetels. De fractievoorzitter is Karin Bosman.
            </Paragraph>
          </Grid.Cell>
          {/*
           * PhotoPlaceholder is a Storybook stand-in, so that no photograph of a person appears in these
           * examples. Use an Image here, and pass PersonsIcon for a group so the icon matches the subject.
           */}
          <Grid.Cell span={{ narrow: 4, medium: 4, wide: 4 }}>
            <PhotoPlaceholder aspectRatio="16:9" icon={PersonsIcon} />
          </Grid.Cell>
          <Grid.Cell span="all">
            <Heading level={2}>Adres en contact</Heading>
          </Grid.Cell>
          <Grid.Cell span={{ narrow: 4, medium: 4, wide: 6 }}>
            <DescriptionList>
              <DescriptionList.Term>Adres</DescriptionList.Term>
              {/* One Description holds the whole address: separate ones would read as alternative addresses. */}
              <DescriptionList.Description>
                Gemeenteraad Amsterdam
                <br />
                Amstel 1<br />
                kamer 1B04
                <br />
                1011 PN Amsterdam
              </DescriptionList.Description>
            </DescriptionList>
          </Grid.Cell>
          <Grid.Cell span={{ narrow: 4, medium: 4, wide: 6 }}>
            <DescriptionList>
              <DescriptionList.Term>Bellen</DescriptionList.Term>
              <DescriptionList.Description>
                <Link href="tel:+31205523477">020 552 3477</Link>
              </DescriptionList.Description>
              <DescriptionList.Term>Mailen</DescriptionList.Term>
              <DescriptionList.Description>
                <Link href="mailto:stadspartij@raad.amsterdam.nl">stadspartij@raad.amsterdam.nl</Link>
              </DescriptionList.Description>
              <DescriptionList.Term>Website</DescriptionList.Term>
              <DescriptionList.Description>
                <Link href="#" rel="external">
                  stadspartij-amsterdam.nl
                </Link>
              </DescriptionList.Description>
            </DescriptionList>
          </Grid.Cell>
        </Grid>
        <Spotlight as="section">
          <Grid paddingVertical="x-large">
            {/* ams-prose sets the vertical rhythm between the elements of a cell, so none of them needs a margin. */}
            <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
              <Heading color="inverse" level={2}>
                Persberichten
              </Heading>
              <Paragraph color="inverse">
                De fractie laat van zich horen over de onderwerpen die in de raad spelen.
              </Paragraph>
              <LinkList>
                <LinkList.Link color="inverse" href="#">
                  Stadspartij wil meer betaalbare woningen in nieuwe wijken
                </LinkList.Link>
                <LinkList.Link color="inverse" href="#">
                  Fractie stelt vragen over de wachtlijsten in de jeugdzorg
                </LinkList.Link>
                <LinkList.Link color="inverse" href="#">
                  Stadspartij presenteert plan voor gratis openbaar vervoer voor minima
                </LinkList.Link>
              </LinkList>
              <StandaloneLink color="inverse" href="#">
                Meer persberichten van de fractie
              </StandaloneLink>
            </Grid.Cell>
            <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
              <Heading color="inverse" level={2}>
                Toespraken
              </Heading>
              <Paragraph color="inverse">Lees na wat de fractie in de raadsvergaderingen naar voren bracht.</Paragraph>
              <LinkList>
                <LinkList.Link color="inverse" href="#">
                  Algemene beschouwingen: de bijdrage van Karin Bosman
                </LinkList.Link>
                <LinkList.Link color="inverse" href="#">
                  Bijdrage aan het debat over de woonagenda
                </LinkList.Link>
                <LinkList.Link color="inverse" href="#">
                  Toespraak bij de start van het raadsjaar
                </LinkList.Link>
              </LinkList>
              <StandaloneLink color="inverse" href="#">
                Meer toespraken van de fractie
              </StandaloneLink>
            </Grid.Cell>
          </Grid>
        </Spotlight>
        {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
        <Grid paddingBottom="2x-large" paddingTop="x-large">
          <Grid.Cell span="all">
            <Heading level={2}>Raadsleden</Heading>
          </Grid.Cell>
          {/* Preview cards take a span of 4, so they fit three to a row on the wide grid and two on the medium one. */}
          {councilMembers.map(({ name, role }) => (
            <Grid.Cell key={name} span={4}>
              <Card>
                {/*
                 * Screen readers skip a Card’s image, so only use a decorative one with an empty alt. The
                 * placeholder takes the class Card.Image would set, so it sits in the same place.
                 */}
                <PhotoPlaceholder aspectRatio="16:9" className="ams-card__image" />
                {/* Level 3 keeps the card under the level-2 section heading; Card.Heading supplies its own size. */}
                <Card.Heading level={3}>
                  {/* Card.Link stretches over the whole Card, so the entire Card is one clickable link. */}
                  <Card.Link href="#">{name}</Card.Link>
                </Card.Heading>
                <Paragraph size="small">{role}</Paragraph>
              </Card>
            </Grid.Cell>
          ))}
          <Grid.Cell span="all">
            <Heading level={2}>Fractievertegenwoordigers</Heading>
          </Grid.Cell>
          {groupRepresentatives.map(({ name, role }) => (
            <Grid.Cell key={name} span={4}>
              <Card>
                <PhotoPlaceholder aspectRatio="16:9" className="ams-card__image" />
                <Card.Heading level={3}>
                  <Card.Link href="#">{name}</Card.Link>
                </Card.Heading>
                <Paragraph size="small">{role}</Paragraph>
              </Card>
            </Grid.Cell>
          ))}
        </Grid>
      </main>
    </>
  ),
}

export const Location: StoryObj = {
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
        <Breadcrumb.Link href="#">Sport en bewegen</Breadcrumb.Link>
        <Breadcrumb.Link href="#">Sportparken</Breadcrumb.Link>
      </Breadcrumb>
    </Grid.Cell>
  </Grid>
  {/*
   * Spotlights and full-bleed images sit between the Grids, so a plain <main> wraps them all. A page that
   * is a single section can put as="main" on the Grid itself instead.
   */}
  {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
  <main id="inhoud">
    {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
    <Grid paddingBottom="x-large">
      {/* ams-prose sets the vertical rhythm between the elements of this Content Header. */}
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading level={1}>Sportpark Riekerhaven</Heading>
        <Paragraph size="large">
          Sportpark Riekerhaven ligt in Nieuw-West, tussen de Riekerhaven en de Anderlechtlaan. Op het park sporten
          voetballers, cricketers, honkballers en atleten, en er is ruimte voor buurtactiviteiten.
        </Paragraph>
      </Grid.Cell>
    </Grid>
    <Grid>
      {/*
       * Image always reserves its box; aspectRatio only changes it from the default 16:9 to a banner’s
       * 16:5. This one sits in the first screenful, so it is not lazy-loaded: that would delay the
       * largest image in the viewport.
       */}
      <Grid.Cell span="all">
        <Image
          alt="De velden van Sportpark Riekerhaven vanuit de lucht, met daarachter de atletiekbaan."
          aspectRatio="16:5"
          src="https://picsum.photos/id/274/1440/450"
        />
      </Grid.Cell>
    </Grid>
    <Grid paddingVertical="x-large">
      <Grid.Cell span="all">
        <Heading level={2}>Faciliteiten</Heading>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 6 }}>
        <UnorderedList>
          <UnorderedList.Item>3 x FIFA-gecertificeerde kunstgrasvelden naast elkaar</UnorderedList.Item>
          <UnorderedList.Item>
            Twee van de velden kunnen worden gekoppeld tot één groot veld voor cricket
          </UnorderedList.Item>
          <UnorderedList.Item>
            Veld drie is tevens een jeugdhonkbalveld met blauwe honkbalbelijning
          </UnorderedList.Item>
          <UnorderedList.Item>Beachvolleybal</UnorderedList.Item>
          <UnorderedList.Item>Cricketveld en -pitch</UnorderedList.Item>
          <UnorderedList.Item>Verenigingsgebouw</UnorderedList.Item>
        </UnorderedList>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 6 }}>
        <UnorderedList>
          <UnorderedList.Item>
            400 meter lange atletiekbaan, in het midden ligt een veld voor uiteenlopende sporten en spellen
          </UnorderedList.Item>
          <UnorderedList.Item>
            Atletiekgebouw met ruimte voor vergaderen, wedstrijdsecretariaat, 2 kleedkamers, invalidentoilet en
            ruimte voor scheidsrechters en EHBO
          </UnorderedList.Item>
          <UnorderedList.Item>
            Multifunctioneel verenigingsgebouw met 8 kleedkamers en sportkantine
          </UnorderedList.Item>
        </UnorderedList>
      </Grid.Cell>
    </Grid>
    <Spotlight as="section">
      <Grid paddingVertical="x-large">
        <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
          <Heading color="inverse" level={2} size="level-3">Wel te huur</Heading>
          <Paragraph color="inverse">De beachvolleybalvelden zijn te huur.</Paragraph>
        </Grid.Cell>
        <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
          <Heading color="inverse" level={2} size="level-3">Niet te huur</Heading>
          <Paragraph color="inverse">
            Sportvelden kunnen niet worden gehuurd. De gemeente verhuurt deze velden alleen aan de sportclubs met
            een eigen clubgebouw.
          </Paragraph>
        </Grid.Cell>
        <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
          <Heading color="inverse" level={2} size="level-3">
            Voor scholen en voetbalscholen
          </Heading>
          <Paragraph color="inverse">
            Bent u een school voor primair of voortgezet onderwijs, of een voetbalschool, neem dan contact op.
          </Paragraph>
        </Grid.Cell>
        <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
          <Heading color="inverse" level={2} size="level-3">Tarieven en huisregels</Heading>
          <LinkList>
            <LinkList.Link color="inverse" href="#">
              Tarieven
            </LinkList.Link>
            <LinkList.Link color="inverse" href="#">
              Huisregels
            </LinkList.Link>
          </LinkList>
        </Grid.Cell>
      </Grid>
    </Spotlight>
    <Grid paddingVertical="x-large">
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
        <Heading level={2} size="level-3">Contact</Heading>
        <Paragraph>
          Heeft u vragen over de activiteiten op het sportpark of wilt u een veld huren? Mail dan naar{' '}
          <Link href="mailto:sportverhuur@amsterdam.nl">sportverhuur@amsterdam.nl</Link>.
        </Paragraph>
      </Grid.Cell>
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
        <Heading level={2} size="level-3">Openbaar vervoer</Heading>
        <Paragraph>Uw bezoekers kunnen via 9292.nl hun reis plannen.</Paragraph>
      </Grid.Cell>
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
        <Heading level={2} size="level-3">Zie ook</Heading>
        <LinkList>
          <LinkList.Link href="#">Urban Sport Zone Zeeburgereiland</LinkList.Link>
        </LinkList>
      </Grid.Cell>
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
        <Heading level={2} size="level-3">Auto of fiets parkeren</Heading>
        <Paragraph>
          Bij de ingang liggen 2 gratis parkeerplaatsen voor bezoekers met een gehandicaptenparkeerkaart.
        </Paragraph>
        <Paragraph>
          Op de parkeerplaats naast het sportpark betaalt u € 2,60 per uur en € 26,00 per dag, van 07.00 tot 19.00
          uur.
        </Paragraph>
        <Paragraph>Fietsen stalt u gratis in de overdekte fietsenstalling met plek voor 200 fietsen.</Paragraph>
      </Grid.Cell>
    </Grid>
    {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
    <Grid paddingBottom="2x-large">
      <Grid.Cell span="all">
        <Heading level={2}>Locatie</Heading>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 8, wide: 10 }}>
        <Image
          alt="Kaart met de ligging van Sportpark Riekerhaven aan de Anderlechtlaan in Amsterdam Nieuw-West."
          aspectRatio="16:9"
          loading="lazy"
          src="https://picsum.photos/id/164/1280/720"
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
            <Breadcrumb.Link href="#">Sport en bewegen</Breadcrumb.Link>
            <Breadcrumb.Link href="#">Sportparken</Breadcrumb.Link>
          </Breadcrumb>
        </Grid.Cell>
      </Grid>
      {/*
       * Spotlights and full-bleed images sit between the Grids, so a plain <main> wraps them all. A page that
       * is a single section can put as="main" on the Grid itself instead.
       */}
      {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
      <main id="inhoud">
        {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
        <Grid paddingBottom="x-large">
          {/* ams-prose sets the vertical rhythm between the elements of this Content Header. */}
          <Grid.Cell
            className="ams-prose"
            span={{ narrow: 4, medium: 7, wide: 9 }}
            start={{ narrow: 1, medium: 1, wide: 2 }}
          >
            <Heading level={1}>Sportpark Riekerhaven</Heading>
            <Paragraph size="large">
              Sportpark Riekerhaven ligt in Nieuw-West, tussen de Riekerhaven en de Anderlechtlaan. Op het park sporten
              voetballers, cricketers, honkballers en atleten, en er is ruimte voor buurtactiviteiten.
            </Paragraph>
          </Grid.Cell>
        </Grid>
        <Grid>
          {/*
           * Image always reserves its box; aspectRatio only changes it from the default 16:9 to a banner’s
           * 16:5. This one sits in the first screenful, so it is not lazy-loaded: that would delay the
           * largest image in the viewport.
           */}
          <Grid.Cell span="all">
            <Image
              alt="De velden van Sportpark Riekerhaven vanuit de lucht, met daarachter de atletiekbaan."
              aspectRatio="16:5"
              src="https://picsum.photos/id/274/1440/450"
            />
          </Grid.Cell>
        </Grid>
        <Grid paddingVertical="x-large">
          <Grid.Cell span="all">
            <Heading level={2}>Faciliteiten</Heading>
          </Grid.Cell>
          <Grid.Cell span={{ narrow: 4, medium: 4, wide: 6 }}>
            <UnorderedList>
              <UnorderedList.Item>3 x FIFA-gecertificeerde kunstgrasvelden naast elkaar</UnorderedList.Item>
              <UnorderedList.Item>
                Twee van de velden kunnen worden gekoppeld tot één groot veld voor cricket
              </UnorderedList.Item>
              <UnorderedList.Item>
                Veld drie is tevens een jeugdhonkbalveld met blauwe honkbalbelijning
              </UnorderedList.Item>
              <UnorderedList.Item>Beachvolleybal</UnorderedList.Item>
              <UnorderedList.Item>Cricketveld en -pitch</UnorderedList.Item>
              <UnorderedList.Item>Verenigingsgebouw</UnorderedList.Item>
            </UnorderedList>
          </Grid.Cell>
          <Grid.Cell span={{ narrow: 4, medium: 4, wide: 6 }}>
            <UnorderedList>
              <UnorderedList.Item>
                400 meter lange atletiekbaan, in het midden ligt een veld voor uiteenlopende sporten en spellen
              </UnorderedList.Item>
              <UnorderedList.Item>
                Atletiekgebouw met ruimte voor vergaderen, wedstrijdsecretariaat, 2 kleedkamers, invalidentoilet en
                ruimte voor scheidsrechters en EHBO
              </UnorderedList.Item>
              <UnorderedList.Item>
                Multifunctioneel verenigingsgebouw met 8 kleedkamers en sportkantine
              </UnorderedList.Item>
            </UnorderedList>
          </Grid.Cell>
        </Grid>
        <Spotlight as="section">
          <Grid paddingVertical="x-large">
            <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
              <Heading color="inverse" level={2} size="level-3">
                Wel te huur
              </Heading>
              <Paragraph color="inverse">De beachvolleybalvelden zijn te huur.</Paragraph>
            </Grid.Cell>
            <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
              <Heading color="inverse" level={2} size="level-3">
                Niet te huur
              </Heading>
              <Paragraph color="inverse">
                Sportvelden kunnen niet worden gehuurd. De gemeente verhuurt deze velden alleen aan de sportclubs met
                een eigen clubgebouw.
              </Paragraph>
            </Grid.Cell>
            <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
              <Heading color="inverse" level={2} size="level-3">
                Voor scholen en voetbalscholen
              </Heading>
              <Paragraph color="inverse">
                Bent u een school voor primair of voortgezet onderwijs, of een voetbalschool, neem dan contact op.
              </Paragraph>
            </Grid.Cell>
            <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
              <Heading color="inverse" level={2} size="level-3">
                Tarieven en huisregels
              </Heading>
              <LinkList>
                <LinkList.Link color="inverse" href="#">
                  Tarieven
                </LinkList.Link>
                <LinkList.Link color="inverse" href="#">
                  Huisregels
                </LinkList.Link>
              </LinkList>
            </Grid.Cell>
          </Grid>
        </Spotlight>
        <Grid paddingVertical="x-large">
          <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
            <Heading level={2} size="level-3">
              Contact
            </Heading>
            <Paragraph>
              Heeft u vragen over de activiteiten op het sportpark of wilt u een veld huren? Mail dan naar{' '}
              <Link href="mailto:sportverhuur@amsterdam.nl">sportverhuur@amsterdam.nl</Link>.
            </Paragraph>
          </Grid.Cell>
          <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
            <Heading level={2} size="level-3">
              Openbaar vervoer
            </Heading>
            <Paragraph>Uw bezoekers kunnen via 9292.nl hun reis plannen.</Paragraph>
          </Grid.Cell>
          <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
            <Heading level={2} size="level-3">
              Zie ook
            </Heading>
            <LinkList>
              <LinkList.Link href="#">Urban Sport Zone Zeeburgereiland</LinkList.Link>
            </LinkList>
          </Grid.Cell>
          <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
            <Heading level={2} size="level-3">
              Auto of fiets parkeren
            </Heading>
            <Paragraph>
              Bij de ingang liggen 2 gratis parkeerplaatsen voor bezoekers met een gehandicaptenparkeerkaart.
            </Paragraph>
            <Paragraph>
              Op de parkeerplaats naast het sportpark betaalt u € 2,60 per uur en € 26,00 per dag, van 07.00 tot 19.00
              uur.
            </Paragraph>
            <Paragraph>Fietsen stalt u gratis in de overdekte fietsenstalling met plek voor 200 fietsen.</Paragraph>
          </Grid.Cell>
        </Grid>
        {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
        <Grid paddingBottom="2x-large">
          <Grid.Cell span="all">
            <Heading level={2}>Locatie</Heading>
          </Grid.Cell>
          <Grid.Cell span={{ narrow: 4, medium: 8, wide: 10 }}>
            <Image
              alt="Kaart met de ligging van Sportpark Riekerhaven aan de Anderlechtlaan in Amsterdam Nieuw-West."
              aspectRatio="16:9"
              loading="lazy"
              src="https://picsum.photos/id/164/1280/720"
            />
          </Grid.Cell>
        </Grid>
      </main>
    </>
  ),
}

export const LocationLarge: StoryObj = {
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
        <Breadcrumb.Link href="#">Sport en bewegen</Breadcrumb.Link>
        <Breadcrumb.Link href="#">Sporthallen</Breadcrumb.Link>
      </Breadcrumb>
    </Grid.Cell>
  </Grid>
  {/*
   * Spotlights and full-bleed images sit between the Grids, so a plain <main> wraps them all. A page that
   * is a single section can put as="main" on the Grid itself instead.
   */}
  {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
  <main id="inhoud">
    {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
    <Grid paddingBottom="x-large">
      {/* ams-prose sets the vertical rhythm between the elements of this Content Header. */}
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading level={1}>Apollohal</Heading>
        <Paragraph size="large">
          In de Apollohal aan de Apollolaan sport u in een grote zaal of in 1 van de 2 gymzalen. Verenigingen,
          scholen en bedrijven huren er zalen voor trainingen, wedstrijden en evenementen.
        </Paragraph>
      </Grid.Cell>
    </Grid>
    <Grid>
      {/*
       * Image always reserves its box; aspectRatio only changes it from the default 16:9 to a banner’s
       * 16:5. This one sits in the first screenful, so it is not lazy-loaded: that would delay the
       * largest image in the viewport.
       */}
      <Grid.Cell span="all">
        <Image
          alt="De voorgevel van de Apollohal aan de Apollolaan."
          aspectRatio="16:5"
          src="https://picsum.photos/id/164/1440/450"
        />
      </Grid.Cell>
    </Grid>
    <Grid paddingVertical="x-large">
      {/* An Alert sits in its own Grid Cell and takes no margin of its own; the Grid spaces it. */}
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
        {/* Alert generates a unique id for its heading, so only pass headingId to reference that heading elsewhere. */}
        <Alert closeable closeButtonLabel="Sluiten" heading="Werkzaamheden Muzenplein en Apollolaan" headingLevel={2}>
          <Paragraph>
            Vanaf 27 oktober 2025 voert de gemeente werkzaamheden uit op het Muzenplein en de Apollolaan. Van 10
            november 2025 tot juni 2026 is het Muzenplein afgesloten voor auto’s. De Apollohal is in die periode
            niet met de auto te bereiken. Fietsers en voetgangers kunnen er wel langs.
          </Paragraph>
        </Alert>
      </Grid.Cell>
    </Grid>
    <Grid paddingBottom="x-large">
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
        <Heading level={2}>Over de Apollohal</Heading>
        <Paragraph>
          De Apollohal is een sporthal in Amsterdam-Zuid met moderne voorzieningen en een rijke sporthistorie. Het
          gebouw heeft 1 grote zaal en 2 gymzalen en is geschikt voor veel verschillende sporten en evenementen.
          Sinds 2004 is de Apollohal een rijksmonument.
        </Paragraph>
      </Grid.Cell>
    </Grid>
    <Grid paddingBottom="x-large">
      <Grid.Cell span="all">
        <Heading level={2}>Zalen en sportmogelijkheden</Heading>
      </Grid.Cell>
      {/* Preview cards take a span of 4, so they fit three to a row on the wide grid and two on the medium one. */}
      <Grid.Cell span={4}>
        <Card>
          {/* Screen readers skip a Card’s image, so only use a decorative one with an empty alt. */}
          <Card.Image alt="" aspectRatio="16:9" src="https://picsum.photos/id/1015/640/360" />
          {/* Level 3 keeps the card under the level-2 section heading; Card.Heading supplies its own size. */}
          <Card.Heading level={3}>
            {/* Card.Link stretches over the whole Card, so the entire Card is one clickable link. */}
            <Card.Link href="#">Grote zaal</Card.Link>
          </Card.Heading>
          <Paragraph size="small">Badminton, basketbal, handbal, korfbal, volleybal en zaalvoetbal.</Paragraph>
        </Card>
      </Grid.Cell>
      <Grid.Cell span={4}>
        <Card>
          <Card.Image alt="" aspectRatio="16:9" src="https://picsum.photos/id/1016/640/360" />
          <Card.Heading level={3}>
            <Card.Link href="#">Du Midi benedenzaal</Card.Link>
          </Card.Heading>
          <Paragraph size="small">Badminton, basketbal, volleybal, dansen en vechtsport.</Paragraph>
        </Card>
      </Grid.Cell>
      <Grid.Cell span={4}>
        <Card>
          <Card.Image alt="" aspectRatio="16:9" src="https://picsum.photos/id/1029/640/360" />
          <Card.Heading level={3}>
            <Card.Link href="#">Du Midi bovenzaal</Card.Link>
          </Card.Heading>
          <Paragraph size="small">
            Badminton, basketbal, korfbal, volleybal, schermen, dansen en vechtsport.
          </Paragraph>
        </Card>
      </Grid.Cell>
    </Grid>
    <Grid paddingBottom="x-large">
      <Grid.Cell span="all">
        <Heading level={2}>Faciliteiten</Heading>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 6 }}>
        <UnorderedList>
          <UnorderedList.Item>
            8 kleedkamers met douches voor sporters en 2 kleedkamers voor scheidsrechters, inclusief voorzieningen
            voor mensen met een beperking
          </UnorderedList.Item>
          <UnorderedList.Item>
            25 toiletten, waarvan 6 urinoirs, en daarnaast 3 rolstoeltoegankelijke toiletten
          </UnorderedList.Item>
          <UnorderedList.Item>
            Groot materiaal is beschikbaar voor verenigingen en scholen; klein materiaal is niet aanwezig
          </UnorderedList.Item>
          <UnorderedList.Item>Er zijn kluisjes met codeslot</UnorderedList.Item>
        </UnorderedList>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 6 }}>
        <UnorderedList>
          <UnorderedList.Item>
            Horeca in de voorhal, open tijdens openingstijden, met broodjes, snacks, fruit, koffie, thee, fris en
            alcoholvrije dranken
          </UnorderedList.Item>
          <UnorderedList.Item>
            1 vergaderruimte voor maximaal 20 personen, alleen te huur voor verenigingen
          </UnorderedList.Item>
          <UnorderedList.Item>Gratis wifi</UnorderedList.Item>
          <UnorderedList.Item>EHBO en AED in de voorhal</UnorderedList.Item>
          <UnorderedList.Item>10 nooduitgangen</UnorderedList.Item>
        </UnorderedList>
      </Grid.Cell>
    </Grid>
    <Spotlight as="section">
      <Grid paddingVertical="x-large">
        <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
          <Heading color="inverse" level={2}>Reserveren voor 1 tot 3 uur</Heading>
          <Paragraph color="inverse">
            Huurt u een zaal voor 1 tot 3 uur? Dan reserveert u die zelf online in het reserveringssysteem.
          </Paragraph>
          <Paragraph color="inverse">
            U betaalt direct met iDEAL of met Vero. Zodra u betaald heeft, is uw reservering definitief.
          </Paragraph>
          <LinkList>
            <LinkList.Link color="inverse" href="#">
              Een account aanmaken voor uw eerste reservering
            </LinkList.Link>
            <LinkList.Link color="inverse" href="#">
              Naar het reserveringssysteem
            </LinkList.Link>
          </LinkList>
        </Grid.Cell>
        <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
          <Heading color="inverse" level={2}>Langer dan 3 uur reserveren</Heading>
          <Paragraph color="inverse">
            Heeft u een zaal langer dan 3 uur nodig? Stuur dan een e-mail naar sportverhuur@amsterdam.nl. Vermeld uw
            naam, de sport, de zaal, de begindatum en einddatum, de tijden van uw voorkeur en een korte omschrijving
            van uw activiteit.
          </Paragraph>
          <LinkList>
            <LinkList.Link color="inverse" href="mailto:sportverhuur@amsterdam.nl" icon={MailIcon}>
              Stuur uw aanvraag per e-mail in
            </LinkList.Link>
          </LinkList>
        </Grid.Cell>
        <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
          <Heading color="inverse" level={2}>Evenementen</Heading>
          <Paragraph color="inverse">
            In de grote zaal is plaats voor 550 toeschouwers. De zaal is geschikt voor sportevenementen, markten,
            yoga-evenementen, dansworkshops en concerten. In de hele Apollohal kunnen maximaal 1.000 bezoekers
            terecht. Neem voor een evenement contact op via{' '}
            <Link color="inverse" href="mailto:sportverhuur-evenementen@amsterdam.nl">
              sportverhuur-evenementen@amsterdam.nl
            </Link>
            .
          </Paragraph>
        </Grid.Cell>
        <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
          <Heading color="inverse" level={2}>Huisregels en tarieven</Heading>
          <Paragraph color="inverse">
            In de huisregels leest u wat er wel en niet mag in de Apollohal. In het tarievenoverzicht ziet u wat het
            huren van een zaal kost.
          </Paragraph>
          <LinkList>
            <LinkList.Link color="inverse" href="#">
              Huisregels
            </LinkList.Link>
            <LinkList.Link color="inverse" href="#">
              Tarieven
            </LinkList.Link>
          </LinkList>
        </Grid.Cell>
      </Grid>
    </Spotlight>
    <Grid paddingVertical="x-large">
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
        <Heading level={2}>Gevonden voorwerpen</Heading>
        <Paragraph>
          Bent u iets kwijtgeraakt in de Apollohal? Vraag ernaar bij de balie in de voorhal. Wij bewaren gevonden
          voorwerpen 4 weken.
        </Paragraph>
      </Grid.Cell>
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
        <Heading level={2}>Contact en openingstijden</Heading>
        <Paragraph>
          Apollolaan 4
          <br />
          1077 BA Amsterdam
          <br />
          <Link href="tel:+31206629720">020 662 9720</Link>
          <br />
          <Link href="mailto:sportverhuur@amsterdam.nl">sportverhuur@amsterdam.nl</Link>
        </Paragraph>
        <Paragraph>Maandag tot en met zondag van 08.30 tot 23.00 uur.</Paragraph>
      </Grid.Cell>
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
        <Heading level={2}>Rolstoeltoegankelijk</Heading>
        <Paragraph>
          De Apollohal is rolstoeltoegankelijk. Er is een aangepaste ingang, een lift naar de bovenzaal en er zijn 3
          rolstoeltoegankelijke toiletten.
        </Paragraph>
      </Grid.Cell>
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
        <Heading level={2}>Fietsenstalling</Heading>
        <Paragraph>
          Voor de ingang staan fietsenrekken voor ongeveer 100 fietsen. Zet uw fiets in een rek, zodat de ingang
          vrij blijft.
        </Paragraph>
      </Grid.Cell>
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
        <Heading level={2}>Openbaar vervoer</Heading>
        <Paragraph>
          Tram 12 stopt aan de Apollolaan, op 2 minuten lopen van de hal. Tram 5 en 24 en bus 246 stoppen bij het
          Olympiaplein, op 8 minuten lopen.
        </Paragraph>
      </Grid.Cell>
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
        <Heading level={2}>Betaald parkeren</Heading>
        <Paragraph>
          Bij de Apollohal zijn 12 parkeerplaatsen: 8 gewone plaatsen, 2 plaatsen voor elektrische auto’s en 2
          gehandicaptenparkeerplaatsen. U betaalt het reguliere parkeertarief van de buurt.
        </Paragraph>
      </Grid.Cell>
    </Grid>
    {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
    <Grid paddingBottom="2x-large">
      <Grid.Cell span="all">
        <Heading level={2}>Locatie en plattegrond</Heading>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }}>
        <Paragraph>
          De Apollohal staat op de hoek van de Apollolaan en het Muzenplein. Bekijk de indeling van de zalen op de{' '}
          <Link href="#">plattegrond van de Apollohal (PDF, 228 kB)</Link>.
        </Paragraph>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 8, wide: 10 }}>
        <Image
          alt="Kaart met de ligging van de Apollohal tussen de Apollolaan en het Muzenplein."
          aspectRatio="16:9"
          loading="lazy"
          src="https://picsum.photos/id/1043/1280/720"
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
            <Breadcrumb.Link href="#">Sport en bewegen</Breadcrumb.Link>
            <Breadcrumb.Link href="#">Sporthallen</Breadcrumb.Link>
          </Breadcrumb>
        </Grid.Cell>
      </Grid>
      {/*
       * Spotlights and full-bleed images sit between the Grids, so a plain <main> wraps them all. A page that
       * is a single section can put as="main" on the Grid itself instead.
       */}
      {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
      <main id="inhoud">
        {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
        <Grid paddingBottom="x-large">
          {/* ams-prose sets the vertical rhythm between the elements of this Content Header. */}
          <Grid.Cell
            className="ams-prose"
            span={{ narrow: 4, medium: 7, wide: 9 }}
            start={{ narrow: 1, medium: 1, wide: 2 }}
          >
            <Heading level={1}>Apollohal</Heading>
            <Paragraph size="large">
              In de Apollohal aan de Apollolaan sport u in een grote zaal of in 1 van de 2 gymzalen. Verenigingen,
              scholen en bedrijven huren er zalen voor trainingen, wedstrijden en evenementen.
            </Paragraph>
          </Grid.Cell>
        </Grid>
        <Grid>
          {/*
           * Image always reserves its box; aspectRatio only changes it from the default 16:9 to a banner’s
           * 16:5. This one sits in the first screenful, so it is not lazy-loaded: that would delay the
           * largest image in the viewport.
           */}
          <Grid.Cell span="all">
            <Image
              alt="De voorgevel van de Apollohal aan de Apollolaan."
              aspectRatio="16:5"
              src="https://picsum.photos/id/164/1440/450"
            />
          </Grid.Cell>
        </Grid>
        <Grid paddingVertical="x-large">
          {/* An Alert sits in its own Grid Cell and takes no margin of its own; the Grid spaces it. */}
          <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
            {/* Alert generates a unique id for its heading, so only pass headingId to reference that heading elsewhere. */}
            <Alert
              closeable
              closeButtonLabel="Sluiten"
              heading="Werkzaamheden Muzenplein en Apollolaan"
              headingLevel={2}
            >
              <Paragraph>
                Vanaf 27 oktober 2025 voert de gemeente werkzaamheden uit op het Muzenplein en de Apollolaan. Van 10
                november 2025 tot juni 2026 is het Muzenplein afgesloten voor auto’s. De Apollohal is in die periode
                niet met de auto te bereiken. Fietsers en voetgangers kunnen er wel langs.
              </Paragraph>
            </Alert>
          </Grid.Cell>
        </Grid>
        <Grid paddingBottom="x-large">
          <Grid.Cell
            className="ams-prose"
            span={{ narrow: 4, medium: 6, wide: 7 }}
            start={{ narrow: 1, medium: 2, wide: 3 }}
          >
            <Heading level={2}>Over de Apollohal</Heading>
            <Paragraph>
              De Apollohal is een sporthal in Amsterdam-Zuid met moderne voorzieningen en een rijke sporthistorie. Het
              gebouw heeft 1 grote zaal en 2 gymzalen en is geschikt voor veel verschillende sporten en evenementen.
              Sinds 2004 is de Apollohal een rijksmonument.
            </Paragraph>
          </Grid.Cell>
        </Grid>
        <Grid paddingBottom="x-large">
          <Grid.Cell span="all">
            <Heading level={2}>Zalen en sportmogelijkheden</Heading>
          </Grid.Cell>
          {/* Preview cards take a span of 4, so they fit three to a row on the wide grid and two on the medium one. */}
          <Grid.Cell span={4}>
            <Card>
              {/* Screen readers skip a Card’s image, so only use a decorative one with an empty alt. */}
              <Card.Image alt="" aspectRatio="16:9" src="https://picsum.photos/id/1015/640/360" />
              {/* Level 3 keeps the card under the level-2 section heading; Card.Heading supplies its own size. */}
              <Card.Heading level={3}>
                {/* Card.Link stretches over the whole Card, so the entire Card is one clickable link. */}
                <Card.Link href="#">Grote zaal</Card.Link>
              </Card.Heading>
              <Paragraph size="small">Badminton, basketbal, handbal, korfbal, volleybal en zaalvoetbal.</Paragraph>
            </Card>
          </Grid.Cell>
          <Grid.Cell span={4}>
            <Card>
              <Card.Image alt="" aspectRatio="16:9" src="https://picsum.photos/id/1016/640/360" />
              <Card.Heading level={3}>
                <Card.Link href="#">Du Midi benedenzaal</Card.Link>
              </Card.Heading>
              <Paragraph size="small">Badminton, basketbal, volleybal, dansen en vechtsport.</Paragraph>
            </Card>
          </Grid.Cell>
          <Grid.Cell span={4}>
            <Card>
              <Card.Image alt="" aspectRatio="16:9" src="https://picsum.photos/id/1029/640/360" />
              <Card.Heading level={3}>
                <Card.Link href="#">Du Midi bovenzaal</Card.Link>
              </Card.Heading>
              <Paragraph size="small">
                Badminton, basketbal, korfbal, volleybal, schermen, dansen en vechtsport.
              </Paragraph>
            </Card>
          </Grid.Cell>
        </Grid>
        <Grid paddingBottom="x-large">
          <Grid.Cell span="all">
            <Heading level={2}>Faciliteiten</Heading>
          </Grid.Cell>
          <Grid.Cell span={{ narrow: 4, medium: 4, wide: 6 }}>
            <UnorderedList>
              <UnorderedList.Item>
                8 kleedkamers met douches voor sporters en 2 kleedkamers voor scheidsrechters, inclusief voorzieningen
                voor mensen met een beperking
              </UnorderedList.Item>
              <UnorderedList.Item>
                25 toiletten, waarvan 6 urinoirs, en daarnaast 3 rolstoeltoegankelijke toiletten
              </UnorderedList.Item>
              <UnorderedList.Item>
                Groot materiaal is beschikbaar voor verenigingen en scholen; klein materiaal is niet aanwezig
              </UnorderedList.Item>
              <UnorderedList.Item>Er zijn kluisjes met codeslot</UnorderedList.Item>
            </UnorderedList>
          </Grid.Cell>
          <Grid.Cell span={{ narrow: 4, medium: 4, wide: 6 }}>
            <UnorderedList>
              <UnorderedList.Item>
                Horeca in de voorhal, open tijdens openingstijden, met broodjes, snacks, fruit, koffie, thee, fris en
                alcoholvrije dranken
              </UnorderedList.Item>
              <UnorderedList.Item>
                1 vergaderruimte voor maximaal 20 personen, alleen te huur voor verenigingen
              </UnorderedList.Item>
              <UnorderedList.Item>Gratis wifi</UnorderedList.Item>
              <UnorderedList.Item>EHBO en AED in de voorhal</UnorderedList.Item>
              <UnorderedList.Item>10 nooduitgangen</UnorderedList.Item>
            </UnorderedList>
          </Grid.Cell>
        </Grid>
        <Spotlight as="section">
          <Grid paddingVertical="x-large">
            <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
              <Heading color="inverse" level={2}>
                Reserveren voor 1 tot 3 uur
              </Heading>
              <Paragraph color="inverse">
                Huurt u een zaal voor 1 tot 3 uur? Dan reserveert u die zelf online in het reserveringssysteem.
              </Paragraph>
              <Paragraph color="inverse">
                U betaalt direct met iDEAL of met Vero. Zodra u betaald heeft, is uw reservering definitief.
              </Paragraph>
              <LinkList>
                <LinkList.Link color="inverse" href="#">
                  Een account aanmaken voor uw eerste reservering
                </LinkList.Link>
                <LinkList.Link color="inverse" href="#">
                  Naar het reserveringssysteem
                </LinkList.Link>
              </LinkList>
            </Grid.Cell>
            <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
              <Heading color="inverse" level={2}>
                Langer dan 3 uur reserveren
              </Heading>
              <Paragraph color="inverse">
                Heeft u een zaal langer dan 3 uur nodig? Stuur dan een e-mail naar sportverhuur@amsterdam.nl. Vermeld uw
                naam, de sport, de zaal, de begindatum en einddatum, de tijden van uw voorkeur en een korte omschrijving
                van uw activiteit.
              </Paragraph>
              <LinkList>
                <LinkList.Link color="inverse" href="mailto:sportverhuur@amsterdam.nl" icon={MailIcon}>
                  Stuur uw aanvraag per e-mail in
                </LinkList.Link>
              </LinkList>
            </Grid.Cell>
            <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
              <Heading color="inverse" level={2}>
                Evenementen
              </Heading>
              <Paragraph color="inverse">
                In de grote zaal is plaats voor 550 toeschouwers. De zaal is geschikt voor sportevenementen, markten,
                yoga-evenementen, dansworkshops en concerten. In de hele Apollohal kunnen maximaal 1.000 bezoekers
                terecht. Neem voor een evenement contact op via{' '}
                <Link color="inverse" href="mailto:sportverhuur-evenementen@amsterdam.nl">
                  sportverhuur-evenementen@amsterdam.nl
                </Link>
                .
              </Paragraph>
            </Grid.Cell>
            <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
              <Heading color="inverse" level={2}>
                Huisregels en tarieven
              </Heading>
              <Paragraph color="inverse">
                In de huisregels leest u wat er wel en niet mag in de Apollohal. In het tarievenoverzicht ziet u wat het
                huren van een zaal kost.
              </Paragraph>
              <LinkList>
                <LinkList.Link color="inverse" href="#">
                  Huisregels
                </LinkList.Link>
                <LinkList.Link color="inverse" href="#">
                  Tarieven
                </LinkList.Link>
              </LinkList>
            </Grid.Cell>
          </Grid>
        </Spotlight>
        <Grid paddingVertical="x-large">
          <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
            <Heading level={2}>Gevonden voorwerpen</Heading>
            <Paragraph>
              Bent u iets kwijtgeraakt in de Apollohal? Vraag ernaar bij de balie in de voorhal. Wij bewaren gevonden
              voorwerpen 4 weken.
            </Paragraph>
          </Grid.Cell>
          <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
            <Heading level={2}>Contact en openingstijden</Heading>
            <Paragraph>
              Apollolaan 4
              <br />
              1077 BA Amsterdam
              <br />
              <Link href="tel:+31206629720">020 662 9720</Link>
              <br />
              <Link href="mailto:sportverhuur@amsterdam.nl">sportverhuur@amsterdam.nl</Link>
            </Paragraph>
            <Paragraph>Maandag tot en met zondag van 08.30 tot 23.00 uur.</Paragraph>
          </Grid.Cell>
          <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
            <Heading level={2}>Rolstoeltoegankelijk</Heading>
            <Paragraph>
              De Apollohal is rolstoeltoegankelijk. Er is een aangepaste ingang, een lift naar de bovenzaal en er zijn 3
              rolstoeltoegankelijke toiletten.
            </Paragraph>
          </Grid.Cell>
          <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
            <Heading level={2}>Fietsenstalling</Heading>
            <Paragraph>
              Voor de ingang staan fietsenrekken voor ongeveer 100 fietsen. Zet uw fiets in een rek, zodat de ingang
              vrij blijft.
            </Paragraph>
          </Grid.Cell>
          <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
            <Heading level={2}>Openbaar vervoer</Heading>
            <Paragraph>
              Tram 12 stopt aan de Apollolaan, op 2 minuten lopen van de hal. Tram 5 en 24 en bus 246 stoppen bij het
              Olympiaplein, op 8 minuten lopen.
            </Paragraph>
          </Grid.Cell>
          <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
            <Heading level={2}>Betaald parkeren</Heading>
            <Paragraph>
              Bij de Apollohal zijn 12 parkeerplaatsen: 8 gewone plaatsen, 2 plaatsen voor elektrische auto’s en 2
              gehandicaptenparkeerplaatsen. U betaalt het reguliere parkeertarief van de buurt.
            </Paragraph>
          </Grid.Cell>
        </Grid>
        {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
        <Grid paddingBottom="2x-large">
          <Grid.Cell span="all">
            <Heading level={2}>Locatie en plattegrond</Heading>
          </Grid.Cell>
          <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }}>
            <Paragraph>
              De Apollohal staat op de hoek van de Apollolaan en het Muzenplein. Bekijk de indeling van de zalen op de{' '}
              <Link href="#">plattegrond van de Apollohal (PDF, 228 kB)</Link>.
            </Paragraph>
          </Grid.Cell>
          <Grid.Cell span={{ narrow: 4, medium: 8, wide: 10 }}>
            <Image
              alt="Kaart met de ligging van de Apollohal tussen de Apollolaan en het Muzenplein."
              aspectRatio="16:9"
              loading="lazy"
              src="https://picsum.photos/id/1043/1280/720"
            />
          </Grid.Cell>
        </Grid>
      </main>
    </>
  ),
}

export const Sublocation: StoryObj = {
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
        <Breadcrumb.Link href="#">Sport en bewegen</Breadcrumb.Link>
        <Breadcrumb.Link href="#">Sportparken</Breadcrumb.Link>
        <Breadcrumb.Link href="#">Sportpark Sloten</Breadcrumb.Link>
      </Breadcrumb>
    </Grid.Cell>
  </Grid>
  {/*
   * Spotlights and full-bleed images sit between the Grids, so a plain <main> wraps them all. A page that
   * is a single section can put as="main" on the Grid itself instead.
   */}
  {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
  <main id="inhoud">
    {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
    <Grid>
      {/* ams-prose sets the vertical rhythm between the elements of this Content Header. */}
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading level={1}>Sportpark Sloten</Heading>
        <Paragraph size="large">
          Sportpark Sloten ligt aan de Sloterweg in Nieuw-West en biedt ruimte aan voetbal, atletiek en korfbal.
          Verenigingen, scholen en buurtbewoners huren er velden, banen en kleedkamers voor trainingen, wedstrijden
          en toernooien.
        </Paragraph>
      </Grid.Cell>
    </Grid>
    <Grid paddingVertical="x-large">
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading level={2}>Faciliteiten</Heading>
        <UnorderedList>
          <UnorderedList.Item>4 kunstgrasvelden voor voetbal</UnorderedList.Item>
          <UnorderedList.Item>2 natuurgrasvelden voor voetbal</UnorderedList.Item>
          <UnorderedList.Item>een atletiekbaan met 6 banen en een werpkooi</UnorderedList.Item>
          <UnorderedList.Item>een kunstgrasveld voor korfbal</UnorderedList.Item>
          <UnorderedList.Item>2 beachvolleybalvelden</UnorderedList.Item>
          <UnorderedList.Item>een clubhuis met kantine en tribune</UnorderedList.Item>
          <UnorderedList.Item>12 kleedkamers met douches</UnorderedList.Item>
          <UnorderedList.Item>een fietsenstalling en een parkeerterrein</UnorderedList.Item>
        </UnorderedList>
      </Grid.Cell>
      {/* Prose has no rule for an Image Slider, so every element but the last in this cell sets its own margin. */}
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 6 }}>
        {/*
         * ImageSlider takes an array of images. Each entry accepts the props of an Image plus an
         * optional caption; only alt is required.
         */}
        <ImageSlider className="ams-mb-m" images={sublocationPhotos} />
        <StandaloneLink href="#">Bekijk de foto’s groot</StandaloneLink>
      </Grid.Cell>
    </Grid>
    <Spotlight as="section">
      <Grid paddingVertical="x-large">
        <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
          <Heading color="inverse" level={2} size="level-3">Wel te huur</Heading>
          <Paragraph color="inverse">
            U huurt de voetbalvelden, de atletiekbaan en de kleedkamers per dagdeel. Verhuur is mogelijk van
            september tot en met juni, buiten de vaste trainingstijden van de verenigingen om.
          </Paragraph>
        </Grid.Cell>
        <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
          <Heading color="inverse" level={2} size="level-3">Niet te huur</Heading>
          <Paragraph color="inverse">
            Het clubhuis, de kantine en de opslagruimtes worden door de verenigingen zelf beheerd. Die ruimtes
            verhuurt de gemeente niet.
          </Paragraph>
        </Grid.Cell>
        <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
          <Heading color="inverse" level={2} size="level-3">
            Voor scholen en voetbalscholen
          </Heading>
          <Paragraph color="inverse">
            Scholen uit Nieuw-West huren de velden op schooldagen tegen een lager tarief. Commerciële voetbalscholen
            kunnen alleen buiten het seizoen terecht, in overleg met de vereniging.
          </Paragraph>
        </Grid.Cell>
        <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
          <Heading color="inverse" level={2} size="level-3">Tarieven en huisregels</Heading>
          <LinkList>
            <LinkList.Link color="inverse" href="#">
              Tarieven
            </LinkList.Link>
            <LinkList.Link color="inverse" href="#">
              Huisregels
            </LinkList.Link>
          </LinkList>
        </Grid.Cell>
      </Grid>
    </Spotlight>
    <Grid paddingVertical="x-large">
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
        <Heading level={2} size="level-3">Contact</Heading>
        <Paragraph>
          Vragen over de verhuur van Sportpark Sloten? Mail naar{' '}
          <Link href="mailto:sportverhuur@amsterdam.nl">sportverhuur@amsterdam.nl</Link>. U krijgt binnen 5
          werkdagen antwoord.
        </Paragraph>
      </Grid.Cell>
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
        <Heading level={2} size="level-3">Openbaar vervoer</Heading>
        <Paragraph>
          Bus 62 stopt bij halte Sportpark Sloten, op 5 minuten lopen van de ingang. Vanaf station Lelylaan rijdt
          bus 63 tot aan de Sloterweg.
        </Paragraph>
      </Grid.Cell>
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
        <Heading level={2} size="level-3">Zie ook</Heading>
        <LinkList>
          <LinkList.Link href="#">Alle sportparken in Amsterdam</LinkList.Link>
        </LinkList>
      </Grid.Cell>
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
        <Heading level={2} size="level-3">Parkeren</Heading>
        <Paragraph>
          Bezoekers parkeren op de betaalde parkeerplaats naast het sportpark. Op wedstrijddagen is die plek snel
          vol, dus kom bij voorkeur met de fiets of het openbaar vervoer.
        </Paragraph>
      </Grid.Cell>
    </Grid>
    {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
    <Grid paddingBottom="2x-large">
      <Grid.Cell span="all">
        <Heading level={2}>Locatie</Heading>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 8, wide: 10 }}>
        <Image
          alt="Kaart met de ligging van Sportpark Sloten aan de Sloterweg in Nieuw-West."
          aspectRatio="16:9"
          loading="lazy"
          src="https://picsum.photos/id/1015/1440/810"
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
            <Breadcrumb.Link href="#">Sport en bewegen</Breadcrumb.Link>
            <Breadcrumb.Link href="#">Sportparken</Breadcrumb.Link>
            <Breadcrumb.Link href="#">Sportpark Sloten</Breadcrumb.Link>
          </Breadcrumb>
        </Grid.Cell>
      </Grid>
      {/*
       * Spotlights and full-bleed images sit between the Grids, so a plain <main> wraps them all. A page that
       * is a single section can put as="main" on the Grid itself instead.
       */}
      {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
      <main id="inhoud">
        {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
        <Grid>
          {/* ams-prose sets the vertical rhythm between the elements of this Content Header. */}
          <Grid.Cell
            className="ams-prose"
            span={{ narrow: 4, medium: 7, wide: 9 }}
            start={{ narrow: 1, medium: 1, wide: 2 }}
          >
            <Heading level={1}>Sportpark Sloten</Heading>
            <Paragraph size="large">
              Sportpark Sloten ligt aan de Sloterweg in Nieuw-West en biedt ruimte aan voetbal, atletiek en korfbal.
              Verenigingen, scholen en buurtbewoners huren er velden, banen en kleedkamers voor trainingen, wedstrijden
              en toernooien.
            </Paragraph>
          </Grid.Cell>
        </Grid>
        <Grid paddingVertical="x-large">
          <Grid.Cell
            className="ams-prose"
            span={{ narrow: 4, medium: 4, wide: 5 }}
            start={{ narrow: 1, medium: 1, wide: 2 }}
          >
            <Heading level={2}>Faciliteiten</Heading>
            <UnorderedList>
              <UnorderedList.Item>4 kunstgrasvelden voor voetbal</UnorderedList.Item>
              <UnorderedList.Item>2 natuurgrasvelden voor voetbal</UnorderedList.Item>
              <UnorderedList.Item>een atletiekbaan met 6 banen en een werpkooi</UnorderedList.Item>
              <UnorderedList.Item>een kunstgrasveld voor korfbal</UnorderedList.Item>
              <UnorderedList.Item>2 beachvolleybalvelden</UnorderedList.Item>
              <UnorderedList.Item>een clubhuis met kantine en tribune</UnorderedList.Item>
              <UnorderedList.Item>12 kleedkamers met douches</UnorderedList.Item>
              <UnorderedList.Item>een fietsenstalling en een parkeerterrein</UnorderedList.Item>
            </UnorderedList>
          </Grid.Cell>
          {/* Prose has no rule for an Image Slider, so every element but the last in this cell sets its own margin. */}
          <Grid.Cell span={{ narrow: 4, medium: 4, wide: 6 }}>
            {/*
             * ImageSlider takes an array of images. Each entry accepts the props of an Image plus an
             * optional caption; only alt is required.
             */}
            <ImageSlider className="ams-mb-m" images={sublocationPhotos} />
            <StandaloneLink href="#">Bekijk de foto’s groot</StandaloneLink>
          </Grid.Cell>
        </Grid>
        <Spotlight as="section">
          <Grid paddingVertical="x-large">
            <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
              <Heading color="inverse" level={2} size="level-3">
                Wel te huur
              </Heading>
              <Paragraph color="inverse">
                U huurt de voetbalvelden, de atletiekbaan en de kleedkamers per dagdeel. Verhuur is mogelijk van
                september tot en met juni, buiten de vaste trainingstijden van de verenigingen om.
              </Paragraph>
            </Grid.Cell>
            <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
              <Heading color="inverse" level={2} size="level-3">
                Niet te huur
              </Heading>
              <Paragraph color="inverse">
                Het clubhuis, de kantine en de opslagruimtes worden door de verenigingen zelf beheerd. Die ruimtes
                verhuurt de gemeente niet.
              </Paragraph>
            </Grid.Cell>
            <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
              <Heading color="inverse" level={2} size="level-3">
                Voor scholen en voetbalscholen
              </Heading>
              <Paragraph color="inverse">
                Scholen uit Nieuw-West huren de velden op schooldagen tegen een lager tarief. Commerciële voetbalscholen
                kunnen alleen buiten het seizoen terecht, in overleg met de vereniging.
              </Paragraph>
            </Grid.Cell>
            <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
              <Heading color="inverse" level={2} size="level-3">
                Tarieven en huisregels
              </Heading>
              <LinkList>
                <LinkList.Link color="inverse" href="#">
                  Tarieven
                </LinkList.Link>
                <LinkList.Link color="inverse" href="#">
                  Huisregels
                </LinkList.Link>
              </LinkList>
            </Grid.Cell>
          </Grid>
        </Spotlight>
        <Grid paddingVertical="x-large">
          <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
            <Heading level={2} size="level-3">
              Contact
            </Heading>
            <Paragraph>
              Vragen over de verhuur van Sportpark Sloten? Mail naar{' '}
              <Link href="mailto:sportverhuur@amsterdam.nl">sportverhuur@amsterdam.nl</Link>. U krijgt binnen 5
              werkdagen antwoord.
            </Paragraph>
          </Grid.Cell>
          <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
            <Heading level={2} size="level-3">
              Openbaar vervoer
            </Heading>
            <Paragraph>
              Bus 62 stopt bij halte Sportpark Sloten, op 5 minuten lopen van de ingang. Vanaf station Lelylaan rijdt
              bus 63 tot aan de Sloterweg.
            </Paragraph>
          </Grid.Cell>
          <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
            <Heading level={2} size="level-3">
              Zie ook
            </Heading>
            <LinkList>
              <LinkList.Link href="#">Alle sportparken in Amsterdam</LinkList.Link>
            </LinkList>
          </Grid.Cell>
          <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 4, wide: 6 }}>
            <Heading level={2} size="level-3">
              Parkeren
            </Heading>
            <Paragraph>
              Bezoekers parkeren op de betaalde parkeerplaats naast het sportpark. Op wedstrijddagen is die plek snel
              vol, dus kom bij voorkeur met de fiets of het openbaar vervoer.
            </Paragraph>
          </Grid.Cell>
        </Grid>
        {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
        <Grid paddingBottom="2x-large">
          <Grid.Cell span="all">
            <Heading level={2}>Locatie</Heading>
          </Grid.Cell>
          <Grid.Cell span={{ narrow: 4, medium: 8, wide: 10 }}>
            <Image
              alt="Kaart met de ligging van Sportpark Sloten aan de Sloterweg in Nieuw-West."
              aspectRatio="16:9"
              loading="lazy"
              src="https://picsum.photos/id/1015/1440/810"
            />
          </Grid.Cell>
        </Grid>
      </main>
    </>
  ),
}
