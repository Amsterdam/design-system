import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Hero } from './Hero'
import '@testing-library/jest-dom'

describe('Hero', () => {
  it('renders a heading role element', () => {
    render(<Hero>Breaking news</Hero>)

    const hero = screen.getByRole('heading', {
      name: 'Breaking news',
    })

    expect(hero).toBeInTheDocument()
    expect(hero).toBeVisible()
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

  it('renders the right inverse color class', () => {
    render(<Hero inverseColor>Hero</Hero>)

    const hero = screen.getByRole('heading', { name: 'Hero' })

    expect(hero).toHaveClass('amsterdam-hero--inverse-color')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLHeadingElement>()

    const { container } = render(<Hero ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
