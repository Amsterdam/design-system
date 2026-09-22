/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

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

  it('does not render a toggle button by default', () => {
    render(<Menu inWideWindow />)

    const button = screen.queryByRole('button', { name: 'Klap menu uit' })

    expect(button).not.toBeInTheDocument()
  })

  it('renders a toggle button when collapsible in a wide window', () => {
    render(<Menu collapsible inWideWindow />)

    const button = screen.getByRole('button', { name: 'Klap menu uit' })

    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('aria-pressed', 'false')
  })

  it('adds the expanded class when defaultExpanded is true', () => {
    const { container } = render(<Menu collapsible defaultExpanded inWideWindow />)

    const component = container.querySelector(':only-child')
    const button = screen.getByRole('button', { name: 'Klap menu in' })

    expect(component).toHaveClass('ams-menu--expanded')
    expect(button).toHaveAttribute('aria-pressed', 'true')
  })

  it('toggles the expanded state when the button is clicked', () => {
    const { container } = render(<Menu collapsible inWideWindow />)

    const component = container.querySelector(':only-child')
    const button = screen.getByRole('button', { name: 'Klap menu uit' })

    expect(component).not.toHaveClass('ams-menu--expanded')

    fireEvent.click(button)

    expect(component).toHaveClass('ams-menu--expanded')
    expect(button).toHaveAttribute('aria-pressed', 'true')

    fireEvent.click(button)

    expect(component).not.toHaveClass('ams-menu--expanded')
    expect(button).toHaveAttribute('aria-pressed', 'false')
  })

  it('calls onToggle with the new expanded state when the button is clicked', () => {
    const onToggle = vi.fn()

    render(<Menu collapsible inWideWindow onToggle={onToggle} />)

    const button = screen.getByRole('button', { name: 'Klap menu uit' })

    fireEvent.click(button)
    fireEvent.click(button)

    expect(onToggle).toHaveBeenCalledTimes(2)
    expect(onToggle).toHaveBeenNthCalledWith(1, true)
    expect(onToggle).toHaveBeenNthCalledWith(2, false)
  })

  it('respects the expanded prop when false', () => {
    const { container } = render(<Menu collapsible expanded={false} inWideWindow />)

    const component = container.querySelector(':only-child')
    const button = screen.getByRole('button', { name: 'Klap menu uit' })

    expect(component).not.toHaveClass('ams-menu--expanded')
    expect(button).toHaveAttribute('aria-pressed', 'false')
  })

  it('respects the expanded prop when true', () => {
    const { container } = render(<Menu collapsible expanded inWideWindow />)

    const component = container.querySelector(':only-child')
    const button = screen.getByRole('button', { name: 'Klap menu in' })

    expect(component).toHaveClass('ams-menu--expanded')
    expect(button).toHaveAttribute('aria-pressed', 'true')
  })

  it('does not toggle internally when controlled', () => {
    const { container } = render(<Menu collapsible expanded={false} inWideWindow />)

    const component = container.querySelector(':only-child')
    const button = screen.getByRole('button', { name: 'Klap menu uit' })

    fireEvent.click(button)

    expect(component).not.toHaveClass('ams-menu--expanded')
    expect(button).toHaveAttribute('aria-pressed', 'false')
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
})
