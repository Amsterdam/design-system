/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes } from 'react'

import { render, screen } from '@testing-library/react'
import { createRef, forwardRef } from 'react'
import { describe, expect, it } from 'vitest'

import { TableOfContents } from './TableOfContents'

describe('TableOfContentsLink', () => {
  it('renders', () => {
    render(<TableOfContents.Link href="#" label="Test label" />)

    const link = screen.getByRole('link')

    expect(link).toBeInTheDocument()
    expect(link).toBeVisible()
    expect(link).toHaveTextContent('Test label')
  })

  it('renders a design system BEM class name', () => {
    render(<TableOfContents.Link href="#" label="Test" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-table-of-contents__link')
  })

  it('renders an extra class name', () => {
    render(<TableOfContents.Link className="extra" href="#" label="Test" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-table-of-contents__link extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLAnchorElement>()

    render(<TableOfContents.Link href="#" label="Test" ref={ref} />)

    const component = screen.getByRole('link')

    expect(ref.current).toBe(component)
  })

  it('passes additional props', () => {
    render(<TableOfContents.Link aria-hidden="false" data-test="data-test" href="#" id="id" label="Test" />)

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

    render(<TableOfContents.Link href="/test" label="Test" linkComponent={CustomLink} />)

    const component = screen.getByRole('link')

    expect(component).toHaveAttribute('data-custom', 'true')
    expect(component).toHaveAttribute('href', '/test')
    expect(component).toHaveClass('ams-table-of-contents__link')
  })

  it('forwards the ref to an intrinsic link component', () => {
    const ref = createRef<HTMLAnchorElement>()

    render(<TableOfContents.Link href="/test" label="Test" linkComponent="a" ref={ref} />)

    expect(ref.current).toBe(screen.getByRole('link'))
  })

  it('does not forward the ref to a custom link component', () => {
    const ref = createRef<HTMLAnchorElement>()
    const CustomLink = forwardRef<HTMLAnchorElement, AnchorHTMLAttributes<HTMLAnchorElement>>(
      function CustomLink(props, customRef) {
        return <a {...props} ref={customRef} />
      },
    )

    render(<TableOfContents.Link href="/test" label="Test" linkComponent={CustomLink} ref={ref} />)

    expect(ref.current).toBeNull()
  })
})
