import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { TableOfContents } from './TableOfContents'
import '@testing-library/jest-dom'

describe('Table of Contents list', () => {
  it('renders an HTML ul element', () => {
    const { container } = render(<TableOfContents.List />)
    const list = container.querySelector('ul:only-child')

    expect(list).toBeInTheDocument()
  })

  it('renders a design system BEM class name', () => {
    render(<TableOfContents.List />)

    const component = screen.getByRole('list')

    expect(component).toHaveClass('ams-table-of-contents__list')
  })

  it('renders an additional class name', () => {
    render(<TableOfContents.List className="extra" />)

    const component = screen.getByRole('list')

    expect(component).toHaveClass('ams-table-of-contents__list extra')
  })

  it('renders its subcomponent', () => {
    const listItems = ['Item 1', 'Item 2', 'Item 3']

    const { container } = render(
      <TableOfContents.List>
        {listItems.map((item, index) => (
          <TableOfContents.Link key={index} label={`Link ${item}`} />
        ))}
      </TableOfContents.List>,
    )

    const list = screen.getByRole('list')
    const items = container.querySelectorAll('.ams-table-of-contents__item')

    expect(list).toBeInTheDocument()
    expect(items.length).toBe(3)
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLUListElement>()

    render(<TableOfContents.List ref={ref} />)

    const component = screen.getByRole('list')

    expect(ref.current).toBe(component)
  })
})
