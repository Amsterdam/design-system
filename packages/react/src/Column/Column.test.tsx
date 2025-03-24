import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Column, columnGaps } from './Column'
import { abbreviateSize } from '../common/abbreviateSize'
import { crossAlignOptionsForColumn, mainAlignOptions } from '../common/types'
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

    expect(component).toHaveClass('ams-column')
  })

  columnGaps.map((gap) =>
    it('renders with ‘${gap}’ gap', () => {
      const { container } = render(<Column gap={gap} />)

      const component = container.querySelector(':only-child')

      if (gap === 'none') {
        expect(component).toHaveClass(`ams-column--gap-none`)
      } else {
        expect(component).toHaveClass(`ams-gap-${abbreviateSize(gap)}`)
      }
    }),
  )

  it('renders an additional class name', () => {
    const { container } = render(<Column className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-column extra')
  })

  it('renders with an article tag', () => {
    render(<Column as="article" />)

    const component = screen.getByRole('article')

    expect(component).toBeInTheDocument()
  })

  it('renders with a section tag', () => {
    const { container } = render(<Column as="section" />)

    const component = container.querySelector('section')

    expect(component).toBeInTheDocument()
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<Column ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  describe('Alignment', () => {
    mainAlignOptions.map((align) =>
      it(`sets the ‘${align}’ alignment`, () => {
        const { container } = render(<Column align={align} />)

        const component = container.querySelector(':only-child')

        expect(component).toHaveClass(`ams-column--align-${align}`)
      }),
    )

    crossAlignOptionsForColumn.map((align) =>
      it(`sets the ‘${align}’ vertical alignment`, () => {
        const { container } = render(<Column alignHorizontal={align} />)

        const component = container.querySelector(':only-child')

        expect(component).toHaveClass(`ams-column--align-horizontal-${align}`)
      }),
    )
  })
})
