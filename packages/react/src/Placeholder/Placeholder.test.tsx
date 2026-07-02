/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { Placeholder } from './Placeholder'

describe('Placeholder', () => {
  it('renders', () => {
    const { container } = render(<Placeholder />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Placeholder />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-placeholder')
  })

  it('renders an extra class name', () => {
    const { container } = render(<Placeholder className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-placeholder extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<Placeholder ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
