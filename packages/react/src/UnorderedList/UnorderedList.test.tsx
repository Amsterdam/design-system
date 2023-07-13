import { render } from '@testing-library/react'
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
    const { container } = render(<UnorderedList />)
    const list = container.querySelector(':only-child')

    expect(list).toHaveClass('amsterdam-unordered-list')
  })

  it('can have a additional class name', () => {
    const { container } = render(<UnorderedList className="large" />)
    const list = container.querySelector(':only-child')

    expect(list).toHaveClass('large')
    expect(list).toHaveClass('amsterdam-unordered-list')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLUListElement>()
    const { container } = render(<UnorderedList ref={ref} />)
    const list = container.querySelector(':only-child')

    expect(ref.current).toBe(list)
  })
})
