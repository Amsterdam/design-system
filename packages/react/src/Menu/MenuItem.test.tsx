/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes, ComponentProps } from 'react'

import { DocumentIcon, StarIcon } from '@amsterdam/design-system-react-icons'
import { fireEvent, render, screen } from '@testing-library/react'
import { createRef, forwardRef } from 'react'
import { describe, expect, it, vi } from 'vitest'

import { Menu } from './Menu'

describe('MenuItem', () => {
  it('renders', () => {
    const { container } = render(<Menu.Item href="#" icon={DocumentIcon} label="Projecten" />)

    const listItem = screen.getByRole('listitem')
    const link = screen.getByRole('link')
    const icon = container.querySelector('svg')

    expect(listItem).toBeInTheDocument()
    expect(listItem).toBeVisible()
    expect(link).toBeInTheDocument()
    expect(link).toBeVisible()
    expect(icon).toBeInTheDocument()
    expect(icon).not.toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<Menu.Item href="#" icon={DocumentIcon} label="Projecten" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-menu__link')
  })

  it('renders an extra class name', () => {
    render(<Menu.Item className="extra" href="#" icon={DocumentIcon} label="Projecten" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-menu__link extra')
  })

  it('renders a nested submenu', () => {
    render(
      <Menu.Item href="#" icon={DocumentIcon} label="Projecten">
        <Menu.Link href="#">Overzicht</Menu.Link>
        <Menu.Link href="#">Planning</Menu.Link>
      </Menu.Item>,
    )

    const lists = screen.getAllByRole('list')
    const items = screen.getAllByRole('listitem')
    const links = screen.getAllByRole('link')

    expect(lists).toHaveLength(1)
    expect(items).toHaveLength(3)
    expect(links).toHaveLength(3)
  })

  it('does not render an empty submenu for falsey children', () => {
    render(
      <Menu.Item href="#" icon={DocumentIcon} label="Projecten">
        {false}
        {null}
      </Menu.Item>,
    )

    const lists = screen.queryAllByRole('list')

    expect(lists).toHaveLength(0)
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLAnchorElement>()

    render(<Menu.Item href="#" icon={DocumentIcon} label="Projecten" ref={ref} />)

    const component = screen.getByRole('link')

    expect(ref.current).toBe(component)
  })

  it('shows a custom icon', () => {
    render(<Menu.Item href="#" icon={<StarIcon className="test-class" />} label="Projecten" />)

    const component = screen.getByRole('link')
    const icon = component.querySelector('.test-class')

    expect(icon).toBeInTheDocument()
  })

  it('passes additional props', () => {
    render(
      <Menu.Item aria-hidden="false" data-test="data-test" href="#" icon={DocumentIcon} id="id" label="Projecten" />,
    )

    const component = screen.getByRole('link')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })

  it('renders a custom link component', () => {
    const CustomLink = ({ children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => (
      <a {...props} data-custom="true">
        {children}
      </a>
    )

    render(<Menu.Item href="/test" icon={DocumentIcon} label="Projecten" linkComponent={CustomLink} />)

    const component = screen.getByRole('link')

    expect(component).toHaveAttribute('data-custom', 'true')
    expect(component).toHaveAttribute('href', '/test')
    expect(component).toHaveClass('ams-menu__link')
  })

  it('forwards the ref to an intrinsic link component', () => {
    const ref = createRef<HTMLAnchorElement>()

    render(<Menu.Item href="/test" icon={DocumentIcon} label="Projecten" linkComponent="a" ref={ref} />)

    expect(ref.current).toBe(screen.getByRole('link'))
  })

  it('does not forward the ref to a custom link component', () => {
    const ref = createRef<HTMLAnchorElement>()
    const CustomLink = forwardRef<HTMLAnchorElement, AnchorHTMLAttributes<HTMLAnchorElement>>(
      function CustomLink(props, customRef) {
        return <a {...props} ref={customRef} />
      },
    )

    render(<Menu.Item href="/test" icon={DocumentIcon} label="Projecten" linkComponent={CustomLink} ref={ref} />)

    expect(ref.current).toBeNull()
  })

  describe('when collapsible', () => {
    const renderCollapsible = (
      itemProps: Partial<ComponentProps<typeof Menu.Item>> = {},
      menuProps: Partial<ComponentProps<typeof Menu>> = {},
    ) =>
      render(
        <Menu collapsible {...menuProps}>
          <Menu.Item href="#" label="Projecten" {...itemProps}>
            <Menu.Link href="#child">Overzicht</Menu.Link>
          </Menu.Item>
        </Menu>,
      )

    it('does not render a toggle button when there is no submenu', () => {
      render(
        <Menu collapsible>
          <Menu.Item href="#" label="Projecten" />
        </Menu>,
      )

      expect(screen.queryByRole('button', { name: /Toon submenu van|Verberg submenu van/ })).not.toBeInTheDocument()
    })

    it('is collapsed by default and toggles when uncontrolled', () => {
      renderCollapsible()

      const item = screen.getByRole('link', { name: 'Projecten' }).closest('li')
      const button = screen.getByRole('button', { name: 'Toon submenu van Projecten' })

      expect(item).toBeInTheDocument()
      expect(item).toHaveClass('ams-menu__item--collapsed')
      expect(button).toHaveAttribute('aria-expanded', 'false')

      fireEvent.click(button)

      expect(item).not.toHaveClass('ams-menu__item--collapsed')
      expect(button).toHaveAttribute('aria-expanded', 'true')
      expect(button).toHaveAccessibleName('Verberg submenu van Projecten')

      fireEvent.click(button)

      expect(item).toHaveClass('ams-menu__item--collapsed')
      expect(button).toHaveAttribute('aria-expanded', 'false')
    })

    it('honours defaultExpanded', () => {
      renderCollapsible({ defaultExpanded: true })

      const item = screen.getByRole('link', { name: 'Projecten' }).closest('li')
      const button = screen.getByRole('button', { name: 'Verberg submenu van Projecten' })

      expect(item).toBeInTheDocument()
      expect(item).not.toHaveClass('ams-menu__item--collapsed')
      expect(button).toHaveAttribute('aria-expanded', 'true')
    })

    it('links the toggle button to the submenu via aria-controls', () => {
      renderCollapsible()

      const item = screen.getByRole('link', { name: 'Projecten' }).closest('li')
      const button = screen.getByRole('button', { name: 'Toon submenu van Projecten' })
      const submenuId = button.getAttribute('aria-controls')
      const submenu = item?.querySelector('.ams-menu__submenu')

      expect(submenuId).toBeTruthy()
      expect(submenu).toHaveAttribute('id', submenuId)
    })

    it('calls onToggle with the new expanded state', () => {
      const onToggle = vi.fn()

      renderCollapsible({ onToggle })

      const button = screen.getByRole('button', { name: 'Toon submenu van Projecten' })

      fireEvent.click(button)
      fireEvent.click(button)

      expect(onToggle).toHaveBeenCalledTimes(2)
      expect(onToggle).toHaveBeenNthCalledWith(1, true)
      expect(onToggle).toHaveBeenNthCalledWith(2, false)
    })

    it('uses custom accessible label phrases', () => {
      renderCollapsible({}, { hideAccessibleLabel: 'Hide', showAccessibleLabel: 'Show' })

      const button = screen.getByRole('button', { name: 'Show Projecten' })

      fireEvent.click(button)

      expect(button).toHaveAccessibleName('Hide Projecten')
    })

    it('respects the expanded prop in controlled mode', () => {
      renderCollapsible({ expanded: true })

      const item = screen.getByRole('link', { name: 'Projecten' }).closest('li')
      const button = screen.getByRole('button', { name: 'Verberg submenu van Projecten' })

      expect(item).toBeInTheDocument()
      expect(item).not.toHaveClass('ams-menu__item--collapsed')
      expect(button).toHaveAttribute('aria-expanded', 'true')
    })

    it('does not toggle internally in controlled mode', () => {
      renderCollapsible({ expanded: false })

      const item = screen.getByRole('link', { name: 'Projecten' }).closest('li')
      const button = screen.getByRole('button', { name: 'Toon submenu van Projecten' })

      fireEvent.click(button)

      expect(item).toBeInTheDocument()
      expect(item).toHaveClass('ams-menu__item--collapsed')
      expect(button).toHaveAttribute('aria-expanded', 'false')
    })

    it('calls onToggle with the desired next state in controlled mode', () => {
      const onToggle = vi.fn()

      renderCollapsible({ expanded: false, onToggle })

      fireEvent.click(screen.getByRole('button', { name: 'Toon submenu van Projecten' }))

      expect(onToggle).toHaveBeenCalledTimes(1)
      expect(onToggle).toHaveBeenCalledWith(true)
      expect(screen.getByRole('link', { name: 'Projecten' }).closest('li')).toHaveClass('ams-menu__item--collapsed')
    })

    it('moves focus to the toggle button when collapsing hides the focused submenu link', () => {
      renderCollapsible({ defaultExpanded: true })

      const button = screen.getByRole('button', { name: 'Verberg submenu van Projecten' })
      const nestedLink = screen.getByRole('link', { name: 'Overzicht' })

      nestedLink.focus()
      expect(nestedLink).toHaveFocus()

      fireEvent.click(button)

      expect(button).toHaveFocus()
    })

    it('moves focus to the toggle button when a parent collapses the submenu with the focused link', () => {
      const { rerender } = render(
        <Menu collapsible>
          <Menu.Item expanded href="#" label="Projecten">
            <Menu.Link href="#child">Overzicht</Menu.Link>
          </Menu.Item>
        </Menu>,
      )

      screen.getByRole('link', { name: 'Overzicht' }).focus()

      rerender(
        <Menu collapsible>
          <Menu.Item expanded={false} href="#" label="Projecten">
            <Menu.Link href="#child">Overzicht</Menu.Link>
          </Menu.Item>
        </Menu>,
      )

      expect(screen.getByRole('button', { name: 'Toon submenu van Projecten' })).toHaveFocus()
    })

    it('keeps focus on the toggle button when collapsing without focused submenu content', () => {
      renderCollapsible({ defaultExpanded: true })

      const button = screen.getByRole('button', { name: 'Verberg submenu van Projecten' })

      button.focus()

      fireEvent.click(button)

      expect(button).toHaveFocus()
    })
  })
})
