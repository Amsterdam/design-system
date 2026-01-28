/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import type { ImageSliderProps } from './ImageSlider'

import { ImageSliderThumbnails } from './ImageSliderThumbnails'
import '@testing-library/jest-dom'

const thumbnails: ImageSliderProps['images'] = [
  { alt: 'One', src: 'https://picsum.photos/id/122/320/180' },
  { alt: 'Two', src: 'https://picsum.photos/id/101/320/180' },
  { alt: 'Three', src: 'https://picsum.photos/id/153/320/180' },
]

const defaultProps = { currentSlideId: 0, scrollToSlide: jest.fn(), thumbnails: thumbnails }

describe('Image Slider Thumbnails', () => {
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

  it('calls scrollToSlide on ArrowRight keydown', async () => {
    const scrollToSlide = jest.fn()

    const user = userEvent.setup()

    const { container } = render(<ImageSliderThumbnails {...defaultProps} scrollToSlide={scrollToSlide} />)

    const component = container.querySelector(':only-child') as HTMLElement

    const firstThumbnail = component.children[0] as HTMLElement
    firstThumbnail.focus()

    await user.keyboard('{ArrowRight}')

    expect(scrollToSlide).toHaveBeenCalledWith(1)
  })

  it('does not call scrollToSlide on ArrowRight keydown when at end', async () => {
    const scrollToSlide = jest.fn()

    const user = userEvent.setup()

    const { container } = render(
      <ImageSliderThumbnails {...defaultProps} currentSlideId={thumbnails.length - 1} scrollToSlide={scrollToSlide} />,
    )

    const component = container.querySelector(':only-child') as HTMLElement

    const lastThumbnail = component.children[thumbnails.length - 1] as HTMLElement
    lastThumbnail.focus()

    await user.keyboard('{ArrowRight}')

    expect(scrollToSlide).not.toHaveBeenCalled()
  })

  it('calls scrollToSlide on ArrowLeft keydown', async () => {
    const scrollToSlide = jest.fn()

    const user = userEvent.setup()

    const { container } = render(
      <ImageSliderThumbnails {...defaultProps} currentSlideId={1} scrollToSlide={scrollToSlide} />,
    )

    const component = container.querySelector(':only-child') as HTMLElement

    const secondThumbnail = component.children[1] as HTMLElement
    secondThumbnail.focus()

    await user.keyboard('{ArrowLeft}')

    expect(scrollToSlide).toHaveBeenCalledWith(0)
  })

  it('does not call scrollToSlide on ArrowLeft keydown when at start', async () => {
    const scrollToSlide = jest.fn()

    const user = userEvent.setup()

    const { container } = render(
      <ImageSliderThumbnails {...defaultProps} currentSlideId={0} scrollToSlide={scrollToSlide} />,
    )

    const component = container.querySelector(':only-child') as HTMLElement

    const firstThumbnail = component.children[0] as HTMLElement
    firstThumbnail.focus()

    await user.keyboard('{ArrowLeft}')

    expect(scrollToSlide).not.toHaveBeenCalled()
  })

  it('calls scrollToSlide on thumbnail click', async () => {
    const scrollToSlide = jest.fn()

    const user = userEvent.setup()

    const { container } = render(<ImageSliderThumbnails {...defaultProps} scrollToSlide={scrollToSlide} />)

    const component = container.querySelector(':only-child') as HTMLElement

    const secondThumbnail = component.children[1] as HTMLElement

    await user.click(secondThumbnail)

    expect(scrollToSlide).toHaveBeenCalledWith(1)
  })
})
