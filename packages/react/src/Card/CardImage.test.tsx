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

  it('renders an Image, in the aspect ratio it is given', () => {
    const { container } = render(<CardImage alt="" aspectRatio="3:4" />)

    const image = container.querySelector('img')

    expect(image).toHaveClass('ams-image ams-aspect-ratio-3-4')
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
