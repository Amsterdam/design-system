import { render } from '@testing-library/react'
import { createRef } from 'react'
import { Figure } from './Figure'
import '@testing-library/jest-dom'

describe('Figure', () => {
  it('renders', () => {
    const { container } = render(<Figure />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders children', () => {
    const { getByText } = render(<Figure>Child</Figure>)

    expect(getByText(/Child/i)).toBeInTheDocument()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Figure />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-aspect-ratio')
  })

  it('renders the right size classes', () => {
    const { container: xTall } = render(<Figure ratio="x-tall" />)
    const { container: tall } = render(<Figure ratio="tall" />)
    const { container: square } = render(<Figure ratio="square" />)
    const { container: wide } = render(<Figure ratio="wide" />)
    const { container: xWide } = render(<Figure ratio="x-wide" />)

    expect(xTall.firstChild).toHaveClass('ams-aspect-ratio--x-tall')
    expect(tall.firstChild).toHaveClass('ams-aspect-ratio--tall')
    expect(square.firstChild).toHaveClass('ams-aspect-ratio--square')
    expect(wide.firstChild).toHaveClass('ams-aspect-ratio--wide')
    expect(xWide.firstChild).toHaveClass('ams-aspect-ratio--x-wide')
  })

  it('renders an additional class name', () => {
    const { container } = render(<Figure className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('extra')
    expect(component).toHaveClass('ams-aspect-ratio')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<Figure ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
