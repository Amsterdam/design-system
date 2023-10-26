import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Footer } from './Footer'
import '@testing-library/jest-dom'

describe('Footer', () => {
  it('renders a HTML footer element', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')

    expect(footer).toBeInTheDocument()
    expect(footer).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const footerRender = render(<Footer />)
    const { container: footerTopRender } = render(<Footer.Top />)
    const { container: footerBottomRender } = render(<Footer.Bottom />)

    const footer = footerRender.getByRole('contentinfo')
    const footerTop = footerTopRender.querySelector(':only-child')
    const footerBottom = footerBottomRender.querySelector(':only-child')

    expect(footer).toHaveClass('amsterdam-footer')
    expect(footerTop).toHaveClass('amsterdam-footer__top')
    expect(footerBottom).toHaveClass('amsterdam-footer__bottom')
  })

  it('can have a additional class name', () => {
    const footerRender = render(<Footer className="extra" />)
    const { container: footerTopRender } = render(<Footer.Top className="extra" />)
    const { container: footerBottomRender } = render(<Footer.Bottom className="extra" />)

    const footer = footerRender.getByRole('contentinfo')
    const footerTop = footerTopRender.querySelector(':only-child')
    const footerBottom = footerBottomRender.querySelector(':only-child')

    expect(footer).toHaveClass('extra')
    expect(footerTop).toHaveClass('extra')
    expect(footerBottom).toHaveClass('extra')

    expect(footer).toHaveClass('amsterdam-footer')
    expect(footerTop).toHaveClass('amsterdam-footer__top')
    expect(footerBottom).toHaveClass('amsterdam-footer__bottom')
  })

  it('supports ForwardRef in React', () => {
    const footerRef = createRef<HTMLElement>()
    const footerTopRef = createRef<HTMLDivElement>()
    const footerBottomRef = createRef<HTMLDivElement>()

    const footerRender = render(<Footer ref={footerRef} />)
    const { container: footerTopRender } = render(<Footer.Top ref={footerTopRef} />)
    const { container: footerBottomRender } = render(<Footer.Bottom ref={footerBottomRef} />)

    const footer = footerRender.getByRole('contentinfo')
    const footerTop = footerTopRender.querySelector(':only-child')
    const footerBottom = footerBottomRender.querySelector(':only-child')

    expect(footerRef.current).toBe(footer)
    expect(footerTopRef.current).toBe(footerTop)
    expect(footerBottomRef.current).toBe(footerBottom)
  })
})
