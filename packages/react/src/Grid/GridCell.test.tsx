import { render } from '@testing-library/react'
import { createRef } from 'react'
import { GridCell } from './GridCell'
import '@testing-library/jest-dom'

describe('GridCell', () => {
  it('renders', () => {
    const { container } = render(<GridCell />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<GridCell />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-grid-cell')
  })

  it('can have a additional class name', () => {
    const { container } = render(<GridCell className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('extra')

    expect(component).toHaveClass('amsterdam-grid-cell')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<GridCell ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
