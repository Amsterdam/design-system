/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render } from '@testing-library/react'
import { createRef } from 'react'
import { CardImage } from './CardImage'
import '@testing-library/jest-dom'

describe('Card Image', () => {
  it('renders', () => {
    const { container } = render(<CardImage alt="" />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<CardImage alt="" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-card__image')
  })

  it('renders an extra class name', () => {
    const { container } = render(<CardImage alt="" className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-card__image extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLImageElement>()

    const { container } = render(<CardImage alt="" ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})
