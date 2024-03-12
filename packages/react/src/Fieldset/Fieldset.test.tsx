import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Fieldset } from './Fieldset'
import '@testing-library/jest-dom'

describe('Fieldset', () => {
  it('renders', () => {
    render(<Fieldset legend="Test" />)

    const component = screen.getByRole('group', { name: 'Test' })

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<Fieldset legend="Test" />)

    const component = screen.getByRole('group', { name: 'Test' })

    expect(component).toHaveClass('ams-fieldset')
  })

  it('renders an additional class name', () => {
    render(<Fieldset legend="Test" className="extra" />)

    const component = screen.getByRole('group', { name: 'Test' })

    expect(component).toHaveClass('ams-fieldset extra')
  })

  it('renders the correct legend class name', () => {
    const { container } = render(<Fieldset legend="Test" />)

    const component = container.querySelector('legend')

    expect(component).toHaveClass('ams-fieldset__legend')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLFieldSetElement>()

    render(<Fieldset legend="Test" ref={ref} />)

    const component = screen.getByRole('group', { name: 'Test' })

    expect(ref.current).toBe(component)
  })
})
