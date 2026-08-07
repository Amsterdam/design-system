/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'
import type { AnchorHTMLAttributes } from 'react'

import {
  Breadcrumb,
  Button,
  Calendar,
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
import { eventCategories, eventDistricts, eventItems } from './data'

/** Illustrative totals: the page shows the first batch of a much larger result set. */
const totalResults = 132
const totalPages = 22

const resultsMessage = `${totalResults} activiteiten gevonden.`

/** Format a Date as YYYY-MM-DD in local time; `toISOString` would shift to UTC and could change the day. */
const formatIsoDate = (date: Date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`

/** Anchor element that keeps a Calendar day or a pagination link from reloading the Storybook iframe. */
const PreventNavigationLink = ({ onClick, ...restProps }: AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a
    {...restProps}
    onClick={(event) => {
      event.preventDefault()
      onClick?.(event)
    }}
  />
)

const meta = {
  ...commonMeta,
  title: 'Pages/Public/Events Overview Page',
  parameters: pageParameters(
    'Indexes activities a visitor narrows down by date as well as by subject: ' +
      'a city events calendar, a course programme, a schedule of public meetings.',
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
        <Breadcrumb.Link href="#">Activiteiten</Breadcrumb.Link>
      </Breadcrumb>
    </Grid.Cell>
  </Grid>
  <main id="inhoud">
    {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
    {/*
     * Both this Grid and the one below it have the default background colour, so this Grid takes a paddingBottom of
     * 2x-large.
     */}
    <Grid paddingBottom="2x-large">
      {/* ams-prose sets the vertical rhythm between the title, the lead, and the search below it. */}
      <Grid.Cell
        className="ams-prose"
        span={{ narrow: 4, medium: 7, wide: 9 }}
        start={{ narrow: 1, medium: 1, wide: 2 }}
      >
        <Heading level={1}>Activiteiten in Amsterdam</Heading>
        <Paragraph size="large">
          Een overzicht van gemeentelijke én maatschappelijke activiteiten voor alle Amsterdammers.
        </Paragraph>
        {/* Search Field renders its own form with role=search, so it needs no form around it. */}
        <SearchField>
          <SearchField.Input
            label="Zoek op trefwoord"
            name="trefwoord"
            placeholder="Bijvoorbeeld: zwemles of vergadering"
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
      {/* A Subgrid rather than a Cell, so every control sits in a Cell of its own and the row gap spaces them. */}
      <Grid.Subgrid
        aria-labelledby="events-filters-heading"
        as="aside"
        gapVertical="large"
        span={{ narrow: 4, medium: 3, wide: 3 }}
      >
        <Grid.Cell span="all">
          <Heading className="ams-visually-hidden" id="events-filters-heading" level={2}>Filteren</Heading>
          {/*
           * The Calendar is date navigation rather than a date input: every day links to the activities on it,
           * which suits someone asking what is on next Saturday.
           */}
          <Calendar
            accessibleName="Ga naar een dag met activiteiten"
            accessibleNameId="events-calendar"
            /*
             * The month the listing starts in. Without it a Calendar opens on the current month, which would
             * put the visual test on a different month every month.
             */
            defaultMonth={new Date(2026, 5, 17)}
            /*
             * Calendar renders plain anchors from linkTemplate; linkComponent lets you pass your router’s link.
             * Here a small wrapper keeps navigation inside Storybook rather than reloading the iframe – see
             * PreventNavigationLink.
             */
            linkComponent={PreventNavigationLink}
            linkTemplate={(date) => \`?datum=\${formatIsoDate(date)}\`}
          />
        </Grid.Cell>
        <Grid.Cell span="all">
          {/* A Cell of its own means a form of its own: a form element cannot span the Cells of a Subgrid. */}
          <form method="get">
            <Field>
              <Label htmlFor="events-district">Stadsdeel</Label>
              <Select id="events-district" name="stadsdeel">
                <Select.Option value="">Alle stadsdelen</Select.Option>
                <Select.Option value="Centrum">Centrum</Select.Option>
                {/* … one Option per district … */}
              </Select>
            </Field>
          </form>
        </Grid.Cell>
        <Grid.Cell span="all">
          <form method="get">
            {/* A Field Set spaces its own children, so the Checkboxes inside one need no margin. */}
            <FieldSet className="ams-mb-m" legend="Categorie">
              <Checkbox name="categorie" value="Cursussen en trainingen">
                Cursussen en trainingen
              </Checkbox>
              {/* … one Checkbox per category … */}
            </FieldSet>
            {/* The design filters as soon as a box is ticked; the button keeps the form usable without that script. */}
            <Button type="submit">Toon activiteiten</Button>
          </form>
        </Grid.Cell>
      </Grid.Subgrid>
      {/*
       * A Subgrid hands the columns it spans to its own children, so the Cells inside it are placed on the
       * columns of the page rather than on columns of their own. That is what lines the Cards up with the rest.
       */}
      <Grid.Subgrid span={{ narrow: 4, medium: 5, wide: 9 }} start={{ narrow: 1, medium: 4, wide: 4 }}>
        {/*
         * The result count takes the width of the results below it, capped at the 7 columns a reading measure takes.
         */}
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 7 }}>
          <Heading className="ams-visually-hidden" level={2}>Zoekresultaten</Heading>
          {/* A polite live region, so a screen reader hears the new total when the search or the filters change. */}
          <Paragraph role="status">{resultsMessage}</Paragraph>
        </Grid.Cell>
        {/*
         * The activities are a list, so they get a Subgrid of their own: a ul with every Cell in it an li.
         * The result count above and the Pagination below stay outside it; neither is one of the activities.
         * A Subgrid inside a Subgrid still hands down the columns of the page, and takes the same row gap.
         */}
        <Grid.Subgrid as="ul" span="all">
          {/*
           * On the medium grid a Card takes 4 of the 5 columns of the results region, leaving the last one
           * empty. That is below the width at which a Card with an image goes horizontal, so it stays vertical.
           */}
          <Grid.Cell as="li" key="open-dag-stadsarchief" span={{ narrow: 4, medium: 4, wide: 9 }}>
            <Card>
              {/* Screen readers skip a Card’s image, so only use a decorative one with an empty alt. */}
              <Card.Image alt="" loading="lazy" src="https://picsum.photos/id/1048/640/360" />
              {/* A Card that pairs an image with a Content lays out horizontally in a cell this wide. */}
              <Card.Content>
                <Card.HeadingGroup>
                  <Card.Heading level={3}>
                    <Card.Link href="#">Open dag Stadsarchief Amsterdam</Card.Link>
                  </Card.Heading>
                  {/* The Metadata carries the facets of the activity, comma separated. */}
                  <Metadata size="small">Kunst en cultuur, Centrum</Metadata>
                </Card.HeadingGroup>
                <Column gap="small">
                  <Paragraph>Ontdek eeuwenoude kaarten, foto’s en films over Amsterdam.</Paragraph>
                  {/* When and where, below the description. A Card takes the small size of Metadata. */}
                  <Metadata size="small">
                    {/*
                     * The visible date is prose; dateTime repeats it in the machine-readable format software parses.
                     */}
                    <time dateTime="2026-06-20">20 juni 2026</time>
                    {/* The day, the time and the place are three kinds of metadata, so a Separator sits between them. */}
                    <Metadata.Separator />
                    10.00–16.00 uur
                    <Metadata.Separator />
                    Stadsarchief Amsterdam
                  </Metadata>
                </Column>
              </Card.Content>
            </Card>
          </Grid.Cell>
          {/* … one Cell per activity … */}
        </Grid.Subgrid>
        {/* The Pagination takes the width of the results above it rather than that of the region. */}
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 9 }}>
          <Pagination
            accessibleNameId="events-pagination"
            linkComponent={PreventNavigationLink}
            linkTemplate={(page) => \`?pagina=\${page}\`}
            page={1}
            totalPages={totalPages}
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
            <Breadcrumb.Link href="#">Activiteiten</Breadcrumb.Link>
          </Breadcrumb>
        </Grid.Cell>
      </Grid>
      <main id="inhoud">
        {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
        {/* Both this Grid and the one below it have the default background colour, so this Grid takes a paddingBottom of 2x-large. */}
        <Grid paddingBottom="2x-large">
          {/* ams-prose sets the vertical rhythm between the title, the lead, and the search below it. */}
          <Grid.Cell
            className="ams-prose"
            span={{ narrow: 4, medium: 7, wide: 9 }}
            start={{ narrow: 1, medium: 1, wide: 2 }}
          >
            <Heading level={1}>Activiteiten in Amsterdam</Heading>
            <Paragraph size="large">
              Een overzicht van gemeentelijke én maatschappelijke activiteiten voor alle Amsterdammers.
            </Paragraph>
            {/* Search Field renders its own form with role=search, so it needs no form around it. */}
            <SearchField>
              <SearchField.Input
                label="Zoek op trefwoord"
                name="trefwoord"
                placeholder="Bijvoorbeeld: zwemles of vergadering"
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
          {/* A Subgrid rather than a Cell, so every control sits in a Cell of its own and the row gap spaces them. */}
          <Grid.Subgrid
            aria-labelledby="events-filters-heading"
            as="aside"
            gapVertical="large"
            span={{ narrow: 4, medium: 3, wide: 3 }}
          >
            <Grid.Cell span="all">
              <Heading className="ams-visually-hidden" id="events-filters-heading" level={2}>
                Filteren
              </Heading>
              {/*
               * The Calendar is date navigation rather than a date input: every day links to the activities on it,
               * which suits someone asking what is on next Saturday.
               */}
              <Calendar
                accessibleName="Ga naar een dag met activiteiten"
                accessibleNameId="events-calendar"
                /*
                 * The month the listing starts in. Without it a Calendar opens on the current month, which would
                 * put the visual test on a different month every month.
                 */
                defaultMonth={new Date(2026, 5, 17)}
                /*
                 * Calendar renders plain anchors from linkTemplate; linkComponent lets you pass your router’s link.
                 * Here a small wrapper keeps navigation inside Storybook rather than reloading the iframe – see
                 * PreventNavigationLink.
                 */
                linkComponent={PreventNavigationLink}
                linkTemplate={(date) => `?datum=${formatIsoDate(date)}`}
              />
            </Grid.Cell>
            <Grid.Cell span="all">
              {/* A Cell of its own means a form of its own: a form element cannot span the Cells of a Subgrid. */}
              <form method="get">
                <Field>
                  <Label htmlFor="events-district">Stadsdeel</Label>
                  <Select id="events-district" name="stadsdeel">
                    <Select.Option value="">Alle stadsdelen</Select.Option>
                    {eventDistricts.map((district) => (
                      <Select.Option key={district} value={district}>
                        {district}
                      </Select.Option>
                    ))}
                  </Select>
                </Field>
              </form>
            </Grid.Cell>
            <Grid.Cell span="all">
              <form method="get">
                {/* A Field Set spaces its own children, so the Checkboxes inside one need no margin. */}
                <FieldSet className="ams-mb-m" legend="Categorie">
                  {eventCategories.map((category) => (
                    <Checkbox key={category} name="categorie" value={category}>
                      {category}
                    </Checkbox>
                  ))}
                </FieldSet>
                {/* The design filters as soon as a box is ticked; the button keeps the form usable without that script. */}
                <Button type="submit">Toon activiteiten</Button>
              </form>
            </Grid.Cell>
          </Grid.Subgrid>
          {/*
           * A Subgrid hands the columns it spans to its own children, so the Cells inside it are placed on the
           * columns of the page rather than on columns of their own. That is what lines the Cards up with the rest.
           */}
          <Grid.Subgrid span={{ narrow: 4, medium: 5, wide: 9 }} start={{ narrow: 1, medium: 4, wide: 4 }}>
            {/* The result count takes the width of the results below it, capped at the 7 columns a reading measure takes. */}
            <Grid.Cell span={{ narrow: 4, medium: 4, wide: 7 }}>
              <Heading className="ams-visually-hidden" level={2}>
                Zoekresultaten
              </Heading>
              {/* A polite live region, so a screen reader hears the new total when the search or the filters change. */}
              <Paragraph role="status">{resultsMessage}</Paragraph>
            </Grid.Cell>
            {/*
             * The activities are a list, so they get a Subgrid of their own: a ul with every Cell in it an li.
             * The result count above and the Pagination below stay outside it; neither is one of the activities.
             * A Subgrid inside a Subgrid still hands down the columns of the page, and takes the same row gap.
             */}
            <Grid.Subgrid as="ul" span="all">
              {/*
               * On the medium grid a Card takes 4 of the 5 columns of the results region, leaving the last one
               * empty. That is below the width at which a Card with an image goes horizontal, so it stays vertical.
               */}
              {eventItems.map((event) => (
                <Grid.Cell as="li" key={event.id} span={{ narrow: 4, medium: 4, wide: 9 }}>
                  <Card>
                    {/* Screen readers skip a Card’s image, so only use a decorative one with an empty alt. */}
                    <Card.Image alt="" loading="lazy" src={event.imageSource} />
                    {/* A Card that pairs an image with a Content lays out horizontally in a cell this wide. */}
                    <Card.Content>
                      <Card.HeadingGroup>
                        <Card.Heading level={3}>
                          <Card.Link href={event.href}>{event.title}</Card.Link>
                        </Card.Heading>
                        {/* The Metadata carries the facets of the activity, comma separated. */}
                        <Metadata size="small">{`${event.category}, ${event.district}`}</Metadata>
                      </Card.HeadingGroup>
                      <Column gap="small">
                        <Paragraph>{event.teaser}</Paragraph>
                        {/* When and where, below the description. A Card takes the small size of Metadata. */}
                        <Metadata size="small">
                          {/* The visible date is prose; dateTime repeats it in the machine-readable format software parses. */}
                          <time dateTime={event.isoDate}>{event.date}</time>
                          {/* The day, the time and the place are three kinds of metadata, so a Separator sits between them. */}
                          {event.timeLabel && (
                            <>
                              <Metadata.Separator />
                              {event.timeLabel}
                            </>
                          )}
                          <Metadata.Separator />
                          {event.venue}
                        </Metadata>
                      </Column>
                    </Card.Content>
                  </Card>
                </Grid.Cell>
              ))}
            </Grid.Subgrid>
            {/* The Pagination takes the width of the results above it rather than that of the region. */}
            <Grid.Cell span={{ narrow: 4, medium: 4, wide: 9 }}>
              <Pagination
                accessibleNameId="events-pagination"
                linkComponent={PreventNavigationLink}
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

export const CardGrid: StoryObj = {
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
        <Breadcrumb.Link href="#">Activiteiten</Breadcrumb.Link>
      </Breadcrumb>
    </Grid.Cell>
  </Grid>
  <main id="inhoud">
    {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
    {/*
     * Both this Grid and the one below it have the default background colour, so this Grid takes a paddingBottom of
     * 2x-large.
     */}
    <Grid paddingBottom="2x-large">
      {/* ams-prose sets the vertical rhythm between the title, the lead, and the search below it. */}
      <Grid.Cell
        className="ams-prose"
        span={{ narrow: 4, medium: 7, wide: 9 }}
        start={{ narrow: 1, medium: 1, wide: 2 }}
      >
        <Heading level={1}>Activiteiten in Amsterdam</Heading>
        <Paragraph size="large">
          Een overzicht van gemeentelijke én maatschappelijke activiteiten voor alle Amsterdammers.
        </Paragraph>
        {/* Search Field renders its own form with role=search, so it needs no form around it. */}
        <SearchField>
          <SearchField.Input
            label="Zoek op trefwoord"
            name="trefwoord"
            placeholder="Bijvoorbeeld: zwemles of vergadering"
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
      {/* A Subgrid rather than a Cell, so every control sits in a Cell of its own and the row gap spaces them. */}
      <Grid.Subgrid
        aria-labelledby="events-filters-heading"
        as="aside"
        gapVertical="large"
        span={{ narrow: 4, medium: 3, wide: 3 }}
      >
        <Grid.Cell span="all">
          <Heading className="ams-visually-hidden" id="events-filters-heading" level={2}>Filteren</Heading>
          {/*
           * The Calendar is date navigation rather than a date input: every day links to the activities on it,
           * which suits someone asking what is on next Saturday.
           */}
          <Calendar
            accessibleName="Ga naar een dag met activiteiten"
            accessibleNameId="events-calendar"
            /*
             * The month the listing starts in. Without it a Calendar opens on the current month, which would
             * put the visual test on a different month every month.
             */
            defaultMonth={new Date(2026, 5, 17)}
            /*
             * Calendar renders plain anchors from linkTemplate; linkComponent lets you pass your router’s link.
             * Here a small wrapper keeps navigation inside Storybook rather than reloading the iframe – see
             * PreventNavigationLink.
             */
            linkComponent={PreventNavigationLink}
            linkTemplate={(date) => \`?datum=\${formatIsoDate(date)}\`}
          />
        </Grid.Cell>
        <Grid.Cell span="all">
          {/* A Cell of its own means a form of its own: a form element cannot span the Cells of a Subgrid. */}
          <form method="get">
            <Field>
              <Label htmlFor="events-district">Stadsdeel</Label>
              <Select id="events-district" name="stadsdeel">
                <Select.Option value="">Alle stadsdelen</Select.Option>
                <Select.Option value="Centrum">Centrum</Select.Option>
                {/* … one Option per district … */}
              </Select>
            </Field>
          </form>
        </Grid.Cell>
        <Grid.Cell span="all">
          <form method="get">
            {/* A Field Set spaces its own children, so the Checkboxes inside one need no margin. */}
            <FieldSet className="ams-mb-m" legend="Categorie">
              <Checkbox name="categorie" value="Cursussen en trainingen">
                Cursussen en trainingen
              </Checkbox>
              {/* … one Checkbox per category … */}
            </FieldSet>
            {/* The design filters as soon as a box is ticked; the button keeps the form usable without that script. */}
            <Button type="submit">Toon activiteiten</Button>
          </form>
        </Grid.Cell>
      </Grid.Subgrid>
      {/*
       * A Subgrid hands the columns it spans to its own children, so the Cells inside it are placed on the
       * columns of the page rather than on columns of their own. That is what lines the Cards up with the rest.
       */}
      <Grid.Subgrid span={{ narrow: 4, medium: 5, wide: 9 }} start={{ narrow: 1, medium: 4, wide: 4 }}>
        {/*
         * The result count takes the width of the results below it, capped at the 7 columns a reading measure takes.
         */}
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 7 }}>
          <Heading className="ams-visually-hidden" level={2}>Zoekresultaten</Heading>
          {/* A polite live region, so a screen reader hears the new total when the search or the filters change. */}
          <Paragraph role="status">{resultsMessage}</Paragraph>
        </Grid.Cell>
        {/*
         * The activities are a list, so they get a Subgrid of their own: a ul with every Cell in it an li.
         * The result count above and the Pagination below stay outside it; neither is one of the activities.
         * A Subgrid inside a Subgrid still hands down the columns of the page, and takes the same row gap.
         */}
        <Grid.Subgrid as="ul" span="all">
          {/*
           * Three columns of the nine the results span, so the Cards tile three to a row on the wide grid.
           * That is narrower than the width at which a Card with an image goes horizontal, so each one stays
           * vertical and its image spans the full width of the Card.
           */}
          <Grid.Cell as="li" key="open-dag-stadsarchief" span={{ narrow: 4, medium: 4, wide: 3 }}>
            <Card>
              {/* Screen readers skip a Card’s image, so only use a decorative one with an empty alt. */}
              <Card.Image alt="" loading="lazy" src="https://picsum.photos/id/1048/640/360" />
              <Card.Content>
                <Card.HeadingGroup>
                  <Card.Heading level={3}>
                    <Card.Link href="#">Open dag Stadsarchief Amsterdam</Card.Link>
                  </Card.Heading>
                  {/* The Metadata carries the facets of the activity, comma separated. */}
                  <Metadata size="small">Kunst en cultuur, Centrum</Metadata>
                </Card.HeadingGroup>
                <Column gap="small">
                  <Paragraph>Ontdek eeuwenoude kaarten, foto’s en films over Amsterdam.</Paragraph>
                  {/* When and where, below the description. A Card takes the small size of Metadata. */}
                  <Metadata size="small">
                    {/*
                     * The visible date is prose; dateTime repeats it in the machine-readable format software parses.
                     */}
                    <time dateTime="2026-06-20">20 juni 2026</time>
                    {/* The day, the time and the place are three kinds of metadata, so a Separator sits between them. */}
                    <Metadata.Separator />
                    10.00–16.00 uur
                    <Metadata.Separator />
                    Stadsarchief Amsterdam
                  </Metadata>
                </Column>
              </Card.Content>
            </Card>
          </Grid.Cell>
          {/* … one Cell per activity … */}
        </Grid.Subgrid>
        {/* The Pagination takes the width of the results above it rather than that of the region. */}
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 9 }}>
          <Pagination
            accessibleNameId="events-pagination"
            linkComponent={PreventNavigationLink}
            linkTemplate={(page) => \`?pagina=\${page}\`}
            page={1}
            totalPages={totalPages}
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
            <Breadcrumb.Link href="#">Activiteiten</Breadcrumb.Link>
          </Breadcrumb>
        </Grid.Cell>
      </Grid>
      <main id="inhoud">
        {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
        {/* Both this Grid and the one below it have the default background colour, so this Grid takes a paddingBottom of 2x-large. */}
        <Grid paddingBottom="2x-large">
          {/* ams-prose sets the vertical rhythm between the title, the lead, and the search below it. */}
          <Grid.Cell
            className="ams-prose"
            span={{ narrow: 4, medium: 7, wide: 9 }}
            start={{ narrow: 1, medium: 1, wide: 2 }}
          >
            <Heading level={1}>Activiteiten in Amsterdam</Heading>
            <Paragraph size="large">
              Een overzicht van gemeentelijke én maatschappelijke activiteiten voor alle Amsterdammers.
            </Paragraph>
            {/* Search Field renders its own form with role=search, so it needs no form around it. */}
            <SearchField>
              <SearchField.Input
                label="Zoek op trefwoord"
                name="trefwoord"
                placeholder="Bijvoorbeeld: zwemles of vergadering"
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
          {/* A Subgrid rather than a Cell, so every control sits in a Cell of its own and the row gap spaces them. */}
          <Grid.Subgrid
            aria-labelledby="events-filters-heading"
            as="aside"
            gapVertical="large"
            span={{ narrow: 4, medium: 3, wide: 3 }}
          >
            <Grid.Cell span="all">
              <Heading className="ams-visually-hidden" id="events-filters-heading" level={2}>
                Filteren
              </Heading>
              {/*
               * The Calendar is date navigation rather than a date input: every day links to the activities on it,
               * which suits someone asking what is on next Saturday.
               */}
              <Calendar
                accessibleName="Ga naar een dag met activiteiten"
                accessibleNameId="events-calendar"
                /*
                 * The month the listing starts in. Without it a Calendar opens on the current month, which would
                 * put the visual test on a different month every month.
                 */
                defaultMonth={new Date(2026, 5, 17)}
                /*
                 * Calendar renders plain anchors from linkTemplate; linkComponent lets you pass your router’s link.
                 * Here a small wrapper keeps navigation inside Storybook rather than reloading the iframe – see
                 * PreventNavigationLink.
                 */
                linkComponent={PreventNavigationLink}
                linkTemplate={(date) => `?datum=${formatIsoDate(date)}`}
              />
            </Grid.Cell>
            <Grid.Cell span="all">
              {/* A Cell of its own means a form of its own: a form element cannot span the Cells of a Subgrid. */}
              <form method="get">
                <Field>
                  <Label htmlFor="events-district">Stadsdeel</Label>
                  <Select id="events-district" name="stadsdeel">
                    <Select.Option value="">Alle stadsdelen</Select.Option>
                    {eventDistricts.map((district) => (
                      <Select.Option key={district} value={district}>
                        {district}
                      </Select.Option>
                    ))}
                  </Select>
                </Field>
              </form>
            </Grid.Cell>
            <Grid.Cell span="all">
              <form method="get">
                {/* A Field Set spaces its own children, so the Checkboxes inside one need no margin. */}
                <FieldSet className="ams-mb-m" legend="Categorie">
                  {eventCategories.map((category) => (
                    <Checkbox key={category} name="categorie" value={category}>
                      {category}
                    </Checkbox>
                  ))}
                </FieldSet>
                {/* The design filters as soon as a box is ticked; the button keeps the form usable without that script. */}
                <Button type="submit">Toon activiteiten</Button>
              </form>
            </Grid.Cell>
          </Grid.Subgrid>
          {/*
           * A Subgrid hands the columns it spans to its own children, so the Cells inside it are placed on the
           * columns of the page rather than on columns of their own. That is what lines the Cards up with the rest.
           */}
          <Grid.Subgrid span={{ narrow: 4, medium: 5, wide: 9 }} start={{ narrow: 1, medium: 4, wide: 4 }}>
            {/* The result count takes the width of the results below it, capped at the 7 columns a reading measure takes. */}
            <Grid.Cell span={{ narrow: 4, medium: 4, wide: 7 }}>
              <Heading className="ams-visually-hidden" level={2}>
                Zoekresultaten
              </Heading>
              {/* A polite live region, so a screen reader hears the new total when the search or the filters change. */}
              <Paragraph role="status">{resultsMessage}</Paragraph>
            </Grid.Cell>
            {/*
             * The activities are a list, so they get a Subgrid of their own: a ul with every Cell in it an li.
             * The result count above and the Pagination below stay outside it; neither is one of the activities.
             * A Subgrid inside a Subgrid still hands down the columns of the page, and takes the same row gap.
             */}
            <Grid.Subgrid as="ul" span="all">
              {/*
               * Three columns of the nine the results span, so the Cards tile three to a row on the wide grid.
               * That is narrower than the width at which a Card with an image goes horizontal, so each one stays
               * vertical and its image spans the full width of the Card.
               */}
              {eventItems.map((event) => (
                <Grid.Cell as="li" key={event.id} span={{ narrow: 4, medium: 4, wide: 3 }}>
                  <Card>
                    {/* Screen readers skip a Card’s image, so only use a decorative one with an empty alt. */}
                    <Card.Image alt="" loading="lazy" src={event.imageSource} />
                    <Card.Content>
                      <Card.HeadingGroup>
                        <Card.Heading level={3}>
                          <Card.Link href={event.href}>{event.title}</Card.Link>
                        </Card.Heading>
                        {/* The Metadata carries the facets of the activity, comma separated. */}
                        <Metadata size="small">{`${event.category}, ${event.district}`}</Metadata>
                      </Card.HeadingGroup>
                      <Column gap="small">
                        <Paragraph>{event.teaser}</Paragraph>
                        {/* When and where, below the description. A Card takes the small size of Metadata. */}
                        <Metadata size="small">
                          {/* The visible date is prose; dateTime repeats it in the machine-readable format software parses. */}
                          <time dateTime={event.isoDate}>{event.date}</time>
                          {/* The day, the time and the place are three kinds of metadata, so a Separator sits between them. */}
                          {event.timeLabel && (
                            <>
                              <Metadata.Separator />
                              {event.timeLabel}
                            </>
                          )}
                          <Metadata.Separator />
                          {event.venue}
                        </Metadata>
                      </Column>
                    </Card.Content>
                  </Card>
                </Grid.Cell>
              ))}
            </Grid.Subgrid>
            {/* The Pagination takes the width of the results above it rather than that of the region. */}
            <Grid.Cell span={{ narrow: 4, medium: 4, wide: 9 }}>
              <Pagination
                accessibleNameId="events-pagination"
                linkComponent={PreventNavigationLink}
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
