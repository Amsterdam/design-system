import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Select } from './Select'
import '@testing-library/jest-dom'

describe('Select', () => {
  it('renders', () => {
    render(<Select />)

    const component = screen.getByRole('combobox')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<Select />)

    const component = screen.getByRole('combobox')

    expect(component).toHaveClass('ams-select')
  })

  it('renders an additional class name', () => {
    render(<Select className="extra" />)

    const component = screen.getByRole('combobox')

    expect(component).toHaveClass('ams-select extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLSelectElement>()

    render(<Select ref={ref} />)

    const component = screen.getByRole('combobox')

    expect(ref.current).toBe(component)
  })

  it('renders options', () => {
    render(
      <Select>
        <Select.Option value="a">Option A</Select.Option>
        <Select.Option value="b">Option B</Select.Option>
      </Select>,
    )

    const select = screen.getByRole('combobox')

    const option = screen.getByRole('option', {
      name: 'Option B',
    })

    expect(select).toContain(option)
  })

  it('can be disabled', () => {
    render(<Select disabled />)

    const component = screen.getByRole('combobox')

    expect(component).toBeDisabled()
  })

  it('can be invalid', () => {
    render(<Select invalid />)

    const component = screen.getByRole('combobox')

    expect(component).toHaveClass('ams-select--invalid')
  })

  it('is not required by default', () => {
    render(<Select />)

    const component = screen.getByRole('combobox')

    expect(component).not.toBeRequired()
  })

  it('omits the required attribute when not required', () => {
    render(<Select required={false} />)

    const component = screen.getByRole('combobox')

    expect(component).not.toHaveAttribute('required')
  })
})
