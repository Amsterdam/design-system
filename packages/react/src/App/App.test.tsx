/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render } from '@testing-library/react'
import { createRef } from 'react'
import { App } from './App'
import '@testing-library/jest-dom'

describe('App', () => {
  it('renders', () => {
    const { container } = render(<App />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<App />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-app')
  })

  it('renders an extra class name', () => {
    const { container } = render(<App className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-app extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<App ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
