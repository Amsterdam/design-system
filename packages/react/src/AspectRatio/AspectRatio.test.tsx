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

  it('renders children', () => {
    const { getByText } = render(<AspectRatio>Child</AspectRatio>)

    expect(getByText(/child/i)).toBeInTheDocument()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<AspectRatio />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-aspect-ratio')
  })

  it('renders the right size classes', () => {
    const { container: tall } = render(<AspectRatio ratio="tall" />)
    const { container: square } = render(<AspectRatio ratio="square" />)
    const { container: wide } = render(<AspectRatio ratio="wide" />)
    const { container: extraWide } = render(<AspectRatio ratio="extra-wide" />)

    expect(tall.firstChild).toHaveClass('amsterdam-aspect-ratio-tall')
    expect(square.firstChild).toHaveClass('amsterdam-aspect-ratio-square')
    expect(wide.firstChild).toHaveClass('amsterdam-aspect-ratio-wide')
    expect(extraWide.firstChild).toHaveClass('amsterdam-aspect-ratio-extra-wide')
  })

  it('can have a additional class name', () => {
    const { container } = render(<AspectRatio className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('extra')

    expect(component).toHaveClass('amsterdam-aspect-ratio')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<AspectRatio ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
