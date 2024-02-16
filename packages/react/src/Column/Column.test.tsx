import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Column, columnGapSizes } from './Column'
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

    expect(component).toHaveClass('amsterdam-column--medium')
  })

  columnGapSizes.map((size) =>
    it('renders with ${size} gap', () => {
      const { container } = render(<Column gap={size} />)

      const component = container.querySelector(':only-child')

      expect(component).toHaveClass(`amsterdam-column--${size}`)
    }),
  )

  it('renders an additional class name', () => {
    const { container } = render(<Column className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-column--medium extra')
  })

  it('renders a custom tag', () => {
    render(<Column as="article" />)

    const component = screen.getByRole('article')

    expect(component).toBeInTheDocument()
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<Column ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
