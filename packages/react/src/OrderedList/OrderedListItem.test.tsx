import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { OrderedListItem } from './OrderedListItem'
import '@testing-library/jest-dom'

describe('Ordered list item', () => {
  it('renders', () => {
    render(<OrderedListItem />)

    const component = screen.getByRole('listitem')

    expect(component).toBeInTheDocument()
  })

  it('renders a design system BEM class name', () => {
    render(<OrderedListItem />)

    const component = screen.getByRole('listitem')

    expect(component).toHaveClass('ams-ordered-list__item')
  })

  it('renders an additional class name', () => {
    render(<OrderedListItem className="extra" />)

    const component = screen.getByRole('listitem')

    expect(component).toHaveClass('ams-ordered-list__item extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLLIElement>()
    render(<OrderedListItem ref={ref} />)

    const component = screen.getByRole('listitem')

    expect(ref.current).toBe(component)
  })
})
