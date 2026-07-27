/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { Avatar, avatarColors } from './Avatar'

describe('Avatar', () => {
  it('renders', () => {
    render(<Avatar label="NR" />)

    const component = screen.getByText('Initialen gebruiker: NR')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('accepts a custom accessible name for the initials', () => {
    render(<Avatar initialsAccessibleName="User initials: NR" label="NR" />)

    expect(screen.getByText('User initials: NR')).toBeInTheDocument()
    expect(screen.queryByText('Initialen gebruiker: NR')).not.toBeInTheDocument()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Avatar label="RS" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-avatar')
  })

  it('renders an extra class name', () => {
    const { container } = render(<Avatar className="extra" label="VS" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-avatar extra')
  })

  it('renders with a label consisting of no more than two, uppercase letters', () => {
    const { container } = render(<Avatar label="Design System" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveTextContent('DE')
  })

  it('renders with default content and title', () => {
    const { container } = render(<Avatar label="" />)

    const component = screen.getByText('Gebruiker')
    const svg = container.querySelector('svg')

    expect(component).toBeVisible()
    expect(svg).toBeInTheDocument()
    expect(svg).not.toBeVisible() // The icon is hidden by default, and only shown when the CSS loads.
  })

  it('accepts a custom accessible name for the empty label', () => {
    render(<Avatar label="" userAccessibleName="User" />)

    expect(screen.getByText('User')).toBeInTheDocument()
    expect(screen.queryByText('Gebruiker')).not.toBeInTheDocument()
  })

  it('renders with a profile picture', () => {
    const { container } = render(<Avatar imageSrc="image-source" label="RS" />)

    const component = screen.getByText('Initialen gebruiker: RS')
    const image = container.querySelector('[src="image-source"]')

    expect(component).toBeVisible()
    expect(image).toBeVisible()
  })

  it('shortens a label that is too long', () => {
    const { container } = render(<Avatar label="ABC" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveTextContent('AB')
  })

  avatarColors.map((color) =>
    it(`renders with ${color} color`, () => {
      const { container } = render(<Avatar color={color} label="AL" />)

      const component = container.querySelector(':only-child')

      expect(component).toHaveClass(`ams-avatar--${color}`)
    }),
  )

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLSpanElement>()

    const { container } = render(<Avatar label="AL" ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('passes additional props', () => {
    const { container } = render(<Avatar aria-hidden={false} data-test="data-test" id="id" label="EW" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})
