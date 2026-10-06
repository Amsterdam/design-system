/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it, vi } from 'vitest'

import { Switch } from './Switch'

describe('Switch', () => {
  it('renders an element with role switch', () => {
    render(<Switch />)

    const switchElement = screen.getByRole('switch')

    expect(switchElement).toBeInTheDocument()
    expect(switchElement).not.toBeChecked()
  })

  it('takes its accessible name from its children', () => {
    render(<Switch>Meldingen ontvangen</Switch>)

    expect(screen.getByRole('switch', { name: 'Meldingen ontvangen' })).toBeInTheDocument()
  })

  it('renders the label text after the track', () => {
    render(<Switch>Meldingen ontvangen</Switch>)

    const label = screen.getByText('Meldingen ontvangen')

    expect(label.firstElementChild).toHaveClass('ams-switch__track-container')
  })

  it('renders the label text before the track', () => {
    render(<Switch labelPosition="start">Meldingen ontvangen</Switch>)

    const label = screen.getByText('Meldingen ontvangen')

    expect(label.lastElementChild).toHaveClass('ams-switch__track-container')
  })

  it('triggers a change event when clicking its own label text', () => {
    const handleChange = vi.fn()

    render(<Switch onChange={handleChange}>Meldingen ontvangen</Switch>)

    screen.getByText('Meldingen ontvangen').click()

    expect(handleChange).toHaveBeenCalled()
  })

  it('is not disabled by default', () => {
    render(<Switch />)

    const switchElement = screen.getByRole('switch')

    expect(switchElement).not.toBeDisabled()
  })

  it('can trigger a change event', () => {
    const handleChange = vi.fn()

    render(<Switch onChange={handleChange} />)

    const switchElement = screen.getByRole('switch')

    switchElement.click()

    expect(handleChange).toHaveBeenCalled()
  })

  it('does not trigger a change event when disabled', () => {
    const handleChange = vi.fn()

    render(<Switch disabled onChange={handleChange} />)

    const switchElement = screen.getByRole('switch')

    switchElement.click()

    expect(handleChange).not.toHaveBeenCalled()
  })

  it('does trigger a change event when clicking on associate label', () => {
    const handleChange = vi.fn()

    const MockImpl = () => {
      return (
        <>
          <label data-testid="switch-label" htmlFor="switch-label">
            Label
          </label>
          <Switch id="switch-label" onChange={handleChange} />
        </>
      )
    }

    render(<MockImpl />)
    const label = screen.getByTestId('switch-label')

    label.click()

    expect(handleChange).toHaveBeenCalled()
  })

  it('sets the checked state when switch is clicked', () => {
    render(<Switch />)

    const switchElement = screen.getByRole('switch')

    expect(switchElement).not.toBeChecked()

    switchElement.click()

    expect(switchElement).toBeChecked()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Switch />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-switch')
  })

  it('renders an extra class name', () => {
    const { container } = render(<Switch className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-switch extra')
  })

  it('is able to pass a React ref', () => {
    const ref = createRef<HTMLInputElement>()

    render(<Switch ref={ref} />)

    const switchElement = screen.getByRole('switch')

    expect(ref.current).toBe(switchElement)
  })

  it('passes additional props', () => {
    render(<Switch aria-hidden="false" data-test="data-test" id="id" />)

    const component = screen.getByRole('switch')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})
