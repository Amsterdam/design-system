/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { fireEvent, render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import type { DateRange } from './DatePicker'

import { DatePicker } from './DatePicker'

const march2026 = new Date(2026, 2, 1)
const noop = () => {}

beforeEach(() => {
  vi.useFakeTimers({ toFake: ['Date'] })
  vi.setSystemTime(new Date(2026, 5, 4)) // 4 June 2026
})

afterEach(() => {
  vi.useRealTimers()
})

describe('DatePicker', () => {
  it('renders', () => {
    render(<DatePicker defaultMonth={march2026} onChange={noop} value={null} />)

    const grid = screen.getByRole('grid')

    expect(grid).toBeInTheDocument()
    expect(grid).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<DatePicker defaultMonth={march2026} onChange={noop} value={null} />)

    expect(container.querySelector(':only-child')).toHaveClass('ams-date-picker')
  })

  it('renders an extra class name', () => {
    const { container } = render(<DatePicker className="extra" defaultMonth={march2026} onChange={noop} value={null} />)

    expect(container.querySelector(':only-child')).toHaveClass('ams-date-picker extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<DatePicker defaultMonth={march2026} onChange={noop} ref={ref} value={null} />)

    expect(ref.current).toBe(container.querySelector(':only-child'))
  })

  it('passes additional props to the root element', () => {
    const { container } = render(
      <DatePicker data-test="data-test" defaultMonth={march2026} id="id" onChange={noop} value={null} />,
    )

    const root = container.querySelector(':only-child')

    expect(root).toHaveAttribute('id', 'id')
    expect(root).toHaveAttribute('data-test', 'data-test')
  })

  it('gives the grid an accessible name from the month caption', () => {
    render(<DatePicker defaultMonth={march2026} onChange={noop} value={null} />)

    expect(screen.getByRole('grid', { name: 'maart 2026' })).toBeInTheDocument()
  })

  it('shows the default month', () => {
    render(<DatePicker defaultMonth={march2026} onChange={noop} value={null} />)

    expect(screen.getByText('maart 2026')).toBeInTheDocument()
  })

  it('selects a single date on click', () => {
    const onChange = vi.fn()

    render(<DatePicker defaultMonth={march2026} onChange={onChange} value={null} />)

    fireEvent.click(screen.getByRole('button', { name: 'zaterdag 14 maart 2026' }))

    expect(onChange).toHaveBeenCalledWith(new Date(2026, 2, 14))
  })

  it('moves the roving tab stop to a clicked date', () => {
    render(<DatePicker defaultMonth={march2026} onChange={noop} value={null} />)

    const day = screen.getByRole('button', { name: 'zaterdag 14 maart 2026' })
    fireEvent.click(day)

    expect(day).toHaveFocus()
    expect(day).toHaveAttribute('tabindex', '0')

    fireEvent.keyDown(screen.getByRole('grid'), { key: 'ArrowRight' })
    expect(screen.getByRole('button', { name: 'zondag 15 maart 2026' })).toHaveFocus()
  })

  it('marks the selected date in the grid', () => {
    render(<DatePicker defaultMonth={march2026} onChange={noop} value={new Date(2026, 2, 14)} />)

    const selected = screen.getAllByRole('gridcell', { selected: true })

    expect(selected).toHaveLength(1)
    expect(selected[0]).toHaveTextContent('14')
  })

  it('builds a range from two picks', () => {
    const onChange = vi.fn()

    render(<DatePicker defaultMonth={march2026} mode="range" onChange={onChange} value={{ start: null, end: null }} />)

    fireEvent.click(screen.getByRole('button', { name: 'dinsdag 10 maart 2026' }))

    expect(onChange).toHaveBeenCalledWith({ start: new Date(2026, 2, 10), end: null })
  })

  it('restarts the range when picking before the current start', () => {
    const onChange = vi.fn()
    const value: DateRange = { start: new Date(2026, 2, 10), end: null }

    render(<DatePicker defaultMonth={march2026} mode="range" onChange={onChange} value={value} />)

    fireEvent.click(screen.getByRole('button', { name: 'donderdag 5 maart 2026' }))

    expect(onChange).toHaveBeenCalledWith({ start: new Date(2026, 2, 5), end: null })
  })

  it('marks every date within the selected range', () => {
    const value: DateRange = { start: new Date(2026, 2, 10), end: new Date(2026, 2, 12) }

    render(<DatePicker defaultMonth={march2026} mode="range" onChange={noop} value={value} />)

    expect(screen.getAllByRole('gridcell', { selected: true })).toHaveLength(3)
  })

  it('does not select a disabled date', () => {
    const onChange = vi.fn()

    render(
      <DatePicker
        defaultMonth={march2026}
        isDateDisabled={(date) => date.getDate() === 14}
        onChange={onChange}
        value={null}
      />,
    )

    const day = screen.getByRole('button', { name: 'zaterdag 14 maart 2026' })

    expect(day).toHaveAttribute('aria-disabled', 'true')

    fireEvent.click(day)

    expect(onChange).not.toHaveBeenCalled()
  })

  it('disables the navigation buttons at the minimum and maximum dates', () => {
    render(
      <DatePicker
        defaultMonth={march2026}
        maxDate={new Date(2026, 2, 31)}
        minDate={new Date(2026, 2, 1)}
        onChange={noop}
        value={null}
      />,
    )

    expect(screen.getByRole('button', { name: 'Vorige maand' })).toBeDisabled()
    expect(screen.getByRole('button', { name: 'Vorig jaar' })).toBeDisabled()
    expect(screen.getByRole('button', { name: 'Volgende maand' })).toBeDisabled()
    expect(screen.getByRole('button', { name: 'Volgend jaar' })).toBeDisabled()
  })

  it('moves focus with the arrow keys', () => {
    render(<DatePicker defaultMonth={march2026} onChange={noop} value={null} />)

    fireEvent.keyDown(screen.getByRole('grid'), { key: 'ArrowRight' })
    expect(screen.getByRole('button', { name: 'maandag 2 maart 2026' })).toHaveFocus()

    fireEvent.keyDown(screen.getByRole('grid'), { key: 'ArrowDown' })
    expect(screen.getByRole('button', { name: 'maandag 9 maart 2026' })).toHaveFocus()
  })

  it('changes the month and keeps focus when arrowing across a month boundary', () => {
    render(<DatePicker defaultMonth={march2026} onChange={noop} value={new Date(2026, 2, 31)} />)

    fireEvent.keyDown(screen.getByRole('grid'), { key: 'ArrowRight' })

    expect(screen.getByText('april 2026')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'woensdag 1 april 2026' })).toHaveFocus()
  })

  it('moves focus to the start and end of the week with Home and End', () => {
    render(<DatePicker defaultMonth={march2026} onChange={noop} value={new Date(2026, 2, 18)} />)

    fireEvent.keyDown(screen.getByRole('grid'), { key: 'Home' })
    expect(screen.getByRole('button', { name: 'maandag 16 maart 2026' })).toHaveFocus()

    fireEvent.keyDown(screen.getByRole('grid'), { key: 'End' })
    expect(screen.getByRole('button', { name: 'zondag 22 maart 2026' })).toHaveFocus()
  })

  it('moves by month and year with Page keys', () => {
    render(<DatePicker defaultMonth={march2026} onChange={noop} value={new Date(2026, 2, 15)} />)

    fireEvent.keyDown(screen.getByRole('grid'), { key: 'PageDown' })
    expect(screen.getByText('april 2026')).toBeInTheDocument()

    fireEvent.keyDown(screen.getByRole('grid'), { key: 'PageDown', shiftKey: true })
    expect(screen.getByText('april 2027')).toBeInTheDocument()
  })

  it('selects the focused date with Enter and Space', () => {
    const onChange = vi.fn()

    render(<DatePicker defaultMonth={march2026} onChange={onChange} value={null} />)

    fireEvent.keyDown(screen.getByRole('grid'), { key: 'Enter' })
    expect(onChange).toHaveBeenCalledWith(new Date(2026, 2, 1))

    fireEvent.keyDown(screen.getByRole('grid'), { key: ' ' })
    expect(onChange).toHaveBeenCalledTimes(2)
  })

  it('does not move focus past the minimum date', () => {
    render(
      <DatePicker
        defaultMonth={march2026}
        minDate={new Date(2026, 2, 1)}
        onChange={noop}
        value={new Date(2026, 2, 1)}
      />,
    )

    const day = screen.getByRole('button', { name: 'zondag 1 maart 2026' })
    day.focus()

    fireEvent.keyDown(day, { key: 'ArrowLeft' })

    expect(screen.getByText('maart 2026')).toBeInTheDocument()
    expect(day).toHaveFocus()
  })

  it('does not steal focus when it mounts', () => {
    render(<DatePicker defaultMonth={march2026} onChange={noop} value={null} />)

    expect(document.body).toHaveFocus()
  })

  it('starts with today focused and marked current when the current month is shown', () => {
    render(<DatePicker defaultMonth={new Date(2026, 5, 1)} onChange={noop} value={null} />)

    const today = screen.getByRole('button', { name: 'donderdag 4 juni 2026' })

    expect(today).toHaveAttribute('tabindex', '0')
    expect(today).toHaveAttribute('aria-current', 'date')
  })

  it('keeps a valid roving tab stop after navigating by month, clamping the day', () => {
    render(<DatePicker defaultMonth={march2026} onChange={noop} value={new Date(2026, 2, 31)} />)

    fireEvent.click(screen.getByRole('button', { name: 'Volgende maand' }))

    expect(screen.getByText('april 2026')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'donderdag 30 april 2026' })).toHaveAttribute('tabindex', '0')
    expect(document.body).toHaveFocus()
  })
})
