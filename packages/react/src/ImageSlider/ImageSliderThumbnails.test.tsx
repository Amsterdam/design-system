/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import type { ImageSliderImageProps } from './ImageSlider'

import { ImageSliderThumbnails } from './ImageSliderThumbnails'
import '@testing-library/jest-dom'

const thumbnails: ImageSliderImageProps[] = [
  { alt: 'One', src: 'https://picsum.photos/id/122/320/180' },
  { alt: 'Two', src: 'https://picsum.photos/id/101/320/180' },
  { alt: 'Three', src: 'https://picsum.photos/id/153/320/180' },
]

const defaultProps = {
  currentSlideId: 0,
  goToNextSlide: jest.fn(),
  goToPreviousSlide: jest.fn(),
  goToSlideById: jest.fn(),
  thumbnails: thumbnails,
}

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

  it('calls goToNextSlide on ArrowRight keydown', async () => {
    const goToNextSlide = jest.fn()

    const user = userEvent.setup()

    const { container } = render(<ImageSliderThumbnails {...defaultProps} goToNextSlide={goToNextSlide} />)

    const component = container.querySelector(':only-child') as HTMLElement

    const firstThumbnail = component.children[0] as HTMLElement
    firstThumbnail.focus()

    await user.keyboard('{ArrowRight}')

    expect(goToNextSlide).toHaveBeenCalled()
  })

  it('does not call goToNextSlide on ArrowRight keydown when at end', async () => {
    const goToNextSlide = jest.fn()

    const user = userEvent.setup()

    const { container } = render(
      <ImageSliderThumbnails {...defaultProps} currentSlideId={thumbnails.length - 1} goToNextSlide={goToNextSlide} />,
    )

    const component = container.querySelector(':only-child') as HTMLElement

    const lastThumbnail = component.children[thumbnails.length - 1] as HTMLElement
    lastThumbnail.focus()

    await user.keyboard('{ArrowRight}')

    expect(goToNextSlide).not.toHaveBeenCalled()
  })

  it('calls goToPreviousSlide on ArrowLeft keydown', async () => {
    const goToPreviousSlide = jest.fn()

    const user = userEvent.setup()

    const { container } = render(
      <ImageSliderThumbnails {...defaultProps} currentSlideId={1} goToPreviousSlide={goToPreviousSlide} />,
    )

    const component = container.querySelector(':only-child') as HTMLElement

    const secondThumbnail = component.children[1] as HTMLElement
    secondThumbnail.focus()

    await user.keyboard('{ArrowLeft}')

    expect(goToPreviousSlide).toHaveBeenCalled()
  })

  it('does not call goToPreviousSlide on ArrowLeft keydown when at start', async () => {
    const goToPreviousSlide = jest.fn()

    const user = userEvent.setup()

    const { container } = render(
      <ImageSliderThumbnails {...defaultProps} currentSlideId={0} goToPreviousSlide={goToPreviousSlide} />,
    )

    const component = container.querySelector(':only-child') as HTMLElement

    const firstThumbnail = component.children[0] as HTMLElement
    firstThumbnail.focus()

    await user.keyboard('{ArrowLeft}')

    expect(goToPreviousSlide).not.toHaveBeenCalled()
  })

  it('calls goToSlideById on thumbnail click', async () => {
    const goToSlideById = jest.fn()

    const user = userEvent.setup()

    const { container } = render(<ImageSliderThumbnails {...defaultProps} goToSlideById={goToSlideById} />)

    const component = container.querySelector(':only-child') as HTMLElement

    const secondThumbnail = component.children[1] as HTMLElement

    await user.click(secondThumbnail)

    expect(goToSlideById).toHaveBeenCalledWith(1)
  })
})
