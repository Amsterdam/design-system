/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'

import { Menu } from './Menu'
import '@testing-library/jest-dom'

describe('Menu', () => {
  it('renders', () => {
    render(<Menu />)
    const component = screen.getByRole('navigation')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<Menu />)

    const component = screen.getByRole('navigation')

    expect(component).toHaveClass('ams-menu')
  })

  it('renders an extra class name', () => {
    render(<Menu className="extra" />)

    const component = screen.getByRole('navigation')

    expect(component).toHaveClass('ams-menu extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    render(<Menu ref={ref} />)

    const component = screen.getByRole('navigation')

    expect(ref.current).toBe(component)
  })

  it('renders a custom accessible name for the logo', () => {
    render(<Menu accessibleName="Custom accessible name" />)

    const component = screen.getByRole('heading', { name: 'Custom accessible name' })

    expect(component).toBeInTheDocument()
  })
})
