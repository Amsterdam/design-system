/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { DataSummary } from './DataSummary'

describe('DataSummaryLabel', () => {
  it('renders', () => {
    render(<DataSummary.Label>Test</DataSummary.Label>)

    const component = screen.getByRole('term')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<DataSummary.Label>Test</DataSummary.Label>)

    const component = screen.getByRole('term')

    expect(component).toHaveClass('ams-data-summary__label')
  })

  it('renders an extra class name', () => {
    render(<DataSummary.Label className="extra">Test</DataSummary.Label>)

    const component = screen.getByRole('term')

    expect(component).toHaveClass('ams-data-summary__label extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    render(<DataSummary.Label ref={ref}>Test</DataSummary.Label>)

    const component = screen.getByRole('term')

    expect(ref.current).toBe(component)
  })

  it('passes additional props', () => {
    render(<DataSummary.Label aria-hidden="false" data-test="data-test" id="id" />)

    const component = screen.getByRole('term')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})
