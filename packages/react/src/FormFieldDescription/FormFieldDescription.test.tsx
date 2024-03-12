import { render } from '@testing-library/react'
import { createRef } from 'react'
import { FormFieldDescription } from './FormFieldDescription'
import '@testing-library/jest-dom'

describe('Form field description', () => {
  it('renders', () => {
    const { container } = render(<FormFieldDescription />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<FormFieldDescription />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-form-field-description')
  })

  it('renders an additional class name', () => {
    const { container } = render(<FormFieldDescription className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-form-field-description extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<FormFieldDescription ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
