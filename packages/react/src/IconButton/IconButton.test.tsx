import { render } from '@testing-library/react'
import { createRef } from 'react'
import { IconButton } from './IconButton'
import '@testing-library/jest-dom'

describe('Icon button', () => {
  it('renders', () => {
    const { container } = render(<IconButton label="test" />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<IconButton label="test" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-icon-button')
  })

  it('renders an additional class name', () => {
    const { container } = render(<IconButton label="test" className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-icon-button extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLButtonElement>()

    const { container } = render(<IconButton label="test" ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
