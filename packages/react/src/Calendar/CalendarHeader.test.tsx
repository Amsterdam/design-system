/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { CalendarHeader } from './CalendarHeader'

const june2026 = new Date(2026, 5, 1)

const noop = () => {}

describe('CalendarHeader', () => {
  it('renders the month and year for the given locale', () => {
    render(
      <CalendarHeader
        goToNextMonth={noop}
        goToNextYear={noop}
        goToPreviousMonth={noop}
        goToPreviousYear={noop}
        locale="nl-NL"
        month={june2026}
      />,
    )

    expect(screen.getByText('juni 2026')).toBeInTheDocument()
  })

  it('calls the matching callback for each navigation button', () => {
    const goToNextMonth = vi.fn()
    const goToNextYear = vi.fn()
    const goToPreviousMonth = vi.fn()
    const goToPreviousYear = vi.fn()

    render(
      <CalendarHeader
        goToNextMonth={goToNextMonth}
        goToNextYear={goToNextYear}
        goToPreviousMonth={goToPreviousMonth}
        goToPreviousYear={goToPreviousYear}
        locale="nl-NL"
        month={june2026}
      />,
    )

    screen.getByRole('button', { name: 'Vorig jaar' }).click()
    screen.getByRole('button', { name: 'Vorige maand' }).click()
    screen.getByRole('button', { name: 'Volgende maand' }).click()
    screen.getByRole('button', { name: 'Volgend jaar' }).click()

    expect(goToPreviousYear).toHaveBeenCalledOnce()
    expect(goToPreviousMonth).toHaveBeenCalledOnce()
    expect(goToNextMonth).toHaveBeenCalledOnce()
    expect(goToNextYear).toHaveBeenCalledOnce()
  })

  it('uses custom navigation button labels', () => {
    render(
      <CalendarHeader
        goToNextMonth={noop}
        goToNextYear={noop}
        goToPreviousMonth={noop}
        goToPreviousYear={noop}
        locale="nl-NL"
        month={june2026}
        nextMonthButtonLabel="Next month"
        nextYearButtonLabel="Next year"
        previousMonthButtonLabel="Previous month"
        previousYearButtonLabel="Previous year"
      />,
    )

    expect(screen.getByRole('button', { name: 'Previous year' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Previous month' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next month' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next year' })).toBeInTheDocument()
  })
})
