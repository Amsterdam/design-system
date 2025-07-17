/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import type { SVGProps } from 'react'
import { StandaloneLink } from './StandaloneLink'
import '@testing-library/jest-dom'

const TestIcon = (props: SVGProps<SVGSVGElement>) => <svg {...props} className="test-class" />

describe('Standalone Link', () => {
  it('renders with href attribute', () => {
    render(<StandaloneLink href="#" />)

    const component = screen.getByRole('link')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
    expect(component).toHaveAttribute('href', '#')
  })

  it('renders a design system BEM class name', () => {
    render(<StandaloneLink href="#" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-standalone-link')
  })

  it('renders an extra class name', () => {
    render(<StandaloneLink className="extra" href="#" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-standalone-link extra')
  })

  it('renders a custom icon', () => {
    const { container } = render(<StandaloneLink icon={TestIcon} />)

    const icon = container.querySelector('svg')

    expect(icon).toHaveClass('test-class')
  })

  it('renders the class name for contrast color', () => {
    render(<StandaloneLink color="contrast" href="#" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-standalone-link ams-standalone-link--contrast')
  })

  it('renders the class name for inverse color', () => {
    render(<StandaloneLink color="inverse" href="#" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-standalone-link ams-standalone-link--inverse')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLAnchorElement>()

    render(<StandaloneLink href="#" ref={ref} />)

    const component = screen.getByRole('link')

    expect(ref.current).toBe(component)
  })
})
