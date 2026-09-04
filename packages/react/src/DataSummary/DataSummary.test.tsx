/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { DataSummary, dataSummaryOrientations } from './DataSummary'

describe('DataSummary', () => {
  it('renders', () => {
    const { container } = render(<DataSummary />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<DataSummary />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-data-summary')
  })

  it('renders an extra class name', () => {
    const { container } = render(<DataSummary className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-data-summary ams-data-summary--horizontal extra')
  })

  it('renders a description list element', () => {
    const { container } = render(<DataSummary />)

    const component = container.querySelector(':only-child')

    expect(component?.tagName).toBe('DL')
  })

  it('renders the class name for the horizontal orientation by default', () => {
    const { container } = render(<DataSummary />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-data-summary--horizontal')
  })

  dataSummaryOrientations.map((orientation) =>
    it(`renders the class name for the ‘${orientation}’ orientation`, () => {
      const { container } = render(<DataSummary orientation={orientation} />)

      const component = container.querySelector(':only-child')

      expect(component).toHaveClass(`ams-data-summary--${orientation}`)
    }),
  )

  it('renders its items, labels, values and actions', () => {
    render(
      <DataSummary>
        <DataSummary.Item>
          <DataSummary.Label>Geboortedatum</DataSummary.Label>
          <DataSummary.Value>1 januari 1990</DataSummary.Value>
          <DataSummary.Action>
            <a href="#">Wijzigen</a>
          </DataSummary.Action>
        </DataSummary.Item>
      </DataSummary>,
    )

    expect(screen.getByRole('term')).toHaveTextContent('Geboortedatum')
    expect(screen.getByText('1 januari 1990')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Wijzigen' })).toBeInTheDocument()
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDListElement>()

    const { container } = render(<DataSummary ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('passes additional props', () => {
    const { container } = render(<DataSummary aria-hidden="false" data-test="data-test" id="id" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})
