import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { HeaderMenuLink } from './HeaderMenuLink'
import '@testing-library/jest-dom'

describe('Breadcrumb link', () => {
  it('renders', () => {
    render(<HeaderMenuLink href="/" />)

    const component = screen.getByRole('listitem')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<HeaderMenuLink href="/" />)

    const item = screen.getByRole('listitem')

    expect(item).toHaveClass('ams-header__menu-item')

    const link = screen.getByRole('link')

    expect(link).toHaveClass('ams-header__menu-link')
  })

  it('renders an additional class name', () => {
    render(<HeaderMenuLink href="/" className="extra" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-header__menu-link extra')
  })

  it('renders the href attribute', () => {
    render(<HeaderMenuLink href="/" />)

    const component = screen.getByRole('link')

    expect(component).toHaveAttribute('href', '/')
  })

  it('renders the ‘fixed’ prop classname', () => {
    render(<HeaderMenuLink href="/" fixed />)

    const component = screen.getByRole('listitem')

    expect(component).toHaveClass('ams-header__menu-item--fixed')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLAnchorElement>()

    render(<HeaderMenuLink href="/" ref={ref} />)

    const component = screen.getByRole('link')

    expect(ref.current).toBe(component)
  })
})
