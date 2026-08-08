/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { Metadata } from '../Metadata/Metadata'
import { CardHeadingGroup } from './CardHeadingGroup'

describe('CardHeadingGroup', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders', () => {
    const { container } = render(<CardHeadingGroup />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<CardHeadingGroup />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-card__heading-group')
  })

  it('renders an extra class name', () => {
    const { container } = render(<CardHeadingGroup className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-card__heading-group extra')
  })

  it('renders a Metadata child after the heading, so screen readers reach the heading first', () => {
    const { container } = render(
      <CardHeadingGroup>
        <h3>Berlagebrug dicht</h3>
        <Metadata size="small">Nieuws</Metadata>
      </CardHeadingGroup>,
    )

    const component = container.querySelector(':only-child')

    expect(component?.firstElementChild?.tagName).toBe('H3')
    expect(component?.lastElementChild).toHaveClass('ams-metadata')
  })

  it('renders no metadata of its own without a tagline', () => {
    const { container } = render(
      <CardHeadingGroup>
        <h3>Berlagebrug dicht</h3>
      </CardHeadingGroup>,
    )

    const component = container.querySelector(':only-child')

    expect(component?.querySelector('.ams-metadata')).not.toBeInTheDocument()
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<CardHeadingGroup ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('passes additional props', () => {
    const { container } = render(<CardHeadingGroup aria-hidden={false} data-test="data-test" id="id" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })

  describe('the deprecated tagline prop', () => {
    it('renders the tagline as a small Metadata', () => {
      vi.spyOn(console, 'warn').mockImplementation(() => {})

      render(<CardHeadingGroup tagline="Nieuws" />)

      const tagline = screen.getByText('Nieuws')

      expect(tagline).toHaveClass('ams-metadata ams-metadata--small')
    })

    it('warns that the prop has been replaced', () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})

      render(<CardHeadingGroup tagline="Nieuws" />)

      expect(warn).toHaveBeenCalledWith(expect.stringContaining('has been replaced'))
    })

    it('warns that it duplicates a Metadata child', () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})

      render(
        <CardHeadingGroup tagline="Nieuws">
          <h3>Berlagebrug dicht</h3>
          <Metadata size="small">Algemeen</Metadata>
        </CardHeadingGroup>,
      )

      expect(warn).toHaveBeenCalledWith(expect.stringContaining('renders a second Metadata'))
    })

    it('does not warn when it is left off', () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})

      render(
        <CardHeadingGroup>
          <h3>Berlagebrug dicht</h3>
        </CardHeadingGroup>,
      )

      expect(warn).not.toHaveBeenCalled()
    })
  })
})
