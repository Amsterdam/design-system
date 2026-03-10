/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { Table } from './Table'
import { TableCaption } from './TableCaption'

describe('TableCaption', () => {
  it('renders', () => {
    render(
      <Table>
        <TableCaption>Caption</TableCaption>
      </Table>,
    )

    const component = screen.getByRole('table', {
      name: 'Caption',
    })

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(
      <Table>
        <TableCaption>Caption</TableCaption>
      </Table>,
    )

    const component = screen.getByRole('table', {
      name: 'Caption',
    })
    const caption = component?.querySelector(':only-child')

    expect(caption).toHaveClass('ams-table__caption')
  })

  it('renders an extra class name', () => {
    render(
      <Table>
        <TableCaption className="extra">Caption</TableCaption>
      </Table>,
    )

    const component = screen.getByRole('table', {
      name: 'Caption',
    })
    const caption = component?.querySelector(':only-child')

    expect(caption).toHaveClass('ams-table__caption extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLTableCaptionElement>()

    render(
      <Table>
        <TableCaption ref={ref}>Caption</TableCaption>
      </Table>,
    )

    const component = screen.getByRole('table', {
      name: 'Caption',
    })
    const caption = component?.querySelector(':only-child')

    expect(ref.current).toBe(caption)
  })

  it('passes additional props', () => {
    const { container } = render(<TableCaption data-test="data-test" id="id" />)
    const component = container.querySelector(':only-child')

    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})
