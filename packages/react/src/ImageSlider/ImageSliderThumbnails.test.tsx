import { render } from '@testing-library/react'
import { createRef } from 'react'
import { ImageSlider } from './ImageSlider'
import { ImageSliderThumbnails } from './ImageSliderThumbnails'
import '@testing-library/jest-dom'
import { AspectRatio } from '../AspectRatio'
import { Image } from '../Image'

describe('Image slider thumbnails', () => {
  const thumbnails = [
    <ImageSlider.Item slideId={0}>
      <AspectRatio ratio="x-wide">
        <Image src="https://picsum.photos/id/122/1280/720" loading="lazy" cover alt="This is gallery image 1" />
      </AspectRatio>
    </ImageSlider.Item>,
    <ImageSlider.Item slideId={1}>
      <AspectRatio ratio="x-wide">
        <Image src="https://picsum.photos/id/101/1280/720" loading="lazy" cover alt="This is gallery image 2" />
      </AspectRatio>
    </ImageSlider.Item>,
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
