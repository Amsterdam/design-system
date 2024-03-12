import { render } from '@testing-library/react'
import { createRef } from 'react'
import { FooterBottom } from './FooterBottom'
import '@testing-library/jest-dom'

describe('Footer bottom', () => {
  it('renders', () => {
    const { container } = render(<FooterBottom />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<FooterBottom />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-footer__bottom')
  })

  it('renders an additional class name', () => {
    const { container } = render(<FooterBottom className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-footer__bottom extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<FooterBottom ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
