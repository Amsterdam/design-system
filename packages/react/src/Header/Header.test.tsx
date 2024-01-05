import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Header, HeaderProps } from './Header'
import '@testing-library/jest-dom'

describe('Header', () => {
  const defaultProps: HeaderProps = {
    logoLink: '/',
  }

  it('renders', () => {
    render(<Header {...defaultProps} />)

    const component = screen.getByRole('banner')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<Header {...defaultProps} />)

    const component = screen.getByRole('banner')

    expect(component).toHaveClass('amsterdam-header')
  })

  it('renders an additional class name', () => {
    render(<Header {...defaultProps} className="extra" />)

    const component = screen.getByRole('banner')

    expect(component).toHaveClass('extra')
    expect(component).toHaveClass('amsterdam-header')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    render(<Header {...defaultProps} ref={ref} />)

    const component = screen.getByRole('banner')

    expect(ref.current).toBe(component)
  })

  it('renders with a logo link', () => {
    render(<Header {...defaultProps} logoLink="/home" />)

    const logoLink = screen.getByRole('link')

    expect(logoLink).toHaveAttribute('href', '/home')
  })

  it('renders with a logo link title', () => {
    render(<Header {...defaultProps} logoLinkTitle="Go to homepage" />)

    const logoLinkTitle = screen.getByRole('link', { name: 'Go to homepage' })

    expect(logoLinkTitle).toHaveTextContent('Go to homepage')
  })

  it('renders with links', () => {
    const { container } = render(<Header {...defaultProps} links={<div>Menu Content</div>} />)

    const menu = container.querySelector('.amsterdam-header__links')

    expect(menu).toBeInTheDocument()
    expect(menu).toHaveTextContent('Menu Content')
  })

  it('renders with menu button', () => {
    render(<Header {...defaultProps} menu={<nav>Navigation</nav>} />)

    const menu = screen.getByRole('button', { name: 'Open Menu' })

    expect(menu).toBeInTheDocument()
  })
})
