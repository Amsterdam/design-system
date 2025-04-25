/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { PageFooter } from './PageFooter'
import '@testing-library/jest-dom'

describe('Page Footer', () => {
  it('renders an HTML footer element', () => {
    render(<PageFooter />)

    const component = screen.getByRole('contentinfo')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<PageFooter />)

    const component = screen.getByRole('contentinfo')

    expect(component).toHaveClass('ams-page-footer')
  })

  it('renders an extra class name', () => {
    render(<PageFooter className="extra" />)

    const component = screen.getByRole('contentinfo')

    expect(component).toHaveClass('ams-page-footer extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    render(<PageFooter ref={ref} />)

    const component = screen.getByRole('contentinfo')

    expect(ref.current).toBe(component)
  })
})
