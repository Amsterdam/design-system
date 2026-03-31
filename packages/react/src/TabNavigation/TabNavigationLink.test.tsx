/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { TabNavigationLink } from './TabNavigationLink'

describe('TabNavigationLink', () => {
  it('renders', () => {
    render(<TabNavigationLink href="/" />)

    const component = screen.getByRole('listitem')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<TabNavigationLink href="/" />)

    const item = screen.getByRole('listitem')

    expect(item).toHaveClass('ams-tab-navigation__item')

    const link = screen.getByRole('link')

    expect(link).toHaveClass('ams-tab-navigation__link')
  })

  it('renders an extra class name', () => {
    render(<TabNavigationLink className="extra" href="/" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-tab-navigation__link extra')
  })

  it('renders the href attribute', () => {
    render(<TabNavigationLink href="/test" />)

    const component = screen.getByRole('link')

    expect(component).toHaveAttribute('href', '/test')
  })

  it('supports aria-current attribute', () => {
    render(<TabNavigationLink aria-current="page" href="/" />)

    const component = screen.getByRole('link')

    expect(component).toHaveAttribute('aria-current', 'page')
  })

  it('renders a custom link component', () => {
    const CustomLink = ({ children, ...props }: any) => (
      <a {...props} data-custom="true">
        {children}
      </a>
    )

    render(<TabNavigationLink href="/test" linkComponent={CustomLink} />)

    const component = screen.getByRole('link')

    expect(component).toHaveAttribute('data-custom', 'true')
    expect(component).toHaveAttribute('href', '/test')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLAnchorElement>()

    render(<TabNavigationLink href="/" ref={ref} />)

    const component = screen.getByRole('link')

    expect(ref.current).toBe(component)
  })

  it('passes additional props', () => {
    render(<TabNavigationLink aria-hidden={false} data-test="data-test" href="/" id="id" />)

    const component = screen.getByRole('link')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})
