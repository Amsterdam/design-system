/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes } from 'react'

import { render, screen } from '@testing-library/react'
import { createRef, forwardRef } from 'react'
import { describe, expect, it } from 'vitest'

import { LinkList } from './LinkList'

describe('LinkListLink', () => {
  it('renders', () => {
    const { container } = render(<LinkList.Link href="#" />)

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
    render(<LinkList.Link href="#" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-link-list__link')
  })

  it('renders an extra class name', () => {
    render(<LinkList.Link className="extra" href="#" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-link-list__link extra')
  })

  it('renders a class name for the small size', () => {
    render(<LinkList.Link href="#" size="small" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-link-list__link--small')
  })

  it('renders the class name for contrast color', () => {
    render(<LinkList.Link color="contrast" href="#" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-link-list__link--contrast')
  })

  it('renders the class name for inverse color', () => {
    render(<LinkList.Link color="inverse" href="#" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-link-list__link--inverse')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLAnchorElement>()

    render(<LinkList.Link href="#" ref={ref} />)

    const component = screen.getByRole('link')

    expect(ref.current).toBe(component)
  })

  it('passes additional props', () => {
    render(<LinkList.Link aria-hidden="false" data-test="data-test" href="#" id="id" />)

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

    render(<LinkList.Link href="/test" linkComponent={CustomLink} />)

    const component = screen.getByRole('link')

    expect(component).toHaveAttribute('data-custom', 'true')
    expect(component).toHaveAttribute('href', '/test')
    expect(component).toHaveClass('ams-link-list__link')
  })

  it('forwards the ref to an intrinsic link component', () => {
    const ref = createRef<HTMLAnchorElement>()

    render(<LinkList.Link href="/test" linkComponent="a" ref={ref} />)

    expect(ref.current).toBe(screen.getByRole('link'))
  })

  it('does not forward the ref to a custom link component', () => {
    const ref = createRef<HTMLAnchorElement>()
    const CustomLink = forwardRef<HTMLAnchorElement, AnchorHTMLAttributes<HTMLAnchorElement>>(
      function CustomLink(props, customRef) {
        return <a {...props} ref={customRef} />
      },
    )

    render(<LinkList.Link href="/test" linkComponent={CustomLink} ref={ref} />)

    expect(ref.current).toBeNull()
  })
})
