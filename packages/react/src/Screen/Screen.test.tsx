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
    expect(component).toHaveClass('amsterdam-screen')
  })

  it('renders the full-width class name if that prop has been set', () => {
    const { container } = render(<Screen fullWidth />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('amsterdam-screen--full-width')
  })

  it('does not render the full-width class name if that prop has not been set', () => {
    const { container } = render(<Screen />)
    const component = container.querySelector(':only-child')
    expect(component).not.toHaveClass('amsterdam-screen--full-width')
  })

  it('renders an additional class name', () => {
    const { container } = render(<Screen className="extra" />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('amsterdam-screen extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()
    const { container } = render(<Screen ref={ref} />)
    const component = container.querySelector(':only-child')
    expect(ref.current).toBe(component)
  })
})
