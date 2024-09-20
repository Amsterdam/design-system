import { render } from '@testing-library/react'
import { createRef } from 'react'
import { ImageSlider, SlideProps } from './ImageSlider'
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
  const slides: SlideProps[] = [
    {
      src: 'https://picsum.photos/id/122/1280/720',
      alt: 'This is gallery image 1',
      ratio: 'x-wide',
    },
    {
      src: 'https://picsum.photos/id/101/1280/720',
      alt: 'This is gallery image 2',
      ratio: 'x-wide',
    },
    {
      src: 'https://picsum.photos/id/153/1280/720',
      alt: 'This is gallery image 3',
      ratio: 'x-wide',
    },
  ]

  it('renders', () => {
    const { container } = render(<ImageSlider slides={slides} />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders slides', () => {
    const { container } = render(<ImageSlider slides={slides} />)

    const slideElements = container.querySelectorAll('.ams-image-slider__item')
    const slideArray = Array.from(slideElements)

    expect(slideArray).toHaveLength(3)
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<ImageSlider slides={slides} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-image-slider')
  })

  it('renders an additional class name', () => {
    const { container } = render(<ImageSlider slides={slides} className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-image-slider extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<ImageSlider slides={slides} ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('renders thumbnails', () => {
    const { container } = render(<ImageSlider thumbnails slides={slides}></ImageSlider>)

    expect(container.querySelector('.ams-image-slider__thumbnail')).toBeInTheDocument()
  })
})
