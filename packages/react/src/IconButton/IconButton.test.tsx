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

  it('renders an extra class through the className prop', () => {
    render(<IconButton className="extra" label="Test" />)

    const component = screen.getByRole('button')

    expect(component).toHaveClass('ams-icon-button extra')
  })

  it('renders an accessible label', () => {
    render(<IconButton className="extra" label="Test" />)

    const component = screen.getByRole('button', { name: 'Test' })

    expect(component).toBeInTheDocument()
  })

  it('renders the class name for contrast color', () => {
    render(<IconButton color="contrast" label="Test" />)

    const component = screen.getByRole('button')

    expect(component).toHaveClass('ams-icon-button--contrast')
  })

  it('renders the class name for inverse color', () => {
    render(<IconButton color="inverse" label="Test" />)

    const component = screen.getByRole('button')

    expect(component).toHaveClass('ams-icon-button--inverse')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLButtonElement>()

    render(<IconButton label="Test" ref={ref} />)

    const component = screen.getByRole('button')

    expect(ref.current).toBe(component)
  })
})
