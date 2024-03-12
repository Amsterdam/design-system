import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef, useState } from 'react'
import { TextArea } from './TextArea'
import '@testing-library/jest-dom'

describe('Text area', () => {
  it('renders', () => {
    render(<TextArea />)

    const component = screen.getByRole('textbox')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<TextArea />)

    const component = screen.getByRole('textbox')

    expect(component).toHaveClass('ams-text-area')
  })

  it('renders an additional class name', () => {
    render(<TextArea className="extra" />)

    const component = screen.getByRole('textbox')

    expect(component).toHaveClass('ams-text-area extra')
  })

  it('renders a textarea with horizontal resize', () => {
    render(<TextArea resize="horizontal" />)

    const component = screen.getByRole('textbox')

    expect(component).toHaveClass('ams-text-area ams-text-area--resize-horizontal')
  })

  it('renders a textarea with vertical resize', () => {
    render(<TextArea resize="vertical" />)

    const component = screen.getByRole('textbox')

    expect(component).toHaveClass('ams-text-area ams-text-area--resize-vertical')
  })

  it('renders a textarea with no resize', () => {
    render(<TextArea resize="none" />)

    const component = screen.getByRole('textbox')

    expect(component).toHaveClass('ams-text-area ams-text-area--resize-none')
  })

  it('renders a textarea with cols class when cols prop is provided', () => {
    render(<TextArea cols={10} />)

    const component = screen.getByRole('textbox')

    expect(component).toHaveClass('ams-text-area ams-text-area--cols')
  })

  it('can be controlled', async () => {
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
