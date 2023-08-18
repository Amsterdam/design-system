import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Checkbox } from './Checkbox'
import '@testing-library/jest-dom'

describe('Checkbox', () => {
  it('renders', () => {
    const { container } = render(<Checkbox />)

    const wrapper = container.querySelector(':only-child')
    const input = screen.getByRole('checkbox')
    const label = container.querySelector('label')

    expect(wrapper).toBeInTheDocument()
    expect(wrapper).toBeVisible()

    expect(input).toBeInTheDocument()
    expect(input).toBeVisible()

    expect(label).toBeInTheDocument()
    expect(label).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Checkbox />)

    const wrapper = container.querySelector(':only-child')
    const input = screen.getByRole('checkbox')
    const label = container.querySelector('label')

    expect(wrapper).toHaveClass('amsterdam-checkbox')
    expect(input).toHaveClass('amsterdam-checkbox__input')
    expect(label).toHaveClass('amsterdam-checkbox__label')
  })

  it('can have a custom class name', () => {
    const { container } = render(<Checkbox className="extra" />)

    const wrapper = container.querySelector(':only-child')

    expect(wrapper).toHaveClass('extra')
  })

  it('can have a additional class name', () => {
    const { container } = render(<Checkbox className="extra" />)

    const wrapper = container.querySelector(':only-child')

    expect(wrapper).toHaveClass('extra')

    expect(wrapper).toHaveClass('amsterdam-checkbox')
  })

  // checked state

  it('is not checked by default', () => {
    render(<Checkbox />)

    const input = screen.getByRole('checkbox')

    expect(input).not.toBeChecked()
  })

  it('can have a checked state', () => {
    render(<Checkbox checked />)

    const input = screen.getByRole('checkbox')

    expect(input).toBeChecked()
  })

  // indeterminate state

  it('is not indeterminate by default', () => {
    render(<Checkbox />)

    const input = screen.getByRole('checkbox')

    expect(input).not.toBePartiallyChecked()
  })

  it('can have a checked state', () => {
    render(<Checkbox indeterminate />)

    const input = screen.getByRole('checkbox')

    expect(input).toBePartiallyChecked()
  })

  // invalid state

  it('is not invalid by default', () => {
    render(<Checkbox />)

    const input = screen.getByRole('checkbox')

    expect(input).not.toBeInvalid()
  })

  it('renders a design system BEM modifier class name', () => {
    const { container } = render(<Checkbox invalid />)

    const invalidMarker = container.querySelector('.amsterdam-checkbox__label__checkmark--invalid')

    expect(invalidMarker).toBeInTheDocument()
  })

  it('omits non-essential invalid attributes when not invalid', () => {
    render(<Checkbox invalid={false} />)

    const input = screen.getByRole('checkbox')

    expect(input).not.toHaveAttribute('aria-invalid')
  })

  it('can have an invalid state', () => {
    render(<Checkbox invalid />)

    const input = screen.getByRole('checkbox')

    expect(input).toBeInvalid()
  })

  // disabled state

  it('is not disabled by default', () => {
    render(<Checkbox />)

    const input = screen.getByRole('checkbox')

    expect(input).not.toBeDisabled()
  })

  it('can have a disabled state', () => {
    render(<Checkbox disabled />)

    const input = screen.getByRole('checkbox')

    expect(input).toBeDisabled()
  })

  it('can trigger a change event', () => {
    const handleChange = jest.fn()

    render(<Checkbox onChange={handleChange} />)

    const input = screen.getByRole('checkbox')

    input?.click()

    expect(handleChange).toHaveBeenCalled()
  })

  it('does not trigger a change event when disabled', () => {
    const handleChange = jest.fn()

    render(<Checkbox disabled onChange={handleChange} />)

    const input = screen.getByRole('checkbox')

    input?.click()

    expect(handleChange).not.toHaveBeenCalled()
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLInputElement>()

    render(<Checkbox ref={ref} />)

    const input = screen.getByRole('checkbox')

    expect(ref.current).toBe(input)
  })
})
