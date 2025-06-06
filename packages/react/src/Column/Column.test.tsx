/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Column, columnGapSizes, columnTags } from './Column'
import { ariaRoleForTag } from '../common/accessibility'
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

  columnGapSizes.map((gap) =>
    it(`renders with ‘${gap}’ gap`, () => {
      const { container } = render(<Column gap={gap} />)

      const component = container.querySelector(':only-child')

      expect(component).toHaveClass(`ams-column--gap-${gap}`)
    }),
  )

  it('renders an extra class name', () => {
    const { container } = render(<Column className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-column extra')
  })

  columnTags.forEach((tag) => {
    it(`renders with a custom ${tag} tag`, () => {
      const { container } = render(<Column aria-label={tag === 'section' ? 'Accessible name' : undefined} as={tag} />)

      const component = tag === 'div' ? container.querySelector(tag) : screen.getByRole(ariaRoleForTag[tag])

      expect(component).toBeInTheDocument()
    })
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
