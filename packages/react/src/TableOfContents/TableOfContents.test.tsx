/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { TableOfContents } from './TableOfContents'
import '@testing-library/jest-dom'

describe('Table of contents', () => {
  it('renders', () => {
    const { container } = render(<TableOfContents />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders its children', () => {
    render(
      <TableOfContents>
        <TableOfContents.List />
      </TableOfContents>,
    )

    const testChild = screen.getByRole('list')

    expect(testChild).toBeTruthy()
  })

  it('renders a heading', () => {
    render(<TableOfContents heading="Test heading" />)

    const heading = screen.getByRole('heading')

    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Test heading')
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<TableOfContents />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-table-of-contents')
  })

  it('renders an extra class name', () => {
    const { container } = render(<TableOfContents className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-table-of-contents extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<TableOfContents ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
