/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { CalendarBody } from './CalendarBody'

const may2026 = new Date(2026, 4, 1)
const june2026 = new Date(2026, 5, 1)

describe('CalendarBody', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders a link for each day in the month', () => {
    render(<CalendarBody linkTemplate={(date) => `/day/${date.getDate()}`} locale="nl-NL" month={june2026} />)

    expect(screen.getAllByRole('link')).toHaveLength(30)
  })

  it('does not render days from the previous or next month', () => {
    // May 2026 starts on a Friday, so without this rule the trailing days of April would appear.
    render(<CalendarBody linkTemplate={(date) => `/day/${date.getDate()}`} locale="nl-NL" month={may2026} />)

    expect(screen.getAllByRole('link')).toHaveLength(31)
  })

  it('marks today as the current date', () => {
    const today = new Date(2026, 5, 15)
    vi.useFakeTimers()
    vi.setSystemTime(today)

    render(<CalendarBody linkTemplate={(date) => `/day/${date.getDate()}`} locale="nl-NL" month={today} />)

    const currentDate = screen.getByRole('link', { current: 'date' })

    expect(currentDate).toHaveTextContent(String(today.getDate()))
    expect(currentDate).toHaveClass('ams-calendar__day-link--current')
  })

  it('does not mark any date as current in another month', () => {
    render(
      <CalendarBody linkTemplate={(date) => `/day/${date.getDate()}`} locale="nl-NL" month={new Date(2020, 0, 1)} />,
    )

    expect(screen.queryByRole('link', { current: 'date' })).not.toBeInTheDocument()
  })

  it('uses narrow weekday names for Arabic, whose ‘short’ names are the full ones', () => {
    const { container } = render(
      <CalendarBody linkTemplate={(date) => `/day/${date.getDate()}`} locale="ar-MA" month={june2026} />,
    )

    const monday = new Date(2026, 5, 1)
    const narrow = new Intl.DateTimeFormat('ar-MA', { weekday: 'narrow' }).format(monday)

    expect(narrow).not.toBe(new Intl.DateTimeFormat('ar-MA', { weekday: 'short' }).format(monday))
    expect(container.querySelector('.ams-calendar__weekday')).toHaveTextContent(narrow)
  })
})
