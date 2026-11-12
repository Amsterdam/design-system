/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { Columns, columnsCounts } from './Columns'

describe('Columns', () => {
  it('renders', () => {
    const { container } = render(<Columns />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Columns />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-columns')
  })

  it('renders an extra class name', () => {
    const { container } = render(<Columns className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-columns extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<Columns ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('renders its content', () => {
    render(
      <Columns>
        <ul>
          <li>Afval</li>
          <li>Parkeren</li>
        </ul>
      </Columns>,
    )

    const list = screen.getByRole('list')

    expect(list.parentElement).toHaveClass('ams-columns')
    expect(screen.getAllByRole('listitem')).toHaveLength(2)
  })

  it('renders no count class by default', () => {
    const { container } = render(<Columns />)

    const component = container.querySelector(':only-child')

    expect(component?.className).toBe('ams-columns')
  })

  columnsCounts.forEach((count) => {
    it(`renders the class for ${count} columns from the medium breakpoint`, () => {
      const { container } = render(<Columns count={count} />)

      const component = container.querySelector(':only-child')

      expect(component).toHaveClass(`ams-columns--count-${count}-medium`)
      expect(component).not.toHaveClass(`ams-columns--count-${count}`)
    })
  })

  it('renders a class per breakpoint for an object', () => {
    const { container } = render(<Columns count={{ narrow: 1, medium: 2, wide: 3 }} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-columns--count-1 ams-columns--count-2-medium ams-columns--count-3-wide')
  })

  it('passes additional props', () => {
    const { container } = render(<Columns data-test="data-test" id="id" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})
