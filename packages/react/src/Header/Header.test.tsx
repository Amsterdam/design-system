import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef } from 'react'
import './matchMedia.mock' // Must be imported before Header
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

  it('renders a brand section', () => {
    const { container } = render(<Header />)

    const component = container.querySelector('.ams-header__branding')

    expect(component).toBeInTheDocument()
  })

  it('renders a logo link', () => {
    render(<Header />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-header__logo-link')
  })

  it('renders a different brand logo', () => {
    const { container } = render(<Header logoBrand="ggd-amsterdam" />)

    const component = container.querySelector('.ams-logo__text-secondary')

    expect(component).toBeInTheDocument()
  })

  it('renders a custom logo link', () => {
    render(<Header logoLink="/home" />)

    const logoLink = screen.getByRole('link')

    expect(logoLink).toHaveAttribute('href', '/home')
  })

  it('renders a custom logo link title', () => {
    render(<Header logoLinkTitle="Go to homepage" />)

    const logoLinkTitle = screen.getByRole('link', { name: 'Go to homepage' })

    expect(logoLinkTitle).toBeInTheDocument()
  })

  it('renders an application name', () => {
    render(<Header brandName="Application name" />)

    const heading = screen.getByRole('heading', {
      name: 'Application name',
      level: 1,
    })

    expect(heading).toBeInTheDocument()
  })

  it('renders a nav section', () => {
    render(<Header>Test</Header>)

    const component = screen.getByRole('navigation')

    expect(component).toHaveClass('ams-header__navigation')
  })

  it('renders a nav section with a custom label', () => {
    render(<Header navigationLabel="Custom Navigation">Test</Header>)

    const component = screen.getByRole('navigation', { name: 'Custom Navigation' })

    expect(component).toBeInTheDocument()
  })

  it('renders a menu', () => {
    render(<Header menuItems={<Header.MenuLink>Menu Item</Header.MenuLink>} />)

    const component = screen.getByRole('list')

    expect(component).toHaveClass('ams-header__menu')
  })

  it('renders menu items', () => {
    render(
      <Header
        menuItems={[
          <Header.MenuLink key={1} href="/">
            Menu Item 1
          </Header.MenuLink>,
          <Header.MenuLink key={2} href="/">
            Menu Item 2
          </Header.MenuLink>,
        ]}
      />,
    )

    const item1 = screen.getByRole('link', { name: 'Menu Item 1' })
    const item2 = screen.getByRole('link', { name: 'Menu Item 2' })

    expect(item1).toBeInTheDocument()
    expect(item2).toBeInTheDocument()
  })

  it('renders a menu button', () => {
    render(<Header>Test</Header>)

    const component = screen.getByRole('button', { name: 'Menu' })

    expect(component).toHaveClass('ams-header__mega-menu-button')
  })

  it('renders a menu button icon', () => {
    const { container } = render(<Header>Test</Header>)

    const component = container.querySelector('.ams-header__menu-icon')

    expect(component).toBeInTheDocument()
  })

  it('renders a custom menu button text', () => {
    render(<Header menuButtonText="Custom button text">Test</Header>)

    const component = screen.getByRole('button', { name: 'Custom button text' })

    expect(component).toBeInTheDocument()
  })

  it('renders the correct class when noMenuButtonOnWideWindow is true', () => {
    render(<Header noMenuButtonOnWideWindow>Test</Header>)

    const component = screen.getByRole('listitem')

    expect(component).toHaveClass('ams-header__mega-menu-button-item--hide-on-wide-window')
  })

  it('opens and closes the mega menu', async () => {
    const user = userEvent.setup()

    const { container } = render(<Header>Test</Header>)

    const closedMegaMenu = container.querySelector('.ams-header__mega-menu--closed')

    expect(closedMegaMenu).toBeInTheDocument()

    const menuButton = screen.getByRole('button', { name: 'Menu' })

    await user.click(menuButton)

    const openMegaMenu = container.querySelector('.ams-header__mega-menu')

    expect(openMegaMenu).toBeInTheDocument()
    expect(openMegaMenu).not.toHaveClass('ams-header__mega-menu--closed')
  })

  it.skip('it closes the mega menu when it is open and the screen width passes the breakpoint', () => {
    // TODO: Add this test
  })
})
