/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { StoryObj } from '@storybook/react-vite'

import { Grid, Heading, Link, Paragraph, Row, Table } from '@amsterdam/design-system-react'
import { Fragment } from 'react/jsx-runtime'

import type { SortOrder } from '../common'

import { AddressTableBody, AddressTableHeaderRow, bagAddresses, sortAddresses } from '../common'

const params = new URLSearchParams(window.location.search)

const linkSortOptions: { label: string; value: SortOrder }[] = [
  { label: 'Straat A-Z', value: 'straat-asc' },
  { label: 'Postcode A-Z', value: 'postcode-asc' },
  { label: 'Bouwjaar nieuw-oud', value: 'bouwjaar-desc' },
]

const sortLinkHref = (value: SortOrder) => {
  const url = new URL(window.location.href)
  url.searchParams.set('sort', value)
  return `?${url.searchParams.toString()}`
}

export const SortingWithLinks: StoryObj = {
  render: () => {
    const sortOrder = (params.get('sort') ?? 'straat-asc') as SortOrder
    const addresses = sortAddresses(bagAddresses.slice(0, 30), sortOrder)

    return (
      <Grid paddingBottom="x-large" paddingTop="large">
        <Grid.Cell className="ams-grid__cell--transparent" span="all">
          <Heading level={1}>Vergunninghouders 2026/2027</Heading>
        </Grid.Cell>
        <Grid.Cell span="all">
          <Row align="end" className="ams-mb-m">
            <Paragraph size="large">
              Sorteren op:{' '}
              {linkSortOptions.map(({ label, value }, index) =>
                sortOrder === value ? (
                  <Fragment key={value}>
                    <strong aria-current="true">{label}</strong>
                    {index !== linkSortOptions.length - 1 && ', '}
                  </Fragment>
                ) : (
                  <Fragment key={value}>
                    <Link href={sortLinkHref(value)} key={value}>
                      {label}
                    </Link>
                    {index !== linkSortOptions.length - 1 && ', '}
                  </Fragment>
                ),
              )}
            </Paragraph>
          </Row>
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
