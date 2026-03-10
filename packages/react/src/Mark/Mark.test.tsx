/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { Mark } from './Mark'

describe('Mark', () => {
  it('renders', () => {
    const { container } = render(<Mark />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Mark />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-mark')
  })

  it('renders an extra class name', () => {
    const { container } = render(<Mark className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-mark extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<Mark ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('passes additional props', () => {
    const { container } = render(<Mark data-test="data-test" id="id" />)
    const component = container.querySelector(':only-child')

    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})
