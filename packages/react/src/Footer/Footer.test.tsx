import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Footer } from './Footer'
import '@testing-library/jest-dom'

describe('Footer', () => {
  it('renders an HTML footer element', () => {
    render(<Footer />)

    const component = screen.getByRole('contentinfo')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<Footer />)

    const component = screen.getByRole('contentinfo')

    expect(component).toHaveClass('ams-footer')
  })

  it('renders an additional class name', () => {
    render(<Footer className="extra" />)

    const component = screen.getByRole('contentinfo')

    expect(component).toHaveClass('ams-footer extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    render(<Footer ref={ref} />)

    const component = screen.getByRole('contentinfo')

    expect(ref.current).toBe(component)
  })
})
