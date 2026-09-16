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
        <KnownDateInput.Field>
          <label htmlFor="day">Dag</label>
          <input className="ams-text-input" id="day" />
        </KnownDateInput.Field>
      </KnownDateInput>,
    )

    expect(screen.getByLabelText('Dag')).toBeInTheDocument()
  })
})
