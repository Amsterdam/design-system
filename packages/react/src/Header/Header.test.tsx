import { fireEvent } from '@testing-library/dom'
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

    expect(component).toHaveClass('ams-header extra')
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

    expect(logoLinkTitle).toBeInTheDocument()
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
    const { container } = render(<Header links={<div>Test content</div>} />)

    const menu = container.querySelector('.ams-header__links')

    expect(menu).toHaveTextContent('Test content')
  })

  it('renders with menu button and fires onClickMenu callback', () => {
    const onClickMenu = jest.fn()
    render(<Header onClickMenu={onClickMenu} />)

    const menuButton = screen.getByRole('button', { name: /menu/i })
    expect(menuButton).toBeInTheDocument()

    fireEvent.click(menuButton)
    expect(onClickMenu).toHaveBeenCalledTimes(1)
  })

  it('does not render menu button when onClickMenu is not provided', () => {
    render(<Header />)

    const menuButton = screen.queryByRole('button', { name: /menu/i })
    expect(menuButton).not.toBeInTheDocument()
  })
})
