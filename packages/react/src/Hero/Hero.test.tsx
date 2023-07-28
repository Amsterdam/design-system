import { render } from '@testing-library/react'
import { createRef } from 'react'
import { Hero } from './Hero'
import '@testing-library/jest-dom'

describe('Hero', () => {
  it('renders', () => {
    const { container } = render(<Hero />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Hero />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-hero')
  })

  it('can have a custom class name', () => {
    const { container } = render(<Hero className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('extra')
  })

  it('can have a additional class name', () => {
    const { container } = render(<Hero className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('extra')

    expect(component).toHaveClass('amsterdam-hero')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<Hero ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
