/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { DateInputGroupField } from './DateInputGroupField'

describe('DateInputGroup.Field', () => {
  it('renders', () => {
    const { container } = render(<DateInputGroupField />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<DateInputGroupField />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-date-input-group__field')
  })

  it('renders an extra class name', () => {
    const { container } = render(<DateInputGroupField className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-date-input-group__field extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<DateInputGroupField ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('renders no wide class name by default', () => {
    const { container } = render(<DateInputGroupField />)

    const component = container.querySelector(':only-child')

    expect(component).not.toHaveClass('ams-date-input-group__field--wide')
  })

  it('renders a wide class name', () => {
    const { container } = render(<DateInputGroupField wide />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-date-input-group__field ams-date-input-group__field--wide')
  })
})
