import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Table } from './Table'
import '@testing-library/jest-dom'

describe('Table', () => {
  it('renders', () => {
    render(<Table />)

    const component = screen.getByRole('table')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<Table />)

    const component = screen.getByRole('table')

    expect(component).toHaveClass('ams-table__table')
  })

  it('renders an additional class name', () => {
    render(<Table className="extra" />)

    const component = screen.getByRole('table')

    expect(component).toHaveClass('ams-table__table extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLTableElement>()

    render(<Table ref={ref} />)

    const component = screen.getByRole('table')

    expect(ref.current).toBe(component)
  })
})
