/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { DatePickerHeader } from './DatePickerHeader'

const defaultProps = {
  captionId: 'caption',
  goToNextMonth: () => {},
  goToNextYear: () => {},
  goToPreviousMonth: () => {},
  goToPreviousYear: () => {},
  locale: 'nl-NL',
  month: new Date(2026, 2, 1),
}

describe('DatePickerHeader', () => {
  it('shows the month and year caption with the given id', () => {
    render(<DatePickerHeader {...defaultProps} />)

    expect(screen.getByText('maart 2026')).toHaveAttribute('id', 'caption')
  })

  it('renders the four navigation buttons with default labels', () => {
    render(<DatePickerHeader {...defaultProps} />)

    expect(screen.getByRole('button', { name: 'Vorig jaar' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Vorige maand' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Volgende maand' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Volgend jaar' })).toBeInTheDocument()
  })

  it('calls the navigation handlers when buttons are clicked', () => {
    const goToNextMonth = vi.fn()
    const goToPreviousYear = vi.fn()

    render(<DatePickerHeader {...defaultProps} goToNextMonth={goToNextMonth} goToPreviousYear={goToPreviousYear} />)

    fireEvent.click(screen.getByRole('button', { name: 'Volgende maand' }))
    fireEvent.click(screen.getByRole('button', { name: 'Vorig jaar' }))

    expect(goToNextMonth).toHaveBeenCalledTimes(1)
    expect(goToPreviousYear).toHaveBeenCalledTimes(1)
  })

  it('disables the navigation buttons that are out of bounds', () => {
    render(<DatePickerHeader {...defaultProps} disableNextMonth disablePreviousYear />)

    expect(screen.getByRole('button', { name: 'Volgende maand' })).toBeDisabled()
    expect(screen.getByRole('button', { name: 'Vorig jaar' })).toBeDisabled()
    expect(screen.getByRole('button', { name: 'Vorige maand' })).not.toBeDisabled()
  })

  it('uses a custom navigation button label', () => {
    render(<DatePickerHeader {...defaultProps} nextMonthButtonLabel="Volgende" />)

    expect(screen.getByRole('button', { name: 'Volgende' })).toBeInTheDocument()
  })
})
