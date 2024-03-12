import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Card } from './Card'
import '@testing-library/jest-dom'

describe('Card', () => {
  it('renders', () => {
    const { container } = render(<Card />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<Card />)

    const component = screen.getByRole('article')

    expect(component).toHaveClass('ams-card')
  })

  it('renders an additional class name', () => {
    render(<Card className="extra" />)

    const component = screen.getByRole('article')

    expect(component).toHaveClass('ams-card extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    render(<Card ref={ref} />)

    const component = screen.getByRole('article')

    expect(ref.current).toBe(component)
  })
})
