import { render } from '@testing-library/react'
import { createRef } from 'react'
import { Hint } from '.'
import '@testing-library/jest-dom'

describe('Hint', () => {
  it('renders', () => {
    const { container } = render(<Hint />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Hint />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-mark')
  })

  it('renders an additional class name', () => {
    const { container } = render(<Hint className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-mark extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<Hint ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
