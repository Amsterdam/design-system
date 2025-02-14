import { render } from '@testing-library/react'
import { createRef } from 'react'
import { FooterSpotlight } from './FooterSpotlight'
import '@testing-library/jest-dom'

describe('Footer top', () => {
  it('renders', () => {
    const { container } = render(<FooterSpotlight />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<FooterSpotlight />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-footer__top')
  })

  it('renders an additional class name', () => {
    const { container } = render(<FooterSpotlight className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-footer__top extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<FooterSpotlight ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
