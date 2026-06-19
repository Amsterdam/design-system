/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes } from 'react'

import { render, screen } from '@testing-library/react'
import { createRef, forwardRef } from 'react'
import { describe, expect, it } from 'vitest'

import { PageFooter } from './PageFooter'

describe('PageFooterMenuLink', () => {
  it('renders with href attribute', () => {
    render(<PageFooter.MenuLink href="#">Link</PageFooter.MenuLink>)

    const component = screen.getByRole('link')

    expect(component).toBeInTheDocument()
    expect(component).toHaveAttribute('href', '#')
  })

  it('renders a design system BEM class name', () => {
    render(<PageFooter.MenuLink href="#">Link</PageFooter.MenuLink>)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-page-footer__menu-link')
  })

  it('renders an extra class name', () => {
    render(
      <PageFooter.MenuLink className="extra" href="#">
        Link
      </PageFooter.MenuLink>,
    )

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-page-footer__menu-link extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLAnchorElement>()

    render(
      <PageFooter.MenuLink className="extra" href="#" ref={ref}>
        Link
      </PageFooter.MenuLink>,
    )

    const component = screen.getByRole('link')

    expect(ref.current).toBe(component)
  })

  it('passes additional props', () => {
    render(
      <PageFooter.MenuLink aria-hidden="false" data-test="data-test" href="#" id="id">
        Link
      </PageFooter.MenuLink>,
    )

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

    render(
      <PageFooter.MenuLink href="/test" linkComponent={CustomLink}>
        Link
      </PageFooter.MenuLink>,
    )

    const component = screen.getByRole('link')

    expect(component).toHaveAttribute('data-custom', 'true')
    expect(component).toHaveAttribute('href', '/test')
    expect(component).toHaveClass('ams-page-footer__menu-link')
  })

  it('forwards the ref to an intrinsic link component', () => {
    const ref = createRef<HTMLAnchorElement>()

    render(
      <PageFooter.MenuLink href="/test" linkComponent="a" ref={ref}>
        Link
      </PageFooter.MenuLink>,
    )

    expect(ref.current).toBe(screen.getByRole('link'))
  })

  it('does not forward the ref to a custom link component', () => {
    const ref = createRef<HTMLAnchorElement>()
    const CustomLink = forwardRef<HTMLAnchorElement, AnchorHTMLAttributes<HTMLAnchorElement>>(
      function CustomLink(props, customRef) {
        return <a {...props} ref={customRef} />
      },
    )

    render(
      <PageFooter.MenuLink href="/test" linkComponent={CustomLink} ref={ref}>
        Link
      </PageFooter.MenuLink>,
    )

    expect(ref.current).toBeNull()
  })
})
