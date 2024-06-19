import { render } from '@testing-library/react'
import { createRef } from 'react'
import { DateInput, dateInputTypes } from './DateInput'
import '@testing-library/jest-dom'

describe('Date input', () => {
  it('renders', () => {
    const { container } = render(<DateInput />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<DateInput />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-date-input')
  })

  it('renders an additional class name', () => {
    const { container } = render(<DateInput className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-date-input extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLInputElement>()

    const { container } = render(<DateInput ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  describe('Invalid state', () => {
    it('is not invalid by default', () => {
      const { container } = render(<DateInput />)

      const component = container.querySelector(':only-child')

      expect(component).not.toBeInvalid()
    })

    it('can have an invalid state', () => {
      const { container } = render(<DateInput invalid />)

      const component = container.querySelector(':only-child')

      expect(component).toHaveAttribute('aria-invalid')
      expect(component).toBeInvalid()
    })

    it('omits non-essential invalid attributes when not invalid', () => {
      const { container } = render(<DateInput invalid={false} />)

      const component = container.querySelector(':only-child')

      expect(component).not.toHaveAttribute('aria-invalid')
    })
  })

  describe('Type', () => {
    dateInputTypes.map((type) =>
      it(`passes on the ‘${type}’ type`, () => {
        const { container } = render(<DateInput type={type} />)

        const component = container.querySelector(':only-child')

        expect(component).toHaveAttribute('type', type)
      }),
    )
  })
})
