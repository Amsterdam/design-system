/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { DataSummary } from './DataSummary'

describe('DataSummaryAction', () => {
  it('renders', () => {
    render(<DataSummary.Action>Test</DataSummary.Action>)

    const component = screen.getByRole('definition')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<DataSummary.Action>Test</DataSummary.Action>)

    const component = screen.getByRole('definition')

    expect(component).toHaveClass('ams-data-summary__action')
  })

  it('renders an extra class name', () => {
    render(<DataSummary.Action className="extra">Test</DataSummary.Action>)

    const component = screen.getByRole('definition')

    expect(component).toHaveClass('ams-data-summary__action extra')
  })

  it('renders any type of action', () => {
    render(
      <>
        <DataSummary.Action>
          <a href="#">Wijzigen</a>
        </DataSummary.Action>
        <DataSummary.Action>
          <button type="button">Verwijderen</button>
        </DataSummary.Action>
      </>,
    )

    expect(screen.getByRole('link', { name: 'Wijzigen' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Verwijderen' })).toBeInTheDocument()
  })

  it('distinguishes repeated actions with visually hidden text', () => {
    render(
      <>
        <DataSummary.Action>
          <a href="#">
            Wijzigen<span className="ams-visually-hidden"> geboortedatum</span>
          </a>
        </DataSummary.Action>
        <DataSummary.Action>
          <a href="#">
            Wijzigen<span className="ams-visually-hidden"> woonplaats</span>
          </a>
        </DataSummary.Action>
      </>,
    )

    expect(screen.getByRole('link', { name: 'Wijzigen geboortedatum' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Wijzigen woonplaats' })).toBeInTheDocument()
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    render(<DataSummary.Action ref={ref}>Test</DataSummary.Action>)

    const component = screen.getByRole('definition')

    expect(ref.current).toBe(component)
  })

  it('passes additional props', () => {
    render(<DataSummary.Action aria-hidden="false" data-test="data-test" id="id" />)

    const component = screen.getByRole('definition')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})
