import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Select } from './Select'
import '@testing-library/jest-dom'

describe('Select', () => {
  it('renders', () => {
    render(<Select.Group />)

    const component = screen.getByRole('group')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders an group role element with a text label', () => {
    render(<Select.Group label="Options" />)

    const option = screen.getByRole('group', {
      name: 'Options',
    })

    expect(option).toBeInTheDocument()
  })

  it('renders a design system BEM class name', () => {
    render(<Select.Group />)

    const component = screen.getByRole('group')

    expect(component).toHaveClass('ams-select__group')
  })

  it('renders an additional class name', () => {
    render(<Select.Group className="extra" />)

    const component = screen.getByRole('group')

    expect(component).toHaveClass('ams-select__group extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLOptGroupElement>()

    render(<Select.Group ref={ref} />)

    const component = screen.getByRole('group')

    expect(ref.current).toBe(component)
  })

  it('can be disabled', () => {
    render(<Select.Group disabled />)

    const component = screen.getByRole('group')

    expect(component).toBeDisabled()
  })
})
