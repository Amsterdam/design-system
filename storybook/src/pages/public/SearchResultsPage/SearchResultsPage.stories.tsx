/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Alert,
  Breadcrumb,
  Button,
  Card,
  Checkbox,
  Column,
  Field,
  FieldSet,
  Grid,
  Heading,
  Label,
  Pagination,
  Paragraph,
  SearchField,
  Select,
  StandaloneLink,
} from '@amsterdam/design-system-react'

import { commonMeta } from '../common/commonMeta'
import { searchResults, searchTopics } from './data'

const searchTerm = 'veiligheid'
const totalResults = 62
const totalPages = 8

const meta = {
  ...commonMeta,
  title: 'Pages/Public/Search Results Page',
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
      </Breadcrumb>
    </Grid.Cell>
  </Grid>
  <main id="inhoud">
    {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
    {/* Both this Grid and the one below it have the default background colour, so this Grid takes a paddingBottom of 2x-large. */}
    <Grid paddingBottom="2x-large">
      {/* ams-prose sets the vertical rhythm between the title and the search field. */}
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading level={1}>Zoeken</Heading>
        {/* Search Field renders its own form with role=search, so it needs no form around it. */}
        <SearchField>
          <SearchField.Input defaultValue="veiligheid" label="Zoek op amsterdam.nl" name="trefwoord" />
          <SearchField.Button>Zoeken</SearchField.Button>
        </SearchField>
      </Grid.Cell>
    </Grid>
    {/*
     * Two adjacent Grids add their touching paddings together, so this one leaves its paddingTop off.
     * The last Grid before the Page Footer takes a paddingBottom of 2x-large.
     */}
    <Grid paddingBottom="2x-large">
      {/*
       * The filter column comes first in source, so it precedes the results in the reading and tab order.
       * It only sits beside them from the medium grid up; on narrow screens it spans the full width above them.
       */}
      <Grid.Cell aria-labelledby="sorteren-en-filteren" as="aside" span={{ narrow: 4, medium: 3, wide: 3 }}>
        <Heading className="ams-visually-hidden" id="sorteren-en-filteren" level={2}>
          Sorteren en filteren
        </Heading>
        <form method="get">
          <Field className="ams-mb-l">
            <Label htmlFor="sorteren">Sorteren</Label>
            <Select id="sorteren" name="sorteren">
              <Select.Option value="relevantie">Op relevantie</Select.Option>
              <Select.Option value="nieuwste">Nieuwste eerst</Select.Option>
            </Select>
          </Field>
          <FieldSet className="ams-mb-l" legend="Soort artikel">
            <Column gap="x-small">
              <Checkbox name="soort" value="nieuwsbericht">
                Nieuwsbericht
              </Checkbox>
              {/* … one Checkbox per topic … */}
            </Column>
          </FieldSet>
          {/* The design filters as soon as a box is ticked; the button keeps the form usable without that script. */}
          <Button type="submit">Resultaten tonen</Button>
        </form>
      </Grid.Cell>
      {/*
       * A Subgrid hands the columns it spans to its own children, so the Cells inside it are placed on the
       * columns of the page rather than on columns of their own.
       */}
      <Grid.Subgrid span={{ narrow: 4, medium: 5, wide: 9 }} start={{ narrow: 1, medium: 4, wide: 4 }}>
        {/* Prose takes at most 7 of the 12 columns, so on the wide grid these Cells stop short of the 9 beside the filters. */}
        <Grid.Cell span={{ narrow: 4, medium: 5, wide: 7 }}>
          <Heading className="ams-visually-hidden" level={2}>
            Zoekresultaten
          </Heading>
          {/* A polite live region, so a screen reader hears the new total when the search or the filters change. */}
          <Paragraph role="status">62 resultaten gevonden voor ‘veiligheid’</Paragraph>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 5, wide: 7 }}>
          {/* A search result has no image, so this Card needs no Card Content and stays vertical at any width. */}
          <Card>
            <Card.HeadingGroup tagline="Actiecentrum Veiligheid en Zorg">
              <Card.Heading level={3}>
                <Card.Link href="#">Top 400/600</Card.Link>
              </Card.Heading>
            </Card.HeadingGroup>
            <Column gap="small">
              <Paragraph>
                Om de stad veiliger te maken coördineert de gemeente, samen met haar maatschappelijke partners,
                vanuit het Actiecentrum Veiligheid en Zorg verschillende aanpakken op het snijvlak van veiligheid,
                zorg en het sociaal domein.
              </Paragraph>
              <Paragraph size="small">
                {/* The visible date is prose; dateTime repeats it in the machine-readable format software parses. */}
                <time dateTime="2023-07-01">1 juli 2023</time>
              </Paragraph>
            </Column>
          </Card>
        </Grid.Cell>
        {/* … one Cell per result … */}
        {/* The Pagination takes the width of the results above it rather than that of the region. */}
        <Grid.Cell span={{ narrow: 4, medium: 5, wide: 7 }}>
          <Pagination accessibleNameId="paginering" linkTemplate={(page) => \`?pagina=\${page}\`} page={1} totalPages={8} />
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
          </Breadcrumb>
        </Grid.Cell>
      </Grid>
      <main id="inhoud">
        {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
        {/* Both this Grid and the one below it have the default background colour, so this Grid takes a paddingBottom of 2x-large. */}
        <Grid paddingBottom="2x-large">
          {/* ams-prose sets the vertical rhythm between the title and the search field. */}
          <Grid.Cell
            className="ams-prose"
            span={{ narrow: 4, medium: 7, wide: 9 }}
            start={{ narrow: 1, medium: 1, wide: 2 }}
          >
            <Heading level={1}>Zoeken</Heading>
            {/* Search Field renders its own form with role=search, so it needs no form around it. */}
            <SearchField>
              <SearchField.Input defaultValue={searchTerm} label="Zoek op amsterdam.nl" name="trefwoord" />
              <SearchField.Button>Zoeken</SearchField.Button>
            </SearchField>
          </Grid.Cell>
        </Grid>
        {/*
         * Two adjacent Grids add their touching paddings together, so this one leaves its paddingTop off.
         * The last Grid before the Page Footer takes a paddingBottom of 2x-large.
         */}
        <Grid paddingBottom="2x-large">
          {/*
           * The filter column comes first in source, so it precedes the results in the reading and tab order.
           * It only sits beside them from the medium grid up; on narrow screens it spans the full width above them.
           */}
          <Grid.Cell aria-labelledby="sorteren-en-filteren" as="aside" span={{ narrow: 4, medium: 3, wide: 3 }}>
            <Heading className="ams-visually-hidden" id="sorteren-en-filteren" level={2}>
              Sorteren en filteren
            </Heading>
            <form method="get">
              <Field className="ams-mb-l">
                <Label htmlFor="sorteren">Sorteren</Label>
                <Select id="sorteren" name="sorteren">
                  <Select.Option value="relevantie">Op relevantie</Select.Option>
                  <Select.Option value="nieuwste">Nieuwste eerst</Select.Option>
                </Select>
              </Field>
              <FieldSet className="ams-mb-l" legend="Soort artikel">
                <Column gap="x-small">
                  {searchTopics.map((topic) => (
                    <Checkbox key={topic} name="soort" value={topic.toLowerCase()}>
                      {topic}
                    </Checkbox>
                  ))}
                </Column>
              </FieldSet>
              {/* The design filters as soon as a box is ticked; the button keeps the form usable without that script. */}
              <Button type="submit">Resultaten tonen</Button>
            </form>
          </Grid.Cell>
          {/*
           * A Subgrid hands the columns it spans to its own children, so the Cells inside it are placed on the
           * columns of the page rather than on columns of their own.
           */}
          <Grid.Subgrid span={{ narrow: 4, medium: 5, wide: 9 }} start={{ narrow: 1, medium: 4, wide: 4 }}>
            {/* Prose takes at most 7 of the 12 columns, so on the wide grid these Cells stop short of the 9 beside the filters. */}
            <Grid.Cell span={{ narrow: 4, medium: 5, wide: 7 }}>
              <Heading className="ams-visually-hidden" level={2}>
                Zoekresultaten
              </Heading>
              {/* A polite live region, so a screen reader hears the new total when the search or the filters change. */}
              <Paragraph role="status">
                {totalResults} resultaten gevonden voor ‘{searchTerm}’
              </Paragraph>
            </Grid.Cell>
            {searchResults.map((result) => (
              <Grid.Cell key={result.id} span={{ narrow: 4, medium: 5, wide: 7 }}>
                {/* A search result has no image, so this Card needs no Card Content and stays vertical at any width. */}
                <Card>
                  <Card.HeadingGroup tagline={result.section}>
                    <Card.Heading level={3}>
                      <Card.Link href="#">{result.title}</Card.Link>
                    </Card.Heading>
                  </Card.HeadingGroup>
                  <Column gap="small">
                    <Paragraph>{result.teaser}</Paragraph>
                    <Paragraph size="small">
                      {/* The visible date is prose; dateTime repeats it in the machine-readable format software parses. */}
                      <time dateTime={result.isoDate}>{result.date}</time>
                    </Paragraph>
                  </Column>
                </Card>
              </Grid.Cell>
            ))}
            {/* The Pagination takes the width of the results above it rather than that of the region. */}
            <Grid.Cell span={{ narrow: 4, medium: 5, wide: 7 }}>
              <Pagination
                accessibleNameId="paginering"
                linkTemplate={(page) => `?pagina=${page}`}
                page={1}
                totalPages={totalPages}
              />
            </Grid.Cell>
          </Grid.Subgrid>
        </Grid>
      </main>
    </>
  ),
}

/**
 * Nothing matched. The count is still announced, and an Alert offers a way on rather than leaving the visitor
 * at a dead end.
 */
export const NoResults: StoryObj = {
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
      </Breadcrumb>
    </Grid.Cell>
  </Grid>
  <main id="inhoud">
    {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
    {/* Both this Grid and the one below it have the default background colour, so this Grid takes a paddingBottom of 2x-large. */}
    <Grid paddingBottom="2x-large">
      {/* ams-prose sets the vertical rhythm between the title and the search field. */}
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading level={1}>Zoeken</Heading>
        {/* Search Field renders its own form with role=search, so it needs no form around it. */}
        <SearchField>
          <SearchField.Input
            defaultValue="veiligheidsregio Amstelland"
            label="Zoek op amsterdam.nl"
            name="trefwoord"
          />
          <SearchField.Button>Zoeken</SearchField.Button>
        </SearchField>
      </Grid.Cell>
    </Grid>
    {/*
     * Two adjacent Grids add their touching paddings together, so this one leaves its paddingTop off.
     * The last Grid before the Page Footer takes a paddingBottom of 2x-large.
     */}
    <Grid paddingBottom="2x-large">
      {/*
       * The filter column comes first in source, so it precedes the results in the reading and tab order.
       * It only sits beside them from the medium grid up; on narrow screens it spans the full width above them.
       */}
      <Grid.Cell aria-labelledby="sorteren-en-filteren-no-results" as="aside" span={{ narrow: 4, medium: 3, wide: 3 }}>
        <Heading className="ams-visually-hidden" id="sorteren-en-filteren-no-results" level={2}>
          Sorteren en filteren
        </Heading>
        <form method="get">
          <Field className="ams-mb-l">
            <Label htmlFor="sorteren-no-results">Sorteren</Label>
            <Select id="sorteren-no-results" name="sorteren">
              <Select.Option value="relevantie">Op relevantie</Select.Option>
              <Select.Option value="nieuwste">Nieuwste eerst</Select.Option>
            </Select>
          </Field>
          <FieldSet className="ams-mb-l" legend="Soort artikel">
            <Column gap="x-small">
              {searchTopics.map((topic) => (
                <Checkbox key={topic} name="soort" value={topic.toLowerCase()}>
                  {topic}
                </Checkbox>
              ))}
            </Column>
          </FieldSet>
          {/* The design filters as soon as a box is ticked; the button keeps the form usable without that script. */}
          <Button type="submit">Resultaten tonen</Button>
        </form>
      </Grid.Cell>
      {/*
       * A Subgrid hands the columns it spans to its own children, so the Cells inside it are placed on the
       * columns of the page rather than on columns of their own.
       */}
      <Grid.Subgrid span={{ narrow: 4, medium: 5, wide: 9 }} start={{ narrow: 1, medium: 4, wide: 4 }}>
        {/* Prose takes at most 7 of the 12 columns, so on the wide grid these Cells stop short of the 9 beside the filters. */}
        <Grid.Cell span={{ narrow: 4, medium: 5, wide: 7 }}>
          <Heading className="ams-visually-hidden" level={2}>Zoekresultaten</Heading>
          {/* A polite live region, so a screen reader hears the new total when the search or the filters change. */}
          <Paragraph role="status">Geen resultaten gevonden voor ‘veiligheidsregio Amstelland’</Paragraph>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 5, wide: 7 }}>
          {/* An empty result set is not an error, so the Alert is informative rather than a warning. */}
          <Alert heading="Geen resultaten gevonden" headingLevel={3}>
            <Paragraph className="ams-mb-s">
              Probeer een kortere zoekterm, een ander woord, of zoek zonder filters.
            </Paragraph>
            <StandaloneLink href="#">Wis alle filters</StandaloneLink>
          </Alert>
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
          </Breadcrumb>
        </Grid.Cell>
      </Grid>
      <main id="inhoud">
        {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
        {/* Both this Grid and the one below it have the default background colour, so this Grid takes a paddingBottom of 2x-large. */}
        <Grid paddingBottom="2x-large">
          {/* ams-prose sets the vertical rhythm between the title and the search field. */}
          <Grid.Cell
            className="ams-prose"
            span={{ narrow: 4, medium: 7, wide: 9 }}
            start={{ narrow: 1, medium: 1, wide: 2 }}
          >
            <Heading level={1}>Zoeken</Heading>
            {/* Search Field renders its own form with role=search, so it needs no form around it. */}
            <SearchField>
              <SearchField.Input
                defaultValue="veiligheidsregio Amstelland"
                label="Zoek op amsterdam.nl"
                name="trefwoord"
              />
              <SearchField.Button>Zoeken</SearchField.Button>
            </SearchField>
          </Grid.Cell>
        </Grid>
        {/*
         * Two adjacent Grids add their touching paddings together, so this one leaves its paddingTop off.
         * The last Grid before the Page Footer takes a paddingBottom of 2x-large.
         */}
        <Grid paddingBottom="2x-large">
          {/*
           * The filter column comes first in source, so it precedes the results in the reading and tab order.
           * It only sits beside them from the medium grid up; on narrow screens it spans the full width above them.
           */}
          <Grid.Cell
            aria-labelledby="sorteren-en-filteren-no-results"
            as="aside"
            span={{ narrow: 4, medium: 3, wide: 3 }}
          >
            <Heading className="ams-visually-hidden" id="sorteren-en-filteren-no-results" level={2}>
              Sorteren en filteren
            </Heading>
            <form method="get">
              <Field className="ams-mb-l">
                <Label htmlFor="sorteren-no-results">Sorteren</Label>
                <Select id="sorteren-no-results" name="sorteren">
                  <Select.Option value="relevantie">Op relevantie</Select.Option>
                  <Select.Option value="nieuwste">Nieuwste eerst</Select.Option>
                </Select>
              </Field>
              <FieldSet className="ams-mb-l" legend="Soort artikel">
                <Column gap="x-small">
                  {searchTopics.map((topic) => (
                    <Checkbox key={topic} name="soort" value={topic.toLowerCase()}>
                      {topic}
                    </Checkbox>
                  ))}
                </Column>
              </FieldSet>
              {/* The design filters as soon as a box is ticked; the button keeps the form usable without that script. */}
              <Button type="submit">Resultaten tonen</Button>
            </form>
          </Grid.Cell>
          {/*
           * A Subgrid hands the columns it spans to its own children, so the Cells inside it are placed on the
           * columns of the page rather than on columns of their own.
           */}
          <Grid.Subgrid span={{ narrow: 4, medium: 5, wide: 9 }} start={{ narrow: 1, medium: 4, wide: 4 }}>
            {/* Prose takes at most 7 of the 12 columns, so on the wide grid these Cells stop short of the 9 beside the filters. */}
            <Grid.Cell span={{ narrow: 4, medium: 5, wide: 7 }}>
              <Heading className="ams-visually-hidden" level={2}>
                Zoekresultaten
              </Heading>
              {/* A polite live region, so a screen reader hears the new total when the search or the filters change. */}
              <Paragraph role="status">Geen resultaten gevonden voor ‘veiligheidsregio Amstelland’</Paragraph>
            </Grid.Cell>
            <Grid.Cell span={{ narrow: 4, medium: 5, wide: 7 }}>
              {/* An empty result set is not an error, so the Alert is informative rather than a warning. */}
              <Alert heading="Geen resultaten gevonden" headingLevel={3}>
                <Paragraph className="ams-mb-s">
                  Probeer een kortere zoekterm, een ander woord, of zoek zonder filters.
                </Paragraph>
                <StandaloneLink href="#">Wis alle filters</StandaloneLink>
              </Alert>
            </Grid.Cell>
          </Grid.Subgrid>
        </Grid>
      </main>
    </>
  ),
}
