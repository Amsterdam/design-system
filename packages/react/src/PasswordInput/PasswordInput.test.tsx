import { render } from '@testing-library/react'
import { createRef } from 'react'
import { PasswordInput } from './PasswordInput'
import '@testing-library/jest-dom'

describe('Password input', () => {
  it('renders', () => {
    const { container } = render(<PasswordInput />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<PasswordInput />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-password-input')
  })

  it('renders an additional class name', () => {
    const { container } = render(<PasswordInput className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-password-input extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLInputElement>()

    const { container } = render(<PasswordInput ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
