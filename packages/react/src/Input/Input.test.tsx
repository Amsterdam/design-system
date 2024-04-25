import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef, useState } from 'react'
import { Input } from './Input'
import '@testing-library/jest-dom'

describe('Text input', () => {
  it('renders', () => {
    render(<Input />)

    const component = screen.getByRole('textbox')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<Input />)

    const component = screen.getByRole('textbox')

    expect(component).toHaveClass('ams-input')
  })

  it('renders an additional class name', () => {
    render(<Input className="extra" />)

    const component = screen.getByRole('textbox')

    expect(component).toHaveClass('extra')

    expect(component).toHaveClass('ams-input')
  })

  it('should be working in a controlled state', async () => {
    function ControlledComponent() {
      const [value, setValue] = useState('Hello')

      return <Input value={value} onChange={(e) => setValue(e.target.value)} />
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
    render(<Input disabled defaultValue="Hello" />)

    const component = screen.getByRole('textbox')
    if (component) {
      await userEvent.type(component, ', World!')
    }

    expect(component).toHaveValue('Hello')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLInputElement>()

    render(<Input ref={ref} />)

    const component = screen.getByRole('textbox')

    expect(ref.current).toBe(component)
  })
})
