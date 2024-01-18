import { render } from '@testing-library/react'
import { createRef } from 'react'
import { Tip } from './Tip'
import '@testing-library/jest-dom'

describe('Tip', () => {
  it('renders', () => {
    const { container } = render(<Tip />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Tip />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-tip')
  })

  it('renders an additional class name', () => {
    const { container } = render(<Tip className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-tip extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<Tip ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
