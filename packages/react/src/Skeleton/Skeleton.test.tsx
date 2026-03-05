/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render } from '@testing-library/react'
import { createRef } from 'react'

import { Skeleton } from './Skeleton'

describe('Skeleton', () => {
  it('renders', () => {
    const { container } = render(<Skeleton />)
    const component = container.querySelector('.ams-skeleton')
    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Skeleton />)
    const component = container.querySelector('.ams-skeleton')
    expect(component).toHaveClass('ams-skeleton')
  })

  it('renders an extra class name', () => {
    const { container } = render(<Skeleton className="extra" />)
    const component = container.querySelector('.ams-skeleton')
    expect(component).toHaveClass('extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLSpanElement>()
    render(<Skeleton ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLSpanElement)
  })

  it('renders multiple skeletons when count > 1', () => {
    const { container } = render(<Skeleton count={3} />)
    expect(container.querySelectorAll('.ams-skeleton')).toHaveLength(3)
  })

  it('applies shape modifier', () => {
    const { container } = render(<Skeleton shape="circle" />)
    const component = container.querySelector('.ams-skeleton')
    expect(component).toHaveClass('ams-skeleton--circle')
  })

  it('disables animation when animation=false', () => {
    const { container } = render(<Skeleton animation={false} />)
    const component = container.querySelector('.ams-skeleton')
    expect(component).toHaveClass('ams-skeleton--no-animation')
  })
})
