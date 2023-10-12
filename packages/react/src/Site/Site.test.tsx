import { render } from '@testing-library/react'
import { createRef } from 'react'
import { Site } from './Site'
import '@testing-library/jest-dom'

describe('Site', () => {
  it('renders', () => {
    const { container } = render(<Site />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Site />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-site')
  })

  it('can have a additional class name', () => {
    const { container } = render(<Site className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('extra')

    expect(component).toHaveClass('amsterdam-site')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<Site ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
