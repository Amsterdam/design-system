/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef } from 'react'

import type { ImageSliderProps } from './ImageSlider'

import { ImageSlider } from './ImageSlider'
import '@testing-library/jest-dom'

// Mock implementation of IntersectionObserver
window.IntersectionObserver = jest.fn(() => ({
  disconnect: jest.fn(),
  observe: jest.fn(),
  root: null,
  rootMargin: '',
  takeRecords: jest.fn(),
  thresholds: [],
  unobserve: jest.fn(),
}))

const scrollTo = jest.fn()

// Mock scrollTo
Element.prototype.scrollTo = scrollTo

const images: ImageSliderProps['images'] = [
  { alt: 'One', src: 'https://picsum.photos/id/122/320/180' },
  { alt: 'Two', src: 'https://picsum.photos/id/101/320/180' },
  { alt: 'Three', src: 'https://picsum.photos/id/153/320/180' },
]

// All functionality that relies on IntersectionObserver, like setting aria-hidden and showing an image
// by clicking on the thumbnail button, cannot be properly tested here because IntersectionObserver is not implemented in JSDom.
// These tests are covered in Storybook interaction tests: storybook/src/components/ImageSlider/ImageSlider.test.stories.tsx
// The window resize functionality is currently not tested anywhere, because this is difficult in both environments.

describe('Image Slider', () => {
  it('renders', () => {
    const { container } = render(<ImageSlider images={images} />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<ImageSlider images={images} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-image-slider')
  })

  it('renders an extra class name', () => {
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

  it('does not render controls by default', () => {
    const { container } = render(<ImageSlider images={images} />)

    const controls = container.querySelector('.ams-image-slider__controls')

    expect(controls).not.toBeInTheDocument()
  })

  it('renders controls when the controls prop is true', () => {
    const { container } = render(<ImageSlider controls images={images} />)

    const controls = container.querySelector('.ams-image-slider__controls')

    expect(controls).toBeInTheDocument()
  })

  it('shows the first image by default', () => {
    const { getByAltText } = render(<ImageSlider images={images} />)

    const firstImage = getByAltText('One') as HTMLImageElement
    const secondImage = getByAltText('Two') as HTMLImageElement
    const thirdImage = getByAltText('Three') as HTMLImageElement

    expect(firstImage).not.toHaveAttribute('aria-hidden', 'true')
    expect(secondImage).toHaveAttribute('aria-hidden', 'true')
    expect(thirdImage).toHaveAttribute('aria-hidden', 'true')

    expect(firstImage.src).toBe('https://picsum.photos/id/122/320/180')
    expect(secondImage.src).toBe('https://picsum.photos/id/101/320/180')
    expect(thirdImage.src).toBe('https://picsum.photos/id/153/320/180')
  })

  it('scrolls to the next image when clicking the next button', async () => {
    const user = userEvent.setup()

    const { getByRole } = render(<ImageSlider controls images={images} />)

    const nextButton = getByRole('button', { name: 'Volgende' })
    const previousButton = getByRole('button', { name: 'Vorige' })

    // At the start, previous button is disabled
    expect(previousButton).toBeDisabled()
    expect(nextButton).not.toBeDisabled()

    expect(scrollTo).not.toHaveBeenCalled()

    await user.click(nextButton)
    await user.click(nextButton)

    expect(scrollTo).toHaveBeenCalledTimes(2)
  })

  it('renders custom labels for next and previous buttons', () => {
    const { getByRole } = render(
      <ImageSlider controls images={images} nextLabel="Next image" previousLabel="Previous image" />,
    )

    const nextButton = getByRole('button', { name: 'Next image' })
    const previousButton = getByRole('button', { name: 'Previous image' })

    expect(nextButton).toBeInTheDocument()
    expect(previousButton).toBeInTheDocument()
  })

  it('renders thumbnails', () => {
    const { container } = render(<ImageSlider images={images} />)

    expect(container.querySelector('.ams-image-slider__thumbnails')).toBeInTheDocument()
  })
})
