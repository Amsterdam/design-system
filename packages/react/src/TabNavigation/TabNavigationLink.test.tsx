/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes } from 'react'

import { render, screen } from '@testing-library/react'
import { createRef, forwardRef } from 'react'
import { describe, expect, it } from 'vitest'

import { TabNavigationLink } from './TabNavigationLink'

const TestIcon = () => <svg data-testid="test-icon" />

describe('TabNavigationLink', () => {
  it('renders', () => {
    render(<TabNavigationLink href="/" />)

    const component = screen.getByRole('listitem')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<TabNavigationLink href="/" />)

    const item = screen.getByRole('listitem')

    expect(item).toHaveClass('ams-tab-navigation__item')

    const link = screen.getByRole('link')

    expect(link).toHaveClass('ams-tab-navigation__link')
  })

  it('renders an extra class name', () => {
    render(<TabNavigationLink className="extra" href="/" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-tab-navigation__link extra')
  })

  it('renders the href attribute', () => {
    render(<TabNavigationLink href="/test" />)

    const component = screen.getByRole('link')

    expect(component).toHaveAttribute('href', '/test')
  })

  it('supports aria-current attribute', () => {
    render(<TabNavigationLink aria-current="page" href="/" />)

    const component = screen.getByRole('link')

    expect(component).toHaveAttribute('aria-current', 'page')
  })

  it('renders a custom link component', () => {
    const CustomLink = ({ children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => (
      <a {...props} data-custom="true">
        {children}
      </a>
    )

    render(<TabNavigationLink href="/test" linkComponent={CustomLink} />)

    const component = screen.getByRole('link')

    expect(component).toHaveAttribute('data-custom', 'true')
    expect(component).toHaveAttribute('href', '/test')
  })

  it('renders an icon', () => {
    render(<TabNavigationLink href="/" icon={TestIcon} />)

    const icon = screen.getByTestId('test-icon')

    expect(icon).toBeInTheDocument()
  })

  it('does not render an icon by default', () => {
    const { container } = render(<TabNavigationLink href="/" />)

    const icon = container.querySelector('.ams-icon')

    expect(icon).not.toBeInTheDocument()
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLAnchorElement>()

    render(<TabNavigationLink href="/" ref={ref} />)

    const component = screen.getByRole('link')

    expect(ref.current).toBe(component)
  })

  it('passes additional props', () => {
    render(<TabNavigationLink aria-hidden={false} data-test="data-test" href="/" id="id" />)

    const component = screen.getByRole('link')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })

  it('forwards the ref to an intrinsic link component', () => {
    const ref = createRef<HTMLAnchorElement>()

    render(<TabNavigationLink href="/test" linkComponent="a" ref={ref} />)

    expect(ref.current).toBe(screen.getByRole('link'))
  })

  it('does not forward the ref to a custom link component', () => {
    const ref = createRef<HTMLAnchorElement>()
    const CustomLink = forwardRef<HTMLAnchorElement, AnchorHTMLAttributes<HTMLAnchorElement>>(
      function CustomLink(props, customRef) {
        return <a {...props} ref={customRef} />
      },
    )

    render(<TabNavigationLink href="/test" linkComponent={CustomLink} ref={ref} />)

    expect(ref.current).toBeNull()
  })
})
