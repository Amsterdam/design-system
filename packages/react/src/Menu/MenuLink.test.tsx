/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes } from 'react'

import { DocumentIcon, StarIcon } from '@amsterdam/design-system-react-icons'
import { render, screen } from '@testing-library/react'
import { createRef, forwardRef } from 'react'
import { describe, expect, it } from 'vitest'

import { Menu } from './Menu'

describe('MenuLink', () => {
  it('renders', () => {
    const { container } = render(<Menu.Link href="#" icon={DocumentIcon} />)

    const listItem = screen.getByRole('listitem')
    const link = screen.getByRole('link')
    const icon = container.querySelector('svg')

    expect(listItem).toBeInTheDocument()
    expect(listItem).toBeVisible()
    expect(link).toBeInTheDocument()
    expect(link).toBeVisible()
    expect(icon).toBeInTheDocument()
    expect(icon).not.toBeVisible() // The icon is hidden by default, and only shown when the CSS loads.
  })

  it('renders a design system BEM class name', () => {
    render(<Menu.Link href="#" icon={DocumentIcon} />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-menu__link')
  })

  it('renders an extra class name', () => {
    render(<Menu.Link className="extra" href="#" icon={DocumentIcon} />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-menu__link extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLAnchorElement>()

    render(<Menu.Link href="#" icon={DocumentIcon} ref={ref} />)

    const component = screen.getByRole('link')

    expect(ref.current).toBe(component)
  })

  it('shows a custom icon', () => {
    render(<Menu.Link href="#" icon={<StarIcon className="test-class" />} />)

    const component = screen.getByRole('link')
    const icon = component.querySelector('.test-class')

    expect(icon).toBeInTheDocument()
  })

  it('passes additional props', () => {
    render(<Menu.Link aria-hidden="false" data-test="data-test" href="#" icon={DocumentIcon} id="id" />)

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

    render(<Menu.Link href="/test" icon={DocumentIcon} linkComponent={CustomLink} />)

    const component = screen.getByRole('link')

    expect(component).toHaveAttribute('data-custom', 'true')
    expect(component).toHaveAttribute('href', '/test')
    expect(component).toHaveClass('ams-menu__link')
  })

  it('forwards the ref to an intrinsic link component', () => {
    const ref = createRef<HTMLAnchorElement>()

    render(<Menu.Link href="/test" icon={DocumentIcon} linkComponent="a" ref={ref} />)

    expect(ref.current).toBe(screen.getByRole('link'))
  })

  it('does not forward the ref to a custom link component', () => {
    const ref = createRef<HTMLAnchorElement>()
    const CustomLink = forwardRef<HTMLAnchorElement, AnchorHTMLAttributes<HTMLAnchorElement>>(
      function CustomLink(props, customRef) {
        return <a {...props} ref={customRef} />
      },
    )

    render(<Menu.Link href="/test" icon={DocumentIcon} linkComponent={CustomLink} ref={ref} />)

    expect(ref.current).toBeNull()
  })
})
