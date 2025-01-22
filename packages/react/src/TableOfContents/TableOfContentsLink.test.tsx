import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { TableOfContents } from './TableOfContents'

describe('Table of Contents link', () => {
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

  it('renders an additional class name', () => {
    render(<TableOfContents.Link className="extra" href="#" label="Test" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-table-of-contents__link extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLAnchorElement>()

    render(<TableOfContents.Link ref={ref} href="#" label="Test" />)

    const component = screen.getByRole('link')

    expect(ref.current).toBe(component)
  })
})
