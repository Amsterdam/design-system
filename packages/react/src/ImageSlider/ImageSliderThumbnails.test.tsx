import { render } from '@testing-library/react'
import { createRef } from 'react'
import { ImageSliderImageProps } from './ImageSlider'
import { ImageSliderThumbnails } from './ImageSliderThumbnails'
import '@testing-library/jest-dom'

describe('Image Slider Thumbnails', () => {
  const thumbnails: ImageSliderImageProps[] = [
    {
      alt: 'This is gallery image 1',
      aspectRatio: 'x-wide',
      src: 'https://picsum.photos/id/122/1280/720',
    },
    {
      alt: 'This is gallery image 2',
      aspectRatio: 'x-wide',
      src: 'https://picsum.photos/id/101/1280/720',
    },
    {
      alt: 'This is gallery image 3',
      aspectRatio: 'x-wide',
      src: 'https://picsum.photos/id/153/1280/720',
    },
  ]

  it('renders', () => {
    const { container } = render(<ImageSliderThumbnails thumbnails={thumbnails} />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders thumbnails', () => {
    const { container } = render(<ImageSliderThumbnails thumbnails={thumbnails} />)

    const thumbs = container.querySelectorAll('.ams-image-slider__thumbnail')

    expect(thumbs).toHaveLength(thumbnails.length)
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<ImageSliderThumbnails thumbnails={thumbnails} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-image-slider__thumbnails')
  })

  it('renders an additional class name', () => {
    const { container } = render(<ImageSliderThumbnails thumbnails={thumbnails} className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-image-slider__thumbnails extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<ImageSliderThumbnails thumbnails={thumbnails} ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
