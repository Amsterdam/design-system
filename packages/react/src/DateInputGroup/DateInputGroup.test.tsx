/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { DateInputGroup } from './DateInputGroup'

describe('DateInputGroup', () => {
  it('renders', () => {
    const { container } = render(<DateInputGroup />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<DateInputGroup />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-date-input-group')
  })

  it('renders an extra class name', () => {
    const { container } = render(<DateInputGroup className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-date-input-group extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<DateInputGroup ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('renders its fields', () => {
    render(
      <DateInputGroup>
        <DateInputGroup.Field>
          <label htmlFor="day">Dag</label>
          <input className="ams-text-input" id="day" />
        </DateInputGroup.Field>
      </DateInputGroup>,
    )

    expect(screen.getByLabelText('Dag')).toBeInTheDocument()
  })
})
