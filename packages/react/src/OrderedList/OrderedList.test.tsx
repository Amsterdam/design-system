import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { OrderedList } from './OrderedList'
import '@testing-library/jest-dom'

describe('Ordered list', () => {
  it('renders an HTML ol element', () => {
    const { container } = render(<OrderedList />)
    const list = container.querySelector('ol:only-child')

    expect(list).toBeInTheDocument()
  })

  it('renders a design system BEM class name', () => {
    render(<OrderedList />)

    const component = screen.getByRole('list')

    expect(component).toHaveClass('ams-ordered-list')
  })

  it('renders a no markers class', () => {
    render(<OrderedList markers={false} />)

    const component = screen.getByRole('list')

    expect(component).toHaveClass('ams-ordered-list--no-markers')
  })

  it('renders an inverse color class', () => {
    render(<OrderedList inverseColor />)

    const component = screen.getByRole('list')

    expect(component).toHaveClass('ams-ordered-list--inverse-color')
  })

  it('renders an additional class name', () => {
    render(<OrderedList className="extra" />)

    const component = screen.getByRole('list')

    expect(component).toHaveClass('ams-ordered-list extra')
  })

  it('renders its subcomponent', () => {
    const listItems = ['Item 1', 'Item 2', 'Item 3']

    const { container } = render(
      <OrderedList>
        {listItems.map((item, index) => (
          <OrderedList.Item key={index}>{item}</OrderedList.Item>
        ))}
      </OrderedList>,
    )

    const list = screen.getByRole('list')
    const items = container.querySelectorAll('.ams-ordered-list__item')

    expect(list).toBeInTheDocument()
    expect(items.length).toBe(3)
  })

  it('renders the small size class', () => {
    render(<OrderedList size="small" />)

    const component = screen.getByRole('list')

    expect(component).toHaveClass('ams-ordered-list--small')
  })

  it('renders the large size class', () => {
    render(<OrderedList size="large" />)

    const component = screen.getByRole('list')

    expect(component).toHaveClass('ams-ordered-list--large')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLOListElement>()

    render(<OrderedList ref={ref} />)

    const component = screen.getByRole('list')

    expect(ref.current).toBe(component)
  })
})
