import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { PageHeaderMenuLink } from './PageHeaderMenuLink'
import '@testing-library/jest-dom'

describe('Page Header Menu Link', () => {
  it('renders', () => {
    render(<PageHeaderMenuLink href="/" />)

    const component = screen.getByRole('listitem')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<PageHeaderMenuLink href="/" />)

    const item = screen.getByRole('listitem')

    expect(item).toHaveClass('ams-page-header__menu-item')

    const link = screen.getByRole('link')

    expect(link).toHaveClass('ams-page-header__menu-link')
  })

  it('renders an additional class name', () => {
    render(<PageHeaderMenuLink className="extra" href="/" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-page-header__menu-link extra')
  })

  it('renders the href attribute', () => {
    render(<PageHeaderMenuLink href="/" />)

    const component = screen.getByRole('link')

    expect(component).toHaveAttribute('href', '/')
  })

  it('renders the ‘fixed’ prop classname', () => {
    render(<PageHeaderMenuLink fixed href="/" />)

    const component = screen.getByRole('listitem')

    expect(component).toHaveClass('ams-page-header__menu-item--fixed')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLAnchorElement>()

    render(<PageHeaderMenuLink href="/" ref={ref} />)

    const component = screen.getByRole('link')

    expect(ref.current).toBe(component)
  })
})
