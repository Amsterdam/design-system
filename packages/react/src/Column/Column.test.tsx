import { render } from '@testing-library/react'
import { createRef } from 'react'
import { Column } from './Column'
import '@testing-library/jest-dom'

describe('Column', () => {
  it('renders', () => {
    const { container } = render(<Column />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Column />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-gap--md')
  })

  it('renders a custom gap class name', () => {
    const { container } = render(<Column gap="xl" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-gap--xl')
  })

  it('renders an additional class name', () => {
    const { container } = render(<Column className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-gap--md extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<Column ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
