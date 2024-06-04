import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { TableOfContents } from './TableOfContents'

describe('Link list link', () => {
  it('renders', () => {
    render(<TableOfContents.Link label="Test" href="#" />)

    const link = screen.getByRole('link')

    expect(link).toBeInTheDocument()
    expect(link).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<TableOfContents.Link label="Test" href="#" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-table-of-contents__link')
  })

  it('renders an additional class name', () => {
    render(<TableOfContents.Link label="Test" href="#" className="extra" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-table-of-contents__link extra')
  })

  it('renders a class name for the background color', () => {
    render(<TableOfContents.Link label="Test" href="#" onBackground="dark" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-table-of-contents__link--on-background-dark')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLAnchorElement>()

    render(<TableOfContents.Link label="Test" href="#" ref={ref} />)

    const component = screen.getByRole('link')

    expect(ref.current).toBe(component)
  })
})
