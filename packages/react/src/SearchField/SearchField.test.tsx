import { render } from '@testing-library/react'
import { createRef } from 'react'
import { SearchField } from './SearchField'
import '@testing-library/jest-dom'

describe('Search field', () => {
  it('renders', () => {
    const { container } = render(<SearchField />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<SearchField />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-search-field')
  })

  it('renders an additional class name', () => {
    const { container } = render(<SearchField className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('extra')

    expect(component).toHaveClass('amsterdam-search-field')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<SearchField ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
