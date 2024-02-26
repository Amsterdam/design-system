import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef, useState } from 'react'
import { TextArea } from './TextArea'
import '@testing-library/jest-dom'

describe('Text area', () => {
  it('renders', () => {
    const { container } = render(<TextArea />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<TextArea />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-text-area')
  })

  it('renders an additional class name', () => {
    const { container } = render(<TextArea className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-text-area extra')
  })

  it('should be working in a controlled state', async () => {
    function ControlledComponent() {
      const [value, setValue] = useState('Hello')

      return <TextArea value={value} onChange={(e) => setValue(e.target.value)} />
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
    render(<TextArea disabled defaultValue="Hello" />)

    const component = screen.getByRole('textbox')
    if (component) {
      await userEvent.type(component, ', World!')
    }

    expect(component).toHaveValue('Hello')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLTextAreaElement>()

    const { container } = render(<TextArea ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
