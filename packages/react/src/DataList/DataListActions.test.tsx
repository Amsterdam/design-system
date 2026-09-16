/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { DataList } from './DataList'

describe('DataListActions', () => {
  it('renders', () => {
    render(<DataList.Actions>Test</DataList.Actions>)

    const component = screen.getByRole('definition')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<DataList.Actions>Test</DataList.Actions>)

    const component = screen.getByRole('definition')

    expect(component).toHaveClass('ams-data-list__actions')
  })

  it('renders an extra class name', () => {
    render(<DataList.Actions className="extra">Test</DataList.Actions>)

    const component = screen.getByRole('definition')

    expect(component).toHaveClass('ams-data-list__actions extra')
  })

  it('renders any type of action', () => {
    render(
      <>
        <DataList.Actions>
          <a href="#">Wijzigen</a>
        </DataList.Actions>
        <DataList.Actions>
          <button type="button">Verwijderen</button>
        </DataList.Actions>
      </>,
    )

    expect(screen.getByRole('link', { name: 'Wijzigen' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Verwijderen' })).toBeInTheDocument()
  })

  it('renders more than one action', () => {
    render(
      <DataList.Actions>
        <a href="#">Wijzigen</a>
        <a href="#">Verwijderen</a>
      </DataList.Actions>,
    )

    const component = screen.getByRole('definition')

    expect(component.children).toHaveLength(2)
    expect(screen.getByRole('link', { name: 'Wijzigen' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Verwijderen' })).toBeInTheDocument()
  })

  it('distinguishes repeated actions with visually hidden text', () => {
    render(
      <>
        <DataList.Actions>
          <a href="#">
            Wijzigen<span className="ams-visually-hidden"> geboortedatum</span>
          </a>
        </DataList.Actions>
        <DataList.Actions>
          <a href="#">
            Wijzigen<span className="ams-visually-hidden"> woonplaats</span>
          </a>
        </DataList.Actions>
      </>,
    )

    expect(screen.getByRole('link', { name: 'Wijzigen geboortedatum' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Wijzigen woonplaats' })).toBeInTheDocument()
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    render(<DataList.Actions ref={ref}>Test</DataList.Actions>)

    const component = screen.getByRole('definition')

    expect(ref.current).toBe(component)
  })

  it('passes additional props', () => {
    render(<DataList.Actions aria-hidden="false" data-test="data-test" id="id" />)

    const component = screen.getByRole('definition')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})
