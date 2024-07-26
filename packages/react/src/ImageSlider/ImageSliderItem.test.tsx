import { render } from '@testing-library/react'
import { createRef } from 'react'
import { ImageSliderItem } from './ImageSliderItem'
import '@testing-library/jest-dom'

describe('Image slider', () => {
  it('renders', () => {
    const { container } = render(<ImageSliderItem slideId={0} />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders children', () => {
    const { container } = render(<ImageSliderItem slideId={0}>child</ImageSliderItem>)

    expect(container).toHaveTextContent('child')
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<ImageSliderItem slideId={0} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-image-slider__item')
  })

  it('renders an additional class name', () => {
    const { container } = render(<ImageSliderItem slideId={0} className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-image-slider__item extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<ImageSliderItem slideId={0} ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
