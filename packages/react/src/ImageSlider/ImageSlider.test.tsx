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

describe('Image slider', () => {
  const images: ImageSliderImageProps[] = [
    {
      src: 'https://picsum.photos/id/122/320/180',
      alt: 'Bridge',
      ratio: 'x-wide',
    },
    {
      src: 'https://picsum.photos/id/101/320/180',
      alt: 'Bunker',
      ratio: 'x-wide',
    },
    {
      src: 'https://picsum.photos/id/153/320/180',
      alt: 'Chairs',
      ratio: 'x-wide',
    },
  ]

  it('renders', () => {
    const { container } = render(<ImageSlider images={images} />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders images', () => {
    const { container } = render(<ImageSlider images={images} />)

    const slideElements = container.querySelectorAll('.ams-image-slider__item')
    const slideArray = Array.from(slideElements)

    expect(slideArray).toHaveLength(3)
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<ImageSlider images={images} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-image-slider')
  })

  it('renders an additional class name', () => {
    const { container } = render(<ImageSlider images={images} className="extra" />)

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
    const { container } = render(<ImageSlider images={images}></ImageSlider>)

    expect(container.querySelector('.ams-image-slider__thumbnail')).toBeInTheDocument()
  })
})
