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

  it('renders no class names for undefined values for colStart and colSpan', () => {
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

  it('renders class names for single number values for colStart and colSpan', () => {
    const { container } = render(<Breakout.Cell colSpan={4} colStart={2} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-breakout__cell--col-span-4 ams-breakout__cell--col-start-2')
  })

  it('renders class names for a single number value for colStart', () => {
    const { container } = render(<Breakout.Cell colSpan={8} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-breakout__cell--col-span-8')
  })

  it('renders class names for a single number value for colSpan', () => {
    const { container } = render(<Breakout.Cell colStart={6} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-breakout__cell--col-start-6')
  })

  it('renders class names for a single number for colSpan and an object for colStart', () => {
    const { container } = render(<Breakout.Cell colSpan={8} colStart={{ narrow: 2, medium: 4, wide: 6 }} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass(
      'ams-breakout__cell--col-span-8 ams-breakout__cell--col-start-2 ams-breakout__cell--col-start-4-medium ams-breakout__cell--col-start-6-wide',
    )
  })

  it('renders class names for an object for colSpan and a single number for colStart', () => {
    const { container } = render(<Breakout.Cell colSpan={{ narrow: 3, medium: 5, wide: 7 }} colStart={2} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass(
      'ams-breakout__cell--col-span-3 ams-breakout__cell--col-span-5-medium ams-breakout__cell--col-span-7-wide ams-breakout__cell--col-start-2',
    )
  })

  it('renders class names for an object for both colSpan and colStart', () => {
    const { container } = render(
      <Breakout.Cell colSpan={{ medium: 4, narrow: 2, wide: 6 }} colStart={{ medium: 3, narrow: 1, wide: 5 }} />,
    )

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass(
      'ams-breakout__cell--col-span-2 ams-breakout__cell--col-span-4-medium ams-breakout__cell--col-span-6-wide ams-breakout__cell--col-start-1 ams-breakout__cell--col-start-3-medium ams-breakout__cell--col-start-5-wide',
    )
  })

  it('renders the correct class name for the “all” value of colSpan', () => {
    const { container } = render(<Breakout.Cell colSpan="all" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-breakout__cell--col-span-all')
  })

  it('renders class names for single number values for rowStart and rowSpan', () => {
    const { container } = render(<Breakout.Cell rowSpan={3} rowStart={2} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-breakout__cell--row-span-3 ams-breakout__cell--row-start-2')
  })

  it('renders class names for a single number value for rowStart', () => {
    const { container } = render(<Breakout.Cell rowStart={4} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-breakout__cell--row-start-4')
  })

  it('renders class names for a single number value for rowSpan', () => {
    const { container } = render(<Breakout.Cell rowSpan={2} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-breakout__cell--row-span-2')
  })

  it('renders class names for a single number for rowSpan and an object for rowStart', () => {
    const { container } = render(<Breakout.Cell rowSpan={3} rowStart={{ narrow: 1, medium: 2, wide: 3 }} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass(
      'ams-breakout__cell--row-span-3 ams-breakout__cell--row-start-1 ams-breakout__cell--row-start-2-medium ams-breakout__cell--row-start-3-wide',
    )
  })

  it('renders class names for an object for rowSpan and a single number for rowStart', () => {
    const { container } = render(<Breakout.Cell rowSpan={{ narrow: 2, medium: 3, wide: 4 }} rowStart={1} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass(
      'ams-breakout__cell--row-span-2 ams-breakout__cell--row-span-3-medium ams-breakout__cell--row-span-4-wide ams-breakout__cell--row-start-1',
    )
  })

  it('renders class names for an object for both rowSpan and rowStart', () => {
    const { container } = render(
      <Breakout.Cell rowSpan={{ medium: 3, narrow: 2, wide: 4 }} rowStart={{ medium: 2, narrow: 1, wide: 3 }} />,
    )

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass(
      'ams-breakout__cell--row-span-2 ams-breakout__cell--row-span-3-medium ams-breakout__cell--row-span-4-wide ams-breakout__cell--row-start-1 ams-breakout__cell--row-start-2-medium ams-breakout__cell--row-start-3-wide',
    )
  })
})

it(`renders the correct class if it has a Figure`, () => {
  const { container } = render(<Breakout.Cell has="figure" />)

  const component = container.querySelector(':only-child')

  expect(component).toHaveClass(`ams-breakout__cell--has-figure`)
})

it(`renders the correct class if it has a Spotlight`, () => {
  const { container } = render(<Breakout.Cell colSpan="all" has="spotlight" />)

  const component = container.querySelector(':only-child')

  expect(component).toHaveClass(`ams-breakout__cell--has-spotlight`)
})

it('renders a custom tag', () => {
  render(<Breakout.Cell as="article" />)

  const cell = screen.getByRole('article')

  expect(cell).toBeInTheDocument()
})
