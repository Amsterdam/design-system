import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Figure } from './Figure'
import '@testing-library/jest-dom'

describe('Figure', () => {
  it('renders', () => {
    render(<Figure />)

    const component = screen.getByRole('figure')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<Figure />)

    const component = screen.getByRole('figure')

    expect(component).toHaveClass('ams-figure')
  })

  it('renders an additional class name', () => {
    render(<Figure className="extra" />)

    const component = screen.getByRole('figure')

    expect(component).toHaveClass('ams-figure extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    render(<Figure ref={ref} />)

    const component = screen.getByRole('figure')

    expect(ref.current).toBe(component)
  })
})
