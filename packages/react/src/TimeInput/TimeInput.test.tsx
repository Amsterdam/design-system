import { render } from '@testing-library/react'
import { createRef } from 'react'
import { TimeInput } from './TimeInput'
import '@testing-library/jest-dom'

describe('Time input', () => {
  it('renders', () => {
    const { container } = render(<TimeInput />)
    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<TimeInput />)
    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-time-input')
  })

  it('renders an additional class name', () => {
    const { container } = render(<TimeInput className="extra" />)
    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-time-input extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLInputElement>()

    const { container } = render(<TimeInput ref={ref} />)
    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
