import { render } from '@testing-library/react'
import { createRef } from 'react'
import { OrderedList } from './OrderedList'
import '@testing-library/jest-dom'

describe('Ordered List', () => {
  it('renders an HTML ol element', () => {
    const { container } = render(<OrderedList />)
    const list = container.querySelector('ol:only-child')

    expect(list).toBeInTheDocument()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<OrderedList />)
    const list = container.querySelector(':only-child')

    expect(list).toHaveClass('amsterdam-ordered-list')
  })

  it('can have a additional class name', () => {
    const { container } = render(<OrderedList className="large" />)
    const list = container.querySelector(':only-child')

    expect(list).toHaveClass('large')
    expect(list).toHaveClass('amsterdam-ordered-list')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLOListElement>()
    const { container } = render(<OrderedList ref={ref} />)
    const list = container.querySelector(':only-child')

    expect(ref.current).toBe(list)
  })
})
