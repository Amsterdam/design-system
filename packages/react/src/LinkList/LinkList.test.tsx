import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { LinkList } from './LinkList'

describe('Link list', () => {
  it('renders', () => {
    render(<LinkList />)

    const component = screen.getByRole('list')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<LinkList />)

    const component = screen.getByRole('list')

    expect(component).toHaveClass('amsterdam-link-list')
  })

  it('renders an additional class name', () => {
    render(<LinkList className="extra" />)

    const component = screen.getByRole('list')

    expect(component).toHaveClass('amsterdam-link-list extra')
  })

  it('renders a class name for the small size', () => {
    render(<LinkList size="small" />)

    const component = screen.getByRole('list')

    expect(component).toHaveClass('amsterdam-link-list--small')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLUListElement>()

    render(<LinkList ref={ref} />)

    const component = screen.getByRole('list')

    expect(ref.current).toBe(component)
  })
})
