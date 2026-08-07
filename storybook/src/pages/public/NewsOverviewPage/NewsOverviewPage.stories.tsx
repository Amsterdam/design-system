/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import {
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
  Metadata,
  Pagination,
  Paragraph,
  SearchField,
  Select,
} from '@amsterdam/design-system-react'

import { commonMeta, pageParameters } from '../common/commonMeta'
import { newsArticles, newsCategories, newsDistricts } from './data'

const searchTerm = 'tramspoor'
const selectedCategories = ['Achtergrond']
const selectedDistricts = ['Centrum', 'Noord', 'Oost']
const totalResults = 12
const totalPages = 2

/**
 * Intl.ListFormat joins the values with the punctuation and the conjunction of the language itself:
 * ‘a, b en c’ in Dutch, ‘a, b, and c’ in English. Composing the sentence with it rather than with a
 * hard-coded ‘en’ keeps it correct once the page is translated.
 */
const listFormatter = new Intl.ListFormat('nl', { style: 'long', type: 'conjunction' })

/** Every chosen value is quoted, so it reads as a label rather than as part of the sentence around it. */
const quotedList = (values: ReadonlyArray<string>) => listFormatter.format(values.map((value) => `‘${value}’`))

/** Several districts are introduced by name of the filter; a single one needs no such introduction. */
const districtPhrase =
  selectedDistricts.length === 1 ? quotedList(selectedDistricts) : `de stadsdelen ${quotedList(selectedDistricts)}`

const resultsMessage = `${totalResults} resultaten gevonden voor ‘${searchTerm}’ met soort nieuws ${quotedList(selectedCategories)} en ${districtPhrase}.`

const meta = {
  ...commonMeta,
  title: 'Pages/Public/News Overview Page',
  parameters: pageParameters(
    'Lists content items that a visitor narrows down with filters: ' +
      'news, blogs, vacancies, activities, or search results.',
  ),
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
        <Heading level={1}>Nieuws uit Amsterdam</Heading>
        <SearchField>
          <SearchField.Input defaultValue="tramspoor" label="Zoek in het nieuws" name="trefwoord" />
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
              <Select.Option value="nieuwste">Nieuwste eerst</Select.Option>
              <Select.Option value="oudste">Oudste eerst</Select.Option>
              <Select.Option value="relevantie">Op relevantie</Select.Option>
            </Select>
          </Field>
          <FieldSet className="ams-mb-l" legend="Soort nieuws">
            <Column gap="x-small">
              <Checkbox name="soort" value="algemeen">
                Algemeen
              </Checkbox>
              <Checkbox defaultChecked name="soort" value="achtergrond">
                Achtergrond
              </Checkbox>
              <Checkbox name="soort" value="live blogs">
                Live blogs
              </Checkbox>
            </Column>
          </FieldSet>
          <FieldSet className="ams-mb-l" legend="Stadsdelen">
            <Column gap="x-small">
              <Checkbox defaultChecked name="stadsdeel" value="centrum">
                Centrum
              </Checkbox>
              {/* … one Checkbox per district … */}
            </Column>
          </FieldSet>
          {/* The design filters as soon as a box is ticked; the button keeps the form usable without that script. */}
          <Button type="submit">Resultaten tonen</Button>
        </form>
      </Grid.Cell>
      {/*
       * A Subgrid hands the columns it spans to its own children, so the Cells inside it are placed on the
       * columns of the page rather than on columns of their own. That is what lines the Cards up with the rest.
       */}
      <Grid.Subgrid span={{ narrow: 4, medium: 5, wide: 9 }} start={{ narrow: 1, medium: 4, wide: 4 }}>
        {/* The sentence is running text, which takes at most 7 of the 12 columns, so it stops short of the Cards. */}
        <Grid.Cell span={{ narrow: 4, medium: 5, wide: 7 }}>
          <Heading className="ams-visually-hidden" level={2}>
            Nieuwsberichten
          </Heading>
          {/* A polite live region, so a screen reader hears the new total when the filters change. */}
          <Paragraph role="status">{resultsMessage}</Paragraph>
        </Grid.Cell>
        {/*
         * The articles are a list, so they get a Subgrid of their own: a ul with every Cell in it an li.
         * The result count above and the Pagination below stay outside it; neither is one of the articles.
         * A Subgrid inside a Subgrid still hands down the columns of the page, and takes the same row gap.
         */}
        <Grid.Subgrid as="ul" span="all">
          {/*
           * On the medium Grid a Card takes 4 of the 5 columns of the results region, leaving the last one
           * empty. That is below the width at which a Card with an image goes horizontal, so it stays vertical.
           */}
          <Grid.Cell as="li" span={{ narrow: 4, medium: 4, wide: 9 }}>
            <Card>
              {/* Screen readers skip a Card’s image, so only use a decorative one with an empty alt. */}
              <Card.Image alt="" loading="lazy" src="https://picsum.photos/id/122/640/360" />
              {/* A Card that pairs an image with a Content lays out horizontally in a cell this wide. */}
              <Card.Content>
                <Card.HeadingGroup tagline="Algemeen, Centrum, Werkzaamheden">
                  <Card.Heading level={3}>
                    <Card.Link href="#">Berlagebrug een aantal nachten dicht</Card.Link>
                  </Card.Heading>
                </Card.HeadingGroup>
                <Column gap="small">
                  <Paragraph>
                    Tussen 3 juni en 21 juli leggen we het tramspoor op de Berlagebrug aan. De brug is ongeveer 12
                    nachten dicht voor gemotoriseerd verkeer en in 3 nachten voor al het verkeer.
                  </Paragraph>
                  {/* A Card takes the small size, where a content page takes the regular one. */}
                  <Metadata size="small">
                    <Metadata.Item>
                      {/* The visible date is prose; dateTime repeats it in the machine-readable format software parses. */}
                      <time dateTime="2023-10-20">20 oktober 2023</time>
                    </Metadata.Item>
                  </Metadata>
                </Column>
              </Card.Content>
            </Card>
          </Grid.Cell>
          {/* … one Cell per article … */}
        </Grid.Subgrid>
        <Grid.Cell span="all">
          <Pagination
            accessibleNameId="paginering"
            linkTemplate={(page) => \`?pagina=\${page}\`}
            page={1}
            totalPages={2}
          />
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
            <Heading level={1}>Nieuws uit Amsterdam</Heading>
            <SearchField>
              <SearchField.Input defaultValue="tramspoor" label="Zoek in het nieuws" name="trefwoord" />
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
                  <Select.Option value="nieuwste">Nieuwste eerst</Select.Option>
                  <Select.Option value="oudste">Oudste eerst</Select.Option>
                  <Select.Option value="relevantie">Op relevantie</Select.Option>
                </Select>
              </Field>
              <FieldSet className="ams-mb-l" legend="Soort nieuws">
                <Column gap="x-small">
                  {newsCategories.map((category) => (
                    <Checkbox
                      defaultChecked={selectedCategories.includes(category)}
                      key={category}
                      name="soort"
                      value={category.toLowerCase()}
                    >
                      {category}
                    </Checkbox>
                  ))}
                </Column>
              </FieldSet>
              <FieldSet className="ams-mb-l" legend="Stadsdelen">
                <Column gap="x-small">
                  {newsDistricts.map((district) => (
                    <Checkbox
                      defaultChecked={selectedDistricts.includes(district)}
                      key={district}
                      name="stadsdeel"
                      value={district.toLowerCase()}
                    >
                      {district}
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
           * columns of the page rather than on columns of their own. That is what lines the Cards up with the rest.
           */}
          <Grid.Subgrid span={{ narrow: 4, medium: 5, wide: 9 }} start={{ narrow: 1, medium: 4, wide: 4 }}>
            {/* The sentence is running text, which takes at most 7 of the 12 columns, so it stops short of the Cards. */}
            <Grid.Cell span={{ narrow: 4, medium: 5, wide: 7 }}>
              <Heading className="ams-visually-hidden" level={2}>
                Nieuwsberichten
              </Heading>
              {/* A polite live region, so a screen reader hears the new total when the filters change. */}
              <Paragraph role="status">{resultsMessage}</Paragraph>
            </Grid.Cell>
            {/*
             * The articles are a list, so they get a Subgrid of their own: a ul with every Cell in it an li.
             * The result count above and the Pagination below stay outside it; neither is one of the articles.
             * A Subgrid inside a Subgrid still hands down the columns of the page, and takes the same row gap.
             */}
            <Grid.Subgrid as="ul" span="all">
              {/*
               * On the medium Grid a Card takes 4 of the 5 columns of the results region, leaving the last one
               * empty. That is below the width at which a Card with an image goes horizontal, so it stays vertical.
               */}
              {newsArticles.map((article) => (
                <Grid.Cell as="li" key={article.id} span={{ narrow: 4, medium: 4, wide: 9 }}>
                  <Card>
                    {/* Screen readers skip a Card’s image, so only use a decorative one with an empty alt. */}
                    <Card.Image alt="" loading="lazy" src={article.imageSource} />
                    {/* A Card that pairs an image with a Content lays out horizontally in a cell this wide. */}
                    <Card.Content>
                      <Card.HeadingGroup tagline={article.category}>
                        <Card.Heading level={3}>
                          <Card.Link href="#">{article.title}</Card.Link>
                        </Card.Heading>
                      </Card.HeadingGroup>
                      <Column gap="small">
                        <Paragraph>{article.teaser}</Paragraph>
                        {/* A Card takes the small size, where a content page takes the regular one. */}
                        <Metadata size="small">
                          <Metadata.Item>
                            {/* The visible date is prose; dateTime repeats it in the machine-readable format software parses. */}
                            <time dateTime={article.isoDate}>{article.date}</time>
                          </Metadata.Item>
                        </Metadata>
                      </Column>
                    </Card.Content>
                  </Card>
                </Grid.Cell>
              ))}
            </Grid.Subgrid>
            <Grid.Cell span="all">
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
