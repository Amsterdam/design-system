/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render } from '@testing-library/react'
import { createRef } from 'react'
import { Page } from './Page'
import '@testing-library/jest-dom'

describe('Page', () => {
  it('renders', () => {
    const { container } = render(<Page />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Page />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-page')
  })

  it('renders an extra class name', () => {
    const { container } = render(<Page className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-page extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<Page ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
