import { render } from '@testing-library/react'
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
    const { container } = render(<Card />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-card')
  })

  it('can have a additional class name', () => {
    const { container } = render(<Card className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('extra')

    expect(component).toHaveClass('amsterdam-card')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<Card ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
