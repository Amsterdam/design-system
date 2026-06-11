/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { fireEvent, render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { Calendar } from './Calendar'

const june2026 = new Date(2026, 5, 1)

describe('Calendar', () => {
  it('renders', () => {
    render(<Calendar linkTemplate={() => undefined} />)

    const component = screen.getByRole('navigation')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<Calendar linkTemplate={() => undefined} />)

    expect(screen.getByRole('navigation')).toHaveClass('ams-calendar')
  })

  it('renders an extra class name', () => {
    render(<Calendar className="extra" linkTemplate={() => undefined} />)

    expect(screen.getByRole('navigation')).toHaveClass('ams-calendar extra')
  })

  it('renders the default accessible name', () => {
    render(<Calendar linkTemplate={() => undefined} />)

    expect(screen.getByRole('navigation', { name: 'Kalender' })).toBeInTheDocument()
  })

  it('renders a custom accessible name', () => {
    render(<Calendar accessibleName="Activiteiten" linkTemplate={() => undefined} />)

    expect(screen.getByRole('navigation', { name: 'Activiteiten' })).toBeInTheDocument()
  })

  it('sets a custom id for the accessible name', () => {
    render(<Calendar accessibleNameId="custom-id" linkTemplate={() => undefined} />)

    expect(screen.getByRole('navigation')).toHaveAttribute('aria-labelledby', 'custom-id')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<Calendar linkTemplate={() => undefined} ref={ref} />)

    expect(ref.current).toBe(container.querySelector(':only-child'))
  })

  it('shows the default month', () => {
    render(<Calendar defaultMonth={june2026} linkTemplate={() => undefined} />)

    expect(screen.getByText('juni 2026')).toBeInTheDocument()
  })

  it('navigates to the next month', () => {
    render(<Calendar defaultMonth={june2026} linkTemplate={() => undefined} />)

    fireEvent.click(screen.getByRole('button', { name: 'Volgende maand' }))

    expect(screen.getByText('juli 2026')).toBeInTheDocument()
  })

  it('navigates to the previous year', () => {
    render(<Calendar defaultMonth={june2026} linkTemplate={() => undefined} />)

    fireEvent.click(screen.getByRole('button', { name: 'Vorig jaar' }))

    expect(screen.getByText('juni 2025')).toBeInTheDocument()
  })

  it('renders dates as links built by linkTemplate', () => {
    render(<Calendar defaultMonth={june2026} linkTemplate={(date) => `/day/${date.getDate()}`} />)

    expect(screen.getByRole('link', { name: 'maandag 15 juni 2026' })).toHaveAttribute('href', '/day/15')
  })

  it('renders without a linkTemplate', () => {
    render(<Calendar defaultMonth={june2026} />)

    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })

  it('passes additional props', () => {
    render(<Calendar data-test="data-test" id="id" linkTemplate={() => undefined} />)

    const component = screen.getByRole('navigation')

    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})
