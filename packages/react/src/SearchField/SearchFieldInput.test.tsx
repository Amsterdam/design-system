import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { SearchFieldInput } from './SearchFieldInput'
import '@testing-library/jest-dom'

describe('Search field input', () => {
  it('renders', () => {
    render(<SearchFieldInput />)

    const component = screen.getByRole('searchbox', { name: 'Zoeken' })

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<SearchFieldInput />)

    const component = screen.getByRole('searchbox', { name: 'Zoeken' })

    expect(component).toHaveClass('amsterdam-search-field__input')
  })

  it('renders an additional class name', () => {
    render(<SearchFieldInput className="extra" />)

    const component = screen.getByRole('searchbox', { name: 'Zoeken' })

    expect(component).toHaveClass('extra')

    expect(component).toHaveClass('amsterdam-search-field__input')
  })

  it('supports a custom label', () => {
    render(<SearchFieldInput label="Test label" />)

    const component = screen.getByRole('searchbox', { name: 'Test label' })

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLInputElement>()

    render(<SearchFieldInput ref={ref} />)

    const component = screen.getByRole('searchbox', { name: 'Zoeken' })

    expect(ref.current).toBe(component)
  })
})
