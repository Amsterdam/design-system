/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { ComboBox } from './ComboBox'

describe('ComboBox', () => {
  it('renders', () => {
    const { container } = render(<ComboBox />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<ComboBox />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-combo-box')
  })

  it('renders an extra class name', () => {
    const { container } = render(<ComboBox className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-combo-box extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<ComboBox ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
