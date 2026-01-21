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

const defaultProps = { currentSlideId: 0, scrollToSlideById: jest.fn(), thumbnails: thumbnails }

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

  it('calls scrollToSlideById on ArrowRight keydown', async () => {
    const scrollToSlideById = jest.fn()

    const user = userEvent.setup()

    const { container } = render(<ImageSliderThumbnails {...defaultProps} scrollToSlideById={scrollToSlideById} />)

    const component = container.querySelector(':only-child') as HTMLElement

    const firstThumbnail = component.children[0] as HTMLElement
    firstThumbnail.focus()

    await user.keyboard('{ArrowRight}')

    expect(scrollToSlideById).toHaveBeenCalledWith(1)
  })

  it('does not call scrollToSlideById on ArrowRight keydown when at end', async () => {
    const scrollToSlideById = jest.fn()

    const user = userEvent.setup()

    const { container } = render(
      <ImageSliderThumbnails
        {...defaultProps}
        currentSlideId={thumbnails.length - 1}
        scrollToSlideById={scrollToSlideById}
      />,
    )

    const component = container.querySelector(':only-child') as HTMLElement

    const lastThumbnail = component.children[thumbnails.length - 1] as HTMLElement
    lastThumbnail.focus()

    await user.keyboard('{ArrowRight}')

    expect(scrollToSlideById).not.toHaveBeenCalled()
  })

  it('calls scrollToSlideById on ArrowLeft keydown', async () => {
    const scrollToSlideById = jest.fn()

    const user = userEvent.setup()

    const { container } = render(
      <ImageSliderThumbnails {...defaultProps} currentSlideId={1} scrollToSlideById={scrollToSlideById} />,
    )

    const component = container.querySelector(':only-child') as HTMLElement

    const secondThumbnail = component.children[1] as HTMLElement
    secondThumbnail.focus()

    await user.keyboard('{ArrowLeft}')

    expect(scrollToSlideById).toHaveBeenCalledWith(0)
  })

  it('does not call scrollToSlideById on ArrowLeft keydown when at start', async () => {
    const scrollToSlideById = jest.fn()

    const user = userEvent.setup()

    const { container } = render(
      <ImageSliderThumbnails {...defaultProps} currentSlideId={0} scrollToSlideById={scrollToSlideById} />,
    )

    const component = container.querySelector(':only-child') as HTMLElement

    const firstThumbnail = component.children[0] as HTMLElement
    firstThumbnail.focus()

    await user.keyboard('{ArrowLeft}')

    expect(scrollToSlideById).not.toHaveBeenCalled()
  })

  it('calls scrollToSlideById on thumbnail click', async () => {
    const scrollToSlideById = jest.fn()

    const user = userEvent.setup()

    const { container } = render(<ImageSliderThumbnails {...defaultProps} scrollToSlideById={scrollToSlideById} />)

    const component = container.querySelector(':only-child') as HTMLElement

    const secondThumbnail = component.children[1] as HTMLElement

    await user.click(secondThumbnail)

    expect(scrollToSlideById).toHaveBeenCalledWith(1)
  })
})
