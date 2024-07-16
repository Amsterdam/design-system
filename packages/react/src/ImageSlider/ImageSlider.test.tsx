import { render } from '@testing-library/react'
import { createRef } from 'react'
import { ImageSlider } from './ImageSlider'
import '@testing-library/jest-dom'

describe('Image slider', () => {
  it('renders', () => {
    const { container } = render(<ImageSlider />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
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
    const ref = createRef<HTMLElement>()

    const { container } = render(<ImageSlider ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
