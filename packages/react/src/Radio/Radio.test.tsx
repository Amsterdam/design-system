import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Radio } from './Radio'
import '@testing-library/jest-dom'

describe('Radio', () => {
  it('renders', () => {
    const { container } = render(<Radio />)

    const wrapper = container.querySelector(':only-child')
    const input = screen.getByRole('radio')
    const label = container.querySelector('label')

    expect(wrapper).toBeInTheDocument()
    expect(wrapper).toBeVisible()

    expect(input).toBeInTheDocument()
    expect(input).toBeVisible()

    expect(label).toBeInTheDocument()
    expect(label).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Radio />)

    const wrapper = container.querySelector(':only-child')
    const input = screen.getByRole('radio')
    const label = container.querySelector('label')

    expect(wrapper).toHaveClass('ams-radio')
    expect(input).toHaveClass('ams-radio__input')
    expect(label).toHaveClass('ams-radio__label')
  })

  it('renders an additional class name', () => {
    const { container } = render(<Radio className="extra" />)

    const wrapper = container.querySelector(':only-child')

    expect(wrapper).toHaveClass('ams-radio extra')
  })

  // checked state

  it('is not checked by default', () => {
    render(<Radio />)

    const input = screen.getByRole('radio')

    expect(input).not.toBeChecked()
  })

  it('can have a checked state', () => {
    const handleChange = () => {}
    render(<Radio checked onChange={handleChange} />)

    const input = screen.getByRole('radio')

    expect(input).toBeChecked()
  })

  // invalid state

  it('is not invalid by default', () => {
    render(<Radio />)

    const input = screen.getByRole('radio')

    expect(input).not.toBeInvalid()
  })

  it('can have an invalid state', () => {
    render(<Radio invalid />)

    const input = screen.getByRole('radio')

    expect(input).toHaveAttribute('aria-invalid')
    expect(input).toBeInvalid()
  })

  it('omits non-essential invalid attributes when not invalid', () => {
    render(<Radio invalid={false} />)

    const input = screen.getByRole('radio')

    expect(input).not.toHaveAttribute('aria-invalid')
  })

  // disabled state

  it('is not disabled by default', () => {
    render(<Radio />)

    const input = screen.getByRole('radio')

    expect(input).not.toBeDisabled()
  })

  it('can have a disabled state', () => {
    render(<Radio disabled />)

    const input = screen.getByRole('radio')

    expect(input).toBeDisabled()
  })

  // disabled invalid state

  it('can have a disabled invalid state', () => {
    render(<Radio disabled invalid />)

    const input = screen.getByRole('radio')

    expect(input).toBeDisabled()
    expect(input).toBeInvalid()
  })

  it('can trigger a change event', () => {
    const handleChange = jest.fn()

    render(<Radio onChange={handleChange} />)

    const input = screen.getByRole('radio')

    input?.click()

    expect(handleChange).toHaveBeenCalled()
  })

  it('does not trigger a change event when disabled', () => {
    const handleChange = jest.fn()

    render(<Radio disabled onChange={handleChange} />)

    const input = screen.getByRole('radio')

    input?.click()

    expect(handleChange).not.toHaveBeenCalled()
  })

  it('can trigger a change event by clicking on label', () => {
    const handleChange = jest.fn()

    const { container } = render(<Radio onChange={handleChange} />)

    const label = container.querySelector('label')

    label?.click()

    expect(handleChange).toHaveBeenCalled()
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLInputElement>()

    render(<Radio ref={ref} />)

    const input = screen.getByRole('radio')

    expect(ref.current).toBe(input)
  })
})
