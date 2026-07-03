/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { SkeletonTable } from './SkeletonTable'

describe('Skeleton.Table', () => {
  it('renders', () => {
    const { container } = render(<SkeletonTable />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<SkeletonTable />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-skeleton__table')
  })

  it('renders an extra class name', () => {
    const { container } = render(<SkeletonTable className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-skeleton__table extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<SkeletonTable ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('renders a header row plus the requested rows and columns', () => {
    const { container } = render(<SkeletonTable columns={4} rows={2} />)

    expect(container.querySelectorAll('.ams-skeleton__table-row')).toHaveLength(3)
    expect(container.querySelectorAll('.ams-skeleton__table-row--header')).toHaveLength(1)
    expect(container.querySelectorAll('.ams-skeleton__table-cell')).toHaveLength(12)
  })
})
