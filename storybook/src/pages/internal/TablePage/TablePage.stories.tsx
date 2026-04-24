/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'
import type { AnchorHTMLAttributes, MouseEvent } from 'react'

import { Grid, Heading, Label, Pagination, Row, Select, Table } from '@amsterdam/design-system-react'
import { useState } from 'react'

import type { SortOrder } from './common'

import { commonMeta } from '../common/config'
import { AddressTableBody, AddressTableHeaderRow, bagAddresses, sortAddresses, sortOptions } from './common'

const params = new URLSearchParams(window.location.search)

const paginationLinkTemplate = (page: number) => {
  const url = new URL(window.location.href)
  url.searchParams.set('pagina', String(page))
  return `?${url.searchParams.toString()}`
}

const meta = {
  ...commonMeta,
  title: 'Pages/Internal/Table Page',
} satisfies Meta

export default meta

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
          <form
            onSubmit={(e) => {
              e.preventDefault()
              const url = new URL(window.location.href)
              url.searchParams.set('sort', new FormData(e.currentTarget).get('sort') as string)
              window.location.href = url.toString()
            }}
          >
            <Row align="end" alignVertical="center" wrap>
              <Label htmlFor="sort">Sorteren op</Label>
              <Select defaultValue={sortOrder} id="sort" name="sort" onChange={(e) => e.target.form?.requestSubmit()}>
                {sortOptions.map(({ label, value }) => (
                  <Select.Option key={value} value={value}>
                    {label}
                  </Select.Option>
                ))}
              </Select>
            </Row>
          </form>
          <Table>
            <Table.Caption className="ams-mb-m">
              <Heading level={2}>Gegevens per adres</Heading>
            </Table.Caption>
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

export const WithPagination: StoryObj = {
  render: () => {
    const pageSize = 5
    const subset = bagAddresses.slice(0, 50)
    const totalPages = Math.ceil(subset.length / pageSize)
    const [page, setPage] = useState(() => Number(new URLSearchParams(window.location.search).get('pagina')) || 1)
    const range = `(${(page - 1) * pageSize + 1}–${Math.min(page * pageSize, subset.length)})`
    const paginatedAddresses = subset.slice((page - 1) * pageSize, page * pageSize)

    // Intercept pagination clicks so they don’t trigger a full page reload.
    // Storybook-specific: a real reload would navigate the iframe to its own URL
    // (`/iframe.html?…`), escaping the Storybook chrome around it.
    // We let the browser handle modifier-clicks (cmd/ctrl/shift/alt or middle-click)
    // so users can still open a page in a new tab.
    // Otherwise we update the URL via History API and sync the React state.
    const handlePaginationClick = (event: MouseEvent<HTMLAnchorElement>) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return
      event.preventDefault()
      const url = new URL(event.currentTarget.href, window.location.href)
      window.history.pushState({}, '', url)
      setPage(Number(url.searchParams.get('pagina')) || 1)
    }

    const PaginationLink = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => (
      <a {...props} onClick={handlePaginationClick} />
    )

    return (
      <Grid paddingBottom="x-large" paddingTop="large">
        <Grid.Cell className="ams-grid__cell--transparent" span="all">
          <Heading level={1}>Vergunninghouders 2026/2027</Heading>
        </Grid.Cell>
        <Grid.Cell span="all">
          <Table className="ams-mb-l">
            <Table.Caption className="ams-mb-m">
              <Heading level={2}>Gegevens per adres {range}</Heading>
            </Table.Caption>
            <Table.Header>
              <AddressTableHeaderRow />
            </Table.Header>
            <AddressTableBody addresses={paginatedAddresses} />
          </Table>
          <Row align="center">
            <Pagination
              linkComponent={PaginationLink}
              linkTemplate={paginationLinkTemplate}
              page={page}
              totalPages={totalPages}
            />
          </Row>
        </Grid.Cell>
      </Grid>
    )
  },
}
