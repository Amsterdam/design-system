import { render } from '@testing-library/react'
import { createRef } from 'react'
import { Highlight } from './Highlight'
import '@testing-library/jest-dom'

describe('Highlight', () => {
  it('renders', () => {
    const { container } = render(<Highlight />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Highlight />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-highlight')
  })

  it('can have a additional class name', () => {
    const { container } = render(<Highlight className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('extra')

    expect(component).toHaveClass('amsterdam-highlight')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<Highlight ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
