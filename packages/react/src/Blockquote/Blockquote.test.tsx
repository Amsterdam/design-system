import { render } from '@testing-library/react'
import { createRef } from 'react'
import { Blockquote } from './Blockquote'
import '@testing-library/jest-dom'

describe('Blockquote', () => {
  it('renders', () => {
    const { container } = render(<Blockquote />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Blockquote />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-blockquote')
  })

  it('can have a custom class name', () => {
    const { container } = render(<Blockquote className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('extra')
  })

  it('can have a additional class name', () => {
    const { container } = render(<Blockquote className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('extra')

    expect(component).toHaveClass('amsterdam-blockquote')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<Blockquote ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
