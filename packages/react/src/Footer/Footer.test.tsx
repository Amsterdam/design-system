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

    const footer = screen.getByRole('contentinfo')

    expect(footer).toHaveClass('amsterdam-footer')
  })

  it('renders an additional class name', () => {
    render(<Footer className="extra" />)

    const footer = screen.getByRole('contentinfo')

    expect(footer).toHaveClass('amsterdam-footer extra')
  })

  it('supports ForwardRef in React', () => {
    const footerRef = createRef<HTMLElement>()

    const footerRender = render(<Footer ref={footerRef} />)

    const footer = footerRender.getByRole('contentinfo')

    expect(footerRef.current).toBe(footer)
  })
})
