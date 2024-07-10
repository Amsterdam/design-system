import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { FormFieldCharacterCount } from './FormFieldCharacterCount'
import '@testing-library/jest-dom'

describe('Form field character count', () => {
  it('renders', () => {
    render(<FormFieldCharacterCount length={10} maxLength={100} />)

    const component = screen.getByRole('status')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<FormFieldCharacterCount length={10} maxLength={100} />)

    const component = screen.getByRole('status')

    expect(component).toHaveClass('ams-form-field-character-count')
  })

  it('renders an additional class name', () => {
    render(<FormFieldCharacterCount length={10} maxLength={100} className="extra" />)

    const component = screen.getByRole('status')

    expect(component).toHaveClass('ams-form-field-character-count extra')
  })

  it('renders an error class when length is larger than maxLength', () => {
    render(<FormFieldCharacterCount length={101} maxLength={100} />)

    const component = screen.getByRole('status')

    expect(component).toHaveClass('ams-form-field-character-count--error')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    render(<FormFieldCharacterCount length={10} maxLength={100} ref={ref} />)

    const component = screen.getByRole('status')

    expect(ref.current).toBe(component)
  })
})
