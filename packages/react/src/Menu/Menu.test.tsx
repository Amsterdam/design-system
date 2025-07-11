/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render } from '@testing-library/react'
import { createRef } from 'react'
import { Menu } from './Menu'
import '@testing-library/jest-dom'

describe('Menu', () => {
  it('renders', () => {
    const { container } = render(<Menu />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Menu />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-menu')
  })

  it('renders an extra class name', () => {
    const { container } = render(<Menu className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-menu extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<Menu ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
