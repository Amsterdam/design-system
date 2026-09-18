/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import {
  ActionGroup,
  Button,
  Field,
  FieldSet,
  Label,
  Paragraph,
  Select,
  TextInput,
} from '@amsterdam/design-system-react'
import { useId } from 'react'

import overviewPageData from './overviewPageData.json'

const { landmarks } = overviewPageData

export type LandmarkFilters = {
  readonly district: string
  readonly query: string
  readonly type: string
}

export const initialFilters: LandmarkFilters = {
  district: '',
  query: '',
  type: '',
}

const districtOptions = [...new Set(landmarks.map(({ district }) => district))].sort((left, right) =>
  left.localeCompare(right),
)
const typeOptions = [...new Set(landmarks.map(({ type }) => type))].sort((left, right) => left.localeCompare(right))

type OverviewPageLandmarkFilterFormProps = {
  readonly filters: LandmarkFilters
  readonly onFiltersChange: (filters: LandmarkFilters) => void
  readonly resultsCount: number
}

export const OverviewPageLandmarkFilterForm = ({
  filters,
  onFiltersChange,
  resultsCount,
}: OverviewPageLandmarkFilterFormProps) => {
  const queryId = useId()
  const typeId = useId()
  const districtId = useId()

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
      }}
    >
      <FieldSet className="ams-mb-xl" legend="Filters">
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
      </FieldSet>
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
