/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { Table } from './Table'
import { TableBody } from './TableBody'

describe('TableBody', () => {
  it('renders', () => {
    render(
      <Table>
        <TableBody />
      </Table>,
    )

    const component = screen.getByRole('rowgroup')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(
      <Table>
        <TableBody />
      </Table>,
    )

    const component = screen.getByRole('rowgroup')

    expect(component).toHaveClass('ams-table__body')
  })

  it('renders an extra class name', () => {
    render(
      <Table>
        <TableBody className="extra" />
      </Table>,
    )

    const component = screen.getByRole('rowgroup')

    expect(component).toHaveClass('ams-table__body extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLTableSectionElement>()

    render(
      <Table>
        <TableBody ref={ref} />
      </Table>,
    )

    const component = screen.getByRole('rowgroup')

    expect(ref.current).toBe(component)
  })

  it('passes additional props', () => {
    render(<TableBody aria-hidden="false" data-test="data-test" id="id" />)

    cconst component = screen.getByRole('rowgroup')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})
