import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { SearchField } from './SearchField'
import '@testing-library/jest-dom'

describe('Search field', () => {
  it('renders the outer container', () => {
    render(<SearchField />)

    const component = screen.getByRole('search')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders the input', () => {
    render(<SearchField.Input />)

    const component = screen.getByRole('searchbox')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders the button', () => {
    render(<SearchField.Button />)

    const component = screen.getByRole('button')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders the button with a label', () => {
    render(<SearchField.Button>Search</SearchField.Button>)

    const component = screen.getByRole('button', { name: 'Search' })

    expect(component).toBeInTheDocument()
  })

  it('renders the outer container design system BEM class name', () => {
    render(<SearchField />)

    const component = screen.getByRole('search')

    expect(component).toHaveClass('ams-search-field')
  })

  it('renders an additional class name', () => {
    render(<SearchField className="extra" />)

    const component = screen.getByRole('search')

    expect(component).toHaveClass('extra')

    expect(component).toHaveClass('ams-search-field')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLFormElement>()

    render(<SearchField ref={ref} />)

    const component = screen.getByRole('search')

    expect(ref.current).toBe(component)
  })
})
