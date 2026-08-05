/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { ariaRoleForTag } from '../common/accessibility'
import { Grid, gridGaps } from './Grid'
import { gridSubgridTags } from './GridSubgrid'

describe('GridSubgrid', () => {
  it('renders', () => {
    const { container } = render(<Grid.Subgrid />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Grid.Subgrid />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-grid__subgrid')
  })

  it('renders an extra class name', () => {
    const { container } = render(<Grid.Subgrid className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-grid__subgrid extra')
  })

  it('renders no class names for undefined values for span, start, rowSpan and rowStart', () => {
    const { container } = render(<Grid.Subgrid />)

    expect(container.querySelector('[class*="ams-grid__subgrid--span"]')).not.toBeInTheDocument()
    expect(container.querySelector('[class*="ams-grid__subgrid--start"]')).not.toBeInTheDocument()
    expect(container.querySelector('[class*="ams-grid__subgrid--row-span"]')).not.toBeInTheDocument()
    expect(container.querySelector('[class*="ams-grid__subgrid--row-start"]')).not.toBeInTheDocument()
  })

  it('renders class names for single number values for span and start', () => {
    const { container } = render(<Grid.Subgrid span={9} start={4} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-grid__subgrid--span-9 ams-grid__subgrid--start-4')
  })

  it('renders class names for objects for span and start', () => {
    const { container } = render(
      <Grid.Subgrid span={{ narrow: 4, medium: 6, wide: 9 }} start={{ narrow: 1, medium: 3, wide: 4 }} />,
    )

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass(
      'ams-grid__subgrid--span-4 ams-grid__subgrid--span-6-medium ams-grid__subgrid--span-9-wide ams-grid__subgrid--start-1 ams-grid__subgrid--start-3-medium ams-grid__subgrid--start-4-wide',
    )
  })

  it('renders a class name for a span of all columns', () => {
    const { container } = render(<Grid.Subgrid span="all" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-grid__subgrid--span-all')
  })

  it('renders a class name for a row span', () => {
    const { container } = render(<Grid.Subgrid rowSpan={2} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-grid__subgrid--row-span-2')
  })

  it('renders a class name for a single number value for rowStart', () => {
    const { container } = render(<Grid.Subgrid rowStart={2} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-grid__subgrid--row-start-2')
  })

  it('renders class names for objects for rowSpan and rowStart', () => {
    const { container } = render(
      <Grid.Subgrid rowSpan={{ narrow: 1, medium: 2, wide: 3 }} rowStart={{ narrow: 2, medium: 3, wide: 4 }} />,
    )

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass(
      'ams-grid__subgrid--row-span-1 ams-grid__subgrid--row-span-2-medium ams-grid__subgrid--row-span-3-wide ams-grid__subgrid--row-start-2 ams-grid__subgrid--row-start-3-medium ams-grid__subgrid--row-start-4-wide',
    )
  })

  it.each(gridGaps)('renders a class name for the %s vertical gap', (gap) => {
    const { container } = render(<Grid.Subgrid gapVertical={gap} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass(`ams-grid__subgrid--gap-vertical--${gap}`)
  })

  gridSubgridTags.forEach((tag) => {
    it(`renders with a custom ${tag} tag`, () => {
      const subgrid = <Grid.Subgrid aria-label={tag === 'section' ? 'Accessible name' : undefined} as={tag} />

      // A list item only takes its role inside a list.
      const { container } = render(tag === 'li' ? <ul>{subgrid}</ul> : subgrid)

      const component = tag === 'div' ? container.querySelector(tag) : screen.getByRole(ariaRoleForTag[tag])

      expect(component).toBeInTheDocument()
    })
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<Grid.Subgrid ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('passes additional props', () => {
    const { container } = render(<Grid.Subgrid aria-hidden={false} data-test="data-test" id="id" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})
