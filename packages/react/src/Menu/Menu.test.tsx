/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it, vi } from 'vitest'

import { Menu } from './Menu'

describe('Menu', () => {
  it('renders', () => {
    const { container } = render(<Menu />)

    const component = container.querySelector(':only-child')
    const list = screen.getByRole('list')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
    expect(component).toContainElement(list)
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

  it('renders a `nav` element with the `inWideWindow` prop', () => {
    render(<Menu inWideWindow />)

    const component = screen.getByRole('navigation')

    expect(component).toBeInTheDocument()
  })

  it('renders the class name for the `inWideWindow` prop', () => {
    const { container } = render(<Menu inWideWindow />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-menu--in-wide-window')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<Menu ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('sets an accessible name on wide windows', () => {
    const mediaQueryList = {
      addEventListener: vi.fn(),
      matches: true,
      removeEventListener: vi.fn(),
    }

    const originalMatchMedia = window.matchMedia
    window.matchMedia = vi.fn().mockReturnValue(mediaQueryList as unknown as MediaQueryList)

    try {
      render(<Menu accessibleName="Custom accessible name" inWideWindow />)

      const component = screen.getByRole('navigation', { name: 'Custom accessible name' })

      expect(component).toBeInTheDocument()
    } finally {
      window.matchMedia = originalMatchMedia
    }
  })

  it('does not expose the accessible name as a heading on wide windows', () => {
    const mediaQueryList = {
      addEventListener: vi.fn(),
      matches: true,
      removeEventListener: vi.fn(),
    }

    const originalMatchMedia = window.matchMedia
    window.matchMedia = vi.fn().mockReturnValue(mediaQueryList as unknown as MediaQueryList)

    try {
      render(<Menu accessibleName="Custom accessible name" inWideWindow />)

      const heading = screen.queryByRole('heading', { level: 2, name: 'Custom accessible name' })

      expect(heading).not.toBeInTheDocument()
    } finally {
      window.matchMedia = originalMatchMedia
    }
  })

  it('doesn’t render a custom accessible name if not in a wide window', () => {
    render(<Menu accessibleName="Custom accessible name" />)

    const component = screen.queryByRole('navigation', { name: 'Custom accessible name' })

    expect(component).not.toBeInTheDocument()
  })
})
