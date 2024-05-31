import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { ErrorMessage } from './ErrorMessage'
import '@testing-library/jest-dom'

describe('Error message', () => {
  it('renders', () => {
    render(<ErrorMessage />)
    const component = screen.getByRole('paragraph')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<ErrorMessage />)
    const component = screen.getByRole('paragraph')

    expect(component).toHaveClass('ams-error-message')
  })

  it('renders an additional class name', () => {
    render(<ErrorMessage className="extra" />)
    const component = screen.getByRole('paragraph')

    expect(component).toHaveClass('ams-error-message extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLParagraphElement>()

    render(<ErrorMessage ref={ref} />)
    const component = screen.getByRole('paragraph')

    expect(ref.current).toBe(component)
  })
})
