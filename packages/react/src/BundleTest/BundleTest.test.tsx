/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { BundleTest } from './BundleTest'

describe('BundleTest', () => {
  it('renders', () => {
    const { container } = render(<BundleTest />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<BundleTest />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-bundle-test')
  })

  it('renders an extra class name', () => {
    const { container } = render(<BundleTest className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-bundle-test extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<BundleTest ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
