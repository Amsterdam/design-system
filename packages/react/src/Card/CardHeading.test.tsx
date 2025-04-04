import { render } from '@testing-library/react'
import { createRef } from 'react'
import { CardHeading } from './CardHeading'
import '@testing-library/jest-dom'

describe('Card Heading', () => {
  it('renders', () => {
    const { container } = render(<CardHeading />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<CardHeading />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-card__heading')
  })

  it('renders an additional class name', () => {
    const { container } = render(<CardHeading className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-card__heading extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLHeadingElement>()

    const { container } = render(<CardHeading ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
