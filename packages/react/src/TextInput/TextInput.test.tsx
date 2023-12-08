import { render } from '@testing-library/react'
import { createRef } from 'react'
import { TextInput } from './TextInput'
import '@testing-library/jest-dom'

describe('Text input', () => {
  it('renders', () => {
    const { container } = render(<TextInput />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<TextInput />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-text-input')
  })

  it('renders an additional class name', () => {
    const { container } = render(<TextInput className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('extra')

    expect(component).toHaveClass('amsterdam-text-input')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLInputElement>()

    const { container } = render(<TextInput ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
