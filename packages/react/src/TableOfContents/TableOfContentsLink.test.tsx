/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
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
})
