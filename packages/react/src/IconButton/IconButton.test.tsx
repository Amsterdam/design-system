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

  it('renders the right on background light class', () => {
    render(<IconButton label="Test" onBackground="light" />)

    const component = screen.getByRole('button')

    expect(component).toHaveClass('ams-icon-button--on-background-light')
  })

  it('renders the right on background dark class', () => {
    render(<IconButton label="Test" onBackground="dark" />)

    const component = screen.getByRole('button')

    expect(component).toHaveClass('ams-icon-button--on-background-dark')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLButtonElement>()

    render(<IconButton label="Test" ref={ref} />)

    const component = screen.getByRole('button')

    expect(ref.current).toBe(component)
  })
})
