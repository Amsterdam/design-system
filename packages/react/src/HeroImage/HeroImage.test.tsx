import { render } from '@testing-library/react'
import { createRef } from 'react'
import { HeroImage } from './HeroImage'
import '@testing-library/jest-dom'

describe('Hero image', () => {
  it('renders', () => {
    const { container } = render(<HeroImage src="https://picsum.photos/1280/360" />)
    const component = container.querySelector(':only-child')
    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<HeroImage src="https://picsum.photos/1280/360" />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('amsterdam-hero-image')
  })

  it('renders an additional class name', () => {
    const { container } = render(<HeroImage src="https://picsum.photos/1280/360" className="extra" />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('amsterdam-hero-image extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()
    const { container } = render(<HeroImage src="https://picsum.photos/1280/360" ref={ref} />)
    const component = container.querySelector(':only-child')
    expect(ref.current).toBe(component)
  })
})
