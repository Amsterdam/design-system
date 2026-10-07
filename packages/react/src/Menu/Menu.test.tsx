/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { DocumentIcon } from '@amsterdam/design-system-react-icons'
import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

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
})
