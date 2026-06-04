/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen, within } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { DatePickerGrid } from './DatePickerGrid'

const march2026 = new Date(2026, 2, 1)

const renderGrid = () =>
  render(
    <DatePickerGrid
      captionId="caption"
      focusedDate={march2026}
      focusedDayRef={createRef<HTMLButtonElement>()}
      isDayDisabled={() => false}
      isDaySelected={() => false}
      locale="nl-NL"
      month={march2026}
      onKeyDown={() => {}}
      onSelectDate={() => {}}
    />,
  )

describe('DatePickerGrid', () => {
  it('labels the grid with the caption id', () => {
    renderGrid()

    expect(screen.getByRole('grid')).toHaveAttribute('aria-labelledby', 'caption')
  })

  it('renders seven weekday column headers starting on Monday', () => {
    renderGrid()

    const headers = screen.getAllByRole('columnheader')

    expect(headers).toHaveLength(7)
    expect(headers[0]).toHaveTextContent('ma')
    expect(headers[6]).toHaveTextContent('zo')
  })

  it('renders full weeks of seven cells each', () => {
    renderGrid()

    // The first row holds the weekday headers; the remaining rows are weeks of dates.
    const weekRows = screen.getAllByRole('row').slice(1)

    weekRows.forEach((row) => {
      expect(within(row).getAllByRole('gridcell')).toHaveLength(7)
    })
  })

  it('leaves the days before the first of the month empty', () => {
    renderGrid()

    // March 2026 starts on a Sunday, so its first week contains a single day button.
    const firstWeek = screen.getAllByRole('row')[1]

    expect(within(firstWeek).getAllByRole('button')).toHaveLength(1)
  })
})
