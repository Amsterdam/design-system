/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render } from '@testing-library/react'
import { createRef } from 'react'
import { Field } from './Field'
import '@testing-library/jest-dom'

describe('Field', () => {
  it('renders', () => {
    const { container } = render(<Field />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Field />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-field')
  })

  it('renders an extra class name', () => {
    const { container } = render(<Field className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-field extra')
  })

  it('renders with the error class', () => {
    const { container } = render(<Field invalid />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-field--invalid')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<Field ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
