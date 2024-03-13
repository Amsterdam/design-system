import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { FormFieldCharacterCounter } from './FormFieldCharacterCounter'
import '@testing-library/jest-dom'

describe('Form field character counter', () => {
  it('renders', () => {
    render(<FormFieldCharacterCounter label="Test" />)

    const component = screen.getByRole('status')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<FormFieldCharacterCounter label="Test" />)

    const component = screen.getByRole('status')

    expect(component).toHaveClass('ams-form-field-character-counter')
  })

  it('renders an additional class name', () => {
    render(<FormFieldCharacterCounter label="Test" className="extra" />)

    const component = screen.getByRole('status')

    expect(component).toHaveClass('ams-form-field-character-counter extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    render(<FormFieldCharacterCounter label="Test" ref={ref} />)

    const component = screen.getByRole('status')

    expect(ref.current).toBe(component)
  })
})
