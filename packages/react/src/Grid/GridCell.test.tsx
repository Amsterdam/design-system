import { render } from '@testing-library/react'
import { createRef } from 'react'
import { GridCell } from './GridCell'
import '@testing-library/jest-dom'

describe('GridCell', () => {
  it('renders', () => {
    const { container } = render(<GridCell />)
    const component = container.querySelector(':only-child')
    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<GridCell />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('amsterdam-grid-cell')
  })

  it('can have a additional class name', () => {
    const { container } = render(<GridCell className="extra" />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('amsterdam-grid-cell extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()
    const { container } = render(<GridCell ref={ref} />)
    const component = container.querySelector(':only-child')
    expect(ref.current).toBe(component)
  })

  it('generates no class names for undefined values for start and span', () => {
    const { container } = render(<GridCell />)
    const elementWithSpanClass = container.querySelector('[class*="amsterdam-grid-cell--span"]')
    const elementWithStartClass = container.querySelector('[class*="amsterdam-grid-cell--start"]')
    expect(elementWithSpanClass).not.toBeInTheDocument()
    expect(elementWithStartClass).not.toBeInTheDocument()
  })

  it('generates class names for single number values for start and span', () => {
    const { container } = render(<GridCell span={4} start={2} />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('amsterdam-grid-cell--span-4 amsterdam-grid-cell--start-2')
  })

  it('generates class names for a single number value for start', () => {
    const { container } = render(<GridCell span={8} />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('amsterdam-grid-cell--span-8')
  })

  it('generates class names for a single number value for span', () => {
    const { container } = render(<GridCell start={6} />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('amsterdam-grid-cell--start-6')
  })

  it('generates class names for a single number for span and array values for start', () => {
    const { container } = render(<GridCell span={8} start={{ narrow: 2, medium: 4, wide: 6 }} />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass(
      'amsterdam-grid-cell--span-8 amsterdam-grid-cell--start-2 amsterdam-grid-cell--start-4-medium amsterdam-grid-cell--start-6-wide',
    )
  })

  it('generates class names for array values for span and a single number for start', () => {
    const { container } = render(<GridCell span={{ narrow: 3, medium: 5, wide: 7 }} start={2} />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass(
      'amsterdam-grid-cell--span-3 amsterdam-grid-cell--span-5-medium amsterdam-grid-cell--span-7-wide amsterdam-grid-cell--start-2',
    )
  })

  it('generates class names for an array of three numbers for start and span', () => {
    const { container } = render(
      <GridCell span={{ narrow: 2, medium: 4, wide: 6 }} start={{ narrow: 1, medium: 3, wide: 5 }} />,
    )
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass(
      'amsterdam-grid-cell--span-2 amsterdam-grid-cell--span-4-medium amsterdam-grid-cell--span-6-wide amsterdam-grid-cell--start-1 amsterdam-grid-cell--start-3-medium amsterdam-grid-cell--start-5-wide',
    )
  })
})
