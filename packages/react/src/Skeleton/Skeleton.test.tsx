/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { Skeleton, skeletonAppearances } from './Skeleton'

describe('Skeleton', () => {
  it('renders', () => {
    const { container } = render(<Skeleton />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Skeleton />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-skeleton')
  })

  it('renders an extra class name', () => {
    const { container } = render(<Skeleton className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-skeleton extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<Skeleton ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('is hidden from assistive technology', () => {
    const { container } = render(<Skeleton />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders the paragraph appearance with 3 lines by default', () => {
    const { container } = render(<Skeleton />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-skeleton--paragraph')
    expect(container.querySelectorAll('.ams-skeleton__line')).toHaveLength(3)
  })

  it('renders a class name for each appearance', () => {
    skeletonAppearances.forEach((appearance) => {
      const { container, unmount } = render(<Skeleton appearance={appearance} />)

      const component = container.querySelector(':only-child')

      expect(component).toHaveClass(`ams-skeleton--${appearance}`)

      unmount()
    })
  })

  it('renders the number of lines for a paragraph', () => {
    const { container } = render(<Skeleton lines={5} />)

    expect(container.querySelectorAll('.ams-skeleton__line')).toHaveLength(5)
  })

  it('renders a single heading block for a heading', () => {
    const { container } = render(<Skeleton appearance="heading" />)

    expect(container.querySelectorAll('.ams-skeleton__heading')).toHaveLength(1)
    expect(container.querySelectorAll('.ams-skeleton__line')).toHaveLength(0)
  })

  it('renders an image, a heading, and the number of lines for a card', () => {
    const { container } = render(<Skeleton appearance="card" lines={2} />)

    expect(container.querySelectorAll('.ams-skeleton__image')).toHaveLength(1)
    expect(container.querySelectorAll('.ams-skeleton__heading')).toHaveLength(1)
    expect(container.querySelectorAll('.ams-skeleton__line')).toHaveLength(2)
  })

  it('renders a marker and a line for each list item', () => {
    const { container } = render(<Skeleton appearance="list" lines={4} />)

    expect(container.querySelectorAll('.ams-skeleton__list-item')).toHaveLength(4)
    expect(container.querySelectorAll('.ams-skeleton__marker')).toHaveLength(4)
    expect(container.querySelectorAll('.ams-skeleton__line')).toHaveLength(4)
  })

  it('renders a header row and the number of rows and columns for a table', () => {
    const { container } = render(<Skeleton appearance="table" columns={4} rows={2} />)

    expect(container.querySelectorAll('.ams-skeleton__table-row')).toHaveLength(3)
    expect(container.querySelectorAll('.ams-skeleton__table-row--header')).toHaveLength(1)
    expect(container.querySelectorAll('.ams-skeleton__table-cell')).toHaveLength(12)
  })
})
