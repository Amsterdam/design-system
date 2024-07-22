import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { PasswordInput } from './PasswordInput'
import { Label } from '../Label'
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

  describe('Invalid state', () => {
    it('is not invalid by default', () => {
      const { container } = render(<PasswordInput />)

      const component = container.querySelector(':only-child')

      expect(component).not.toBeInvalid()
    })

    it('can have an invalid state', () => {
      const { container } = render(<PasswordInput invalid />)

      const component = container.querySelector(':only-child')

      expect(component).toHaveAttribute('aria-invalid')
      expect(component).toBeInvalid()
    })

    it('omits non-essential invalid attributes when not invalid', () => {
      const { container } = render(<PasswordInput invalid={false} />)

      const component = container.querySelector(':only-child')

      expect(component).not.toHaveAttribute('aria-invalid')
    })
  })

  describe('Type', () => {
    it('sets the ‘password’ type', () => {
      render(
        <>
          <Label htmlFor="password-field">Password</Label>
          <PasswordInput id="password-field" />
        </>,
      )

      const component = screen.getByLabelText(/password/i)

      expect(component).toHaveAttribute('type', 'password')
    })
  })
})
