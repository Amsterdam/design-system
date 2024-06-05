import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Header } from './Header'
import '@testing-library/jest-dom'

describe('Header', () => {
  it('renders', () => {
    render(<Header />)

    const component = screen.getByRole('banner')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<Header />)

    const component = screen.getByRole('banner')

    expect(component).toHaveClass('ams-header')
  })

  it('renders an additional class name', () => {
    render(<Header className="extra" />)

    const component = screen.getByRole('banner')

    expect(component).toHaveClass('extra')
    expect(component).toHaveClass('ams-header')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    render(<Header ref={ref} />)

    const component = screen.getByRole('banner')

    expect(ref.current).toBe(component)
  })

  it('renders with a logo link', () => {
    render(<Header logoLink="/home" />)

    const logoLink = screen.getByRole('link')

    expect(logoLink).toHaveAttribute('href', '/home')
  })

  it('renders with a logo link title', () => {
    render(<Header logoLinkTitle="Go to homepage" />)

    const logoLinkTitle = screen.getByRole('link', { name: 'Go to homepage' })

    expect(logoLinkTitle).toHaveTextContent('Go to homepage')
  })

  it('renders an application name', () => {
    render(<Header appName="Application name" />)

    const heading = screen.getByRole('heading', {
      name: 'Application name',
      level: 1,
    })

    expect(heading).toBeInTheDocument()
  })

  it('renders with links', () => {
    const { container } = render(<Header links={<div>Menu Content</div>} />)

    const menu = container.querySelector('.ams-header__links')

    expect(menu).toBeInTheDocument()
    expect(menu).toHaveTextContent('Menu Content')
  })

  it('renders with menu button', () => {
    render(<Header menu={<button>Menu Button</button>} />)

    const menu = screen.getByRole('button')

    expect(menu).toBeInTheDocument()
  })
})
