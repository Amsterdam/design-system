/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { DataList } from './DataList'

describe('DataListValue', () => {
  it('renders', () => {
    render(<DataList.Value>Test</DataList.Value>)

    const component = screen.getByRole('definition')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<DataList.Value>Test</DataList.Value>)

    const component = screen.getByRole('definition')

    expect(component).toHaveClass('ams-data-list__value')
  })

  it('renders an extra class name', () => {
    render(<DataList.Value className="extra">Test</DataList.Value>)

    const component = screen.getByRole('definition')

    expect(component).toHaveClass('ams-data-list__value extra')
  })

  it('renders composite content', () => {
    render(
      <DataList.Value>
        <img alt="Een gemeentelijke brug" src="brug.jpg" />
        <a href="#">Meer over deze brug</a>
      </DataList.Value>,
    )

    expect(screen.getByRole('img', { name: 'Een gemeentelijke brug' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Meer over deze brug' })).toBeInTheDocument()
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    render(<DataList.Value ref={ref}>Test</DataList.Value>)

    const component = screen.getByRole('definition')

    expect(ref.current).toBe(component)
  })

  it('passes additional props', () => {
    render(<DataList.Value aria-hidden="false" data-test="data-test" id="id" />)

    const component = screen.getByRole('definition')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})
