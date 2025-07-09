/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render } from '@testing-library/react'
import { createRef, ReactNode } from 'react'
import { AppNavigation } from './AppNavigation'
import '@testing-library/jest-dom'
import { AppContext } from '../App/AppContext'

describe('AppNavigation', () => {
  const mockContext = { appNavigationOpen: false, setAppNavigationOpen: jest.fn() }

  const renderWithContext = (ui: ReactNode) =>
    render(<AppContext.Provider value={mockContext}>{ui}</AppContext.Provider>)

  it('renders', () => {
    const { container } = renderWithContext(<AppNavigation />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = renderWithContext(<AppNavigation />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-app-navigation')
  })

  it('renders an extra class name', () => {
    const { container } = renderWithContext(<AppNavigation className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-app-navigation extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = renderWithContext(<AppNavigation ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
