import { render } from '@testing-library/react'
import { createRef } from 'react'
import { Header } from './Header'
import '@testing-library/jest-dom'

describe('Header', () => {
  it('renders', () => {
    const { container } = render(<Header logoLink="/" />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Header logoLink="/" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-header')
  })

  it('renders an additional class name', () => {
    const { container } = render(<Header logoLink="/" className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('extra')

    expect(component).toHaveClass('amsterdam-header')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<Header logoLink="/" ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
