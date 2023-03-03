import { render, screen } from '@testing-library/react'
import React, { createRef } from 'react'
import { List } from './List'
import '@testing-library/jest-dom'

describe('List', () => {
  it('renders a list role element', () => {
    render(<List />)

    const list = screen.getByRole('list')

    expect(list).toBeInTheDocument()
    expect(list).toBeVisible()
  })

  it('renders an HTML ul element', () => {
    const { container } = render(<List />)

    const list = container.querySelector('ul:only-child')

    expect(list).toBeInTheDocument()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<List />)

    const list = container.querySelector(':only-child')

    expect(list).toHaveClass('amsterdam-list')
  })

  it('can have a additional class name', () => {
    const { container } = render(<List className="large" />)

    const list = container.querySelector(':only-child')

    expect(list).toHaveClass('large')

    expect(list).toHaveClass('amsterdam-list')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLUListElement>()

    const { container } = render(<List ref={ref} />)

    const list = container.querySelector(':only-child')

    expect(ref.current).toBe(list)
  })
})
