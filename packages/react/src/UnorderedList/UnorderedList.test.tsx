import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { UnorderedList } from './UnorderedList'
import '@testing-library/jest-dom'

describe('Unordered list', () => {
  it('renders an HTML ul element', () => {
    const { container } = render(<UnorderedList />)
    const list = container.querySelector('ul:only-child')

    expect(list).toBeInTheDocument()
  })

  it('renders a design system BEM class name', () => {
    render(<UnorderedList />)

    const component = screen.getByRole('list')

    expect(component).toHaveClass('ams-unordered-list')
  })

  it('renders a no markers class', () => {
    render(<UnorderedList markers={false} />)

    const component = screen.getByRole('list')

    expect(component).toHaveClass('ams-unordered-list--no-markers')
  })

  it('renders an inverse color class', () => {
    render(<UnorderedList inverseColor />)

    const component = screen.getByRole('list')

    expect(component).toHaveClass('ams-unordered-list--inverse-color')
  })

  it('renders an additional class name', () => {
    render(<UnorderedList className="extra" />)

    const component = screen.getByRole('list')

    expect(component).toHaveClass('ams-unordered-list extra')
  })

  it('renders its subcomponent', () => {
    const listItems = ['Item 1', 'Item 2', 'Item 3']

    const { container } = render(
      <UnorderedList>
        {listItems.map((item, index) => (
          <UnorderedList.Item key={index}>{item}</UnorderedList.Item>
        ))}
      </UnorderedList>,
    )

    const list = screen.getByRole('list')
    const items = container.querySelectorAll('.ams-unordered-list__item')

    expect(list).toBeInTheDocument()
    expect(items.length).toBe(3)
  })

  it('renders the small size class', () => {
    render(<UnorderedList size="small" />)

    const component = screen.getByRole('list')

    expect(component).toHaveClass('ams-unordered-list--small')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLUListElement>()

    render(<UnorderedList ref={ref} />)

    const component = screen.getByRole('list')

    expect(ref.current).toBe(component)
  })
})
