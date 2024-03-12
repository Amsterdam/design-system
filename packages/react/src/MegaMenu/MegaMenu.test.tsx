import { render } from '@testing-library/react'
import { createRef } from 'react'
import { MegaMenu } from './MegaMenu'
import '@testing-library/jest-dom'

describe('Mega menu', () => {
  it('renders', () => {
    const { container } = render(<MegaMenu />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<MegaMenu />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-mega-menu')
  })

  it('renders an additional class name', () => {
    const { container } = render(<MegaMenu className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-mega-menu extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<MegaMenu ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
