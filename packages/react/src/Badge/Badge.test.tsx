import { render } from '@testing-library/react'
import { createRef } from 'react'
import { Badge } from './Badge'
import '@testing-library/jest-dom'

describe('Badge', () => {
  it('renders', () => {
    const { container } = render(<Badge />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Badge />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-badge')
  })

  it('renders an additional class name', () => {
    const { container } = render(<Badge className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-badge extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<Badge ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('renders with default color', () => {
    const { container } = render(<Badge />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-badge')
    expect(component).toHaveClass('amsterdam-badge--dark-green')
  })

  it('renders with specified color', () => {
    const { container } = render(<Badge color="blue" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-badge')
    expect(component).toHaveClass('amsterdam-badge--blue')
  })
})
