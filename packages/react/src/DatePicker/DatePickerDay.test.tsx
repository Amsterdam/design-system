/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { DatePickerDay } from './DatePickerDay'

const saturday14March2026 = new Date(2026, 2, 14)

const defaultProps = {
  date: saturday14March2026,
  isCurrent: false,
  isDisabled: false,
  isFocused: false,
  isSelected: false,
  locale: 'nl-NL',
  onSelect: () => {},
}

describe('DatePickerDay', () => {
  it('shows the day number and an accessible full date', () => {
    render(<DatePickerDay {...defaultProps} />)

    expect(screen.getByText('14')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'zaterdag 14 maart 2026' })).toBeInTheDocument()
  })

  it('marks today with aria-current', () => {
    render(<DatePickerDay {...defaultProps} isCurrent />)

    expect(screen.getByRole('button')).toHaveAttribute('aria-current', 'date')
  })

  it('holds the roving tab stop only when focused', () => {
    const { rerender } = render(<DatePickerDay {...defaultProps} isFocused />)

    expect(screen.getByRole('button')).toHaveAttribute('tabindex', '0')

    rerender(<DatePickerDay {...defaultProps} isFocused={false} />)

    expect(screen.getByRole('button')).toHaveAttribute('tabindex', '-1')
  })

  it('reflects the selection on the grid cell', () => {
    render(<DatePickerDay {...defaultProps} isSelected />)

    expect(screen.getByRole('gridcell')).toHaveAttribute('aria-selected', 'true')
  })

  it('marks an unavailable date as disabled', () => {
    render(<DatePickerDay {...defaultProps} isDisabled />)

    expect(screen.getByRole('button')).toHaveAttribute('aria-disabled', 'true')
  })

  it('selects the date when clicked', () => {
    const onSelect = vi.fn()

    render(<DatePickerDay {...defaultProps} onSelect={onSelect} />)

    fireEvent.click(screen.getByRole('button', { name: 'zaterdag 14 maart 2026' }))

    expect(onSelect).toHaveBeenCalledWith(saturday14March2026)
  })
})
