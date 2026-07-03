/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { SkeletonList } from './SkeletonList'

describe('Skeleton.List', () => {
  it('renders', () => {
    const { container } = render(<SkeletonList />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<SkeletonList />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-skeleton__list')
  })

  it('renders an extra class name', () => {
    const { container } = render(<SkeletonList className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-skeleton__list extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<SkeletonList ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('renders three items by default', () => {
    const { container } = render(<SkeletonList />)

    expect(container.querySelectorAll('.ams-skeleton__list-item')).toHaveLength(3)
  })

  it('renders a marker and a line for each item', () => {
    const { container } = render(<SkeletonList lines={4} />)

    expect(container.querySelectorAll('.ams-skeleton__list-item')).toHaveLength(4)
    expect(container.querySelectorAll('.ams-skeleton__marker')).toHaveLength(4)
    expect(container.querySelectorAll('.ams-skeleton__line')).toHaveLength(4)
  })
})
