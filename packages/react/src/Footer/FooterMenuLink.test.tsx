import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Footer } from './Footer'
import '@testing-library/jest-dom'

describe('Footer Menu Link', () => {
  it('renders with href attribute', () => {
    render(<Footer.MenuLink href="#">Link</Footer.MenuLink>)

    const component = screen.getByRole('link')

    expect(component).toBeInTheDocument()
    expect(component).toHaveAttribute('href', '#')
  })

  it('renders a design system BEM class name', () => {
    render(<Footer.MenuLink href="#">Link</Footer.MenuLink>)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-footer__menu-link')
  })

  it('renders an additional class name', () => {
    render(
      <Footer.MenuLink className="extra" href="#">
        Link
      </Footer.MenuLink>,
    )

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-footer__menu-link extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLAnchorElement>()

    render(
      <Footer.MenuLink className="extra" href="#" ref={ref}>
        Link
      </Footer.MenuLink>,
    )

    const component = screen.getByRole('link')

    expect(ref.current).toBe(component)
  })
})
