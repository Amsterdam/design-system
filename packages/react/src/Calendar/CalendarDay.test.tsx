/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes } from 'react'

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { CalendarDay } from './CalendarDay'

const monday15June2026 = new Date(2026, 5, 15)

describe('CalendarDay', () => {
  it('builds the link target with linkTemplate', () => {
    render(
      <CalendarDay
        date={monday15June2026}
        isCurrent={false}
        linkTemplate={(date) => `/day/${date.getDate()}`}
        locale="nl-NL"
      />,
    )

    expect(screen.getByRole('link', { name: 'maandag 15 juni 2026' })).toHaveAttribute('href', '/day/15')
  })

  it('gives the link an accessible name with the weekday and date', () => {
    render(<CalendarDay date={monday15June2026} isCurrent={false} linkTemplate={() => '/day'} locale="nl-NL" />)

    expect(screen.getByRole('link', { name: 'maandag 15 juni 2026' })).toBeInTheDocument()
  })

  it('renders plain text when linkTemplate returns undefined', () => {
    render(<CalendarDay date={monday15June2026} isCurrent={false} linkTemplate={() => undefined} locale="nl-NL" />)

    expect(screen.queryByRole('link')).not.toBeInTheDocument()
    expect(screen.getByText('15')).toBeInTheDocument()
  })

  it('renders plain text when no linkTemplate is given', () => {
    render(<CalendarDay date={monday15June2026} isCurrent={false} locale="nl-NL" />)

    expect(screen.queryByRole('link')).not.toBeInTheDocument()
    expect(screen.getByText('15')).toBeInTheDocument()
  })

  it('gives a plain-text date the same accessible weekday and date as a link', () => {
    render(<CalendarDay date={monday15June2026} isCurrent={false} locale="nl-NL" />)

    expect(screen.getByText('maandag 15 juni 2026')).toBeInTheDocument()
  })

  it('renders with a custom link component', () => {
    const CustomLink = (linkProps: AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...linkProps} data-custom />

    render(
      <CalendarDay
        date={monday15June2026}
        isCurrent={false}
        linkComponent={CustomLink}
        linkTemplate={() => '/day'}
        locale="nl-NL"
      />,
    )

    expect(screen.getByRole('link', { name: 'maandag 15 juni 2026' })).toHaveAttribute('data-custom')
  })

  it('localises the visible day number so it matches the announced date', () => {
    render(<CalendarDay date={monday15June2026} isCurrent={false} locale="ar-EG" />)

    // ar-EG uses Arabic-Indic digits, so the visible number and the accessible label agree.
    expect(screen.getByText('١٥')).toBeInTheDocument()
    expect(screen.getByText('الاثنين، ١٥ يونيو ٢٠٢٦')).toBeInTheDocument()
  })

  it('marks the date as current when isCurrent is true', () => {
    render(<CalendarDay date={monday15June2026} isCurrent linkTemplate={() => '/day'} locale="nl-NL" />)

    expect(screen.getByRole('link', { current: 'date' })).toHaveClass('ams-calendar__day-link--current')
  })

  it('marks a plain-text date as current when isCurrent is true', () => {
    const { container } = render(<CalendarDay date={monday15June2026} isCurrent locale="nl-NL" />)

    const day = container.querySelector(':only-child')

    expect(day).toHaveAttribute('aria-current', 'date')
    expect(day).toHaveClass('ams-calendar__day--current')
  })
})
