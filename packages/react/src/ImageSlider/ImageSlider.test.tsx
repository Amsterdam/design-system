import { render } from '@testing-library/react'
import { createRef } from 'react'
import { ImageSlider, ImageSliderImageProps } from './ImageSlider'
import '@testing-library/jest-dom'

const observe = jest.fn()
const unobserve = jest.fn()
const disconnect = jest.fn()
const takeRecords = jest.fn()

// Mock implementation of IntersectionObserver
window.IntersectionObserver = jest.fn(() => ({
  observe,
  unobserve,
  disconnect,
  takeRecords,
  root: null,
  rootMargin: '',
  thresholds: [],
}))

describe('Image Slider', () => {
  const images: ImageSliderImageProps[] = [
    {
      alt: 'Bridge',
      aspectRatio: 'x-wide',
      src: 'https://picsum.photos/id/122/320/180',
    },
    {
      alt: 'Bunker',
      aspectRatio: 'x-wide',
      src: 'https://picsum.photos/id/101/320/180',
    },
    {
      alt: 'Chairs',
      aspectRatio: 'x-wide',
      src: 'https://picsum.photos/id/153/320/180',
    },
  ]

  it('renders', () => {
    const { container } = render(<ImageSlider images={images} />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders slides', () => {
    const { container } = render(<ImageSlider images={images} />)

    const slides = Array.from(container.querySelectorAll('.ams-image-slider__item'))

    expect(slides).toHaveLength(3)
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<ImageSlider images={images} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-image-slider')
  })

  it('renders an additional class name', () => {
    const { container } = render(<ImageSlider className="extra" images={images} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-image-slider extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<ImageSlider images={images} ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('renders thumbnails', () => {
    const { container } = render(<ImageSlider images={images} />)

    expect(container.querySelector('.ams-image-slider__thumbnails')).toBeInTheDocument()
  })
})
