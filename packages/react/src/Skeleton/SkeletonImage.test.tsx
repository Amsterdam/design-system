/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { SkeletonImage } from './SkeletonImage'

describe('Skeleton.Image', () => {
  it('renders', () => {
    const { container } = render(<SkeletonImage />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<SkeletonImage />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-skeleton__image')
  })

  it('renders an extra class name', () => {
    const { container } = render(<SkeletonImage className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-skeleton__image extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<SkeletonImage ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
