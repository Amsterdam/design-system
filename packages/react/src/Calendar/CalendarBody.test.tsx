/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes } from 'react'

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { CalendarBody } from './CalendarBody'

const may2026 = new Date(2026, 4, 1)
const june2026 = new Date(2026, 5, 1)

describe('CalendarBody', () => {
  it('renders a link for each day in the month', () => {
    render(<CalendarBody linkTemplate={(date) => `/day/${date.getDate()}`} locale="nl-NL" month={june2026} />)

    expect(screen.getAllByRole('link')).toHaveLength(30)
  })

  it('does not render days from the previous or next month', () => {
    // May 2026 starts on a Friday, so without this rule the trailing days of April would appear.
    render(<CalendarBody linkTemplate={(date) => `/day/${date.getDate()}`} locale="nl-NL" month={may2026} />)

    expect(screen.getAllByRole('link')).toHaveLength(31)
  })

  it('builds each link target with linkTemplate', () => {
    render(<CalendarBody linkTemplate={(date) => `/day/${date.getDate()}`} locale="nl-NL" month={june2026} />)

    expect(screen.getByRole('link', { name: 'maandag 15 juni 2026' })).toHaveAttribute('href', '/day/15')
  })

  it('gives each link an accessible name with the weekday and date', () => {
    render(<CalendarBody linkTemplate={(date) => `/day/${date.getDate()}`} locale="nl-NL" month={june2026} />)

    expect(screen.getByRole('link', { name: 'maandag 15 juni 2026' })).toBeInTheDocument()
  })

  it('renders a date as plain text when linkTemplate returns undefined', () => {
    render(<CalendarBody linkTemplate={() => undefined} locale="nl-NL" month={june2026} />)

    expect(screen.queryByRole('link')).not.toBeInTheDocument()
    expect(screen.getByText('15')).toBeInTheDocument()
  })

  it('renders plain text when no linkTemplate is given', () => {
    render(<CalendarBody locale="nl-NL" month={june2026} />)

    expect(screen.queryByRole('link')).not.toBeInTheDocument()
    expect(screen.getByText('15')).toBeInTheDocument()
  })

  it('renders dates with a custom link component', () => {
    const CustomLink = (linkProps: AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...linkProps} data-custom />

    render(
      <CalendarBody
        linkComponent={CustomLink}
        linkTemplate={(date) => `/day/${date.getDate()}`}
        locale="nl-NL"
        month={june2026}
      />,
    )

    expect(screen.getByRole('link', { name: 'maandag 15 juni 2026' })).toHaveAttribute('data-custom')
  })

  it('marks today as the current date', () => {
    const today = new Date()

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
})
