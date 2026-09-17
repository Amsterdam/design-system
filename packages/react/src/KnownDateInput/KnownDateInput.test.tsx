/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { KnownDateInput } from './KnownDateInput'

describe('KnownDateInput', () => {
  it('renders', () => {
    const { container } = render(<KnownDateInput />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<KnownDateInput />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-known-date-input')
  })

  it('renders an extra class name', () => {
    const { container } = render(<KnownDateInput className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-known-date-input extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<KnownDateInput ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('renders its fields', () => {
    render(
      <KnownDateInput>
        <KnownDateInput.Day />
        <KnownDateInput.Month />
        <KnownDateInput.Year />
      </KnownDateInput>,
    )

    expect(screen.getByLabelText('Dag')).toBeInTheDocument()
    expect(screen.getByLabelText('Maand')).toBeInTheDocument()
    expect(screen.getByLabelText('Jaar')).toBeInTheDocument()
  })

  it('does not render the autocomplete value on its container', () => {
    const { container } = render(<KnownDateInput autoComplete="bday" />)

    const component = container.querySelector(':only-child')

    expect(component).not.toHaveAttribute('autocomplete')
  })
})
