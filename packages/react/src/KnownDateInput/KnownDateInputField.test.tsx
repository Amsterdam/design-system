/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { KnownDateInputField } from './KnownDateInputField'

describe('KnownDateInput.Field', () => {
  it('renders', () => {
    const { container } = render(<KnownDateInputField />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<KnownDateInputField />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-known-date-input__field')
  })

  it('renders an extra class name', () => {
    const { container } = render(<KnownDateInputField className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-known-date-input__field extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<KnownDateInputField ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('renders no wide class name by default', () => {
    const { container } = render(<KnownDateInputField />)

    const component = container.querySelector(':only-child')

    expect(component).not.toHaveClass('ams-known-date-input__field--wide')
  })

  it('renders a wide class name', () => {
    const { container } = render(<KnownDateInputField wide />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-known-date-input__field ams-known-date-input__field--wide')
  })
})
