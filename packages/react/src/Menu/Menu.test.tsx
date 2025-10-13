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
    const list = screen.getByRole('list')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
    expect(component).toContainElement(list)
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

  it('renders the class name for the `inWideWindow` prop', () => {
    const { container } = render(<Menu inWideWindow />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-menu--in-wide-window')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    render(<Menu ref={ref} />)

    const component = screen.getByRole('navigation')

    expect(ref.current).toBe(component)
  })

  it('renders a custom accessible name', () => {
    const { container } = render(<Menu accessibleName="Custom accessible name" inWideWindow />)

    const component = container.querySelector(':only-child')
    const heading = screen.getByRole('heading', { name: 'Custom accessible name' })

    expect(component).toHaveAttribute('aria-labelledby')
    expect(component).toContainElement(heading)
  })

  it('doesn’t render a custom accessible name if not in a wide window', () => {
    const { container } = render(<Menu accessibleName="Custom accessible name" />)

    const component = container.querySelector(':only-child')
    const heading = screen.queryByRole('heading', { name: 'Custom accessible name' })

    expect(component).not.toHaveAttribute('aria-labelledby')
    expect(component).not.toContainElement(heading)
  })
})
