import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { MegaMenu } from './MegaMenu'
import '@testing-library/jest-dom'

describe('Mega menu', () => {
  it('renders', () => {
    render(<MegaMenu />)

    const component = screen.getByRole('navigation')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<MegaMenu />)

    const component = screen.getByRole('navigation')

    expect(component).toHaveClass('amsterdam-mega-menu')
  })

  it('renders an additional class name', () => {
    render(<MegaMenu className="extra" />)

    const component = screen.getByRole('navigation')

    expect(component).toHaveClass('extra')

    expect(component).toHaveClass('amsterdam-mega-menu')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<MegaMenu ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
