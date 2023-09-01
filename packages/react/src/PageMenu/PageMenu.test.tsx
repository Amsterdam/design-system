import { render } from '@testing-library/react'
import { createRef } from 'react'
import { PageMenu } from './PageMenu'
import '@testing-library/jest-dom'

describe('Page menu', () => {
  it('renders', () => {
    const { container } = render(<PageMenu />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<PageMenu />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-page-menu')
  })

  it('can have a custom class name', () => {
    const { container } = render(<PageMenu className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('extra')
  })

  it('can have a additional class name', () => {
    const { container } = render(<PageMenu className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('extra')

    expect(component).toHaveClass('amsterdam-page-menu')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<PageMenu ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
