import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Breakout } from './Breakout'
import '@testing-library/jest-dom'

describe('Breakout cell', () => {
  it('renders', () => {
    const { container } = render(<Breakout.Cell />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Breakout.Cell />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-breakout__cell')
  })

  it('renders an additional class name', () => {
    const { container } = render(<Breakout.Cell className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-breakout__cell extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<Breakout.Cell ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('renders no class names for undefined values for start and span', () => {
    const { container } = render(<Breakout.Cell />)

    const elementWithColSpanClass = container.querySelector('[class*="ams-breakout__cell--col-span"]')
    const elementWithColStartClass = container.querySelector('[class*="ams-breakout__cell--col-start"]')
    const elementWithRowSpanClass = container.querySelector('[class*="ams-breakout__cell--row-span"]')
    const elementWithRowStartClass = container.querySelector('[class*="ams-breakout__cell--row-start"]')

    expect(elementWithColSpanClass).not.toBeInTheDocument()
    expect(elementWithColStartClass).not.toBeInTheDocument()
    expect(elementWithRowSpanClass).not.toBeInTheDocument()
    expect(elementWithRowStartClass).not.toBeInTheDocument()
  })

  it('renders class names for single number values for start and span', () => {
    const { container } = render(<Breakout.Cell colSpan={4} colStart={2} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-breakout__cell--col-span-4 ams-breakout__cell--col-start-2')
  })

  it('renders class names for a single number value for start', () => {
    const { container } = render(<Breakout.Cell colSpan={8} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-breakout__cell--col-span-8')
  })

  it('renders class names for a single number value for span', () => {
    const { container } = render(<Breakout.Cell colStart={6} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-breakout__cell--col-start-6')
  })

  it('renders class names for a single number for span and array values for start', () => {
    const { container } = render(<Breakout.Cell colSpan={8} colStart={{ narrow: 2, medium: 4, wide: 6 }} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass(
      'ams-breakout__cell--col-span-8 ams-breakout__cell--col-start-2 ams-breakout__cell--col-start-4-medium ams-breakout__cell--col-start-6-wide',
    )
  })

  it('renders class names for array values for span and a single number for start', () => {
    const { container } = render(<Breakout.Cell colSpan={{ narrow: 3, medium: 5, wide: 7 }} colStart={2} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass(
      'ams-breakout__cell--col-span-3 ams-breakout__cell--col-span-5-medium ams-breakout__cell--col-span-7-wide ams-breakout__cell--col-start-2',
    )
  })

  it('renders class names for array values for both start and span', () => {
    const { container } = render(
      <Breakout.Cell colSpan={{ medium: 4, narrow: 2, wide: 6 }} colStart={{ medium: 3, narrow: 1, wide: 5 }} />,
    )

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass(
      'ams-breakout__cell--col-span-2 ams-breakout__cell--col-span-4-medium ams-breakout__cell--col-span-6-wide ams-breakout__cell--col-start-1 ams-breakout__cell--col-start-3-medium ams-breakout__cell--col-start-5-wide',
    )
  })

  it('renders the correct class name for the “all” value of span', () => {
    const { container } = render(<Breakout.Cell colSpan="all" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-breakout__cell--col-span-all')
  })

  it('renders the correct class for the `coverGap` prop', () => {
    const { container } = render(<Breakout.Cell colSpan="all" coverGap />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-breakout__cell--cover-gap')
  })

  it('renders a custom tag', () => {
    render(<Breakout.Cell as="article" />)

    const cell = screen.getByRole('article')

    expect(cell).toBeInTheDocument()
  })
})
