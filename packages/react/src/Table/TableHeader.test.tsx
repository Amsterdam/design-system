/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { Table } from './Table'
import { TableHeader } from './TableHeader'

describe('TableHeader', () => {
  it('renders', () => {
    render(
      <Table>
        <TableHeader />
      </Table>,
    )

    const component = screen.getByRole('rowgroup')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(
      <Table>
        <TableHeader />
      </Table>,
    )

    const component = screen.getByRole('rowgroup')

    expect(component).toHaveClass('ams-table__header')
  })

  it('renders an extra class name', () => {
    render(
      <Table>
        <TableHeader className="extra" />
      </Table>,
    )

    const component = screen.getByRole('rowgroup')

    expect(component).toHaveClass('ams-table__header extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLTableSectionElement>()

    render(
      <Table>
        <TableHeader ref={ref} />
      </Table>,
    )

    const component = screen.getByRole('rowgroup')

    expect(ref.current).toBe(component)
  })

  it('passes additional props', () => {
    render(<TableHeader aria-hidden="false" data-test="data-test" id="id" />)

    const component = screen.getByRole('rowgroup')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})
