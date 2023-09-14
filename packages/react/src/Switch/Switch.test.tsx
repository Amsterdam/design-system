import { fireEvent, render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Switch } from './Switch'
import '@testing-library/jest-dom'

describe('Switch', () => {
  it('renders an element with role switch', () => {
    render(<Switch label="Swith label" />)
    const switchElement = screen.getByRole('switch')

    expect(switchElement).toBeInTheDocument()
  })

  it('renders the Switch with the default state unchecked', () => {
    render(<Switch label="Swith label" />)
    const switchElement = screen.getByRole('switch')

    expect(switchElement).not.toBeChecked()
  })

  it('sets the checked state when switch is clicked', () => {
    render(<Switch label="Swith label" />)
    const switchElement = screen.getByRole('switch')

    expect(switchElement).not.toBeChecked()

    fireEvent.click(switchElement)

    expect(switchElement).toBeChecked()
  })

  it('renders a switch with label text when label is provided', () => {
    render(<Switch label="Swith label" />)
    const labelElement = screen.getByText('Switch label')

    expect(labelElement).toBeInTheDocument()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Switch label="Swith label" />)
    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-switch')
  })

  it('can have a additional class name', () => {
    const { container } = render(<Switch label="Swith label" />)
    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('extra')
    expect(component).toHaveClass('amsterdam-{{kebabCase name}}')
  })

  it('is able to pass a React ref', () => {
    const ref = createRef<HTMLInputElement>()
    const { container } = render(<Switch label="Swith label" ref={ref} />)

    const switchToggle = container.querySelector('input[type="checkbox"]')

    expect(ref.current).toBe(switchToggle)
  })
})
