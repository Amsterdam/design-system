/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { Table } from './Table'

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

  it('renders an extra class name', () => {
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

  it('passes additional props', () => {
    const { container } = render(<Table data-test="data-test" id="id" />)
    const component = container.querySelector(':only-child')

    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})
