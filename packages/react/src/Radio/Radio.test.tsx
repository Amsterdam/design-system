/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { StarIcon } from '@amsterdam/design-system-react-icons'
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

  it('renders design system BEM class names', () => {
    const { container } = render(<Radio />)

    const wrapper = container.querySelector(':only-child')
    const input = screen.getByRole('radio')
    const label = container.querySelector('label')
    const circle = container.querySelector('.ams-radio__circle')
    const indicator = container.querySelector('.ams-radio__checked-indicator')

    expect(wrapper).toHaveClass('ams-radio')
    expect(input).toHaveClass('ams-radio__input')
    expect(label).toHaveClass('ams-radio__label')
    expect(circle).toBeInTheDocument()
    expect(indicator).toBeInTheDocument()
  })

  it('renders an extra class name', () => {
    const { container } = render(<Radio className="extra" />)

    const wrapper = container.querySelector(':only-child')

    expect(wrapper).toHaveClass('ams-radio extra')
  })

  describe('Checked state', () => {
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
  })

  describe('Invalid state', () => {
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
  })

  describe('Disabled state', () => {
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
  })

  describe('Disabled invalid state', () => {
    it('can have a disabled invalid state', () => {
      render(<Radio disabled invalid />)

      const input = screen.getByRole('radio')

      expect(input).toBeDisabled()
      expect(input).toBeInvalid()
    })
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

  it('can use a custom id', () => {
    const handleChange = jest.fn()

    const { container } = render(<Radio id="test-id" onChange={handleChange} />)

    const input = screen.getByRole('radio')

    expect(input).toHaveAttribute('id', 'test-id')

    const label = container.querySelector('label')

    label?.click()

    expect(handleChange).toHaveBeenCalled()
  })

  it('shows a custom icon', () => {
    const { container } = render(<Radio icon={<StarIcon className="test-class" />} />)

    const icon = container.querySelector('svg')

    expect(icon).toHaveClass('test-class')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLInputElement>()

    render(<Radio ref={ref} />)

    const input = screen.getByRole('radio')

    expect(ref.current).toBe(input)
  })
})
