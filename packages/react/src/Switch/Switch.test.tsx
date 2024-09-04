import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Switch } from './Switch'
import '@testing-library/jest-dom'

describe('Switch', () => {
  it('renders an element with role switch', () => {
    render(<Switch />)

    const switchElement = screen.getByRole('switch')

    expect(switchElement).toBeInTheDocument()
    expect(switchElement).not.toBeChecked()
  })

  it('is not disabled by default', () => {
    render(<Switch />)

    const switchElement = screen.getByRole('switch')

    expect(switchElement).not.toBeDisabled()
  })

  it('can trigger a change event', () => {
    const handleChange = jest.fn()

    render(<Switch onChange={handleChange} />)

    const switchElement = screen.getByRole('switch')

    switchElement.click()

    expect(handleChange).toHaveBeenCalled()
  })

  it('does not trigger a change event when disabled', () => {
    const handleChange = jest.fn()

    render(<Switch disabled onChange={handleChange} />)

    const switchElement = screen.getByRole('switch')

    switchElement.click()

    expect(handleChange).not.toHaveBeenCalled()
  })

  it('does trigger a change event when clicking on associate label', () => {
    const handleChange = jest.fn()

    const MockImpl = () => {
      return (
        <>
          <label htmlFor="switch-label" data-testid="switch-label">
            Label
          </label>
          <Switch onChange={handleChange} id="switch-label" />
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

  it('renders an additional class name', () => {
    const { container } = render(<Switch className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-switch', 'extra')
  })

  it('is able to pass a React ref', () => {
    const ref = createRef<HTMLInputElement>()

    render(<Switch ref={ref} />)

    const switchElement = screen.getByRole('switch')

    expect(ref.current).toBe(switchElement)
  })
})
