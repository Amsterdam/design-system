import { render } from '@testing-library/react'
import { createRef } from 'react'
import { Row } from './Row'
import '@testing-library/jest-dom'

describe('Row', () => {
  it('renders', () => {
    const { container } = render(<Row />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Row />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-row')
  })

  it('renders an additional class name', () => {
    const { container } = render(<Row className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-row extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<Row ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
