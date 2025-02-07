import { ChevronRightIcon } from '@amsterdam/design-system-react-icons'
import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { FooterMenuLink } from './FooterMenuLink'
import '@testing-library/jest-dom'

describe('Page menu link', () => {
  it('renders with href attribute', () => {
    render(<FooterMenuLink href="#">Link</FooterMenuLink>)

    const component = screen.getByRole('link')

    expect(component).toBeInTheDocument()
    expect(component).toHaveAttribute('href', '#')
  })

  it('renders a design system BEM class name', () => {
    render(<FooterMenuLink href="#">Link</FooterMenuLink>)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-footer__menu-link')
  })

  it('renders an additional class name', () => {
    render(
      <FooterMenuLink className="extra" href="#">
        Link
      </FooterMenuLink>,
    )

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-footer__menu-link extra')
  })

  it('does not render an icon by default', () => {
    const { container } = render(<FooterMenuLink href="#">Link</FooterMenuLink>)

    const svg = container.querySelector('.ams-icon')

    expect(svg).not.toBeInTheDocument()
  })

  it('renders an icon when specified', () => {
    const { container } = render(
      <FooterMenuLink href="#" icon={ChevronRightIcon}>
        Link
      </FooterMenuLink>,
    )

    const svg = container.querySelector('.ams-icon')

    expect(svg).toBeInTheDocument()
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLAnchorElement>()

    render(
      <FooterMenuLink className="extra" href="#" ref={ref}>
        Link
      </FooterMenuLink>,
    )

    const component = screen.getByRole('link')

    expect(ref.current).toBe(component)
  })
})
