import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { IconButton } from './IconButton'
import '@testing-library/jest-dom'

describe('Icon button', () => {
  it('renders', () => {
    render(<IconButton label="Test" />)

    const component = screen.getByRole('button')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<IconButton label="Test" />)

    const component = screen.getByRole('button')

    expect(component).toHaveClass('ams-icon-button')
  })

  it('renders an additional class name', () => {
    render(<IconButton label="Test" className="extra" />)

    const component = screen.getByRole('button')

    expect(component).toHaveClass('ams-icon-button extra')
  })

  it('renders an accessible label', () => {
    render(<IconButton label="Test" className="extra" />)

    const component = screen.getByRole('button', { name: 'Test' })

    expect(component).toBeInTheDocument()
  })

  it('renders the class name for contrast color', () => {
    render(<IconButton label="Test" contrastColor />)

    const component = screen.getByRole('button')

    expect(component).toHaveClass('ams-icon-button--contrast-color')
  })

  it('renders the class name for inverse color', () => {
    render(<IconButton label="Test" inverseColor />)

    const component = screen.getByRole('button')

    expect(component).toHaveClass('ams-icon-button--inverse-color')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLButtonElement>()

    render(<IconButton label="Test" ref={ref} />)

    const component = screen.getByRole('button')

    expect(ref.current).toBe(component)
  })
})
