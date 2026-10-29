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
  id: 'panel-0',
  index: 0,
  src: 'https://picsum.photos/id/122/320/180',
  tabId: 'tab-0',
}

describe('ImageSliderSlide', () => {
  it('renders', () => {
    render(<ImageSliderSlide {...defaultProps} />)

    const slide = screen.getByRole('tabpanel')

    expect(slide).toBeInTheDocument()
    expect(slide).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<ImageSliderSlide {...defaultProps} />)

    const slide = screen.getByRole('tabpanel')

    expect(slide).toHaveClass('ams-image-slider__slide')
  })

  it('renders a caption when provided, and a figure element', () => {
    const { container } = render(<ImageSliderSlide {...defaultProps} caption={defaultCaption} />)

    const figure = container.querySelector('figure')

    expect(figure).toBeInTheDocument()
    expect(figure).toHaveTextContent(defaultCaption)
  })

  it('does not render a figure element when no caption is provided', () => {
    const { container } = render(<ImageSliderSlide {...defaultProps} />)

    const figure = container.querySelector('figure')

    expect(figure).not.toBeInTheDocument()
  })

  it('hides a captioned slide from assistive technologies when it is not the current slide', () => {
    const { container } = render(<ImageSliderSlide caption={defaultCaption} {...defaultProps} index={1} />)

    const figure = container.querySelector('figure')

    expect(figure).toHaveAttribute('aria-hidden', 'true')
  })

  it('does not hide a captioned slide from assistive technologies when it is the current slide', () => {
    render(<ImageSliderSlide caption={defaultCaption} {...defaultProps} />)

    const slide = screen.getByRole('tabpanel')

    expect(slide).not.toHaveAttribute('aria-hidden')
  })

  it('is labelled by its matching tab', () => {
    render(<ImageSliderSlide {...defaultProps} tabId="tab-3" />)

    expect(screen.getByRole('tabpanel')).toHaveAttribute('aria-labelledby', 'tab-3')
  })

  it('is only in the tab order when it is the current slide', () => {
    const { rerender } = render(<ImageSliderSlide {...defaultProps} />)

    expect(screen.getByRole('tabpanel')).toHaveAttribute('tabindex', '0')

    rerender(<ImageSliderSlide {...defaultProps} currentSlideId={1} />)

    expect(screen.getByRole('tabpanel', { hidden: true })).toHaveAttribute('tabindex', '-1')
  })

  it('passes additional props', () => {
    render(<ImageSliderSlide {...defaultProps} data-test="data-test" id="id" />)

    const slide = screen.getByRole('tabpanel')

    expect(slide).toHaveAttribute('id', 'id')
    expect(slide).toHaveAttribute('data-test', 'data-test')
  })
})
