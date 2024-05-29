import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef, useState } from 'react'
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

    expect(component).toHaveClass('ams-search-field__input')
  })

  it('renders an additional class name', () => {
    render(<SearchFieldInput className="extra" />)

    const component = screen.getByRole('searchbox', { name: 'Zoeken' })

    expect(component).toHaveClass('extra')

    expect(component).toHaveClass('ams-search-field__input')
  })

  it('supports a custom label', () => {
    render(<SearchFieldInput label="Test label" />)

    const component = screen.getByRole('searchbox', { name: 'Test label' })

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('should be working in a controlled state', async () => {
    function ControlledComponent() {
      const [value, setValue] = useState('Hello')

      return <SearchFieldInput value={value} onChange={(e) => setValue(e.target.value)} />
    }

    render(<ControlledComponent />)

    const componentText = screen.getByDisplayValue('Hello')
    expect(componentText).toBeInTheDocument()

    const component = screen.getByRole('searchbox', { name: 'Zoeken' })
    if (component) {
      await userEvent.type(component, ', World!')
    }

    const newComponentText = screen.getByDisplayValue('Hello, World!')
    expect(newComponentText).toBeInTheDocument()
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLInputElement>()

    render(<SearchFieldInput ref={ref} />)

    const component = screen.getByRole('searchbox', { name: 'Zoeken' })

    expect(ref.current).toBe(component)
  })

  it('renders bidirectional by default using `dir="auto"`', () => {
    render(<SearchFieldInput />)

    const component = screen.getByRole('searchbox', { name: 'Zoeken' })

    expect(component).toHaveAttribute('dir', 'auto')
  })

  it('renders left-to-right by using `dir="ltr"`', () => {
    render(<SearchFieldInput dir="ltr" />)

    const component = screen.getByRole('searchbox', { name: 'Zoeken' })

    expect(component).toHaveAttribute('dir', 'ltr')
  })
})
