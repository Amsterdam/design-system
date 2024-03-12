import { render } from '@testing-library/react'
import { createRef } from 'react'
import { Logo } from './Logo'
import '@testing-library/jest-dom'

describe('Logo', () => {
  it('renders', () => {
    const { container } = render(<Logo />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Logo />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-logo')
  })

  it('renders an additional class name', () => {
    const { container } = render(<Logo className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('extra')

    expect(component).toHaveClass('ams-logo')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<SVGSVGElement>()

    const { container } = render(<Logo ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
