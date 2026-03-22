/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render } from '@testing-library/react'
import { createRef } from 'react'

import { Calendar } from './Calendar'
import '@testing-library/jest-dom'

describe('Calendar', () => {
  it('renders', () => {
    const { container } = render(<Calendar />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Calendar />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-calendar')
  })

  it('renders an extra class name', () => {
    const { container } = render(<Calendar className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-calendar extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<Calendar ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
