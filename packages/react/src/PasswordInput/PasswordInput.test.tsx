import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef, useState } from 'react'
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

  it('renders three attributes for privacy', () => {
    const { container } = render(<PasswordInput />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveAttribute('autocapitalize', 'none')
    expect(component).toHaveAttribute('autocorrect', 'off')
    expect(component).toHaveAttribute('spellcheck', 'false')
  })

  it('should be working in a controlled state', async () => {
    function ControlledComponent() {
      const [value, setValue] = useState('Hello')

      return <PasswordInput value={value} onChange={(e) => setValue(e.target.value)} />
    }

    const { container } = render(<ControlledComponent />)

    const componentText = screen.getByDisplayValue('Hello')

    expect(componentText).toBeInTheDocument()

    const component = container.querySelector(':only-child')
    if (component) {
      await userEvent.type(component, ', World!')
    }

    const newComponentText = screen.getByDisplayValue('Hello, World!')

    expect(newComponentText).toBeInTheDocument()
  })

  it('should not update the value when disabled', async () => {
    const { container } = render(<PasswordInput disabled defaultValue="Hello" />)

    const component = container.querySelector(':only-child')
    if (component) {
      await userEvent.type(component, ', World!')
    }

    expect(component).toHaveValue('Hello')
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
