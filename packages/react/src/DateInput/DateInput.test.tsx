import { render } from '@testing-library/react'
import { createRef } from 'react'
import { DateInput } from './DateInput'
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
    const ref = createRef<HTMLElement>()

    const { container } = render(<DateInput ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
