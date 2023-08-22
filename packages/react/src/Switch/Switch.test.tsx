import { fireEvent, render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Switch } from './Switch'
import '@testing-library/jest-dom'

describe('Switch', () => {
  it('renders an element with role switch', () => {
    render(<Switch />)
    const switchElement = screen.getByRole('switch')

    expect(switchElement).toBeInTheDocument()
  })

  it('renders the Switch with the default state unchecked', () => {
    render(<Switch />)
    const switchElement = screen.getByRole('switch')

    expect(switchElement).not.toBeChecked()
  })

  it('sets the checked state when switch is clicked', () => {
    render(<Switch />)
    const switchElement = screen.getByRole('switch')

    expect(switchElement).not.toBeChecked()

    fireEvent.click(switchElement)

    expect(switchElement).toBeChecked()
  })

  it('renders a switch with label text when label is provided', () => {
    render(<Switch label="Switch label" />)
    // const switchElement = screen.getByRole('switch')
    const labelElement = screen.getByText('Switch label')

    expect(labelElement).toBeInTheDocument()
  })
})

it('is able to pass a React ref', () => {
  const ref = createRef<HTMLInputElement>()

  const { container } = render(<Switch ref={ref} />)

  const switchToggle = container.querySelector('input[type="checkbox"]')

  expect(ref.current).toBe(switchToggle)
})
