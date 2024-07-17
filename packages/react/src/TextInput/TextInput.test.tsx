import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef, useState } from 'react'
import { TextInput, textInputTypes } from './TextInput'
import '@testing-library/jest-dom'

describe('Text input', () => {
  it('renders', () => {
    render(<TextInput />)

    const component = screen.getByRole('textbox')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<TextInput />)

    const component = screen.getByRole('textbox')

    expect(component).toHaveClass('ams-text-input')
  })

  it('renders an additional class name', () => {
    render(<TextInput className="extra" />)

    const component = screen.getByRole('textbox')

    expect(component).toHaveClass('extra')

    expect(component).toHaveClass('ams-text-input')
  })

  it('should be working in a controlled state', async () => {
    function ControlledComponent() {
      const [value, setValue] = useState('Hello')

      return <TextInput value={value} onChange={(e) => setValue(e.target.value)} />
    }

    render(<ControlledComponent />)

    const componentText = screen.getByDisplayValue('Hello')

    expect(componentText).toBeInTheDocument()

    const component = screen.getByRole('textbox')
    if (component) {
      await userEvent.type(component, ', World!')
    }

    const newComponentText = screen.getByDisplayValue('Hello, World!')

    expect(newComponentText).toBeInTheDocument()
  })

  it('should not update the value when disabled', async () => {
    render(<TextInput disabled defaultValue="Hello" />)

    const component = screen.getByRole('textbox')
    if (component) {
      await userEvent.type(component, ', World!')
    }

    expect(component).toHaveValue('Hello')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLInputElement>()

    render(<TextInput ref={ref} />)

    const component = screen.getByRole('textbox')

    expect(ref.current).toBe(component)
  })

  it('renders bidirectional by default using `dir="auto"`', () => {
    render(<TextInput />)

    const component = screen.getByRole('textbox')

    expect(component).toHaveAttribute('dir', 'auto')
  })

  it('renders left-to-right by using `dir="ltr"`', () => {
    render(<TextInput dir="ltr" />)

    const component = screen.getByRole('textbox')

    expect(component).toHaveAttribute('dir', 'ltr')
  })

  describe('Invalid state', () => {
    it('is not invalid by default', () => {
      render(<TextInput />)

      const component = screen.getByRole('textbox')

      expect(component).not.toBeInvalid()
    })

    it('can have an invalid state', () => {
      render(<TextInput invalid />)

      const component = screen.getByRole('textbox')

      expect(component).toHaveAttribute('aria-invalid')

      expect(component).toBeInvalid()
    })

    it('omits non-essential invalid attributes when not invalid', () => {
      render(<TextInput invalid={false} />)

      const component = screen.getByRole('textbox')

      expect(component).not.toHaveAttribute('aria-invalid')
    })
  })

  describe('Type', () => {
    textInputTypes.map((type) =>
      it(`sets the ‘${type}’ type`, () => {
        render(<TextInput type={type} />)

        const component = screen.getByRole('textbox')

        expect(component).toHaveAttribute('type', type)
      }),
    )
  })
})
