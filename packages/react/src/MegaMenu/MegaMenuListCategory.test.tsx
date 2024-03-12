import { render } from '@testing-library/react'
import { createRef } from 'react'
import { MegaMenuListCategory } from './MegaMenuListCategory'
import '@testing-library/jest-dom'

describe('Mega menu category', () => {
  it('renders', () => {
    const { container } = render(<MegaMenuListCategory />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<MegaMenuListCategory />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-mega-menu__list-category')
  })

  it('renders an additional class name', () => {
    const { container } = render(<MegaMenuListCategory className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-mega-menu__list-category extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<MegaMenuListCategory ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
