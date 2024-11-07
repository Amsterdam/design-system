import { render } from '@testing-library/react'
import { createRef } from 'react'
import { Image } from './Image'
import '@testing-library/jest-dom'

describe('Image', () => {
  it('renders', () => {
    const { container } = render(<Image />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Image />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-image')
  })

  it('renders an additional class name', () => {
    const { container } = render(<Image className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-image extra')
  })

  it('renders class names to display the image in a given aspect ratio', () => {
    const { container } = render(<Image aspectRatio="x-tall" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-aspect-ratio--x-tall')
  })

  it('renders class names to display the image with the default aspect ratio', () => {
    const { container } = render(<Image />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-aspect-ratio--wide')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLImageElement>()

    const { container } = render(<Image ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
