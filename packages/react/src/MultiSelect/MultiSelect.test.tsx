/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { MultiSelect } from './MultiSelect'

describe('MultiSelect', () => {
  it('renders', () => {
    const { container } = render(<MultiSelect />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<MultiSelect />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-multi-select')
  })

  it('renders an extra class name', () => {
    const { container } = render(<MultiSelect className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-multi-select extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<MultiSelect ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
