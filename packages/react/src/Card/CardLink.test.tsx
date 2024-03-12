import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { CardLink } from './CardLink'
import '@testing-library/jest-dom'

describe('Card link', () => {
  it('renders', () => {
    render(<CardLink href="/" />)

    const component = screen.getByRole('link')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<CardLink href="/" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-card__link')
  })

  it('renders an additional class name', () => {
    render(<CardLink href="/" className="extra" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-card__link extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLAnchorElement>()

    render(<CardLink href="/" ref={ref} />)

    const component = screen.getByRole('link')

    expect(ref.current).toBe(component)
  })
})
