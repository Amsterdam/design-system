/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { ImageSliderSlide } from './ImageSliderSlide'

const defaultCaption = 'A bridge over a calm river.'
const defaultProps = {
  alt: '',
  currentSlideId: 0,
  index: 0,
  src: 'https://picsum.photos/id/122/320/180',
}

describe('ImageSliderSlide', () => {
  it('renders', () => {
    render(<ImageSliderSlide {...defaultProps} />)

    const image = screen.getByRole('presentation')

    expect(image).toBeInTheDocument()
    expect(image).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<ImageSliderSlide {...defaultProps} />)

    const image = screen.getByRole('presentation')

    expect(image).toHaveClass('ams-image-slider__slide')
  })

  it('renders a caption when provided, and a figure element', () => {
    render(<ImageSliderSlide {...defaultProps} caption={defaultCaption} />)

    const figure = screen.getByRole('figure')

    expect(figure).toBeInTheDocument()
    expect(figure).toHaveTextContent(defaultCaption)
  })

  it('does not render a figure element when no caption is provided', () => {
    render(<ImageSliderSlide {...defaultProps} />)

    const figure = screen.queryByRole('figure')

    expect(figure).not.toBeInTheDocument()
  })

  it('hides a captioned slide from assistive technologies when it is not the current slide', () => {
    const { container } = render(<ImageSliderSlide caption={defaultCaption} {...defaultProps} index={1} />)

    const figure = container.querySelector('figure')

    expect(figure).toHaveAttribute('aria-hidden', 'true')
  })

  it('does not hide a captioned slide from assistive technologies when it is the current slide', () => {
    render(<ImageSliderSlide caption={defaultCaption} {...defaultProps} />)

    const figure = screen.getByRole('figure')

    expect(figure).not.toHaveAttribute('aria-hidden')
  })

  it('passes additional props', () => {
    render(<ImageSliderSlide data-test="data-test" id="id" {...defaultProps} />)

    const image = screen.getByRole('presentation')

    expect(image).toHaveAttribute('id', 'id')
    expect(image).toHaveAttribute('data-test', 'data-test')
  })
})
