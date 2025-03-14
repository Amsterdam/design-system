import { render } from '@testing-library/react'
import { createRef } from 'react'
import { generateAspectRatioClass, Image } from './Image'
import { aspectRatioOptions } from '../common/types'
import '@testing-library/jest-dom'

describe('Image', () => {
  it('renders', () => {
    const { container } = render(<Image alt="" />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Image alt="" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-image')
  })

  it('renders an additional class name', () => {
    const { container } = render(<Image alt="" className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-image extra')
  })

  aspectRatioOptions.forEach((aspectRatio) => {
    it(`renders class names to display the image in the ${aspectRatio} aspect ratio`, () => {
      const { container } = render(<Image alt="" aspectRatio={aspectRatio} />)

      const component = container.querySelector(':only-child')

      const aspectRatioClass = generateAspectRatioClass(aspectRatio) || ''
      expect(component).toHaveClass(aspectRatioClass)
    })
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLImageElement>()

    const { container } = render(<Image alt="" ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
