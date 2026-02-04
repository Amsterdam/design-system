/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes } from 'react'

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it, vi } from 'vitest'

import type { DateRange } from './Calendar'

import { Calendar } from './Calendar'

const june2026 = new Date(2026, 5, 1)

describe('Calendar', () => {
  it('renders', () => {
    const { container } = render(<Calendar linkTemplate={() => undefined} mode="link" />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Calendar linkTemplate={() => undefined} mode="link" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-calendar')
  })

  it('renders an extra class name', () => {
    const { container } = render(<Calendar className="extra" linkTemplate={() => undefined} mode="link" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-calendar extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<Calendar linkTemplate={() => undefined} mode="link" ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  describe('link mode', () => {
    it('renders dates as links built by linkTemplate', () => {
      render(<Calendar defaultMonth={june2026} linkTemplate={(date) => `/day/${date.getDate()}`} mode="link" />)

      expect(screen.getByRole('link', { name: '15' })).toHaveAttribute('href', '/day/15')
    })

    it('renders a date as plain text when linkTemplate returns undefined', () => {
      render(<Calendar defaultMonth={june2026} linkTemplate={() => undefined} mode="link" />)

      expect(screen.queryByRole('link')).not.toBeInTheDocument()
      expect(screen.getByRole('button', { name: '15' })).toBeDisabled()
    })

    it('renders dates with a custom link component', () => {
      const CustomLink = (linkProps: AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...linkProps} data-custom />

      render(
        <Calendar
          defaultMonth={june2026}
          linkComponent={CustomLink}
          linkTemplate={(date) => `/day/${date.getDate()}`}
          mode="link"
        />,
      )

      expect(screen.getByRole('link', { name: '15' })).toHaveAttribute('data-custom')
    })
  })

  describe('single mode', () => {
    it('calls onChange with the clicked date', () => {
      const onChange = vi.fn()

      render(<Calendar defaultMonth={june2026} mode="single" onChange={onChange} value={null} />)

      screen.getByRole('button', { name: '15' }).click()

      const value = onChange.mock.calls[0][0] as Date

      expect(value.getFullYear()).toBe(2026)
      expect(value.getMonth()).toBe(5)
      expect(value.getDate()).toBe(15)
    })

    it('marks the selected date as pressed', () => {
      render(<Calendar defaultMonth={june2026} mode="single" onChange={vi.fn()} value={new Date(2026, 5, 15)} />)

      expect(screen.getByRole('button', { name: '15', pressed: true })).toBeInTheDocument()
    })
  })

  describe('range mode', () => {
    it('starts a range on the first click', () => {
      const onChange = vi.fn()

      render(<Calendar defaultMonth={june2026} mode="range" onChange={onChange} value={{ start: null, end: null }} />)

      screen.getByRole('button', { name: '10' }).click()

      const value = onChange.mock.calls[0][0] as DateRange

      expect(value.start?.getDate()).toBe(10)
      expect(value.end).toBeNull()
    })

    it('completes the range on the second click', () => {
      const onChange = vi.fn()

      render(
        <Calendar
          defaultMonth={june2026}
          mode="range"
          onChange={onChange}
          value={{ start: new Date(2026, 5, 10), end: null }}
        />,
      )

      screen.getByRole('button', { name: '20' }).click()

      const value = onChange.mock.calls[0][0] as DateRange

      expect(value.start?.getDate()).toBe(10)
      expect(value.end?.getDate()).toBe(20)
    })
  })

  describe('disabling dates', () => {
    it('disables dates rejected by isDateDisabled', () => {
      render(
        <Calendar
          defaultMonth={june2026}
          isDateDisabled={(date) => date.getDate() === 15}
          mode="single"
          onChange={vi.fn()}
          value={null}
        />,
      )

      expect(screen.getByRole('button', { name: '15' })).toBeDisabled()
      expect(screen.getByRole('button', { name: '16' })).not.toBeDisabled()
    })

    it('disables dates before minDate', () => {
      render(
        <Calendar
          defaultMonth={june2026}
          minDate={new Date(2026, 5, 10)}
          mode="single"
          onChange={vi.fn()}
          value={null}
        />,
      )

      expect(screen.getByRole('button', { name: '8' })).toBeDisabled()
      expect(screen.getByRole('button', { name: '10' })).not.toBeDisabled()
    })

    it('disables previous-month navigation when the previous month is before minDate', () => {
      render(<Calendar defaultMonth={june2026} minDate={june2026} mode="single" onChange={vi.fn()} value={null} />)

      expect(screen.getByRole('button', { name: 'Vorige maand' })).toBeDisabled()
    })
  })
})
