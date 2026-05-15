/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { DialogHeader } from './DialogHeader'

describe('DialogHeader', () => {
  it('renders', () => {
    const { container } = render(<DialogHeader>Header content</DialogHeader>)

    const component = container.querySelector('header')

    expect(component).toBeInTheDocument()
    expect(component).toHaveTextContent('Header content')
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<DialogHeader />)

    const component = container.querySelector('header')

    expect(component).toHaveClass('ams-dialog__header')
  })

  it('renders an extra class name', () => {
    const { container } = render(<DialogHeader className="extra" />)

    const component = container.querySelector('header')

    expect(component).toHaveClass('ams-dialog__header extra')
  })

  it('renders children', () => {
    render(
      <DialogHeader>
        <span>Inside header</span>
      </DialogHeader>,
    )

    expect(screen.getByText('Inside header')).toBeInTheDocument()
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<DialogHeader ref={ref} />)

    expect(ref.current).toBe(container.querySelector('header'))
  })

  it('passes additional props', () => {
    const { container } = render(<DialogHeader aria-label="Header" data-test="data-test" id="id" />)

    const component = container.querySelector('header')

    expect(component).toHaveAttribute('aria-label', 'Header')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})
