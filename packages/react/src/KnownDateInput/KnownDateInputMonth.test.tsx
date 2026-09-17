/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { KnownDateInput } from './KnownDateInput'
import { KnownDateInputMonth } from './KnownDateInputMonth'

describe('KnownDateInput.Month', () => {
  it('renders a labelled input', () => {
    render(<KnownDateInputMonth />)

    const component = screen.getByLabelText('Maand')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders design system BEM class names', () => {
    render(<KnownDateInputMonth />)

    expect(screen.getByRole('textbox')).not.toHaveClass('ams-known-date-input__input--year')
  })

  it('renders an extra class name on the input', () => {
    render(<KnownDateInputMonth className="extra" />)

    expect(screen.getByRole('textbox')).toHaveClass('ams-known-date-input__input extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLInputElement>()

    render(<KnownDateInputMonth ref={ref} />)

    expect(ref.current).toBe(screen.getByRole('textbox'))
  })

  it('renders a custom label', () => {
    render(<KnownDateInputMonth label="Month" />)

    expect(screen.getByLabelText('Month')).toBeInTheDocument()
  })

  it('sizes the field for 2 digits', () => {
    render(<KnownDateInputMonth />)

    expect(screen.getByRole('textbox')).toHaveAttribute('size', '2')
  })

  it('renders the autocomplete value for a date of birth', () => {
    render(
      <KnownDateInput autoComplete="birth-date">
        <KnownDateInputMonth />
      </KnownDateInput>,
    )

    expect(screen.getByRole('textbox')).toHaveAttribute('autocomplete', 'bday-month')
  })

  it('renders the autocomplete value for a payment card', () => {
    render(
      <KnownDateInput autoComplete="credit-card-expiry-date">
        <KnownDateInputMonth />
      </KnownDateInput>,
    )

    expect(screen.getByRole('textbox')).toHaveAttribute('autocomplete', 'cc-exp-month')
  })
})
