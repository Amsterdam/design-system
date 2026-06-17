/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'
import type { AnchorHTMLAttributes, ReactNode } from 'react'

import {
  Alert,
  Badge,
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
  Pagination,
  Paragraph,
  Row,
  SearchField,
  Select,
  StandaloneLink,
} from '@amsterdam/design-system-react'
import { CloseIcon } from '@amsterdam/design-system-react-icons'

import type { EventItem } from './data'

import { commonMeta } from '../common/config'
import { categories, districts, events, months, years } from './data'

/** Illustrative totals: the page shows the first batch of a much larger result set. */
const totalResults = 132
const totalPages = 15

/** Format a Date as YYYY-MM-DD in local time; `toISOString` would shift to UTC and could change the day. */
const formatIsoDate = (date: Date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`

/** Keep Storybook from navigating away when a date or pagination link is activated. */
const PreventNavigationLink = ({ onClick, ...restProps }: AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a
    {...restProps}
    onClick={(event) => {
      event.preventDefault()
      onClick?.(event)
    }}
  />
)

const resultCountMessage = (count: number) =>
  count === 0 ? 'Geen activiteiten gevonden' : `${count} ${count === 1 ? 'activiteit' : 'activiteiten'} gevonden`

/**
 * The search and filter panel. The keyword search is a separate `role=search` form, kept apart from the
 * refine form so the two `form` elements never nest (which would be invalid HTML). The Calendar is a
 * date-navigation `nav`: each day links to the activities on that day, complementing the coarse month and
 * year selects.
 */
const FiltersPanel = () => (
  <>
    <Heading className="ams-visually-hidden" id="events-filters-heading" level={2}>
      Zoeken en filteren
    </Heading>
    <SearchField className="ams-mb-l" onSubmit={(event) => event.preventDefault()}>
      <SearchField.Input
        label="Zoek op trefwoord"
        name="trefwoord"
        placeholder="Bijvoorbeeld: zwemles of vergadering"
      />
      <SearchField.Button>Zoeken</SearchField.Button>
    </SearchField>
    <form className="ams-mb-l" method="get" onSubmit={(event) => event.preventDefault()}>
      <FieldSet className="ams-mb-m" legend="Datum">
        <Field className="ams-mb-s">
          <Label htmlFor="events-month">Maand</Label>
          <Select id="events-month" name="maand">
            <Select.Option value="">Alle maanden</Select.Option>
            {months.map((month, index) => (
              <Select.Option key={month} value={String(index + 1)}>
                {month}
              </Select.Option>
            ))}
          </Select>
        </Field>
        <Field>
          <Label htmlFor="events-year">Jaar</Label>
          <Select id="events-year" name="jaar">
            <Select.Option value="">Alle jaren</Select.Option>
            {years.map((year) => (
              <Select.Option key={year} value={String(year)}>
                {year}
              </Select.Option>
            ))}
          </Select>
        </Field>
      </FieldSet>
      <Field className="ams-mb-m">
        <Label htmlFor="events-district">Stadsdeel</Label>
        <Select id="events-district" name="stadsdeel">
          <Select.Option value="">Alle stadsdelen</Select.Option>
          {districts.map((district) => (
            <Select.Option key={district} value={district}>
              {district}
            </Select.Option>
          ))}
        </Select>
      </Field>
      <FieldSet className="ams-mb-m" legend="Categorie">
        {categories.map((category) => (
          <Checkbox key={category} name="categorie" value={category}>
            {category}
          </Checkbox>
        ))}
      </FieldSet>
      <Button type="submit" variant="primary">
        Toon activiteiten
      </Button>
    </form>
    <Calendar
      accessibleName="Ga naar een dag met activiteiten"
      accessibleNameId="events-calendar"
      linkComponent={PreventNavigationLink}
      linkTemplate={(date) => `?datum=${formatIsoDate(date)}`}
    />
  </>
)

/**
 * The bar above the results: a polite live region with the result count, a sort control, and — when filters
 * are active — a row of filter tags with a ‘clear all’ link.
 */
const ResultsToolbar = ({ activeFilters, count }: { readonly activeFilters?: string[]; readonly count: number }) => (
  <div className="ams-mb-l">
    <Row align="between" alignVertical="end" className="ams-mb-m" wrap>
      <Paragraph role="status">{resultCountMessage(count)}</Paragraph>
      <form method="get" onSubmit={(event) => event.preventDefault()}>
        <Field>
          <Label htmlFor="events-sort">Sorteren</Label>
          <Select id="events-sort" name="sorteer">
            <Select.Option value="datum-oplopend">Eerstvolgende eerst</Select.Option>
            <Select.Option value="datum-aflopend">Laatste eerst</Select.Option>
          </Select>
        </Field>
      </form>
    </Row>
    {activeFilters && activeFilters.length > 0 && (
      <Row alignVertical="center" aria-label="Actieve filters" as="section" gap="x-small" wrap>
        {activeFilters.map((filter) => (
          <Badge key={filter} label={filter} />
        ))}
        <StandaloneLink href="#" icon={CloseIcon}>
          Wis alle filters
        </StandaloneLink>
      </Row>
    )}
  </div>
)

/**
 * One activity. A Card with an image switches to a horizontal layout when its container is wider than 32rem,
 * so the same component renders as a full-width row in the list view and as a vertical card in the grid view.
 */
const EventCard = ({ event }: { readonly event: EventItem }) => (
  <Card>
    <Card.Image alt="" src={event.image} />
    <Card.HeadingGroup tagline={event.category}>
      <Card.Heading level={3}>
        <Card.Link href={event.href}>{event.title}</Card.Link>
      </Card.Heading>
    </Card.HeadingGroup>
    <Column gap="small">
      <Paragraph>
        <time dateTime={event.isoDate}>{event.dateLabel}</time>
        {event.timeLabel ? `, ${event.timeLabel}` : ''}
      </Paragraph>
      <Paragraph>{event.teaser}</Paragraph>
      <Paragraph size="small">
        {event.location}, {event.district}
      </Paragraph>
    </Column>
  </Card>
)

const EventsPagination = () => (
  <Pagination
    accessibleName="Paginering"
    accessibleNameId="events-pagination"
    linkComponent={PreventNavigationLink}
    linkTemplate={(page) => `?pagina=${page}`}
    page={1}
    totalPages={totalPages}
  />
)

/**
 * The page shell shared by every story: breadcrumb, page intro, and the two-column main region with the
 * filter panel on the left. The DOM order is identical at every breakpoint; only the Grid column placement
 * changes, so the visual order never diverges from the reading and tab order. The `children` are the
 * results column, which differs per story.
 */
const EventsPageLayout = ({ children }: { readonly children: ReactNode }) => (
  <>
    <Grid paddingTop="large">
      <Grid.Cell span={{ narrow: 4, medium: 8, wide: 12 }}>
        <Breadcrumb>
          <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
          <Breadcrumb.Link href="#">Activiteiten</Breadcrumb.Link>
        </Breadcrumb>
      </Grid.Cell>
    </Grid>
    <main id="inhoud">
      <Grid paddingBottom="large">
        <Grid.Cell span={{ narrow: 4, medium: 8, wide: 8 }}>
          <Heading className="ams-mb-s" level={1}>
            Activiteiten in Amsterdam
          </Heading>
          <Paragraph className="ams-mb-s" size="large">
            In de Activiteitenkalender vindt u bijeenkomsten en activiteiten die de gemeente Amsterdam organiseert, of
            die in opdracht van de gemeente worden georganiseerd. Een overzicht van gemeentelijke én maatschappelijke
            activiteiten voor alle Amsterdammers.
          </Paragraph>
          <Paragraph>Vanaf 17 juni 2026</Paragraph>
        </Grid.Cell>
      </Grid>
      <Grid paddingBottom="x-large">
        <Grid.Cell aria-labelledby="events-filters-heading" as="aside" span={{ narrow: 4, medium: 8, wide: 3 }}>
          <FiltersPanel />
        </Grid.Cell>
        {children}
      </Grid>
    </main>
  </>
)

const meta = {
  ...commonMeta,
  title: 'Pages/Public/Events Page',
} satisfies Meta

export default meta

/**
 * The recommended layout: a single, scannable column of full-width rows. Because each Card sits in a wide
 * Grid cell (a query container), it adopts the horizontal layout automatically and falls back to a vertical
 * card on narrow screens — without any change to the DOM.
 */
export const Default: StoryObj = {
  render: () => (
    <EventsPageLayout>
      <Grid.Cell span={{ narrow: 4, medium: 8, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 4 }}>
        <Heading className="ams-visually-hidden" level={2}>
          Zoekresultaten
        </Heading>
        <ResultsToolbar count={totalResults} />
        <ul
          className="ams-mb-l"
          role="list"
          style={{ display: 'grid', gap: 'var(--ams-grid-row-gap-l)', listStyle: 'none', margin: 0, padding: 0 }}
        >
          {events.map((event) => (
            <li key={event.id}>
              <EventCard event={event} />
            </li>
          ))}
        </ul>
        <EventsPagination />
      </Grid.Cell>
    </EventsPageLayout>
  ),
}

/**
 * The same content as a card grid. The results column is a subgrid, so the cards line up on the page’s
 * columns even though the taller filter panel shares the row — no manual row placement needed. The cards
 * stay vertical because each one sits in a narrow (3-column) cell, below the horizontal breakpoint.
 */
export const Cards: StoryObj = {
  render: () => (
    <EventsPageLayout>
      <Grid.Cell
        span={{ narrow: 4, medium: 8, wide: 9 }}
        start={{ narrow: 1, medium: 1, wide: 4 }}
        style={{ display: 'grid', gridTemplateColumns: 'subgrid', rowGap: 'var(--ams-grid-row-gap-l)' }}
      >
        <Grid.Cell span="all">
          <Heading className="ams-visually-hidden" level={2}>
            Zoekresultaten
          </Heading>
          <ResultsToolbar count={totalResults} />
        </Grid.Cell>
        {events.map((event) => (
          <Grid.Cell key={event.id} span={{ narrow: 4, medium: 4, wide: 3 }}>
            <EventCard event={event} />
          </Grid.Cell>
        ))}
        <Grid.Cell span="all">
          <EventsPagination />
        </Grid.Cell>
      </Grid.Cell>
    </EventsPageLayout>
  ),
}

/**
 * The empty state. The live region announces ‘Geen activiteiten gevonden’, the active filters are shown as
 * filter tags with a single ‘clear all’ link, and an Alert offers a way to recover instead of leaving the
 * user at a dead end.
 */
export const NoResults: StoryObj = {
  render: () => (
    <EventsPageLayout>
      <Grid.Cell span={{ narrow: 4, medium: 8, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 4 }}>
        <Heading className="ams-visually-hidden" level={2}>
          Zoekresultaten
        </Heading>
        <ResultsToolbar activeFilters={['Stadsdeel: Noord', 'Categorie: Sport en spel']} count={0} />
        <Alert heading="Geen activiteiten gevonden" headingLevel={3}>
          <Paragraph className="ams-mb-s">
            Er zijn geen activiteiten die voldoen aan uw filters. Probeer een ruimere periode, of kies een ander
            stadsdeel of een andere categorie.
          </Paragraph>
          <StandaloneLink href="#" icon={CloseIcon}>
            Wis alle filters
          </StandaloneLink>
        </Alert>
      </Grid.Cell>
    </EventsPageLayout>
  ),
}
