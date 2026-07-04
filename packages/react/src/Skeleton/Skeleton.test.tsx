/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { Skeleton } from './Skeleton'

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

  it('is hidden from assistive technologies by default', () => {
    const { container } = render(<Skeleton />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveAttribute('aria-hidden', 'true')
  })

  it('composes its subcomponents', () => {
    const { container } = render(
      <Skeleton>
        <Skeleton.Image />
        <Skeleton.Heading />
        <Skeleton.Paragraph />
        <Skeleton.List />
        <Skeleton.Table />
      </Skeleton>,
    )

    expect(container.querySelector('.ams-skeleton__image')).toBeInTheDocument()
    expect(container.querySelector('.ams-skeleton__heading')).toBeInTheDocument()
    expect(container.querySelector('.ams-skeleton__paragraph')).toBeInTheDocument()
    expect(container.querySelector('.ams-skeleton__list')).toBeInTheDocument()
    expect(container.querySelector('.ams-skeleton__table')).toBeInTheDocument()
  })
})
