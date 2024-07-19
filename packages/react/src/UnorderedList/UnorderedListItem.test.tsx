import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { UnorderedListItem } from './UnorderedListItem'
import '@testing-library/jest-dom'

describe('Ordered list item', () => {
  it('renders', () => {
    render(<UnorderedListItem />)

    const component = screen.getByRole('listitem')

    expect(component).toBeInTheDocument()
  })

  it('renders a design system BEM class name', () => {
    render(<UnorderedListItem />)

    const component = screen.getByRole('listitem')

    expect(component).toHaveClass('ams-unordered-list__item')
  })

  it('renders an additional class name', () => {
    render(<UnorderedListItem className="extra" />)

    const component = screen.getByRole('listitem')

    expect(component).toHaveClass('ams-unordered-list__item extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLLIElement>()

    render(<UnorderedListItem ref={ref} />)

    const component = screen.getByRole('listitem')

    expect(ref.current).toBe(component)
  })
})
