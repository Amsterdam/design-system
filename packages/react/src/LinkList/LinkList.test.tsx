import { render } from '@testing-library/react'
import { createRef } from 'react'
import { LinkList } from './LinkList'
import '@testing-library/jest-dom'

describe('Link list', () => {
  it('renders', () => {
    const { container } = render(<LinkList />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<LinkList />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-link-list')
  })

  it('renders an additional class name', () => {
    const { container } = render(<LinkList className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-link-list extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<LinkList ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
