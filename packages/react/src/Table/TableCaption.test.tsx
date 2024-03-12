import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Table } from './Table'
import { TableCaption } from './TableCaption'
import '@testing-library/jest-dom'

describe('Table caption', () => {
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

  it('renders an additional class name', () => {
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
})
