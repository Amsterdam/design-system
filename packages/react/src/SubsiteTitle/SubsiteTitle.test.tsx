import { render } from '@testing-library/react'
import { createRef } from 'react'
import { SubsiteTitle } from './SubsiteTitle'
import '@testing-library/jest-dom'

describe('Subsite title', () => {
  it('renders', () => {
    const { container } = render(<SubsiteTitle />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<SubsiteTitle />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-subsite-title')
  })

  it('renders an additional class name', () => {
    const { container } = render(<SubsiteTitle className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('extra')

    expect(component).toHaveClass('amsterdam-subsite-title')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<SubsiteTitle ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
