/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { CardContent } from './CardContent'

describe('CardContent', () => {
  it('renders', () => {
    const { container } = render(<CardContent />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<CardContent />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-card__content')
  })

  it('renders an extra class name', () => {
    const { container } = render(<CardContent className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-card__content extra')
  })

  it('renders its children', () => {
    const { getByText } = render(<CardContent>content</CardContent>)

    expect(getByText('content')).toBeInTheDocument()
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<CardContent ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('passes additional props', () => {
    const { container } = render(<CardContent aria-hidden={false} data-test="data-test" id="id" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})
