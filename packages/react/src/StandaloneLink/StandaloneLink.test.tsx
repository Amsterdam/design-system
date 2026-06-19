/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes, SVGProps } from 'react'

import { render, screen } from '@testing-library/react'
import { createRef, forwardRef } from 'react'
import { describe, expect, it } from 'vitest'

import { StandaloneLink } from './StandaloneLink'

const TestIcon = (props: SVGProps<SVGSVGElement>) => <svg {...props} className="test-class" />

describe('StandaloneLink', () => {
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

  it('passes additional props', () => {
    render(<StandaloneLink aria-hidden="false" data-test="data-test" href="#" id="id" />)

    const component = screen.getByRole('link')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })

  it('renders a custom link component', () => {
    const CustomLink = ({ children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => (
      <a {...props} data-custom="true">
        {children}
      </a>
    )

    render(<StandaloneLink href="/test" linkComponent={CustomLink} />)

    const component = screen.getByRole('link')

    expect(component).toHaveAttribute('data-custom', 'true')
    expect(component).toHaveAttribute('href', '/test')
    expect(component).toHaveClass('ams-standalone-link')
  })

  it('forwards the ref to an intrinsic link component', () => {
    const ref = createRef<HTMLAnchorElement>()

    render(<StandaloneLink href="/test" linkComponent="a" ref={ref} />)

    expect(ref.current).toBe(screen.getByRole('link'))
  })

  it('does not forward the ref to a custom link component', () => {
    const ref = createRef<HTMLAnchorElement>()
    const CustomLink = forwardRef<HTMLAnchorElement, AnchorHTMLAttributes<HTMLAnchorElement>>(
      function CustomLink(props, customRef) {
        return <a {...props} ref={customRef} />
      },
    )

    render(<StandaloneLink href="/test" linkComponent={CustomLink} ref={ref} />)

    expect(ref.current).toBeNull()
  })
})
