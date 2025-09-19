/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'

import { CallToActionLink } from './CallToActionLink'
import '@testing-library/jest-dom'

describe('Call to Action Link', () => {
  it('renders with href attribute', () => {
    render(<CallToActionLink href="#" />)

    const component = screen.getByRole('link')

    expect(component).toBeInTheDocument()
    expect(component).toHaveAttribute('href', '#')
  })

  it('renders a design system BEM class name', () => {
    render(<CallToActionLink href="#" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-call-to-action-link')
  })

  it('renders an extra class name', () => {
    render(<CallToActionLink className="extra" href="#" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-call-to-action-link extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLAnchorElement>()

    render(<CallToActionLink href="#" ref={ref} />)

    const component = screen.getByRole('link')

    expect(ref.current).toBe(component)
  })
})
