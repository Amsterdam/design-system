/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { SkeletonParagraph } from './SkeletonParagraph'

describe('Skeleton.Paragraph', () => {
  it('renders', () => {
    const { container } = render(<SkeletonParagraph />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<SkeletonParagraph />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-skeleton__paragraph')
  })

  it('renders an extra class name', () => {
    const { container } = render(<SkeletonParagraph className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-skeleton__paragraph extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<SkeletonParagraph ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('renders three lines by default', () => {
    const { container } = render(<SkeletonParagraph />)

    expect(container.querySelectorAll('.ams-skeleton__line')).toHaveLength(3)
  })

  it('renders the requested number of lines', () => {
    const { container } = render(<SkeletonParagraph lines={5} />)

    expect(container.querySelectorAll('.ams-skeleton__line')).toHaveLength(5)
  })
})
