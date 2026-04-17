/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { TabNavigation } from './TabNavigation'

describe('TabNavigation', () => {
  it('renders', () => {
    render(<TabNavigation />)

    const component = screen.getByRole('navigation')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<TabNavigation />)

    const component = screen.getByRole('navigation')

    expect(component).toHaveClass('ams-tab-navigation')
  })

  it('renders an extra class name', () => {
    render(<TabNavigation className="extra" />)

    const component = screen.getByRole('navigation')

    expect(component).toHaveClass('ams-tab-navigation extra')
  })

  it('renders the default accessible name for the navigation', () => {
    render(<TabNavigation />)

    const component = screen.getByRole('navigation', { name: 'Navigatie' })

    expect(component).toBeInTheDocument()
  })

  it('renders an accessible name for the navigation', () => {
    render(<TabNavigation accessibleName="Test accessible name" />)

    const component = screen.getByRole('navigation', { name: 'Test accessible name' })

    expect(component).toBeInTheDocument()
  })

  it('sets a custom id for the accessible name', () => {
    render(<TabNavigation accessibleNameId="test-accessible-name-id" />)

    const component = screen.getByRole('navigation', { name: 'Navigatie' })

    expect(component).toHaveAttribute('aria-labelledby', 'test-accessible-name-id')
  })

  it('renders children', () => {
    render(
      <TabNavigation>
        <TabNavigation.List>
          <TabNavigation.Link href="/one">One</TabNavigation.Link>
          <TabNavigation.Link href="/two">Two</TabNavigation.Link>
        </TabNavigation.List>
      </TabNavigation>,
    )

    const navigation = screen.getByRole('navigation')
    const links = screen.getAllByRole('link')

    expect(navigation).toBeInTheDocument()
    expect(links).toHaveLength(2)
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<TabNavigation ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('renders a vertical variant', () => {
    render(<TabNavigation orientation="vertical" />)

    const component = screen.getByRole('navigation')

    expect(component).toHaveClass('ams-tab-navigation--vertical')
  })

  it('does not render the vertical class for horizontal orientation', () => {
    render(<TabNavigation orientation="horizontal" />)

    const component = screen.getByRole('navigation')

    expect(component).not.toHaveClass('ams-tab-navigation--vertical')
  })

  it('passes additional props', () => {
    render(<TabNavigation aria-hidden={false} data-test="data-test" id="id" />)

    const component = screen.getByRole('navigation')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})
