/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { EmptyState } from './EmptyState'

describe('EmptyState', () => {
  it('renders', () => {
    const { container } = render(<EmptyState />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<EmptyState />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-empty-state')
  })

  it('renders an extra class name', () => {
    const { container } = render(<EmptyState className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-empty-state extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<EmptyState ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
