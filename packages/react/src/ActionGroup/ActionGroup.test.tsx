/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { ActionGroup } from './ActionGroup'

describe('ActionGroup', () => {
  it('renders', () => {
    render(<ActionGroup />)

    const component = screen.getByRole('group')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<ActionGroup />)

    const component = screen.getByRole('group')

    expect(component).toHaveClass('ams-action-group')
  })

  it('renders an extra class name', () => {
    render(<ActionGroup className="extra" />)

    const component = screen.getByRole('group')

    expect(component).toHaveClass('ams-action-group extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    render(<ActionGroup ref={ref} />)

    const component = screen.getByRole('group')

    expect(ref.current).toBe(component)
  })
})
