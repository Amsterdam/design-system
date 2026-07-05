/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes } from 'react'

import { PlusIcon } from '@amsterdam/design-system-react-icons'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef } from 'react'
import { describe, expect, it, vi } from 'vitest'

import { PageHeader } from './PageHeader'

import './matchMedia.mock'

describe('PageHeader', () => {
  it('renders', () => {
    render(<PageHeader />)

    const component = screen.getByRole('banner')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<PageHeader />)

    const component = screen.getByRole('banner')

    expect(component).toHaveClass('ams-page-header')
  })

  it('renders an extra class name', () => {
    render(<PageHeader className="extra" />)

    const component = screen.getByRole('banner')

    expect(component).toHaveClass('ams-page-header extra')
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

    expect(component).toHaveClass('ams-page-header__logo-link')
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

    const logoLinkTitle = screen.getByRole('link', { name: 'Gemeente Amsterdam logo Go to homepage' })

    expect(logoLinkTitle).toBeInTheDocument()
  })

  it('renders a custom accessible name for the logo', () => {
    render(<PageHeader logoAccessibleName="Custom accessible name" />)

    const logoLinkTitle = screen.getByRole('link', { name: 'Custom accessible name Ga naar de homepage' })

    expect(logoLinkTitle).toBeInTheDocument()
  })

  it('renders an application name', () => {
    render(<PageHeader brandName="Application name" />)

    const brandName = screen.getByText('Application name')

    expect(brandName).toBeInTheDocument()
  })

  it('renders the correct class for the responsive logo', () => {
    const { container } = render(<PageHeader brandName="Application name" />)

    const logoContainer = container.querySelector('.ams-page-header__logo-container')

    expect(logoContainer).toBeInTheDocument()
  })

  it('renders a nav section', () => {
    render(<PageHeader>Test</PageHeader>)

    const component = screen.getByRole('navigation')

    expect(component).toHaveClass('ams-page-header__navigation')
  })

  it('renders a nav section with the default accessible name', () => {
    render(<PageHeader>Test</PageHeader>)

    const component = screen.getByRole('navigation', { name: 'Hoofdmenu' })

    expect(component).toBeInTheDocument()
  })

  it('renders a nav section with a custom accessible name', () => {
    render(<PageHeader navigationLabel="Custom Navigation">Test</PageHeader>)

    const component = screen.getByRole('navigation', { name: 'Custom Navigation' })

    expect(component).toBeInTheDocument()
  })

  it('renders a menu', () => {
    render(<PageHeader menuItems={<PageHeader.MenuLink>Menu Item</PageHeader.MenuLink>} />)

    const component = screen.getByRole('list')

    expect(component).toHaveClass('ams-page-header__menu')
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

    const component = screen.getByRole('button', { hidden: true, name: 'Laat navigatiemenu zien' })

    expect(component).toHaveClass('ams-page-header__mega-menu-button')
  })

  it('renders a menu button icon', () => {
    const { container } = render(<PageHeader>Test</PageHeader>)

    const component = container.querySelector('.ams-page-header__menu-icon')

    expect(component).toBeInTheDocument()
  })

  it('renders a custom menu button text', () => {
    render(<PageHeader menuButtonText="Custom button text">Test</PageHeader>)

    const component = screen.getAllByText('Custom button text')

    expect(component[0]).toBeInTheDocument()
  })

  it('renders the correct class when noMenuButtonOnWideWindow is true', () => {
    render(<PageHeader noMenuButtonOnWideWindow>Test</PageHeader>)

    const component = screen.getByRole('listitem', { hidden: true })

    expect(component).toHaveClass('ams-page-header__mega-menu-button-item--hide-on-wide-window')
  })

  it('opens and closes the mega menu', async () => {
    const user = userEvent.setup()

    const { container } = render(<PageHeader>Test</PageHeader>)

    const closedMegaMenu = container.querySelector('.ams-page-header__mega-menu--closed')

    expect(closedMegaMenu).toBeInTheDocument()

    const menuButton = screen.getByRole('button', { hidden: true, name: 'Laat navigatiemenu zien' })

    await user.click(menuButton)

    const openMegaMenu = container.querySelector('.ams-page-header__mega-menu')

    expect(openMegaMenu).toBeInTheDocument()
    expect(openMegaMenu).not.toHaveClass('ams-page-header__mega-menu--closed')
  })

  it('updates the menu button text for screen readers when the menu is opened and closed', async () => {
    const user = userEvent.setup()

    render(<PageHeader>Test</PageHeader>)

    const menuButton = screen.getByRole('button', { hidden: true })

    expect(menuButton).toHaveTextContent('Laat navigatiemenu zien')

    await user.click(menuButton)

    expect(menuButton).toHaveTextContent('Verberg navigatiemenu')

    await user.click(menuButton)

    expect(menuButton).toHaveTextContent('Laat navigatiemenu zien')
  })

  it('renders custom texts for screen readers on the menu button', async () => {
    const user = userEvent.setup()

    render(
      <PageHeader menuButtonTextForHide="Custom hide text" menuButtonTextForShow="Custom show text">
        Test
      </PageHeader>,
    )

    const menuButton = screen.getByRole('button', { hidden: true })

    expect(menuButton).toHaveTextContent('Custom show text')

    await user.click(menuButton)

    expect(menuButton).toHaveTextContent('Custom hide text')
  })

  it('closes the mega menu when it is open and the screen width passes the breakpoint', async () => {
    let changeListener: (() => void) | undefined
    const mediaQueryList = {
      addEventListener: vi.fn((_event: string, listener: () => void) => {
        changeListener = listener
      }),
      matches: false,
      removeEventListener: vi.fn(),
    }

    const originalMatchMedia = window.matchMedia
    window.matchMedia = vi.fn().mockReturnValue(mediaQueryList as unknown as MediaQueryList)

    try {
      const user = userEvent.setup()
      const { container } = render(<PageHeader noMenuButtonOnWideWindow>Test</PageHeader>)

      const menuButton = screen.getByRole('button', { hidden: true, name: 'Laat navigatiemenu zien' })
      await user.click(menuButton)

      expect(container.querySelector('.ams-page-header__mega-menu')).not.toHaveClass(
        'ams-page-header__mega-menu--closed',
      )

      // Simulate the viewport crossing the 'wide' breakpoint
      mediaQueryList.matches = true
      act(() => {
        changeListener?.()
      })

      expect(container.querySelector('.ams-page-header__mega-menu')).toHaveClass('ams-page-header__mega-menu--closed')
    } finally {
      window.matchMedia = originalMatchMedia
    }
  })

  it('keeps the mega menu closed after its button reappears', async () => {
    let changeListener: (() => void) | undefined
    const mediaQueryList = {
      addEventListener: vi.fn((_event: string, listener: () => void) => {
        changeListener = listener
      }),
      matches: false,
      removeEventListener: vi.fn(),
    }

    const originalMatchMedia = window.matchMedia
    window.matchMedia = vi.fn().mockReturnValue(mediaQueryList as unknown as MediaQueryList)

    try {
      const user = userEvent.setup()
      const { container } = render(<PageHeader noMenuButtonOnWideWindow>Test</PageHeader>)

      const menuButton = screen.getByRole('button', { hidden: true, name: 'Laat navigatiemenu zien' })
      await user.click(menuButton)

      // Cross the 'wide' breakpoint: the button is hidden and the menu closes
      mediaQueryList.matches = true
      act(() => {
        changeListener?.()
      })

      expect(container.querySelector('.ams-page-header__mega-menu')).toHaveClass('ams-page-header__mega-menu--closed')

      // Cross back below the breakpoint: the menu must stay closed, not reopen on its own
      mediaQueryList.matches = false
      act(() => {
        changeListener?.()
      })

      expect(container.querySelector('.ams-page-header__mega-menu')).toHaveClass('ams-page-header__mega-menu--closed')
    } finally {
      window.matchMedia = originalMatchMedia
    }
  })

  it('renders a short brand name', () => {
    render(<PageHeader brandName="Application name" brandNameShort="App" />)

    const component = screen.getByText('App')

    expect(component).toBeInTheDocument()
    expect(component).toHaveClass('ams-page-header__brand-name-short')
  })

  it('renders a custom logo link component', () => {
    const CustomLink = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => <a data-test {...props} />

    render(<PageHeader logoLinkComponent={CustomLink} />)

    const customLink = screen.getByRole('link', { name: 'Gemeente Amsterdam logo Ga naar de homepage' })

    expect(customLink).toHaveAttribute('data-test')
  })

  it('renders a custom icon', () => {
    render(<PageHeader menuButtonIcon={<PlusIcon aria-label="plus-icon" className="test-class" />}>Test</PageHeader>)

    const icon = screen.getByLabelText('plus-icon')

    expect(icon).toHaveClass('test-class')
  })

  it('passes additional props', () => {
    render(<PageHeader aria-hidden="false" data-test="data-test" id="id" />)

    const component = screen.getByRole('banner')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })

  it('calls onOpenChange with the new state when the menu button is clicked', async () => {
    const onOpenChange = vi.fn()
    const user = userEvent.setup()

    const { container } = render(<PageHeader onOpenChange={onOpenChange}>Test</PageHeader>)

    const menuButton = screen.getByRole('button', { hidden: true, name: 'Laat navigatiemenu zien' })

    await user.click(menuButton)

    expect(onOpenChange).toHaveBeenCalledTimes(1)
    expect(onOpenChange).toHaveBeenCalledWith(true)
    expect(container.querySelector('.ams-page-header__mega-menu')).not.toHaveClass('ams-page-header__mega-menu--closed')

    await user.click(menuButton)

    expect(onOpenChange).toHaveBeenLastCalledWith(false)
  })

  it('opens the mega menu on mount when defaultOpen is set', () => {
    const { container } = render(<PageHeader defaultOpen>Test</PageHeader>)

    expect(container.querySelector('.ams-page-header__mega-menu')).not.toHaveClass('ams-page-header__mega-menu--closed')
  })

  it('fires onOpenChange when the open mega menu is force-closed on a wide window', async () => {
    let changeListener: (() => void) | undefined
    const mediaQueryList = {
      addEventListener: vi.fn((_event: string, listener: () => void) => {
        changeListener = listener
      }),
      matches: false,
      removeEventListener: vi.fn(),
    }

    const originalMatchMedia = window.matchMedia
    window.matchMedia = vi.fn().mockReturnValue(mediaQueryList as unknown as MediaQueryList)

    try {
      const onOpenChange = vi.fn()
      const user = userEvent.setup()
      render(
        <PageHeader noMenuButtonOnWideWindow onOpenChange={onOpenChange}>
          Test
        </PageHeader>,
      )

      const menuButton = screen.getByRole('button', { hidden: true, name: 'Laat navigatiemenu zien' })
      await user.click(menuButton)

      expect(onOpenChange).toHaveBeenLastCalledWith(true)

      // Simulate the viewport crossing the 'wide' breakpoint: the button hides and the menu force-closes.
      mediaQueryList.matches = true
      act(() => {
        changeListener?.()
      })

      expect(onOpenChange).toHaveBeenLastCalledWith(false)
    } finally {
      window.matchMedia = originalMatchMedia
    }
  })

  describe('when controlled', () => {
    it('renders the mega menu open when open is true', () => {
      const { container } = render(<PageHeader open>Test</PageHeader>)

      expect(container.querySelector('.ams-page-header__mega-menu')).not.toHaveClass(
        'ams-page-header__mega-menu--closed',
      )
      expect(screen.getByRole('button', { hidden: true })).toHaveAttribute('aria-expanded', 'true')
    })

    it('renders the mega menu closed when open is false', () => {
      const { container } = render(<PageHeader open={false}>Test</PageHeader>)

      expect(container.querySelector('.ams-page-header__mega-menu')).toHaveClass('ams-page-header__mega-menu--closed')
    })

    it('does not toggle internally when controlled', async () => {
      const user = userEvent.setup()

      const { container } = render(<PageHeader open={false}>Test</PageHeader>)

      const menuButton = screen.getByRole('button', { hidden: true, name: 'Laat navigatiemenu zien' })

      await user.click(menuButton)

      expect(container.querySelector('.ams-page-header__mega-menu')).toHaveClass('ams-page-header__mega-menu--closed')
    })

    it('calls onOpenChange with the desired next state without changing itself', async () => {
      const onOpenChange = vi.fn()
      const user = userEvent.setup()

      const { container } = render(
        <PageHeader onOpenChange={onOpenChange} open={false}>
          Test
        </PageHeader>,
      )

      await user.click(screen.getByRole('button', { hidden: true, name: 'Laat navigatiemenu zien' }))

      expect(onOpenChange).toHaveBeenCalledTimes(1)
      expect(onOpenChange).toHaveBeenCalledWith(true)
      expect(container.querySelector('.ams-page-header__mega-menu')).toHaveClass('ams-page-header__mega-menu--closed')
    })

    it('responds to open prop changes', () => {
      const { container, rerender } = render(<PageHeader open={false}>Test</PageHeader>)

      expect(container.querySelector('.ams-page-header__mega-menu')).toHaveClass('ams-page-header__mega-menu--closed')

      rerender(<PageHeader open>Test</PageHeader>)

      expect(container.querySelector('.ams-page-header__mega-menu')).not.toHaveClass(
        'ams-page-header__mega-menu--closed',
      )
    })

    it('ignores defaultOpen when open is provided', () => {
      const { container } = render(
        <PageHeader defaultOpen open={false}>
          Test
        </PageHeader>,
      )

      expect(container.querySelector('.ams-page-header__mega-menu')).toHaveClass('ams-page-header__mega-menu--closed')
    })

    it('notifies but does not change itself when force-closed on a wide window', () => {
      let changeListener: (() => void) | undefined
      const mediaQueryList = {
        addEventListener: vi.fn((_event: string, listener: () => void) => {
          changeListener = listener
        }),
        matches: false,
        removeEventListener: vi.fn(),
      }

      const originalMatchMedia = window.matchMedia
      window.matchMedia = vi.fn().mockReturnValue(mediaQueryList as unknown as MediaQueryList)

      try {
        const onOpenChange = vi.fn()
        const { container } = render(
          <PageHeader noMenuButtonOnWideWindow onOpenChange={onOpenChange} open>
            Test
          </PageHeader>,
        )

        // Cross the 'wide' breakpoint so the button hides while the parent still controls `open` as true.
        mediaQueryList.matches = true
        act(() => {
          changeListener?.()
        })

        // The component requests a close via the callback but leaves the visual state to the parent.
        expect(onOpenChange).toHaveBeenCalledWith(false)
        expect(container.querySelector('.ams-page-header__mega-menu')).not.toHaveClass(
          'ams-page-header__mega-menu--closed',
        )
      } finally {
        window.matchMedia = originalMatchMedia
      }
    })
  })

  describe('controlled/uncontrolled switch warning', () => {
    it('warns when switching from uncontrolled to controlled', () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})

      const { rerender } = render(<PageHeader>Test</PageHeader>)

      rerender(<PageHeader open>Test</PageHeader>)

      expect(warn).toHaveBeenCalledWith(expect.stringContaining('uncontrolled to controlled'))

      warn.mockRestore()
    })

    it('warns when switching from controlled to uncontrolled', () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})

      const { rerender } = render(<PageHeader open>Test</PageHeader>)

      rerender(<PageHeader>Test</PageHeader>)

      expect(warn).toHaveBeenCalledWith(expect.stringContaining('controlled to uncontrolled'))

      warn.mockRestore()
    })
  })
})
