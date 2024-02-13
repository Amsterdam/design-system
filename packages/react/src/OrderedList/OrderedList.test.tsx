import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { OrderedList } from './OrderedList'
import '@testing-library/jest-dom'

describe('Ordered list', () => {
  it('renders an HTML ol element', () => {
    const { container } = render(<OrderedList />)
    const list = container.querySelector('ol:only-child')

    expect(list).toBeInTheDocument()
  })

  it('renders a design system BEM class name', () => {
    render(<OrderedList />)

    const component = screen.getByRole('list')

    expect(component).toHaveClass('amsterdam-ordered-list')
  })

  it('renders an additional class name', () => {
    render(<OrderedList className="extra" />)

    const component = screen.getByRole('list')

    expect(component).toHaveClass('amsterdam-ordered-list extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLOListElement>()

    render(<OrderedList ref={ref} />)

    const component = screen.getByRole('list')

    expect(ref.current).toBe(component)
  })
})
