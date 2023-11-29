import { render } from '@testing-library/react'
import { createRef } from 'react'
import { Header, HeaderProps } from './Header'
import '@testing-library/jest-dom'

describe('Header', () => {
  const defaultProps: HeaderProps = {
    logoLink: '/',
  }

  it('renders', () => {
    const { container } = render(<Header {...defaultProps} />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Header {...defaultProps} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-header')
  })

  it('renders an additional class name', () => {
    const { container } = render(<Header {...defaultProps} className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('extra')
    expect(component).toHaveClass('amsterdam-header')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<Header {...defaultProps} ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('renders with a logo link', () => {
    const { container } = render(<Header {...defaultProps} logoLink="/home" />)

    const logoLink = container.querySelector('.amsterdam-header__logo-link')

    expect(logoLink).toHaveAttribute('href', '/home')
  })

  it('renders with a logo link title', () => {
    const { container } = render(<Header {...defaultProps} logoLinkTitle="Go to homepage" />)

    const logoLinkTitle = container.querySelector('.amsterdam-visually-hidden')

    expect(logoLinkTitle).toHaveTextContent('Go to homepage')
  })

  it('renders with a title', () => {
    const { container } = render(<Header {...defaultProps} title="Header Title" />)

    const title = container.querySelector('.amsterdam-header__column--title')

    expect(title).toBeInTheDocument()
    expect(title).toHaveTextContent('Header Title')
  })

  it('renders with a menu', () => {
    const { container } = render(<Header {...defaultProps} menu={<div>Menu Content</div>} />)

    const menu = container.querySelector('.amsterdam-header__column--menu')

    expect(menu).toBeInTheDocument()
    expect(menu).toHaveTextContent('Menu Content')
  })
})
