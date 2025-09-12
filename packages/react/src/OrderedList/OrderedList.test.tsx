/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

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

  it('renders the class name for inverse color', () => {
    render(<OrderedList color="inverse" />)

    const component = screen.getByRole('list')

    expect(component).toHaveClass('ams-ordered-list--inverse')
  })

  it('renders an extra class name', () => {
    render(<OrderedList className="extra" />)

    const component = screen.getByRole('list')

    expect(component).toHaveClass('ams-ordered-list extra')
  })

  it('renders its subcomponent', () => {
    const listItems = ['Item 1', 'Item 2', 'Item 3']

    const { container } = render(
      <OrderedList>
        {listItems.map((item) => (
          <OrderedList.Item key={item}>{item}</OrderedList.Item>
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

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLOListElement>()

    render(<OrderedList ref={ref} />)

    const component = screen.getByRole('list')

    expect(ref.current).toBe(component)
  })
})
