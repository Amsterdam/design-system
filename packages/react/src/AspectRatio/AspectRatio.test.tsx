import { render } from '@testing-library/react'
import { createRef } from 'react'
import { AspectRatio } from './AspectRatio'
import '@testing-library/jest-dom'

describe('Aspect ratio', () => {
  it('renders', () => {
    const { container } = render(<AspectRatio />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<AspectRatio />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-aspect-ratio')
  })

  it('can have a additional class name', () => {
    const { container } = render(<AspectRatio className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('extra')

    expect(component).toHaveClass('amsterdam-aspect-ratio')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<AspectRatio ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
