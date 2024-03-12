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

    expect(getByText(/Child/i)).toBeInTheDocument()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<AspectRatio />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-aspect-ratio')
  })

  it('renders the right size classes', () => {
    const { container: xTall } = render(<AspectRatio ratio="x-tall" />)
    const { container: tall } = render(<AspectRatio ratio="tall" />)
    const { container: square } = render(<AspectRatio ratio="square" />)
    const { container: wide } = render(<AspectRatio ratio="wide" />)
    const { container: xWide } = render(<AspectRatio ratio="x-wide" />)

    expect(xTall.firstChild).toHaveClass('ams-aspect-ratio--x-tall')
    expect(tall.firstChild).toHaveClass('ams-aspect-ratio--tall')
    expect(square.firstChild).toHaveClass('ams-aspect-ratio--square')
    expect(wide.firstChild).toHaveClass('ams-aspect-ratio--wide')
    expect(xWide.firstChild).toHaveClass('ams-aspect-ratio--x-wide')
  })

  it('renders an additional class name', () => {
    const { container } = render(<AspectRatio className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('extra')

    expect(component).toHaveClass('ams-aspect-ratio')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<AspectRatio ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
