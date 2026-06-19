/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes } from 'react'

import { render, screen } from '@testing-library/react'
import { createRef, forwardRef } from 'react'
import { describe, expect, it } from 'vitest'

import { Link } from './Link'

describe('Link', () => {
  it('renders with href attribute', () => {
    render(<Link href="#" />)

    const component = screen.getByRole('link')

    expect(component).toBeInTheDocument()
    expect(component).toHaveAttribute('href', '#')
  })

  it('renders a design system BEM class name', () => {
    render(<Link href="#" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-link')
  })

  it('renders an extra class name', () => {
    render(<Link className="extra" href="#" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-link extra')
  })

  it('renders the class name for contrast color', () => {
    render(<Link color="contrast" href="#" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-link ams-link--contrast')
  })

  it('renders the class name for inverse color', () => {
    render(<Link color="inverse" href="#" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-link ams-link--inverse')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLAnchorElement>()

    render(<Link href="#" ref={ref} />)

    const component = screen.getByRole('link')

    expect(ref.current).toBe(component)
  })

  it('passes additional props', () => {
    render(<Link aria-hidden={false} data-test="data-test" href="#" id="id" />)

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

    render(<Link href="/test" linkComponent={CustomLink} />)

    const component = screen.getByRole('link')

    expect(component).toHaveAttribute('data-custom', 'true')
    expect(component).toHaveAttribute('href', '/test')
    expect(component).toHaveClass('ams-link')
  })

  it('forwards the ref to an intrinsic link component', () => {
    const ref = createRef<HTMLAnchorElement>()

    render(<Link href="/test" linkComponent="a" ref={ref} />)

    expect(ref.current).toBe(screen.getByRole('link'))
  })

  it('does not forward the ref to a custom link component', () => {
    const ref = createRef<HTMLAnchorElement>()
    const CustomLink = forwardRef<HTMLAnchorElement, AnchorHTMLAttributes<HTMLAnchorElement>>(
      function CustomLink(props, customRef) {
        return <a {...props} ref={customRef} />
      },
    )

    render(<Link href="/test" linkComponent={CustomLink} ref={ref} />)

    expect(ref.current).toBeNull()
  })
})
