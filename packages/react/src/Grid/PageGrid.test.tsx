import { render } from '@testing-library/react'
import { createRef } from 'react'
import { PageGrid } from './PageGrid'
import '@testing-library/jest-dom'

describe('PageGrid', () => {
  it('renders', () => {
    const { container } = render(<PageGrid />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<PageGrid />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-page-grid')
  })

  it('can have a additional class name', () => {
    const { container } = render(<PageGrid className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('extra')

    expect(component).toHaveClass('amsterdam-page-grid')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<PageGrid ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
