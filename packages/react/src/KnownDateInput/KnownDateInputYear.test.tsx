/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { KnownDateInput } from './KnownDateInput'
import { KnownDateInputYear } from './KnownDateInputYear'

describe('KnownDateInput.Year', () => {
  it('renders a labelled input', () => {
    render(<KnownDateInputYear />)

    const component = screen.getByLabelText('Jaar')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders design system BEM class names', () => {
    render(<KnownDateInputYear />)

    expect(screen.getByRole('textbox')).toHaveClass('ams-known-date-input__input ams-known-date-input__input--year')
  })

  it('renders an extra class name on the input', () => {
    render(<KnownDateInputYear className="extra" />)

    expect(screen.getByRole('textbox')).toHaveClass('ams-known-date-input__input extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLInputElement>()

    render(<KnownDateInputYear ref={ref} />)

    expect(ref.current).toBe(screen.getByRole('textbox'))
  })

  it('renders a custom label', () => {
    render(<KnownDateInputYear label="Year" />)

    expect(screen.getByLabelText('Year')).toBeInTheDocument()
  })

  it('sizes the field for 4 digits', () => {
    render(<KnownDateInputYear />)

    expect(screen.getByRole('textbox')).toHaveAttribute('size', '4')
  })

  it('renders the autocomplete value for a date of birth', () => {
    render(
      <KnownDateInput autoComplete="birth-date">
        <KnownDateInputYear />
      </KnownDateInput>,
    )

    expect(screen.getByRole('textbox')).toHaveAttribute('autocomplete', 'bday-year')
  })

  it('renders the autocomplete value for a payment card', () => {
    render(
      <KnownDateInput autoComplete="credit-card-expiry-date">
        <KnownDateInputYear />
      </KnownDateInput>,
    )

    expect(screen.getByRole('textbox')).toHaveAttribute('autocomplete', 'cc-exp-year')
  })
})
