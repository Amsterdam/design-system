import { render } from '@testing-library/react'
import { createRef } from 'react'
import { Table } from './Table'
import '@testing-library/jest-dom'

describe('Table', () => {
  it('renders', () => {
    const { container } = render(<Table />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Table />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-table')
  })

  it('renders an additional class name', () => {
    const { container } = render(<Table className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-table extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLTableElement>()

    const { container } = render(<Table ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
