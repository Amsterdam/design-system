/**
* @license EUPL-1.2+
* Copyright Gemeente Amsterdam
*/

import { render } from '@testing-library/react'
import { createRef } from 'react'
import { AppNavigation } from './AppNavigation'
import '@testing-library/jest-dom'

describe('AppNavigation', () => {
  it('renders', () => {
    const { container } = render(<AppNavigation />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<AppNavigation />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-app-navigation')
  })

  it('renders an extra class name', () => {
    const { container } = render(<AppNavigation className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-app-navigation extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<AppNavigation ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
