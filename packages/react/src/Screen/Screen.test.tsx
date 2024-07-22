import { render } from '@testing-library/react'
import { createRef } from 'react'
import { Screen } from './Screen'
import '@testing-library/jest-dom'

describe('Screen', () => {
  it('renders', () => {
    const { container } = render(<Screen />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Screen />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-screen')
  })

  it('renders the max-width class name', () => {
    const { container } = render(<Screen maxWidth="x-wide" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-screen--x-wide')
  })

  it('renders the full-height class name', () => {
    const { container } = render(<Screen fullHeight />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-screen--full-height')
  })

  it('renders an additional class name', () => {
    const { container } = render(<Screen className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('extra')

    expect(component).toHaveClass('ams-screen')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<Screen ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
