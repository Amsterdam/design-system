import { render } from '@testing-library/react'
import { createRef } from 'react'
import { Grid } from './Grid'
import '@testing-library/jest-dom'

describe('Grid', () => {
  it('renders', () => {
    const { container } = render(<Grid />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Grid />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-grid')
  })

  it('can have a additional class name', () => {
    const { container } = render(<Grid className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('extra')

    expect(component).toHaveClass('amsterdam-grid')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<Grid ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
