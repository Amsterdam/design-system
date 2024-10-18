import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Row, rowGapSizes } from './Row'
import { crossAlignOptions, mainAlignOptions } from '../common/layout'
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

    expect(component).toHaveClass('ams-row')
  })

  rowGapSizes.map((size) =>
    it('renders with ${size} gap', () => {
      const { container } = render(<Row gap={size} />)

      const component = container.querySelector(':only-child')

      expect(component).toHaveClass(`ams-row--gap-${size}`)
    }),
  )

  it('renders an additional class name', () => {
    const { container } = render(<Row className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-row extra')
  })

  it('renders a class name to allow wrapping', () => {
    const { container } = render(<Row wrap />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-row--wrap')
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
    const ref = createRef<HTMLElement>()

    const { container } = render(<Row ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  describe('Alignment', () => {
    mainAlignOptions.map((align) =>
      it(`sets the ‘${align}’ alignment`, () => {
        const { container } = render(<Row align={align} />)

        const component = container.querySelector(':only-child')

        expect(component).toHaveClass(`ams-row--align-${align}`)
      }),
    )

    crossAlignOptions.map((align) =>
      it(`sets the ‘${align}’ vertical alignment`, () => {
        const { container } = render(<Row alignVertical={align} />)

        const component = container.querySelector(':only-child')

        expect(component).toHaveClass(`ams-row--align-vertical-${align}`)
      }),
    )
  })
})
