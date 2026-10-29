/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import type { ImageSliderProps } from './ImageSlider'

import { ImageSliderThumbnails } from './ImageSliderThumbnails'

const thumbnails: ImageSliderProps['images'] = [
  { alt: 'One', src: 'https://picsum.photos/id/122/320/180' },
  { alt: 'Two', src: 'https://picsum.photos/id/101/320/180' },
  { alt: 'Three', src: 'https://picsum.photos/id/153/320/180' },
]

const defaultProps = {
  baseId: 'image-slider',
  currentSlideId: 0,
  goToSlide: vi.fn(),
  imageLabel: 'Afbeelding',
  thumbnails: thumbnails,
}

describe('ImageSliderThumbnails', () => {
  it('renders', () => {
    const { container } = render(<ImageSliderThumbnails {...defaultProps} />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders thumbnails', () => {
    const { container } = render(<ImageSliderThumbnails {...defaultProps} />)

    const thumbs = container.querySelectorAll('.ams-image-slider__thumbnail')

    expect(thumbs).toHaveLength(thumbnails.length)
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<ImageSliderThumbnails {...defaultProps} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-image-slider__thumbnails')
  })

  it('renders the tablist as a div, not a nav', () => {
    const { container } = render(<ImageSliderThumbnails {...defaultProps} />)

    const component = container.querySelector(':only-child') as HTMLElement

    expect(component.tagName).toBe('DIV')
  })

  it('does not render aria-posinset or aria-setsize, since every thumbnail is always in the DOM', () => {
    const { container } = render(<ImageSliderThumbnails {...defaultProps} />)

    const tabs = container.querySelectorAll('.ams-image-slider__thumbnail')

    tabs.forEach((tab) => {
      expect(tab).not.toHaveAttribute('aria-posinset')
      expect(tab).not.toHaveAttribute('aria-setsize')
    })
  })

  it('links each thumbnail to its panel via aria-controls', () => {
    const { container } = render(<ImageSliderThumbnails {...defaultProps} />)

    const tabs = container.querySelectorAll('.ams-image-slider__thumbnail')

    tabs.forEach((tab, index) => {
      expect(tab).toHaveAttribute('aria-controls', `${defaultProps.baseId}-panel-${index}`)
    })
  })

  it('calls goToSlide on ArrowRight keydown', async () => {
    const goToSlide = vi.fn()

    const user = userEvent.setup()

    const { container } = render(<ImageSliderThumbnails {...defaultProps} goToSlide={goToSlide} />)

    const component = container.querySelector(':only-child') as HTMLElement

    const firstThumbnail = component.children[0] as HTMLElement
    firstThumbnail.focus()

    await user.keyboard('{ArrowRight}')

    expect(goToSlide).toHaveBeenCalledWith(1)
  })

  it('does not call goToSlide on ArrowRight keydown when at end', async () => {
    const goToSlide = vi.fn()

    const user = userEvent.setup()

    const { container } = render(
      <ImageSliderThumbnails {...defaultProps} currentSlideId={thumbnails.length - 1} goToSlide={goToSlide} />,
    )

    const component = container.querySelector(':only-child') as HTMLElement

    const lastThumbnail = component.children[thumbnails.length - 1] as HTMLElement
    lastThumbnail.focus()

    await user.keyboard('{ArrowRight}')

    expect(goToSlide).not.toHaveBeenCalled()
  })

  it('calls goToSlide on ArrowLeft keydown', async () => {
    const goToSlide = vi.fn()

    const user = userEvent.setup()

    const { container } = render(<ImageSliderThumbnails {...defaultProps} currentSlideId={1} goToSlide={goToSlide} />)

    const component = container.querySelector(':only-child') as HTMLElement

    const secondThumbnail = component.children[1] as HTMLElement
    secondThumbnail.focus()

    await user.keyboard('{ArrowLeft}')

    expect(goToSlide).toHaveBeenCalledWith(0)
  })

  it('does not call goToSlide on ArrowLeft keydown when at start', async () => {
    const goToSlide = vi.fn()

    const user = userEvent.setup()

    const { container } = render(<ImageSliderThumbnails {...defaultProps} currentSlideId={0} goToSlide={goToSlide} />)

    const component = container.querySelector(':only-child') as HTMLElement

    const firstThumbnail = component.children[0] as HTMLElement
    firstThumbnail.focus()

    await user.keyboard('{ArrowLeft}')

    expect(goToSlide).not.toHaveBeenCalled()
  })

  it('calls goToSlide on thumbnail click', async () => {
    const goToSlide = vi.fn()

    const user = userEvent.setup()

    const { container } = render(<ImageSliderThumbnails {...defaultProps} goToSlide={goToSlide} />)

    const component = container.querySelector(':only-child') as HTMLElement

    const secondThumbnail = component.children[1] as HTMLElement

    await user.click(secondThumbnail)

    expect(goToSlide).toHaveBeenCalledWith(1)
  })

  it('passes additional props', () => {
    const { container } = render(
      <ImageSliderThumbnails aria-hidden="false" data-test="data-test" id="id" {...defaultProps} />,
    )
    const component = container.querySelector(':only-child')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})
