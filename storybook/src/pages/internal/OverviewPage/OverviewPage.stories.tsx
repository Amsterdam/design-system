/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { ActionGroup, Button, Grid, Heading, Row } from '@amsterdam/design-system-react'
import { PlusIcon } from '@amsterdam/design-system-react-icons'
import { useMemo, useState } from 'react'

import type { LandmarkFilters } from './OverviewPageLandmarkFilterForm'

import { commonMeta, pageParameters } from '../common/commonMeta'
import overviewPageData from './overviewPageData.json'
import { initialFilters, OverviewPageLandmarkFilterForm } from './OverviewPageLandmarkFilterForm'
import { OverviewPageLandmarksMap } from './OverviewPageLandmarksMap'
import { OverviewPageLandmarksTable } from './OverviewPageLandmarksTable'

const { actionLabel, landmarks, pageTitle } = overviewPageData

type Landmark = (typeof landmarks)[number]

const meta = {
  ...commonMeta,
  title: 'Pages/Internal/Overview Page',
  parameters: pageParameters(
    'Suits websites whose content is organised into a handful of main sections ' +
      'that each have their own subsections.',
  ),
} satisfies Meta

export default meta

const filterLandmarks = (items: readonly Landmark[], filters: LandmarkFilters) => {
  const normalizedQuery = filters.query.trim().toLocaleLowerCase()

  return items.filter(({ district, name, type }) => {
    const matchesDistrict = filters.district === '' || district === filters.district
    const matchesQuery = normalizedQuery === '' || name.toLocaleLowerCase().includes(normalizedQuery)
    const matchesType = filters.type === '' || type === filters.type

    return matchesDistrict && matchesQuery && matchesType
  })
}

export const Default: StoryObj = {
  render: () => {
    const [filters, setFilters] = useState<LandmarkFilters>(initialFilters)
    const filteredLandmarks = useMemo(() => filterLandmarks(landmarks, filters), [filters])

    return (
      <Grid paddingVertical="x-large">
        <Grid.Cell appearance="transparent" span="all">
          <Row align="between" wrap>
            <Heading level={1}>{pageTitle}</Heading>
            <ActionGroup>
              <Button icon={PlusIcon}>{actionLabel}</Button>
            </ActionGroup>
          </Row>
        </Grid.Cell>

        <Grid.Cell appearance="flush" as="main" span={{ narrow: 4, medium: 6, wide: 9 }}>
          <OverviewPageLandmarksTable landmarks={filteredLandmarks} />
        </Grid.Cell>

        <Grid.Cell as="aside" span={{ narrow: 4, medium: 2, wide: 3 }}>
          <OverviewPageLandmarkFilterForm
            filters={filters}
            onFiltersChange={setFilters}
            resultsCount={filteredLandmarks.length}
          />
        </Grid.Cell>
      </Grid>
    )
  },
}

export const Map: StoryObj = {
  render: () => {
    const [filters, setFilters] = useState<LandmarkFilters>(initialFilters)
    const filteredLandmarks = useMemo(() => filterLandmarks(landmarks, filters), [filters])

    return (
      <Grid paddingVertical="x-large">
        <Grid.Cell appearance="transparent" span="all">
          <Row align="between" wrap>
            <Heading level={1}>{pageTitle}</Heading>
            <ActionGroup>
              <Button icon={PlusIcon}>{actionLabel}</Button>
            </ActionGroup>
          </Row>
        </Grid.Cell>

        <Grid.Cell appearance="flush" as="main" span={{ narrow: 4, medium: 6, wide: 9 }}>
          <OverviewPageLandmarksMap landmarks={filteredLandmarks} />
        </Grid.Cell>

        <Grid.Cell as="aside" span={{ narrow: 4, medium: 2, wide: 3 }}>
          <OverviewPageLandmarkFilterForm
            filters={filters}
            onFiltersChange={setFilters}
            resultsCount={filteredLandmarks.length}
          />
        </Grid.Cell>
      </Grid>
    )
  },
}
