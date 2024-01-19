import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { LinkList } from './LinkList'

describe('Link list link', () => {
  it('renders', () => {
    render(<LinkList.Link href="#" />)

    const component = screen.getByRole('link')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<LinkList.Link href="#" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('amsterdam-link-list__link')
  })

  it('renders an additional class name', () => {
    render(<LinkList.Link href="#" className="extra" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('amsterdam-link-list__link extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLAnchorElement>()

    render(<LinkList.Link href="#" ref={ref} />)

    const component = screen.getByRole('link')

    expect(ref.current).toBe(component)
  })
})
