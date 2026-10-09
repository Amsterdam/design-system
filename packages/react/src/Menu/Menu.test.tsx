/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { DocumentIcon } from '@amsterdam/design-system-react-icons'
import { fireEvent, render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it, vi } from 'vitest'

import { Menu } from './Menu'

describe('Menu', () => {
  it('renders', () => {
    const { container } = render(<Menu />)

    const component = container.querySelector(':only-child')
    const list = screen.getByRole('list')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
    expect(component).toContainElement(list)
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Menu />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-menu')
  })

  it('renders an extra class name', () => {
    const { container } = render(<Menu className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-menu extra')
  })

  it('renders a `nav` element with the `inWideWindow` prop', () => {
    render(<Menu inWideWindow />)

    const component = screen.getByRole('navigation')

    expect(component).toBeInTheDocument()
  })

  it('renders the class name for the `inWideWindow` prop', () => {
    const { container } = render(<Menu inWideWindow />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-menu--in-wide-window')
  })

  it('does not render an expand button by default', () => {
    render(<Menu inWideWindow />)

    const button = screen.queryByRole('button', { name: 'Klap menu uit' })

    expect(button).not.toBeInTheDocument()
  })

  it('renders an expand button when expandable in a wide window', () => {
    render(<Menu expandable inWideWindow />)

    const button = screen.getByRole('button', { name: 'Klap menu uit' })

    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('aria-controls')
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(button).not.toHaveAttribute('aria-pressed')
  })

  it('adds the expanded class when defaultExpanded is true', () => {
    const { container } = render(<Menu defaultExpanded expandable inWideWindow />)

    const component = container.querySelector(':only-child')
    const button = screen.getByRole('button', { name: 'Klap menu in' })

    expect(component).toHaveClass('ams-menu--expanded')
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('aria-expanded', 'true')
  })

  it('toggles the expanded state when the button is clicked', () => {
    const { container } = render(<Menu expandable inWideWindow />)

    const component = container.querySelector(':only-child')
    const expandButton = screen.getByRole('button', { name: 'Klap menu uit' })

    expect(component).not.toHaveClass('ams-menu--expanded')

    fireEvent.click(expandButton)

    const collapseButton = screen.getByRole('button', { name: 'Klap menu in' })

    expect(component).toHaveClass('ams-menu--expanded')
    expect(collapseButton).toBeInTheDocument()
    expect(collapseButton).toHaveAttribute('aria-expanded', 'true')

    fireEvent.click(collapseButton)

    expect(component).not.toHaveClass('ams-menu--expanded')
    expect(screen.getByRole('button', { name: 'Klap menu uit' })).toBeInTheDocument()
  })

  it('calls onToggle with the new expanded state when the button is clicked', () => {
    const onToggle = vi.fn()

    render(<Menu expandable inWideWindow onToggle={onToggle} />)

    const button = screen.getByRole('button', { name: 'Klap menu uit' })

    fireEvent.click(button)
    fireEvent.click(button)

    expect(onToggle).toHaveBeenCalledTimes(2)
    expect(onToggle).toHaveBeenNthCalledWith(1, true)
    expect(onToggle).toHaveBeenNthCalledWith(2, false)
  })

  it('respects the expanded prop when false', () => {
    const { container } = render(<Menu expandable expanded={false} inWideWindow />)

    const component = container.querySelector(':only-child')
    const button = screen.getByRole('button', { name: 'Klap menu uit' })

    expect(component).not.toHaveClass('ams-menu--expanded')
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('respects the expanded prop when true', () => {
    const { container } = render(<Menu expandable expanded inWideWindow />)

    const component = container.querySelector(':only-child')
    const button = screen.getByRole('button', { name: 'Klap menu in' })

    expect(component).toHaveClass('ams-menu--expanded')
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('aria-expanded', 'true')
  })

  it('does not toggle internally when controlled', () => {
    const { container } = render(<Menu expandable expanded={false} inWideWindow />)

    const component = container.querySelector(':only-child')
    const button = screen.getByRole('button', { name: 'Klap menu uit' })

    fireEvent.click(button)

    expect(component).not.toHaveClass('ams-menu--expanded')
    expect(screen.getByRole('button', { name: 'Klap menu uit' })).toBeInTheDocument()
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<Menu ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('renders the default accessible name', () => {
    render(<Menu inWideWindow />)

    const component = screen.getByRole('navigation', { name: 'Hoofdmenu' })

    expect(component).toBeInTheDocument()
  })

  it('renders a custom accessible name', () => {
    render(<Menu accessibleName="Custom accessible name" inWideWindow />)

    const component = screen.getByRole('navigation', { name: 'Custom accessible name' })

    expect(component).toBeInTheDocument()
  })

  it('doesn’t render a custom accessible name if not in a wide window', () => {
    render(<Menu accessibleName="Custom accessible name" />)

    const component = screen.queryByRole('navigation', { name: 'Custom accessible name' })

    expect(component).not.toBeInTheDocument()
  })

  it('passes additional props', () => {
    const { container } = render(<Menu aria-hidden="false" data-test="data-test" id="id" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })

  it('warns about a submenu that a wide Menu can never show', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})

    render(
      <Menu inWideWindow>
        <Menu.Item href="#" label="Projecten">
          <Menu.Link href="#">Overzicht</Menu.Link>
        </Menu.Item>
      </Menu>,
    )

    expect(warn).toHaveBeenCalledTimes(1)
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('Set `expandable`'))

    warn.mockRestore()
  })

  it('does not warn about a submenu that the Menu can show', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})

    render(
      <>
        <Menu>
          <Menu.Item href="#" label="Projecten">
            <Menu.Link href="#">Overzicht</Menu.Link>
          </Menu.Item>
        </Menu>
        <Menu expandable inWideWindow>
          <Menu.Item href="#" label="Projecten">
            <Menu.Link href="#">Overzicht</Menu.Link>
          </Menu.Item>
        </Menu>
        <Menu inWideWindow>
          <Menu.Item href="#" label="Projecten" />
        </Menu>
      </>,
    )

    expect(warn).not.toHaveBeenCalled()

    warn.mockRestore()
  })

  it('renders a nested submenu structure', () => {
    render(
      <Menu>
        <Menu.Item href="#" icon={DocumentIcon} label="Projecten">
          <Menu.Link href="#">Overzicht</Menu.Link>
          <Menu.Link href="#">Planning</Menu.Link>
        </Menu.Item>
      </Menu>,
    )

    const lists = screen.getAllByRole('list')
    const items = screen.getAllByRole('listitem')
    const links = screen.getAllByRole('link')

    expect(lists).toHaveLength(2)
    expect(items).toHaveLength(3)
    expect(links).toHaveLength(3)
  })

  it('keeps submenu rendering unchanged when not collapsible', () => {
    render(
      <Menu>
        <Menu.Item href="#" label="Projecten">
          <Menu.Link href="#">Overzicht</Menu.Link>
        </Menu.Item>
      </Menu>,
    )

    const item = screen.getByRole('link', { name: 'Projecten' }).closest('li')
    const submenu = screen.getAllByRole('list')[1]

    expect(item).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /Toon submenu van|Verberg submenu van/ })).not.toBeInTheDocument()
    expect(item).not.toHaveClass('ams-menu__item--collapsed')
    expect(submenu).not.toHaveAttribute('id')
  })

  it('does not render submenu toggles in a wide Menu that is not expanded', () => {
    render(
      <Menu collapsible expandable inWideWindow>
        <Menu.Item href="#" label="Projecten">
          <Menu.Link href="#">Overzicht</Menu.Link>
        </Menu.Item>
      </Menu>,
    )

    expect(screen.queryByRole('button', { name: /Toon submenu van|Verberg submenu van/ })).not.toBeInTheDocument()
  })

  it('renders submenu toggles in a wide Menu that is expanded', () => {
    render(
      <Menu collapsible defaultExpanded expandable inWideWindow>
        <Menu.Item href="#" label="Projecten">
          <Menu.Link href="#">Overzicht</Menu.Link>
        </Menu.Item>
      </Menu>,
    )

    expect(screen.getByRole('button', { name: 'Toon submenu van Projecten' })).toBeInTheDocument()
  })
})
