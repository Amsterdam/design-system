import { render } from '@testing-library/react'
import { createRef } from 'react'
import { ImageSlider } from './ImageSlider'
import '@testing-library/jest-dom'
import { AspectRatio } from '../AspectRatio'
import { Image } from '../Image'

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
  it('renders', () => {
    const { container } = render(<ImageSlider />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders children', () => {
    const { container } = render(
      <ImageSlider>
        <ImageSlider.Item slideId={0}>child</ImageSlider.Item>
      </ImageSlider>,
    )

    expect(container).toHaveTextContent('child')
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<ImageSlider />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-image-slider')
  })

  it('renders an additional class name', () => {
    const { container } = render(<ImageSlider className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-image-slider extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<ImageSlider ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('renders thumbnails', () => {
    const { container } = render(
      <ImageSlider thumbnails>
        <ImageSlider.Item slideId={0}>
          <AspectRatio ratio="x-wide">
            <Image src="https://picsum.photos/10" loading="lazy" cover />
          </AspectRatio>
        </ImageSlider.Item>
      </ImageSlider>,
    )

    expect(container.querySelector('.ams-image-slider__thumbnail')).toBeInTheDocument()
  })
})
