/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { StoryObj } from '@storybook/react-vite'
import type { AnchorHTMLAttributes, MouseEvent } from 'react'

import { Grid, Heading, Pagination, Row, Table } from '@amsterdam/design-system-react'
import { useEffect, useState } from 'react'

import { AddressTableBody, AddressTableHeaderRow, bagAddresses } from '../common'

const paginationOptions = {
  addresses: bagAddresses.slice(0, 50),
  pageSize: 5,
}

const totalPaginationPages = Math.ceil(paginationOptions.addresses.length / paginationOptions.pageSize)

const clampPage = (value: string | null) => {
  const parsed = Math.trunc(Number(value))
  if (!Number.isFinite(parsed) || parsed < 1) return 1
  return Math.min(parsed, totalPaginationPages)
}

const getPageFromUrl = () => clampPage(new URLSearchParams(window.location.search).get('pagina'))

const paginationLinkTemplate = (page: number) => {
  const url = new URL(window.location.href)
  url.searchParams.set('pagina', String(page))
  return `?${url.searchParams.toString()}`
}

export const WithPagination: StoryObj = {
  render: () => {
    const { addresses, pageSize } = paginationOptions
    const [page, setPage] = useState(getPageFromUrl)

    const firstRow = (page - 1) * pageSize + 1
    const lastRow = Math.min(page * pageSize, addresses.length)
    const paginatedAddresses = addresses.slice(firstRow - 1, lastRow)

    // Keep the React state in sync with the URL when the user navigates via
    // the browser's back/forward buttons.
    useEffect(() => {
      const handlePopState = () => setPage(getPageFromUrl())
      window.addEventListener('popstate', handlePopState)
      return () => window.removeEventListener('popstate', handlePopState)
    }, [])

    // Intercept pagination clicks so they don't trigger a full page reload.
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
      setPage(getPageFromUrl())
    }

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

    return (
      <Grid paddingBottom="x-large" paddingTop="large">
        <Grid.Cell className="ams-grid__cell--transparent" span="all">
          <Heading level={1}>Vergunninghouders 2026/2027</Heading>
        </Grid.Cell>
        <Grid.Cell span="all">
          <Table className="ams-mb-l">
            <Table.Caption className="ams-mb-m">
              <Heading level={2}>Gegevens per adres</Heading>
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
              totalPages={totalPaginationPages}
            />
          </Row>
        </Grid.Cell>
      </Grid>
    )
  },
}
