/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { SkeletonHeading } from './SkeletonHeading'

describe('Skeleton.Heading', () => {
  it('renders', () => {
    const { container } = render(<SkeletonHeading />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<SkeletonHeading />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-skeleton__heading')
  })

  it('renders an extra class name', () => {
    const { container } = render(<SkeletonHeading className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-skeleton__heading extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<SkeletonHeading ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('renders a single line by default', () => {
    const { container } = render(<SkeletonHeading />)

    expect(container.querySelectorAll('.ams-skeleton__line')).toHaveLength(1)
  })

  it('renders the requested number of lines', () => {
    const { container } = render(<SkeletonHeading lines={3} />)

    expect(container.querySelectorAll('.ams-skeleton__line')).toHaveLength(3)
  })
})
