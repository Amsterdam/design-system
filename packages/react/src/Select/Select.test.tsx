import { render } from '@testing-library/react'
import { createRef } from 'react'
import { Select } from './Select'
import '@testing-library/jest-dom'

describe('Select', () => {
  it('renders', () => {
    const { container } = render(<Select />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Select />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-select')
  })

  it('renders an additional class name', () => {
    const { container } = render(<Select className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-select extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<Select ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
