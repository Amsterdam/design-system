import { render } from '@testing-library/react'
import { createRef } from 'react'
import { Checkbox } from './Checkbox'
import '@testing-library/jest-dom'

describe('Checkbox', () => {
  it('renders', () => {
    const { container } = render(<Checkbox />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Checkbox />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-checkbox')
  })

  it('can have a custom class name', () => {
    const { container } = render(<Checkbox className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('extra')
  })

  it('can have a additional class name', () => {
    const { container } = render(<Checkbox className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('extra')

    expect(component).toHaveClass('amsterdam-checkbox')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<Checkbox ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
