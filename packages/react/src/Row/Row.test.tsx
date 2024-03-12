import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Row, rowGapSizes } from './Row'
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

    expect(component).toHaveClass('ams-row--medium')
  })

  rowGapSizes.map((size) =>
    it('renders with ${size} gap', () => {
      const { container } = render(<Row gap={size} />)

      const component = container.querySelector(':only-child')

      expect(component).toHaveClass(`ams-row--${size}`)
    }),
  )

  it('renders an additional class name', () => {
    const { container } = render(<Row className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-row--medium extra')
  })

  it('renders with an article tag', () => {
    render(<Row as="article" />)

    const component = screen.getByRole('article')

    expect(component).toBeInTheDocument()
  })

  it('renders with a section tag', () => {
    const { container } = render(<Row as="section" />)

    const component = container.querySelector('section')

    expect(component).toBeInTheDocument()
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<Row ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
