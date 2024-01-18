import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { LinkListLink } from './LinkList'
import '@testing-library/jest-dom'

describe('Link list', () => {
  it('renders', () => {
    render(<LinkListLink href="#" />)

    const component = screen.getByRole('link')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<LinkListLink href="#" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('amsterdam-link-list__link')
  })

  it('renders an additional class name', () => {
    render(<LinkListLink href="#" className="extra" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('amsterdam-link-list__link extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLAnchorElement>()

    render(<LinkListLink href="#" ref={ref} />)

    const component = screen.getByRole('link')

    expect(ref.current).toBe(component)
  })
})
