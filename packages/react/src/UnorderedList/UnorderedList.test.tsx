import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { UnorderedList } from './UnorderedList'
import '@testing-library/jest-dom'

describe('Unordered List', () => {
  it('renders an HTML ul element', () => {
    const { container } = render(<UnorderedList />)
    const list = container.querySelector('ul:only-child')

    expect(list).toBeInTheDocument()
  })

  it('renders a design system BEM class name', () => {
    render(<UnorderedList />)

    const component = screen.getByRole('list')

    expect(component).toHaveClass('amsterdam-unordered-list')
  })

  it('renders an additional class name', () => {
    render(<UnorderedList className="extra" />)

    const component = screen.getByRole('list')

    expect(component).toHaveClass('amsterdam-unordered-list extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLUListElement>()

    render(<UnorderedList ref={ref} />)

    const component = screen.getByRole('list')

    expect(ref.current).toBe(component)
  })
})
