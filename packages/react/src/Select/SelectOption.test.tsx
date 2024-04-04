import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Select } from './Select'
import '@testing-library/jest-dom'

describe('Select', () => {
  it('renders', () => {
    render(<Select.Option />)

    const component = screen.getByRole('option')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders an option role element with a text label', () => {
    render(<Select.Option>Option</Select.Option>)

    const option = screen.getByRole('option', {
      name: 'Option',
    })

    expect(option).toBeInTheDocument()
  })

  it('renders a design system BEM class name', () => {
    render(<Select.Option />)

    const component = screen.getByRole('option')

    expect(component).toHaveClass('ams-select__option')
  })

  it('renders an additional class name', () => {
    render(<Select.Option className="extra" />)

    const component = screen.getByRole('option')

    expect(component).toHaveClass('ams-select__option extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLOptionElement>()

    render(<Select.Option ref={ref} />)

    const component = screen.getByRole('option')

    expect(ref.current).toBe(component)
  })

  it('can be disabled', () => {
    render(<Select.Option disabled />)

    const component = screen.getByRole('option')

    expect(component).toBeDisabled()
  })
})
