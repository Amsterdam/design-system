/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { CardImage } from './CardImage'

describe('CardImage', () => {
  it('renders', () => {
    render(<CardImage alt="" />)

    const component = screen.getByRole('presentation')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<CardImage alt="" />)

    const component = screen.getByRole('presentation')

    expect(component).toHaveClass('ams-card__image')
  })

  it('renders an extra class name', () => {
    render(<CardImage alt="" className="extra" />)

    const component = screen.getByRole('presentation')

    expect(component).toHaveClass('ams-card__image extra')
  })

  it('renders a design system Image class name', () => {
    render(<CardImage alt="" />)

    const component = screen.getByRole('presentation')

    expect(component).toHaveClass('ams-image')
  })

  it('renders the class name for the aspect ratio of the image', () => {
    render(<CardImage alt="" aspectRatio="3:4" />)

    const component = screen.getByRole('presentation')

    expect(component).toHaveClass('ams-card__image ams-aspect-ratio-3-4')
  })

  it('fits the image inside the area when fit is set to contain', () => {
    render(<CardImage alt="" fit="contain" />)

    const component = screen.getByRole('presentation')

    expect(component).toHaveClass('ams-image--contain')
  })

  it('crops the image by default', () => {
    render(<CardImage alt="" />)

    const component = screen.getByRole('presentation')

    expect(component).not.toHaveClass('ams-image--contain')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLImageElement>()

    render(<CardImage alt="" ref={ref} />)

    const image = screen.getByRole('presentation')

    expect(ref.current).toBe(image)
  })

  it('passes additional props', () => {
    render(<CardImage alt="" aria-hidden={false} data-test="data-test" id="id" />)

    const image = screen.getByRole('presentation')

    expect(image).toHaveAttribute('aria-hidden', 'false')
    expect(image).toHaveAttribute('id', 'id')
    expect(image).toHaveAttribute('data-test', 'data-test')
  })
})
