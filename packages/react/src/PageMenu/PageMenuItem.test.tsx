import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { PageMenuItem } from './PageMenuItem'
import '@testing-library/jest-dom'

describe('Page Menu Item', () => {
  it('renders', () => {
    render(<PageMenuItem />)

    const component = screen.getByRole('listitem')

    expect(component).toBeInTheDocument()
  })

  it('renders a design system BEM class name', () => {
    render(<PageMenuItem />)

    const component = screen.getByRole('listitem')

    expect(component).toHaveClass('ams-page-menu__item')
  })

  it('renders an additional class name', () => {
    render(<PageMenuItem className="extra" />)

    const component = screen.getByRole('listitem')

    expect(component).toHaveClass('ams-page-menu__item extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLLIElement>()

    render(<PageMenuItem ref={ref} />)

    const component = screen.getByRole('listitem')

    expect(ref.current).toBe(component)
  })
})
