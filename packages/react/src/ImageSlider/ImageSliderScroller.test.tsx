import { render } from '@testing-library/react'
import { createRef } from 'react'
import { ImageSliderScroller } from './ImageSliderScroller'
import '@testing-library/jest-dom'

describe('Image slider scroller', () => {
  it('renders', () => {
    const { container } = render(<ImageSliderScroller />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders children', () => {
    const { container } = render(<ImageSliderScroller>child</ImageSliderScroller>)

    expect(container).toHaveTextContent('child')
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<ImageSliderScroller />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-image-slider__scroller')
  })

  it('renders an additional class name', () => {
    const { container } = render(<ImageSliderScroller className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-image-slider__scroller extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<ImageSliderScroller ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
