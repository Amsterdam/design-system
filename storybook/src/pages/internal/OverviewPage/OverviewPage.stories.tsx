/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'
import type { FeatureCollection, Point } from 'geojson'
import type { ReactNode } from 'react'

import {
  ActionGroup,
  Button,
  Field,
  Grid,
  Heading,
  Label,
  Link,
  Paragraph,
  Row,
  Select,
  Table,
  TextInput,
} from '@amsterdam/design-system-react'
import { PlusIcon } from '@amsterdam/design-system-react-icons'
import { useId, useMemo, useState } from 'react'

import { commonMeta, pageParameters } from '../common/commonMeta'
import { LandmarkMap } from '../common/LandmarkMap/LandmarkMap'
import overviewPageData from './overviewPageData.json'

const { actionLabel, description, landmarks, pageTitle, sectionHeading } = overviewPageData

type Landmark = (typeof landmarks)[number]

type LandmarkFilters = {
  readonly district: string
  readonly query: string
  readonly type: string
}

type LandmarkMapProperties = {
  readonly district: string
  readonly kind: 'landmark'
  readonly name: string
  readonly sourceLabel: string
  readonly sourceUrl: string
  readonly type: string
  readonly year: string
}

const initialFilters: LandmarkFilters = {
  district: '',
  query: '',
  type: '',
}

const districtOptions = [...new Set(landmarks.map(({ district }) => district))].sort((left, right) =>
  left.localeCompare(right),
)
const typeOptions = [...new Set(landmarks.map(({ type }) => type))].sort((left, right) => left.localeCompare(right))

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

const createGeoJson = (items: readonly Landmark[]): FeatureCollection<Point, LandmarkMapProperties> => ({
  features: items.map(({ coordinates, district, name, sourceLabel, sourceUrl, type, year }) => ({
    geometry: {
      coordinates: [coordinates.longitude, coordinates.latitude],
      type: 'Point',
    },
    properties: {
      district,
      kind: 'landmark',
      name,
      sourceLabel,
      sourceUrl,
      type,
      year,
    },
    type: 'Feature',
  })),
  type: 'FeatureCollection',
})

type FilterFormProps = {
  readonly filters: LandmarkFilters
  readonly onFiltersChange: (filters: LandmarkFilters) => void
  readonly resultsCount: number
}

const LandmarkFilterForm = ({ filters, onFiltersChange, resultsCount }: FilterFormProps) => {
  const queryId = useId()
  const typeId = useId()
  const districtId = useId()

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
      }}
    >
      <Heading className="ams-mb-xs" level={2}>
        Filters
      </Heading>
      <Paragraph>{`${resultsCount} resultaten`}</Paragraph>
      <Field>
        <Label htmlFor={queryId}>Zoek op naam</Label>
        <TextInput
          id={queryId}
          onChange={(event) => {
            onFiltersChange({
              ...filters,
              query: event.target.value,
            })
          }}
          spellCheck={false}
          value={filters.query}
        />
      </Field>
      <Field>
        <Label htmlFor={typeId}>Type</Label>
        <Select
          id={typeId}
          onChange={(event) => {
            onFiltersChange({
              ...filters,
              type: event.target.value,
            })
          }}
          value={filters.type}
        >
          <Select.Option value="">Alle types</Select.Option>
          {typeOptions.map((type) => (
            <Select.Option key={type} value={type}>
              {type}
            </Select.Option>
          ))}
        </Select>
      </Field>
      <Field>
        <Label htmlFor={districtId}>Stadsdeel</Label>
        <Select
          id={districtId}
          onChange={(event) => {
            onFiltersChange({
              ...filters,
              district: event.target.value,
            })
          }}
          value={filters.district}
        >
          <Select.Option value="">Alle stadsdelen</Select.Option>
          {districtOptions.map((district) => (
            <Select.Option key={district} value={district}>
              {district}
            </Select.Option>
          ))}
        </Select>
      </Field>
      <ActionGroup>
        <Button
          onClick={() => {
            onFiltersChange(initialFilters)
          }}
          variant="secondary"
        >
          Wis filters
        </Button>
      </ActionGroup>
    </form>
  )
}

type LandmarksTableProps = {
  readonly landmarks: readonly Landmark[]
}

const LandmarksTable = ({ landmarks }: LandmarksTableProps) => (
  <div className="ams-prose">
    <Heading id="overzicht" level={2}>
      {sectionHeading}
    </Heading>
    <Paragraph>{description}</Paragraph>
    <Table>
      <Table.Caption className="ams-visually-hidden">{sectionHeading}</Table.Caption>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell scope="col">Landmark</Table.HeaderCell>
          <Table.HeaderCell scope="col">Type</Table.HeaderCell>
          <Table.HeaderCell scope="col">Stadsdeel</Table.HeaderCell>
          <Table.HeaderCell align="end" scope="col">
            Jaar
          </Table.HeaderCell>
          <Table.HeaderCell scope="col">Bron</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {landmarks.length ? (
          landmarks.map(({ district, name, sourceLabel, sourceUrl, type, year }) => (
            <Table.Row key={name}>
              <Table.HeaderCell scope="row">{name}</Table.HeaderCell>
              <Table.Cell>{type}</Table.Cell>
              <Table.Cell>{district}</Table.Cell>
              <Table.Cell align="end">{year}</Table.Cell>
              <Table.Cell>
                <Link href={sourceUrl} rel="external">
                  {sourceLabel}
                  <span className="ams-visually-hidden"> over {name}</span>
                </Link>
              </Table.Cell>
            </Table.Row>
          ))
        ) : (
          <Table.Row>
            <Table.Cell colSpan={5}>Geen resultaten</Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  </div>
)

type LandmarksMapSectionProps = {
  readonly landmarks: readonly Landmark[]
}

const LandmarksMapSection = ({ landmarks }: LandmarksMapSectionProps) => (
  <>
    <div className="ams-prose">
      <Heading id="kaart" level={2}>
        {sectionHeading}
      </Heading>
      <Paragraph>{description}</Paragraph>
      <Paragraph>De kaart toont alle landmarks die passen binnen het huidige filter.</Paragraph>
    </div>
    <LandmarkMap geoJson={createGeoJson(landmarks)} />
  </>
)

type OverviewPageLayoutProps = {
  readonly renderMain: (landmarks: readonly Landmark[]) => ReactNode
}

const OverviewPageLayout = ({ renderMain }: OverviewPageLayoutProps) => {
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

      <Grid.Cell as="main" span={{ narrow: 4, medium: 6, wide: 9 }}>
        {renderMain(filteredLandmarks)}
      </Grid.Cell>

      <Grid.Cell as="aside" span={{ narrow: 4, medium: 2, wide: 3 }}>
        <LandmarkFilterForm filters={filters} onFiltersChange={setFilters} resultsCount={filteredLandmarks.length} />
      </Grid.Cell>
    </Grid>
  )
}

export const Default: StoryObj = {
  render: () => <OverviewPageLayout renderMain={(landmarks) => <LandmarksTable landmarks={landmarks} />} />,
}

export const Map: StoryObj = {
  render: () => <OverviewPageLayout renderMain={(landmarks) => <LandmarksMapSection landmarks={landmarks} />} />,
}
