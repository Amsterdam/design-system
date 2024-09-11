import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Grid } from './Grid'
import '@testing-library/jest-dom'

describe('Grid cell', () => {
  it('renders', () => {
    const { container } = render(<Grid.Cell />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Grid.Cell />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-grid__cell')
  })

  it('renders an additional class name', () => {
    const { container } = render(<Grid.Cell className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-grid__cell extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<Grid.Cell ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('renders no class names for undefined values for start and span', () => {
    const { container } = render(<Grid.Cell />)

    const elementWithSpanClass = container.querySelector('[class*="ams-grid__cell--span"]')
    const elementWithStartClass = container.querySelector('[class*="ams-grid__cell--start"]')

    expect(elementWithSpanClass).not.toBeInTheDocument()
    expect(elementWithStartClass).not.toBeInTheDocument()
  })

  it('renders class names for single number values for start and span', () => {
    const { container } = render(<Grid.Cell span={4} start={2} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-grid__cell--span-4 ams-grid__cell--start-2')
  })

  it('renders class names for a single number value for start', () => {
    const { container } = render(<Grid.Cell span={8} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-grid__cell--span-8')
  })

  it('renders class names for a single number value for span', () => {
    const { container } = render(<Grid.Cell start={6} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-grid__cell--start-6')
  })

  it('renders class names for a single number for span and array values for start', () => {
    const { container } = render(<Grid.Cell span={8} start={{ narrow: 2, medium: 4, wide: 6 }} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass(
      'ams-grid__cell--span-8 ams-grid__cell--start-2 ams-grid__cell--start-4-medium ams-grid__cell--start-6-wide',
    )
  })

  it('renders class names for array values for span and a single number for start', () => {
    const { container } = render(<Grid.Cell span={{ narrow: 3, medium: 5, wide: 7 }} start={2} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass(
      'ams-grid__cell--span-3 ams-grid__cell--span-5-medium ams-grid__cell--span-7-wide ams-grid__cell--start-2',
    )
  })

  it('renders class names for array values for both start and span', () => {
    const { container } = render(
      <Grid.Cell span={{ narrow: 2, medium: 4, wide: 6 }} start={{ narrow: 1, medium: 3, wide: 5 }} />,
    )

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass(
      'ams-grid__cell--span-2 ams-grid__cell--span-4-medium ams-grid__cell--span-6-wide ams-grid__cell--start-1 ams-grid__cell--start-3-medium ams-grid__cell--start-5-wide',
    )
  })

  it('renders the correct class name for the “all” value of span', () => {
    const { container } = render(<Grid.Cell span="all" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-grid__cell--span-all')
  })

  it('renders the correct class for the `coverGap` prop', () => {
    const { container } = render(<Grid.Cell coverGap />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-grid__cell--cover-gap')
  })

  it('renders a custom tag', () => {
    render(<Grid.Cell as="article" />)

    const cell = screen.getByRole('article')

    expect(cell).toBeInTheDocument()
  })
})
