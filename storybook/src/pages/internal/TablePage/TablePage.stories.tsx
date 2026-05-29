/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'
import type { AnchorHTMLAttributes, ChangeEvent, FormEvent, MouseEvent } from 'react'

import { Grid, Heading, Label, Pagination, Row, Select, Table } from '@amsterdam/design-system-react'
import { useEffect, useState } from 'react'

import type { SortOrder } from './common'

import { commonMeta } from '../common/config'
import { AddressTableBody, AddressTableHeaderRow, bagAddresses, sortAddresses, sortOptions } from './common'

const meta = {
  ...commonMeta,
  title: 'Pages/Internal/Table Page',
} satisfies Meta

export default meta

// Sorting with select

const params = new URLSearchParams(window.location.search)

/** Submits the surrounding form whenever the sort `Select` value changes, so no extra submit button is needed. */
const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
  event.target.form?.requestSubmit()
}

/** Storybook only: persists the selected sort order in the URL query string by reloading the page. */
const handleSortSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault()

  const sort = new FormData(event.currentTarget).get('sort')
  if (typeof sort !== 'string') return

  const url = new URL(window.location.href)
  url.searchParams.set('sort', sort)
  window.location.href = url.toString()
}

/** Pre-rendered `Select.Option` elements for the sort dropdown, kept outside the story so the JSX source stays readable. */
const sortSelectOptions = sortOptions.map(({ label, value }) => (
  <Select.Option key={value} value={value}>
    {label}
  </Select.Option>
))

export const SortingWithSelect: StoryObj = {
  render: () => {
    const sortOrder = (params.get('sort') ?? 'straat-asc') as SortOrder
    const addresses = sortAddresses(bagAddresses.slice(0, 30), sortOrder)

    return (
      <Grid paddingBottom="x-large" paddingTop="large">
        <Grid.Cell className="ams-grid__cell--transparent" span="all">
          <Heading level={1}>Vergunninghouders 2026/2027</Heading>
        </Grid.Cell>
        <Grid.Cell span="all">
          {/* Position the Heading and Select next to each other to save space. */}
          <Row align="between" alignVertical="center" className="ams-mb-m" wrap>
            {/* Use a Heading instead of a Caption to allow a form in between. */}
            <Heading level={2}>Gegevens per adres</Heading>
            <form onSubmit={handleSortSubmit}>
              <Row alignVertical="center" wrap>
                <Label htmlFor="sort">Sorteren op</Label>
                <Select defaultValue={sortOrder} id="sort" name="sort" onChange={handleSortChange}>
                  {sortSelectOptions}
                </Select>
              </Row>
            </form>
          </Row>
          <Table>
            {/* Repeat the heading non-visually in the Caption for accessibility. */}
            <Table.Caption className="ams-visually-hidden">Gegevens per adres</Table.Caption>
            <Table.Header>
              <AddressTableHeaderRow />
            </Table.Header>
            <AddressTableBody addresses={addresses} />
          </Table>
        </Grid.Cell>
      </Grid>
    )
  },
}

// With Pagination

const paginationOptions = {
  addresses: bagAddresses.slice(0, 50),
  pageSize: 5,
}

const totalPaginationPages = Math.ceil(paginationOptions.addresses.length / paginationOptions.pageSize)

/** Coerces a query-string value to a page number within the valid range. */
const clampPage = (value: string | null) => {
  const parsed = Math.trunc(Number(value))
  if (!Number.isFinite(parsed) || parsed < 1) return 1
  return Math.min(parsed, totalPaginationPages)
}

/** Reads the current page from the `pagina` query parameter, clamped to the valid range. */
const getPageFromUrl = () => clampPage(new URLSearchParams(window.location.search).get('pagina'))

/** Builds the `href` for a pagination link, preserving other query parameters. */
const paginationLinkTemplate = (page: number) => {
  const url = new URL(window.location.href)
  url.searchParams.set('pagina', String(page))
  return `?${url.searchParams.toString()}`
}

/**
 * Intercepts pagination clicks so they don't trigger a full page reload.
 * Storybook only: a real reload would navigate the iframe to its own URL
 * (`/iframe.html?…`), escaping the Storybook chrome around it.
 * Modifier-clicks (cmd/ctrl/shift/alt or middle-click) fall through so users
 * can still open the page in a new tab.
 * Otherwise the URL is updated via the History API, and a synthetic `popstate`
 * event keeps the listening React state in sync.
 */
const handlePaginationClick = (event: MouseEvent<HTMLAnchorElement>) => {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return
  event.preventDefault()
  const url = new URL(event.currentTarget.href, window.location.href)
  window.history.pushState({}, '', url)
  window.dispatchEvent(new PopStateEvent('popstate'))
}

/** Anchor element wired to {@link handlePaginationClick}, used as the `linkComponent` of `Pagination`. */
const PaginationLink = ({ onClick, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a
    {...props}
    onClick={(event) => {
      onClick?.(event)
      if (event.defaultPrevented) return
      handlePaginationClick(event)
    }}
  />
)

export const WithPagination = () => {
  const { addresses, pageSize } = paginationOptions
  const [page, setPage] = useState(getPageFromUrl)

  const firstRow = (page - 1) * pageSize + 1
  const lastRow = Math.min(page * pageSize, addresses.length)
  const paginatedAddresses = addresses.slice(firstRow - 1, lastRow)

  // Sync React state with the URL, both for back/forward navigation
  // and for the synthetic popstate dispatched in handlePaginationClick.
  useEffect(() => {
    const handlePopState = () => setPage(getPageFromUrl())
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  return (
    <Grid paddingBottom="x-large" paddingTop="large">
      <Grid.Cell className="ams-grid__cell--transparent" span="all">
        <Heading level={1}>Vergunninghouders 2026/2027</Heading>
      </Grid.Cell>
      <Grid.Cell span="all">
        <Table className="ams-mb-l">
          {/* If nothing sits between the Heading and the Table, wrap the Heading in the Caption. */}
          <Table.Caption className="ams-mb-m">
            <Heading level={2}>Gegevens per adres</Heading>
          </Table.Caption>
          <Table.Header>
            <AddressTableHeaderRow />
          </Table.Header>
          <AddressTableBody addresses={paginatedAddresses} firstRow={firstRow} />
        </Table>
        <Row align="center">
          <Pagination
            linkComponent={PaginationLink}
            linkTemplate={paginationLinkTemplate}
            page={page}
            totalPages={totalPaginationPages}
          />
        </Row>
      </Grid.Cell>
    </Grid>
  )
}
