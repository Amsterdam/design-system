/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { CardImage } from './CardImage'

describe('CardImage', () => {
  it('renders', () => {
    const { container } = render(<CardImage alt="" />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<CardImage alt="" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-card__image')
  })

  it('renders an extra class name', () => {
    const { container } = render(<CardImage alt="" className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-card__image extra')
  })

  it('renders an Image inside', () => {
    const { container } = render(<CardImage alt="" />)

    const image = container.querySelector('img')

    expect(image).toHaveClass('ams-image')
  })

  it('renders the class name for the aspect ratio of the area', () => {
    const { container } = render(<CardImage alt="" aspectRatio="3:4" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-card__image ams-aspect-ratio-3-4')
  })

  it('renders a class name to crop the image to the area', () => {
    const { container } = render(<CardImage alt="" objectFit="cover" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-card__image--cover')
  })

  it('renders no class name to crop the image by default', () => {
    const { container } = render(<CardImage alt="" />)

    const component = container.querySelector(':only-child')

    expect(component).not.toHaveClass('ams-card__image--cover')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLImageElement>()

    const { container } = render(<CardImage alt="" ref={ref} />)

    const image = container.querySelector('img')

    expect(ref.current).toBe(image)
  })

  it('passes additional props', () => {
    const { container } = render(<CardImage alt="" aria-hidden={false} data-test="data-test" id="id" />)

    const image = container.querySelector('img')

    expect(image).toHaveAttribute('aria-hidden', 'false')
    expect(image).toHaveAttribute('id', 'id')
    expect(image).toHaveAttribute('data-test', 'data-test')
  })
})
