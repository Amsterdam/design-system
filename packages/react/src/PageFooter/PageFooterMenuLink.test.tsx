/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
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
    render(<PageFooter.MenuLink aria-hidden="false" data-test="data-test" id="id" />)

    const component = screen.getByRole('link')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})
