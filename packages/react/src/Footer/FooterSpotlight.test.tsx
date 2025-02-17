import { render } from '@testing-library/react'
import { createRef } from 'react'
import { Footer } from './Footer'
import '@testing-library/jest-dom'

describe('Footer top', () => {
  it('renders', () => {
    const { container } = render(<Footer.Spotlight />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Footer.Spotlight />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-footer__spotlight')
  })

  it('renders an additional class name', () => {
    const { container } = render(<Footer.Spotlight className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-footer__spotlight extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<Footer.Spotlight ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
