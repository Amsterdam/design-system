/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { KnownDateInput } from './KnownDateInput'
import { KnownDateInputDay } from './KnownDateInputDay'

describe('KnownDateInput.Day', () => {
  it('renders a labelled input', () => {
    render(<KnownDateInputDay />)

    const component = screen.getByLabelText('Dag')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders design system BEM class names', () => {
    const { container } = render(<KnownDateInputDay />)

    expect(container.firstChild).toHaveClass('ams-known-date-input__field')
    expect(screen.getByRole('textbox')).toHaveClass('ams-text-input ams-known-date-input__input')
    expect(screen.getByRole('textbox')).not.toHaveClass('ams-known-date-input__input--year')
  })

  it('renders an extra class name on the input', () => {
    render(<KnownDateInputDay className="extra" />)

    expect(screen.getByRole('textbox')).toHaveClass('ams-known-date-input__input extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLInputElement>()

    render(<KnownDateInputDay ref={ref} />)

    expect(ref.current).toBe(screen.getByRole('textbox'))
  })

  it('renders a custom label', () => {
    render(<KnownDateInputDay label="Day" />)

    expect(screen.getByLabelText('Day')).toBeInTheDocument()
  })

  it('uses a provided id', () => {
    render(<KnownDateInputDay id="birth-day" />)

    expect(screen.getByLabelText('Dag')).toHaveAttribute('id', 'birth-day')
  })

  it('asks for numbers in a narrow field', () => {
    render(<KnownDateInputDay />)

    expect(screen.getByRole('textbox')).toHaveAttribute('inputmode', 'numeric')
    expect(screen.getByRole('textbox')).toHaveAttribute('size', '2')
  })

  it('passes other props to the input', () => {
    render(<KnownDateInputDay invalid name="dag" />)

    expect(screen.getByRole('textbox')).toHaveAttribute('name', 'dag')
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
  })

  it('renders no autocomplete value outside a Known Date Input', () => {
    render(<KnownDateInputDay />)

    expect(screen.getByRole('textbox')).not.toHaveAttribute('autocomplete')
  })

  it('renders the autocomplete value for a date of birth', () => {
    render(
      <KnownDateInput autoComplete="birth-date">
        <KnownDateInputDay />
      </KnownDateInput>,
    )

    expect(screen.getByRole('textbox')).toHaveAttribute('autocomplete', 'bday-day')
  })
})
