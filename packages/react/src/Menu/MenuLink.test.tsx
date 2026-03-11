/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { DocumentIcon, StarIcon } from '@amsterdam/design-system-react-icons'
import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { Menu } from './Menu'

describe('MenuLink', () => {
  it('renders', () => {
    const { container } = render(<Menu.Link href="#" icon={DocumentIcon} />)

    const listItem = screen.getByRole('listitem')
    const link = screen.getByRole('link')
    const icon = container.querySelector('svg')

    expect(listItem).toBeInTheDocument()
    expect(listItem).toBeVisible()
    expect(link).toBeInTheDocument()
    expect(link).toBeVisible()
    expect(icon).toBeInTheDocument()
    expect(icon).not.toBeVisible() // The icon is hidden by default, and only shown when the CSS loads.
  })

  it('renders a design system BEM class name', () => {
    render(<Menu.Link href="#" icon={DocumentIcon} />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-menu__link')
  })

  it('renders an extra class name', () => {
    render(<Menu.Link className="extra" href="#" icon={DocumentIcon} />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-menu__link extra')
  })

  it('renders the class name for contrast color', () => {
    render(<Menu.Link color="contrast" href="#" icon={DocumentIcon} />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-menu__link--contrast')
  })

  it('renders the class name for inverse color', () => {
    render(<Menu.Link color="inverse" href="#" icon={DocumentIcon} />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-menu__link--inverse')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLAnchorElement>()

    render(<Menu.Link href="#" icon={DocumentIcon} ref={ref} />)

    const component = screen.getByRole('link')

    expect(ref.current).toBe(component)
  })

  it('shows a custom icon', () => {
    render(<Menu.Link href="#" icon={<StarIcon className="test-class" />} />)

    const component = screen.getByRole('link')
    const icon = component.querySelector('.test-class')

    expect(icon).toBeInTheDocument()
  })

  it('passes additional props', () => {
    const { container } = render(<Menu.Link data-test="data-test" href="#" icon={DocumentIcon} id="id" />)
    const component = container.querySelector('.ams-menu__link')

    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})
