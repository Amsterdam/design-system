/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { DataListHeader } from './DataListHeader'

describe('DataListHeader', () => {
  it('renders', () => {
    const { container } = render(<DataListHeader />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<DataListHeader />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-data-list-header')
  })

  it('renders an extra class name', () => {
    const { container } = render(<DataListHeader className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-data-list-header extra')
  })

  it('renders a heading and an action', () => {
    render(
      <DataListHeader>
        <h2>Persoon 1</h2>
        <button type="button">Verwijderen</button>
      </DataListHeader>,
    )

    expect(screen.getByRole('heading', { level: 2, name: 'Persoon 1' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Verwijderen' })).toBeInTheDocument()
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<DataListHeader ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('passes additional props', () => {
    const { container } = render(<DataListHeader aria-hidden="false" data-test="data-test" id="id" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})
