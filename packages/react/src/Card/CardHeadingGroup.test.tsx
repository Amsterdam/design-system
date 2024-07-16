import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { CardHeadingGroup } from './CardHeadingGroup'
import '@testing-library/jest-dom'

describe('Card heading group', () => {
  it('renders', () => {
    const { container } = render(<CardHeadingGroup tagline="test" />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<CardHeadingGroup tagline="test" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-card__heading-group')
  })

  it('renders an additional class name', () => {
    const { container } = render(<CardHeadingGroup tagline="test" className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-card__heading-group extra')
  })

  it('renders a tagline', () => {
    render(<CardHeadingGroup tagline="tagline" />)

    const tagline = screen.getByText('tagline')

    expect(tagline).toBeInTheDocument()
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<CardHeadingGroup tagline="test" ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
