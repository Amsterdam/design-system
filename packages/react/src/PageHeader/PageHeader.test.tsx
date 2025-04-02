import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef } from 'react'
import './matchMedia.mock' // Must be imported before PageHeader
import { PageHeader } from './PageHeader'
import '@testing-library/jest-dom'

describe('Page Header', () => {
  it('renders', () => {
    render(<PageHeader />)

    const component = screen.getByRole('banner')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<PageHeader />)

    const component = screen.getByRole('banner')

    expect(component).toHaveClass('ams-header')
  })

  it('renders an additional class name', () => {
    render(<PageHeader className="extra" />)

    const component = screen.getByRole('banner')

    expect(component).toHaveClass('extra')
    expect(component).toHaveClass('ams-header')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    render(<PageHeader ref={ref} />)

    const component = screen.getByRole('banner')

    expect(ref.current).toBe(component)
  })

  it('renders a logo link', () => {
    render(<PageHeader />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-header__logo-link')
  })

  it('renders a different brand logo', () => {
    const { container } = render(<PageHeader logoBrand="ggd-amsterdam" />)

    const component = container.querySelector('.ams-logo__text-secondary')

    expect(component).toBeInTheDocument()
  })

  it('renders a custom logo link', () => {
    render(<PageHeader logoLink="/home" />)

    const logoLink = screen.getByRole('link')

    expect(logoLink).toHaveAttribute('href', '/home')
  })

  it('renders a custom logo link title', () => {
    render(<PageHeader logoLinkTitle="Go to homepage" />)

    const logoLinkTitle = screen.getByRole('link', { name: 'Go to homepage' })

    expect(logoLinkTitle).toBeInTheDocument()
  })

  it('renders an application name', () => {
    render(<PageHeader brandName="Application name" />)

    const brandName = screen.getByText('Application name')

    expect(brandName).toBeInTheDocument()
  })

  it('renders the correct class for the responsive logo', () => {
    const { container } = render(<PageHeader brandName="Application name" />)

    const logoContainer = container.querySelector('.ams-header__logo-container')

    expect(logoContainer).toBeInTheDocument()
  })

  it('renders a nav section', () => {
    render(<PageHeader>Test</PageHeader>)

    const component = screen.getByRole('navigation')

    expect(component).toHaveClass('ams-header__navigation')
  })

  it('renders a nav section with a custom label', () => {
    render(<PageHeader navigationLabel="Custom Navigation">Test</PageHeader>)

    const component = screen.getByRole('navigation', { name: 'Custom Navigation' })

    expect(component).toBeInTheDocument()
  })

  it('renders a menu', () => {
    render(<PageHeader menuItems={<PageHeader.MenuLink>Menu Item</PageHeader.MenuLink>} />)

    const component = screen.getByRole('list')

    expect(component).toHaveClass('ams-header__menu')
  })

  it('renders menu items', () => {
    render(
      <PageHeader
        menuItems={[
          <PageHeader.MenuLink href="/" key={1}>
            Menu Item 1
          </PageHeader.MenuLink>,
          <PageHeader.MenuLink href="/" key={2}>
            Menu Item 2
          </PageHeader.MenuLink>,
        ]}
      />,
    )

    const item1 = screen.getByRole('link', { name: 'Menu Item 1' })
    const item2 = screen.getByRole('link', { name: 'Menu Item 2' })

    expect(item1).toBeInTheDocument()
    expect(item2).toBeInTheDocument()
  })

  it('renders a menu button', () => {
    render(<PageHeader>Test</PageHeader>)

    const component = screen.getByRole('button', { name: 'Menu' })

    expect(component).toHaveClass('ams-header__mega-menu-button')
  })

  it('renders a menu button icon', () => {
    const { container } = render(<PageHeader>Test</PageHeader>)

    const component = container.querySelector('.ams-header__menu-icon')

    expect(component).toBeInTheDocument()
  })

  it('renders a custom menu button text', () => {
    render(<PageHeader menuButtonText="Custom button text">Test</PageHeader>)

    const component = screen.getByRole('button', { name: 'Custom button text' })

    expect(component).toBeInTheDocument()
  })

  it('renders the correct class when noMenuButtonOnWideWindow is true', () => {
    render(<PageHeader noMenuButtonOnWideWindow>Test</PageHeader>)

    const component = screen.getByRole('listitem')

    expect(component).toHaveClass('ams-header__mega-menu-button-item--hide-on-wide-window')
  })

  it('opens and closes the mega menu', async () => {
    const user = userEvent.setup()

    const { container } = render(<PageHeader>Test</PageHeader>)

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
