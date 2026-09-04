/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { DataSummary } from './DataSummary'

describe('DataSummaryValue', () => {
  it('renders', () => {
    render(<DataSummary.Value>Test</DataSummary.Value>)

    const component = screen.getByRole('definition')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<DataSummary.Value>Test</DataSummary.Value>)

    const component = screen.getByRole('definition')

    expect(component).toHaveClass('ams-data-summary__value')
  })

  it('renders an extra class name', () => {
    render(<DataSummary.Value className="extra">Test</DataSummary.Value>)

    const component = screen.getByRole('definition')

    expect(component).toHaveClass('ams-data-summary__value extra')
  })

  it('renders composite content', () => {
    render(
      <DataSummary.Value>
        <img alt="Een gemeentelijke brug" src="brug.jpg" />
        <a href="#">Meer over deze brug</a>
      </DataSummary.Value>,
    )

    expect(screen.getByRole('img', { name: 'Een gemeentelijke brug' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Meer over deze brug' })).toBeInTheDocument()
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    render(<DataSummary.Value ref={ref}>Test</DataSummary.Value>)

    const component = screen.getByRole('definition')

    expect(ref.current).toBe(component)
  })

  it('passes additional props', () => {
    render(<DataSummary.Value aria-hidden="false" data-test="data-test" id="id" />)

    const component = screen.getByRole('definition')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})
