/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes } from 'react'

import { DocumentIcon, StarIcon } from '@amsterdam/design-system-react-icons'
import { fireEvent, render, screen } from '@testing-library/react'
import { createRef, forwardRef } from 'react'
import { describe, expect, it, vi } from 'vitest'

import { Menu } from './Menu'

const renderCollapsible = (itemProps = {}, menuProps = {}) =>
  render(
    <Menu collapsible {...menuProps}>
      <Menu.Item href="#" icon={DocumentIcon} label="Projecten" {...itemProps}>
        <Menu.Link href="#">Overzicht</Menu.Link>
        <Menu.Link href="#">Planning</Menu.Link>
      </Menu.Item>
    </Menu>,
  )

const getCollapsibleItem = () => screen.getByRole('button', { name: /Projecten/ }).closest('li') as HTMLLIElement

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
    it('renders a toggle button for an item with a submenu', () => {
      renderCollapsible()

      const button = screen.getByRole('button', { name: 'Toon submenu van Projecten' })
      const submenu = getCollapsibleItem().querySelector('.ams-menu__submenu')
      const submenuId = button.getAttribute('aria-controls')

      expect(button).toBeInTheDocument()
      expect(button).toHaveAttribute('aria-expanded', 'false')
      expect(submenuId).toBeTruthy()
      expect(submenu).toHaveAttribute('id', submenuId)
    })

    it('uses the custom accessible labels from the parent Menu', () => {
      renderCollapsible({}, { hideAccessibleLabel: 'Sluit submenu van', showAccessibleLabel: 'Open submenu van' })

      const button = screen.getByRole('button', { name: 'Open submenu van Projecten' })

      fireEvent.click(button)

      expect(screen.getByRole('button', { name: 'Sluit submenu van Projecten' })).toHaveAttribute(
        'aria-expanded',
        'true',
      )
    })

    it('is collapsed by default', () => {
      renderCollapsible()

      expect(getCollapsibleItem()).toHaveClass('ams-menu__item--collapsed')
    })

    it('expands initially when defaultExpanded is set', () => {
      renderCollapsible({ defaultExpanded: true })

      expect(getCollapsibleItem()).not.toHaveClass('ams-menu__item--collapsed')
      expect(screen.getByRole('button', { name: 'Verberg submenu van Projecten' })).toHaveAttribute(
        'aria-expanded',
        'true',
      )
    })

    it('toggles the expanded state when the button is clicked', () => {
      renderCollapsible()

      const item = getCollapsibleItem()
      const button = screen.getByRole('button', { name: 'Toon submenu van Projecten' })

      fireEvent.click(button)

      expect(item).not.toHaveClass('ams-menu__item--collapsed')
      expect(screen.getByRole('button', { name: 'Verberg submenu van Projecten' })).toHaveAttribute(
        'aria-expanded',
        'true',
      )

      fireEvent.click(screen.getByRole('button', { name: 'Verberg submenu van Projecten' }))

      expect(item).toHaveClass('ams-menu__item--collapsed')
    })

    it('calls onToggle with the new expanded state when the button is clicked', () => {
      const onToggle = vi.fn()

      renderCollapsible({ onToggle })

      const button = screen.getByRole('button', { name: 'Toon submenu van Projecten' })

      fireEvent.click(button)
      fireEvent.click(button)

      expect(onToggle).toHaveBeenCalledTimes(2)
      expect(onToggle).toHaveBeenNthCalledWith(1, true)
      expect(onToggle).toHaveBeenNthCalledWith(2, false)
    })

    it('respects the expanded prop when true', () => {
      renderCollapsible({ expanded: true })

      expect(getCollapsibleItem()).not.toHaveClass('ams-menu__item--collapsed')
    })

    it('respects the expanded prop when false', () => {
      renderCollapsible({ expanded: false })

      expect(getCollapsibleItem()).toHaveClass('ams-menu__item--collapsed')
    })

    it('ignores defaultExpanded when expanded is provided', () => {
      renderCollapsible({ defaultExpanded: true, expanded: false })

      expect(getCollapsibleItem()).toHaveClass('ams-menu__item--collapsed')
    })

    it('does not toggle internally when controlled', () => {
      renderCollapsible({ expanded: false })

      const item = getCollapsibleItem()

      fireEvent.click(screen.getByRole('button', { name: 'Toon submenu van Projecten' }))

      expect(item).toHaveClass('ams-menu__item--collapsed')
    })

    it('does not render a toggle button when the Menu is not collapsible', () => {
      renderCollapsible({}, { collapsible: false })

      expect(screen.queryByRole('button')).not.toBeInTheDocument()
    })

    it('does not render a toggle button when there is no submenu', () => {
      render(
        <Menu collapsible>
          <Menu.Item href="#" icon={DocumentIcon} label="Projecten" />
        </Menu>,
      )

      expect(screen.queryByRole('button')).not.toBeInTheDocument()
    })

    it('moves focus to the toggle button when collapsing a focused submenu link', () => {
      renderCollapsible({ defaultExpanded: true })

      const button = screen.getByRole('button', { name: 'Verberg submenu van Projecten' })
      const childLink = screen.getByRole('link', { name: 'Overzicht' })

      childLink.focus()
      expect(childLink).toHaveFocus()

      fireEvent.click(button)

      expect(button).toHaveFocus()
    })

    it('toggles a nested submenu independently of its parent', () => {
      render(
        <Menu collapsible>
          <Menu.Item defaultExpanded href="#" label="Projecten">
            <Menu.Item href="#" label="Planning">
              <Menu.Link href="#">Mijlpalen</Menu.Link>
            </Menu.Item>
          </Menu.Item>
        </Menu>,
      )

      const parentButton = screen.getByRole('button', { name: 'Verberg submenu van Projecten' })
      const nestedButton = screen.getByRole('button', { name: 'Toon submenu van Planning' })

      fireEvent.click(nestedButton)

      expect(nestedButton).toHaveAttribute('aria-expanded', 'true')
      expect(parentButton).toHaveAttribute('aria-expanded', 'true')
      expect(nestedButton.getAttribute('aria-controls')).not.toBe(parentButton.getAttribute('aria-controls'))

      fireEvent.click(parentButton)

      expect(parentButton).toHaveAttribute('aria-expanded', 'false')
      expect(nestedButton).toHaveAttribute('aria-expanded', 'true')
    })

    it('warns when a collapsible item with a submenu has a non-string label', () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})

      render(
        <Menu collapsible>
          <Menu.Item href="#" icon={DocumentIcon} label={<span>Projecten</span>}>
            <Menu.Link href="#">Overzicht</Menu.Link>
          </Menu.Item>
        </Menu>,
      )

      expect(warn).toHaveBeenCalledWith(
        'A collapsible Menu Item with a submenu needs a string `label` to name its toggle button accessibly.',
      )
      expect(screen.getByRole('button', { name: 'Toon submenu van' })).toBeInTheDocument()

      warn.mockRestore()
    })
  })
})
