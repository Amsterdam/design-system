/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes } from 'react'

import { DocumentIcon, StarIcon } from '@amsterdam/design-system-react-icons'
import { render, screen } from '@testing-library/react'
import { createRef, forwardRef } from 'react'
import { describe, expect, it } from 'vitest'

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
})
