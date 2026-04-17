/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { TabNavigationList } from './TabNavigationList'

describe('TabNavigationList', () => {
  it('renders', () => {
    render(<TabNavigationList />)

    const component = screen.getByRole('list')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<TabNavigationList />)

    const component = screen.getByRole('list')

    expect(component).toHaveClass('ams-tab-navigation__list')
  })

  it('renders an extra class name', () => {
    render(<TabNavigationList className="extra" />)

    const component = screen.getByRole('list')

    expect(component).toHaveClass('ams-tab-navigation__list extra')
  })

  it('does not have a tablist role', () => {
    render(<TabNavigationList />)

    expect(screen.queryByRole('tablist')).not.toBeInTheDocument()
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLUListElement>()

    render(<TabNavigationList ref={ref} />)

    const component = screen.getByRole('list')

    expect(ref.current).toBe(component)
  })

  it('passes additional props', () => {
    render(<TabNavigationList aria-hidden={false} data-test="data-test" id="id" />)

    const component = screen.getByRole('list')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})
